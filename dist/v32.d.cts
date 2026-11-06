export { B as BeyondPaper, a as BeyondPaperSchema, P as PipsLayout, b as PipsLayoutSchema, W as Widget, c as WidgetPips, d as WidgetPipsSchema, e as WidgetSchema } from './widget.v15.schema-DUhB8y5t.cjs';
export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema } from './with-style.v6.schema-DKNbTC0_.cjs';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-DggFDpKn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-DbJe6gxv.cjs';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, V as VariableUpdate, e as VariableUpdateSchema } from './variable.v10.schema-C20leqlw.cjs';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-CIiUlkZF.cjs';
export { E as EntitySpawnRefVariable, a as EntitySpawnRefVariableSchema } from './variable.v12.schema-zgR_Wssv.cjs';
export { i as DatasetSchema, E as Entity, a as EntityAction, j as EntityActionSchema, b as EntityMode, m as EntityModeSchema, n as EntitySchema, o as EntityShortcut, c as EntityShortcutRow, p as EntityShortcutRowSchema, q as EntityShortcutSchema, d as EntitySpawn, r as EntitySpawnSchema, I as ItemKind, v as ItemKindSchema, S as Sheet, z as SheetSchema, B as ShortcutActionFrom, F as ShortcutActionFromSchema, H as SpawnOwner, J as SpawnOwnerSchema, e as StackOrderEntry, K as StackOrderEntrySchema, M as SystemVariableUid, O as SystemVariableUidSchema, V as Variable, Q as VariableSchema, W as WidgetEntityGrid } from './widget.v14.schema-B5bLSErT.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-BuRwGydm.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BzJaqnT7.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-D6eTnEft.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { B as BundleCredit, a as BundleCreditSchema } from './bundle-credit.v29.schema-DI9HTgcu.cjs';
export { E as EntitySubtype, a as EntitySubtypeSchema } from './entity-subtype.v30.schema-B0qxsRxc.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v32**, imported as `bypp-format/v32`.
 *
 * It re-exports every v32 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v32
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v32` keeps compiling against v32 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v31` → `bypp-format/v32`) deliberately.
 *
 * The v32 headline is pips that follow a curve: a `pips` widget's `layout`,
 * `curve`, `startAngle` and `closed`.
 *
 * This file MUST NOT be modified once shipped — add `v33.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 32;

export { BYPP_FORMAT_VERSION };
