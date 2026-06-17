"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AbilityEntitySchema: () => AbilityEntityV2Schema,
  AbilityEntityV1Schema: () => AbilityEntityV1Schema,
  AbilityEntityV2Schema: () => AbilityEntityV2Schema,
  ActionVisualIconCompoSlotConfigSchema: () => IconCompoSlotConfigV1Schema,
  ActionVisualSchema: () => ActionVisualV1Schema,
  ActionVisualV1Schema: () => ActionVisualV1Schema,
  AssetBaseSchema: () => AssetBaseV2Schema,
  AssetBaseV1Schema: () => AssetBaseV1Schema,
  AssetBaseV2Schema: () => AssetBaseV2Schema,
  AssetSchema: () => AssetV2Schema,
  AssetUidSchema: () => AssetUidSchema,
  AssetV1Schema: () => AssetV1Schema,
  AssetV2Schema: () => AssetV2Schema,
  AttributionSchema: () => AttributionV3Schema,
  AttributionV3Schema: () => AttributionV3Schema,
  AudioAssetSchema: () => AudioAssetV2Schema,
  AudioAssetV1Schema: () => AudioAssetV1Schema,
  AudioAssetV2Schema: () => AudioAssetV2Schema,
  AudioExternalAssetSchema: () => AudioExternalAssetV2Schema,
  AudioExternalAssetV1Schema: () => AudioExternalAssetV1Schema,
  AudioExternalAssetV2Schema: () => AudioExternalAssetV2Schema,
  BYPP_FORMAT_EXT: () => BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION: () => BYPP_FORMAT_VERSION,
  BarOrientationSchema: () => BarOrientationV1Schema,
  BarOrientationV1Schema: () => BarOrientationV1Schema,
  BeyondPaperSchema: () => BeyondPaperV7Schema,
  BeyondPaperV1Schema: () => BeyondPaperV1Schema,
  BeyondPaperV2Schema: () => BeyondPaperV2Schema,
  BeyondPaperV3Schema: () => BeyondPaperV3Schema,
  BeyondPaperV4Schema: () => BeyondPaperV4Schema,
  BeyondPaperV5Schema: () => BeyondPaperV5Schema,
  BeyondPaperV6Schema: () => BeyondPaperV6Schema,
  BeyondPaperV7Schema: () => BeyondPaperV7Schema,
  BooleanVariableSchema: () => BooleanVariableV1Schema,
  BooleanVariableV1Schema: () => BooleanVariableV1Schema,
  CcLicenseSchema: () => CcLicenseV3Schema,
  CcLicenseV3Schema: () => CcLicenseV3Schema,
  CharacterEntitySchema: () => CharacterEntityV2Schema,
  CharacterEntityV1Schema: () => CharacterEntityV1Schema,
  CharacterEntityV2Schema: () => CharacterEntityV2Schema,
  ChoiceOptionSchema: () => ChoiceOptionV1Schema,
  ChoiceOptionV1Schema: () => ChoiceOptionV1Schema,
  ChoiceVariableSchema: () => ChoiceVariableV1Schema,
  ChoiceVariableV1Schema: () => ChoiceVariableV1Schema,
  ChunkBaseSchema: () => ChunkBaseV2Schema,
  ChunkBaseV1Schema: () => ChunkBaseV1Schema,
  ChunkBaseV2Schema: () => ChunkBaseV2Schema,
  ChunkBlockStyleSchema: () => ChunkBlockStyleV1Schema,
  ChunkBlockStyleV1Schema: () => ChunkBlockStyleV1Schema,
  ChunkGallerySchema: () => ChunkGalleryV2Schema,
  ChunkGalleryV1Schema: () => ChunkGalleryV1Schema,
  ChunkGalleryV2Schema: () => ChunkGalleryV2Schema,
  ChunkHeadingLevelSchema: () => ChunkHeadingLevelV1Schema,
  ChunkHeadingLevelV1Schema: () => ChunkHeadingLevelV1Schema,
  ChunkHeadingModeSchema: () => ChunkHeadingModeV1Schema,
  ChunkHeadingModeV1Schema: () => ChunkHeadingModeV1Schema,
  ChunkRandomSchema: () => ChunkRandomV2Schema,
  ChunkRandomV1Schema: () => ChunkRandomV1Schema,
  ChunkRandomV2Schema: () => ChunkRandomV2Schema,
  ChunkSchema: () => ChunkV2Schema,
  ChunkTextProxySchema: () => ChunkTextProxyV2Schema,
  ChunkTextProxyV1Schema: () => ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema: () => ChunkTextProxyV2Schema,
  ChunkTextSchema: () => ChunkTextV2Schema,
  ChunkTextV1Schema: () => ChunkTextV1Schema,
  ChunkTextV2Schema: () => ChunkTextV2Schema,
  ChunkUidSchema: () => ChunkUidSchema,
  ChunkV1Schema: () => ChunkV1Schema,
  ChunkV2Schema: () => ChunkV2Schema,
  CreatureEntitySchema: () => CreatureEntityV2Schema,
  CreatureEntityV1Schema: () => CreatureEntityV1Schema,
  CreatureEntityV2Schema: () => CreatureEntityV2Schema,
  CustomImageSceneBackgroundSchema: () => CustomImageSceneBackgroundV2Schema,
  CustomImageSceneBackgroundV1Schema: () => CustomImageSceneBackgroundV1Schema,
  CustomImageSceneBackgroundV2Schema: () => CustomImageSceneBackgroundV2Schema,
  CustomImageSceneMapSchema: () => CustomImageSceneMapV2Schema,
  CustomImageSceneMapV1Schema: () => CustomImageSceneMapV1Schema,
  CustomImageSceneMapV2Schema: () => CustomImageSceneMapV2Schema,
  CustomVideoSceneBackgroundSchema: () => CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV1Schema: () => CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV2Schema: () => CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneMapSchema: () => CustomVideoSceneMapV2Schema,
  CustomVideoSceneMapV1Schema: () => CustomVideoSceneMapV1Schema,
  CustomVideoSceneMapV2Schema: () => CustomVideoSceneMapV2Schema,
  DOWN_MIGRATIONS: () => DOWN_MIGRATIONS,
  DataTableCellValueSchema: () => DataTableCellValueV2Schema,
  DataTableCellValueV2Schema: () => DataTableCellValueV2Schema,
  DataTableColumnBooleanSchema: () => DataTableColumnBooleanV2Schema,
  DataTableColumnBooleanV2Schema: () => DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceSchema: () => DataTableColumnChoiceV2Schema,
  DataTableColumnChoiceV2Schema: () => DataTableColumnChoiceV2Schema,
  DataTableColumnDataTableLookupSchema: () => DataTableColumnDataTableLookupV2Schema,
  DataTableColumnDataTableLookupV2Schema: () => DataTableColumnDataTableLookupV2Schema,
  DataTableColumnDataTableRefSchema: () => DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableRefV2Schema: () => DataTableColumnDataTableRefV2Schema,
  DataTableColumnIconSchema: () => DataTableColumnIconV2Schema,
  DataTableColumnIconV2Schema: () => DataTableColumnIconV2Schema,
  DataTableColumnNumberSchema: () => DataTableColumnNumberV2Schema,
  DataTableColumnNumberV2Schema: () => DataTableColumnNumberV2Schema,
  DataTableColumnSchema: () => DataTableColumnV2Schema,
  DataTableColumnTextSchema: () => DataTableColumnTextV2Schema,
  DataTableColumnTextV2Schema: () => DataTableColumnTextV2Schema,
  DataTableColumnTranslatableTextSchema: () => DataTableColumnTranslatableTextV2Schema,
  DataTableColumnTranslatableTextV2Schema: () => DataTableColumnTranslatableTextV2Schema,
  DataTableColumnUidSchema: () => DataTableColumnUidSchema,
  DataTableColumnV2Schema: () => DataTableColumnV2Schema,
  DataTableDirectLookupVariableSchema: () => DataTableDirectLookupVariableV6Schema,
  DataTableDirectLookupVariableV6Schema: () => DataTableDirectLookupVariableV6Schema,
  DataTableLookupVariableSchema: () => DataTableLookupVariableV2Schema,
  DataTableLookupVariableV2Schema: () => DataTableLookupVariableV2Schema,
  DataTableRefVariableSchema: () => DataTableRefVariableV2Schema,
  DataTableRefVariableV2Schema: () => DataTableRefVariableV2Schema,
  DataTableRowSchema: () => DataTableRowV3Schema,
  DataTableRowUidSchema: () => DataTableRowUidSchema,
  DataTableRowV2Schema: () => DataTableRowV2Schema,
  DataTableRowV3Schema: () => DataTableRowV3Schema,
  DataTableSchema: () => DataTableV3Schema,
  DataTableUidSchema: () => DataTableUidSchema,
  DataTableV2Schema: () => DataTableV2Schema,
  DataTableV3Schema: () => DataTableV3Schema,
  DatasetSchema: () => DatasetV2Schema,
  DatasetTargetSchema: () => DatasetTargetV2Schema,
  DatasetTargetV1Schema: () => DatasetTargetV1Schema,
  DatasetTargetV2Schema: () => DatasetTargetV2Schema,
  DatasetUidSchema: () => DatasetUidSchema,
  DatasetV1Schema: () => DatasetV1Schema,
  DatasetV2Schema: () => DatasetV2Schema,
  Dd2VttSceneMapV1Schema: () => Dd2VttSceneMapV1Schema,
  DialectFontSchema: () => DialectFontV2Schema,
  DialectFontV1Schema: () => DialectFontV1Schema,
  DialectFontV2Schema: () => DialectFontV2Schema,
  DialectSchema: () => DialectV2Schema,
  DialectUidSchema: () => DialectUidSchema,
  DialectV1Schema: () => DialectV1Schema,
  DialectV2Schema: () => DialectV2Schema,
  ENTITY_IMAGE_RENDITIONS: () => ENTITY_IMAGE_RENDITIONS,
  EntityAssetSchema: () => EntityAssetV2Schema,
  EntityAssetV1Schema: () => EntityAssetV1Schema,
  EntityAssetV2Schema: () => EntityAssetV2Schema,
  EntityBaseSchema: () => EntityBaseV2Schema,
  EntityBaseV1Schema: () => EntityBaseV1Schema,
  EntityBaseV2Schema: () => EntityBaseV2Schema,
  EntityImageFormatSchema: () => EntityImageFormatV5Schema,
  EntityImageFormatV5Schema: () => EntityImageFormatV5Schema,
  EntityImageObjectFitSchema: () => EntityImageObjectFitV5Schema,
  EntityImageObjectFitV5Schema: () => EntityImageObjectFitV5Schema,
  EntitySchema: () => EntityV2Schema,
  EntityTypeSchema: () => EntityTypeV1Schema,
  EntityTypeV1Schema: () => EntityTypeV1Schema,
  EntityTypeV2Schema: () => EntityTypeV1Schema,
  EntityUidSchema: () => EntityUidSchema,
  EntityV1Schema: () => EntityV1Schema,
  EntityV2Schema: () => EntityV2Schema,
  EventEntitySchema: () => EventEntityV2Schema,
  EventEntityV1Schema: () => EventEntityV1Schema,
  EventEntityV2Schema: () => EventEntityV2Schema,
  FormulaVariableSchema: () => FormulaVariableV1Schema,
  FormulaVariableV1Schema: () => FormulaVariableV1Schema,
  GridDataSchema: () => GridDataV1Schema,
  GridDataV1Schema: () => GridDataV1Schema,
  GroupEntitySchema: () => GroupEntityV2Schema,
  GroupEntityV1Schema: () => GroupEntityV1Schema,
  GroupEntityV2Schema: () => GroupEntityV2Schema,
  GroupRankCharacterSchema: () => GroupRankCharacterV1Schema,
  GroupRankCharacterV1Schema: () => GroupRankCharacterV1Schema,
  GroupRankSchema: () => GroupRankV1Schema,
  GroupRankV1Schema: () => GroupRankV1Schema,
  IconCompoSchema: () => IconCompoV1Schema,
  IconCompoSlotConfigSchema: () => IconCompoSlotConfigV1Schema,
  IconCompoSlotConfigV1Schema: () => IconCompoSlotConfigV1Schema,
  IconCompoV1Schema: () => IconCompoV1Schema,
  ImageAssetSchema: () => ImageAssetV2Schema,
  ImageAssetV1Schema: () => ImageAssetV1Schema,
  ImageAssetV2Schema: () => ImageAssetV2Schema,
  ImageDimensionsSchema: () => ImageDimensionsV1Schema,
  ImageDimensionsV1Schema: () => ImageDimensionsV1Schema,
  ImageVariableSchema: () => ImageVariableV5Schema,
  ImageVariableV5Schema: () => ImageVariableV5Schema,
  ItemEntitySchema: () => ItemEntityV2Schema,
  ItemEntityV1Schema: () => ItemEntityV1Schema,
  ItemEntityV2Schema: () => ItemEntityV2Schema,
  KNOWN_AUDIO_EXTS: () => KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS: () => KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS: () => KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS: () => MIGRATIONS,
  NoteEntitySchema: () => NoteEntityV2Schema,
  NoteEntityV1Schema: () => NoteEntityV1Schema,
  NoteEntityV2Schema: () => NoteEntityV2Schema,
  NumberVariableSchema: () => NumberVariableV1Schema,
  NumberVariableV1Schema: () => NumberVariableV1Schema,
  PageEntitySchema: () => PageEntityV1Schema,
  PageEntityV1Schema: () => PageEntityV1Schema,
  PageSchema: () => PageV1Schema,
  PageStandardSchema: () => PageStandardV1Schema,
  PageStandardV1Schema: () => PageStandardV1Schema,
  PageUidSchema: () => PageUidSchema,
  PageV1Schema: () => PageV1Schema,
  ParentAttributionSchema: () => ParentAttributionV4Schema,
  ParentAttributionV3Schema: () => ParentAttributionV3Schema,
  ParentAttributionV4Schema: () => ParentAttributionV4Schema,
  PlaceEntitySchema: () => PlaceEntityV2Schema,
  PlaceEntityV1Schema: () => PlaceEntityV1Schema,
  PlaceEntityV2Schema: () => PlaceEntityV2Schema,
  RandomTableRowSchema: () => RandomTableRowV7Schema,
  RandomTableRowUidSchema: () => RandomTableRowUidSchema,
  RandomTableRowV1Schema: () => RandomTableRowV1Schema,
  RandomTableRowV2Schema: () => RandomTableRowV2Schema,
  RandomTableRowV7Schema: () => RandomTableRowV7Schema,
  RandomTableSchema: () => RandomTableV7Schema,
  RandomTableUidSchema: () => RandomTableUidSchema,
  RandomTableV1Schema: () => RandomTableV1Schema,
  RandomTableV2Schema: () => RandomTableV2Schema,
  RandomTableV7Schema: () => RandomTableV7Schema,
  RollVariableSchema: () => RollVariableV1Schema,
  RollVariableV1Schema: () => RollVariableV1Schema,
  SCHEMA_BY_VERSION: () => SCHEMA_BY_VERSION,
  SceneBackgroundBaseSchema: () => SceneBackgroundBaseV2Schema,
  SceneBackgroundBaseV1Schema: () => SceneBackgroundBaseV1Schema,
  SceneBackgroundBaseV2Schema: () => SceneBackgroundBaseV2Schema,
  SceneBackgroundSchema: () => SceneBackgroundV2Schema,
  SceneBackgroundUidSchema: () => SceneBackgroundUidSchema,
  SceneBackgroundV1Schema: () => SceneBackgroundV1Schema,
  SceneBackgroundV2Schema: () => SceneBackgroundV2Schema,
  SceneGameModeV1Schema: () => SceneGameModeV1Schema,
  SceneMapBaseSchema: () => SceneMapBaseV2Schema,
  SceneMapBaseV1Schema: () => SceneMapBaseV1Schema,
  SceneMapBaseV2Schema: () => SceneMapBaseV2Schema,
  SceneMapSchema: () => SceneMapV2Schema,
  SceneMapUidSchema: () => SceneMapUidSchema,
  SceneMapV1Schema: () => SceneMapV1Schema,
  SceneMapV2Schema: () => SceneMapV2Schema,
  SceneSchema: () => SceneV2Schema,
  SceneUidSchema: () => SceneUidSchema,
  SceneV1Schema: () => SceneV1Schema,
  SceneV2Schema: () => SceneV2Schema,
  SheetSchema: () => SheetV3Schema,
  SheetUidSchema: () => SheetUidSchema,
  SheetV2Schema: () => SheetV2Schema,
  SheetV3Schema: () => SheetV3Schema,
  StoryEntitySchema: () => StoryEntityV2Schema,
  StoryEntityV1Schema: () => StoryEntityV1Schema,
  StoryEntityV2Schema: () => StoryEntityV2Schema,
  StyleSchema: () => StyleV1Schema,
  StyleV1Schema: () => StyleV1Schema,
  TagCategorySchema: () => TagCategoryV1Schema,
  TagCategoryUidSchema: () => TagCategoryUidSchema,
  TagCategoryV1Schema: () => TagCategoryV1Schema,
  TagSchema: () => TagV2Schema,
  TagUidSchema: () => TagUidSchema,
  TagV1Schema: () => TagV1Schema,
  TagV2Schema: () => TagV2Schema,
  TextVariableSchema: () => TextVariableV1Schema,
  TextVariableV1Schema: () => TextVariableV1Schema,
  TranslatableTextSchema: () => TranslatableTextV2Schema,
  TranslatableTextV2Schema: () => TranslatableTextV2Schema,
  VariableBaseSchema: () => VariableBaseV1Schema,
  VariableBaseV1Schema: () => VariableBaseV1Schema,
  VariableChoiceUidSchema: () => VariableChoiceUidSchema,
  VariableDataValueSchema: () => VariableDataValueV1Schema,
  VariableDataValueV1Schema: () => VariableDataValueV1Schema,
  VariableSchema: () => VariableV6Schema,
  VariableUidSchema: () => VariableUidSchema,
  VariableV1Schema: () => VariableV1Schema,
  VariableV2Schema: () => VariableV2Schema,
  VariableV5Schema: () => VariableV5Schema,
  VariableV6Schema: () => VariableV6Schema,
  VariablesDataRecordSchema: () => VariablesDataRecordV1Schema,
  VariablesDataRecordV1Schema: () => VariablesDataRecordV1Schema,
  VideoAssetSchema: () => VideoAssetV2Schema,
  VideoAssetV1Schema: () => VideoAssetV1Schema,
  VideoAssetV2Schema: () => VideoAssetV2Schema,
  WidgetBarSchema: () => WidgetBarV1Schema,
  WidgetBarV1Schema: () => WidgetBarV1Schema,
  WidgetBaseSchema: () => WidgetBaseV1Schema,
  WidgetBaseV1Schema: () => WidgetBaseV1Schema,
  WidgetBigNumberSchema: () => WidgetBigNumberV1Schema,
  WidgetBigNumberV1Schema: () => WidgetBigNumberV1Schema,
  WidgetBulletListSchema: () => WidgetBulletListV1Schema,
  WidgetBulletListV1Schema: () => WidgetBulletListV1Schema,
  WidgetEmptySchema: () => WidgetEmptyV1Schema,
  WidgetEmptyV1Schema: () => WidgetEmptyV1Schema,
  WidgetEntityImageSchema: () => WidgetEntityImageV5Schema,
  WidgetEntityImageV5Schema: () => WidgetEntityImageV5Schema,
  WidgetInlineListSchema: () => WidgetInlineListV1Schema,
  WidgetInlineListV1Schema: () => WidgetInlineListV1Schema,
  WidgetPipsSchema: () => WidgetPipsV1Schema,
  WidgetPipsV1Schema: () => WidgetPipsV1Schema,
  WidgetPlainTextSchema: () => WidgetPlainTextV1Schema,
  WidgetPlainTextV1Schema: () => WidgetPlainTextV1Schema,
  WidgetSchema: () => WidgetV5Schema,
  WidgetToggleSchema: () => WidgetToggleV1Schema,
  WidgetToggleV1Schema: () => WidgetToggleV1Schema,
  WidgetUidSchema: () => WidgetUidSchema,
  WidgetV1Schema: () => WidgetV1Schema,
  WidgetV5Schema: () => WidgetV5Schema,
  WithArchiveSchema: () => WithArchiveV2Schema,
  WithArchiveV1Schema: () => WithArchiveV1Schema,
  WithArchiveV2Schema: () => WithArchiveV2Schema,
  WithAreaSchema: () => WithAreaV1Schema,
  WithAreaV1Schema: () => WithAreaV1Schema,
  WithAssetsSchema: () => WithAssetsV1Schema,
  WithAssetsV1Schema: () => WithAssetsV1Schema,
  WithAudioUrlsSchema: () => WithAudioUrlsV2Schema,
  WithAudioUrlsV1Schema: () => WithAudioUrlsV1Schema,
  WithAudioUrlsV2Schema: () => WithAudioUrlsV2Schema,
  WithDataSchema: () => WithDataV1Schema,
  WithDataV1Schema: () => WithDataV1Schema,
  WithImagesUrlsSchema: () => WithImagesUrlsV2Schema,
  WithImagesUrlsV1Schema: () => WithImagesUrlsV1Schema,
  WithImagesUrlsV2Schema: () => WithImagesUrlsV2Schema,
  WithLocalizedNameSchema: () => WithLocalizedNameV2Schema,
  WithLocalizedNameV2Schema: () => WithLocalizedNameV2Schema,
  WithNameSchema: () => WithNameV1Schema,
  WithNameV1Schema: () => WithNameV1Schema,
  WithPagesSchema: () => WithPagesV2Schema,
  WithPagesV1Schema: () => WithPagesV1Schema,
  WithPagesV2Schema: () => WithPagesV2Schema,
  WithPositionSchema: () => WithPositionV1Schema,
  WithPositionV1Schema: () => WithPositionV1Schema,
  WithScenesSchema: () => WithScenesV2Schema,
  WithScenesV1Schema: () => WithScenesV1Schema,
  WithScenesV2Schema: () => WithScenesV2Schema,
  WithStyleSchema: () => WithStyleV1Schema,
  WithStyleV1Schema: () => WithStyleV1Schema,
  WithVideoUrlsSchema: () => WithVideoUrlsV2Schema,
  WithVideoUrlsV1Schema: () => WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema: () => WithVideoUrlsV2Schema,
  migrate: () => migrate
});
module.exports = __toCommonJS(index_exports);

