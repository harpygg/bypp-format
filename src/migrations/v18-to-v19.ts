import type { BeyondPaperV18 } from "../schemas/bypp.v18.schema";
import type { BeyondPaperV19 } from "../schemas/bypp.v19.schema";
import type { Migrator } from "./types";

/**
 * v18 → v19 (upgrade): a pure version bump. **Non-lossy.**
 *
 * v19 only adds variants — two variable kinds and one widget kind — and a v18
 * document carries none of them. Nothing is inferred: a free-text inventory
 * stays text, the format does not guess which entities it named.
 */
export const v18ToV19: Migrator<BeyondPaperV18, BeyondPaperV19> = (v18) => ({
  ...v18,
  version: 19,
});
