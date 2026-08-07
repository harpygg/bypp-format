export { l as Attribution, I as CcLicense, r as DataTableColumn, ah as DataTableSchema, al as DatasetSchema, as as EntityImageFormat, au as EntityImageObjectFit, ax as GridData, aB as ObjectFit, u as Page, aE as PageSchema, aH as ParentAttribution, aN as RandomTableSchema, aV as SceneSchema, aY as Style, aZ as StyleSchema, b0 as TagCategorySchema, b2 as TagSchema, H as Variable, b5 as VariableSchema } from './variable.v7.schema-CNP3lacZ.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, o as Entity, p as EntitySchema, v as SceneBackground, w as SceneBackgroundSchema, z as SceneMapSchema, D as Sheet, F as SheetSchema } from './sheet.v5.schema-CdumQPII.cjs';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-DhlFJs0t.cjs';
export { c as DialectSchema } from './dialect.v2.schema-C6JoT5O-.cjs';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-kXGxpbTm.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-CD5tVoPQ.cjs';
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
