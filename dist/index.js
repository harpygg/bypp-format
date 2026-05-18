// src/version.ts
var BYPP_FORMAT_VERSION = 2;
var BYPP_FORMAT_EXT = "bypp";

// src/bypp.schema.ts
import { z as z31 } from "zod";

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
var DataTableUidSchema = z5.string();
var DataTableRowUidSchema = z5.string();
var DataTableColumnUidSchema = z5.string();

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

// src/models/data-table.schema.ts
import { z as z17 } from "zod";

// src/mixins/translatable-text.schema.ts
import { z as z15 } from "zod";
var TranslatableTextSchema = z15.record(z15.string(), z15.string());

// src/models/variable.schema.ts
import { z as z16 } from "zod";
var ChoiceOptionSchema = z16.object({
  uid: VariableChoiceUidSchema,
  label: z16.string(),
  icon: z16.string().optional(),
  value: z16.number().optional()
});
var VariableBaseSchema = z16.object({ uid: VariableUidSchema }).merge(WithNameSchema).extend({
  datasetsUids: z16.array(DatasetUidSchema),
  isMandatory: z16.boolean().optional(),
  isHiddenFromSheet: z16.boolean().optional(),
  label: z16.string().optional()
});
var NumberVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("number"),
  defaultValue: z16.number().optional()
});
var TextVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("text"),
  maxChars: z16.number().optional(),
  defaultValue: z16.string().optional()
});
var BooleanVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("boolean"),
  defaultValue: z16.boolean().optional()
});
var ChoiceVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("choice"),
  options: z16.array(ChoiceOptionSchema).optional(),
  isMultiple: z16.boolean().optional(),
  hasNumericValue: z16.boolean().optional(),
  hasIcon: z16.boolean().optional(),
  defaultOptionUids: z16.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("formula"),
  formula: z16.string().optional(),
  depsVariablesUid: z16.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigSchema = z16.object({
  icon: z16.string().nullable(),
  size: z16.number().optional(),
  rotate: z16.number().optional(),
  revert: z16.boolean().optional()
});
var IconCompoSchema = z16.record(z16.string(), IconCompoSlotConfigSchema);
var ActionVisualSchema = z16.discriminatedUnion("type", [
  z16.object({ type: z16.literal("awesome"), icon: z16.string() }),
  z16.object({ type: z16.literal("compo"), icons: IconCompoSchema })
]);
var RollVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("roll"),
  diceFormula: z16.string().optional(),
  depsVariablesUid: z16.array(VariableUidSchema).optional(),
  visual: ActionVisualSchema.optional(),
  hue: z16.number().nullable().optional()
});
var DataTableRefVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z16.boolean().optional(),
  defaultRowUids: z16.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableSchema = VariableBaseSchema.extend({
  type: z16.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z16.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z16.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z16.string().optional()
});
var VariableSchema = z16.discriminatedUnion("type", [
  NumberVariableSchema,
  TextVariableSchema,
  BooleanVariableSchema,
  ChoiceVariableSchema,
  FormulaVariableSchema,
  RollVariableSchema,
  DataTableRefVariableSchema,
  DataTableLookupVariableSchema
]);

