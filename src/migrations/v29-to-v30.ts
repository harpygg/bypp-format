import type { BeyondPaperV29 } from "../schemas/bypp.v29.schema";
import type { BeyondPaperV30 } from "../schemas/bypp.v30.schema";
import type { Migrator } from "./types";

/**
 * v29 → v30 (upgrade). **Non-lossy.**
 *
 * v30 adds `entitySubtypes[]`, an entity's `subtypeUid` and a dataset's
 * `targetsSubtypes`; a v29 document has none of them. Its entities sit on
 * their type, its datasets target types and tags only.
 */
export const v29ToV30: Migrator<BeyondPaperV29, BeyondPaperV30> = (v29) => ({
  ...v29,
  version: 30,
  entitySubtypes: [],
  datasets: v29.datasets.map((dataset) => ({
    ...dataset,
    targetsSubtypes: [],
  })),
});
