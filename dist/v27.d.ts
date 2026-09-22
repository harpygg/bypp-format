export { B as BeyondPaper, a as BeyondPaperSchema, C as ChoiceOption, g as ChoiceOptionSchema, h as ChoiceVariable, i as ChoiceVariableSchema, d as DataTableColumn, q as DataTableSchema, E as EntityLookupVariable, s as EntityRefVariable, R as RollVariable, x as RollVariableSchema, V as Variable, A as VariableSchema } from './data-table.v4.schema-DuSaS_6f.js';
export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-RbHcRu2Q.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-DNRZ_ImO.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-MoVFdJ9K.js';
export { a as ActionRoll, b as ActionRollSchema, c as ActionSections, d as ActionSectionsSchema, E as Entity, e as EntityAction, j as EntityActionSchema, l as EntitySchema, V as VariableUpdate, q as VariableUpdateSchema } from './entity-action.v2.schema-BBKF52h0.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-suv_9o7k.js';
export { a as DialectSchema } from './dialect.v3.schema-Ay0DlHYP.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-p4dKRn3u.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { W as WidgetEntityGrid } from './widget.v10.schema-DnDGyx12.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v27**, imported as `bypp-format/v27`.
 *
 * It re-exports every v26 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v27
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v27` keeps compiling against v27 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v26` → `bypp-format/v27`) deliberately.
 *
 * The v27 headline is a variable's words in every language the document
 * speaks: its display `label`, and a choice option's `label` on a `choice`
 * variable and on a data-table `choice` column alike.
 *
 * This file MUST NOT be modified once shipped — add `v28.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 27;

export { BYPP_FORMAT_VERSION };
