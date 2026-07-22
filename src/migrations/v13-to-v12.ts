import type { BeyondPaperV12 } from "../schemas/bypp.v12.schema";
import type { BeyondPaperV13 } from "../schemas/bypp.v13.schema";
import type { Migrator } from "./types";

/**
 * v13 → v12 (downgrade): mirror of `v12-to-v13`. **Lossy.**
 *
 * v12 has no per-file `credit`, so it is stripped from every asset, entity,
 * scene map, scene background, sheet and widget. There is nothing to fold it
 * into: the bundle-level `license` / `attribution` describes the bundle as a
 * work, and overwriting it with one file's credit would misdescribe every
 * other file. A downgraded bundle is therefore silent about who made each
 * file — which is exactly what v12 could express.
 *
 * The loss is total and deliberate. `credit.license` in particular cannot be
 * merged upward: a v12 bundle has one licence, and the only safe collapse is
 * the most restrictive one, which would relicense CC0 files as `ARR`. We
 * leave `license` alone rather than silently narrowing it.
 *
 * The v12 schema validation that runs after this migrator (see `migrate.ts`)
 * would strip an unknown key anyway; doing it explicitly keeps the downgrade
 * self-documenting and catches any category we forgot.
 */
export const v13ToV12: Migrator<BeyondPaperV13, BeyondPaperV12> = (v13) =>
  ({
    ...v13,
    version: 12,
    assets: v13.assets.map(stripCredit),
    entities: v13.entities.map(stripCredit),
    sceneMaps: v13.sceneMaps.map(stripCredit),
    sceneBackgrounds: v13.sceneBackgrounds.map(stripCredit),
    sheets: v13.sheets.map(stripCredit),
    widgets: v13.widgets.map(stripCredit),
  }) as BeyondPaperV12;

// `credit` always sits at the top level of the item it belongs to — on every
// asset / entity / widget variant, on both scene-map and scene-background
// variants, and on the sheet itself — so one generic strip covers all six
// categories. It is optional everywhere, so an item that never carried one
// is returned untouched.
const stripCredit = <T extends object>(item: T): T => {
  if (!("credit" in item)) {
    return item;
  }
  const { credit: _credit, ...rest } = item;
  return rest as T;
};
