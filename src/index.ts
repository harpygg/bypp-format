// Version
export { BYPP_FORMAT_VERSION, BYPP_FORMAT_EXT } from "./version";

// Root schema — always points to the current shipped version
export { BeyondPaperSchema, type BeyondPaper } from "./bypp.schema";

// Per-version manifests (frozen once shipped). New versions get added here.
export {
  BeyondPaperV1Schema,
  type BeyondPaperV1,
} from "./schemas/bypp.v1.schema";
export {
  BeyondPaperV2Schema,
  type BeyondPaperV2,
} from "./schemas/bypp.v2.schema";
export {
  BeyondPaperV3Schema,
  CcLicenseV3Schema,
  AttributionV3Schema,
  ParentAttributionV3Schema,
  type BeyondPaperV3,
  type CcLicenseV3,
  type AttributionV3,
  type ParentAttributionV3,
} from "./schemas/bypp.v3.schema";
export {
  BeyondPaperV4Schema,
  ParentAttributionV4Schema,
  type BeyondPaperV4,
  type ParentAttributionV4,
} from "./schemas/bypp.v4.schema";
export {
  BeyondPaperV5Schema,
  type BeyondPaperV5,
} from "./schemas/bypp.v5.schema";
export {
  BeyondPaperV6Schema,
  type BeyondPaperV6,
} from "./schemas/bypp.v6.schema";
export {
  BeyondPaperV7Schema,
  type BeyondPaperV7,
} from "./schemas/bypp.v7.schema";
export {
  BeyondPaperV8Schema,
  type BeyondPaperV8,
} from "./schemas/bypp.v8.schema";
export {
  BeyondPaperV9Schema,
  type BeyondPaperV9,
} from "./schemas/bypp.v9.schema";
export {
  BeyondPaperV10Schema,
  type BeyondPaperV10,
} from "./schemas/bypp.v10.schema";
export {
  BeyondPaperV11Schema,
  type BeyondPaperV11,
} from "./schemas/bypp.v11.schema";

// Current aliases for license / attribution types. License and base
// attribution shapes haven't changed in v4 — they stay rooted in v3.
// `ParentAttribution` got renamed in v4 (artifactName → bundleName) so
// the alias now points to v4.
export {
  CcLicenseV3Schema as CcLicenseSchema,
  AttributionV3Schema as AttributionSchema,
  type CcLicenseV3 as CcLicense,
  type AttributionV3 as Attribution,
} from "./schemas/bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionSchema,
  type ParentAttributionV4 as ParentAttribution,
} from "./schemas/bypp.v4.schema";

// Migrations
export {
  migrate,
  MIGRATIONS,
  DOWN_MIGRATIONS,
  SCHEMA_BY_VERSION,
  type Migrator,
} from "./migrations";

// Branded UID types
export type {
  EntityUid,
  PageUid,
  ChunkUid,
  DatasetUid,
  VariableUid,
  WidgetUid,
  RandomTableUid,
  RandomTableRowUid,
  TagUid,
  TagCategoryUid,
  SceneUid,
  SceneMapUid,
  SceneBackgroundUid,
  AssetUid,
  DialectUid,
  SheetUid,
  VariableChoiceUid,
  DataTableUid,
  DataTableRowUid,
  DataTableColumnUid,
} from "./uid";

// Branded UID Zod schemas (runtime validators)
export {
  EntityUidSchema,
  PageUidSchema,
  ChunkUidSchema,
  DatasetUidSchema,
  VariableUidSchema,
  WidgetUidSchema,
  RandomTableUidSchema,
  RandomTableRowUidSchema,
  TagUidSchema,
  TagCategoryUidSchema,
  SceneUidSchema,
  SceneMapUidSchema,
  SceneBackgroundUidSchema,
  AssetUidSchema,
  DialectUidSchema,
  SheetUidSchema,
  VariableChoiceUidSchema,
  DataTableUidSchema,
  DataTableRowUidSchema,
  DataTableColumnUidSchema,
} from "./uid";

// ─── Versioned sub-schemas ──────────────────────────────────────────
// Migration authors and any consumer that needs to validate against a
// specific version's shape import these directly. The "current" aliases
// further down re-export the latest of each as `XSchema` / `type X`.

