import type { BeyondPaperV25 } from "../schemas/bypp.v25.schema";
import type { BeyondPaperV26 } from "../schemas/bypp.v26.schema";
import type { Migrator } from "./types";

/**
 * v25 → v26 (upgrade): a pure version bump. **Non-lossy.**
 *
 * Every action a v25 entity carries is a roll, and a roll is written the same
 * way in v26: the union only grew a second kind. Nothing is inferred — no
 * roll is turned into an update, because nothing in a roll says what it
 * would set.
 */
export const v25ToV26: Migrator<BeyondPaperV25, BeyondPaperV26> = (v25) => ({
  ...v25,
  version: 26,
});
