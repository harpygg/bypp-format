// src/version.ts
var BYPP_FORMAT_VERSION = 1;
var BYPP_FORMAT_EXT = "bypp";

// src/bypp.schema.ts
import { z as z28 } from "zod";

// src/models/asset.schema.ts
import { z as z6 } from "zod";

// src/mixins/with-audio-urls.schema.ts
import { z } from "zod";
var WithAudioUrlsSchema = z.object({
  audioUrl: z.string().optional(),
  audioDurationSeconds: z.number().optional(),
  audioExt: z.enum(["mp3", "ogg"]).optional()
});

// src/mixins/with-images-urls.schema.ts
import { z as z2 } from "zod";
var WithImagesUrlsSchema = z2.object({
  originalUrl: z2.string().optional(),
  thumbnailUrl: z2.string().optional(),
  squareUrl: z2.string().optional(),
  closeupUrl: z2.string().optional()
});

// src/mixins/with-name.schema.ts
import { z as z3 } from "zod";
var WithNameSchema = z3.object({
  name: z3.string()
});

// src/mixins/with-video-urls.schema.ts
import { z as z4 } from "zod";
var ImageDimensionsSchema = z4.object({
  width: z4.number(),
  height: z4.number()
});
var WithVideoUrlsSchema = z4.object({
  videoUrl: z4.string().optional(),
  videoDimensions: ImageDimensionsSchema.optional()
});

// src/uid.ts
import { z as z5 } from "zod";
var EntityUidSchema = z5.string();
var PageUidSchema = z5.string();
var ChunkUidSchema = z5.string();
var DatasetUidSchema = z5.string();
var VariableUidSchema = z5.string();
var WidgetUidSchema = z5.string();
var RandomTableUidSchema = z5.string();
var RandomTableRowUidSchema = z5.string();
var TagUidSchema = z5.string();
var TagCategoryUidSchema = z5.string();
var SceneUidSchema = z5.string();
var SceneMapUidSchema = z5.string();
var SceneBackgroundUidSchema = z5.string();
var AssetUidSchema = z5.string();
var DialectUidSchema = z5.string();
var SheetUidSchema = z5.string();
var EntityTokenUidSchema = z5.string();
var VariableChoiceUidSchema = z5.string();

