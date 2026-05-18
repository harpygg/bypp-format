import type { BeyondPaperV1 } from "../schemas/bypp.v1.schema";
import type { BeyondPaperV2 } from "../schemas/bypp.v2.schema";
import type { Migrator } from "./types";

/**
 * v1 → v2: introduces `sheets[]` and `dataTables[]` at the top level, plus
 * the `dataTableRef` / `dataTableLookup` variable variants (added to the
 * union in v2).
 *
 * A v1 bundle never carries any of those — default both new arrays to empty
 * and pass everything else through. The TS types make sure we cover every
 * required v2 field; the compiler will complain if a future v3 adds another
 * required top-level field and we forget to handle it in this step's
 * downstream migration.
 */
export const v1ToV2: Migrator<BeyondPaperV1, BeyondPaperV2> = (v1) => ({
  ...v1,
  version: 2,
  sheets: [],
  dataTables: [],
});
