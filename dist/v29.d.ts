export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v29.schema-COXe1dKM.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema } from './with-style.v6.schema-CFqh8-dz.js';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-CnuXHPQ4.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-C8IyUDmq.js';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, V as VariableUpdate, e as VariableUpdateSchema } from './variable.v10.schema-DLJMgVwh.js';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-CywKNuZd.js';
export { E as EntitySpawnRefVariable, a as EntitySpawnRefVariableSchema, V as Variable, b as VariableSchema } from './variable.v12.schema-Cj_CwT45.js';
export { E as EntitySpawn, a as EntitySpawnSchema } from './entity-spawn.v1.schema-B-QFtZW4.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-CCbaFJYj.js';
export { b as DatasetSchema } from './dataset.v2.schema-DYMLbnQX.js';
export { a as DialectSchema } from './dialect.v3.schema-DbEvhdjV.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-iimd5dKW.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { B as BundleCredit, a as BundleCreditSchema } from './bundle-credit.v29.schema-DI9HTgcu.js';
export { e as Entity, f as EntitySchema } from './entity.v6.schema-7A5G0Eo2.js';
export { E as EntityAction, a as EntityActionSchema } from './entity-action.v2.schema-Dy2CqKug.js';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-B8fTremW.js';
export { W as WidgetEntityGrid } from './widget.v10.schema-shFTzthq.js';
export { W as Widget, a as WidgetSchema } from './widget.v13.schema-Djt3GDHc.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v29**, imported as `bypp-format/v29`.
 *
 * It re-exports every v29 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v29
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v29` keeps compiling against v29 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v28` → `bypp-format/v29`) deliberately.
 *
 * The v29 headline is `credits[]`: everyone who worked on the bundle besides
 * its author, each `{ name, role?, url?, license? }`.
 *
 * This file MUST NOT be modified once shipped — add `v30.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 29;

export { BYPP_FORMAT_VERSION };