// Mixins (v1)
export { WithArchiveV1Schema } from "./mixins/with-archive.v1.schema";
export { WithAreaV1Schema } from "./mixins/with-area.v1.schema";
export { WithAssetsV1Schema } from "./mixins/with-assets.v1.schema";
export { WithAudioUrlsV1Schema } from "./mixins/with-audio-urls.v1.schema";
export {
  WithDataV1Schema,
  VariableDataValueV1Schema,
  VariablesDataRecordV1Schema,
} from "./mixins/with-data.v1.schema";
export { WithImagesUrlsV1Schema } from "./mixins/with-images-urls.v1.schema";
export { WithNameV1Schema } from "./mixins/with-name.v1.schema";
export { WithPagesV1Schema } from "./mixins/with-pages.v1.schema";
export { WithPositionV1Schema } from "./mixins/with-position.v1.schema";
export { WithScenesV1Schema } from "./mixins/with-scenes.v1.schema";
export { WithStyleV1Schema, StyleV1Schema } from "./mixins/with-style.v1.schema";
export {
  WithStyleV2Schema,
  StyleV2Schema,
  WidgetBackgroundV6Schema,
  ObjectFitV6Schema,
  type StyleV2,
  type WidgetBackgroundV6,
  type ObjectFitV6,
} from "./mixins/with-style.v2.schema";
export {
  WithStyleV3Schema,
  StyleV3Schema,
  type StyleV3,
} from "./mixins/with-style.v3.schema";
export {
  WithVideoUrlsV1Schema,
  ImageDimensionsV1Schema,
  type ImageDimensionsV1,
} from "./mixins/with-video-urls.v1.schema";

// Mixins (v2)
export {
  TranslatableTextV2Schema,
  type TranslatableTextV2,
} from "./mixins/translatable-text.v2.schema";
export {
  WithLocalizedNameV2Schema,
} from "./mixins/with-localized-name.v2.schema";
export { WithArchiveV2Schema } from "./mixins/with-archive.v2.schema";
export { WithPagesV2Schema } from "./mixins/with-pages.v2.schema";
export { WithScenesV2Schema } from "./mixins/with-scenes.v2.schema";
export { WithImagesUrlsV2Schema } from "./mixins/with-images-urls.v2.schema";
export { WithVideoUrlsV2Schema } from "./mixins/with-video-urls.v2.schema";

// Mixins (v3)
export { WithImagesUrlsV3Schema } from "./mixins/with-images-urls.v3.schema";
export {
  WithAudioUrlsV2Schema,
  KNOWN_AUDIO_EXTS,
  type KnownAudioExt,
} from "./mixins/with-audio-urls.v2.schema";

// Models (v1)
export {
  AssetV1Schema,
  AssetBaseV1Schema,
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema,
  type AssetV1,
  type AssetBaseV1,
  type ImageAssetV1,
  type VideoAssetV1,
  type AudioAssetV1,
  type AudioExternalAssetV1,
  type EntityAssetV1,
} from "./models/asset.v1.schema";

export {
  ChunkV1Schema,
  ChunkBaseV1Schema,
  ChunkTextV1Schema,
  ChunkTextProxyV1Schema,
  ChunkGalleryV1Schema,
  ChunkRandomV1Schema,
  ChunkBlockStyleV1Schema,
  ChunkHeadingModeV1Schema,
  ChunkHeadingLevelV1Schema,
  type ChunkV1,
  type ChunkBaseV1,
  type ChunkTextV1,
  type ChunkTextProxyV1,
  type ChunkGalleryV1,
  type ChunkRandomV1,
  type ChunkBlockStyleV1,
  type ChunkHeadingModeV1,
  type ChunkHeadingLevelV1,
} from "./models/chunk.v1.schema";

export {
  DatasetV1Schema,
  DatasetTargetV1Schema,
  type DatasetV1,
} from "./models/dataset.v1.schema";

export {
  DialectV1Schema,
  DialectFontV1Schema,
  type DialectV1,
  type DialectFontV1,
} from "./models/dialect.v1.schema";

export {
  EntityV1Schema,
  EntityBaseV1Schema,
  CharacterEntityV1Schema,
  CreatureEntityV1Schema,
  GroupEntityV1Schema,
  PlaceEntityV1Schema,
  ItemEntityV1Schema,
  NoteEntityV1Schema,
  AbilityEntityV1Schema,
  StoryEntityV1Schema,
  EventEntityV1Schema,
  GroupRankV1Schema,
  GroupRankCharacterV1Schema,
  EntityTypeV1Schema,
  type EntityV1,
  type EntityTypeV1,
  type EntityBaseV1,
  type CharacterEntityV1,
  type CreatureEntityV1,
  type GroupEntityV1,
  type PlaceEntityV1,
  type GroupRankV1,
  type GroupRankCharacterV1,
} from "./models/entity.v1.schema";

export {
  PageV1Schema,
  PageStandardV1Schema,
  PageEntityV1Schema,
  type PageV1,
  type PageStandardV1,
  type PageEntityV1,
} from "./models/page.v1.schema";

export {
  RandomTableV1Schema,
  RandomTableRowV1Schema,
  type RandomTableV1,
  type RandomTableRowV1,
} from "./models/random-table.v1.schema";

export {
  SceneV1Schema,
  SceneGameModeV1Schema,
  type SceneV1,
  type SceneGameModeV1,
} from "./models/scene.v1.schema";

export {
  SceneBackgroundV1Schema,
  SceneBackgroundBaseV1Schema,
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema,
  type SceneBackgroundV1,
  type SceneBackgroundBaseV1,
  type CustomImageSceneBackgroundV1,
  type CustomVideoSceneBackgroundV1,
} from "./models/scene-background.v1.schema";

