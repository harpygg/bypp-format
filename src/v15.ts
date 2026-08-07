/**
 * Frozen entry point for bypp format **v15**, imported as `bypp-format/v15`.
 *
 * It re-exports every v15 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v15
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v15` keeps compiling against v15 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v15` → `bypp-format/v16`) deliberately.
 *
 * Note there is no `DialectFontSchema` here: v15 replaced the dialect's
 * `{ fontFamily, fontUrl }` object with a bare `fontFamily` name.
 *
 * This file MUST NOT be modified once shipped — add `v16.ts` for the next one.
 */

export {
  // Manifest
  BeyondPaperV15Schema as BeyondPaperSchema,
  type BeyondPaperV15 as BeyondPaper,
  // The bundle's own cover
  BundleImageV14Schema as BundleImageSchema,
  type BundleImageV14 as BundleImage,
  // Categories — schemas
  WidgetV9Schema as WidgetSchema,
  SheetV7Schema as SheetSchema,
  StyleV3Schema as StyleSchema,
  TagV2Schema as TagSchema,
  TagCategoryV1Schema as TagCategorySchema,
  VariableV7Schema as VariableSchema,
  // The v15 headline: a font NAME, no URL
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
  // Categories — types
  type WidgetV9 as Widget,
  type WidgetActionRollV9 as WidgetActionRoll,
  type SheetV7 as Sheet,
  type StyleV3 as Style,
  type VariableV7 as Variable,
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
  type AttributionV3 as Attribution,
  type CcLicenseV3 as CcLicense,
  type ParentAttributionV4 as ParentAttribution,
} from "./index";

/** The format version this entry point targets. */
export const BYPP_FORMAT_VERSION = 15;
