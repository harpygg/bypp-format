export { B as BeyondPaper, a as BeyondPaperSchema, S as Style, b as StyleSchema, W as Widget, c as WidgetSchema } from './widget.v12.schema-CaGLwyq6.cjs';
export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema } from './data-table.v3.schema-SKJA8p4m.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-DB5y0gMr.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema, e as WidgetEntityGrid } from './widget.v10.schema-BugS8ori.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-CfSOj30d.cjs';
export { a as DialectSchema } from './dialect.v3.schema-B7lk6coU.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-B54DWFDQ.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { E as Entity, a as EntityAction, f as EntityActionSchema, h as EntitySchema } from './entity-action.v1.schema-NeJRm1yx.cjs';
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
