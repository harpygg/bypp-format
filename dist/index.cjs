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
  AbilityEntitySchema: () => AbilityEntitySchema,
  AssetBaseSchema: () => AssetBaseSchema,
  AssetSchema: () => AssetSchema,
  AssetUidSchema: () => AssetUidSchema,
  AudioAssetSchema: () => AudioAssetSchema,
  AudioExternalAssetSchema: () => AudioExternalAssetSchema,
  BYPP_FORMAT_EXT: () => BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION: () => BYPP_FORMAT_VERSION,
  BeyondPaperSchema: () => BeyondPaperSchema,
  BooleanVariableSchema: () => BooleanVariableSchema,
  CharacterEntitySchema: () => CharacterEntitySchema,
  ChoiceOptionSchema: () => ChoiceOptionSchema,
  ChoiceVariableSchema: () => ChoiceVariableSchema,
  ChunkBaseSchema: () => ChunkBaseSchema,
  ChunkBlockStyleSchema: () => ChunkBlockStyleSchema,
  ChunkGallerySchema: () => ChunkGallerySchema,
  ChunkHeadingLevelSchema: () => ChunkHeadingLevelSchema,
  ChunkHeadingModeSchema: () => ChunkHeadingModeSchema,
  ChunkRandomSchema: () => ChunkRandomSchema,
  ChunkSchema: () => ChunkSchema,
  ChunkTextProxySchema: () => ChunkTextProxySchema,
  ChunkTextSchema: () => ChunkTextSchema,
  ChunkUidSchema: () => ChunkUidSchema,
  CreatureEntitySchema: () => CreatureEntitySchema,
  CustomImageSceneBackgroundSchema: () => CustomImageSceneBackgroundSchema,
  CustomImageSceneMapSchema: () => CustomImageSceneMapSchema,
  CustomVideoSceneBackgroundSchema: () => CustomVideoSceneBackgroundSchema,
  CustomVideoSceneMapSchema: () => CustomVideoSceneMapSchema,
  DatasetSchema: () => DatasetSchema,
  DatasetTargetSchema: () => DatasetTargetSchema,
  DatasetUidSchema: () => DatasetUidSchema,
  Dd2VttSceneMapSchema: () => Dd2VttSceneMapSchema,
  DialectFontSchema: () => DialectFontSchema,
  DialectSchema: () => DialectSchema,
  DialectUidSchema: () => DialectUidSchema,
  EntityAssetSchema: () => EntityAssetSchema,
  EntityBaseSchema: () => EntityBaseSchema,
  EntitySchema: () => EntitySchema,
  EntityTypeSchema: () => EntityTypeSchema,
  EntityUidSchema: () => EntityUidSchema,
  EventEntitySchema: () => EventEntitySchema,
  FormulaVariableSchema: () => FormulaVariableSchema,
  GridDataSchema: () => GridDataSchema,
  GroupEntitySchema: () => GroupEntitySchema,
  GroupRankCharacterSchema: () => GroupRankCharacterSchema,
  GroupRankSchema: () => GroupRankSchema,
  ImageAssetSchema: () => ImageAssetSchema,
  ImageDimensionsSchema: () => ImageDimensionsSchema,
  ItemEntitySchema: () => ItemEntitySchema,
  NoteEntitySchema: () => NoteEntitySchema,
  NumberVariableSchema: () => NumberVariableSchema,
  PageEntitySchema: () => PageEntitySchema,
  PageSchema: () => PageSchema,
  PageStandardSchema: () => PageStandardSchema,
  PageUidSchema: () => PageUidSchema,
  PlaceEntitySchema: () => PlaceEntitySchema,
  RandomTableRowSchema: () => RandomTableRowSchema,
  RandomTableRowUidSchema: () => RandomTableRowUidSchema,
  RandomTableSchema: () => RandomTableSchema,
  RandomTableUidSchema: () => RandomTableUidSchema,
  RollVariableSchema: () => RollVariableSchema,
  SceneBackgroundBaseSchema: () => SceneBackgroundBaseSchema,
  SceneBackgroundSchema: () => SceneBackgroundSchema,
  SceneBackgroundUidSchema: () => SceneBackgroundUidSchema,
  SceneGameModeSchema: () => SceneGameModeSchema,
  SceneMapBaseSchema: () => SceneMapBaseSchema,
  SceneMapSchema: () => SceneMapSchema,
  SceneMapUidSchema: () => SceneMapUidSchema,
  SceneSchema: () => SceneSchema,
  SceneUidSchema: () => SceneUidSchema,
  SheetUidSchema: () => SheetUidSchema,
  StoryEntitySchema: () => StoryEntitySchema,
  StyleSchema: () => StyleSchema,
  TagCategorySchema: () => TagCategorySchema,
  TagCategoryUidSchema: () => TagCategoryUidSchema,
  TagSchema: () => TagSchema,
  TagUidSchema: () => TagUidSchema,
  TextVariableSchema: () => TextVariableSchema,
  VariableBaseSchema: () => VariableBaseSchema,
  VariableChoiceUidSchema: () => VariableChoiceUidSchema,
  VariableDataValueSchema: () => VariableDataValueSchema,
  VariableSchema: () => VariableSchema,
  VariableUidSchema: () => VariableUidSchema,
  VariablesDataRecordSchema: () => VariablesDataRecordSchema,
  VideoAssetSchema: () => VideoAssetSchema,
  WidgetBaseSchema: () => WidgetBaseSchema,
  WidgetBigNumberSchema: () => WidgetBigNumberSchema,
  WidgetBulletListSchema: () => WidgetBulletListSchema,
  WidgetEmptySchema: () => WidgetEmptySchema,
  WidgetInlineListSchema: () => WidgetInlineListSchema,
  WidgetPipsSchema: () => WidgetPipsSchema,
  WidgetPlainTextSchema: () => WidgetPlainTextSchema,
  WidgetSchema: () => WidgetSchema,
  WidgetToggleSchema: () => WidgetToggleSchema,
  WidgetUidSchema: () => WidgetUidSchema,
  WithArchiveSchema: () => WithArchiveSchema,
  WithAreaSchema: () => WithAreaSchema,
  WithAssetsSchema: () => WithAssetsSchema,
  WithAudioUrlsSchema: () => WithAudioUrlsSchema,
  WithDataSchema: () => WithDataSchema,
  WithImagesUrlsSchema: () => WithImagesUrlsSchema,
  WithNameSchema: () => WithNameSchema,
  WithPagesSchema: () => WithPagesSchema,
  WithPositionSchema: () => WithPositionSchema,
  WithScenesSchema: () => WithScenesSchema,
  WithStyleSchema: () => WithStyleSchema,
  WithVideoUrlsSchema: () => WithVideoUrlsSchema
});
module.exports = __toCommonJS(index_exports);

