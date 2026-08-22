import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { BYPP_FORMAT_VERSION } from "./version";
import { migrate, SCHEMA_BY_VERSION } from "./migrations";

/**
 * One canonical `.bypp` per format version, all derived from a single source.
 *
 * `bypp.v16.example.bypp` is a real Harpy export — the only hand-managed file.
 * Every older version is GENERATED from it by running the down-migration
 * chain, so the set can never drift: an example that disagrees with its own
 * migrator is a broken migrator, and this test says so.
 *
 * `pnpm examples:emit` rewrites them; `pnpm test` asserts they match.
 */
const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = resolve(REPO_ROOT, "examples");
const SOURCE = resolve(DIR, `bypp.v${BYPP_FORMAT_VERSION}.example.bypp`);

const fileFor = (version: number) =>
  resolve(DIR, `bypp.v${version}.example.bypp`);

const read = (path: string): unknown => JSON.parse(readFileSync(path, "utf8"));

const serialize = (doc: unknown) => `${JSON.stringify(doc, null, 2)}\n`;

/**
 * How many versions ship a downloadable file: the current one plus the two
 * before it. A rolling window, so the directory doesn't grow by 160 kB every
 * release — and since the files are REGENERATED from the source rather than
 * frozen, an unbounded set would also mean a new git blob per file on every
 * change to the example.
 *
 * Two versions of slack covers the realistic case: a third-party reader in
 * another language, one or two releases behind, that can't run `migrate()` to
 * produce its own fixture. Anyone on the JS package needs no file at all.
 *
 * Dropping a file loses nothing testable — the chain below is still walked to
 * v1 in memory.
 */
const SHIPPED_WINDOW = 3;
const OLDEST_SHIPPED = Math.max(1, BYPP_FORMAT_VERSION - SHIPPED_WINDOW + 1);
const DERIVED = Array.from(
  { length: BYPP_FORMAT_VERSION - OLDEST_SHIPPED },
  (_, i) => OLDEST_SHIPPED + i,
);
const ALL_OLDER = Array.from(
  { length: BYPP_FORMAT_VERSION - 1 },
  (_, i) => i + 1,
);

describe("versioned examples", () => {
  const source = read(SOURCE);

  it("the source example parses against the current version", () => {
    const result = SCHEMA_BY_VERSION[BYPP_FORMAT_VERSION].safeParse(source);
    if (!result.success) console.error(result.error.format());
    expect(result.success).toBe(true);
  });

  it.each(DERIVED)("v%i is the down-migration of the source", (version) => {
    // Deep-copied per case: migrators are free to mutate their input, and a
    // shared object would make the cases order-dependent.
    const expected = serialize(
      migrate(JSON.parse(JSON.stringify(source)), version),
    );

    if (process.env.UPDATE_EXAMPLES) {
      writeFileSync(fileFor(version), expected, "utf8");
    }

    expect(readFileSync(fileFor(version), "utf8")).toBe(expected);
  });

  it.each(DERIVED)("v%i parses against its own frozen schema", (version) => {
    const result = SCHEMA_BY_VERSION[version].safeParse(read(fileFor(version)));
    if (!result.success) console.error(result.error.format());
    expect(result.success).toBe(true);
  });

  // A field must be absent from every example predating the version that
  // introduced it, rather than sit in a document whose schema can't describe
  // it. Append a line here whenever a version adds one — the examples at or
  // above `since` legitimately keep it, older ones must be silent.
  //
  // `on` narrows the search to the TOP level of the entries of one content
  // array. Use it when the key is not unique to the version that introduced
  // it: `icon` has been carried by a choice option since v1, and so has a
  // roll's `awesome` visual — both NESTED inside a variable — so a
  // document-wide recursive search would flag every pre-v16 example for a
  // field they are entitled to. What v16 introduced is an icon ON the
  // variable itself, and that is all the scoped check looks at.
  const FIELDS_INTRODUCED_AT: {
    field: string;
    since: number;
    on?: string;
  }[] = [
    { field: "credit", since: 13 },
    { field: "image", since: 14 },
    { field: "icon", since: 16, on: "variables" },
  ];

  it.each(DERIVED)("v%i carries no field newer than itself", (version) => {
    const doc = read(fileFor(version));
    for (const { field, since, on } of FIELDS_INTRODUCED_AT) {
      if (version < since) {
        const carries = on
          ? hasOwnKey((doc as Record<string, unknown>)[on], field)
          : hasKey(doc, field);
        expect(
          carries,
          `v${version} carries \`${field}\`${on ? ` on \`${on}\`` : ""}, introduced in v${since}`,
        ).toBe(false);
      }
    }
  });

  // Without this, a file that falls out of the window as a new version ships
  // just sits in the directory: never regenerated, never validated, quietly
  // describing a document nobody produces any more.
  it("ships exactly the windowed versions, no stale leftovers", () => {
    const expected = [...DERIVED, BYPP_FORMAT_VERSION]
      .map((v) => `bypp.v${v}.example.bypp`)
      .sort();
    const actual = readdirSync(DIR)
      .filter((name) => name.endsWith(".bypp"))
      .sort();

    expect(actual).toEqual(expected);
  });

  // No file shipped for these — they fell out of the window, or predate it —
  // but the migrators exist and are worth exercising on a real document rather
  // than only on the hand-made fixtures in `migrations/migrate.test.ts`.
  it.each(ALL_OLDER)("migrates down to v%i and still validates", (version) => {
    const out = migrate(JSON.parse(JSON.stringify(source)), version);

    const result = SCHEMA_BY_VERSION[version].safeParse(out);
    if (!result.success) console.error(result.error.format());
    expect(result.success).toBe(true);

    // Content survives the whole descent: a migrator that silently emptied a
    // category would still validate, since every array may legally be empty.
    expect((out as { entities: unknown[] }).entities.length).toBe(
      (source as { entities: unknown[] }).entities.length,
    );
    expect((out as { chunks: unknown[] }).chunks.length).toBe(
      (source as { chunks: unknown[] }).chunks.length,
    );
  });
});

// Presence of a KEY on the entries of one content array, and no deeper. The
// recursive `hasKey` below cannot answer this: a key that also exists on a
// nested shape would match there and say nothing about the entry itself.
function hasOwnKey(entries: unknown, key: string): boolean {
  if (!Array.isArray(entries)) {
    return false;
  }
  return entries.some(
    (entry) => typeof entry === "object" && entry !== null && key in entry,
  );
}

// Presence of a KEY anywhere in the document. A substring search on the
// serialized JSON would confuse keys with values — `"image"` is also an asset
// `type`, and every example carries one.
function hasKey(value: unknown, key: string): boolean {
  if (Array.isArray(value)) {
    return value.some((item) => hasKey(item, key));
  }
  if (typeof value === "object" && value !== null) {
    return (
      key in value || Object.values(value).some((item) => hasKey(item, key))
    );
  }
  return false;
}
