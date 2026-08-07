export { l as Attribution, I as CcLicense, r as DataTableColumn, ah as DataTableSchema, al as DatasetSchema, as as EntityImageFormat, au as EntityImageObjectFit, ax as GridData, aB as ObjectFit, u as Page, aE as PageSchema, aH as ParentAttribution, aN as RandomTableSchema, aV as SceneSchema, aY as Style, aZ as StyleSchema, b0 as TagCategorySchema, b2 as TagSchema, H as Variable, b5 as VariableSchema } from './variable.v7.schema-CNP3lacZ.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v11.schema-BhtcRlrC.js';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-D47PDSxS.js';
export { c as DialectSchema } from './dialect.v2.schema-Do0MXEsy.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-BuvZIlD2.js';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-CUQaZPd_.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-CE1e940l.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v11**, imported as `bypp-format/v11`.
 *
 * It re-exports every v11 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v11
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v11` keeps compiling against v11 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v11` → `bypp-format/v12`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v12.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 11;

export { BYPP_FORMAT_VERSION };