// src/models/data-table.schema.ts
var DataTableColumnBaseSchema = z17.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextSchema.optional(),
  icon: z17.string().optional(),
  isMandatory: z17.boolean().optional()
});
var DataTableColumnNumberSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("number"),
  defaultNumber: z17.number().optional()
});
var DataTableColumnTextSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("text"),
  maxChars: z17.number().optional(),
  defaultValue: z17.string().optional()
});
var DataTableColumnBooleanSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("boolean"),
  defaultBoolean: z17.boolean().optional()
});
var DataTableColumnChoiceSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("choice"),
  options: z17.array(ChoiceOptionSchema).optional(),
  isMultiple: z17.boolean().optional(),
  hasNumericValue: z17.boolean().optional(),
  hasIcon: z17.boolean().optional()
});
var DataTableColumnIconSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("icon"),
  defaultIcon: z17.string().optional()
});
var DataTableColumnTranslatableTextSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("translatableText"),
  defaultValue: TranslatableTextSchema.optional()
});
var DataTableColumnDataTableRefSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z17.boolean().optional(),
  defaultRowUids: z17.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupSchema = DataTableColumnBaseSchema.extend({
  type: z17.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z17.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z17.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z17.string().optional()
});
var DataTableColumnSchema = z17.discriminatedUnion("type", [
  DataTableColumnNumberSchema,
  DataTableColumnTextSchema,
  DataTableColumnBooleanSchema,
  DataTableColumnChoiceSchema,
  DataTableColumnIconSchema,
  DataTableColumnTranslatableTextSchema,
  DataTableColumnDataTableRefSchema,
  DataTableColumnDataTableLookupSchema
]);
var DataTableCellValueSchema = z17.union([
  z17.string(),
  z17.number(),
  z17.boolean(),
  z17.array(z17.string()),
  TranslatableTextSchema,
  z17.null()
]);
var DataTableRowSchema = z17.object({
  uid: DataTableRowUidSchema,
  data: z17.record(DataTableColumnUidSchema, DataTableCellValueSchema).optional()
});
var DataTableSchema = z17.object({
  uid: DataTableUidSchema,
  name: TranslatableTextSchema,
  icon: z17.string().nullable().optional(),
  weight: z17.number().optional(),
  adminOnly: z17.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z17.array(DataTableColumnSchema),
  rows: z17.array(DataTableRowSchema)
});

// src/models/dialect.schema.ts
import { z as z18 } from "zod";
var DialectFontSchema = z18.object({
  fontFamily: z18.string(),
  fontUrl: z18.string()
});
var DialectSchema = z18.object({
  uid: DialectUidSchema,
  name: z18.string(),
  font: DialectFontSchema,
  order: z18.number().optional(),
  spokenByEntitiesUids: z18.array(EntityUidSchema)
});

// src/models/page.schema.ts
import { z as z19 } from "zod";
var PageStandardSchema = z19.object({ uid: PageUidSchema }).merge(WithNameSchema).extend({
  type: z19.literal("standard"),
  chunksOrder: z19.array(ChunkUidSchema)
});
var PageEntitySchema = z19.object({
  uid: PageUidSchema,
  type: z19.literal("entity"),
  entityUid: EntityUidSchema
});
var PageSchema = z19.discriminatedUnion("type", [
  PageStandardSchema,
  PageEntitySchema
]);

// src/models/random-table.schema.ts
import { z as z20 } from "zod";
var RandomTableRowSchema = z20.object({
  uid: RandomTableRowUidSchema,
  range: z20.number(),
  content: z20.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableSchema = z20.object({
  uid: RandomTableUidSchema,
  title: z20.string(),
  rows: z20.array(RandomTableRowSchema)
});

// src/models/scene.schema.ts
import { z as z21 } from "zod";
var SceneGameModeSchema = z21.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneSchema = z21.object({ uid: SceneUidSchema }).merge(WithNameSchema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: z21.number().optional(),
  lightPositionY: z21.number().optional(),
  lightPositionZ: z21.number().optional(),
  lightIntensity: z21.number().optional(),
  lightColor: z21.string().optional(),
  useCustomLightPosition: z21.boolean().optional(),
  indoorLight: z21.boolean().optional(),
  weather: z21.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeSchema.optional()
});

// src/models/scene-background.schema.ts
import { z as z22 } from "zod";
var SceneBackgroundBaseSchema = z22.object({ uid: SceneBackgroundUidSchema }).merge(WithNameSchema).extend({
  opacity: z22.number().optional()
});
var CustomImageSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: z22.literal("customImage")
});
var CustomVideoSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithVideoUrlsSchema
).extend({
  type: z22.literal("customVideo")
});
var SceneBackgroundSchema = z22.discriminatedUnion("type", [
  CustomImageSceneBackgroundSchema,
  CustomVideoSceneBackgroundSchema
]);