// src/version.ts
var BYPP_FORMAT_VERSION = 1;
var BYPP_FORMAT_EXT = "bypp";

// src/bypp.schema.ts
var import_zod28 = require("zod");

// src/models/asset.schema.ts
var import_zod6 = require("zod");

// src/mixins/with-audio-urls.schema.ts
var import_zod = require("zod");
var WithAudioUrlsSchema = import_zod.z.object({
  audioUrl: import_zod.z.string().optional(),
  audioDurationSeconds: import_zod.z.number().optional(),
  audioExt: import_zod.z.enum(["mp3", "ogg"]).optional()
});

// src/mixins/with-images-urls.schema.ts
var import_zod2 = require("zod");
var WithImagesUrlsSchema = import_zod2.z.object({
  originalUrl: import_zod2.z.string().optional(),
  thumbnailUrl: import_zod2.z.string().optional(),
  squareUrl: import_zod2.z.string().optional(),
  closeupUrl: import_zod2.z.string().optional()
});

// src/mixins/with-name.schema.ts
var import_zod3 = require("zod");
var WithNameSchema = import_zod3.z.object({
  name: import_zod3.z.string()
});

// src/mixins/with-video-urls.schema.ts
var import_zod4 = require("zod");
var ImageDimensionsSchema = import_zod4.z.object({
  width: import_zod4.z.number(),
  height: import_zod4.z.number()
});
var WithVideoUrlsSchema = import_zod4.z.object({
  videoUrl: import_zod4.z.string().optional(),
  videoDimensions: ImageDimensionsSchema.optional()
});

