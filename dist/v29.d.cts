export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v29.schema-BZkSLJ0t.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-427Rmg3E.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-R2LL5j85.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-Dm9krcne.cjs';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, E as EntityAction, d as EntityActionSchema, V as VariableUpdate, f as VariableUpdateSchema } from './entity-action.v2.schema-DZXNB2B-.cjs';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-CZ_IIZwl.cjs';
export { E as EntitySpawn, a as EntitySpawnRefVariable, b as EntitySpawnRefVariableSchema, c as EntitySpawnSchema, V as Variable, d as VariableSchema } from './entity-spawn.v1.schema-JwXap_qq.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-dLXTZ179.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-4J94kJe-.cjs';
export { a as DialectSchema } from './dialect.v3.schema-Bdt5QWiw.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-OOAH72Uh.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { B as BundleCredit, a as BundleCreditSchema } from './bundle-credit.v29.schema-DI9HTgcu.cjs';
export { e as Entity, f as EntitySchema } from './entity.v6.schema-G-UDacQM.cjs';
export { W as WidgetEntityGrid } from './widget.v10.schema-BZBGcq3k.cjs';
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
