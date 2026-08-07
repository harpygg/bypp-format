import type { BeyondPaperV13 } from "../schemas/bypp.v13.schema";
import type { BeyondPaperV14 } from "../schemas/bypp.v14.schema";
import type { Migrator } from "./types";

/**
 * v13 → v14 (upgrade): pure version bump. **Non-lossy.**
 *
 * v14 adds exactly one optional field — the bundle's own `image` — so a v13
 * document is already a valid v14 one.
 *
 * Nothing is synthesized to fill it. A cover could plausibly be borrowed from
 * the first entity or sheet in the bundle, but that would invent an editorial
 * choice the producer never made, and stamp it into a file that then looks
 * authored. An absent `image` means "this bundle has no cover", which is
 * precisely what a v13 document said.
 */
export const v13ToV14: Migrator<BeyondPaperV13, BeyondPaperV14> = (v13) => ({
  ...v13,
  version: 14,
});
