// Version
export { BYPP_FORMAT_VERSION, BYPP_FORMAT_EXT } from "./version";

// Root schema
export { BeyondPaperSchema, type BeyondPaper } from "./bypp.schema";

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
} from "./uid";

// Mixin schemas
export { WithNameSchema } from "./mixins/with-name.schema";
export { WithImagesUrlsSchema } from "./mixins/with-images-urls.schema";
export { WithAudioUrlsSchema } from "./mixins/with-audio-urls.schema";
export {
  WithVideoUrlsSchema,
  ImageDimensionsSchema,
  type ImageDimensions,
} from "./mixins/with-video-urls.schema";
export { WithArchiveSchema } from "./mixins/with-archive.schema";
export { WithPagesSchema } from "./mixins/with-pages.schema";
export { WithScenesSchema } from "./mixins/with-scenes.schema";
export {
  WithDataSchema,
  VariableDataValueSchema,
  VariablesDataRecordSchema,
} from "./mixins/with-data.schema";
export { WithAssetsSchema } from "./mixins/with-assets.schema";
export { WithAreaSchema } from "./mixins/with-area.schema";
export { WithPositionSchema } from "./mixins/with-position.schema";
export { WithStyleSchema, StyleSchema } from "./mixins/with-style.schema";

// Entity
export {
  EntitySchema,
  EntityBaseSchema,
  CharacterEntitySchema,
  CreatureEntitySchema,
  GroupEntitySchema,
  PlaceEntitySchema,
  ItemEntitySchema,
  NoteEntitySchema,
  AbilityEntitySchema,
  StoryEntitySchema,
  EventEntitySchema,
  GroupRankSchema,
  GroupRankCharacterSchema,
  EntityTypeSchema,
  type Entity,
  type EntityType,
  type EntityBase,
  type CharacterEntity,
  type CreatureEntity,
  type GroupEntity,
  type PlaceEntity,
  type GroupRank,
  type GroupRankCharacter,
} from "./models/entity.schema";

// Page
export {
  PageSchema,
  PageStandardSchema,
  PageEntitySchema,
  type Page,
  type PageStandard,
  type PageEntity,
} from "./models/page.schema";

// Chunk
export {
  ChunkSchema,
  ChunkBaseSchema,
  ChunkTextSchema,
  ChunkTextProxySchema,
  ChunkGallerySchema,
  ChunkRandomSchema,
  ChunkBlockStyleSchema,
  ChunkHeadingModeSchema,
  ChunkHeadingLevelSchema,
  type Chunk,
  type ChunkBase,
  type ChunkText,
  type ChunkTextProxy,
  type ChunkGallery,
  type ChunkRandom,
  type ChunkBlockStyle,
  type ChunkHeadingMode,
  type ChunkHeadingLevel,
} from "./models/chunk.schema";

// Dataset
export {
  DatasetSchema,
  DatasetTargetSchema,
  type Dataset,
} from "./models/dataset.schema";

// Variable
export {
  VariableSchema,
  VariableBaseSchema,
  NumberVariableSchema,
  TextVariableSchema,
  BooleanVariableSchema,
  ChoiceVariableSchema,
  FormulaVariableSchema,
  RollVariableSchema,
  ChoiceOptionSchema,
  type Variable,
  type VariableBase,
  type NumberVariable,
  type TextVariable,
  type BooleanVariable,
  type ChoiceVariable,
  type FormulaVariable,
  type RollVariable,
  type ChoiceOption,
} from "./models/variable.schema";

// Widget
export {
  WidgetSchema,
  WidgetBaseSchema,
  WidgetEmptySchema,
  WidgetBigNumberSchema,
  WidgetPlainTextSchema,
  WidgetToggleSchema,
  WidgetBulletListSchema,
  WidgetInlineListSchema,
  WidgetPipsSchema,
  type Widget,
  type WidgetBase,
  type WidgetEmpty,
  type WidgetBigNumber,
  type WidgetPlainText,
  type WidgetToggle,
  type WidgetBulletList,
  type WidgetInlineList,
  type WidgetPips,
} from "./models/widget.schema";

// Random Table
export {
  RandomTableSchema,
  RandomTableRowSchema,
  type RandomTable,
  type RandomTableRow,
} from "./models/random-table.schema";

// Tag
export { TagSchema, type Tag } from "./models/tag.schema";
export { TagCategorySchema, type TagCategory } from "./models/tag-category.schema";