export {
  SceneMapV1Schema,
  SceneMapBaseV1Schema,
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema,
  GridDataV1Schema,
  type SceneMapV1,
  type SceneMapBaseV1,
  type CustomImageSceneMapV1,
  type CustomVideoSceneMapV1,
  type Dd2VttSceneMapV1,
  type GridDataV1,
} from "./models/scene-map.v1.schema";

export {
  TagV1Schema,
  type TagV1,
} from "./models/tag.v1.schema";

export {
  TagCategoryV1Schema,
  type TagCategoryV1,
} from "./models/tag-category.v1.schema";

export {
  VariableV1Schema,
  VariableBaseV1Schema,
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  ChoiceOptionV1Schema,
  ActionVisualV1Schema,
  IconCompoV1Schema,
  IconCompoSlotConfigV1Schema,
  type VariableV1,
  type VariableBaseV1,
  type NumberVariableV1,
  type TextVariableV1,
  type BooleanVariableV1,
  type ChoiceVariableV1,
  type FormulaVariableV1,
  type RollVariableV1,
  type ChoiceOptionV1,
  type ActionVisualV1,
  type IconCompoV1,
  type IconCompoSlotConfigV1,
} from "./models/variable.v1.schema";

export {
  WidgetV1Schema,
  WidgetBaseV1Schema,
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema,
  BarOrientationV1Schema,
  type WidgetV1,
  type WidgetBaseV1,
  type WidgetEmptyV1,
  type WidgetBigNumberV1,
  type WidgetPlainTextV1,
  type WidgetToggleV1,
  type WidgetBulletListV1,
  type WidgetInlineListV1,
  type WidgetPipsV1,
  type WidgetBarV1,
  type BarOrientationV1,
} from "./models/widget.v1.schema";

// Models (v5) — entity image renditions (single source of truth for the
// `entityImage` widget's `formatSlug`).
export {
  ENTITY_IMAGE_RENDITIONS,
  EntityImageFormatV5Schema,
  type EntityImageFormatV5,
} from "./models/entity-image-format.v5.schema";

// Models (v5) — widget union extended with the `entityImage` variant.
export {
  WidgetV5Schema,
  WidgetEntityImageV5Schema,
  EntityImageObjectFitV5Schema,
  type WidgetV5,
  type WidgetEntityImageV5,
  type EntityImageObjectFitV5,
} from "./models/widget.v5.schema";

// Models (v2)
export {
  VariableV2Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
  type VariableV2,
  type DataTableRefVariableV2,
  type DataTableLookupVariableV2,
} from "./models/variable.v2.schema";

// Models (v5) — variable union extended with the `image` variant.
export {
  VariableV5Schema,
  ImageVariableV5Schema,
  type VariableV5,
  type ImageVariableV5,
} from "./models/variable.v5.schema";

// Models (v6) — variable union extended with `dataTableDirectLookup`.
export {
  VariableV6Schema,
  DataTableDirectLookupVariableV6Schema,
  type VariableV6,
  type DataTableDirectLookupVariableV6,
} from "./models/variable.v6.schema";

export {
  SheetV2Schema,
  type SheetV2,
} from "./models/sheet.v2.schema";

export {
  DataTableV2Schema,
  DataTableColumnV2Schema,
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema,
  DataTableRowV2Schema,
  DataTableCellValueV2Schema,
  type DataTableV2,
  type DataTableColumnV2,
  type DataTableColumnNumberV2,
  type DataTableColumnTextV2,
  type DataTableColumnBooleanV2,
  type DataTableColumnChoiceV2,
  type DataTableColumnIconV2,
  type DataTableColumnTranslatableTextV2,
  type DataTableColumnDataTableRefV2,
  type DataTableColumnDataTableLookupV2,
  type DataTableRowV2,
  type DataTableCellValueV2,
} from "./models/data-table.v2.schema";

export {
  EntityV2Schema,
  EntityBaseV2Schema,
  CharacterEntityV2Schema,
  CreatureEntityV2Schema,
  GroupEntityV2Schema,
  PlaceEntityV2Schema,
  ItemEntityV2Schema,
  NoteEntityV2Schema,
  AbilityEntityV2Schema,
  StoryEntityV2Schema,
  EventEntityV2Schema,
  EntityTypeV2Schema,
  type EntityV2,
  type EntityTypeV2,
  type EntityBaseV2,
  type CharacterEntityV2,
  type CreatureEntityV2,
  type GroupEntityV2,
  type PlaceEntityV2,
} from "./models/entity.v2.schema";

export {
  ChunkV2Schema,
  ChunkBaseV2Schema,
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
  type ChunkV2,
  type ChunkBaseV2,
  type ChunkTextV2,
  type ChunkTextProxyV2,
  type ChunkGalleryV2,
  type ChunkRandomV2,
} from "./models/chunk.v2.schema";

export {
  ChunkV11Schema,
  ChunkTextV11Schema,
  type ChunkV11,
  type ChunkTextV11,
} from "./models/chunk.v11.schema";

