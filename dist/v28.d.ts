export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v28.schema-quzEiD9y.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-DKCMLfeh.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-w1NFX9_2.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-_i4YRfrG.js';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, E as EntityAction, d as EntityActionSchema, V as VariableUpdate, f as VariableUpdateSchema } from './entity-action.v2.schema-DD2rha9T.js';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-DxMv1Dgy.js';
export { E as EntitySpawn, a as EntitySpawnRefVariable, b as EntitySpawnRefVariableSchema, c as EntitySpawnSchema, V as Variable, d as VariableSchema } from './entity-spawn.v1.schema-BhitcZN0.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-DP6gCULx.js';
export { b as DatasetSchema } from './dataset.v2.schema-BC7SWK08.js';
export { a as DialectSchema } from './dialect.v3.schema-BEHe8mao.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-JeXPhPFn.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v6.schema-CtkIiKrf.js';
export { W as WidgetEntityGrid } from './widget.v10.schema-Bh4UQsiB.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v28**, imported as `bypp-format/v28`.
 *
 * It re-exports every v28 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v28
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v28` keeps compiling against v28 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v27` → `bypp-format/v28`) deliberately.
 *
 * The v28 headline is entity spawns: `entitySpawns[]`, copies of an entity
 * holding their own values over it, and the `entitySpawnRef` variable whose
 * value is the spawns an entity (or a bag) holds.
 *
 * This file MUST NOT be modified once shipped — add `v29.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 28;

export { BYPP_FORMAT_VERSION };
