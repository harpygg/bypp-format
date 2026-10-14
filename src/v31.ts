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

export {
  // Manifest
  BeyondPaperV31Schema as BeyondPaperSchema,
  type BeyondPaperV31 as BeyondPaper,
  // What a document reads but does not carry
  RequirementV1Schema as RequirementSchema,
  RequirementSourceV1Schema as RequirementSourceSchema,
  ByppFileUrlV1Schema as ByppFileUrlSchema,
  // The bundle's own cover
  BundleImageV14Schema as BundleImageSchema,
  type BundleImageV14 as BundleImage,
  // Everyone else who worked on the bundle
  BundleCreditV29Schema as BundleCreditSchema,
  type BundleCreditV29 as BundleCredit,
  // How the document wants its own prose to look
  ThemeV25Schema as ThemeSchema,
  ThemeTagStyleV25Schema as ThemeTagStyleSchema,
  ThemeStyleV25Schema as ThemeStyleSchema,
  type ThemeV25 as Theme,
  type ThemeTagStyleV25 as ThemeTagStyle,
  type ThemeStyleV25 as ThemeStyle,
  // Categories — schemas
  WidgetV14Schema as WidgetSchema,
  SheetV8Schema as SheetSchema,
  StyleV6Schema as StyleSchema,
  SidesV6Schema as SidesSchema,
  TagV3Schema as TagSchema,
  TagCategoryV2Schema as TagCategorySchema,
  VariableV13Schema as VariableSchema,
  EntitySpawnRefVariableV12Schema as EntitySpawnRefVariableSchema,
  ChoiceVariableV11Schema as ChoiceVariableSchema,
  ChoiceOptionV27Schema as ChoiceOptionSchema,
  RollVariableV11Schema as RollVariableSchema,
  ActionSectionsV26Schema as ActionSectionsSchema,
  ActionRollV26Schema as ActionRollSchema,
  VariableUpdateV26Schema as VariableUpdateSchema,
  DialectV3Schema as DialectSchema,
  SceneV2Schema as SceneSchema,
  SceneMapV4Schema as SceneMapSchema,
  SceneBackgroundV4Schema as SceneBackgroundSchema,
  EntityV8Schema as EntitySchema,
  EntitySubtypeV30Schema as EntitySubtypeSchema,
  EntitySpawnV2Schema as EntitySpawnSchema,
  SpawnOwnerV2Schema as SpawnOwnerSchema,
  EntityModeV31Schema as EntityModeSchema,
  StackOrderEntryV31Schema as StackOrderEntrySchema,
  ItemKindV31Schema as ItemKindSchema,
  SystemVariableUidV31Schema as SystemVariableUidSchema,
  EntityActionV3Schema as EntityActionSchema,
  DatasetV4Schema as DatasetSchema,
  PageV1Schema as PageSchema,
  AssetV3Schema as AssetSchema,
  RandomTableV7Schema as RandomTableSchema,
  ChunkV12Schema as ChunkSchema,
  ChunkMarkdownV12Schema as ChunkMarkdownSchema,
  DataTableV4Schema as DataTableSchema,
  // Per-file credit
  CreditV1Schema as CreditSchema,
  WithCreditV1Schema as WithCreditSchema,
  // The icon mixin — on a variable since v16, on a tag and a category since v17
  WithIconV1Schema as WithIconSchema,
  // Categories — types
  type WidgetV14 as Widget,
  type WidgetActionRollV9 as WidgetActionRoll,
  type WidgetEntityGridV14 as WidgetEntityGrid,
  type SheetV8 as Sheet,
  type StyleV6 as Style,
  type SidesV6 as Sides,
  type TagV3 as Tag,
  type TagCategoryV2 as TagCategory,
  type VariableV13 as Variable,
  type ChoiceVariableV11 as ChoiceVariable,
  type ChoiceOptionV27 as ChoiceOption,
  type RollVariableV11 as RollVariable,
  type ActionSectionsV26 as ActionSections,
  type ActionRollV26 as ActionRoll,
  type VariableUpdateV26 as VariableUpdate,
  type EntityRefVariableV11 as EntityRefVariable,
  type EntityLookupVariableV11 as EntityLookupVariable,
  type EntitySpawnRefVariableV12 as EntitySpawnRefVariable,
  type EntityV8 as Entity,
  type EntitySubtypeV30 as EntitySubtype,
  type EntitySpawnV2 as EntitySpawn,
  type SpawnOwnerV2 as SpawnOwner,
  type EntityModeV31 as EntityMode,
  type StackOrderEntryV31 as StackOrderEntry,
  type ItemKindV31 as ItemKind,
  type SystemVariableUidV31 as SystemVariableUid,
  type EntityTypeV1 as EntityType,
  type EntityActionV3 as EntityAction,
  type PageV1 as Page,
  type AssetV3 as Asset,
  type ChunkV12 as Chunk,
  type ChunkMarkdownV12 as ChunkMarkdown,
  type DataTableColumnV4 as DataTableColumn,
  type SceneBackgroundV4 as SceneBackground,
  type SceneMapV4 as SceneMap,
  type GridDataV1 as GridData,
  type EntityImageFormatV5 as EntityImageFormat,
  type EntityImageObjectFitV5 as EntityImageObjectFit,
  type ObjectFitV6 as ObjectFit,
  type CreditV1 as Credit,
  type WithIconV1 as WithIcon,
  type RequirementV1 as Requirement,
  type RequirementSourceV1 as RequirementSource,
  type AttributionV3 as Attribution,
  type CcLicenseV3 as CcLicense,
  type ParentAttributionV4 as ParentAttribution,
} from "./index";

/** The format version this entry point targets. */
export const BYPP_FORMAT_VERSION = 31;
