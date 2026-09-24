export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a4 as GridData, a6 as ObjectFit, r as Page, a9 as PageSchema, ac as ParentAttribution, ai as RandomTableSchema, aq as SceneSchema } from './scene.v2.schema-WTy2SpxZ.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v10.schema-DGa4qVW_.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CKydTe2b.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-csKxU_KW.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-4P8lFKbh.cjs';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-CcXygOBJ.cjs';
export { c as DialectSchema } from './dialect.v2.schema-Wsh6RSoQ.cjs';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-CtnyVIj_.cjs';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-DtChGpDk.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-C40L3kW8.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-D7IV210s.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v10**, imported as `bypp-format/v10`.
 *
 * It re-exports every v10 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v10
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v10` keeps compiling against v10 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v10` → `bypp-format/v11`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v11.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 10;

export { BYPP_FORMAT_VERSION };
