export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, S as Style, b as StyleSchema, W as Widget, c as WidgetSchema } from './widget.v12.schema-CE_I30wb.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-R2LL5j85.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema } from './variable.v9.schema-rv06sbpy.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-B5zeWhAl.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-dLXTZ179.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-4J94kJe-.cjs';
export { a as DialectSchema } from './dialect.v3.schema-Bdt5QWiw.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-OOAH72Uh.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { g as Entity, E as EntityAction, d as EntityActionSchema, h as EntitySchema } from './entity-action.v1.schema-Unqa8PZV.cjs';
export { W as WidgetEntityGrid } from './widget.v10.schema-BZBGcq3k.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v23**, imported as `bypp-format/v23`.
 *
 * It re-exports every v23 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v23
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v23` keeps compiling against v23 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v22` → `bypp-format/v23`) deliberately.
 *
 * The v23 headline is what a style says in a flow of text: margins, a
 * background colour, and a text decoration that can be turned off.
 *
 * This file MUST NOT be modified once shipped — add `v24.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 23;

export { BYPP_FORMAT_VERSION };