// src/uid.ts
var import_zod5 = require("zod");
var EntityUidSchema = import_zod5.z.string();
var PageUidSchema = import_zod5.z.string();
var ChunkUidSchema = import_zod5.z.string();
var DatasetUidSchema = import_zod5.z.string();
var VariableUidSchema = import_zod5.z.string();
var WidgetUidSchema = import_zod5.z.string();
var RandomTableUidSchema = import_zod5.z.string();
var RandomTableRowUidSchema = import_zod5.z.string();
var TagUidSchema = import_zod5.z.string();
var TagCategoryUidSchema = import_zod5.z.string();
var SceneUidSchema = import_zod5.z.string();
var SceneMapUidSchema = import_zod5.z.string();
var SceneBackgroundUidSchema = import_zod5.z.string();
var AssetUidSchema = import_zod5.z.string();
var DialectUidSchema = import_zod5.z.string();
var SheetUidSchema = import_zod5.z.string();
var EntityTokenUidSchema = import_zod5.z.string();
var VariableChoiceUidSchema = import_zod5.z.string();

// src/models/asset.schema.ts
var AssetBaseSchema = import_zod6.z.object({ uid: AssetUidSchema }).merge(WithNameSchema);
var ImageAssetSchema = AssetBaseSchema.merge(WithImagesUrlsSchema).extend({
  type: import_zod6.z.literal("image"),
  dimensions: ImageDimensionsSchema
});
var VideoAssetSchema = AssetBaseSchema.merge(WithVideoUrlsSchema).extend({
  type: import_zod6.z.literal("video"),
  dimensions: ImageDimensionsSchema
});
var AudioAssetSchema = AssetBaseSchema.merge(WithAudioUrlsSchema).extend({
  type: import_zod6.z.literal("audio")
});
var AudioExternalAssetSchema = AssetBaseSchema.extend({
  type: import_zod6.z.literal("audio-external"),
  youtubeVideoId: import_zod6.z.string(),
  thumbnailUrl: import_zod6.z.string(),
  durationSeconds: import_zod6.z.number()
});
var EntityAssetSchema = AssetBaseSchema.extend({
  type: import_zod6.z.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetSchema = import_zod6.z.discriminatedUnion("type", [
  ImageAssetSchema,
  VideoAssetSchema,
  AudioAssetSchema,
  AudioExternalAssetSchema,
  EntityAssetSchema
]);

// src/models/chunk.schema.ts
var import_zod7 = require("zod");
var ChunkBlockStyleSchema = import_zod7.z.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule"
]);
var ChunkHeadingModeSchema = import_zod7.z.enum(["inside", "outside"]);
var ChunkHeadingLevelSchema = import_zod7.z.union([
  import_zod7.z.literal(1),
  import_zod7.z.literal(2),
  import_zod7.z.literal(3),
  import_zod7.z.literal(4)
]);
var ChunkBaseSchema = import_zod7.z.object({
  uid: ChunkUidSchema,
  name: import_zod7.z.string().nullable().optional(),
  blockStyle: ChunkBlockStyleSchema.nullable().optional(),
  headingLevel: ChunkHeadingLevelSchema.nullable().optional(),
  headingMode: ChunkHeadingModeSchema.nullable().optional()
});
var ChunkTextSchema = ChunkBaseSchema.extend({
  type: import_zod7.z.literal("text"),
  content: import_zod7.z.string(),
  mentionedEntitiesUids: import_zod7.z.array(EntityUidSchema).optional()
});
var ChunkTextProxySchema = ChunkBaseSchema.extend({
  type: import_zod7.z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGallerySchema = ChunkBaseSchema.extend({
  type: import_zod7.z.literal("gallery"),
  assetUids: import_zod7.z.array(AssetUidSchema)
});
var ChunkRandomSchema = ChunkBaseSchema.extend({
  type: import_zod7.z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: import_zod7.z.boolean().optional()
});
var ChunkSchema = import_zod7.z.discriminatedUnion("type", [
  ChunkTextSchema,
  ChunkTextProxySchema,
  ChunkGallerySchema,
  ChunkRandomSchema
]);

// src/models/dataset.schema.ts
var import_zod14 = require("zod");

// src/models/entity.schema.ts
var import_zod13 = require("zod");

// src/mixins/with-archive.schema.ts
var import_zod8 = require("zod");
var WithArchiveSchema = import_zod8.z.object({
  isArchived: import_zod8.z.boolean()
});

// src/mixins/with-assets.schema.ts
var import_zod9 = require("zod");
var WithAssetsSchema = import_zod9.z.object({
  assetUids: import_zod9.z.array(AssetUidSchema).optional()
});

// src/mixins/with-data.schema.ts
var import_zod10 = require("zod");
var VariableDataValueSchema = import_zod10.z.union([
  import_zod10.z.string(),
  import_zod10.z.number(),
  import_zod10.z.boolean(),
  import_zod10.z.array(VariableChoiceUidSchema),
  import_zod10.z.null()
]);
var VariablesDataRecordSchema = import_zod10.z.record(
  VariableUidSchema,
  VariableDataValueSchema
);
var WithDataSchema = import_zod10.z.object({
  data: VariablesDataRecordSchema.optional()
});

// src/mixins/with-pages.schema.ts
var import_zod11 = require("zod");
var WithPagesSchema = import_zod11.z.object({
  pagesOrder: import_zod11.z.array(PageUidSchema)
});

// src/mixins/with-scenes.schema.ts
var import_zod12 = require("zod");
var WithScenesSchema = import_zod12.z.object({
  scenesUids: import_zod12.z.array(SceneUidSchema)
});

// src/models/entity.schema.ts
var EntityTypeSchema = import_zod13.z.enum([
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
var GroupRankCharacterSchema = import_zod13.z.object({
  entityUid: EntityUidSchema,
  label: import_zod13.z.string()
});
var GroupRankSchema = import_zod13.z.object({
  label: import_zod13.z.string(),
  characters: import_zod13.z.array(GroupRankCharacterSchema)
});
var EntityBaseSchema = import_zod13.z.object({
  uid: EntityUidSchema,
  displayName: import_zod13.z.string().nullable(),
  description: import_zod13.z.string().nullable(),
  tagsUid: import_zod13.z.array(TagUidSchema),
  sheetOverrides: import_zod13.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameSchema).merge(WithImagesUrlsSchema).merge(WithArchiveSchema).merge(WithPagesSchema).merge(WithDataSchema).merge(WithAssetsSchema);
var CharacterEntitySchema = EntityBaseSchema.extend({ type: import_zod13.z.literal("character") });
var CreatureEntitySchema = EntityBaseSchema.extend({ type: import_zod13.z.literal("creature") });
var GroupEntitySchema = EntityBaseSchema.extend({
  type: import_zod13.z.literal("group"),
  ranks: import_zod13.z.array(GroupRankSchema),
  charactersUids: import_zod13.z.array(EntityUidSchema)
});
var PlaceEntitySchema = EntityBaseSchema.merge(WithScenesSchema).extend({ type: import_zod13.z.literal("place") });
var ItemEntitySchema = EntityBaseSchema.extend({
  type: import_zod13.z.literal("item")
});
var NoteEntitySchema = EntityBaseSchema.extend({
  type: import_zod13.z.literal("note")
});
var AbilityEntitySchema = EntityBaseSchema.extend({
  type: import_zod13.z.literal("ability")
});
var StoryEntitySchema = EntityBaseSchema.extend({
  type: import_zod13.z.literal("story")
});
var EventEntitySchema = EntityBaseSchema.extend({
  type: import_zod13.z.literal("event")
});
var EntitySchema = import_zod13.z.discriminatedUnion("type", [
  CharacterEntitySchema,
  CreatureEntitySchema,
  GroupEntitySchema,
  PlaceEntitySchema,
  ItemEntitySchema,
  NoteEntitySchema,
  AbilityEntitySchema,
  StoryEntitySchema,
  EventEntitySchema
]);

// src/models/dataset.schema.ts
var DatasetTargetSchema = import_zod14.z.union([EntityTypeSchema, TagUidSchema]);
var DatasetSchema = import_zod14.z.object({ uid: DatasetUidSchema }).merge(WithNameSchema).extend({
  weight: import_zod14.z.number().optional(),
  targets: import_zod14.z.array(DatasetTargetSchema),
  targetTagsGroup: import_zod14.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.schema.ts
var import_zod15 = require("zod");
var DialectFontSchema = import_zod15.z.object({
  fontFamily: import_zod15.z.string(),
  fontUrl: import_zod15.z.string()
});
var DialectSchema = import_zod15.z.object({
  uid: DialectUidSchema,
  name: import_zod15.z.string(),
  font: DialectFontSchema,
  order: import_zod15.z.number().optional(),
  spokenByEntitiesUids: import_zod15.z.array(EntityUidSchema)
});

// src/models/page.schema.ts
var import_zod16 = require("zod");
var PageStandardSchema = import_zod16.z.object({ uid: PageUidSchema }).merge(WithNameSchema).extend({
  type: import_zod16.z.literal("standard"),
  chunksOrder: import_zod16.z.array(ChunkUidSchema)
});
var PageEntitySchema = import_zod16.z.object({
  uid: PageUidSchema,
  type: import_zod16.z.literal("entity"),
  entityUid: EntityUidSchema
});
var PageSchema = import_zod16.z.discriminatedUnion("type", [
  PageStandardSchema,
  PageEntitySchema
]);

// src/models/random-table.schema.ts
var import_zod17 = require("zod");
var RandomTableRowSchema = import_zod17.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod17.z.number(),
  content: import_zod17.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableSchema = import_zod17.z.object({
  uid: RandomTableUidSchema,
  title: import_zod17.z.string(),
  rows: import_zod17.z.array(RandomTableRowSchema)
});

// src/models/scene.schema.ts
var import_zod18 = require("zod");
var SceneGameModeSchema = import_zod18.z.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneSchema = import_zod18.z.object({ uid: SceneUidSchema }).merge(WithNameSchema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: import_zod18.z.number().optional(),
  lightPositionY: import_zod18.z.number().optional(),
  lightPositionZ: import_zod18.z.number().optional(),
  lightIntensity: import_zod18.z.number().optional(),
  lightColor: import_zod18.z.string().optional(),
  useCustomLightPosition: import_zod18.z.boolean().optional(),
  indoorLight: import_zod18.z.boolean().optional(),
  weather: import_zod18.z.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeSchema.optional()
});

// src/models/scene-background.schema.ts
var import_zod19 = require("zod");
var SceneBackgroundBaseSchema = import_zod19.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameSchema);
var CustomImageSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: import_zod19.z.literal("customImage")
});
var CustomVideoSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithVideoUrlsSchema
).extend({
  type: import_zod19.z.literal("customVideo")
});
var SceneBackgroundSchema = import_zod19.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundSchema,
  CustomVideoSceneBackgroundSchema
]);

