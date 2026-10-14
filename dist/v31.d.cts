export { B as BeyondPaper, a as BeyondPaperSchema, i as DatasetSchema, E as Entity, b as EntityAction, j as EntityActionSchema, c as EntityMode, m as EntityModeSchema, n as EntitySchema, d as EntitySpawn, o as EntitySpawnSchema, I as ItemKind, s as ItemKindSchema, S as Sheet, w as SheetSchema, x as SpawnOwner, y as SpawnOwnerSchema, e as StackOrderEntry, z as StackOrderEntrySchema, H as SystemVariableUid, J as SystemVariableUidSchema, V as Variable, K as VariableSchema, W as Widget, L as WidgetEntityGrid, O as WidgetSchema } from './widget.v14.schema-DpNZ4fq4.cjs';
export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema } from './with-style.v6.schema-DKNbTC0_.cjs';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-DggFDpKn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-DbJe6gxv.cjs';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, V as VariableUpdate, e as VariableUpdateSchema } from './variable.v10.schema-C20leqlw.cjs';
export { C as ChoiceOption, e as ChoiceOptionSchema, f as ChoiceVariable, g as ChoiceVariableSchema, b as DataTableColumn, o as DataTableSchema, E as EntityLookupVariable, q as EntityRefVariable, R as RollVariable, v as RollVariableSchema } from './data-table.v4.schema-CIiUlkZF.cjs';
export { E as EntitySpawnRefVariable, a as EntitySpawnRefVariableSchema } from './variable.v12.schema-zgR_Wssv.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-BuRwGydm.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BzJaqnT7.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-D6eTnEft.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { B as BundleCredit, a as BundleCreditSchema } from './bundle-credit.v29.schema-DI9HTgcu.cjs';
export { E as EntitySubtype, a as EntitySubtypeSchema } from './entity-subtype.v30.schema-B0qxsRxc.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v31**, imported as `bypp-format/v31`.
 *
 * It re-exports every v31 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v31
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v31` keeps compiling against v31 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v30` → `bypp-format/v31`) deliberately.
 *
 * The v31 headline is what an entity is in play: its `modes` (the Bracer of
 * Kord's Worn), an item's kind, a spawn borne by a spawn, and the reserved
 * `system-` variable uids (`system-quantity`, `system-weight`,
 * `system-inventory`) that may key `data`.
 *
 * This file MUST NOT be modified once shipped — add `v32.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 31;

export { BYPP_FORMAT_VERSION };