// Scene
export {
  SceneSchema,
  SceneGameModeSchema,
  type Scene,
  type SceneGameMode,
} from "./models/scene.schema";

// Scene Map
export {
  SceneMapSchema,
  SceneMapBaseSchema,
  CustomImageSceneMapSchema,
  CustomVideoSceneMapSchema,
  Dd2VttSceneMapSchema,
  GridDataSchema,
  type SceneMap,
  type SceneMapBase,
  type CustomImageSceneMap,
  type CustomVideoSceneMap,
  type Dd2VttSceneMap,
  type GridData,
} from "./models/scene-map.schema";

// Scene Background
export {
  SceneBackgroundSchema,
  SceneBackgroundBaseSchema,
  CustomImageSceneBackgroundSchema,
  CustomVideoSceneBackgroundSchema,
  type SceneBackground,
  type SceneBackgroundBase,
  type CustomImageSceneBackground,
  type CustomVideoSceneBackground,
} from "./models/scene-background.schema";

// Asset
export {
  AssetSchema,
  AssetBaseSchema,
  ImageAssetSchema,
  VideoAssetSchema,
  AudioAssetSchema,
  AudioExternalAssetSchema,
  EntityAssetSchema,
  type Asset,
  type AssetBase,
  type ImageAsset,
  type VideoAsset,
  type AudioAsset,
  type AudioExternalAsset,
  type EntityAsset,
} from "./models/asset.schema";

// Dialect
export {
  DialectSchema,
  DialectFontSchema,
  type Dialect,
  type DialectFont,
} from "./models/dialect.schema";

// ─── Bypp-prefixed type aliases ─────────────────────────────────────
// For consumers (like Harpy) that have their own types with the same
// names and want to avoid `import { Entity as ByppEntity }` aliasing.

export type { Entity as ByppEntity } from "./models/entity.schema";
export type { EntityBase as ByppEntityBase } from "./models/entity.schema";
export type { CharacterEntity as ByppCharacterEntity } from "./models/entity.schema";
export type { CreatureEntity as ByppCreatureEntity } from "./models/entity.schema";
export type { GroupEntity as ByppGroupEntity } from "./models/entity.schema";
export type { PlaceEntity as ByppPlaceEntity } from "./models/entity.schema";
export type { GroupRank as ByppGroupRank } from "./models/entity.schema";
export type { GroupRankCharacter as ByppGroupRankCharacter } from "./models/entity.schema";
export type { Page as ByppPage } from "./models/page.schema";
export type { PageStandard as ByppPageStandard } from "./models/page.schema";
export type { PageEntity as ByppPageEntity } from "./models/page.schema";
export type { Chunk as ByppChunk } from "./models/chunk.schema";
export type { ChunkBase as ByppChunkBase } from "./models/chunk.schema";
export type { ChunkText as ByppChunkText } from "./models/chunk.schema";
export type { ChunkTextProxy as ByppChunkTextProxy } from "./models/chunk.schema";
export type { ChunkGallery as ByppChunkGallery } from "./models/chunk.schema";
export type { ChunkRandom as ByppChunkRandom } from "./models/chunk.schema";
export type { Dataset as ByppDataset } from "./models/dataset.schema";
export type { Variable as ByppVariable } from "./models/variable.schema";
export type { VariableBase as ByppVariableBase } from "./models/variable.schema";
export type { Widget as ByppWidget } from "./models/widget.schema";
export type { WidgetBase as ByppWidgetBase } from "./models/widget.schema";
export type { RandomTable as ByppRandomTable } from "./models/random-table.schema";
export type { RandomTableRow as ByppRandomTableRow } from "./models/random-table.schema";
export type { Tag as ByppTag } from "./models/tag.schema";
export type { TagCategory as ByppTagCategory } from "./models/tag-category.schema";
export type { Scene as ByppScene } from "./models/scene.schema";
export type { SceneMap as ByppSceneMap } from "./models/scene-map.schema";
export type { SceneMapBase as ByppSceneMapBase } from "./models/scene-map.schema";
export type { SceneBackground as ByppSceneBackground } from "./models/scene-background.schema";
export type { SceneBackgroundBase as ByppSceneBackgroundBase } from "./models/scene-background.schema";
export type { Asset as ByppAsset } from "./models/asset.schema";
export type { AssetBase as ByppAssetBase } from "./models/asset.schema";
export type { Dialect as ByppDialect } from "./models/dialect.schema";
export type { DialectFont as ByppDialectFont } from "./models/dialect.schema";
