/**
 * Frozen entry point for bypp format **v25**, imported as `bypp-format/v25`.
 *
 * It re-exports every v25 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v25
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v25` keeps compiling against v25 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v24` → `bypp-format/v25`) deliberately.
 *
 * The v25 headline is a document that can say how its own prose should look:
 * a new root `theme` key carrying a style per element of the content, a style
 * per tag in the order they are laid, and the name of the theme they were
 * written against.
 *
 * This file MUST NOT be modified once shipped — add `v26.ts` for the next one.
 */

export {
  // Manifest
  BeyondPaperV25Schema as BeyondPaperSchema,
  type BeyondPaperV25 as BeyondPaper,
  // What a document reads but does not carry
  RequirementV1Schema as RequirementSchema,
  RequirementSourceV1Schema as RequirementSourceSchema,
  ByppFileUrlV1Schema as ByppFileUrlSchema,
  // The bundle's own cover
  BundleImageV14Schema as BundleImageSchema,
  type BundleImageV14 as BundleImage,
  // How the document wants its own prose to look
  ThemeV25Schema as ThemeSchema,
  ThemeTagStyleV25Schema as ThemeTagStyleSchema,
  ThemeStyleV25Schema as ThemeStyleSchema,
  type ThemeV25 as Theme,
  type ThemeTagStyleV25 as ThemeTagStyle,
  type ThemeStyleV25 as ThemeStyle,
  // Categories — schemas
  WidgetV13Schema as WidgetSchema,
  SheetV7Schema as SheetSchema,
  StyleV6Schema as StyleSchema,
  SidesV6Schema as SidesSchema,
  TagV3Schema as TagSchema,
  TagCategoryV2Schema as TagCategorySchema,
  VariableV9Schema as VariableSchema,
  DialectV3Schema as DialectSchema,
  SceneV2Schema as SceneSchema,
  SceneMapV4Schema as SceneMapSchema,
  SceneBackgroundV4Schema as SceneBackgroundSchema,
  EntityV5Schema as EntitySchema,
  EntityActionV1Schema as EntityActionSchema,
  DatasetV2Schema as DatasetSchema,
  PageV1Schema as PageSchema,
  AssetV3Schema as AssetSchema,
  RandomTableV7Schema as RandomTableSchema,
  ChunkV12Schema as ChunkSchema,
  ChunkMarkdownV12Schema as ChunkMarkdownSchema,
  DataTableV3Schema as DataTableSchema,
  // Per-file credit
  CreditV1Schema as CreditSchema,
  WithCreditV1Schema as WithCreditSchema,
  // The icon mixin — on a variable since v16, on a tag and a category since v17
  WithIconV1Schema as WithIconSchema,
  // Categories — types
  type WidgetV13 as Widget,
  type WidgetActionRollV9 as WidgetActionRoll,
  type WidgetEntityGridV10 as WidgetEntityGrid,
  type SheetV7 as Sheet,
  type StyleV6 as Style,
  type SidesV6 as Sides,
  type TagV3 as Tag,
  type TagCategoryV2 as TagCategory,
  type VariableV9 as Variable,
  type EntityRefVariableV9 as EntityRefVariable,
  type EntityLookupVariableV9 as EntityLookupVariable,
  type EntityV5 as Entity,
  type EntityTypeV1 as EntityType,
  type EntityActionV1 as EntityAction,
  type PageV1 as Page,
  type AssetV3 as Asset,
  type ChunkV12 as Chunk,
  type ChunkMarkdownV12 as ChunkMarkdown,
  type DataTableColumnV2 as DataTableColumn,
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
export const BYPP_FORMAT_VERSION = 25;
