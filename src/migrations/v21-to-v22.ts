import type { BeyondPaperV21 } from "../schemas/bypp.v21.schema";
import type { BeyondPaperV22 } from "../schemas/bypp.v22.schema";
import type { Migrator } from "./types";

/**
 * v21 → v22 (upgrade): a pure version bump. **Non-lossy.**
 *
 * v22 only widens what a style may say, and a v21 document says none of it.
 * A widget with no `fontWeight` keeps inheriting its weight, which is exactly
 * what it did before.
 */
export const v21ToV22: Migrator<BeyondPaperV21, BeyondPaperV22> = (v21) => ({
  ...v21,
  version: 22,
});
