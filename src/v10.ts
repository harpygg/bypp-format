/**
 * Frozen entry point for bypp format **v10**, imported as `bypp-format/v10`.
 *
 * It re-exports every v10 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v10
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v10` keeps compiling against v10 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v10` → `bypp-format/v11`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v11.ts` for the next one.
 */

export {
  // Manifest
  BeyondPaperV10Schema as BeyondPaperSchema,
  type BeyondPaperV10 as BeyondPaper,
  // Categories — schemas
  WidgetV7Schema as WidgetSchema,
  SheetV6Schema as SheetSchema,
  StyleV3Schema as StyleSchema,
  TagV2Schema as TagSchema,
  TagCategoryV1Schema as TagCategorySchema,
  VariableV7Schema as VariableSchema,
  DialectV2Schema as DialectSchema,
  SceneV2Schema as SceneSchema,
  SceneMapV3Schema as SceneMapSchema,
  SceneBackgroundV3Schema as SceneBackgroundSchema,
  EntityV3Schema as EntitySchema,
  DatasetV2Schema as DatasetSchema,
  PageV1Schema as PageSchema,
  AssetV2Schema as AssetSchema,
  RandomTableV7Schema as RandomTableSchema,
  ChunkV2Schema as ChunkSchema,
  DataTableV3Schema as DataTableSchema,
  // Categories — types
  type WidgetV7 as Widget,
  type SheetV6 as Sheet,
  type StyleV3 as Style,
  type VariableV7 as Variable,
  type EntityV3 as Entity,
  type PageV1 as Page,
  type AssetV2 as Asset,
  type ChunkV2 as Chunk,
  type DataTableColumnV2 as DataTableColumn,
  type SceneBackgroundV3 as SceneBackground,
  type GridDataV1 as GridData,
  type EntityImageFormatV5 as EntityImageFormat,
  type EntityImageObjectFitV5 as EntityImageObjectFit,
  type ObjectFitV6 as ObjectFit,
  type AttributionV3 as Attribution,
  type CcLicenseV3 as CcLicense,
  type ParentAttributionV4 as ParentAttribution,
} from "./index";

/** The format version this entry point targets. */
export const BYPP_FORMAT_VERSION = 10;