// src/version.ts
var BYPP_FORMAT_VERSION = 7;
var BYPP_FORMAT_EXT = "bypp";

// src/schemas/bypp.v7.schema.ts
var import_zod58 = require("zod");

// src/models/asset.v2.schema.ts
var import_zod7 = require("zod");

// src/mixins/with-audio-urls.v2.schema.ts
var import_zod = require("zod");
var KNOWN_AUDIO_EXTS = [
  "mp3",
  "ogg",
  "wav",
  "flac",
  "aac",
  "opus",
  "webm",
  "m4a"
];
var WithAudioUrlsV2Schema = import_zod.z.object({
  audioUrl: import_zod.z.string().url().optional(),
  audioDurationSeconds: import_zod.z.number().optional(),
  audioExt: import_zod.z.string().optional()
});

// src/mixins/with-images-urls.v2.schema.ts
var import_zod2 = require("zod");
var WithImagesUrlsV2Schema = import_zod2.z.object({
  originalUrl: import_zod2.z.string().url().optional(),
  thumbnailUrl: import_zod2.z.string().url().optional(),
  squareUrl: import_zod2.z.string().url().optional(),
  closeupUrl: import_zod2.z.string().url().optional()
});

// src/mixins/with-name.v1.schema.ts
var import_zod3 = require("zod");
var WithNameV1Schema = import_zod3.z.object({
  name: import_zod3.z.string()
});

