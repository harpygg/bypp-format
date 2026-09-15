import type { BeyondPaperV22 } from "../schemas/bypp.v22.schema";
import type { BeyondPaperV23 } from "../schemas/bypp.v23.schema";
import type { Migrator } from "./types";

/**
 * v22 → v23 (upgrade): a pure version bump. **Non-lossy.**
 *
 * v23 only widens what a style may say, and a v22 document says none of it. An
 * item with no margin keeps the spacing its surroundings give it, which is
 * exactly what it did before.
 */
export const v22ToV23: Migrator<BeyondPaperV22, BeyondPaperV23> = (v22) => ({
  ...v22,
  version: 23,
});
