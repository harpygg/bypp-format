/**
 * Frozen entry point for bypp format **v21**, imported as `bypp-format/v21`.
 *
 * It re-exports every v21 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v21
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v21` keeps compiling against v21 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v20` → `bypp-format/v21`) deliberately.
 *
 * The v21 headline is the markdown block: a second kind of text block, holding
 * the markdown source rather than the HTML a rich-text editor produces.
 *
 * This file MUST NOT be modified once shipped — add `v22.ts` for the next one.
 */

export {
  // Manifest
  BeyondPaperV21Schema as BeyondPaperSchema,
  type BeyondPaperV21 as BeyondPaper,
  // What a document reads but does not carry
  RequirementV1Schema as RequirementSchema,
  RequirementSourceV1Schema as RequirementSourceSchema,
  ByppFileUrlV1Schema as ByppFileUrlSchema,
  // The bundle's own cover
  BundleImageV14Schema as BundleImageSchema,
  type BundleImageV14 as BundleImage,
  // Categories — schemas
  WidgetV10Schema as WidgetSchema,
  SheetV7Schema as SheetSchema,
  StyleV3Schema as StyleSchema,
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
  type WidgetV10 as Widget,
  type WidgetActionRollV9 as WidgetActionRoll,
  type WidgetEntityGridV10 as WidgetEntityGrid,
  type SheetV7 as Sheet,
  type StyleV3 as Style,
  type TagV3 as Tag,
  type TagCategoryV2 as TagCategory,
  type VariableV9 as Variable,
  type EntityRefVariableV9 as EntityRefVariable,
  type EntityLookupVariableV9 as EntityLookupVariable,
  type EntityV5 as Entity,
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
export const BYPP_FORMAT_VERSION = 21;
