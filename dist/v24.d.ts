export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v24.schema-DaVbD-Ov.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema } from './with-style.v6.schema-CFqh8-dz.js';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-CnuXHPQ4.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema } from './variable.v9.schema-DY4c76D-.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-Da-6Fsyc.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-CCbaFJYj.js';
export { b as DatasetSchema } from './dataset.v2.schema-DYMLbnQX.js';
export { a as DialectSchema } from './dialect.v3.schema-DbEvhdjV.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-iimd5dKW.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { g as Entity, E as EntityAction, d as EntityActionSchema, h as EntitySchema } from './entity-action.v1.schema-BCmPws2b.js';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-B8fTremW.js';
export { W as WidgetEntityGrid } from './widget.v10.schema-shFTzthq.js';
export { W as Widget, a as WidgetSchema } from './widget.v13.schema-Djt3GDHc.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v24**, imported as `bypp-format/v24`.
 *
 * It re-exports every v24 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v24
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v24` keeps compiling against v24 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v23` → `bypp-format/v24`) deliberately.
 *
 * The v24 headline is a spacing that can differ per side, written the way CSS
 * writes it: `margin` and `padding` take one value, two, or four clockwise
 * from the top, and `borderWidth` widens to the same notation.
 *
 * This file MUST NOT be modified once shipped — add `v25.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 24;

export { BYPP_FORMAT_VERSION };