// src/mixins/with-video-urls.v1.schema.ts
var import_zod4 = require("zod");
var ImageDimensionsV1Schema = import_zod4.z.object({
  width: import_zod4.z.number(),
  height: import_zod4.z.number()
});
var WithVideoUrlsV1Schema = import_zod4.z.object({
  videoUrl: import_zod4.z.string().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional()
});

// src/mixins/with-video-urls.v2.schema.ts
var import_zod5 = require("zod");
var WithVideoUrlsV2Schema = import_zod5.z.object({
  videoUrl: import_zod5.z.string().url().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional()
});

// src/uid.ts
var import_zod6 = require("zod");
var EntityUidSchema = import_zod6.z.string();
var PageUidSchema = import_zod6.z.string();
var ChunkUidSchema = import_zod6.z.string();
var DatasetUidSchema = import_zod6.z.string();
var VariableUidSchema = import_zod6.z.string();
var WidgetUidSchema = import_zod6.z.string();
var RandomTableUidSchema = import_zod6.z.string();
var RandomTableRowUidSchema = import_zod6.z.string();
var TagUidSchema = import_zod6.z.string();
var TagCategoryUidSchema = import_zod6.z.string();
var SceneUidSchema = import_zod6.z.string();
var SceneMapUidSchema = import_zod6.z.string();
var SceneBackgroundUidSchema = import_zod6.z.string();
var AssetUidSchema = import_zod6.z.string();
var DialectUidSchema = import_zod6.z.string();
var SheetUidSchema = import_zod6.z.string();
var EntityTokenUidSchema = import_zod6.z.string();
var VariableChoiceUidSchema = import_zod6.z.string();
var DataTableUidSchema = import_zod6.z.string();
var DataTableRowUidSchema = import_zod6.z.string();
var DataTableColumnUidSchema = import_zod6.z.string();

// src/models/asset.v2.schema.ts
var KNOWN_EXTERNAL_AUDIO_PROVIDERS = [
  "youtube",
  "soundcloud",
  "vimeo",
  "bandcamp",
  "spotify"
];
var AssetBaseV2Schema = import_zod7.z.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV2Schema = AssetBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: import_zod7.z.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV2Schema = AssetBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod7.z.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV2Schema = AssetBaseV2Schema.merge(
  WithAudioUrlsV2Schema
).extend({
  type: import_zod7.z.literal("audio")
});
var AudioExternalAssetV2Schema = AssetBaseV2Schema.extend({
  type: import_zod7.z.literal("audio-external"),
  provider: import_zod7.z.string(),
  externalId: import_zod7.z.string(),
  thumbnailUrl: import_zod7.z.string().url().optional(),
  durationSeconds: import_zod7.z.number().optional()
});
var EntityAssetV2Schema = AssetBaseV2Schema.extend({
  type: import_zod7.z.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV2Schema = import_zod7.z.discriminatedUnion("type", [
  ImageAssetV2Schema,
  VideoAssetV2Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema,
  EntityAssetV2Schema
]);

// src/models/chunk.v2.schema.ts
var import_zod9 = require("zod");

// src/models/chunk.v1.schema.ts
var import_zod8 = require("zod");
var ChunkBlockStyleV1Schema = import_zod8.z.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule"
]);
var ChunkHeadingModeV1Schema = import_zod8.z.enum(["inside", "outside"]);
var ChunkHeadingLevelV1Schema = import_zod8.z.union([
  import_zod8.z.literal(1),
  import_zod8.z.literal(2),
  import_zod8.z.literal(3),
  import_zod8.z.literal(4)
]);
var ChunkBaseV1Schema = import_zod8.z.object({
  uid: ChunkUidSchema,
  name: import_zod8.z.string().nullable().optional(),
  blockStyle: ChunkBlockStyleV1Schema.nullable().optional(),
  headingLevel: ChunkHeadingLevelV1Schema.nullable().optional(),
  headingMode: ChunkHeadingModeV1Schema.nullable().optional()
});
var ChunkTextV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod8.z.literal("text"),
  content: import_zod8.z.string(),
  mentionedEntitiesUids: import_zod8.z.array(EntityUidSchema).optional()
});
var ChunkTextProxyV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod8.z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod8.z.literal("gallery"),
  assetUids: import_zod8.z.array(AssetUidSchema)
});
var ChunkRandomV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod8.z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: import_zod8.z.boolean().optional()
});
var ChunkV1Schema = import_zod8.z.discriminatedUnion("type", [
  ChunkTextV1Schema,
  ChunkTextProxyV1Schema,
  ChunkGalleryV1Schema,
  ChunkRandomV1Schema
]);

