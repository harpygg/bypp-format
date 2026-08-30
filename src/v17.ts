/**
 * Frozen entry point for bypp format **v17**, imported as `bypp-format/v17`.
 *
 * It re-exports every v17 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v17
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v17` keeps compiling against v17 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v17` → `bypp-format/v18`) deliberately.
 *
 * The v17 headline is on `TagSchema` and `TagCategorySchema`: both can name an
 * icon. The reference icon registry is NOT re-exported here: it belongs to no
 * version, validates nothing, and adding a slug to it never moves the format.
 * Reach it deliberately at `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v18.ts` for the next one.
 */

export {
  // Manifest
  BeyondPaperV17Schema as BeyondPaperSchema,
  type BeyondPaperV17 as BeyondPaper,
  // The bundle's own cover
  BundleImageV14Schema as BundleImageSchema,
  type BundleImageV14 as BundleImage,
  // Categories — schemas
  WidgetV9Schema as WidgetSchema,
  SheetV7Schema as SheetSchema,
  StyleV3Schema as StyleSchema,
  // The v17 headline: a tag and its category can name an icon
  TagV3Schema as TagSchema,
  TagCategoryV2Schema as TagCategorySchema,
  VariableV8Schema as VariableSchema,
  DialectV3Schema as DialectSchema,
  SceneV2Schema as SceneSchema,
  SceneMapV4Schema as SceneMapSchema,
  SceneBackgroundV4Schema as SceneBackgroundSchema,
  EntityV4Schema as EntitySchema,
  DatasetV2Schema as DatasetSchema,
  PageV1Schema as PageSchema,
  AssetV3Schema as AssetSchema,
  RandomTableV7Schema as RandomTableSchema,
  ChunkV11Schema as ChunkSchema,
  DataTableV3Schema as DataTableSchema,
  // Per-file credit
  CreditV1Schema as CreditSchema,
  WithCreditV1Schema as WithCreditSchema,
  // The icon mixin — on a variable since v16, on a tag and a category since v17
  WithIconV1Schema as WithIconSchema,
  // Categories — types
  type WidgetV9 as Widget,
  type WidgetActionRollV9 as WidgetActionRoll,
  type SheetV7 as Sheet,
  type StyleV3 as Style,
  type TagV3 as Tag,
  type TagCategoryV2 as TagCategory,
  type VariableV8 as Variable,
  type EntityV4 as Entity,
  type PageV1 as Page,
  type AssetV3 as Asset,
  type ChunkV11 as Chunk,
  type DataTableColumnV2 as DataTableColumn,
  type SceneBackgroundV4 as SceneBackground,
  type SceneMapV4 as SceneMap,
  type GridDataV1 as GridData,
  type EntityImageFormatV5 as EntityImageFormat,
  type EntityImageObjectFitV5 as EntityImageObjectFit,
  type ObjectFitV6 as ObjectFit,
  type CreditV1 as Credit,
  type WithIconV1 as WithIcon,
  type AttributionV3 as Attribution,
  type CcLicenseV3 as CcLicense,
  type ParentAttributionV4 as ParentAttribution,
} from "./index";

/** The format version this entry point targets. */
export const BYPP_FORMAT_VERSION = 17;
