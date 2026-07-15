import type { BeyondPaperV9 } from "../schemas/bypp.v9.schema";
import type { BeyondPaperV10 } from "../schemas/bypp.v10.schema";
import type { Migrator } from "./types";

/**
 * v9 → v10 (upgrade): non-lossy.
 *
 * v10 only ADDS an optional `dimensions` field to image-bearing models
 * (sheets, entities, scene maps, scene backgrounds). Every v9 document is
 * already a valid v10 one — it just omits the new field — so the upgrade is a
 * pure version bump.
 */
export const v9ToV10: Migrator<BeyondPaperV9, BeyondPaperV10> = (v9) => ({
  ...v9,
  version: 10,
});
