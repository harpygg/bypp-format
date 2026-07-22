import type { BeyondPaperV12 } from "../schemas/bypp.v12.schema";
import type { BeyondPaperV13 } from "../schemas/bypp.v13.schema";
import type { Migrator } from "./types";

/**
 * v12 → v13 (upgrade): pure version bump. **Non-lossy.**
 *
 * Everything v13 adds is optional and additive — `credit` is an optional
 * block on assets, entities, scene maps, scene backgrounds, sheets and
 * widgets. A v12 document has none of them, so it is already a valid v13
 * document.
 *
 * Nothing is synthesized from the bundle-level `attribution` either: the
 * bundle's author is not automatically the author of every file it contains,
 * and inventing that claim is exactly the dishonesty v13 exists to fix. An
 * absent `credit` means "inherits the bundle's licence", which is precisely
 * what a v12 document said.
 */
export const v12ToV13: Migrator<BeyondPaperV12, BeyondPaperV13> = (v12) => ({
  ...v12,
  version: 13,
});