// src/models/scene-map.schema.ts
var import_zod20 = require("zod");
var GridDataSchema = import_zod20.z.object({
  type: import_zod20.z.enum(["square", "hexv", "hexh"]),
  size: import_zod20.z.number(),
  sizeInUnit: import_zod20.z.number(),
  measureUnit: import_zod20.z.string(),
  lineWidth: import_zod20.z.number(),
  color: import_zod20.z.string().nullable().optional(),
  offset: import_zod20.z.object({ x: import_zod20.z.number(), z: import_zod20.z.number() })
});
var SceneMapBaseSchema = import_zod20.z.object({ uid: SceneMapUidSchema }).merge(WithNameSchema).extend({
  grid: GridDataSchema
});
var CustomImageSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: import_zod20.z.literal("customImage")
});
var CustomVideoSceneMapSchema = SceneMapBaseSchema.merge(
  WithVideoUrlsSchema
).extend({
  type: import_zod20.z.literal("customVideo")
});
var Dd2VttSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: import_zod20.z.literal("dd2vtt")
});
var SceneMapSchema = import_zod20.z.discriminatedUnion("type", [
  CustomImageSceneMapSchema,
  CustomVideoSceneMapSchema,
  Dd2VttSceneMapSchema
]);

// src/models/tag.schema.ts
var import_zod21 = require("zod");
var TagSchema = import_zod21.z.object({ uid: TagUidSchema }).merge(WithNameSchema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: import_zod21.z.boolean()
});

