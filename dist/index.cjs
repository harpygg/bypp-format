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
  AbilityEntitySchema: () => AbilityEntityV3Schema,
  AbilityEntityV1Schema: () => AbilityEntityV1Schema,
  AbilityEntityV2Schema: () => AbilityEntityV2Schema,
  AbilityEntityV3Schema: () => AbilityEntityV3Schema,
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
  BeyondPaperSchema: () => BeyondPaperV12Schema,
  BeyondPaperV10Schema: () => BeyondPaperV10Schema,
  BeyondPaperV11Schema: () => BeyondPaperV11Schema,
  BeyondPaperV12Schema: () => BeyondPaperV12Schema,
  BeyondPaperV1Schema: () => BeyondPaperV1Schema,
  BeyondPaperV2Schema: () => BeyondPaperV2Schema,
  BeyondPaperV3Schema: () => BeyondPaperV3Schema,
  BeyondPaperV4Schema: () => BeyondPaperV4Schema,
  BeyondPaperV5Schema: () => BeyondPaperV5Schema,
  BeyondPaperV6Schema: () => BeyondPaperV6Schema,
  BeyondPaperV7Schema: () => BeyondPaperV7Schema,
  BeyondPaperV8Schema: () => BeyondPaperV8Schema,
  BeyondPaperV9Schema: () => BeyondPaperV9Schema,
  BooleanVariableSchema: () => BooleanVariableV1Schema,
  BooleanVariableV1Schema: () => BooleanVariableV1Schema,
  CcLicenseSchema: () => CcLicenseV3Schema,
  CcLicenseV3Schema: () => CcLicenseV3Schema,
  CharacterEntitySchema: () => CharacterEntityV3Schema,
  CharacterEntityV1Schema: () => CharacterEntityV1Schema,
  CharacterEntityV2Schema: () => CharacterEntityV2Schema,
  CharacterEntityV3Schema: () => CharacterEntityV3Schema,
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
  ChunkSchema: () => ChunkV11Schema,
  ChunkTextProxyV1Schema: () => ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema: () => ChunkTextProxyV2Schema,
  ChunkTextSchema: () => ChunkTextV11Schema,
  ChunkTextV11Schema: () => ChunkTextV11Schema,
  ChunkTextV1Schema: () => ChunkTextV1Schema,
  ChunkTextV2Schema: () => ChunkTextV2Schema,
  ChunkUidSchema: () => ChunkUidSchema,
  ChunkV11Schema: () => ChunkV11Schema,
  ChunkV1Schema: () => ChunkV1Schema,
  ChunkV2Schema: () => ChunkV2Schema,
  CreatureEntitySchema: () => CreatureEntityV3Schema,
  CreatureEntityV1Schema: () => CreatureEntityV1Schema,
  CreatureEntityV2Schema: () => CreatureEntityV2Schema,
  CreatureEntityV3Schema: () => CreatureEntityV3Schema,
  CustomImageSceneBackgroundSchema: () => CustomImageSceneBackgroundV3Schema,
  CustomImageSceneBackgroundV1Schema: () => CustomImageSceneBackgroundV1Schema,
  CustomImageSceneBackgroundV2Schema: () => CustomImageSceneBackgroundV2Schema,
  CustomImageSceneBackgroundV3Schema: () => CustomImageSceneBackgroundV3Schema,
  CustomImageSceneMapSchema: () => CustomImageSceneMapV3Schema,
  CustomImageSceneMapV1Schema: () => CustomImageSceneMapV1Schema,
  CustomImageSceneMapV2Schema: () => CustomImageSceneMapV2Schema,
  CustomImageSceneMapV3Schema: () => CustomImageSceneMapV3Schema,
  CustomVideoSceneBackgroundSchema: () => CustomVideoSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV1Schema: () => CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV2Schema: () => CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV3Schema: () => CustomVideoSceneBackgroundV3Schema,
  CustomVideoSceneMapSchema: () => CustomVideoSceneMapV3Schema,
  CustomVideoSceneMapV1Schema: () => CustomVideoSceneMapV1Schema,
  CustomVideoSceneMapV2Schema: () => CustomVideoSceneMapV2Schema,
  CustomVideoSceneMapV3Schema: () => CustomVideoSceneMapV3Schema,
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
  EntityBaseSchema: () => EntityBaseV3Schema,
  EntityBaseV1Schema: () => EntityBaseV1Schema,
  EntityBaseV2Schema: () => EntityBaseV2Schema,
  EntityBaseV3Schema: () => EntityBaseV3Schema,
  EntityImageFormatSchema: () => EntityImageFormatV5Schema,
  EntityImageFormatV5Schema: () => EntityImageFormatV5Schema,
  EntityImageObjectFitSchema: () => EntityImageObjectFitV5Schema,
  EntityImageObjectFitV5Schema: () => EntityImageObjectFitV5Schema,
  EntitySchema: () => EntityV3Schema,
  EntityTypeSchema: () => EntityTypeV1Schema,
  EntityTypeV1Schema: () => EntityTypeV1Schema,
  EntityTypeV2Schema: () => EntityTypeV1Schema,
  EntityTypeV3Schema: () => EntityTypeV1Schema,
  EntityUidSchema: () => EntityUidSchema,
  EntityV1Schema: () => EntityV1Schema,
  EntityV2Schema: () => EntityV2Schema,
  EntityV3Schema: () => EntityV3Schema,
  EventEntitySchema: () => EventEntityV3Schema,
  EventEntityV1Schema: () => EventEntityV1Schema,
  EventEntityV2Schema: () => EventEntityV2Schema,
  EventEntityV3Schema: () => EventEntityV3Schema,
  FormulaVariableSchema: () => FormulaVariableV1Schema,
  FormulaVariableV1Schema: () => FormulaVariableV1Schema,
  GridDataSchema: () => GridDataV1Schema,
  GridDataV1Schema: () => GridDataV1Schema,
  GroupEntitySchema: () => GroupEntityV3Schema,
  GroupEntityV1Schema: () => GroupEntityV1Schema,
  GroupEntityV2Schema: () => GroupEntityV2Schema,
  GroupEntityV3Schema: () => GroupEntityV3Schema,
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
  ItemEntitySchema: () => ItemEntityV3Schema,
  ItemEntityV1Schema: () => ItemEntityV1Schema,
  ItemEntityV2Schema: () => ItemEntityV2Schema,
  ItemEntityV3Schema: () => ItemEntityV3Schema,
  KNOWN_AUDIO_EXTS: () => KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS: () => KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS: () => KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS: () => MIGRATIONS,
  NoteEntitySchema: () => NoteEntityV3Schema,
  NoteEntityV1Schema: () => NoteEntityV1Schema,
  NoteEntityV2Schema: () => NoteEntityV2Schema,
  NoteEntityV3Schema: () => NoteEntityV3Schema,
  NumberVariableSchema: () => NumberVariableV1Schema,
  NumberVariableV1Schema: () => NumberVariableV1Schema,
  NumberVariableV2Schema: () => NumberVariableV2Schema,
  ObjectFitSchema: () => ObjectFitV6Schema,
  ObjectFitV6Schema: () => ObjectFitV6Schema,
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
  PlaceEntitySchema: () => PlaceEntityV3Schema,
  PlaceEntityV1Schema: () => PlaceEntityV1Schema,
  PlaceEntityV2Schema: () => PlaceEntityV2Schema,
  PlaceEntityV3Schema: () => PlaceEntityV3Schema,
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
  SceneBackgroundSchema: () => SceneBackgroundV3Schema,
  SceneBackgroundUidSchema: () => SceneBackgroundUidSchema,
  SceneBackgroundV1Schema: () => SceneBackgroundV1Schema,
  SceneBackgroundV2Schema: () => SceneBackgroundV2Schema,
  SceneBackgroundV3Schema: () => SceneBackgroundV3Schema,
  SceneGameModeV1Schema: () => SceneGameModeV1Schema,
  SceneMapBaseSchema: () => SceneMapBaseV2Schema,
  SceneMapBaseV1Schema: () => SceneMapBaseV1Schema,
  SceneMapBaseV2Schema: () => SceneMapBaseV2Schema,
  SceneMapSchema: () => SceneMapV3Schema,
  SceneMapUidSchema: () => SceneMapUidSchema,
  SceneMapV1Schema: () => SceneMapV1Schema,
  SceneMapV2Schema: () => SceneMapV2Schema,
  SceneMapV3Schema: () => SceneMapV3Schema,
  SceneSchema: () => SceneV2Schema,
  SceneUidSchema: () => SceneUidSchema,
  SceneV1Schema: () => SceneV1Schema,
  SceneV2Schema: () => SceneV2Schema,
  SheetSchema: () => SheetV6Schema,
  SheetUidSchema: () => SheetUidSchema,
  SheetV2Schema: () => SheetV2Schema,
  SheetV3Schema: () => SheetV3Schema,
  SheetV5Schema: () => SheetV5Schema,
  SheetV6Schema: () => SheetV6Schema,
  StoryEntitySchema: () => StoryEntityV3Schema,
  StoryEntityV1Schema: () => StoryEntityV1Schema,
  StoryEntityV2Schema: () => StoryEntityV2Schema,
  StoryEntityV3Schema: () => StoryEntityV3Schema,
  StyleSchema: () => StyleV3Schema,
  StyleV1Schema: () => StyleV1Schema,
  StyleV2Schema: () => StyleV2Schema,
  StyleV3Schema: () => StyleV3Schema,
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
  VariableSchema: () => VariableV7Schema,
  VariableUidSchema: () => VariableUidSchema,
  VariableV1Schema: () => VariableV1Schema,
  VariableV2Schema: () => VariableV2Schema,
  VariableV5Schema: () => VariableV5Schema,
  VariableV6Schema: () => VariableV6Schema,
  VariableV7Schema: () => VariableV7Schema,
  VariablesDataRecordSchema: () => VariablesDataRecordV1Schema,
  VariablesDataRecordV1Schema: () => VariablesDataRecordV1Schema,
  VideoAssetSchema: () => VideoAssetV2Schema,
  VideoAssetV1Schema: () => VideoAssetV1Schema,
  VideoAssetV2Schema: () => VideoAssetV2Schema,
  WidgetActionRollSchema: () => WidgetActionRollV8Schema,
  WidgetActionRollV8Schema: () => WidgetActionRollV8Schema,
  WidgetBackgroundSchema: () => WidgetBackgroundV6Schema,
  WidgetBackgroundV6Schema: () => WidgetBackgroundV6Schema,
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
  WidgetEntityImageSchema: () => WidgetEntityImageV6Schema,
  WidgetEntityImageV5Schema: () => WidgetEntityImageV5Schema,
  WidgetInlineListSchema: () => WidgetInlineListV1Schema,
  WidgetInlineListV1Schema: () => WidgetInlineListV1Schema,
  WidgetPipsSchema: () => WidgetPipsV1Schema,
  WidgetPipsV1Schema: () => WidgetPipsV1Schema,
  WidgetPlainTextSchema: () => WidgetPlainTextV1Schema,
  WidgetPlainTextV1Schema: () => WidgetPlainTextV1Schema,
  WidgetSchema: () => WidgetV8Schema,
  WidgetToggleSchema: () => WidgetToggleV1Schema,
  WidgetToggleV1Schema: () => WidgetToggleV1Schema,
  WidgetUidSchema: () => WidgetUidSchema,
  WidgetV1Schema: () => WidgetV1Schema,
  WidgetV5Schema: () => WidgetV5Schema,
  WidgetV7Schema: () => WidgetV7Schema,
  WidgetV8Schema: () => WidgetV8Schema,
  WidgetWheelSchema: () => WidgetWheelV7Schema,
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
  WithImagesUrlsV3Schema: () => WithImagesUrlsV3Schema,
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
  WithStyleSchema: () => WithStyleV3Schema,
  WithStyleV1Schema: () => WithStyleV1Schema,
  WithStyleV2Schema: () => WithStyleV2Schema,
  WithStyleV3Schema: () => WithStyleV3Schema,
  WithVideoUrlsSchema: () => WithVideoUrlsV2Schema,
  WithVideoUrlsV1Schema: () => WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema: () => WithVideoUrlsV2Schema,
  WithWidgetActionsSchema: () => WithWidgetActionsV8Schema,
  WithWidgetActionsV8Schema: () => WithWidgetActionsV8Schema,
  migrate: () => migrate
});
module.exports = __toCommonJS(index_exports);