// src/models/chunk.v2.schema.ts
var ChunkBaseV2Schema = import_zod9.z.object({
  uid: ChunkUidSchema,
  name: import_zod9.z.string().optional(),
  blockStyle: ChunkBlockStyleV1Schema.optional(),
  headingLevel: ChunkHeadingLevelV1Schema.optional(),
  headingMode: ChunkHeadingModeV1Schema.optional()
});
var ChunkTextV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod9.z.literal("text"),
  content: import_zod9.z.string(),
  mentionedEntitiesUids: import_zod9.z.array(EntityUidSchema).optional()
});
var ChunkTextProxyV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod9.z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod9.z.literal("gallery"),
  assetUids: import_zod9.z.array(AssetUidSchema).default([])
});
var ChunkRandomV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod9.z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: import_zod9.z.boolean().optional()
});
var ChunkV2Schema = import_zod9.z.discriminatedUnion("type", [
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/data-table.v3.schema.ts
var import_zod14 = require("zod");

// src/mixins/with-localized-name.v2.schema.ts
var import_zod11 = require("zod");

// src/mixins/translatable-text.v2.schema.ts
var import_zod10 = require("zod");
var TranslatableTextV2Schema = import_zod10.z.record(import_zod10.z.string(), import_zod10.z.string());

// src/mixins/with-localized-name.v2.schema.ts
var WithLocalizedNameV2Schema = import_zod11.z.object({
  name: TranslatableTextV2Schema
});

// src/models/data-table.v2.schema.ts
var import_zod13 = require("zod");

// src/models/variable.v1.schema.ts
var import_zod12 = require("zod");
var ChoiceOptionV1Schema = import_zod12.z.object({
  uid: VariableChoiceUidSchema,
  label: import_zod12.z.string(),
  icon: import_zod12.z.string().optional(),
  value: import_zod12.z.number().optional()
});
var VariableBaseV1Schema = import_zod12.z.object({ uid: VariableUidSchema }).merge(WithNameV1Schema).extend({
  datasetsUids: import_zod12.z.array(DatasetUidSchema),
  isMandatory: import_zod12.z.boolean().optional(),
  isHiddenFromSheet: import_zod12.z.boolean().optional(),
  label: import_zod12.z.string().optional()
});
var NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod12.z.literal("number"),
  defaultValue: import_zod12.z.number().optional()
});
var TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod12.z.literal("text"),
  maxChars: import_zod12.z.number().optional(),
  defaultValue: import_zod12.z.string().optional()
});
var BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod12.z.literal("boolean"),
  defaultValue: import_zod12.z.boolean().optional()
});
var ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod12.z.literal("choice"),
  options: import_zod12.z.array(ChoiceOptionV1Schema).optional(),
  isMultiple: import_zod12.z.boolean().optional(),
  hasNumericValue: import_zod12.z.boolean().optional(),
  hasIcon: import_zod12.z.boolean().optional(),
  defaultOptionUids: import_zod12.z.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod12.z.literal("formula"),
  formula: import_zod12.z.string().optional(),
  depsVariablesUid: import_zod12.z.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigV1Schema = import_zod12.z.object({
  icon: import_zod12.z.string().nullable(),
  size: import_zod12.z.number().optional(),
  rotate: import_zod12.z.number().optional(),
  revert: import_zod12.z.boolean().optional()
});
var IconCompoV1Schema = import_zod12.z.record(
  import_zod12.z.string(),
  IconCompoSlotConfigV1Schema
);
var ActionVisualV1Schema = import_zod12.z.discriminatedUnion("type", [
  import_zod12.z.object({ type: import_zod12.z.literal("awesome"), icon: import_zod12.z.string() }),
  import_zod12.z.object({ type: import_zod12.z.literal("compo"), icons: IconCompoV1Schema })
]);
var RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod12.z.literal("roll"),
  diceFormula: import_zod12.z.string().optional(),
  depsVariablesUid: import_zod12.z.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: import_zod12.z.number().nullable().optional()
});
var VariableV1Schema = import_zod12.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema
]);

// src/models/data-table.v2.schema.ts
var DataTableColumnBaseV2Schema = import_zod13.z.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: import_zod13.z.string().optional(),
  isMandatory: import_zod13.z.boolean().optional()
});
var DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: import_zod13.z.literal("number"),
    defaultNumber: import_zod13.z.number().optional()
  }
);
var DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod13.z.literal("text"),
  maxChars: import_zod13.z.number().optional(),
  defaultValue: import_zod13.z.string().optional()
});
var DataTableColumnBooleanV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod13.z.literal("boolean"),
  defaultBoolean: import_zod13.z.boolean().optional()
});
var DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: import_zod13.z.literal("choice"),
    options: import_zod13.z.array(ChoiceOptionV1Schema).optional(),
    isMultiple: import_zod13.z.boolean().optional(),
    hasNumericValue: import_zod13.z.boolean().optional(),
    hasIcon: import_zod13.z.boolean().optional()
  }
);
var DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod13.z.literal("icon"),
  defaultIcon: import_zod13.z.string().optional()
});
var DataTableColumnTranslatableTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod13.z.literal("translatableText"),
  defaultValue: TranslatableTextV2Schema.optional()
});
var DataTableColumnDataTableRefV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod13.z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: import_zod13.z.boolean().optional(),
  defaultRowUids: import_zod13.z.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod13.z.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: import_zod13.z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: import_zod13.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod13.z.string().optional()
});
var DataTableColumnV2Schema = import_zod13.z.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableCellValueV2Schema = import_zod13.z.union([
  import_zod13.z.string(),
  import_zod13.z.number(),
  import_zod13.z.boolean(),
  import_zod13.z.array(import_zod13.z.string()),
  TranslatableTextV2Schema,
  import_zod13.z.null()
]);
var DataTableRowV2Schema = import_zod13.z.object({
  uid: DataTableRowUidSchema,
  data: import_zod13.z.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV2Schema = import_zod13.z.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: import_zod13.z.string().nullable().optional(),
  weight: import_zod13.z.number().optional(),
  adminOnly: import_zod13.z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: import_zod13.z.array(DataTableColumnV2Schema),
  rows: import_zod13.z.array(DataTableRowV2Schema)
});

// src/models/data-table.v3.schema.ts
var DataTableRowV3Schema = import_zod14.z.object({
  uid: DataTableRowUidSchema,
  data: import_zod14.z.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = import_zod14.z.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: import_zod14.z.string().optional(),
  weight: import_zod14.z.number().optional(),
  adminOnly: import_zod14.z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: import_zod14.z.array(DataTableColumnV2Schema).default([]),
  rows: import_zod14.z.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
var import_zod22 = require("zod");

// src/models/entity.v1.schema.ts
var import_zod21 = require("zod");

// src/mixins/with-archive.v1.schema.ts
var import_zod15 = require("zod");
var WithArchiveV1Schema = import_zod15.z.object({
  isArchived: import_zod15.z.boolean()
});

// src/mixins/with-assets.v1.schema.ts
var import_zod16 = require("zod");
var WithAssetsV1Schema = import_zod16.z.object({
  assetUids: import_zod16.z.array(AssetUidSchema).optional()
});

// src/mixins/with-data.v1.schema.ts
var import_zod17 = require("zod");
var VariableDataValueV1Schema = import_zod17.z.union([
  import_zod17.z.string(),
  import_zod17.z.number(),
  import_zod17.z.boolean(),
  import_zod17.z.array(VariableChoiceUidSchema),
  import_zod17.z.null()
]);
var VariablesDataRecordV1Schema = import_zod17.z.record(
  VariableUidSchema,
  VariableDataValueV1Schema
);
var WithDataV1Schema = import_zod17.z.object({
  data: VariablesDataRecordV1Schema.optional()
});

// src/mixins/with-images-urls.v1.schema.ts
var import_zod18 = require("zod");
var WithImagesUrlsV1Schema = import_zod18.z.object({
  originalUrl: import_zod18.z.string().optional(),
  thumbnailUrl: import_zod18.z.string().optional(),
  squareUrl: import_zod18.z.string().optional(),
  closeupUrl: import_zod18.z.string().optional()
});

// src/mixins/with-pages.v1.schema.ts
var import_zod19 = require("zod");
var WithPagesV1Schema = import_zod19.z.object({
  pagesOrder: import_zod19.z.array(PageUidSchema)
});

// src/mixins/with-scenes.v1.schema.ts
var import_zod20 = require("zod");
var WithScenesV1Schema = import_zod20.z.object({
  scenesUids: import_zod20.z.array(SceneUidSchema)
});

// src/models/entity.v1.schema.ts
var EntityTypeV1Schema = import_zod21.z.enum([
  "character",
  "creature",
  "place",
  "group",
  "item",
  "ability",
  "event",
  "story",
  "note"
]);
var GroupRankCharacterV1Schema = import_zod21.z.object({
  entityUid: EntityUidSchema,
  label: import_zod21.z.string()
});
var GroupRankV1Schema = import_zod21.z.object({
  label: import_zod21.z.string(),
  characters: import_zod21.z.array(GroupRankCharacterV1Schema)
});
var EntityBaseV1Schema = import_zod21.z.object({
  uid: EntityUidSchema,
  displayName: import_zod21.z.string().nullable(),
  description: import_zod21.z.string().nullable(),
  tagsUid: import_zod21.z.array(TagUidSchema),
  sheetOverrides: import_zod21.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV1Schema).merge(WithArchiveV1Schema).merge(WithPagesV1Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("character")
});
var CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("creature")
});
var GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("group"),
  ranks: import_zod21.z.array(GroupRankV1Schema),
  charactersUids: import_zod21.z.array(EntityUidSchema)
});
var PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema
).extend({ type: import_zod21.z.literal("place") });
var ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("item")
});
var NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("note")
});
var AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("ability")
});
var StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("story")
});
var EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod21.z.literal("event")
});
var EntityV1Schema = import_zod21.z.discriminatedUnion("type", [
  CharacterEntityV1Schema,
  CreatureEntityV1Schema,
  GroupEntityV1Schema,
  PlaceEntityV1Schema,
  ItemEntityV1Schema,
  NoteEntityV1Schema,
  AbilityEntityV1Schema,
  StoryEntityV1Schema,
  EventEntityV1Schema
]);

// src/models/dataset.v2.schema.ts
var DatasetTargetV2Schema = import_zod22.z.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = import_zod22.z.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: import_zod22.z.number().optional(),
  targets: import_zod22.z.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: import_zod22.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v2.schema.ts
var import_zod23 = require("zod");
var DialectFontV2Schema = import_zod23.z.object({
  fontFamily: import_zod23.z.string(),
  fontUrl: import_zod23.z.string().url()
});
var DialectV2Schema = import_zod23.z.object({
  uid: DialectUidSchema,
  name: import_zod23.z.string(),
  font: DialectFontV2Schema,
  order: import_zod23.z.number().optional(),
  spokenByEntitiesUids: import_zod23.z.array(EntityUidSchema).default([])
});

// src/models/entity.v2.schema.ts
var import_zod27 = require("zod");

// src/mixins/with-archive.v2.schema.ts
var import_zod24 = require("zod");
var WithArchiveV2Schema = import_zod24.z.object({
  isArchived: import_zod24.z.boolean().default(false)
});

// src/mixins/with-pages.v2.schema.ts
var import_zod25 = require("zod");
var WithPagesV2Schema = import_zod25.z.object({
  pagesOrder: import_zod25.z.array(PageUidSchema).default([])
});

// src/mixins/with-scenes.v2.schema.ts
var import_zod26 = require("zod");
var WithScenesV2Schema = import_zod26.z.object({
  scenesUids: import_zod26.z.array(SceneUidSchema).default([])
});