// src/models/tag-category.schema.ts
var import_zod22 = require("zod");
var TagCategorySchema = import_zod22.z.object({ uid: TagCategoryUidSchema }).merge(WithNameSchema);

// src/models/variable.schema.ts
var import_zod23 = require("zod");
var ChoiceOptionSchema = import_zod23.z.object({
  uid: VariableChoiceUidSchema,
  label: import_zod23.z.string()
});
var VariableBaseSchema = import_zod23.z.object({ uid: VariableUidSchema }).merge(WithNameSchema).extend({
  datasetsUids: import_zod23.z.array(DatasetUidSchema),
  isMandatory: import_zod23.z.boolean().optional(),
  isHiddenFromSheet: import_zod23.z.boolean().optional(),
  label: import_zod23.z.string().optional()
});
var NumberVariableSchema = VariableBaseSchema.extend({
  type: import_zod23.z.literal("number"),
  defaultValue: import_zod23.z.number().optional()
});
var TextVariableSchema = VariableBaseSchema.extend({
  type: import_zod23.z.literal("text"),
  maxChars: import_zod23.z.number().optional(),
  defaultValue: import_zod23.z.string().optional()
});
var BooleanVariableSchema = VariableBaseSchema.extend({
  type: import_zod23.z.literal("boolean"),
  defaultValue: import_zod23.z.boolean().optional()
});
var ChoiceVariableSchema = VariableBaseSchema.extend({
  type: import_zod23.z.literal("choice"),
  options: import_zod23.z.array(ChoiceOptionSchema).optional(),
  isMultiple: import_zod23.z.boolean().optional(),
  defaultValue: import_zod23.z.string().optional()
});
var FormulaVariableSchema = VariableBaseSchema.extend({
  type: import_zod23.z.literal("formula"),
  formula: import_zod23.z.string().optional(),
  depsVariablesUid: import_zod23.z.array(VariableUidSchema).optional()
});
var RollVariableSchema = VariableBaseSchema.extend({
  type: import_zod23.z.literal("roll"),
  diceFormula: import_zod23.z.string().optional(),
  depsVariablesUid: import_zod23.z.array(VariableUidSchema).optional()
});
var VariableSchema = import_zod23.z.discriminatedUnion("type", [
  NumberVariableSchema,
  TextVariableSchema,
  BooleanVariableSchema,
  ChoiceVariableSchema,
  FormulaVariableSchema,
  RollVariableSchema
]);

