export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema } from './data-table.v3.schema-SKJA8p4m.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v21.schema-DOjfq8AP.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CFZnC8Vu.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-DB5y0gMr.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { E as EntityLookupVariable, b as EntityRefVariable, V as Variable, d as VariableSchema, W as Widget, e as WidgetEntityGrid, g as WidgetSchema } from './widget.v10.schema-BugS8ori.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-CfSOj30d.cjs';
export { a as DialectSchema } from './dialect.v3.schema-B7lk6coU.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-B54DWFDQ.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { E as Entity, a as EntityAction, f as EntityActionSchema, h as EntitySchema } from './entity-action.v1.schema-NeJRm1yx.cjs';
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