export {
  DatasetV2Schema,
  DatasetTargetV2Schema,
  type DatasetV2,
} from "./models/dataset.v2.schema";

export {
  DialectV2Schema,
  DialectFontV2Schema,
  type DialectV2,
  type DialectFontV2,
} from "./models/dialect.v2.schema";

export {
  RandomTableV2Schema,
  RandomTableRowV2Schema,
  type RandomTableV2,
  type RandomTableRowV2,
} from "./models/random-table.v2.schema";

export {
  RandomTableV7Schema,
  RandomTableRowV7Schema,
  type RandomTableV7,
  type RandomTableRowV7,
} from "./models/random-table.v7.schema";

export { TagV2Schema, type TagV2 } from "./models/tag.v2.schema";

export {
  SceneV2Schema,
  type SceneV2,
} from "./models/scene.v2.schema";

export {
  SceneBackgroundV2Schema,
  SceneBackgroundBaseV2Schema,
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema,
  type SceneBackgroundV2,
  type SceneBackgroundBaseV2,
  type CustomImageSceneBackgroundV2,
  type CustomVideoSceneBackgroundV2,
} from "./models/scene-background.v2.schema";

export {
  SceneMapV2Schema,
  SceneMapBaseV2Schema,
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema,
  KNOWN_VTT_SOURCE_FORMATS,
  type SceneMapV2,
  type SceneMapBaseV2,
  type CustomImageSceneMapV2,
  type CustomVideoSceneMapV2,
  type KnownVttSourceFormat,
} from "./models/scene-map.v2.schema";

export {
  AssetV2Schema,
  AssetBaseV2Schema,
  ImageAssetV2Schema,
  VideoAssetV2Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema,
  EntityAssetV2Schema,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  type AssetV2,
  type AssetBaseV2,
  type ImageAssetV2,
  type VideoAssetV2,
  type AudioAssetV2,
  type AudioExternalAssetV2,
  type EntityAssetV2,
  type KnownExternalAudioProvider,
} from "./models/asset.v2.schema";

// Models (v3)
export { SheetV3Schema, type SheetV3 } from "./models/sheet.v3.schema";

export {
  DataTableV3Schema,
  DataTableRowV3Schema,
  type DataTableV3,
  type DataTableRowV3,
} from "./models/data-table.v3.schema";

// Models (v10 image `dimensions`) — image-bearing models forked to carry the
// original image's pixel dimensions (see `with-images-urls.v3.schema`).
export { SheetV6Schema, type SheetV6 } from "./models/sheet.v6.schema";

export {
  EntityV3Schema,
  EntityBaseV3Schema,
  CharacterEntityV3Schema,
  CreatureEntityV3Schema,
  GroupEntityV3Schema,
  PlaceEntityV3Schema,
  ItemEntityV3Schema,
  NoteEntityV3Schema,
  AbilityEntityV3Schema,
  StoryEntityV3Schema,
  EventEntityV3Schema,
  EntityTypeV3Schema,
  type EntityV3,
  type EntityBaseV3,
  type CharacterEntityV3,
  type CreatureEntityV3,
  type GroupEntityV3,
  type PlaceEntityV3,
  type EntityTypeV3,
} from "./models/entity.v3.schema";

export {
  SceneMapV3Schema,
  CustomImageSceneMapV3Schema,
  CustomVideoSceneMapV3Schema,
  type SceneMapV3,
  type CustomImageSceneMapV3,
  type CustomVideoSceneMapV3,
} from "./models/scene-map.v3.schema";

export {
  SceneBackgroundV3Schema,
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema,
  type SceneBackgroundV3,
  type CustomImageSceneBackgroundV3,
  type CustomVideoSceneBackgroundV3,
} from "./models/scene-background.v3.schema";

// ─── Current aliases ────────────────────────────────────────────────
// These re-export the latest version of each sub-schema as the plain
// `XSchema` / `type X` consumers expect when they don't care about a
// specific version. Updated whenever a fork bumps a sub-schema.

export {
  AssetV2Schema as AssetSchema,
  AssetBaseV2Schema as AssetBaseSchema,
  ImageAssetV2Schema as ImageAssetSchema,
  VideoAssetV2Schema as VideoAssetSchema,
  AudioAssetV2Schema as AudioAssetSchema,
  AudioExternalAssetV2Schema as AudioExternalAssetSchema,
  EntityAssetV2Schema as EntityAssetSchema,
  type AssetV2 as Asset,
  type AssetBaseV2 as AssetBase,
  type ImageAssetV2 as ImageAsset,
  type VideoAssetV2 as VideoAsset,
  type AudioAssetV2 as AudioAsset,
  type AudioExternalAssetV2 as AudioExternalAsset,
  type EntityAssetV2 as EntityAsset,
} from "./models/asset.v2.schema";

export {
  ChunkV11Schema as ChunkSchema,
  ChunkTextV11Schema as ChunkTextSchema,
  type ChunkV11 as Chunk,
  type ChunkTextV11 as ChunkText,
} from "./models/chunk.v11.schema";