// src/models/widget.schema.ts
var import_zod27 = require("zod");

// src/mixins/with-area.schema.ts
var import_zod24 = require("zod");
var WithAreaSchema = import_zod24.z.object({
  area: import_zod24.z.object({
    width: import_zod24.z.number(),
    height: import_zod24.z.number()
  }).nullable().optional()
});

// src/mixins/with-position.schema.ts
var import_zod25 = require("zod");
var WithPositionSchema = import_zod25.z.object({
  position: import_zod25.z.object({
    left: import_zod25.z.number(),
    top: import_zod25.z.number()
  }).nullable().optional()
});

// src/mixins/with-style.schema.ts
var import_zod26 = require("zod");
var StyleSchema = import_zod26.z.object({
  justifyContent: import_zod26.z.string().optional(),
  alignItems: import_zod26.z.string().optional(),
  flexDirection: import_zod26.z.string().optional(),
  lineHeight: import_zod26.z.number().optional(),
  fontFamilyId: import_zod26.z.string().optional(),
  fontScale: import_zod26.z.number().optional(),
  color: import_zod26.z.string().optional(),
  paddingTop: import_zod26.z.number().optional(),
  paddingRight: import_zod26.z.number().optional(),
  paddingBottom: import_zod26.z.number().optional(),
  paddingLeft: import_zod26.z.number().optional()
}).nullable().optional();
var WithStyleSchema = import_zod26.z.object({
  style: StyleSchema
});

