import type { z } from "zod";
import { BeyondPaperV1Schema } from "../schemas/bypp.v1.schema";
import { BeyondPaperV2Schema } from "../schemas/bypp.v2.schema";
import { BeyondPaperV3Schema } from "../schemas/bypp.v3.schema";
import { BeyondPaperV4Schema } from "../schemas/bypp.v4.schema";
import { BeyondPaperV5Schema } from "../schemas/bypp.v5.schema";
import { BeyondPaperV6Schema } from "../schemas/bypp.v6.schema";
import { BeyondPaperV7Schema } from "../schemas/bypp.v7.schema";
import { BeyondPaperV8Schema } from "../schemas/bypp.v8.schema";
import { BeyondPaperV9Schema } from "../schemas/bypp.v9.schema";
import { BeyondPaperV10Schema } from "../schemas/bypp.v10.schema";
import { BYPP_FORMAT_VERSION } from "../version";
import type { Migrator } from "./types";
import { v1ToV2 } from "./v1-to-v2";
import { v2ToV1 } from "./v2-to-v1";
import { v2ToV3 } from "./v2-to-v3";
import { v3ToV2 } from "./v3-to-v2";
import { v3ToV4 } from "./v3-to-v4";
import { v4ToV3 } from "./v4-to-v3";
import { v4ToV5 } from "./v4-to-v5";
import { v5ToV4 } from "./v5-to-v4";
import { v5ToV6 } from "./v5-to-v6";
import { v6ToV5 } from "./v6-to-v5";
import { v6ToV7 } from "./v6-to-v7";
import { v7ToV6 } from "./v7-to-v6";
import { v7ToV8 } from "./v7-to-v8";
import { v8ToV7 } from "./v8-to-v7";
import { v8ToV9 } from "./v8-to-v9";
import { v9ToV8 } from "./v9-to-v8";
import { v9ToV10 } from "./v9-to-v10";
import { v10ToV9 } from "./v10-to-v9";

// The registry holds heterogeneous migrators (each with its own typed input
// and output). Function parameters are contravariant, so `Migrator<V1, V2>`
// is NOT a subtype of `Migrator<unknown, unknown>`. We widen the input to
// `any` for storage — runtime safety is guaranteed by the validation steps
// in `migrate()` below, which parse the input against its source version's
// schema before handing it to the migrator, and the output against the
// target version's schema after.
type MigrationEntry = (raw: any) => unknown;

/**
 * Forward migrations (upgrades). `MIGRATIONS[N]` migrates a bundle from
 * version N to version N+1. Each forward step typically adds capability;
 * the migrator is non-lossy by construction.
 *
 * To add a new upgrade step:
 *   1. Create `vN-to-v(N+1).ts` exporting a typed `Migrator<BeyondPaperVN, BeyondPaperV(N+1)>`.
 *   2. Register it here under `[N]`.
 *   3. Register the new version's schema in `SCHEMA_BY_VERSION`.
 *   4. Add a matching down migration under `DOWN_MIGRATIONS[N+1]`.
 *   5. Bump `BYPP_FORMAT_VERSION` in `version.ts`.
 *
 * Forward migrations must never be removed once shipped — bundles in the
 * wild rely on them.
 */
export const MIGRATIONS: Readonly<Record<number, MigrationEntry>> = {
  1: v1ToV2,
  2: v2ToV3,
  3: v3ToV4,
  4: v4ToV5,
  5: v5ToV6,
  6: v6ToV7,
  7: v7ToV8,
  8: v8ToV9,
  9: v9ToV10,
};

/**
 * Backward migrations (downgrades). `DOWN_MIGRATIONS[N]` migrates a bundle
 * from version N to version N-1.
 *
 * **Lossy by construction**: anything introduced at version N is stripped
 * when going back to N-1. Used by producers who want to emit older formats
 * for compatibility with readers stuck on earlier versions of `bypp-format`.
 *
 * Each downgrade step is the symmetric counterpart of the matching forward
 * migration. The chain composes: `migrate(rawV5, 1)` walks v5 → v4 → … → v1
 * through `DOWN_MIGRATIONS[5]`, `[4]`, `[3]`, `[2]`.
 *
 * Like forward migrations, these must never be removed once shipped.
 */
export const DOWN_MIGRATIONS: Readonly<Record<number, MigrationEntry>> = {
  2: v2ToV1,
  3: v3ToV2,
  4: v4ToV3,
  5: v5ToV4,
  6: v6ToV5,
  7: v7ToV6,
  8: v8ToV7,
  9: v9ToV8,
  10: v10ToV9,
};

