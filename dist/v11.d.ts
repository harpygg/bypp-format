export { l as Attribution, K as CcLicense, r as DataTableColumn, aj as DataTableSchema, an as DatasetSchema, at as DialectSchema, aw as EntityImageFormat, ay as EntityImageObjectFit, aB as GridData, aF as ObjectFit, w as Page, aI as PageSchema, aL as ParentAttribution, aR as RandomTableSchema, aZ as SceneSchema, b0 as Style, b1 as StyleSchema, b4 as TagCategorySchema, b6 as TagSchema, J as Variable, b9 as VariableSchema } from './variable.v7.schema-D14Z7-jV.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v11.schema-dxMKznTa.js';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-Du0ctAPh.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-CYIhykgS.js';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-CRECDmW4.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-DLI-7psW.js';
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
