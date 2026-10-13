export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v21.schema-ByBumOjG.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-DwpHZTpV.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-w1NFX9_2.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema } from './variable.v9.schema-Bhs0bHE7.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BK7slpZw.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-DP6gCULx.js';
export { b as DatasetSchema } from './dataset.v2.schema-BC7SWK08.js';
export { a as DialectSchema } from './dialect.v3.schema-BEHe8mao.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-JeXPhPFn.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { g as Entity, E as EntityAction, d as EntityActionSchema, h as EntitySchema } from './entity-action.v1.schema-CQkLnoNQ.js';
export { b as Widget, W as WidgetEntityGrid, c as WidgetSchema } from './widget.v10.schema-Bh4UQsiB.js';
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
