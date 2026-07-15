import type { BeyondPaperV9 } from "../schemas/bypp.v9.schema";
import type { BeyondPaperV10 } from "../schemas/bypp.v10.schema";
import type { Migrator } from "./types";

/**
 * v10 → v9 (downgrade): mirror of `v9-to-v10`. **Lossy.**
 *
 * v9 has no image `dimensions` field, so it is stripped from every sheet,
 * entity, scene map and scene background. Video-backed maps/backgrounds never
 * carried it (they keep their own `videoDimensions`), so stripping is a no-op
 * there. The v9 schema validation that runs after this migrator (see
 * `migrate.ts`) would strip an unknown key anyway; doing it explicitly keeps
 * the downgrade self-documenting.
 */
export const v10ToV9: Migrator<BeyondPaperV10, BeyondPaperV9> = (v10) => ({
  ...v10,
  version: 9,
  sheets: v10.sheets.map(stripDimensions),
  entities: v10.entities.map(stripDimensions),
  sceneMaps: v10.sceneMaps.map(stripDimensions),
  sceneBackgrounds: v10.sceneBackgrounds.map(stripDimensions),
} as BeyondPaperV9);

// Accepts any object (video-backed map/background variants don't carry
// `dimensions` at all) and drops the key when present.
const stripDimensions = <T extends object>(item: T): T => {
  if (!("dimensions" in item)) {
    return item;
  }
  const { dimensions: _dimensions, ...rest } = item;
  return rest as T;
};