export {
  ChunkBaseV2Schema as ChunkBaseSchema,
  ChunkGalleryV2Schema as ChunkGallerySchema,
  ChunkRandomV2Schema as ChunkRandomSchema,
  type ChunkBaseV2 as ChunkBase,
  type ChunkGalleryV2 as ChunkGallery,
  type ChunkRandomV2 as ChunkRandom,
} from "./models/chunk.v2.schema";

// Chunk style enums unchanged in v2 — keep current aliases on v1.
export {
  ChunkBlockStyleV1Schema as ChunkBlockStyleSchema,
  ChunkHeadingModeV1Schema as ChunkHeadingModeSchema,
  ChunkHeadingLevelV1Schema as ChunkHeadingLevelSchema,
  type ChunkBlockStyleV1 as ChunkBlockStyle,
  type ChunkHeadingModeV1 as ChunkHeadingMode,
  type ChunkHeadingLevelV1 as ChunkHeadingLevel,
} from "./models/chunk.v1.schema";

export {
  DatasetV2Schema as DatasetSchema,
  DatasetTargetV2Schema as DatasetTargetSchema,
  type DatasetV2 as Dataset,
} from "./models/dataset.v2.schema";

export {
  DialectV2Schema as DialectSchema,
  DialectFontV2Schema as DialectFontSchema,
  type DialectV2 as Dialect,
  type DialectFontV2 as DialectFont,
} from "./models/dialect.v2.schema";

export {
  EntityV3Schema as EntitySchema,
  EntityBaseV3Schema as EntityBaseSchema,
  CharacterEntityV3Schema as CharacterEntitySchema,
  CreatureEntityV3Schema as CreatureEntitySchema,
  GroupEntityV3Schema as GroupEntitySchema,
  PlaceEntityV3Schema as PlaceEntitySchema,
  ItemEntityV3Schema as ItemEntitySchema,
  NoteEntityV3Schema as NoteEntitySchema,
  AbilityEntityV3Schema as AbilityEntitySchema,
  StoryEntityV3Schema as StoryEntitySchema,
  EventEntityV3Schema as EventEntitySchema,
  EntityTypeV3Schema as EntityTypeSchema,
  type EntityV3 as Entity,
  type EntityTypeV3 as EntityType,
  type EntityBaseV3 as EntityBase,
  type CharacterEntityV3 as CharacterEntity,
  type CreatureEntityV3 as CreatureEntity,
  type GroupEntityV3 as GroupEntity,
  type PlaceEntityV3 as PlaceEntity,
} from "./models/entity.v3.schema";

// Group rank shapes unchanged in v2 — alias still points at v1.
export {
  GroupRankV1Schema as GroupRankSchema,
  GroupRankCharacterV1Schema as GroupRankCharacterSchema,
  type GroupRankV1 as GroupRank,
  type GroupRankCharacterV1 as GroupRankCharacter,
} from "./models/entity.v1.schema";

export {
  PageV1Schema as PageSchema,
  PageStandardV1Schema as PageStandardSchema,
  PageEntityV1Schema as PageEntitySchema,
  type PageV1 as Page,
  type PageStandardV1 as PageStandard,
  type PageEntityV1 as PageEntity,
} from "./models/page.v1.schema";

export {
  RandomTableV7Schema as RandomTableSchema,
  RandomTableRowV7Schema as RandomTableRowSchema,
  type RandomTableV7 as RandomTable,
  type RandomTableRowV7 as RandomTableRow,
} from "./models/random-table.v7.schema";

export {
  SceneV2Schema as SceneSchema,
  type SceneV2 as Scene,
} from "./models/scene.v2.schema";

export {
  SceneBackgroundV3Schema as SceneBackgroundSchema,
  CustomImageSceneBackgroundV3Schema as CustomImageSceneBackgroundSchema,
  CustomVideoSceneBackgroundV3Schema as CustomVideoSceneBackgroundSchema,
  type SceneBackgroundV3 as SceneBackground,
  type CustomImageSceneBackgroundV3 as CustomImageSceneBackground,
  type CustomVideoSceneBackgroundV3 as CustomVideoSceneBackground,
} from "./models/scene-background.v3.schema";

// SceneBackground base is unchanged in v3 (the image mixin lives on the
// `customImage` variant, not the base) — alias stays on v2.
export {
  SceneBackgroundBaseV2Schema as SceneBackgroundBaseSchema,
  type SceneBackgroundBaseV2 as SceneBackgroundBase,
} from "./models/scene-background.v2.schema";

export {
  SceneMapV3Schema as SceneMapSchema,
  CustomImageSceneMapV3Schema as CustomImageSceneMapSchema,
  CustomVideoSceneMapV3Schema as CustomVideoSceneMapSchema,
  type SceneMapV3 as SceneMap,
  type CustomImageSceneMapV3 as CustomImageSceneMap,
  type CustomVideoSceneMapV3 as CustomVideoSceneMap,
} from "./models/scene-map.v3.schema";

