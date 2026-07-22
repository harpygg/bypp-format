export { l as Attribution, K as CcLicense, r as DataTableColumn, aj as DataTableSchema, an as DatasetSchema, at as DialectSchema, aw as EntityImageFormat, ay as EntityImageObjectFit, aB as GridData, aF as ObjectFit, w as Page, aI as PageSchema, aL as ParentAttribution, aR as RandomTableSchema, aZ as SceneSchema, b0 as Style, b1 as StyleSchema, b4 as TagCategorySchema, b6 as TagSchema, J as Variable, b9 as VariableSchema } from './variable.v7.schema-D14Z7-jV.js';
export { B as BeyondPaper, a as BeyondPaperSchema, o as Entity, p as EntitySchema, v as SceneBackground, w as SceneBackgroundSchema, z as SceneMapSchema, D as Sheet, F as SheetSchema } from './sheet.v5.schema-2e_zdlc2.js';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-BKm989v_.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-CYIhykgS.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-DLI-7psW.js';
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
