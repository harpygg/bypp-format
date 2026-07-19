export { k as Asset, n as AssetSchema, p as Attribution, Y as CcLicense, z as DataTableColumn, ar as DataTableSchema, av as DatasetSchema, aB as DialectSchema, aG as EntityImageFormat, aI as EntityImageObjectFit, aL as GridData, aT as ObjectFit, J as Page, aW as PageSchema, aZ as ParentAttribution, b3 as RandomTableSchema, bb as SceneSchema, be as Style, bf as StyleSchema, bi as TagCategorySchema, bk as TagSchema, X as Variable, bn as VariableSchema } from './variable.v7.schema-ClZin-IT.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, o as Entity, p as EntitySchema, v as SceneBackground, w as SceneBackgroundSchema, z as SceneMapSchema, D as Sheet, F as SheetSchema } from './sheet.v5.schema-DbV1RorT.cjs';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-CPzgOZDy.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-BL5DYMEZ.cjs';
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