// SceneMap base is unchanged in v3 (the image mixin lives on the
// `customImage` variant, not the base) — alias stays on v2.
export {
  SceneMapBaseV2Schema as SceneMapBaseSchema,
  type SceneMapBaseV2 as SceneMapBase,
} from "./models/scene-map.v2.schema";

// Grid data shape unchanged in v2 — alias kept on v1.
export {
  GridDataV1Schema as GridDataSchema,
  type GridDataV1 as GridData,
} from "./models/scene-map.v1.schema";

export { TagV2Schema as TagSchema, type TagV2 as Tag } from "./models/tag.v2.schema";

export {
  TagCategoryV1Schema as TagCategorySchema,
  type TagCategoryV1 as TagCategory,
} from "./models/tag-category.v1.schema";

export {
  DataTableRefVariableV2Schema as DataTableRefVariableSchema,
  DataTableLookupVariableV2Schema as DataTableLookupVariableSchema,
  type DataTableRefVariableV2 as DataTableRefVariable,
  type DataTableLookupVariableV2 as DataTableLookupVariable,
} from "./models/variable.v2.schema";

// Current variable aliases point at v6 — the union (and the
// `dataTableDirectLookup` variant it added) is the only variable shape that
// changed in v6.
export {
  DataTableDirectLookupVariableV6Schema as DataTableDirectLookupVariableSchema,
  type DataTableDirectLookupVariableV6 as DataTableDirectLookupVariable,
} from "./models/variable.v6.schema";
// Current variable aliases point at v7 — v7 adds `min`/`max`/`step` on the
// `number` variant.
export {
  VariableV7Schema,
  type VariableV7,
  NumberVariableV2Schema,
  type NumberVariableV2,
  VariableV7Schema as VariableSchema,
  type VariableV7 as Variable,
} from "./models/variable.v7.schema";

// The `image` variant was introduced in v5 and is unchanged in v6 — its
// current alias stays rooted in v5.
export {
  ImageVariableV5Schema as ImageVariableSchema,
  type ImageVariableV5 as ImageVariable,
} from "./models/variable.v5.schema";

export {
  VariableBaseV1Schema as VariableBaseSchema,
  NumberVariableV1Schema as NumberVariableSchema,
  TextVariableV1Schema as TextVariableSchema,
  BooleanVariableV1Schema as BooleanVariableSchema,
  ChoiceVariableV1Schema as ChoiceVariableSchema,
  FormulaVariableV1Schema as FormulaVariableSchema,
  RollVariableV1Schema as RollVariableSchema,
  ChoiceOptionV1Schema as ChoiceOptionSchema,
  ActionVisualV1Schema as ActionVisualSchema,
  IconCompoV1Schema as IconCompoSchema,
  IconCompoSlotConfigV1Schema as IconCompoSlotConfigSchema,
  type VariableBaseV1 as VariableBase,
  type NumberVariableV1 as NumberVariable,
  type TextVariableV1 as TextVariable,
  type BooleanVariableV1 as BooleanVariable,
  type ChoiceVariableV1 as ChoiceVariable,
  type FormulaVariableV1 as FormulaVariable,
  type RollVariableV1 as RollVariable,
  type ChoiceOptionV1 as ChoiceOption,
  type ActionVisualV1 as ActionVisual,
  type IconCompoV1 as IconCompo,
  type IconCompoSlotConfigV1 as IconCompoSlotConfig,
} from "./models/variable.v1.schema";

export {
  WidgetBaseV1Schema as WidgetBaseSchema,
  WidgetEmptyV1Schema as WidgetEmptySchema,
  WidgetBigNumberV1Schema as WidgetBigNumberSchema,
  WidgetPlainTextV1Schema as WidgetPlainTextSchema,
  WidgetToggleV1Schema as WidgetToggleSchema,
  WidgetBulletListV1Schema as WidgetBulletListSchema,
  WidgetInlineListV1Schema as WidgetInlineListSchema,
  WidgetPipsV1Schema as WidgetPipsSchema,
  WidgetBarV1Schema as WidgetBarSchema,
  BarOrientationV1Schema as BarOrientationSchema,
  type WidgetBaseV1 as WidgetBase,
  type WidgetEmptyV1 as WidgetEmpty,
  type WidgetBigNumberV1 as WidgetBigNumber,
  type WidgetPlainTextV1 as WidgetPlainText,
  type WidgetToggleV1 as WidgetToggle,
  type WidgetBulletListV1 as WidgetBulletList,
  type WidgetInlineListV1 as WidgetInlineList,
  type WidgetPipsV1 as WidgetPips,
  type WidgetBarV1 as WidgetBar,
  type BarOrientationV1 as BarOrientation,
} from "./models/widget.v1.schema";