// src/version.ts
var BYPP_FORMAT_VERSION = 12;
var BYPP_FORMAT_EXT = "bypp";

// src/schemas/bypp.v12.schema.ts
var import_zod70 = require("zod");

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

// src/models/chunk.v11.schema.ts
var import_zod10 = require("zod");

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

// src/models/chunk.v11.schema.ts
var ChunkTextV11Schema = ChunkBaseV2Schema.extend({
  type: import_zod10.z.literal("text"),
  content: import_zod10.z.string(),
  mentionedEntitiesUids: import_zod10.z.array(EntityUidSchema).optional(),
  wrappedInEntityUid: EntityUidSchema.optional()
});
var ChunkV11Schema = import_zod10.z.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/data-table.v3.schema.ts
var import_zod15 = require("zod");

// src/mixins/with-localized-name.v2.schema.ts
var import_zod12 = require("zod");

// src/mixins/translatable-text.v2.schema.ts
var import_zod11 = require("zod");
var TranslatableTextV2Schema = import_zod11.z.record(import_zod11.z.string(), import_zod11.z.string());

// src/mixins/with-localized-name.v2.schema.ts
var WithLocalizedNameV2Schema = import_zod12.z.object({
  name: TranslatableTextV2Schema
});

// src/models/data-table.v2.schema.ts
var import_zod14 = require("zod");

// src/models/variable.v1.schema.ts
var import_zod13 = require("zod");
var ChoiceOptionV1Schema = import_zod13.z.object({
  uid: VariableChoiceUidSchema,
  label: import_zod13.z.string(),
  icon: import_zod13.z.string().optional(),
  value: import_zod13.z.number().optional()
});
var VariableBaseV1Schema = import_zod13.z.object({ uid: VariableUidSchema }).merge(WithNameV1Schema).extend({
  datasetsUids: import_zod13.z.array(DatasetUidSchema),
  isMandatory: import_zod13.z.boolean().optional(),
  isHiddenFromSheet: import_zod13.z.boolean().optional(),
  label: import_zod13.z.string().optional()
});
var NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod13.z.literal("number"),
  defaultValue: import_zod13.z.number().optional()
});
var TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod13.z.literal("text"),
  maxChars: import_zod13.z.number().optional(),
  defaultValue: import_zod13.z.string().optional()
});
var BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod13.z.literal("boolean"),
  defaultValue: import_zod13.z.boolean().optional()
});
var ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod13.z.literal("choice"),
  options: import_zod13.z.array(ChoiceOptionV1Schema).optional(),
  isMultiple: import_zod13.z.boolean().optional(),
  hasNumericValue: import_zod13.z.boolean().optional(),
  hasIcon: import_zod13.z.boolean().optional(),
  defaultOptionUids: import_zod13.z.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod13.z.literal("formula"),
  formula: import_zod13.z.string().optional(),
  depsVariablesUid: import_zod13.z.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigV1Schema = import_zod13.z.object({
  icon: import_zod13.z.string().nullable(),
  size: import_zod13.z.number().optional(),
  rotate: import_zod13.z.number().optional(),
  revert: import_zod13.z.boolean().optional()
});
var IconCompoV1Schema = import_zod13.z.record(
  import_zod13.z.string(),
  IconCompoSlotConfigV1Schema
);
var ActionVisualV1Schema = import_zod13.z.discriminatedUnion("type", [
  import_zod13.z.object({ type: import_zod13.z.literal("awesome"), icon: import_zod13.z.string() }),
  import_zod13.z.object({ type: import_zod13.z.literal("compo"), icons: IconCompoV1Schema })
]);
var RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod13.z.literal("roll"),
  diceFormula: import_zod13.z.string().optional(),
  depsVariablesUid: import_zod13.z.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: import_zod13.z.number().nullable().optional()
});
var VariableV1Schema = import_zod13.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema
]);

