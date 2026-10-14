export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v19.schema-C1cqyap5.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CtuSSqLf.js';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-CnuXHPQ4.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema } from './variable.v9.schema-DY4c76D-.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-Da-6Fsyc.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-Bo4p6HRU.js';
export { b as DatasetSchema } from './dataset.v2.schema-DYMLbnQX.js';
export { a as DialectSchema } from './dialect.v3.schema-DbEvhdjV.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-iimd5dKW.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-T_8ffqmd.js';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-B8fTremW.js';
export { b as Widget, W as WidgetEntityGrid, c as WidgetSchema } from './widget.v10.schema-shFTzthq.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v19**, imported as `bypp-format/v19`.
 *
 * It re-exports every v19 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v19
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v19` keeps compiling against v19 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v18` → `bypp-format/v19`) deliberately.
 *
 * The v19 headline is the link between entities: the `entityRef` and
 * `entityLookup` variables and the `entityGrid` widget. The reference icon
 * registry is NOT re-exported here: it belongs to no version, validates
 * nothing, and adding a slug to it never moves the format. Reach it
 * deliberately at `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v20.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 19;

export { BYPP_FORMAT_VERSION };
