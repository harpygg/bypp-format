export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v21.schema-DqUfP-8w.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CtuSSqLf.js';
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
export { b as Widget, W as WidgetEntityGrid, c as WidgetSchema } from './widget.v10.schema-shFTzthq.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v21**, imported as `bypp-format/v21`.
 *
 * It re-exports every v21 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v21
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v21` keeps compiling against v21 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v20` → `bypp-format/v21`) deliberately.
 *
 * The v21 headline is the markdown block: a second kind of text block, holding
 * the markdown source rather than the HTML a rich-text editor produces.
 *
 * This file MUST NOT be modified once shipped — add `v22.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 21;

export { BYPP_FORMAT_VERSION };
