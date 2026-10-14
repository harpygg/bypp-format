export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, e as DatasetSchema, g as Entity, h as EntitySchema } from './entity.v7.schema-aOMucpBk.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema } from './with-style.v6.schema-DKNbTC0_.cjs';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-DggFDpKn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-DbJe6gxv.cjs';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, V as VariableUpdate, e as VariableUpdateSchema } from './variable.v10.schema-C20leqlw.cjs';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-CIiUlkZF.cjs';
export { E as EntitySpawnRefVariable, a as EntitySpawnRefVariableSchema, V as Variable, b as VariableSchema } from './variable.v12.schema-zgR_Wssv.cjs';
export { E as EntitySpawn, a as EntitySpawnSchema } from './entity-spawn.v1.schema-BBWJHpY3.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-BuRwGydm.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BzJaqnT7.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-D6eTnEft.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { B as BundleCredit, a as BundleCreditSchema } from './bundle-credit.v29.schema-DI9HTgcu.cjs';
export { E as EntitySubtype, a as EntitySubtypeSchema } from './entity-subtype.v30.schema-B0qxsRxc.cjs';
export { E as EntityAction, a as EntityActionSchema } from './entity-action.v2.schema-CAVnRrWj.cjs';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-zcjT7A_y.cjs';
export { W as WidgetEntityGrid } from './widget.v10.schema-DTcSCgnS.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v13.schema-j89l8a4I.cjs';
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