// src/models/widget.schema.ts
var WidgetBaseSchema = import_zod27.z.object({ uid: WidgetUidSchema }).merge(WithNameSchema).merge(WithAreaSchema).merge(WithPositionSchema).merge(WithStyleSchema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptySchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("empty")
});
var WidgetBigNumberSchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("bigNumber"),
  min: import_zod27.z.number().optional(),
  max: import_zod27.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod27.z.string().optional()
});
var WidgetPlainTextSchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("plainText")
});
var WidgetToggleSchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("toggle"),
  toggleIconType: import_zod27.z.string().optional()
});
var WidgetBulletListSchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("bulletList"),
  listVisibility: import_zod27.z.string().optional(),
  listStyleBulletBreakline: import_zod27.z.boolean().optional(),
  listStyleBulletType: import_zod27.z.string().optional(),
  listStyleBulletGap: import_zod27.z.number().optional(),
  listStyleBulletIconGap: import_zod27.z.number().optional(),
  listOptionStyle: import_zod27.z.string().optional()
});
var WidgetInlineListSchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("inlineList"),
  listStyleTextSeparator: import_zod27.z.string().optional(),
  listVisibility: import_zod27.z.string().optional(),
  listOptionStyle: import_zod27.z.string().optional()
});
var WidgetPipsSchema = WidgetBaseSchema.extend({
  type: import_zod27.z.literal("pips"),
  gapX: import_zod27.z.number().optional(),
  gapY: import_zod27.z.number().optional(),
  max: import_zod27.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var WidgetSchema = import_zod27.z.discriminatedUnion("type", [
  WidgetEmptySchema,
  WidgetBigNumberSchema,
  WidgetPlainTextSchema,
  WidgetToggleSchema,
  WidgetBulletListSchema,
  WidgetInlineListSchema,
  WidgetPipsSchema
]);

// src/bypp.schema.ts
var BeyondPaperSchema = import_zod28.z.object({
  // Format metadata
  version: import_zod28.z.literal(BYPP_FORMAT_VERSION),
  format: import_zod28.z.literal("bypp"),
  // Bundle metadata
  name: import_zod28.z.string(),
  exportedAt: import_zod28.z.string(),
  bundleVersion: import_zod28.z.string(),
  // Content
  dialects: import_zod28.z.array(DialectSchema),
  entities: import_zod28.z.array(EntitySchema),
  pages: import_zod28.z.array(PageSchema),
  chunks: import_zod28.z.array(ChunkSchema),
  datasets: import_zod28.z.array(DatasetSchema),
  variables: import_zod28.z.array(VariableSchema),
  widgets: import_zod28.z.array(WidgetSchema),
  randomTables: import_zod28.z.array(RandomTableSchema),
  tags: import_zod28.z.array(TagSchema),
  tagCategories: import_zod28.z.array(TagCategorySchema),
  scenes: import_zod28.z.array(SceneSchema),
  sceneMaps: import_zod28.z.array(SceneMapSchema),
  sceneBackgrounds: import_zod28.z.array(SceneBackgroundSchema),
  assets: import_zod28.z.array(AssetSchema)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AbilityEntitySchema,
  AssetBaseSchema,
  AssetSchema,
  AssetUidSchema,
  AudioAssetSchema,
  AudioExternalAssetSchema,
  BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION,
  BeyondPaperSchema,
  BooleanVariableSchema,
  CharacterEntitySchema,
  ChoiceOptionSchema,
  ChoiceVariableSchema,
  ChunkBaseSchema,
  ChunkBlockStyleSchema,
  ChunkGallerySchema,
  ChunkHeadingLevelSchema,
  ChunkHeadingModeSchema,
  ChunkRandomSchema,
  ChunkSchema,
  ChunkTextProxySchema,
  ChunkTextSchema,
  ChunkUidSchema,
  CreatureEntitySchema,
  CustomImageSceneBackgroundSchema,
  CustomImageSceneMapSchema,
  CustomVideoSceneBackgroundSchema,
  CustomVideoSceneMapSchema,
  DatasetSchema,
  DatasetTargetSchema,
  DatasetUidSchema,
  Dd2VttSceneMapSchema,
  DialectFontSchema,
  DialectSchema,
  DialectUidSchema,
  EntityAssetSchema,
  EntityBaseSchema,
  EntitySchema,
  EntityTypeSchema,
  EntityUidSchema,
  EventEntitySchema,
  FormulaVariableSchema,
  GridDataSchema,
  GroupEntitySchema,
  GroupRankCharacterSchema,
  GroupRankSchema,
  ImageAssetSchema,
  ImageDimensionsSchema,
  ItemEntitySchema,
  NoteEntitySchema,
  NumberVariableSchema,
  PageEntitySchema,
  PageSchema,
  PageStandardSchema,
  PageUidSchema,
  PlaceEntitySchema,
  RandomTableRowSchema,
  RandomTableRowUidSchema,
  RandomTableSchema,
  RandomTableUidSchema,
  RollVariableSchema,
  SceneBackgroundBaseSchema,
  SceneBackgroundSchema,
  SceneBackgroundUidSchema,
  SceneGameModeSchema,
  SceneMapBaseSchema,
  SceneMapSchema,
  SceneMapUidSchema,
  SceneSchema,
  SceneUidSchema,
  SheetUidSchema,
  StoryEntitySchema,
  StyleSchema,
  TagCategorySchema,
  TagCategoryUidSchema,
  TagSchema,
  TagUidSchema,
  TextVariableSchema,
  VariableBaseSchema,
  VariableChoiceUidSchema,
  VariableDataValueSchema,
  VariableSchema,
  VariableUidSchema,
  VariablesDataRecordSchema,
  VideoAssetSchema,
  WidgetBaseSchema,
  WidgetBigNumberSchema,
  WidgetBulletListSchema,
  WidgetEmptySchema,
  WidgetInlineListSchema,
  WidgetPipsSchema,
  WidgetPlainTextSchema,
  WidgetSchema,
  WidgetToggleSchema,
  WidgetUidSchema,
  WithArchiveSchema,
  WithAreaSchema,
  WithAssetsSchema,
  WithAudioUrlsSchema,
  WithDataSchema,
  WithImagesUrlsSchema,
  WithNameSchema,
  WithPagesSchema,
  WithPositionSchema,
  WithScenesSchema,
  WithStyleSchema,
  WithVideoUrlsSchema
});
//# sourceMappingURL=index.cjs.map