// src/models/asset.schema.ts
var AssetBaseSchema = z6.object({ uid: AssetUidSchema }).merge(WithNameSchema);
var ImageAssetSchema = AssetBaseSchema.merge(WithImagesUrlsSchema).extend({
  type: z6.literal("image"),
  dimensions: ImageDimensionsSchema
});
var VideoAssetSchema = AssetBaseSchema.merge(WithVideoUrlsSchema).extend({
  type: z6.literal("video"),
  dimensions: ImageDimensionsSchema
});
var AudioAssetSchema = AssetBaseSchema.merge(WithAudioUrlsSchema).extend({
  type: z6.literal("audio")
});
var AudioExternalAssetSchema = AssetBaseSchema.extend({
  type: z6.literal("audio-external"),
  youtubeVideoId: z6.string(),
  thumbnailUrl: z6.string(),
  durationSeconds: z6.number()
});
var EntityAssetSchema = AssetBaseSchema.extend({
  type: z6.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetSchema = z6.discriminatedUnion("type", [
  ImageAssetSchema,
  VideoAssetSchema,
  AudioAssetSchema,
  AudioExternalAssetSchema,
  EntityAssetSchema
]);

// src/models/chunk.schema.ts
import { z as z7 } from "zod";
var ChunkBlockStyleSchema = z7.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule"
]);
var ChunkHeadingModeSchema = z7.enum(["inside", "outside"]);
var ChunkHeadingLevelSchema = z7.union([
  z7.literal(1),
  z7.literal(2),
  z7.literal(3),
  z7.literal(4)
]);
var ChunkBaseSchema = z7.object({
  uid: ChunkUidSchema,
  name: z7.string().nullable().optional(),
  blockStyle: ChunkBlockStyleSchema.nullable().optional(),
  headingLevel: ChunkHeadingLevelSchema.nullable().optional(),
  headingMode: ChunkHeadingModeSchema.nullable().optional()
});
var ChunkTextSchema = ChunkBaseSchema.extend({
  type: z7.literal("text"),
  content: z7.string(),
  mentionedEntitiesUids: z7.array(EntityUidSchema).optional()
});
var ChunkTextProxySchema = ChunkBaseSchema.extend({
  type: z7.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGallerySchema = ChunkBaseSchema.extend({
  type: z7.literal("gallery"),
  assetUids: z7.array(AssetUidSchema)
});
var ChunkRandomSchema = ChunkBaseSchema.extend({
  type: z7.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z7.boolean().optional()
});
var ChunkSchema = z7.discriminatedUnion("type", [
  ChunkTextSchema,
  ChunkTextProxySchema,
  ChunkGallerySchema,
  ChunkRandomSchema
]);

// src/models/dataset.schema.ts
import { z as z14 } from "zod";

// src/models/entity.schema.ts
import { z as z13 } from "zod";

// src/mixins/with-archive.schema.ts
import { z as z8 } from "zod";
var WithArchiveSchema = z8.object({
  isArchived: z8.boolean()
});

// src/mixins/with-assets.schema.ts
import { z as z9 } from "zod";
var WithAssetsSchema = z9.object({
  assetUids: z9.array(AssetUidSchema).optional()
});

// src/mixins/with-data.schema.ts
import { z as z10 } from "zod";
var VariableDataValueSchema = z10.union([
  z10.string(),
  z10.number(),
  z10.boolean(),
  z10.array(VariableChoiceUidSchema),
  z10.null()
]);
var VariablesDataRecordSchema = z10.record(
  VariableUidSchema,
  VariableDataValueSchema
);
var WithDataSchema = z10.object({
  data: VariablesDataRecordSchema.optional()
});

// src/mixins/with-pages.schema.ts
import { z as z11 } from "zod";
var WithPagesSchema = z11.object({
  pagesOrder: z11.array(PageUidSchema)
});

// src/mixins/with-scenes.schema.ts
import { z as z12 } from "zod";
var WithScenesSchema = z12.object({
  scenesUids: z12.array(SceneUidSchema)
});

// src/models/entity.schema.ts
var EntityTypeSchema = z13.enum([
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
var GroupRankCharacterSchema = z13.object({
  entityUid: EntityUidSchema,
  label: z13.string()
});
var GroupRankSchema = z13.object({
  label: z13.string(),
  characters: z13.array(GroupRankCharacterSchema)
});
var EntityBaseSchema = z13.object({
  uid: EntityUidSchema,
  displayName: z13.string().nullable(),
  description: z13.string().nullable(),
  tagsUid: z13.array(TagUidSchema),
  sheetOverrides: z13.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameSchema).merge(WithImagesUrlsSchema).merge(WithArchiveSchema).merge(WithPagesSchema).merge(WithDataSchema).merge(WithAssetsSchema);
var CharacterEntitySchema = EntityBaseSchema.extend({ type: z13.literal("character") });
var CreatureEntitySchema = EntityBaseSchema.extend({ type: z13.literal("creature") });
var GroupEntitySchema = EntityBaseSchema.extend({
  type: z13.literal("group"),
  ranks: z13.array(GroupRankSchema),
  charactersUids: z13.array(EntityUidSchema)
});
var PlaceEntitySchema = EntityBaseSchema.merge(WithScenesSchema).extend({ type: z13.literal("place") });
var ItemEntitySchema = EntityBaseSchema.extend({
  type: z13.literal("item")
});
var NoteEntitySchema = EntityBaseSchema.extend({
  type: z13.literal("note")
});
var AbilityEntitySchema = EntityBaseSchema.extend({
  type: z13.literal("ability")
});
var StoryEntitySchema = EntityBaseSchema.extend({
  type: z13.literal("story")
});
var EventEntitySchema = EntityBaseSchema.extend({
  type: z13.literal("event")
});
var EntitySchema = z13.discriminatedUnion("type", [
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
var DatasetTargetSchema = z14.union([EntityTypeSchema, TagUidSchema]);
var DatasetSchema = z14.object({ uid: DatasetUidSchema }).merge(WithNameSchema).extend({
  weight: z14.number().optional(),
  targets: z14.array(DatasetTargetSchema),
  targetTagsGroup: z14.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.schema.ts
import { z as z15 } from "zod";
var DialectFontSchema = z15.object({
  fontFamily: z15.string(),
  fontUrl: z15.string()
});
var DialectSchema = z15.object({
  uid: DialectUidSchema,
  name: z15.string(),
  font: DialectFontSchema,
  order: z15.number().optional(),
  spokenByEntitiesUids: z15.array(EntityUidSchema)
});

// src/models/page.schema.ts
import { z as z16 } from "zod";
var PageStandardSchema = z16.object({ uid: PageUidSchema }).merge(WithNameSchema).extend({
  type: z16.literal("standard"),
  chunksOrder: z16.array(ChunkUidSchema)
});
var PageEntitySchema = z16.object({
  uid: PageUidSchema,
  type: z16.literal("entity"),
  entityUid: EntityUidSchema
});
var PageSchema = z16.discriminatedUnion("type", [
  PageStandardSchema,
  PageEntitySchema
]);

// src/models/random-table.schema.ts
import { z as z17 } from "zod";
var RandomTableRowSchema = z17.object({
  uid: RandomTableRowUidSchema,
  range: z17.number(),
  content: z17.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableSchema = z17.object({
  uid: RandomTableUidSchema,
  title: z17.string(),
  rows: z17.array(RandomTableRowSchema)
});

// src/models/scene.schema.ts
import { z as z18 } from "zod";
var SceneGameModeSchema = z18.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneSchema = z18.object({ uid: SceneUidSchema }).merge(WithNameSchema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: z18.number().optional(),
  lightPositionY: z18.number().optional(),
  lightPositionZ: z18.number().optional(),
  lightIntensity: z18.number().optional(),
  lightColor: z18.string().optional(),
  useCustomLightPosition: z18.boolean().optional(),
  indoorLight: z18.boolean().optional(),
  weather: z18.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeSchema.optional()
});

// src/models/scene-background.schema.ts
import { z as z19 } from "zod";
var SceneBackgroundBaseSchema = z19.object({ uid: SceneBackgroundUidSchema }).merge(WithNameSchema);
var CustomImageSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: z19.literal("customImage")
});
var CustomVideoSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithVideoUrlsSchema
).extend({
  type: z19.literal("customVideo")
});
var SceneBackgroundSchema = z19.discriminatedUnion("type", [
  CustomImageSceneBackgroundSchema,
  CustomVideoSceneBackgroundSchema
]);

// src/models/scene-map.schema.ts
import { z as z20 } from "zod";
var GridDataSchema = z20.object({
  type: z20.enum(["square", "hexv", "hexh"]),
  size: z20.number(),
  sizeInUnit: z20.number(),
  measureUnit: z20.string(),
  lineWidth: z20.number(),
  color: z20.string().nullable().optional(),
  offset: z20.object({ x: z20.number(), z: z20.number() })
});
var SceneMapBaseSchema = z20.object({ uid: SceneMapUidSchema }).merge(WithNameSchema).extend({
  grid: GridDataSchema
});
var CustomImageSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: z20.literal("customImage")
});
var CustomVideoSceneMapSchema = SceneMapBaseSchema.merge(
  WithVideoUrlsSchema
).extend({
  type: z20.literal("customVideo")
});
var Dd2VttSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: z20.literal("dd2vtt")
});
var SceneMapSchema = z20.discriminatedUnion("type", [
  CustomImageSceneMapSchema,
  CustomVideoSceneMapSchema,
  Dd2VttSceneMapSchema
]);

// src/models/tag.schema.ts
import { z as z21 } from "zod";
var TagSchema = z21.object({ uid: TagUidSchema }).merge(WithNameSchema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: z21.boolean()
});

// src/models/tag-category.schema.ts
import { z as z22 } from "zod";
var TagCategorySchema = z22.object({ uid: TagCategoryUidSchema }).merge(WithNameSchema);

// src/models/variable.schema.ts
import { z as z23 } from "zod";
var ChoiceOptionSchema = z23.object({
  uid: VariableChoiceUidSchema,
  label: z23.string()
});
var VariableBaseSchema = z23.object({ uid: VariableUidSchema }).merge(WithNameSchema).extend({
  datasetsUids: z23.array(DatasetUidSchema),
  isMandatory: z23.boolean().optional(),
  isHiddenFromSheet: z23.boolean().optional(),
  label: z23.string().optional()
});
var NumberVariableSchema = VariableBaseSchema.extend({
  type: z23.literal("number"),
  defaultValue: z23.number().optional()
});
var TextVariableSchema = VariableBaseSchema.extend({
  type: z23.literal("text"),
  maxChars: z23.number().optional(),
  defaultValue: z23.string().optional()
});
var BooleanVariableSchema = VariableBaseSchema.extend({
  type: z23.literal("boolean"),
  defaultValue: z23.boolean().optional()
});
var ChoiceVariableSchema = VariableBaseSchema.extend({
  type: z23.literal("choice"),
  options: z23.array(ChoiceOptionSchema).optional(),
  isMultiple: z23.boolean().optional(),
  defaultValue: z23.string().optional()
});
var FormulaVariableSchema = VariableBaseSchema.extend({
  type: z23.literal("formula"),
  formula: z23.string().optional(),
  depsVariablesUid: z23.array(VariableUidSchema).optional()
});
var RollVariableSchema = VariableBaseSchema.extend({
  type: z23.literal("roll"),
  diceFormula: z23.string().optional(),
  depsVariablesUid: z23.array(VariableUidSchema).optional()
});
var VariableSchema = z23.discriminatedUnion("type", [
  NumberVariableSchema,
  TextVariableSchema,
  BooleanVariableSchema,
  ChoiceVariableSchema,
  FormulaVariableSchema,
  RollVariableSchema
]);

// src/models/widget.schema.ts
import { z as z27 } from "zod";

// src/mixins/with-area.schema.ts
import { z as z24 } from "zod";
var WithAreaSchema = z24.object({
  area: z24.object({
    width: z24.number(),
    height: z24.number()
  }).nullable().optional()
});

// src/mixins/with-position.schema.ts
import { z as z25 } from "zod";
var WithPositionSchema = z25.object({
  position: z25.object({
    left: z25.number(),
    top: z25.number()
  }).nullable().optional()
});

// src/mixins/with-style.schema.ts
import { z as z26 } from "zod";
var StyleSchema = z26.object({
  justifyContent: z26.string().optional(),
  alignItems: z26.string().optional(),
  flexDirection: z26.string().optional(),
  lineHeight: z26.number().optional(),
  fontFamilyId: z26.string().optional(),
  fontScale: z26.number().optional(),
  color: z26.string().optional(),
  paddingTop: z26.number().optional(),
  paddingRight: z26.number().optional(),
  paddingBottom: z26.number().optional(),
  paddingLeft: z26.number().optional()
}).nullable().optional();
var WithStyleSchema = z26.object({
  style: StyleSchema
});

// src/models/widget.schema.ts
var WidgetBaseSchema = z27.object({ uid: WidgetUidSchema }).merge(WithNameSchema).merge(WithAreaSchema).merge(WithPositionSchema).merge(WithStyleSchema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptySchema = WidgetBaseSchema.extend({
  type: z27.literal("empty")
});
var WidgetBigNumberSchema = WidgetBaseSchema.extend({
  type: z27.literal("bigNumber"),
  min: z27.number().optional(),
  max: z27.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z27.string().optional()
});
var WidgetPlainTextSchema = WidgetBaseSchema.extend({
  type: z27.literal("plainText")
});
var WidgetToggleSchema = WidgetBaseSchema.extend({
  type: z27.literal("toggle"),
  toggleIconType: z27.string().optional()
});
var WidgetBulletListSchema = WidgetBaseSchema.extend({
  type: z27.literal("bulletList"),
  listVisibility: z27.string().optional(),
  listStyleBulletBreakline: z27.boolean().optional(),
  listStyleBulletType: z27.string().optional(),
  listStyleBulletGap: z27.number().optional(),
  listStyleBulletIconGap: z27.number().optional(),
  listOptionStyle: z27.string().optional()
});
var WidgetInlineListSchema = WidgetBaseSchema.extend({
  type: z27.literal("inlineList"),
  listStyleTextSeparator: z27.string().optional(),
  listVisibility: z27.string().optional(),
  listOptionStyle: z27.string().optional()
});
var WidgetPipsSchema = WidgetBaseSchema.extend({
  type: z27.literal("pips"),
  gapX: z27.number().optional(),
  gapY: z27.number().optional(),
  max: z27.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var WidgetSchema = z27.discriminatedUnion("type", [
  WidgetEmptySchema,
  WidgetBigNumberSchema,
  WidgetPlainTextSchema,
  WidgetToggleSchema,
  WidgetBulletListSchema,
  WidgetInlineListSchema,
  WidgetPipsSchema
]);

// src/bypp.schema.ts
var BeyondPaperSchema = z28.object({
  // Format metadata
  version: z28.literal(BYPP_FORMAT_VERSION),
  format: z28.literal("bypp"),
  // Bundle metadata
  name: z28.string(),
  exportedAt: z28.string(),
  bundleVersion: z28.string(),
  // Content
  dialects: z28.array(DialectSchema),
  entities: z28.array(EntitySchema),
  pages: z28.array(PageSchema),
  chunks: z28.array(ChunkSchema),
  datasets: z28.array(DatasetSchema),
  variables: z28.array(VariableSchema),
  widgets: z28.array(WidgetSchema),
  randomTables: z28.array(RandomTableSchema),
  tags: z28.array(TagSchema),
  tagCategories: z28.array(TagCategorySchema),
  scenes: z28.array(SceneSchema),
  sceneMaps: z28.array(SceneMapSchema),
  sceneBackgrounds: z28.array(SceneBackgroundSchema),
  assets: z28.array(AssetSchema)
});
export {
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
};
//# sourceMappingURL=index.js.map