// Current widget aliases point at v7 — v7 adds the `wheel` variant. The
// entity-image variant is unchanged since v6, so its alias stays on v6.
export {
  WidgetV7Schema,
  type WidgetV7,
  WidgetV7Schema as WidgetSchema,
  WidgetWheelV7Schema as WidgetWheelSchema,
  type WidgetV7 as Widget,
  type WidgetWheelV7 as WidgetWheel,
} from "./models/widget.v7.schema";
export {
  WidgetEntityImageV6Schema as WidgetEntityImageSchema,
  type WidgetEntityImageV6 as WidgetEntityImage,
} from "./models/widget.v6.schema";

// The entity-image `objectFit` enum is unchanged since v5 — kept on v5.
export {
  EntityImageObjectFitV5Schema as EntityImageObjectFitSchema,
  type EntityImageObjectFitV5 as EntityImageObjectFit,
} from "./models/widget.v5.schema";

// Current alias for the entity image rendition enum.
export {
  EntityImageFormatV5Schema as EntityImageFormatSchema,
  type EntityImageFormatV5 as EntityImageFormat,
} from "./models/entity-image-format.v5.schema";

// Raw v5 sheet re-export kept for migration authors.
export { SheetV5Schema, type SheetV5 } from "./models/sheet.v5.schema";

// Current sheet aliases point at v6 — v6 adds the original image's
// `dimensions` (via WithImagesUrlsV3).
export {
  SheetV6Schema as SheetSchema,
  type SheetV6 as Sheet,
} from "./models/sheet.v6.schema";

export {
  DataTableV3Schema as DataTableSchema,
  DataTableRowV3Schema as DataTableRowSchema,
  type DataTableV3 as DataTable,
  type DataTableRowV3 as DataTableRow,
} from "./models/data-table.v3.schema";

// Column-level shapes unchanged from v2.
export {
  DataTableColumnV2Schema as DataTableColumnSchema,
  DataTableColumnNumberV2Schema as DataTableColumnNumberSchema,
  DataTableColumnTextV2Schema as DataTableColumnTextSchema,
  DataTableColumnBooleanV2Schema as DataTableColumnBooleanSchema,
  DataTableColumnChoiceV2Schema as DataTableColumnChoiceSchema,
  DataTableColumnIconV2Schema as DataTableColumnIconSchema,
  DataTableColumnTranslatableTextV2Schema as DataTableColumnTranslatableTextSchema,
  DataTableColumnDataTableRefV2Schema as DataTableColumnDataTableRefSchema,
  DataTableColumnDataTableLookupV2Schema as DataTableColumnDataTableLookupSchema,
  DataTableCellValueV2Schema as DataTableCellValueSchema,
  type DataTableColumnV2 as DataTableColumn,
  type DataTableColumnNumberV2 as DataTableColumnNumber,
  type DataTableColumnTextV2 as DataTableColumnText,
  type DataTableColumnBooleanV2 as DataTableColumnBoolean,
  type DataTableColumnChoiceV2 as DataTableColumnChoice,
  type DataTableColumnIconV2 as DataTableColumnIcon,
  type DataTableColumnTranslatableTextV2 as DataTableColumnTranslatableText,
  type DataTableColumnDataTableRefV2 as DataTableColumnDataTableRef,
  type DataTableColumnDataTableLookupV2 as DataTableColumnDataTableLookup,
  type DataTableCellValueV2 as DataTableCellValue,
} from "./models/data-table.v2.schema";

// Action visual (used by RollVariable)
export {
  IconCompoSlotConfigV1Schema as ActionVisualIconCompoSlotConfigSchema,
} from "./models/variable.v1.schema";

// Mixin current aliases
export {
  TranslatableTextV2Schema as TranslatableTextSchema,
  type TranslatableTextV2 as TranslatableText,
} from "./mixins/translatable-text.v2.schema";

export {
  WithImagesUrlsV2Schema as WithImagesUrlsSchema,
} from "./mixins/with-images-urls.v2.schema";
export {
  WithAudioUrlsV2Schema as WithAudioUrlsSchema,
} from "./mixins/with-audio-urls.v2.schema";
export {
  WithVideoUrlsV2Schema as WithVideoUrlsSchema,
} from "./mixins/with-video-urls.v2.schema";
// `ImageDimensions` shape unchanged in v2 — alias kept on v1.
export {
  ImageDimensionsV1Schema as ImageDimensionsSchema,
  type ImageDimensionsV1 as ImageDimensions,
} from "./mixins/with-video-urls.v1.schema";
export {
  WithArchiveV2Schema as WithArchiveSchema,
} from "./mixins/with-archive.v2.schema";
export { WithPagesV2Schema as WithPagesSchema } from "./mixins/with-pages.v2.schema";
export { WithScenesV2Schema as WithScenesSchema } from "./mixins/with-scenes.v2.schema";
export {
  WithDataV1Schema as WithDataSchema,
  VariableDataValueV1Schema as VariableDataValueSchema,
  VariablesDataRecordV1Schema as VariablesDataRecordSchema,
} from "./mixins/with-data.v1.schema";
export { WithAssetsV1Schema as WithAssetsSchema } from "./mixins/with-assets.v1.schema";
export { WithAreaV1Schema as WithAreaSchema } from "./mixins/with-area.v1.schema";
export { WithPositionV1Schema as WithPositionSchema } from "./mixins/with-position.v1.schema";
export {
  WidgetBackgroundV6Schema as WidgetBackgroundSchema,
  ObjectFitV6Schema as ObjectFitSchema,
  type WidgetBackgroundV6 as WidgetBackground,
  type ObjectFitV6 as ObjectFit,
} from "./mixins/with-style.v2.schema";
// Current style aliases point at v3 — v3 adds a cascading `rotation`.
export {
  WithStyleV3Schema as WithStyleSchema,
  StyleV3Schema as StyleSchema,
  type StyleV3 as Style,
} from "./mixins/with-style.v3.schema";
export { WithNameV1Schema as WithNameSchema } from "./mixins/with-name.v1.schema";
export {
  WithLocalizedNameV2Schema as WithLocalizedNameSchema,
} from "./mixins/with-localized-name.v2.schema";

