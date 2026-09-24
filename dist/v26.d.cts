export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a4 as GridData, a6 as ObjectFit, r as Page, a9 as PageSchema, ac as ParentAttribution, ai as RandomTableSchema, aq as SceneSchema } from './scene.v2.schema-WTy2SpxZ.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v26.schema-6Okszld-.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-D52aLYda.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-Cdv7yHPn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-ZAaduTzA.cjs';
export { E as EntityLookupVariable, b as EntityRefVariable } from './variable.v9.schema-BDZGl0Th.cjs';
export { a as ActionRoll, b as ActionRollSchema, c as ActionSections, d as ActionSectionsSchema, E as Entity, e as EntityAction, j as EntityActionSchema, l as EntitySchema, R as RollVariable, p as RollVariableSchema, r as Variable, s as VariableSchema, V as VariableUpdate, q as VariableUpdateSchema } from './entity-action.v2.schema-CNLHfFBT.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-4P8lFKbh.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-Bq2oah5J.cjs';
export { a as DialectSchema } from './dialect.v3.schema-D_8HfBSE.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-BRnK7aYy.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { W as WidgetEntityGrid } from './widget.v10.schema-cel4mqMV.cjs';
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