// src/models/entity.v2.schema.ts
var EntityBaseV2Schema = import_zod27.z.object({
  uid: EntityUidSchema,
  displayName: import_zod27.z.string().optional(),
  description: import_zod27.z.string().optional(),
  tagsUid: import_zod27.z.array(TagUidSchema).default([]),
  sheetOverrides: import_zod27.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("group"),
  ranks: import_zod27.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod27.z.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod27.z.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod27.z.literal("event")
});
var EntityV2Schema = import_zod27.z.discriminatedUnion("type", [
  CharacterEntityV2Schema,
  CreatureEntityV2Schema,
  GroupEntityV2Schema,
  PlaceEntityV2Schema,
  ItemEntityV2Schema,
  NoteEntityV2Schema,
  AbilityEntityV2Schema,
  StoryEntityV2Schema,
  EventEntityV2Schema
]);

// src/models/page.v1.schema.ts
var import_zod28 = require("zod");
var PageStandardV1Schema = import_zod28.z.object({ uid: PageUidSchema }).merge(WithNameV1Schema).extend({
  type: import_zod28.z.literal("standard"),
  chunksOrder: import_zod28.z.array(ChunkUidSchema)
});
var PageEntityV1Schema = import_zod28.z.object({
  uid: PageUidSchema,
  type: import_zod28.z.literal("entity"),
  entityUid: EntityUidSchema
});
var PageV1Schema = import_zod28.z.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema
]);

// src/models/random-table.v7.schema.ts
var import_zod29 = require("zod");
var RandomTableRowV7Schema = import_zod29.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod29.z.number().default(1),
  content: import_zod29.z.string(),
  randomTableRefs: import_zod29.z.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = import_zod29.z.object({
  uid: RandomTableUidSchema,
  title: import_zod29.z.string(),
  rows: import_zod29.z.array(RandomTableRowV7Schema).default([]),
  diceFormula: import_zod29.z.string().optional()
});

// src/models/scene.v2.schema.ts
var import_zod30 = require("zod");
var SceneV2Schema = import_zod30.z.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: import_zod30.z.number().optional(),
  lightPositionY: import_zod30.z.number().optional(),
  lightPositionZ: import_zod30.z.number().optional(),
  lightIntensity: import_zod30.z.number().optional(),
  lightColor: import_zod30.z.string().optional(),
  useCustomLightPosition: import_zod30.z.boolean().optional(),
  indoorLight: import_zod30.z.boolean().optional()
});

// src/models/scene-background.v2.schema.ts
var import_zod31 = require("zod");
var SceneBackgroundBaseV2Schema = import_zod31.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: import_zod31.z.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: import_zod31.z.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: import_zod31.z.literal("customVideo")
});
var SceneBackgroundV2Schema = import_zod31.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-map.v2.schema.ts
var import_zod33 = require("zod");

// src/models/scene-map.v1.schema.ts
var import_zod32 = require("zod");
var GridDataV1Schema = import_zod32.z.object({
  type: import_zod32.z.enum(["square", "hexv", "hexh"]),
  size: import_zod32.z.number(),
  sizeInUnit: import_zod32.z.number(),
  measureUnit: import_zod32.z.string(),
  lineWidth: import_zod32.z.number(),
  color: import_zod32.z.string().nullable().optional(),
  offset: import_zod32.z.object({ x: import_zod32.z.number(), z: import_zod32.z.number() })
});
var SceneMapBaseV1Schema = import_zod32.z.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema
});
var CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod32.z.literal("customImage")
});
var CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: import_zod32.z.literal("customVideo")
});
var Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod32.z.literal("dd2vtt")
});
var SceneMapV1Schema = import_zod32.z.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema
]);

// src/models/scene-map.v2.schema.ts
var KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"];
var SceneMapBaseV2Schema = import_zod33.z.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: import_zod33.z.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: import_zod33.z.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod33.z.literal("customVideo")
});
var SceneMapV2Schema = import_zod33.z.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/sheet.v3.schema.ts
var import_zod34 = require("zod");
var SheetV3Schema = import_zod34.z.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: import_zod34.z.string().optional(),
  widgetUids: import_zod34.z.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v2.schema.ts
var import_zod35 = require("zod");
var TagV2Schema = import_zod35.z.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: import_zod35.z.boolean().default(false)
});

// src/models/tag-category.v1.schema.ts
var import_zod36 = require("zod");
var TagCategoryV1Schema = import_zod36.z.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v6.schema.ts
var import_zod39 = require("zod");

// src/models/variable.v2.schema.ts
var import_zod37 = require("zod");
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: import_zod37.z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: import_zod37.z.boolean().optional(),
  defaultRowUids: import_zod37.z.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: import_zod37.z.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: import_zod37.z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: import_zod37.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod37.z.string().optional()
});
var VariableV2Schema = import_zod37.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema
]);

// src/models/variable.v5.schema.ts
var import_zod38 = require("zod");
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: import_zod38.z.literal("image")
});
var VariableV5Schema = import_zod38.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
  ImageVariableV5Schema
]);

// src/models/variable.v6.schema.ts
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: import_zod39.z.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: import_zod39.z.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: import_zod39.z.array(DataTableColumnUidSchema).optional(),
    multiAggregator: import_zod39.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: import_zod39.z.string().optional()
  }
);
var VariableV6Schema = import_zod39.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
  ImageVariableV5Schema,
  DataTableDirectLookupVariableV6Schema
]);

// src/models/widget.v5.schema.ts
var import_zod45 = require("zod");

// src/models/entity-image-format.v5.schema.ts
var import_zod40 = require("zod");
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = import_zod40.z.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v1.schema.ts
var import_zod44 = require("zod");

// src/mixins/with-area.v1.schema.ts
var import_zod41 = require("zod");
var WithAreaV1Schema = import_zod41.z.object({
  area: import_zod41.z.object({
    width: import_zod41.z.number(),
    height: import_zod41.z.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
var import_zod42 = require("zod");
var WithPositionV1Schema = import_zod42.z.object({
  position: import_zod42.z.object({
    left: import_zod42.z.number(),
    top: import_zod42.z.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
var import_zod43 = require("zod");
var StyleV1Schema = import_zod43.z.object({
  justifyContent: import_zod43.z.string().optional(),
  alignItems: import_zod43.z.string().optional(),
  flexDirection: import_zod43.z.string().optional(),
  lineHeight: import_zod43.z.number().optional(),
  fontFamilyId: import_zod43.z.string().optional(),
  fontScale: import_zod43.z.number().optional(),
  color: import_zod43.z.string().optional(),
  paddingTop: import_zod43.z.number().optional(),
  paddingRight: import_zod43.z.number().optional(),
  paddingBottom: import_zod43.z.number().optional(),
  paddingLeft: import_zod43.z.number().optional()
}).nullable().optional();
var WithStyleV1Schema = import_zod43.z.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = import_zod44.z.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("bigNumber"),
  min: import_zod44.z.number().optional(),
  max: import_zod44.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod44.z.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("toggle"),
  toggleIconType: import_zod44.z.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("bulletList"),
  listVisibility: import_zod44.z.string().optional(),
  listStyleBulletBreakline: import_zod44.z.boolean().optional(),
  listStyleBulletType: import_zod44.z.string().optional(),
  listStyleBulletGap: import_zod44.z.number().optional(),
  listStyleBulletIconGap: import_zod44.z.number().optional(),
  listOptionStyle: import_zod44.z.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("inlineList"),
  listStyleTextSeparator: import_zod44.z.string().optional(),
  listVisibility: import_zod44.z.string().optional(),
  listOptionStyle: import_zod44.z.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("pips"),
  icon: import_zod44.z.string().optional(),
  gapX: import_zod44.z.number().optional(),
  gapY: import_zod44.z.number().optional(),
  max: import_zod44.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = import_zod44.z.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod44.z.literal("bar"),
  min: import_zod44.z.number().optional(),
  max: import_zod44.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod44.z.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: import_zod44.z.string().optional(),
  bgColor: import_zod44.z.string().optional(),
  showValue: import_zod44.z.boolean().optional()
});
var WidgetV1Schema = import_zod44.z.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema
]);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = import_zod45.z.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: import_zod45.z.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = import_zod45.z.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema,
  WidgetEntityImageV5Schema
]);

// src/schemas/bypp.v3.schema.ts
var import_zod55 = require("zod");

// src/models/asset.v1.schema.ts
var import_zod47 = require("zod");

// src/mixins/with-audio-urls.v1.schema.ts
var import_zod46 = require("zod");
var WithAudioUrlsV1Schema = import_zod46.z.object({
  audioUrl: import_zod46.z.string().optional(),
  audioDurationSeconds: import_zod46.z.number().optional(),
  audioExt: import_zod46.z.enum(["mp3", "ogg"]).optional()
});

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = import_zod47.z.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod47.z.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: import_zod47.z.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: import_zod47.z.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: import_zod47.z.literal("audio-external"),
  youtubeVideoId: import_zod47.z.string(),
  thumbnailUrl: import_zod47.z.string(),
  durationSeconds: import_zod47.z.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: import_zod47.z.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = import_zod47.z.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/dataset.v1.schema.ts
var import_zod48 = require("zod");
var DatasetTargetV1Schema = import_zod48.z.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = import_zod48.z.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: import_zod48.z.number().optional(),
  targets: import_zod48.z.array(DatasetTargetV1Schema),
  targetTagsGroup: import_zod48.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
var import_zod49 = require("zod");
var DialectFontV1Schema = import_zod49.z.object({
  fontFamily: import_zod49.z.string(),
  fontUrl: import_zod49.z.string()
});
var DialectV1Schema = import_zod49.z.object({
  uid: DialectUidSchema,
  name: import_zod49.z.string(),
  font: DialectFontV1Schema,
  order: import_zod49.z.number().optional(),
  spokenByEntitiesUids: import_zod49.z.array(EntityUidSchema)
});

// src/models/random-table.v1.schema.ts
var import_zod50 = require("zod");
var RandomTableRowV1Schema = import_zod50.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod50.z.number(),
  content: import_zod50.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = import_zod50.z.object({
  uid: RandomTableUidSchema,
  title: import_zod50.z.string(),
  rows: import_zod50.z.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
var import_zod51 = require("zod");
var SceneGameModeV1Schema = import_zod51.z.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = import_zod51.z.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: import_zod51.z.number().optional(),
  lightPositionY: import_zod51.z.number().optional(),
  lightPositionZ: import_zod51.z.number().optional(),
  lightIntensity: import_zod51.z.number().optional(),
  lightColor: import_zod51.z.string().optional(),
  useCustomLightPosition: import_zod51.z.boolean().optional(),
  indoorLight: import_zod51.z.boolean().optional(),
  weather: import_zod51.z.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
var import_zod52 = require("zod");
var SceneBackgroundBaseV1Schema = import_zod52.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: import_zod52.z.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: import_zod52.z.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: import_zod52.z.literal("customVideo")
});
var SceneBackgroundV1Schema = import_zod52.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/sheet.v2.schema.ts
var import_zod53 = require("zod");
var SheetV2Schema = import_zod53.z.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: import_zod53.z.string().nullable().optional(),
  widgetUids: import_zod53.z.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
var import_zod54 = require("zod");
var TagV1Schema = import_zod54.z.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: import_zod54.z.boolean()
});

