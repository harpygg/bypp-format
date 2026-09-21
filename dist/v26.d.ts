export { a as ActionRoll, b as ActionRollSchema, c as ActionSections, d as ActionSectionsSchema, B as BeyondPaper, e as BeyondPaperSchema, E as Entity, f as EntityAction, l as EntityActionSchema, n as EntitySchema, R as RollVariable, r as RollVariableSchema, V as Variable, s as VariableSchema, h as VariableUpdate, t as VariableUpdateSchema } from './entity-action.v2.schema-B7Kdq6Hy.js';
export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema } from './data-table.v3.schema-SKJA8p4m.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-CGc3SKUj.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-c3utgKwR.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-BGfhc4TR.js';
export { E as EntityLookupVariable, b as EntityRefVariable, W as WidgetEntityGrid } from './widget.v10.schema-XSz9PQA6.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-AILCC0qs.js';
export { a as DialectSchema } from './dialect.v3.schema-B857Hb-P.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-C30XLI_r.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v26**, imported as `bypp-format/v26`.
 *
 * It re-exports every v26 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v26
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v26` keeps compiling against v26 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v25` → `bypp-format/v26`) deliberately.
 *
 * The v26 headline is an action that does more than roll: a sheet's `roll`
 * and an entity's own action gain two optional sections, the attributes they
 * set and the message they post, both able to read the roll's result.
 *
 * This file MUST NOT be modified once shipped — add `v27.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 26;

export { BYPP_FORMAT_VERSION };