// src/models/data-table.v2.schema.ts
var DataTableColumnBaseV2Schema = import_zod14.z.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: import_zod14.z.string().optional(),
  isMandatory: import_zod14.z.boolean().optional()
});
var DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: import_zod14.z.literal("number"),
    defaultNumber: import_zod14.z.number().optional()
  }
);
var DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod14.z.literal("text"),
  maxChars: import_zod14.z.number().optional(),
  defaultValue: import_zod14.z.string().optional()
});
var DataTableColumnBooleanV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod14.z.literal("boolean"),
  defaultBoolean: import_zod14.z.boolean().optional()
});
var DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: import_zod14.z.literal("choice"),
    options: import_zod14.z.array(ChoiceOptionV1Schema).optional(),
    isMultiple: import_zod14.z.boolean().optional(),
    hasNumericValue: import_zod14.z.boolean().optional(),
    hasIcon: import_zod14.z.boolean().optional()
  }
);
var DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod14.z.literal("icon"),
  defaultIcon: import_zod14.z.string().optional()
});
var DataTableColumnTranslatableTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod14.z.literal("translatableText"),
  defaultValue: TranslatableTextV2Schema.optional()
});
var DataTableColumnDataTableRefV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod14.z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: import_zod14.z.boolean().optional(),
  defaultRowUids: import_zod14.z.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod14.z.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: import_zod14.z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: import_zod14.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod14.z.string().optional()
});
var DataTableColumnV2Schema = import_zod14.z.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableCellValueV2Schema = import_zod14.z.union([
  import_zod14.z.string(),
  import_zod14.z.number(),
  import_zod14.z.boolean(),
  import_zod14.z.array(import_zod14.z.string()),
  TranslatableTextV2Schema,
  import_zod14.z.null()
]);
var DataTableRowV2Schema = import_zod14.z.object({
  uid: DataTableRowUidSchema,
  data: import_zod14.z.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV2Schema = import_zod14.z.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: import_zod14.z.string().nullable().optional(),
  weight: import_zod14.z.number().optional(),
  adminOnly: import_zod14.z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: import_zod14.z.array(DataTableColumnV2Schema),
  rows: import_zod14.z.array(DataTableRowV2Schema)
});

// src/models/data-table.v3.schema.ts
var DataTableRowV3Schema = import_zod15.z.object({
  uid: DataTableRowUidSchema,
  data: import_zod15.z.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = import_zod15.z.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: import_zod15.z.string().optional(),
  weight: import_zod15.z.number().optional(),
  adminOnly: import_zod15.z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: import_zod15.z.array(DataTableColumnV2Schema).default([]),
  rows: import_zod15.z.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
var import_zod23 = require("zod");

// src/models/entity.v1.schema.ts
var import_zod22 = require("zod");

// src/mixins/with-archive.v1.schema.ts
var import_zod16 = require("zod");
var WithArchiveV1Schema = import_zod16.z.object({
  isArchived: import_zod16.z.boolean()
});

// src/mixins/with-assets.v1.schema.ts
var import_zod17 = require("zod");
var WithAssetsV1Schema = import_zod17.z.object({
  assetUids: import_zod17.z.array(AssetUidSchema).optional()
});

// src/mixins/with-data.v1.schema.ts
var import_zod18 = require("zod");
var VariableDataValueV1Schema = import_zod18.z.union([
  import_zod18.z.string(),
  import_zod18.z.number(),
  import_zod18.z.boolean(),
  import_zod18.z.array(VariableChoiceUidSchema),
  import_zod18.z.null()
]);
var VariablesDataRecordV1Schema = import_zod18.z.record(
  VariableUidSchema,
  VariableDataValueV1Schema
);
var WithDataV1Schema = import_zod18.z.object({
  data: VariablesDataRecordV1Schema.optional()
});

// src/mixins/with-images-urls.v1.schema.ts
var import_zod19 = require("zod");
var WithImagesUrlsV1Schema = import_zod19.z.object({
  originalUrl: import_zod19.z.string().optional(),
  thumbnailUrl: import_zod19.z.string().optional(),
  squareUrl: import_zod19.z.string().optional(),
  closeupUrl: import_zod19.z.string().optional()
});

// src/mixins/with-pages.v1.schema.ts
var import_zod20 = require("zod");
var WithPagesV1Schema = import_zod20.z.object({
  pagesOrder: import_zod20.z.array(PageUidSchema)
});

// src/mixins/with-scenes.v1.schema.ts
var import_zod21 = require("zod");
var WithScenesV1Schema = import_zod21.z.object({
  scenesUids: import_zod21.z.array(SceneUidSchema)
});

// src/models/entity.v1.schema.ts
var EntityTypeV1Schema = import_zod22.z.enum([
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
var GroupRankCharacterV1Schema = import_zod22.z.object({
  entityUid: EntityUidSchema,
  label: import_zod22.z.string()
});
var GroupRankV1Schema = import_zod22.z.object({
  label: import_zod22.z.string(),
  characters: import_zod22.z.array(GroupRankCharacterV1Schema)
});
var EntityBaseV1Schema = import_zod22.z.object({
  uid: EntityUidSchema,
  displayName: import_zod22.z.string().nullable(),
  description: import_zod22.z.string().nullable(),
  tagsUid: import_zod22.z.array(TagUidSchema),
  sheetOverrides: import_zod22.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV1Schema).merge(WithArchiveV1Schema).merge(WithPagesV1Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("character")
});
var CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("creature")
});
var GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("group"),
  ranks: import_zod22.z.array(GroupRankV1Schema),
  charactersUids: import_zod22.z.array(EntityUidSchema)
});
var PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema
).extend({ type: import_zod22.z.literal("place") });
var ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("item")
});
var NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("note")
});
var AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("ability")
});
var StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("story")
});
var EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod22.z.literal("event")
});
var EntityV1Schema = import_zod22.z.discriminatedUnion("type", [
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
var DatasetTargetV2Schema = import_zod23.z.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = import_zod23.z.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: import_zod23.z.number().optional(),
  targets: import_zod23.z.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: import_zod23.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v2.schema.ts
var import_zod24 = require("zod");
var DialectFontV2Schema = import_zod24.z.object({
  fontFamily: import_zod24.z.string(),
  fontUrl: import_zod24.z.string().url()
});
var DialectV2Schema = import_zod24.z.object({
  uid: DialectUidSchema,
  name: import_zod24.z.string(),
  font: DialectFontV2Schema,
  order: import_zod24.z.number().optional(),
  spokenByEntitiesUids: import_zod24.z.array(EntityUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var import_zod28 = require("zod");

// src/mixins/with-archive.v2.schema.ts
var import_zod25 = require("zod");
var WithArchiveV2Schema = import_zod25.z.object({
  isArchived: import_zod25.z.boolean().default(false)
});

// src/mixins/with-images-urls.v3.schema.ts
var WithImagesUrlsV3Schema = WithImagesUrlsV2Schema.extend({
  dimensions: ImageDimensionsV1Schema.optional()
});

// src/mixins/with-pages.v2.schema.ts
var import_zod26 = require("zod");
var WithPagesV2Schema = import_zod26.z.object({
  pagesOrder: import_zod26.z.array(PageUidSchema).default([])
});

// src/mixins/with-scenes.v2.schema.ts
var import_zod27 = require("zod");
var WithScenesV2Schema = import_zod27.z.object({
  scenesUids: import_zod27.z.array(SceneUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = import_zod28.z.object({
  uid: EntityUidSchema,
  displayName: import_zod28.z.string().optional(),
  description: import_zod28.z.string().optional(),
  tagsUid: import_zod28.z.array(TagUidSchema).default([]),
  sheetOverrides: import_zod28.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("group"),
  ranks: import_zod28.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod28.z.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod28.z.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod28.z.literal("event")
});
var EntityV3Schema = import_zod28.z.discriminatedUnion("type", [
  CharacterEntityV3Schema,
  CreatureEntityV3Schema,
  GroupEntityV3Schema,
  PlaceEntityV3Schema,
  ItemEntityV3Schema,
  NoteEntityV3Schema,
  AbilityEntityV3Schema,
  StoryEntityV3Schema,
  EventEntityV3Schema
]);

// src/models/page.v1.schema.ts
var import_zod29 = require("zod");
var PageStandardV1Schema = import_zod29.z.object({ uid: PageUidSchema }).merge(WithNameV1Schema).extend({
  type: import_zod29.z.literal("standard"),
  chunksOrder: import_zod29.z.array(ChunkUidSchema)
});
var PageEntityV1Schema = import_zod29.z.object({
  uid: PageUidSchema,
  type: import_zod29.z.literal("entity"),
  entityUid: EntityUidSchema
});
var PageV1Schema = import_zod29.z.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema
]);

// src/models/random-table.v7.schema.ts
var import_zod30 = require("zod");
var RandomTableRowV7Schema = import_zod30.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod30.z.number().default(1),
  content: import_zod30.z.string(),
  randomTableRefs: import_zod30.z.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = import_zod30.z.object({
  uid: RandomTableUidSchema,
  title: import_zod30.z.string(),
  rows: import_zod30.z.array(RandomTableRowV7Schema).default([]),
  diceFormula: import_zod30.z.string().optional()
});

// src/models/scene.v2.schema.ts
var import_zod31 = require("zod");
var SceneV2Schema = import_zod31.z.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: import_zod31.z.number().optional(),
  lightPositionY: import_zod31.z.number().optional(),
  lightPositionZ: import_zod31.z.number().optional(),
  lightIntensity: import_zod31.z.number().optional(),
  lightColor: import_zod31.z.string().optional(),
  useCustomLightPosition: import_zod31.z.boolean().optional(),
  indoorLight: import_zod31.z.boolean().optional()
});

// src/models/scene-background.v3.schema.ts
var import_zod33 = require("zod");

// src/models/scene-background.v2.schema.ts
var import_zod32 = require("zod");
var SceneBackgroundBaseV2Schema = import_zod32.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: import_zod32.z.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: import_zod32.z.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: import_zod32.z.literal("customVideo")
});
var SceneBackgroundV2Schema = import_zod32.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: import_zod33.z.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: import_zod33.z.literal("customVideo")
});
var SceneBackgroundV3Schema = import_zod33.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-map.v3.schema.ts
var import_zod36 = require("zod");

