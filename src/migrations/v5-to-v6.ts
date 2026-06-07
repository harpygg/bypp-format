import type { BeyondPaperV5 } from "../schemas/bypp.v5.schema";
import type { BeyondPaperV6 } from "../schemas/bypp.v6.schema";
import type { Migrator } from "./types";

/**
 * v5 → v6 (upgrade): non-lossy.
 *
 * v6 only widens the variable union to allow the new
 * `dataTableDirectLookup` variant. Every v5 variable is already a valid v6
 * variable, and no other sub-schema changed — so the migration is a pure
 * version bump.
 */
export const v5ToV6: Migrator<BeyondPaperV5, BeyondPaperV6> = (v5) => ({
  ...v5,
  version: 6,
});
