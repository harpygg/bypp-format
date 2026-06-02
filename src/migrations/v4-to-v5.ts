import type { BeyondPaperV4 } from "../schemas/bypp.v4.schema";
import type { BeyondPaperV5 } from "../schemas/bypp.v5.schema";
import type { Migrator } from "./types";

/**
 * v4 → v5 (upgrade): non-lossy.
 *
 * v5 only widens the widget union to allow the new `entityImage`
 * variant. Every v4 widget is already a valid v5 widget, and no other
 * sub-schema changed — so the migration is a pure version bump.
 */
export const v4ToV5: Migrator<BeyondPaperV4, BeyondPaperV5> = (v4) => ({
  ...v4,
  version: 5,
});