// src/models/scene-map.v2.schema.ts
var import_zod35 = require("zod");

// src/models/scene-map.v1.schema.ts
var import_zod34 = require("zod");
var GridDataV1Schema = import_zod34.z.object({
  type: import_zod34.z.enum(["square", "hexv", "hexh"]),
  size: import_zod34.z.number(),
  sizeInUnit: import_zod34.z.number(),
  measureUnit: import_zod34.z.string(),
  lineWidth: import_zod34.z.number(),
  color: import_zod34.z.string().nullable().optional(),
  offset: import_zod34.z.object({ x: import_zod34.z.number(), z: import_zod34.z.number() })
});
var SceneMapBaseV1Schema = import_zod34.z.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema
});
var CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod34.z.literal("customImage")
});
var CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: import_zod34.z.literal("customVideo")
});
var Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod34.z.literal("dd2vtt")
});
var SceneMapV1Schema = import_zod34.z.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema
]);

// src/models/scene-map.v2.schema.ts
var KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"];
var SceneMapBaseV2Schema = import_zod35.z.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: import_zod35.z.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: import_zod35.z.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod35.z.literal("customVideo")
});
var SceneMapV2Schema = import_zod35.z.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: import_zod36.z.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod36.z.literal("customVideo")
});
var SceneMapV3Schema = import_zod36.z.discriminatedUnion("type", [
  CustomImageSceneMapV3Schema,
  CustomVideoSceneMapV3Schema
]);

// src/models/sheet.v5.schema.ts
var import_zod41 = require("zod");

// src/mixins/with-style.v3.schema.ts
var import_zod38 = require("zod");

// src/mixins/with-style.v2.schema.ts
var import_zod37 = require("zod");
var ObjectFitV6Schema = import_zod37.z.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = import_zod37.z.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = import_zod37.z.object({
  justifyContent: import_zod37.z.string().optional(),
  alignItems: import_zod37.z.string().optional(),
  flexDirection: import_zod37.z.string().optional(),
  lineHeight: import_zod37.z.number().optional(),
  fontFamilyId: import_zod37.z.string().optional(),
  fontScale: import_zod37.z.number().optional(),
  color: import_zod37.z.string().optional(),
  paddingTop: import_zod37.z.number().optional(),
  paddingRight: import_zod37.z.number().optional(),
  paddingBottom: import_zod37.z.number().optional(),
  paddingLeft: import_zod37.z.number().optional(),
  // New in v2:
  borderWidth: import_zod37.z.number().optional(),
  borderStyle: import_zod37.z.string().optional(),
  borderColor: import_zod37.z.string().optional(),
  borderRadius: import_zod37.z.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = import_zod37.z.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: import_zod38.z.number().optional()
}).nullable().optional();
var WithStyleV3Schema = import_zod38.z.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
var import_zod40 = require("zod");

// src/models/sheet.v3.schema.ts
var import_zod39 = require("zod");
var SheetV3Schema = import_zod39.z.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: import_zod39.z.string().optional(),
  widgetUids: import_zod39.z.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: import_zod40.z.record(import_zod40.z.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: import_zod41.z.record(import_zod41.z.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/tag.v2.schema.ts
var import_zod42 = require("zod");
var TagV2Schema = import_zod42.z.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: import_zod42.z.boolean().default(false)
});

// src/models/tag-category.v1.schema.ts
var import_zod43 = require("zod");
var TagCategoryV1Schema = import_zod43.z.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v7.schema.ts
var import_zod47 = require("zod");

// src/models/variable.v2.schema.ts
var import_zod44 = require("zod");
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: import_zod44.z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: import_zod44.z.boolean().optional(),
  defaultRowUids: import_zod44.z.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: import_zod44.z.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: import_zod44.z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: import_zod44.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod44.z.string().optional()
});
var VariableV2Schema = import_zod44.z.discriminatedUnion("type", [
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
var import_zod45 = require("zod");
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: import_zod45.z.literal("image")
});
var VariableV5Schema = import_zod45.z.discriminatedUnion("type", [
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
var import_zod46 = require("zod");
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: import_zod46.z.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: import_zod46.z.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: import_zod46.z.array(DataTableColumnUidSchema).optional(),
    multiAggregator: import_zod46.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: import_zod46.z.string().optional()
  }
);
var VariableV6Schema = import_zod46.z.discriminatedUnion("type", [
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

// src/models/variable.v7.schema.ts
var NumberVariableV2Schema = NumberVariableV1Schema.extend({
  min: import_zod47.z.number().optional(),
  max: import_zod47.z.number().optional(),
  step: import_zod47.z.number().optional()
});
var VariableV7Schema = import_zod47.z.discriminatedUnion("type", [
  NumberVariableV2Schema,
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

// src/models/widget.v8.schema.ts
var import_zod56 = require("zod");

// src/models/widget.v1.schema.ts
var import_zod51 = require("zod");

// src/mixins/with-area.v1.schema.ts
var import_zod48 = require("zod");
var WithAreaV1Schema = import_zod48.z.object({
  area: import_zod48.z.object({
    width: import_zod48.z.number(),
    height: import_zod48.z.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
var import_zod49 = require("zod");
var WithPositionV1Schema = import_zod49.z.object({
  position: import_zod49.z.object({
    left: import_zod49.z.number(),
    top: import_zod49.z.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
var import_zod50 = require("zod");
var StyleV1Schema = import_zod50.z.object({
  justifyContent: import_zod50.z.string().optional(),
  alignItems: import_zod50.z.string().optional(),
  flexDirection: import_zod50.z.string().optional(),
  lineHeight: import_zod50.z.number().optional(),
  fontFamilyId: import_zod50.z.string().optional(),
  fontScale: import_zod50.z.number().optional(),
  color: import_zod50.z.string().optional(),
  paddingTop: import_zod50.z.number().optional(),
  paddingRight: import_zod50.z.number().optional(),
  paddingBottom: import_zod50.z.number().optional(),
  paddingLeft: import_zod50.z.number().optional()
}).nullable().optional();
var WithStyleV1Schema = import_zod50.z.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = import_zod51.z.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("bigNumber"),
  min: import_zod51.z.number().optional(),
  max: import_zod51.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod51.z.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("toggle"),
  toggleIconType: import_zod51.z.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("bulletList"),
  listVisibility: import_zod51.z.string().optional(),
  listStyleBulletBreakline: import_zod51.z.boolean().optional(),
  listStyleBulletType: import_zod51.z.string().optional(),
  listStyleBulletGap: import_zod51.z.number().optional(),
  listStyleBulletIconGap: import_zod51.z.number().optional(),
  listOptionStyle: import_zod51.z.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("inlineList"),
  listStyleTextSeparator: import_zod51.z.string().optional(),
  listVisibility: import_zod51.z.string().optional(),
  listOptionStyle: import_zod51.z.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("pips"),
  icon: import_zod51.z.string().optional(),
  gapX: import_zod51.z.number().optional(),
  gapY: import_zod51.z.number().optional(),
  max: import_zod51.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = import_zod51.z.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod51.z.literal("bar"),
  min: import_zod51.z.number().optional(),
  max: import_zod51.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod51.z.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: import_zod51.z.string().optional(),
  bgColor: import_zod51.z.string().optional(),
  showValue: import_zod51.z.boolean().optional()
});
var WidgetV1Schema = import_zod51.z.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema
]);

// src/models/widget.v6.schema.ts
var import_zod54 = require("zod");

// src/models/widget.v5.schema.ts
var import_zod53 = require("zod");

// src/models/entity-image-format.v5.schema.ts
var import_zod52 = require("zod");
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = import_zod52.z.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = import_zod53.z.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: import_zod53.z.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = import_zod53.z.discriminatedUnion("type", [
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

// src/models/widget.v6.schema.ts
var WidgetEmptyV6Schema = WidgetEmptyV1Schema.merge(WithStyleV2Schema);
var WidgetBigNumberV6Schema = WidgetBigNumberV1Schema.merge(WithStyleV2Schema);
var WidgetPlainTextV6Schema = WidgetPlainTextV1Schema.merge(WithStyleV2Schema);
var WidgetToggleV6Schema = WidgetToggleV1Schema.merge(WithStyleV2Schema);
var WidgetBulletListV6Schema = WidgetBulletListV1Schema.merge(WithStyleV2Schema);
var WidgetInlineListV6Schema = WidgetInlineListV1Schema.merge(WithStyleV2Schema);
var WidgetPipsV6Schema = WidgetPipsV1Schema.merge(WithStyleV2Schema);
var WidgetBarV6Schema = WidgetBarV1Schema.merge(WithStyleV2Schema);
var WidgetEntityImageV6Schema = WidgetEntityImageV5Schema.merge(WithStyleV2Schema);
var WidgetV6Schema = import_zod54.z.discriminatedUnion("type", [
  WidgetEmptyV6Schema,
  WidgetBigNumberV6Schema,
  WidgetPlainTextV6Schema,
  WidgetToggleV6Schema,
  WidgetBulletListV6Schema,
  WidgetInlineListV6Schema,
  WidgetPipsV6Schema,
  WidgetBarV6Schema,
  WidgetEntityImageV6Schema
]);

// src/models/widget.v7.schema.ts
var import_zod55 = require("zod");
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: import_zod55.z.literal("wheel"),
  readingPosition: import_zod55.z.string().optional(),
  labelOrientation: import_zod55.z.string().optional(),
  radius: import_zod55.z.number().optional()
});
var WidgetV7Schema = import_zod55.z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV3Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV3Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV3Schema),
  WidgetToggleV6Schema.merge(WithStyleV3Schema),
  WidgetBulletListV6Schema.merge(WithStyleV3Schema),
  WidgetInlineListV6Schema.merge(WithStyleV3Schema),
  WidgetPipsV6Schema.merge(WithStyleV3Schema),
  WidgetBarV6Schema.merge(WithStyleV3Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV3Schema),
  WidgetWheelV7Schema
]);

// src/models/widget.v8.schema.ts
var WithWidgetActionsV8Schema = import_zod56.z.object({
  actionsVariablesUids: import_zod56.z.array(VariableUidSchema).optional()
});
var WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).merge(WithWidgetActionsV8Schema).extend({
  type: import_zod56.z.literal("actionRoll")
});
var WidgetV8Schema = import_zod56.z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema
  ),
  WidgetPlainTextV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema
  ),
  WidgetToggleV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema
  ),
  WidgetBulletListV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema
  ),
  WidgetInlineListV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema
  ),
  WidgetPipsV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema),
  WidgetBarV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema
  ),
  WidgetWheelV7Schema.merge(WithWidgetActionsV8Schema),
  WidgetActionRollV8Schema
]);

