export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a4 as GridData, a6 as ObjectFit, r as Page, a9 as PageSchema, ac as ParentAttribution, ai as RandomTableSchema, aq as SceneSchema } from './scene.v2.schema-WTy2SpxZ.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v18.schema-D0u_RMza.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CKydTe2b.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-Cdv7yHPn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-CPdIi6bj.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-4P8lFKbh.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-Bm_cVekS.cjs';
export { a as DialectSchema } from './dialect.v3.schema-D_8HfBSE.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-BRnK7aYy.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-CP17FFyf.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v18**, imported as `bypp-format/v18`.
 *
 * It re-exports every v17 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v17
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v18` keeps compiling against v18 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v18` → `bypp-format/v18`) deliberately.
 *
 * The v18 headline is the manifest's `requires[]` (`RequirementSchema`): what
 * a document reads but does not carry. The reference icon registry is NOT
 * re-exported here: it belongs to no version, validates nothing, and adding a
 * slug to it never moves the format. Reach it deliberately at
 * `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v19.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 18;

export { BYPP_FORMAT_VERSION };
