export { B as BeyondPaper, a as BeyondPaperSchema, f as DatasetSchema, E as Entity, i as EntitySchema, b as EntitySubtype, j as EntitySubtypeSchema } from './entity-subtype.v30.schema-ebjrcTon.js';
export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-DKCMLfeh.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-w1NFX9_2.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-_i4YRfrG.js';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, E as EntityAction, d as EntityActionSchema, V as VariableUpdate, f as VariableUpdateSchema } from './entity-action.v2.schema-DD2rha9T.js';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-DxMv1Dgy.js';
export { E as EntitySpawn, a as EntitySpawnRefVariable, b as EntitySpawnRefVariableSchema, c as EntitySpawnSchema, V as Variable, d as VariableSchema } from './entity-spawn.v1.schema-BhitcZN0.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-DP6gCULx.js';
export { a as DialectSchema } from './dialect.v3.schema-BEHe8mao.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-JeXPhPFn.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { B as BundleCredit, a as BundleCreditSchema } from './bundle-credit.v29.schema-DI9HTgcu.js';
export { W as WidgetEntityGrid } from './widget.v10.schema-Bh4UQsiB.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v30**, imported as `bypp-format/v30`.
 *
 * It re-exports every v29 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v30
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v30` keeps compiling against v30 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v29` → `bypp-format/v30`) deliberately.
 *
 * The v30 headline is `entitySubtypes[]`: shelves on the entity types
 * (Weapons on `item`), with an entity's `subtypeUid` and a dataset's
 * `targetsSubtypes`.
 *
 * This file MUST NOT be modified once shipped — add `v31.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 30;

export { BYPP_FORMAT_VERSION };
