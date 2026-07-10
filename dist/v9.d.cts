export { l as Asset, o as AssetSchema, q as Attribution, B as BeyondPaper, w as BeyondPaperSchema, ah as CcLicense, H as Chunk, an as ChunkSchema, Q as DataTableColumn, b0 as DataTableSchema, b4 as DatasetSchema, ba as DialectSchema, _ as Entity, bg as EntityImageFormat, bi as EntityImageObjectFit, bk as EntitySchema, bn as GridData, bA as ObjectFit, a1 as Page, bD as PageSchema, bG as ParentAttribution, bN as RandomTableSchema, a8 as SceneBackground, bQ as SceneBackgroundSchema, bV as SceneMapSchema, bZ as SceneSchema, ac as Sheet, b$ as SheetSchema, c2 as Style, c3 as StyleSchema, c6 as TagCategorySchema, c8 as TagSchema, af as Variable, cb as VariableSchema, ag as Widget, cj as WidgetSchema } from './sheet.v5.schema-DFFvpOBD.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v9**, imported as `bypp-format/v9`.
 *
 * It re-exports every v9 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v9
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v9` keeps compiling against v9 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v9` → `bypp-format/v10`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v10.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 9;

export { BYPP_FORMAT_VERSION };