// ─── Bypp-prefixed type aliases ─────────────────────────────────────
// For consumers (like Harpy) that have their own types with the same
// names and want to avoid `import { Entity as ByppEntity }` aliasing.

export type { EntityV3 as ByppEntity } from "./models/entity.v3.schema";
export type { EntityBaseV3 as ByppEntityBase } from "./models/entity.v3.schema";
export type { CharacterEntityV3 as ByppCharacterEntity } from "./models/entity.v3.schema";
export type { CreatureEntityV3 as ByppCreatureEntity } from "./models/entity.v3.schema";
export type { GroupEntityV3 as ByppGroupEntity } from "./models/entity.v3.schema";
export type { PlaceEntityV3 as ByppPlaceEntity } from "./models/entity.v3.schema";
export type { GroupRankV1 as ByppGroupRank } from "./models/entity.v1.schema";
export type { GroupRankCharacterV1 as ByppGroupRankCharacter } from "./models/entity.v1.schema";
export type { PageV1 as ByppPage } from "./models/page.v1.schema";
export type { PageStandardV1 as ByppPageStandard } from "./models/page.v1.schema";
export type { PageEntityV1 as ByppPageEntity } from "./models/page.v1.schema";
export type { ChunkV11 as ByppChunk } from "./models/chunk.v11.schema";
export type { ChunkBaseV2 as ByppChunkBase } from "./models/chunk.v2.schema";
export type { ChunkTextV11 as ByppChunkText } from "./models/chunk.v11.schema";
export type { ChunkGalleryV2 as ByppChunkGallery } from "./models/chunk.v2.schema";
export type { ChunkRandomV2 as ByppChunkRandom } from "./models/chunk.v2.schema";
export type { DatasetV2 as ByppDataset } from "./models/dataset.v2.schema";
export type { VariableV7 as ByppVariable } from "./models/variable.v7.schema";
export type { VariableBaseV1 as ByppVariableBase } from "./models/variable.v1.schema";
export type { WidgetV7 as ByppWidget } from "./models/widget.v7.schema";
export type { WidgetBaseV1 as ByppWidgetBase } from "./models/widget.v1.schema";
export type { RandomTableV7 as ByppRandomTable } from "./models/random-table.v7.schema";
export type { RandomTableRowV7 as ByppRandomTableRow } from "./models/random-table.v7.schema";
export type { TagV2 as ByppTag } from "./models/tag.v2.schema";
export type { TagCategoryV1 as ByppTagCategory } from "./models/tag-category.v1.schema";
export type { SceneV2 as ByppScene } from "./models/scene.v2.schema";
export type { SceneMapV3 as ByppSceneMap } from "./models/scene-map.v3.schema";
export type { SceneMapBaseV2 as ByppSceneMapBase } from "./models/scene-map.v2.schema";
export type { SceneBackgroundV3 as ByppSceneBackground } from "./models/scene-background.v3.schema";
export type { SceneBackgroundBaseV2 as ByppSceneBackgroundBase } from "./models/scene-background.v2.schema";
export type { AssetV2 as ByppAsset } from "./models/asset.v2.schema";
export type { AssetBaseV2 as ByppAssetBase } from "./models/asset.v2.schema";
export type { DialectV2 as ByppDialect } from "./models/dialect.v2.schema";
export type { DialectFontV2 as ByppDialectFont } from "./models/dialect.v2.schema";
export type { SheetV6 as ByppSheet } from "./models/sheet.v6.schema";
export type { DataTableV3 as ByppDataTable } from "./models/data-table.v3.schema";
export type { DataTableColumnV2 as ByppDataTableColumn } from "./models/data-table.v2.schema";
export type { DataTableRowV2 as ByppDataTableRow } from "./models/data-table.v2.schema";
export type { DataTableRefVariableV2 as ByppDataTableRefVariable } from "./models/variable.v2.schema";
export type { DataTableLookupVariableV2 as ByppDataTableLookupVariable } from "./models/variable.v2.schema";
