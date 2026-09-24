import type { BeyondPaperV27 } from "../schemas/bypp.v27.schema";
import type { BeyondPaperV28 } from "../schemas/bypp.v28.schema";
import type { Migrator } from "./types";

/**
 * v27 → v28 (upgrade): pure version bump. **Non-lossy.**
 *
 * v28 adds `entitySpawns[]` and the `entitySpawnRef` variable; a v27 document
 * has neither, and the schema defaults `entitySpawns` to `[]`.
 */
export const v27ToV28: Migrator<BeyondPaperV27, BeyondPaperV28> = (v27) => ({
  ...v27,
  version: 28,
  entitySpawns: [],
});