// src/models/scene-map.schema.ts
import { z as z23 } from "zod";
var GridDataSchema = z23.object({
  type: z23.enum(["square", "hexv", "hexh"]),
  size: z23.number(),
  sizeInUnit: z23.number(),
  measureUnit: z23.string(),
  lineWidth: z23.number(),
  color: z23.string().nullable().optional(),
  offset: z23.object({ x: z23.number(), z: z23.number() })
});
var SceneMapBaseSchema = z23.object({ uid: SceneMapUidSchema }).merge(WithNameSchema).extend({
  grid: GridDataSchema
});
var CustomImageSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: z23.literal("customImage")
});
var CustomVideoSceneMapSchema = SceneMapBaseSchema.merge(
  WithVideoUrlsSchema
).extend({
  type: z23.literal("customVideo")
});
var Dd2VttSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema
).extend({
  type: z23.literal("dd2vtt")
});
var SceneMapSchema = z23.discriminatedUnion("type", [
  CustomImageSceneMapSchema,
  CustomVideoSceneMapSchema,
  Dd2VttSceneMapSchema
]);

// src/models/sheet.schema.ts
import { z as z24 } from "zod";
var SheetSchema = z24.object({ uid: SheetUidSchema }).merge(WithImagesUrlsSchema).extend({
  name: z24.string().nullable().optional(),
  widgetUids: z24.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.schema.ts
import { z as z25 } from "zod";
var TagSchema = z25.object({ uid: TagUidSchema }).merge(WithNameSchema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: z25.boolean()
});

// src/models/tag-category.schema.ts
import { z as z26 } from "zod";
var TagCategorySchema = z26.object({ uid: TagCategoryUidSchema }).merge(WithNameSchema);

// src/models/widget.schema.ts
import { z as z30 } from "zod";

// src/mixins/with-area.schema.ts
import { z as z27 } from "zod";
var WithAreaSchema = z27.object({
  area: z27.object({
    width: z27.number(),
    height: z27.number()
  }).nullable().optional()
});

// src/mixins/with-position.schema.ts
import { z as z28 } from "zod";
var WithPositionSchema = z28.object({
  position: z28.object({
    left: z28.number(),
    top: z28.number()
  }).nullable().optional()
});

// src/mixins/with-style.schema.ts
import { z as z29 } from "zod";
var StyleSchema = z29.object({
  justifyContent: z29.string().optional(),
  alignItems: z29.string().optional(),
  flexDirection: z29.string().optional(),
  lineHeight: z29.number().optional(),
  fontFamilyId: z29.string().optional(),
  fontScale: z29.number().optional(),
  color: z29.string().optional(),
  paddingTop: z29.number().optional(),
  paddingRight: z29.number().optional(),
  paddingBottom: z29.number().optional(),
  paddingLeft: z29.number().optional()
}).nullable().optional();
var WithStyleSchema = z29.object({
  style: StyleSchema
});

// src/models/widget.schema.ts
var WidgetBaseSchema = z30.object({ uid: WidgetUidSchema }).merge(WithNameSchema).merge(WithAreaSchema).merge(WithPositionSchema).merge(WithStyleSchema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptySchema = WidgetBaseSchema.extend({
  type: z30.literal("empty")
});
var WidgetBigNumberSchema = WidgetBaseSchema.extend({
  type: z30.literal("bigNumber"),
  min: z30.number().optional(),
  max: z30.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z30.string().optional()
});
var WidgetPlainTextSchema = WidgetBaseSchema.extend({
  type: z30.literal("plainText")
});
var WidgetToggleSchema = WidgetBaseSchema.extend({
  type: z30.literal("toggle"),
  toggleIconType: z30.string().optional()
});
var WidgetBulletListSchema = WidgetBaseSchema.extend({
  type: z30.literal("bulletList"),
  listVisibility: z30.string().optional(),
  listStyleBulletBreakline: z30.boolean().optional(),
  listStyleBulletType: z30.string().optional(),
  listStyleBulletGap: z30.number().optional(),
  listStyleBulletIconGap: z30.number().optional(),
  listOptionStyle: z30.string().optional()
});
var WidgetInlineListSchema = WidgetBaseSchema.extend({
  type: z30.literal("inlineList"),
  listStyleTextSeparator: z30.string().optional(),
  listVisibility: z30.string().optional(),
  listOptionStyle: z30.string().optional()
});
var WidgetPipsSchema = WidgetBaseSchema.extend({
  type: z30.literal("pips"),
  icon: z30.string().optional(),
  gapX: z30.number().optional(),
  gapY: z30.number().optional(),
  max: z30.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationSchema = z30.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarSchema = WidgetBaseSchema.extend({
  type: z30.literal("bar"),
  min: z30.number().optional(),
  max: z30.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z30.string().optional(),
  orientation: BarOrientationSchema.optional(),
  barColor: z30.string().optional(),
  bgColor: z30.string().optional(),
  showValue: z30.boolean().optional()
});
var WidgetSchema = z30.discriminatedUnion("type", [
  WidgetEmptySchema,
  WidgetBigNumberSchema,
  WidgetPlainTextSchema,
  WidgetToggleSchema,
  WidgetBulletListSchema,
  WidgetInlineListSchema,
  WidgetPipsSchema,
  WidgetBarSchema
]);

// src/bypp.schema.ts
var BeyondPaperSchema = z31.object({
  // Format metadata
  version: z31.literal(BYPP_FORMAT_VERSION),
  format: z31.literal("bypp"),
  // Bundle metadata
  name: z31.string(),
  exportedAt: z31.string(),
  bundleVersion: z31.string(),
  // Content
  dialects: z31.array(DialectSchema),
  entities: z31.array(EntitySchema),
  pages: z31.array(PageSchema),
  chunks: z31.array(ChunkSchema),
  datasets: z31.array(DatasetSchema),
  variables: z31.array(VariableSchema),
  widgets: z31.array(WidgetSchema),
  sheets: z31.array(SheetSchema),
  dataTables: z31.array(DataTableSchema),
  randomTables: z31.array(RandomTableSchema),
  tags: z31.array(TagSchema),
  tagCategories: z31.array(TagCategorySchema),
  scenes: z31.array(SceneSchema),
  sceneMaps: z31.array(SceneMapSchema),
  sceneBackgrounds: z31.array(SceneBackgroundSchema),
  assets: z31.array(AssetSchema)
});
export {
  AbilityEntitySchema,
  ActionVisualSchema,
  AssetBaseSchema,
  AssetSchema,
  AssetUidSchema,
  AudioAssetSchema,
  AudioExternalAssetSchema,
  BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION,
  BarOrientationSchema,
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
  DataTableCellValueSchema,
  DataTableColumnBooleanSchema,
  DataTableColumnChoiceSchema,
  DataTableColumnDataTableLookupSchema,
  DataTableColumnDataTableRefSchema,
  DataTableColumnIconSchema,
  DataTableColumnNumberSchema,
  DataTableColumnSchema,
  DataTableColumnTextSchema,
  DataTableColumnTranslatableTextSchema,
  DataTableColumnUidSchema,
  DataTableLookupVariableSchema,
  DataTableRefVariableSchema,
  DataTableRowSchema,
  DataTableRowUidSchema,
  DataTableSchema,
  DataTableUidSchema,
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
  IconCompoSchema,
  IconCompoSlotConfigSchema,
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
  SheetSchema,
  SheetUidSchema,
  StoryEntitySchema,
  StyleSchema,
  TagCategorySchema,
  TagCategoryUidSchema,
  TagSchema,
  TagUidSchema,
  TextVariableSchema,
  TranslatableTextSchema,
  VariableBaseSchema,
  VariableChoiceUidSchema,
  VariableDataValueSchema,
  VariableSchema,
  VariableUidSchema,
  VariablesDataRecordSchema,
  VideoAssetSchema,
  WidgetBarSchema,
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