/**
 * Registry of frozen per-version schemas, keyed by their version number.
 * Used by `migrate()` to:
 *  - pre-validate the input against its source version's schema (early,
 *    precise errors pointing at the offending field in the original file)
 *  - validate the output of every step against the target version's schema
 *    (catches broken migrators).
 */
export const SCHEMA_BY_VERSION: Readonly<Record<number, z.ZodTypeAny>> = {
  1: BeyondPaperV1Schema,
  2: BeyondPaperV2Schema,
  3: BeyondPaperV3Schema,
  4: BeyondPaperV4Schema,
  5: BeyondPaperV5Schema,
  6: BeyondPaperV6Schema,
  7: BeyondPaperV7Schema,
  8: BeyondPaperV8Schema,
  9: BeyondPaperV9Schema,
  10: BeyondPaperV10Schema,
};

/**
 * Walk a bundle from its current `version` to `targetVersion`, in either
 * direction.
 *
 * - **Upgrade** (`targetVersion > current`): applies `MIGRATIONS[current]`
 *   step by step. Non-lossy.
 * - **Downgrade** (`targetVersion < current`): applies
 *   `DOWN_MIGRATIONS[current]` step by step. Lossy — features introduced
 *   between the two versions are stripped.
 * - **No-op** (`targetVersion === current`): just pre-validates against the
 *   source schema and returns.
 *
 * The output is `unknown`; the caller typically does
 * `SCHEMA_BY_VERSION[targetVersion].parse(migrate(raw, targetVersion))` to
 * recover the typed bundle.
 *
 * Throws if:
 *  - `raw` is not an object or lacks a numeric `version` field
 *  - a step is missing in the chain (e.g. `DOWN_MIGRATIONS[7]` missing)
 *  - the input doesn't conform to its claimed source version's schema
 *  - an intermediate output fails its target version's schema validation
 *  - a migrator forgets to set `version` correctly on its output
 */
export const migrate = (
  raw: unknown,
  targetVersion: number = BYPP_FORMAT_VERSION,
): unknown => {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("migrate: input is not an object");
  }
  if (
    !("version" in raw) ||
    typeof (raw as { version: unknown }).version !== "number"
  ) {
    throw new Error("migrate: input is missing a numeric `version` field");
  }

  let current: unknown = raw;
  let currentVersion = (raw as { version: number }).version;

  // Pre-validate the input against its source version's schema. Failure
  // here means the file claims to be vN but doesn't actually conform — we
  // surface the offending field BEFORE running any migrator.
  const sourceSchema = SCHEMA_BY_VERSION[currentVersion];
  if (sourceSchema) {
    current = parseOrThrow(sourceSchema, current, currentVersion, "input");
  }

  // Upgrade direction
  while (currentVersion < targetVersion) {
    const step = MIGRATIONS[currentVersion];
    if (!step) {
      throw new Error(
        `migrate: no upgrade registered from v${currentVersion} to v${
          currentVersion + 1
        }`,
      );
    }
    current = step(current);
    currentVersion++;
    assertVersionBumped(current, currentVersion);
    current = validateStep(current, currentVersion);
  }

  // Downgrade direction
  while (currentVersion > targetVersion) {
    const step = DOWN_MIGRATIONS[currentVersion];
    if (!step) {
      throw new Error(
        `migrate: no downgrade registered from v${currentVersion} to v${
          currentVersion - 1
        }`,
      );
    }
    current = step(current);
    currentVersion--;
    assertVersionBumped(current, currentVersion);
    current = validateStep(current, currentVersion);
  }

  return current;
};

// ─── Internals ────────────────────────────────────────────────────

const parseOrThrow = (
  schema: z.ZodTypeAny,
  value: unknown,
  version: number,
  label: "input" | "step output",
): unknown => {
  const result = schema.safeParse(value);
  if (!result.success) {
    const issues = result.error.issues
      .map((i) => `  ${i.path.join(".")}: ${i.message}`)
      .join("\n");
    const prefix =
      label === "input"
        ? `migrate: input does not conform to v${version} schema`
        : `migrate: step output for v${version} failed validation`;
    throw new Error(`${prefix}:\n${issues}`);
  }
  return result.data;
};

const assertVersionBumped = (current: unknown, expected: number): void => {
  const observed =
    typeof current === "object" &&
    current !== null &&
    "version" in current &&
    typeof (current as { version: unknown }).version === "number"
      ? (current as { version: number }).version
      : null;

  if (observed !== expected) {
    throw new Error(
      `migrate: step did not set output.version to v${expected} (got ${observed})`,
    );
  }
};

const validateStep = (current: unknown, version: number): unknown => {
  const schema = SCHEMA_BY_VERSION[version];
  if (!schema) {
    return current;
  }
  return parseOrThrow(schema, current, version, "step output");
};

export type { Migrator } from "./types";
