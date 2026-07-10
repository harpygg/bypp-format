import type { BeyondPaperV8 } from "../schemas/bypp.v8.schema";
import type { BeyondPaperV9 } from "../schemas/bypp.v9.schema";
import type { Migrator } from "./types";

/**
 * v8 → v9 (upgrade): non-lossy.
 *
 * v9 only ADDS a widget variant (`wheel`). Every v8 widget is already a valid
 * v9 one, so the upgrade is a pure version bump.
 */
export const v8ToV9: Migrator<BeyondPaperV8, BeyondPaperV9> = (v8) => ({
  ...v8,
  version: 9,
});