// src/schemas/bypp.v3.schema.ts
var CcLicenseV3Schema = import_zod55.z.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = import_zod55.z.object({
  authorName: import_zod55.z.string().min(1),
  authorUrl: import_zod55.z.string().url().optional(),
  sourceUrl: import_zod55.z.string().url().optional()
});
var ParentAttributionV3Schema = import_zod55.z.object({
  artifactName: import_zod55.z.string().min(1),
  authorName: import_zod55.z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: import_zod55.z.string().url().optional()
});
var BeyondPaperV3Schema = import_zod55.z.object({
  // Format metadata
  version: import_zod55.z.literal(3),
  format: import_zod55.z.literal("bypp"),
  // Bundle metadata
  name: import_zod55.z.string(),
  exportedAt: import_zod55.z.string(),
  bundleVersion: import_zod55.z.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: import_zod55.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: import_zod55.z.array(import_zod55.z.string().url()).optional(),
  // Content
  dialects: import_zod55.z.array(DialectV1Schema),
  entities: import_zod55.z.array(EntityV1Schema),
  pages: import_zod55.z.array(PageV1Schema),
  chunks: import_zod55.z.array(ChunkV1Schema),
  datasets: import_zod55.z.array(DatasetV1Schema),
  variables: import_zod55.z.array(VariableV2Schema),
  widgets: import_zod55.z.array(WidgetV1Schema),
  sheets: import_zod55.z.array(SheetV2Schema),
  dataTables: import_zod55.z.array(DataTableV2Schema),
  randomTables: import_zod55.z.array(RandomTableV1Schema),
  tags: import_zod55.z.array(TagV1Schema),
  tagCategories: import_zod55.z.array(TagCategoryV1Schema),
  scenes: import_zod55.z.array(SceneV1Schema),
  sceneMaps: import_zod55.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod55.z.array(SceneBackgroundV1Schema),
  assets: import_zod55.z.array(AssetV1Schema)
});

// src/schemas/bypp.v4.schema.ts
var import_zod57 = require("zod");