// src/schemas/bypp.v3.schema.ts
var import_zod66 = require("zod");

// src/models/asset.v1.schema.ts
var import_zod58 = require("zod");

// src/mixins/with-audio-urls.v1.schema.ts
var import_zod57 = require("zod");
var WithAudioUrlsV1Schema = import_zod57.z.object({
  audioUrl: import_zod57.z.string().optional(),
  audioDurationSeconds: import_zod57.z.number().optional(),
  audioExt: import_zod57.z.enum(["mp3", "ogg"]).optional()
});

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = import_zod58.z.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod58.z.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: import_zod58.z.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: import_zod58.z.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: import_zod58.z.literal("audio-external"),
  youtubeVideoId: import_zod58.z.string(),
  thumbnailUrl: import_zod58.z.string(),
  durationSeconds: import_zod58.z.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: import_zod58.z.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = import_zod58.z.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/dataset.v1.schema.ts
var import_zod59 = require("zod");
var DatasetTargetV1Schema = import_zod59.z.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = import_zod59.z.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: import_zod59.z.number().optional(),
  targets: import_zod59.z.array(DatasetTargetV1Schema),
  targetTagsGroup: import_zod59.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
var import_zod60 = require("zod");
var DialectFontV1Schema = import_zod60.z.object({
  fontFamily: import_zod60.z.string(),
  fontUrl: import_zod60.z.string()
});
var DialectV1Schema = import_zod60.z.object({
  uid: DialectUidSchema,
  name: import_zod60.z.string(),
  font: DialectFontV1Schema,
  order: import_zod60.z.number().optional(),
  spokenByEntitiesUids: import_zod60.z.array(EntityUidSchema)
});

// src/models/random-table.v1.schema.ts
var import_zod61 = require("zod");
var RandomTableRowV1Schema = import_zod61.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod61.z.number(),
  content: import_zod61.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = import_zod61.z.object({
  uid: RandomTableUidSchema,
  title: import_zod61.z.string(),
  rows: import_zod61.z.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
var import_zod62 = require("zod");
var SceneGameModeV1Schema = import_zod62.z.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = import_zod62.z.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: import_zod62.z.number().optional(),
  lightPositionY: import_zod62.z.number().optional(),
  lightPositionZ: import_zod62.z.number().optional(),
  lightIntensity: import_zod62.z.number().optional(),
  lightColor: import_zod62.z.string().optional(),
  useCustomLightPosition: import_zod62.z.boolean().optional(),
  indoorLight: import_zod62.z.boolean().optional(),
  weather: import_zod62.z.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
var import_zod63 = require("zod");
var SceneBackgroundBaseV1Schema = import_zod63.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: import_zod63.z.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: import_zod63.z.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: import_zod63.z.literal("customVideo")
});
var SceneBackgroundV1Schema = import_zod63.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/sheet.v2.schema.ts
var import_zod64 = require("zod");
var SheetV2Schema = import_zod64.z.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: import_zod64.z.string().nullable().optional(),
  widgetUids: import_zod64.z.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
var import_zod65 = require("zod");
var TagV1Schema = import_zod65.z.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: import_zod65.z.boolean()
});

// src/schemas/bypp.v3.schema.ts
var CcLicenseV3Schema = import_zod66.z.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = import_zod66.z.object({
  authorName: import_zod66.z.string().min(1),
  authorUrl: import_zod66.z.string().url().optional(),
  sourceUrl: import_zod66.z.string().url().optional()
});
var ParentAttributionV3Schema = import_zod66.z.object({
  artifactName: import_zod66.z.string().min(1),
  authorName: import_zod66.z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: import_zod66.z.string().url().optional()
});
var BeyondPaperV3Schema = import_zod66.z.object({
  // Format metadata
  version: import_zod66.z.literal(3),
  format: import_zod66.z.literal("bypp"),
  // Bundle metadata
  name: import_zod66.z.string(),
  exportedAt: import_zod66.z.string(),
  bundleVersion: import_zod66.z.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: import_zod66.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: import_zod66.z.array(import_zod66.z.string().url()).optional(),
  // Content
  dialects: import_zod66.z.array(DialectV1Schema),
  entities: import_zod66.z.array(EntityV1Schema),
  pages: import_zod66.z.array(PageV1Schema),
  chunks: import_zod66.z.array(ChunkV1Schema),
  datasets: import_zod66.z.array(DatasetV1Schema),
  variables: import_zod66.z.array(VariableV2Schema),
  widgets: import_zod66.z.array(WidgetV1Schema),
  sheets: import_zod66.z.array(SheetV2Schema),
  dataTables: import_zod66.z.array(DataTableV2Schema),
  randomTables: import_zod66.z.array(RandomTableV1Schema),
  tags: import_zod66.z.array(TagV1Schema),
  tagCategories: import_zod66.z.array(TagCategoryV1Schema),
  scenes: import_zod66.z.array(SceneV1Schema),
  sceneMaps: import_zod66.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod66.z.array(SceneBackgroundV1Schema),
  assets: import_zod66.z.array(AssetV1Schema)
});

// src/schemas/bypp.v4.schema.ts
var import_zod69 = require("zod");

