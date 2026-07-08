import type { BeyondPaperV7 } from "../schemas/bypp.v7.schema";
import type { BeyondPaperV8 } from "../schemas/bypp.v8.schema";
import type { Migrator } from "./types";

/**
 * v7 → v8 (upgrade): non-lossy.
 *
 * v8 only ADDS optional capability — the widget style gains `border*` +
 * `background`, and sheets gain a `styles` cascade. Every v7 widget/sheet is
 * already a valid v8 one (the new fields are absent), so the upgrade is a
 * pure version bump.
 */
export const v7ToV8: Migrator<BeyondPaperV7, BeyondPaperV8> = (v7) => ({
  ...v7,
  version: 8,
});