// src/models/random-table.v2.schema.ts
var import_zod56 = require("zod");
var RandomTableRowV2Schema = import_zod56.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod56.z.number().default(1),
  content: import_zod56.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = import_zod56.z.object({
  uid: RandomTableUidSchema,
  title: import_zod56.z.string(),
  rows: import_zod56.z.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = import_zod57.z.object({
  bundleName: import_zod57.z.string().min(1),
  authorName: import_zod57.z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: import_zod57.z.string().url().optional()
});
var BeyondPaperV4Schema = import_zod57.z.object({
  // Format metadata
  version: import_zod57.z.literal(4),
  format: import_zod57.z.literal("bypp"),
  // Bundle metadata
  name: import_zod57.z.string(),
  exportedAt: import_zod57.z.string(),
  bundleVersion: import_zod57.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod57.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod57.z.array(import_zod57.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod57.z.array(DialectV2Schema).default([]),
  entities: import_zod57.z.array(EntityV2Schema).default([]),
  pages: import_zod57.z.array(PageV1Schema).default([]),
  chunks: import_zod57.z.array(ChunkV2Schema).default([]),
  datasets: import_zod57.z.array(DatasetV2Schema).default([]),
  variables: import_zod57.z.array(VariableV2Schema).default([]),
  widgets: import_zod57.z.array(WidgetV1Schema).default([]),
  sheets: import_zod57.z.array(SheetV3Schema).default([]),
  dataTables: import_zod57.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod57.z.array(RandomTableV2Schema).default([]),
  tags: import_zod57.z.array(TagV2Schema).default([]),
  tagCategories: import_zod57.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod57.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod57.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod57.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod57.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
var BeyondPaperV7Schema = import_zod58.z.object({
  // Format metadata
  version: import_zod58.z.literal(7),
  format: import_zod58.z.literal("bypp"),
  // Bundle metadata
  name: import_zod58.z.string(),
  exportedAt: import_zod58.z.string(),
  bundleVersion: import_zod58.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod58.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod58.z.array(import_zod58.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod58.z.array(DialectV2Schema).default([]),
  entities: import_zod58.z.array(EntityV2Schema).default([]),
  pages: import_zod58.z.array(PageV1Schema).default([]),
  chunks: import_zod58.z.array(ChunkV2Schema).default([]),
  datasets: import_zod58.z.array(DatasetV2Schema).default([]),
  variables: import_zod58.z.array(VariableV6Schema).default([]),
  widgets: import_zod58.z.array(WidgetV5Schema).default([]),
  sheets: import_zod58.z.array(SheetV3Schema).default([]),
  dataTables: import_zod58.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod58.z.array(RandomTableV7Schema).default([]),
  tags: import_zod58.z.array(TagV2Schema).default([]),
  tagCategories: import_zod58.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod58.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod58.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod58.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod58.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
var import_zod59 = require("zod");
var BeyondPaperV1Schema = import_zod59.z.object({
  // Format metadata
  version: import_zod59.z.literal(1),
  format: import_zod59.z.literal("bypp"),
  // Bundle metadata
  name: import_zod59.z.string(),
  exportedAt: import_zod59.z.string(),
  bundleVersion: import_zod59.z.string(),
  // Content
  dialects: import_zod59.z.array(DialectV1Schema),
  entities: import_zod59.z.array(EntityV1Schema),
  pages: import_zod59.z.array(PageV1Schema),
  chunks: import_zod59.z.array(ChunkV1Schema),
  datasets: import_zod59.z.array(DatasetV1Schema),
  variables: import_zod59.z.array(VariableV1Schema),
  widgets: import_zod59.z.array(WidgetV1Schema),
  randomTables: import_zod59.z.array(RandomTableV1Schema),
  tags: import_zod59.z.array(TagV1Schema),
  tagCategories: import_zod59.z.array(TagCategoryV1Schema),
  scenes: import_zod59.z.array(SceneV1Schema),
  sceneMaps: import_zod59.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod59.z.array(SceneBackgroundV1Schema),
  assets: import_zod59.z.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
var import_zod60 = require("zod");
var BeyondPaperV2Schema = import_zod60.z.object({
  // Format metadata
  version: import_zod60.z.literal(2),
  format: import_zod60.z.literal("bypp"),
  // Bundle metadata
  name: import_zod60.z.string(),
  exportedAt: import_zod60.z.string(),
  bundleVersion: import_zod60.z.string(),
  // Content
  dialects: import_zod60.z.array(DialectV1Schema),
  entities: import_zod60.z.array(EntityV1Schema),
  pages: import_zod60.z.array(PageV1Schema),
  chunks: import_zod60.z.array(ChunkV1Schema),
  datasets: import_zod60.z.array(DatasetV1Schema),
  variables: import_zod60.z.array(VariableV2Schema),
  widgets: import_zod60.z.array(WidgetV1Schema),
  sheets: import_zod60.z.array(SheetV2Schema),
  dataTables: import_zod60.z.array(DataTableV2Schema),
  randomTables: import_zod60.z.array(RandomTableV1Schema),
  tags: import_zod60.z.array(TagV1Schema),
  tagCategories: import_zod60.z.array(TagCategoryV1Schema),
  scenes: import_zod60.z.array(SceneV1Schema),
  sceneMaps: import_zod60.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod60.z.array(SceneBackgroundV1Schema),
  assets: import_zod60.z.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
var import_zod61 = require("zod");
var BeyondPaperV5Schema = import_zod61.z.object({
  // Format metadata
  version: import_zod61.z.literal(5),
  format: import_zod61.z.literal("bypp"),
  // Bundle metadata
  name: import_zod61.z.string(),
  exportedAt: import_zod61.z.string(),
  bundleVersion: import_zod61.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod61.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod61.z.array(import_zod61.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod61.z.array(DialectV2Schema).default([]),
  entities: import_zod61.z.array(EntityV2Schema).default([]),
  pages: import_zod61.z.array(PageV1Schema).default([]),
  chunks: import_zod61.z.array(ChunkV2Schema).default([]),
  datasets: import_zod61.z.array(DatasetV2Schema).default([]),
  variables: import_zod61.z.array(VariableV5Schema).default([]),
  widgets: import_zod61.z.array(WidgetV5Schema).default([]),
  sheets: import_zod61.z.array(SheetV3Schema).default([]),
  dataTables: import_zod61.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod61.z.array(RandomTableV2Schema).default([]),
  tags: import_zod61.z.array(TagV2Schema).default([]),
  tagCategories: import_zod61.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod61.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod61.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod61.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod61.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
var import_zod62 = require("zod");
var BeyondPaperV6Schema = import_zod62.z.object({
  // Format metadata
  version: import_zod62.z.literal(6),
  format: import_zod62.z.literal("bypp"),
  // Bundle metadata
  name: import_zod62.z.string(),
  exportedAt: import_zod62.z.string(),
  bundleVersion: import_zod62.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod62.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod62.z.array(import_zod62.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod62.z.array(DialectV2Schema).default([]),
  entities: import_zod62.z.array(EntityV2Schema).default([]),
  pages: import_zod62.z.array(PageV1Schema).default([]),
  chunks: import_zod62.z.array(ChunkV2Schema).default([]),
  datasets: import_zod62.z.array(DatasetV2Schema).default([]),
  variables: import_zod62.z.array(VariableV6Schema).default([]),
  widgets: import_zod62.z.array(WidgetV5Schema).default([]),
  sheets: import_zod62.z.array(SheetV3Schema).default([]),
  dataTables: import_zod62.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod62.z.array(RandomTableV2Schema).default([]),
  tags: import_zod62.z.array(TagV2Schema).default([]),
  tagCategories: import_zod62.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod62.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod62.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod62.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod62.z.array(AssetV2Schema).default([])
});

// src/migrations/v1-to-v2.ts
var v1ToV2 = (v1) => ({
  ...v1,
  version: 2,
  sheets: [],
  dataTables: []
});

// src/migrations/v2-to-v1.ts
var v2ToV1 = (v2) => {
  const { sheets, dataTables, variables, ...rest } = v2;
  void sheets;
  void dataTables;
  return {
    ...rest,
    version: 1,
    variables: variables.filter(
      (v) => v.type !== "dataTableRef" && v.type !== "dataTableLookup"
    )
  };
};

// src/migrations/v2-to-v3.ts
var v2ToV3 = (v2) => ({
  ...v2,
  version: 3,
  license: "ARR",
  licenseVersion: "4.0",
  attribution: { authorName: "Unknown" }
});

// src/migrations/v3-to-v2.ts
var v3ToV2 = (v3) => {
  const {
    license,
    licenseVersion,
    attribution,
    parentAttribution,
    creatorLinks,
    ...rest
  } = v3;
  void license;
  void licenseVersion;
  void attribution;
  void parentAttribution;
  void creatorLinks;
  return { ...rest, version: 2 };
};

// src/migrations/v3-to-v4.ts
var v3ToV4 = (v3) => {
  const {
    parentAttribution,
    sceneMaps,
    scenes,
    ...rest
  } = v3;
  const v4ParentAttribution = parentAttribution ? {
    bundleName: parentAttribution.artifactName,
    authorName: parentAttribution.authorName,
    license: parentAttribution.license,
    ...parentAttribution.sourceUrl !== void 0 ? { sourceUrl: parentAttribution.sourceUrl } : {}
  } : void 0;
  const v4SceneMaps = sceneMaps.map((sm) => {
    if (sm.type === "dd2vtt") {
      const { type: _type, ...withoutType } = sm;
      void _type;
      return { ...withoutType, type: "customImage", sourceFormat: "dd2vtt" };
    }
    return sm;
  });
  const v4Scenes = scenes.map((s) => {
    const { weather: _w, gameMode: _g, ...sceneRest } = s;
    void _w;
    void _g;
    return sceneRest;
  });
  return {
    ...rest,
    version: 4,
    ...v4ParentAttribution ? { parentAttribution: v4ParentAttribution } : {},
    sceneMaps: v4SceneMaps,
    scenes: v4Scenes
  };
};

// src/migrations/v4-to-v3.ts
var v4ToV3 = (v4) => {
  const { parentAttribution, sceneMaps, scenes, ...rest } = v4;
  const v3ParentAttribution = parentAttribution ? {
    artifactName: parentAttribution.bundleName,
    authorName: parentAttribution.authorName,
    license: parentAttribution.license,
    ...parentAttribution.sourceUrl !== void 0 ? { sourceUrl: parentAttribution.sourceUrl } : {}
  } : void 0;
  const v3SceneMaps = sceneMaps.map((sm) => {
    if (sm.type === "customImage" && sm.sourceFormat === "dd2vtt") {
      const { sourceFormat: _sf2, type: _t, ...withoutAnnotations } = sm;
      void _sf2;
      void _t;
      return { ...withoutAnnotations, type: "dd2vtt" };
    }
    const { sourceFormat: _sf, ...withoutAnnotation } = sm;
    void _sf;
    return withoutAnnotation;
  });
  return {
    ...rest,
    version: 3,
    ...v3ParentAttribution ? { parentAttribution: v3ParentAttribution } : {},
    sceneMaps: v3SceneMaps,
    scenes
  };
};

// src/migrations/v4-to-v5.ts
var v4ToV5 = (v4) => ({
  ...v4,
  version: 5
});

// src/migrations/v5-to-v4.ts
var v5ToV4 = (v5) => {
  const { widgets, sheets, variables, ...rest } = v5;
  const droppedWidgetUids = new Set(
    widgets.filter((w) => w.type === "entityImage").map((w) => w.uid)
  );
  const v4Widgets = widgets.filter((w) => w.type !== "entityImage");
  const v4Sheets = sheets.map((sheet) => ({
    ...sheet,
    widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgetUids.has(uid))
  }));
  const v4Variables = variables.filter((v) => v.type !== "image");
  return {
    ...rest,
    version: 4,
    widgets: v4Widgets,
    sheets: v4Sheets,
    variables: v4Variables
  };
};

// src/migrations/v5-to-v6.ts
var v5ToV6 = (v5) => ({
  ...v5,
  version: 6
});

// src/migrations/v6-to-v5.ts
var v6ToV5 = (v6) => {
  const { variables, ...rest } = v6;
  const v5Variables = variables.filter(
    (v) => v.type !== "dataTableDirectLookup"
  );
  return {
    ...rest,
    version: 5,
    variables: v5Variables
  };
};

// src/migrations/v6-to-v7.ts
var v6ToV7 = (v6) => ({
  ...v6,
  version: 7,
  randomTables: v6.randomTables.map((table) => ({
    ...table,
    rows: table.rows.map(({ randomTableUid, ...row }) => ({
      ...row,
      ...randomTableUid ? { randomTableRefs: { $1: randomTableUid } } : {}
    }))
  }))
});

// src/migrations/v7-to-v6.ts
var v7ToV6 = (v7) => ({
  ...v7,
  version: 6,
  randomTables: v7.randomTables.map(
    ({ diceFormula: _diceFormula, ...table }) => ({
      ...table,
      rows: table.rows.map(({ randomTableRefs, ...row }) => {
        const firstUid = randomTableRefs ? Object.values(randomTableRefs)[0] : void 0;
        return {
          ...row,
          ...firstUid ? { randomTableUid: firstUid } : {}
        };
      })
    })
  )
});

// src/migrations/index.ts
var MIGRATIONS = {
  1: v1ToV2,
  2: v2ToV3,
  3: v3ToV4,
  4: v4ToV5,
  5: v5ToV6,
  6: v6ToV7
};
var DOWN_MIGRATIONS = {
  2: v2ToV1,
  3: v3ToV2,
  4: v4ToV3,
  5: v5ToV4,
  6: v6ToV5,
  7: v7ToV6
};
var SCHEMA_BY_VERSION = {
  1: BeyondPaperV1Schema,
  2: BeyondPaperV2Schema,
  3: BeyondPaperV3Schema,
  4: BeyondPaperV4Schema,
  5: BeyondPaperV5Schema,
  6: BeyondPaperV6Schema,
  7: BeyondPaperV7Schema
};
var migrate = (raw, targetVersion = BYPP_FORMAT_VERSION) => {
  if (typeof raw !== "object" || raw === null) {
    throw new Error("migrate: input is not an object");
  }
  if (!("version" in raw) || typeof raw.version !== "number") {
    throw new Error("migrate: input is missing a numeric `version` field");
  }
  let current = raw;
  let currentVersion = raw.version;
  const sourceSchema = SCHEMA_BY_VERSION[currentVersion];
  if (sourceSchema) {
    current = parseOrThrow(sourceSchema, current, currentVersion, "input");
  }
  while (currentVersion < targetVersion) {
    const step = MIGRATIONS[currentVersion];
    if (!step) {
      throw new Error(
        `migrate: no upgrade registered from v${currentVersion} to v${currentVersion + 1}`
      );
    }
    current = step(current);
    currentVersion++;
    assertVersionBumped(current, currentVersion);
    current = validateStep(current, currentVersion);
  }
  while (currentVersion > targetVersion) {
    const step = DOWN_MIGRATIONS[currentVersion];
    if (!step) {
      throw new Error(
        `migrate: no downgrade registered from v${currentVersion} to v${currentVersion - 1}`
      );
    }
    current = step(current);
    currentVersion--;
    assertVersionBumped(current, currentVersion);
    current = validateStep(current, currentVersion);
  }
  return current;
};
var parseOrThrow = (schema, value, version, label) => {
  const result = schema.safeParse(value);
  if (!result.success) {
    const issues = result.error.issues.map((i) => `  ${i.path.join(".")}: ${i.message}`).join("\n");
    const prefix = label === "input" ? `migrate: input does not conform to v${version} schema` : `migrate: step output for v${version} failed validation`;
    throw new Error(`${prefix}:
${issues}`);
  }
  return result.data;
};
var assertVersionBumped = (current, expected) => {
  const observed = typeof current === "object" && current !== null && "version" in current && typeof current.version === "number" ? current.version : null;
  if (observed !== expected) {
    throw new Error(
      `migrate: step did not set output.version to v${expected} (got ${observed})`
    );
  }
};
var validateStep = (current, version) => {
  const schema = SCHEMA_BY_VERSION[version];
  if (!schema) {
    return current;
  }
  return parseOrThrow(schema, current, version, "step output");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AbilityEntitySchema,
  AbilityEntityV1Schema,
  AbilityEntityV2Schema,
  ActionVisualIconCompoSlotConfigSchema,
  ActionVisualSchema,
  ActionVisualV1Schema,
  AssetBaseSchema,
  AssetBaseV1Schema,
  AssetBaseV2Schema,
  AssetSchema,
  AssetUidSchema,
  AssetV1Schema,
  AssetV2Schema,
  AttributionSchema,
  AttributionV3Schema,
  AudioAssetSchema,
  AudioAssetV1Schema,
  AudioAssetV2Schema,
  AudioExternalAssetSchema,
  AudioExternalAssetV1Schema,
  AudioExternalAssetV2Schema,
  BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION,
  BarOrientationSchema,
  BarOrientationV1Schema,
  BeyondPaperSchema,
  BeyondPaperV1Schema,
  BeyondPaperV2Schema,
  BeyondPaperV3Schema,
  BeyondPaperV4Schema,
  BeyondPaperV5Schema,
  BeyondPaperV6Schema,
  BeyondPaperV7Schema,
  BooleanVariableSchema,
  BooleanVariableV1Schema,
  CcLicenseSchema,
  CcLicenseV3Schema,
  CharacterEntitySchema,
  CharacterEntityV1Schema,
  CharacterEntityV2Schema,
  ChoiceOptionSchema,
  ChoiceOptionV1Schema,
  ChoiceVariableSchema,
  ChoiceVariableV1Schema,
  ChunkBaseSchema,
  ChunkBaseV1Schema,
  ChunkBaseV2Schema,
  ChunkBlockStyleSchema,
  ChunkBlockStyleV1Schema,
  ChunkGallerySchema,
  ChunkGalleryV1Schema,
  ChunkGalleryV2Schema,
  ChunkHeadingLevelSchema,
  ChunkHeadingLevelV1Schema,
  ChunkHeadingModeSchema,
  ChunkHeadingModeV1Schema,
  ChunkRandomSchema,
  ChunkRandomV1Schema,
  ChunkRandomV2Schema,
  ChunkSchema,
  ChunkTextProxySchema,
  ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema,
  ChunkTextSchema,
  ChunkTextV1Schema,
  ChunkTextV2Schema,
  ChunkUidSchema,
  ChunkV1Schema,
  ChunkV2Schema,
  CreatureEntitySchema,
  CreatureEntityV1Schema,
  CreatureEntityV2Schema,
  CustomImageSceneBackgroundSchema,
  CustomImageSceneBackgroundV1Schema,
  CustomImageSceneBackgroundV2Schema,
  CustomImageSceneMapSchema,
  CustomImageSceneMapV1Schema,
  CustomImageSceneMapV2Schema,
  CustomVideoSceneBackgroundSchema,
  CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneMapSchema,
  CustomVideoSceneMapV1Schema,
  CustomVideoSceneMapV2Schema,
  DOWN_MIGRATIONS,
  DataTableCellValueSchema,
  DataTableCellValueV2Schema,
  DataTableColumnBooleanSchema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceSchema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnDataTableLookupSchema,
  DataTableColumnDataTableLookupV2Schema,
  DataTableColumnDataTableRefSchema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnIconSchema,
  DataTableColumnIconV2Schema,
  DataTableColumnNumberSchema,
  DataTableColumnNumberV2Schema,
  DataTableColumnSchema,
  DataTableColumnTextSchema,
  DataTableColumnTextV2Schema,
  DataTableColumnTranslatableTextSchema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnUidSchema,
  DataTableColumnV2Schema,
  DataTableDirectLookupVariableSchema,
  DataTableDirectLookupVariableV6Schema,
  DataTableLookupVariableSchema,
  DataTableLookupVariableV2Schema,
  DataTableRefVariableSchema,
  DataTableRefVariableV2Schema,
  DataTableRowSchema,
  DataTableRowUidSchema,
  DataTableRowV2Schema,
  DataTableRowV3Schema,
  DataTableSchema,
  DataTableUidSchema,
  DataTableV2Schema,
  DataTableV3Schema,
  DatasetSchema,
  DatasetTargetSchema,
  DatasetTargetV1Schema,
  DatasetTargetV2Schema,
  DatasetUidSchema,
  DatasetV1Schema,
  DatasetV2Schema,
  Dd2VttSceneMapV1Schema,
  DialectFontSchema,
  DialectFontV1Schema,
  DialectFontV2Schema,
  DialectSchema,
  DialectUidSchema,
  DialectV1Schema,
  DialectV2Schema,
  ENTITY_IMAGE_RENDITIONS,
  EntityAssetSchema,
  EntityAssetV1Schema,
  EntityAssetV2Schema,
  EntityBaseSchema,
  EntityBaseV1Schema,
  EntityBaseV2Schema,
  EntityImageFormatSchema,
  EntityImageFormatV5Schema,
  EntityImageObjectFitSchema,
  EntityImageObjectFitV5Schema,
  EntitySchema,
  EntityTypeSchema,
  EntityTypeV1Schema,
  EntityTypeV2Schema,
  EntityUidSchema,
  EntityV1Schema,
  EntityV2Schema,
  EventEntitySchema,
  EventEntityV1Schema,
  EventEntityV2Schema,
  FormulaVariableSchema,
  FormulaVariableV1Schema,
  GridDataSchema,
  GridDataV1Schema,
  GroupEntitySchema,
  GroupEntityV1Schema,
  GroupEntityV2Schema,
  GroupRankCharacterSchema,
  GroupRankCharacterV1Schema,
  GroupRankSchema,
  GroupRankV1Schema,
  IconCompoSchema,
  IconCompoSlotConfigSchema,
  IconCompoSlotConfigV1Schema,
  IconCompoV1Schema,
  ImageAssetSchema,
  ImageAssetV1Schema,
  ImageAssetV2Schema,
  ImageDimensionsSchema,
  ImageDimensionsV1Schema,
  ImageVariableSchema,
  ImageVariableV5Schema,
  ItemEntitySchema,
  ItemEntityV1Schema,
  ItemEntityV2Schema,
  KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS,
  NoteEntitySchema,
  NoteEntityV1Schema,
  NoteEntityV2Schema,
  NumberVariableSchema,
  NumberVariableV1Schema,
  PageEntitySchema,
  PageEntityV1Schema,
  PageSchema,
  PageStandardSchema,
  PageStandardV1Schema,
  PageUidSchema,
  PageV1Schema,
  ParentAttributionSchema,
  ParentAttributionV3Schema,
  ParentAttributionV4Schema,
  PlaceEntitySchema,
  PlaceEntityV1Schema,
  PlaceEntityV2Schema,
  RandomTableRowSchema,
  RandomTableRowUidSchema,
  RandomTableRowV1Schema,
  RandomTableRowV2Schema,
  RandomTableRowV7Schema,
  RandomTableSchema,
  RandomTableUidSchema,
  RandomTableV1Schema,
  RandomTableV2Schema,
  RandomTableV7Schema,
  RollVariableSchema,
  RollVariableV1Schema,
  SCHEMA_BY_VERSION,
  SceneBackgroundBaseSchema,
  SceneBackgroundBaseV1Schema,
  SceneBackgroundBaseV2Schema,
  SceneBackgroundSchema,
  SceneBackgroundUidSchema,
  SceneBackgroundV1Schema,
  SceneBackgroundV2Schema,
  SceneGameModeV1Schema,
  SceneMapBaseSchema,
  SceneMapBaseV1Schema,
  SceneMapBaseV2Schema,
  SceneMapSchema,
  SceneMapUidSchema,
  SceneMapV1Schema,
  SceneMapV2Schema,
  SceneSchema,
  SceneUidSchema,
  SceneV1Schema,
  SceneV2Schema,
  SheetSchema,
  SheetUidSchema,
  SheetV2Schema,
  SheetV3Schema,
  StoryEntitySchema,
  StoryEntityV1Schema,
  StoryEntityV2Schema,
  StyleSchema,
  StyleV1Schema,
  TagCategorySchema,
  TagCategoryUidSchema,
  TagCategoryV1Schema,
  TagSchema,
  TagUidSchema,
  TagV1Schema,
  TagV2Schema,
  TextVariableSchema,
  TextVariableV1Schema,
  TranslatableTextSchema,
  TranslatableTextV2Schema,
  VariableBaseSchema,
  VariableBaseV1Schema,
  VariableChoiceUidSchema,
  VariableDataValueSchema,
  VariableDataValueV1Schema,
  VariableSchema,
  VariableUidSchema,
  VariableV1Schema,
  VariableV2Schema,
  VariableV5Schema,
  VariableV6Schema,
  VariablesDataRecordSchema,
  VariablesDataRecordV1Schema,
  VideoAssetSchema,
  VideoAssetV1Schema,
  VideoAssetV2Schema,
  WidgetBarSchema,
  WidgetBarV1Schema,
  WidgetBaseSchema,
  WidgetBaseV1Schema,
  WidgetBigNumberSchema,
  WidgetBigNumberV1Schema,
  WidgetBulletListSchema,
  WidgetBulletListV1Schema,
  WidgetEmptySchema,
  WidgetEmptyV1Schema,
  WidgetEntityImageSchema,
  WidgetEntityImageV5Schema,
  WidgetInlineListSchema,
  WidgetInlineListV1Schema,
  WidgetPipsSchema,
  WidgetPipsV1Schema,
  WidgetPlainTextSchema,
  WidgetPlainTextV1Schema,
  WidgetSchema,
  WidgetToggleSchema,
  WidgetToggleV1Schema,
  WidgetUidSchema,
  WidgetV1Schema,
  WidgetV5Schema,
  WithArchiveSchema,
  WithArchiveV1Schema,
  WithArchiveV2Schema,
  WithAreaSchema,
  WithAreaV1Schema,
  WithAssetsSchema,
  WithAssetsV1Schema,
  WithAudioUrlsSchema,
  WithAudioUrlsV1Schema,
  WithAudioUrlsV2Schema,
  WithDataSchema,
  WithDataV1Schema,
  WithImagesUrlsSchema,
  WithImagesUrlsV1Schema,
  WithImagesUrlsV2Schema,
  WithLocalizedNameSchema,
  WithLocalizedNameV2Schema,
  WithNameSchema,
  WithNameV1Schema,
  WithPagesSchema,
  WithPagesV1Schema,
  WithPagesV2Schema,
  WithPositionSchema,
  WithPositionV1Schema,
  WithScenesSchema,
  WithScenesV1Schema,
  WithScenesV2Schema,
  WithStyleSchema,
  WithStyleV1Schema,
  WithVideoUrlsSchema,
  WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema,
  migrate
});
//# sourceMappingURL=index.cjs.map