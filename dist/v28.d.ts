export { B as BeyondPaper, a as BeyondPaperSchema, E as EntitySpawn, b as EntitySpawnRefVariable, c as EntitySpawnRefVariableSchema, d as EntitySpawnSchema, V as Variable, e as VariableSchema } from './entity-spawn.v1.schema-CaoEOHEn.js';
export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a4 as GridData, a6 as ObjectFit, r as Page, a9 as PageSchema, ac as ParentAttribution, ai as RandomTableSchema, aq as SceneSchema } from './scene.v2.schema-WTy2SpxZ.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-CKLLfYgs.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema--jHWKnKF.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-Bdq3mN_M.js';
export { a as ActionRoll, b as ActionRollSchema, c as ActionSections, d as ActionSectionsSchema, E as Entity, e as EntityAction, j as EntityActionSchema, l as EntitySchema, V as VariableUpdate, q as VariableUpdateSchema } from './entity-action.v2.schema-C0RZAYbh.js';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-p81yHOct.js';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-OjTtOgA2.js';
export { a as DialectSchema } from './dialect.v3.schema-waB9hXYk.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-B-uc5zXN.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { W as WidgetEntityGrid } from './widget.v10.schema-CgM7wu52.js';
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
