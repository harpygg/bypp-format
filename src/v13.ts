/**
 * Frozen entry point for bypp format **v13**, imported as `bypp-format/v13`.
 *
 * It re-exports every v13 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v13
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v13` keeps compiling against v13 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v13` → `bypp-format/v14`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v14.ts` for the next one.
 */

export {
  // Manifest
  BeyondPaperV13Schema as BeyondPaperSchema,
  type BeyondPaperV13 as BeyondPaper,
  // Categories — schemas
  WidgetV9Schema as WidgetSchema,
  SheetV7Schema as SheetSchema,
  StyleV3Schema as StyleSchema,
  TagV2Schema as TagSchema,
  TagCategoryV1Schema as TagCategorySchema,
  VariableV7Schema as VariableSchema,
  DialectV2Schema as DialectSchema,
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
  // Per-file credit — the v13 headline
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
export const BYPP_FORMAT_VERSION = 13;