// src/models/entity.v2.schema.ts
var import_zod67 = require("zod");
var EntityBaseV2Schema = import_zod67.z.object({
  uid: EntityUidSchema,
  displayName: import_zod67.z.string().optional(),
  description: import_zod67.z.string().optional(),
  tagsUid: import_zod67.z.array(TagUidSchema).default([]),
  sheetOverrides: import_zod67.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("group"),
  ranks: import_zod67.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod67.z.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod67.z.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod67.z.literal("event")
});
var EntityV2Schema = import_zod67.z.discriminatedUnion("type", [
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

// src/models/random-table.v2.schema.ts
var import_zod68 = require("zod");
var RandomTableRowV2Schema = import_zod68.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod68.z.number().default(1),
  content: import_zod68.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = import_zod68.z.object({
  uid: RandomTableUidSchema,
  title: import_zod68.z.string(),
  rows: import_zod68.z.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = import_zod69.z.object({
  bundleName: import_zod69.z.string().min(1),
  authorName: import_zod69.z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: import_zod69.z.string().url().optional()
});
var BeyondPaperV4Schema = import_zod69.z.object({
  // Format metadata
  version: import_zod69.z.literal(4),
  format: import_zod69.z.literal("bypp"),
  // Bundle metadata
  name: import_zod69.z.string(),
  exportedAt: import_zod69.z.string(),
  bundleVersion: import_zod69.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod69.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod69.z.array(import_zod69.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod69.z.array(DialectV2Schema).default([]),
  entities: import_zod69.z.array(EntityV2Schema).default([]),
  pages: import_zod69.z.array(PageV1Schema).default([]),
  chunks: import_zod69.z.array(ChunkV2Schema).default([]),
  datasets: import_zod69.z.array(DatasetV2Schema).default([]),
  variables: import_zod69.z.array(VariableV2Schema).default([]),
  widgets: import_zod69.z.array(WidgetV1Schema).default([]),
  sheets: import_zod69.z.array(SheetV3Schema).default([]),
  dataTables: import_zod69.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod69.z.array(RandomTableV2Schema).default([]),
  tags: import_zod69.z.array(TagV2Schema).default([]),
  tagCategories: import_zod69.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod69.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod69.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod69.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod69.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v12.schema.ts
var BeyondPaperV12Schema = import_zod70.z.object({
  // Format metadata
  version: import_zod70.z.literal(12),
  format: import_zod70.z.literal("bypp"),
  // Bundle metadata
  name: import_zod70.z.string(),
  exportedAt: import_zod70.z.string(),
  bundleVersion: import_zod70.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod70.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod70.z.array(import_zod70.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod70.z.array(DialectV2Schema).default([]),
  entities: import_zod70.z.array(EntityV3Schema).default([]),
  pages: import_zod70.z.array(PageV1Schema).default([]),
  chunks: import_zod70.z.array(ChunkV11Schema).default([]),
  datasets: import_zod70.z.array(DatasetV2Schema).default([]),
  variables: import_zod70.z.array(VariableV7Schema).default([]),
  widgets: import_zod70.z.array(WidgetV8Schema).default([]),
  sheets: import_zod70.z.array(SheetV6Schema).default([]),
  dataTables: import_zod70.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod70.z.array(RandomTableV7Schema).default([]),
  tags: import_zod70.z.array(TagV2Schema).default([]),
  tagCategories: import_zod70.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod70.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod70.z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: import_zod70.z.array(SceneBackgroundV3Schema).default([]),
  assets: import_zod70.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
var import_zod71 = require("zod");
var BeyondPaperV1Schema = import_zod71.z.object({
  // Format metadata
  version: import_zod71.z.literal(1),
  format: import_zod71.z.literal("bypp"),
  // Bundle metadata
  name: import_zod71.z.string(),
  exportedAt: import_zod71.z.string(),
  bundleVersion: import_zod71.z.string(),
  // Content
  dialects: import_zod71.z.array(DialectV1Schema),
  entities: import_zod71.z.array(EntityV1Schema),
  pages: import_zod71.z.array(PageV1Schema),
  chunks: import_zod71.z.array(ChunkV1Schema),
  datasets: import_zod71.z.array(DatasetV1Schema),
  variables: import_zod71.z.array(VariableV1Schema),
  widgets: import_zod71.z.array(WidgetV1Schema),
  randomTables: import_zod71.z.array(RandomTableV1Schema),
  tags: import_zod71.z.array(TagV1Schema),
  tagCategories: import_zod71.z.array(TagCategoryV1Schema),
  scenes: import_zod71.z.array(SceneV1Schema),
  sceneMaps: import_zod71.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod71.z.array(SceneBackgroundV1Schema),
  assets: import_zod71.z.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
var import_zod72 = require("zod");
var BeyondPaperV2Schema = import_zod72.z.object({
  // Format metadata
  version: import_zod72.z.literal(2),
  format: import_zod72.z.literal("bypp"),
  // Bundle metadata
  name: import_zod72.z.string(),
  exportedAt: import_zod72.z.string(),
  bundleVersion: import_zod72.z.string(),
  // Content
  dialects: import_zod72.z.array(DialectV1Schema),
  entities: import_zod72.z.array(EntityV1Schema),
  pages: import_zod72.z.array(PageV1Schema),
  chunks: import_zod72.z.array(ChunkV1Schema),
  datasets: import_zod72.z.array(DatasetV1Schema),
  variables: import_zod72.z.array(VariableV2Schema),
  widgets: import_zod72.z.array(WidgetV1Schema),
  sheets: import_zod72.z.array(SheetV2Schema),
  dataTables: import_zod72.z.array(DataTableV2Schema),
  randomTables: import_zod72.z.array(RandomTableV1Schema),
  tags: import_zod72.z.array(TagV1Schema),
  tagCategories: import_zod72.z.array(TagCategoryV1Schema),
  scenes: import_zod72.z.array(SceneV1Schema),
  sceneMaps: import_zod72.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod72.z.array(SceneBackgroundV1Schema),
  assets: import_zod72.z.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
var import_zod73 = require("zod");
var BeyondPaperV5Schema = import_zod73.z.object({
  // Format metadata
  version: import_zod73.z.literal(5),
  format: import_zod73.z.literal("bypp"),
  // Bundle metadata
  name: import_zod73.z.string(),
  exportedAt: import_zod73.z.string(),
  bundleVersion: import_zod73.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod73.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod73.z.array(import_zod73.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod73.z.array(DialectV2Schema).default([]),
  entities: import_zod73.z.array(EntityV2Schema).default([]),
  pages: import_zod73.z.array(PageV1Schema).default([]),
  chunks: import_zod73.z.array(ChunkV2Schema).default([]),
  datasets: import_zod73.z.array(DatasetV2Schema).default([]),
  variables: import_zod73.z.array(VariableV5Schema).default([]),
  widgets: import_zod73.z.array(WidgetV5Schema).default([]),
  sheets: import_zod73.z.array(SheetV3Schema).default([]),
  dataTables: import_zod73.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod73.z.array(RandomTableV2Schema).default([]),
  tags: import_zod73.z.array(TagV2Schema).default([]),
  tagCategories: import_zod73.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod73.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod73.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod73.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod73.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
var import_zod74 = require("zod");
var BeyondPaperV6Schema = import_zod74.z.object({
  // Format metadata
  version: import_zod74.z.literal(6),
  format: import_zod74.z.literal("bypp"),
  // Bundle metadata
  name: import_zod74.z.string(),
  exportedAt: import_zod74.z.string(),
  bundleVersion: import_zod74.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod74.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod74.z.array(import_zod74.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod74.z.array(DialectV2Schema).default([]),
  entities: import_zod74.z.array(EntityV2Schema).default([]),
  pages: import_zod74.z.array(PageV1Schema).default([]),
  chunks: import_zod74.z.array(ChunkV2Schema).default([]),
  datasets: import_zod74.z.array(DatasetV2Schema).default([]),
  variables: import_zod74.z.array(VariableV6Schema).default([]),
  widgets: import_zod74.z.array(WidgetV5Schema).default([]),
  sheets: import_zod74.z.array(SheetV3Schema).default([]),
  dataTables: import_zod74.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod74.z.array(RandomTableV2Schema).default([]),
  tags: import_zod74.z.array(TagV2Schema).default([]),
  tagCategories: import_zod74.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod74.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod74.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod74.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod74.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
var import_zod75 = require("zod");
var BeyondPaperV7Schema = import_zod75.z.object({
  // Format metadata
  version: import_zod75.z.literal(7),
  format: import_zod75.z.literal("bypp"),
  // Bundle metadata
  name: import_zod75.z.string(),
  exportedAt: import_zod75.z.string(),
  bundleVersion: import_zod75.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod75.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod75.z.array(import_zod75.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod75.z.array(DialectV2Schema).default([]),
  entities: import_zod75.z.array(EntityV2Schema).default([]),
  pages: import_zod75.z.array(PageV1Schema).default([]),
  chunks: import_zod75.z.array(ChunkV2Schema).default([]),
  datasets: import_zod75.z.array(DatasetV2Schema).default([]),
  variables: import_zod75.z.array(VariableV6Schema).default([]),
  widgets: import_zod75.z.array(WidgetV5Schema).default([]),
  sheets: import_zod75.z.array(SheetV3Schema).default([]),
  dataTables: import_zod75.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod75.z.array(RandomTableV7Schema).default([]),
  tags: import_zod75.z.array(TagV2Schema).default([]),
  tagCategories: import_zod75.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod75.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod75.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod75.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod75.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
var import_zod76 = require("zod");
var BeyondPaperV8Schema = import_zod76.z.object({
  // Format metadata
  version: import_zod76.z.literal(8),
  format: import_zod76.z.literal("bypp"),
  // Bundle metadata
  name: import_zod76.z.string(),
  exportedAt: import_zod76.z.string(),
  bundleVersion: import_zod76.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod76.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod76.z.array(import_zod76.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod76.z.array(DialectV2Schema).default([]),
  entities: import_zod76.z.array(EntityV2Schema).default([]),
  pages: import_zod76.z.array(PageV1Schema).default([]),
  chunks: import_zod76.z.array(ChunkV2Schema).default([]),
  datasets: import_zod76.z.array(DatasetV2Schema).default([]),
  variables: import_zod76.z.array(VariableV6Schema).default([]),
  widgets: import_zod76.z.array(WidgetV6Schema).default([]),
  sheets: import_zod76.z.array(SheetV4Schema).default([]),
  dataTables: import_zod76.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod76.z.array(RandomTableV7Schema).default([]),
  tags: import_zod76.z.array(TagV2Schema).default([]),
  tagCategories: import_zod76.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod76.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod76.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod76.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod76.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
var import_zod77 = require("zod");
var BeyondPaperV9Schema = import_zod77.z.object({
  // Format metadata
  version: import_zod77.z.literal(9),
  format: import_zod77.z.literal("bypp"),
  // Bundle metadata
  name: import_zod77.z.string(),
  exportedAt: import_zod77.z.string(),
  bundleVersion: import_zod77.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod77.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod77.z.array(import_zod77.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod77.z.array(DialectV2Schema).default([]),
  entities: import_zod77.z.array(EntityV2Schema).default([]),
  pages: import_zod77.z.array(PageV1Schema).default([]),
  chunks: import_zod77.z.array(ChunkV2Schema).default([]),
  datasets: import_zod77.z.array(DatasetV2Schema).default([]),
  variables: import_zod77.z.array(VariableV7Schema).default([]),
  widgets: import_zod77.z.array(WidgetV7Schema).default([]),
  sheets: import_zod77.z.array(SheetV5Schema).default([]),
  dataTables: import_zod77.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod77.z.array(RandomTableV7Schema).default([]),
  tags: import_zod77.z.array(TagV2Schema).default([]),
  tagCategories: import_zod77.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod77.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod77.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod77.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod77.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
var import_zod78 = require("zod");
var BeyondPaperV10Schema = import_zod78.z.object({
  // Format metadata
  version: import_zod78.z.literal(10),
  format: import_zod78.z.literal("bypp"),
  // Bundle metadata
  name: import_zod78.z.string(),
  exportedAt: import_zod78.z.string(),
  bundleVersion: import_zod78.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod78.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod78.z.array(import_zod78.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod78.z.array(DialectV2Schema).default([]),
  entities: import_zod78.z.array(EntityV3Schema).default([]),
  pages: import_zod78.z.array(PageV1Schema).default([]),
  chunks: import_zod78.z.array(ChunkV2Schema).default([]),
  datasets: import_zod78.z.array(DatasetV2Schema).default([]),
  variables: import_zod78.z.array(VariableV7Schema).default([]),
  widgets: import_zod78.z.array(WidgetV7Schema).default([]),
  sheets: import_zod78.z.array(SheetV6Schema).default([]),
  dataTables: import_zod78.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod78.z.array(RandomTableV7Schema).default([]),
  tags: import_zod78.z.array(TagV2Schema).default([]),
  tagCategories: import_zod78.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod78.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod78.z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: import_zod78.z.array(SceneBackgroundV3Schema).default([]),
  assets: import_zod78.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v11.schema.ts
var import_zod79 = require("zod");
var BeyondPaperV11Schema = import_zod79.z.object({
  // Format metadata
  version: import_zod79.z.literal(11),
  format: import_zod79.z.literal("bypp"),
  // Bundle metadata
  name: import_zod79.z.string(),
  exportedAt: import_zod79.z.string(),
  bundleVersion: import_zod79.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod79.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod79.z.array(import_zod79.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod79.z.array(DialectV2Schema).default([]),
  entities: import_zod79.z.array(EntityV3Schema).default([]),
  pages: import_zod79.z.array(PageV1Schema).default([]),
  chunks: import_zod79.z.array(ChunkV11Schema).default([]),
  datasets: import_zod79.z.array(DatasetV2Schema).default([]),
  variables: import_zod79.z.array(VariableV7Schema).default([]),
  widgets: import_zod79.z.array(WidgetV7Schema).default([]),
  sheets: import_zod79.z.array(SheetV6Schema).default([]),
  dataTables: import_zod79.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod79.z.array(RandomTableV7Schema).default([]),
  tags: import_zod79.z.array(TagV2Schema).default([]),
  tagCategories: import_zod79.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod79.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod79.z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: import_zod79.z.array(SceneBackgroundV3Schema).default([]),
  assets: import_zod79.z.array(AssetV2Schema).default([])
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

// src/migrations/v7-to-v8.ts
var v7ToV8 = (v7) => ({
  ...v7,
  version: 8
});

// src/migrations/v8-to-v7.ts
var v8ToV7 = (v8) => ({
  ...v8,
  version: 7,
  widgets: v8.widgets.map((widget) => {
    if (!widget.style) {
      return widget;
    }
    const {
      borderWidth: _bw,
      borderStyle: _bs,
      borderColor: _bc,
      borderRadius: _br,
      background: _bg,
      ...style
    } = widget.style;
    return { ...widget, style };
  }),
  sheets: v8.sheets.map(({ styles: _styles, ...sheet }) => sheet)
});

// src/migrations/v8-to-v9.ts
var v8ToV9 = (v8) => ({
  ...v8,
  version: 9
});

// src/migrations/v9-to-v8.ts
var v9ToV8 = (v9) => {
  const { widgets, sheets, variables, ...rest } = v9;
  const droppedWidgetUids = new Set(
    widgets.filter((w) => w.type === "wheel").map((w) => w.uid)
  );
  const v8Widgets = widgets.filter((w) => w.type !== "wheel").map((widget) => ({ ...widget, style: stripRotation(widget.style) }));
  const v8Sheets = sheets.map((sheet) => ({
    ...sheet,
    widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgetUids.has(uid)),
    styles: sheet.styles ? Object.fromEntries(
      Object.entries(sheet.styles).map(([target, style]) => [
        target,
        stripRotation(style)
      ])
    ) : sheet.styles
  }));
  const v8Variables = variables.map((variable) => {
    if (variable.type !== "number") {
      return variable;
    }
    const { min: _min, max: _max, step: _step, ...rest2 } = variable;
    return rest2;
  });
  return {
    ...rest,
    version: 8,
    widgets: v8Widgets,
    sheets: v8Sheets,
    variables: v8Variables
  };
};
var stripRotation = (style) => {
  if (!style) {
    return style;
  }
  const { rotation: _rotation, ...rest } = style;
  return rest;
};

// src/migrations/v9-to-v10.ts
var v9ToV10 = (v9) => ({
  ...v9,
  version: 10
});

// src/migrations/v10-to-v9.ts
var v10ToV9 = (v10) => ({
  ...v10,
  version: 9,
  sheets: v10.sheets.map(stripDimensions),
  entities: v10.entities.map(stripDimensions),
  sceneMaps: v10.sceneMaps.map(stripDimensions),
  sceneBackgrounds: v10.sceneBackgrounds.map(stripDimensions)
});
var stripDimensions = (item) => {
  if (!("dimensions" in item)) {
    return item;
  }
  const { dimensions: _dimensions, ...rest } = item;
  return rest;
};

// src/migrations/v10-to-v11.ts
var v10ToV11 = (v10) => {
  const textChunkUids = new Set(
    v10.chunks.filter((c) => c.type === "text").map((c) => c.uid)
  );
  const proxyToTarget = /* @__PURE__ */ new Map();
  const targetToEntity = /* @__PURE__ */ new Map();
  for (const chunk of v10.chunks) {
    if (chunk.type !== "textProxy") {
      continue;
    }
    if (!textChunkUids.has(chunk.chunkUid)) {
      continue;
    }
    proxyToTarget.set(chunk.uid, chunk.chunkUid);
    if (!targetToEntity.has(chunk.chunkUid)) {
      targetToEntity.set(chunk.chunkUid, chunk.entityUid);
    }
  }
  const chunks = v10.chunks.filter((chunk) => chunk.type !== "textProxy").map((chunk) => {
    const wrappedInEntityUid = targetToEntity.get(chunk.uid);
    if (!wrappedInEntityUid) {
      return chunk;
    }
    return { ...chunk, wrappedInEntityUid };
  });
  const survivingUids = new Set(chunks.map((c) => c.uid));
  const pages = v10.pages.map((page) => {
    if (page.type !== "standard") {
      return page;
    }
    const seen = /* @__PURE__ */ new Set();
    const chunksOrder = [];
    for (const uid of page.chunksOrder) {
      const resolved = proxyToTarget.get(uid) ?? uid;
      if (!survivingUids.has(resolved) || seen.has(resolved)) {
        continue;
      }
      seen.add(resolved);
      chunksOrder.push(resolved);
    }
    return { ...page, chunksOrder };
  });
  return {
    ...v10,
    version: 11,
    chunks,
    pages
  };
};

// src/migrations/v11-to-v10.ts
var v11ToV10 = (v11) => ({
  ...v11,
  version: 10,
  chunks: v11.chunks.map(stripWrappedInEntityUid)
});
var stripWrappedInEntityUid = (chunk) => {
  if (!("wrappedInEntityUid" in chunk)) {
    return chunk;
  }
  const { wrappedInEntityUid: _wrappedInEntityUid, ...rest } = chunk;
  return rest;
};

// src/migrations/v11-to-v12.ts
var v11ToV12 = (v11) => ({
  ...v11,
  version: 12
});

// src/migrations/v12-to-v11.ts
var v12ToV11 = (v12) => {
  const { widgets, sheets, ...rest } = v12;
  const droppedWidgetUids = new Set(
    widgets.filter((w) => w.type === "actionRoll").map((w) => w.uid)
  );
  const v11Widgets = widgets.filter((w) => w.type !== "actionRoll").map((widget) => {
    const { actionsVariablesUids: _actionsVariablesUids, ...widgetRest } = widget;
    return widgetRest;
  });
  const v11Sheets = sheets.map((sheet) => ({
    ...sheet,
    widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgetUids.has(uid))
  }));
  return {
    ...rest,
    version: 11,
    widgets: v11Widgets,
    sheets: v11Sheets
  };
};

// src/migrations/index.ts
var MIGRATIONS = {
  1: v1ToV2,
  2: v2ToV3,
  3: v3ToV4,
  4: v4ToV5,
  5: v5ToV6,
  6: v6ToV7,
  7: v7ToV8,
  8: v8ToV9,
  9: v9ToV10,
  10: v10ToV11,
  11: v11ToV12
};
var DOWN_MIGRATIONS = {
  2: v2ToV1,
  3: v3ToV2,
  4: v4ToV3,
  5: v5ToV4,
  6: v6ToV5,
  7: v7ToV6,
  8: v8ToV7,
  9: v9ToV8,
  10: v10ToV9,
  11: v11ToV10,
  12: v12ToV11
};
var SCHEMA_BY_VERSION = {
  1: BeyondPaperV1Schema,
  2: BeyondPaperV2Schema,
  3: BeyondPaperV3Schema,
  4: BeyondPaperV4Schema,
  5: BeyondPaperV5Schema,
  6: BeyondPaperV6Schema,
  7: BeyondPaperV7Schema,
  8: BeyondPaperV8Schema,
  9: BeyondPaperV9Schema,
  10: BeyondPaperV10Schema,
  11: BeyondPaperV11Schema,
  12: BeyondPaperV12Schema
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
  AbilityEntityV3Schema,
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
  BeyondPaperV10Schema,
  BeyondPaperV11Schema,
  BeyondPaperV12Schema,
  BeyondPaperV1Schema,
  BeyondPaperV2Schema,
  BeyondPaperV3Schema,
  BeyondPaperV4Schema,
  BeyondPaperV5Schema,
  BeyondPaperV6Schema,
  BeyondPaperV7Schema,
  BeyondPaperV8Schema,
  BeyondPaperV9Schema,
  BooleanVariableSchema,
  BooleanVariableV1Schema,
  CcLicenseSchema,
  CcLicenseV3Schema,
  CharacterEntitySchema,
  CharacterEntityV1Schema,
  CharacterEntityV2Schema,
  CharacterEntityV3Schema,
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
  ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema,
  ChunkTextSchema,
  ChunkTextV11Schema,
  ChunkTextV1Schema,
  ChunkTextV2Schema,
  ChunkUidSchema,
  ChunkV11Schema,
  ChunkV1Schema,
  ChunkV2Schema,
  CreatureEntitySchema,
  CreatureEntityV1Schema,
  CreatureEntityV2Schema,
  CreatureEntityV3Schema,
  CustomImageSceneBackgroundSchema,
  CustomImageSceneBackgroundV1Schema,
  CustomImageSceneBackgroundV2Schema,
  CustomImageSceneBackgroundV3Schema,
  CustomImageSceneMapSchema,
  CustomImageSceneMapV1Schema,
  CustomImageSceneMapV2Schema,
  CustomImageSceneMapV3Schema,
  CustomVideoSceneBackgroundSchema,
  CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV3Schema,
  CustomVideoSceneMapSchema,
  CustomVideoSceneMapV1Schema,
  CustomVideoSceneMapV2Schema,
  CustomVideoSceneMapV3Schema,
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
  EntityBaseV3Schema,
  EntityImageFormatSchema,
  EntityImageFormatV5Schema,
  EntityImageObjectFitSchema,
  EntityImageObjectFitV5Schema,
  EntitySchema,
  EntityTypeSchema,
  EntityTypeV1Schema,
  EntityTypeV2Schema,
  EntityTypeV3Schema,
  EntityUidSchema,
  EntityV1Schema,
  EntityV2Schema,
  EntityV3Schema,
  EventEntitySchema,
  EventEntityV1Schema,
  EventEntityV2Schema,
  EventEntityV3Schema,
  FormulaVariableSchema,
  FormulaVariableV1Schema,
  GridDataSchema,
  GridDataV1Schema,
  GroupEntitySchema,
  GroupEntityV1Schema,
  GroupEntityV2Schema,
  GroupEntityV3Schema,
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
  ItemEntityV3Schema,
  KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS,
  NoteEntitySchema,
  NoteEntityV1Schema,
  NoteEntityV2Schema,
  NoteEntityV3Schema,
  NumberVariableSchema,
  NumberVariableV1Schema,
  NumberVariableV2Schema,
  ObjectFitSchema,
  ObjectFitV6Schema,
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
  PlaceEntityV3Schema,
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
  SceneBackgroundV3Schema,
  SceneGameModeV1Schema,
  SceneMapBaseSchema,
  SceneMapBaseV1Schema,
  SceneMapBaseV2Schema,
  SceneMapSchema,
  SceneMapUidSchema,
  SceneMapV1Schema,
  SceneMapV2Schema,
  SceneMapV3Schema,
  SceneSchema,
  SceneUidSchema,
  SceneV1Schema,
  SceneV2Schema,
  SheetSchema,
  SheetUidSchema,
  SheetV2Schema,
  SheetV3Schema,
  SheetV5Schema,
  SheetV6Schema,
  StoryEntitySchema,
  StoryEntityV1Schema,
  StoryEntityV2Schema,
  StoryEntityV3Schema,
  StyleSchema,
  StyleV1Schema,
  StyleV2Schema,
  StyleV3Schema,
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
  VariableV7Schema,
  VariablesDataRecordSchema,
  VariablesDataRecordV1Schema,
  VideoAssetSchema,
  VideoAssetV1Schema,
  VideoAssetV2Schema,
  WidgetActionRollSchema,
  WidgetActionRollV8Schema,
  WidgetBackgroundSchema,
  WidgetBackgroundV6Schema,
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
  WidgetV7Schema,
  WidgetV8Schema,
  WidgetWheelSchema,
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
  WithImagesUrlsV3Schema,
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
  WithStyleV2Schema,
  WithStyleV3Schema,
  WithVideoUrlsSchema,
  WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema,
  WithWidgetActionsSchema,
  WithWidgetActionsV8Schema,
  migrate
});
//# sourceMappingURL=index.cjs.map