export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a4 as GridData, a6 as ObjectFit, r as Page, a9 as PageSchema, ac as ParentAttribution, ai as RandomTableSchema, aq as SceneSchema } from './scene.v2.schema-WTy2SpxZ.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v15.schema-D2EyIc-a.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CKydTe2b.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-Cdv7yHPn.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-csKxU_KW.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-4P8lFKbh.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-Bm_cVekS.cjs';
export { a as DialectSchema } from './dialect.v3.schema-D_8HfBSE.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-CP17FFyf.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-C40L3kW8.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v15**, imported as `bypp-format/v15`.
 *
 * It re-exports every v15 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v15
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v15` keeps compiling against v15 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v15` → `bypp-format/v16`) deliberately.
 *
 * Note there is no `DialectFontSchema` here: v15 replaced the dialect's
 * `{ fontFamily, fontUrl }` object with a bare `fontFamily` name.
 *
 * This file MUST NOT be modified once shipped — add `v16.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 15;

export { BYPP_FORMAT_VERSION };
