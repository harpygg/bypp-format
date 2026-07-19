export { k as Asset, n as AssetSchema, p as Attribution, Z as CcLicense, z as DataTableColumn, as as DataTableSchema, aw as DatasetSchema, aC as DialectSchema, aH as EntityImageFormat, aJ as EntityImageObjectFit, aM as GridData, aU as ObjectFit, J as Page, aX as PageSchema, a_ as ParentAttribution, b4 as RandomTableSchema, bc as SceneSchema, bf as Style, bg as StyleSchema, bj as TagCategorySchema, bl as TagSchema, X as Variable, bo as VariableSchema, Y as Widget, bw as WidgetSchema } from './widget.v7.schema-lcLISYFx.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, o as Entity, p as EntitySchema, v as SceneBackground, w as SceneBackgroundSchema, z as SceneMapSchema, D as Sheet, F as SheetSchema } from './sheet.v5.schema-CfBhvsfx.cjs';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-DzTjb3lU.cjs';
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
