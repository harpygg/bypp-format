import type { BeyondPaperV20 } from "../schemas/bypp.v20.schema";
import type { BeyondPaperV21 } from "../schemas/bypp.v21.schema";
import type { Migrator } from "./types";

/**
 * v20 → v21 (upgrade): a pure version bump. **Non-lossy.**
 *
 * v21 only adds a block variant, and a v20 document carries none of it.
 * Nothing is converted: a text block holds HTML an author wrote as HTML, and
 * guessing markdown out of it would rewrite their words.
 */
export const v20ToV21: Migrator<BeyondPaperV20, BeyondPaperV21> = (v20) => ({
  ...v20,
  version: 21,
});
