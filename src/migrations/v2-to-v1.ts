import type { BeyondPaperV1 } from "../schemas/bypp.v1.schema";
import type { BeyondPaperV2 } from "../schemas/bypp.v2.schema";
import type { VariableV1 } from "../models/variable.v1.schema";
import type { Migrator } from "./types";

/**
 * v2 → v1 (downgrade): strips everything that didn't exist in v1.
 *
 * **Lossy by design.** Callers exporting to v1 lose:
 *  - The entire `sheets[]` array (didn't exist).
 *  - The entire `dataTables[]` array (didn't exist).
 *  - Any variable of type `dataTableRef` / `dataTableLookup` (those variants
 *    didn't exist in v1's discriminated union).
 *
 * Surviving variables are valid v1 variants by construction (the filter
 * narrows to v1's 6 supported types).
 */
export const v2ToV1: Migrator<BeyondPaperV2, BeyondPaperV1> = (v2) => {
  const { sheets, dataTables, variables, ...rest } = v2;
  // `sheets` and `dataTables` are intentionally discarded; they have no
  // equivalent in v1. The destructure documents the loss at source.
  void sheets;
  void dataTables;

  return {
    ...rest,
    version: 1,
    variables: variables.filter(
      (v): v is VariableV1 =>
        v.type !== "dataTableRef" && v.type !== "dataTableLookup",
    ),
  };
};
