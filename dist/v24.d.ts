export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema } from './data-table.v3.schema-SKJA8p4m.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v24.schema-DZB03PIm.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-CGc3SKUj.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-c3utgKwR.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema, W as WidgetEntityGrid } from './widget.v10.schema-EmiI_9Jh.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-AILCC0qs.js';
export { a as DialectSchema } from './dialect.v3.schema-B857Hb-P.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-C30XLI_r.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { E as Entity, a as EntityAction, f as EntityActionSchema, h as EntitySchema } from './entity-action.v1.schema-CRwwNHA9.js';
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
