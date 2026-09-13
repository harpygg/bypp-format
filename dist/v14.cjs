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

// src/v14.ts
var v14_exports = {};
__export(v14_exports, {
  AssetSchema: () => AssetV3Schema,
  BYPP_FORMAT_VERSION: () => BYPP_FORMAT_VERSION2,
  BeyondPaperSchema: () => BeyondPaperV14Schema,
  BundleImageSchema: () => BundleImageV14Schema,
  ChunkSchema: () => ChunkV11Schema,
  CreditSchema: () => CreditV1Schema,
  DataTableSchema: () => DataTableV3Schema,
  DatasetSchema: () => DatasetV2Schema,
  DialectSchema: () => DialectV2Schema,
  EntitySchema: () => EntityV4Schema,
  PageSchema: () => PageV1Schema,
  RandomTableSchema: () => RandomTableV7Schema,
  SceneBackgroundSchema: () => SceneBackgroundV4Schema,
  SceneMapSchema: () => SceneMapV4Schema,
  SceneSchema: () => SceneV2Schema,
  SheetSchema: () => SheetV7Schema,
  StyleSchema: () => StyleV3Schema,
  TagCategorySchema: () => TagCategoryV1Schema,
  TagSchema: () => TagV2Schema,
  VariableSchema: () => VariableV7Schema,
  WidgetSchema: () => WidgetV9Schema,
  WithCreditSchema: () => WithCreditV1Schema
});
module.exports = __toCommonJS(v14_exports);

// src/schemas/bypp.v22.schema.ts
var import_zod87 = require("zod");

// src/models/asset.v3.schema.ts
var import_zod39 = require("zod");

// src/mixins/with-credit.v1.schema.ts
var import_zod34 = require("zod");

// src/schemas/bypp.v3.schema.ts
var import_zod33 = require("zod");

// src/models/asset.v1.schema.ts
var import_zod6 = require("zod");

// src/mixins/with-audio-urls.v1.schema.ts
var import_zod = require("zod");
var WithAudioUrlsV1Schema = import_zod.z.object({
  audioUrl: import_zod.z.string().optional(),
  audioDurationSeconds: import_zod.z.number().optional(),
  audioExt: import_zod.z.enum(["mp3", "ogg"]).optional()
});

// src/mixins/with-images-urls.v1.schema.ts
var import_zod2 = require("zod");
var WithImagesUrlsV1Schema = import_zod2.z.object({
  originalUrl: import_zod2.z.string().optional(),
  thumbnailUrl: import_zod2.z.string().optional(),
  squareUrl: import_zod2.z.string().optional(),
  closeupUrl: import_zod2.z.string().optional()
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
var DataTableUidSchema = import_zod5.z.string();
var DataTableRowUidSchema = import_zod5.z.string();
var DataTableColumnUidSchema = import_zod5.z.string();
var EntityActionUidSchema = import_zod5.z.string();

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = import_zod6.z.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod6.z.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: import_zod6.z.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: import_zod6.z.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: import_zod6.z.literal("audio-external"),
  youtubeVideoId: import_zod6.z.string(),
  thumbnailUrl: import_zod6.z.string(),
  durationSeconds: import_zod6.z.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: import_zod6.z.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = import_zod6.z.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/chunk.v1.schema.ts
var import_zod7 = require("zod");
var ChunkBlockStyleV1Schema = import_zod7.z.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule"
]);
var ChunkHeadingModeV1Schema = import_zod7.z.enum(["inside", "outside"]);
var ChunkHeadingLevelV1Schema = import_zod7.z.union([
  import_zod7.z.literal(1),
  import_zod7.z.literal(2),
  import_zod7.z.literal(3),
  import_zod7.z.literal(4)
]);
var ChunkBaseV1Schema = import_zod7.z.object({
  uid: ChunkUidSchema,
  name: import_zod7.z.string().nullable().optional(),
  blockStyle: ChunkBlockStyleV1Schema.nullable().optional(),
  headingLevel: ChunkHeadingLevelV1Schema.nullable().optional(),
  headingMode: ChunkHeadingModeV1Schema.nullable().optional()
});
var ChunkTextV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod7.z.literal("text"),
  content: import_zod7.z.string(),
  mentionedEntitiesUids: import_zod7.z.array(EntityUidSchema).optional()
});
var ChunkTextProxyV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod7.z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod7.z.literal("gallery"),
  assetUids: import_zod7.z.array(AssetUidSchema)
});
var ChunkRandomV1Schema = ChunkBaseV1Schema.extend({
  type: import_zod7.z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: import_zod7.z.boolean().optional()
});
var ChunkV1Schema = import_zod7.z.discriminatedUnion("type", [
  ChunkTextV1Schema,
  ChunkTextProxyV1Schema,
  ChunkGalleryV1Schema,
  ChunkRandomV1Schema
]);

// src/models/data-table.v2.schema.ts
var import_zod11 = require("zod");

// src/mixins/translatable-text.v2.schema.ts
var import_zod8 = require("zod");
var TranslatableTextV2Schema = import_zod8.z.record(import_zod8.z.string(), import_zod8.z.string());

// src/mixins/with-localized-name.v2.schema.ts
var import_zod9 = require("zod");
var WithLocalizedNameV2Schema = import_zod9.z.object({
  name: TranslatableTextV2Schema
});

// src/models/variable.v1.schema.ts
var import_zod10 = require("zod");
var ChoiceOptionV1Schema = import_zod10.z.object({
  uid: VariableChoiceUidSchema,
  label: import_zod10.z.string(),
  icon: import_zod10.z.string().optional(),
  value: import_zod10.z.number().optional()
});
var VariableBaseV1Schema = import_zod10.z.object({ uid: VariableUidSchema }).merge(WithNameV1Schema).extend({
  datasetsUids: import_zod10.z.array(DatasetUidSchema),
  isMandatory: import_zod10.z.boolean().optional(),
  isHiddenFromSheet: import_zod10.z.boolean().optional(),
  label: import_zod10.z.string().optional()
});
var NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod10.z.literal("number"),
  defaultValue: import_zod10.z.number().optional()
});
var TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod10.z.literal("text"),
  maxChars: import_zod10.z.number().optional(),
  defaultValue: import_zod10.z.string().optional()
});
var BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod10.z.literal("boolean"),
  defaultValue: import_zod10.z.boolean().optional()
});
var ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod10.z.literal("choice"),
  options: import_zod10.z.array(ChoiceOptionV1Schema).optional(),
  isMultiple: import_zod10.z.boolean().optional(),
  hasNumericValue: import_zod10.z.boolean().optional(),
  hasIcon: import_zod10.z.boolean().optional(),
  defaultOptionUids: import_zod10.z.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod10.z.literal("formula"),
  formula: import_zod10.z.string().optional(),
  depsVariablesUid: import_zod10.z.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigV1Schema = import_zod10.z.object({
  icon: import_zod10.z.string().nullable(),
  size: import_zod10.z.number().optional(),
  rotate: import_zod10.z.number().optional(),
  revert: import_zod10.z.boolean().optional()
});
var IconCompoV1Schema = import_zod10.z.record(
  import_zod10.z.string(),
  IconCompoSlotConfigV1Schema
);
var ActionVisualV1Schema = import_zod10.z.discriminatedUnion("type", [
  import_zod10.z.object({ type: import_zod10.z.literal("awesome"), icon: import_zod10.z.string() }),
  import_zod10.z.object({ type: import_zod10.z.literal("compo"), icons: IconCompoV1Schema })
]);
var RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: import_zod10.z.literal("roll"),
  diceFormula: import_zod10.z.string().optional(),
  depsVariablesUid: import_zod10.z.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: import_zod10.z.number().nullable().optional()
});
var VariableV1Schema = import_zod10.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema
]);

// src/models/data-table.v2.schema.ts
var DataTableColumnBaseV2Schema = import_zod11.z.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: import_zod11.z.string().optional(),
  isMandatory: import_zod11.z.boolean().optional()
});
var DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: import_zod11.z.literal("number"),
    defaultNumber: import_zod11.z.number().optional()
  }
);
var DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod11.z.literal("text"),
  maxChars: import_zod11.z.number().optional(),
  defaultValue: import_zod11.z.string().optional()
});
var DataTableColumnBooleanV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod11.z.literal("boolean"),
  defaultBoolean: import_zod11.z.boolean().optional()
});
var DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: import_zod11.z.literal("choice"),
    options: import_zod11.z.array(ChoiceOptionV1Schema).optional(),
    isMultiple: import_zod11.z.boolean().optional(),
    hasNumericValue: import_zod11.z.boolean().optional(),
    hasIcon: import_zod11.z.boolean().optional()
  }
);
var DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod11.z.literal("icon"),
  defaultIcon: import_zod11.z.string().optional()
});
var DataTableColumnTranslatableTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod11.z.literal("translatableText"),
  defaultValue: TranslatableTextV2Schema.optional()
});
var DataTableColumnDataTableRefV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod11.z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: import_zod11.z.boolean().optional(),
  defaultRowUids: import_zod11.z.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupV2Schema = DataTableColumnBaseV2Schema.extend({
  type: import_zod11.z.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: import_zod11.z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: import_zod11.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod11.z.string().optional()
});
var DataTableColumnV2Schema = import_zod11.z.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableCellValueV2Schema = import_zod11.z.union([
  import_zod11.z.string(),
  import_zod11.z.number(),
  import_zod11.z.boolean(),
  import_zod11.z.array(import_zod11.z.string()),
  TranslatableTextV2Schema,
  import_zod11.z.null()
]);
var DataTableRowV2Schema = import_zod11.z.object({
  uid: DataTableRowUidSchema,
  data: import_zod11.z.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV2Schema = import_zod11.z.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: import_zod11.z.string().nullable().optional(),
  weight: import_zod11.z.number().optional(),
  adminOnly: import_zod11.z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: import_zod11.z.array(DataTableColumnV2Schema),
  rows: import_zod11.z.array(DataTableRowV2Schema)
});

// src/models/dataset.v1.schema.ts
var import_zod18 = require("zod");

// src/models/entity.v1.schema.ts
var import_zod17 = require("zod");

// src/mixins/with-archive.v1.schema.ts
var import_zod12 = require("zod");
var WithArchiveV1Schema = import_zod12.z.object({
  isArchived: import_zod12.z.boolean()
});

// src/mixins/with-assets.v1.schema.ts
var import_zod13 = require("zod");
var WithAssetsV1Schema = import_zod13.z.object({
  assetUids: import_zod13.z.array(AssetUidSchema).optional()
});

// src/mixins/with-data.v1.schema.ts
var import_zod14 = require("zod");
var VariableDataValueV1Schema = import_zod14.z.union([
  import_zod14.z.string(),
  import_zod14.z.number(),
  import_zod14.z.boolean(),
  import_zod14.z.array(VariableChoiceUidSchema),
  import_zod14.z.null()
]);
var VariablesDataRecordV1Schema = import_zod14.z.record(
  VariableUidSchema,
  VariableDataValueV1Schema
);
var WithDataV1Schema = import_zod14.z.object({
  data: VariablesDataRecordV1Schema.optional()
});

// src/mixins/with-pages.v1.schema.ts
var import_zod15 = require("zod");
var WithPagesV1Schema = import_zod15.z.object({
  pagesOrder: import_zod15.z.array(PageUidSchema)
});

// src/mixins/with-scenes.v1.schema.ts
var import_zod16 = require("zod");
var WithScenesV1Schema = import_zod16.z.object({
  scenesUids: import_zod16.z.array(SceneUidSchema)
});

// src/models/entity.v1.schema.ts
var EntityTypeV1Schema = import_zod17.z.enum([
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
var GroupRankCharacterV1Schema = import_zod17.z.object({
  entityUid: EntityUidSchema,
  label: import_zod17.z.string()
});
var GroupRankV1Schema = import_zod17.z.object({
  label: import_zod17.z.string(),
  characters: import_zod17.z.array(GroupRankCharacterV1Schema)
});
var EntityBaseV1Schema = import_zod17.z.object({
  uid: EntityUidSchema,
  displayName: import_zod17.z.string().nullable(),
  description: import_zod17.z.string().nullable(),
  tagsUid: import_zod17.z.array(TagUidSchema),
  sheetOverrides: import_zod17.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV1Schema).merge(WithArchiveV1Schema).merge(WithPagesV1Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("character")
});
var CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("creature")
});
var GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("group"),
  ranks: import_zod17.z.array(GroupRankV1Schema),
  charactersUids: import_zod17.z.array(EntityUidSchema)
});
var PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema
).extend({ type: import_zod17.z.literal("place") });
var ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("item")
});
var NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("note")
});
var AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("ability")
});
var StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("story")
});
var EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: import_zod17.z.literal("event")
});
var EntityV1Schema = import_zod17.z.discriminatedUnion("type", [
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

// src/models/dataset.v1.schema.ts
var DatasetTargetV1Schema = import_zod18.z.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = import_zod18.z.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: import_zod18.z.number().optional(),
  targets: import_zod18.z.array(DatasetTargetV1Schema),
  targetTagsGroup: import_zod18.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
var import_zod19 = require("zod");
var DialectFontV1Schema = import_zod19.z.object({
  fontFamily: import_zod19.z.string(),
  fontUrl: import_zod19.z.string()
});
var DialectV1Schema = import_zod19.z.object({
  uid: DialectUidSchema,
  name: import_zod19.z.string(),
  font: DialectFontV1Schema,
  order: import_zod19.z.number().optional(),
  spokenByEntitiesUids: import_zod19.z.array(EntityUidSchema)
});

// src/models/page.v1.schema.ts
var import_zod20 = require("zod");
var PageStandardV1Schema = import_zod20.z.object({ uid: PageUidSchema }).merge(WithNameV1Schema).extend({
  type: import_zod20.z.literal("standard"),
  chunksOrder: import_zod20.z.array(ChunkUidSchema)
});
var PageEntityV1Schema = import_zod20.z.object({
  uid: PageUidSchema,
  type: import_zod20.z.literal("entity"),
  entityUid: EntityUidSchema
});
var PageV1Schema = import_zod20.z.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema
]);

// src/models/random-table.v1.schema.ts
var import_zod21 = require("zod");
var RandomTableRowV1Schema = import_zod21.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod21.z.number(),
  content: import_zod21.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = import_zod21.z.object({
  uid: RandomTableUidSchema,
  title: import_zod21.z.string(),
  rows: import_zod21.z.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
var import_zod22 = require("zod");
var SceneGameModeV1Schema = import_zod22.z.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = import_zod22.z.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: import_zod22.z.number().optional(),
  lightPositionY: import_zod22.z.number().optional(),
  lightPositionZ: import_zod22.z.number().optional(),
  lightIntensity: import_zod22.z.number().optional(),
  lightColor: import_zod22.z.string().optional(),
  useCustomLightPosition: import_zod22.z.boolean().optional(),
  indoorLight: import_zod22.z.boolean().optional(),
  weather: import_zod22.z.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
var import_zod23 = require("zod");
var SceneBackgroundBaseV1Schema = import_zod23.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: import_zod23.z.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: import_zod23.z.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: import_zod23.z.literal("customVideo")
});
var SceneBackgroundV1Schema = import_zod23.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/scene-map.v1.schema.ts
var import_zod24 = require("zod");
var GridDataV1Schema = import_zod24.z.object({
  type: import_zod24.z.enum(["square", "hexv", "hexh"]),
  size: import_zod24.z.number(),
  sizeInUnit: import_zod24.z.number(),
  measureUnit: import_zod24.z.string(),
  lineWidth: import_zod24.z.number(),
  color: import_zod24.z.string().nullable().optional(),
  offset: import_zod24.z.object({ x: import_zod24.z.number(), z: import_zod24.z.number() })
});
var SceneMapBaseV1Schema = import_zod24.z.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema
});
var CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod24.z.literal("customImage")
});
var CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: import_zod24.z.literal("customVideo")
});
var Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: import_zod24.z.literal("dd2vtt")
});
var SceneMapV1Schema = import_zod24.z.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema
]);

// src/models/sheet.v2.schema.ts
var import_zod25 = require("zod");
var SheetV2Schema = import_zod25.z.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: import_zod25.z.string().nullable().optional(),
  widgetUids: import_zod25.z.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
var import_zod26 = require("zod");
var TagV1Schema = import_zod26.z.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: import_zod26.z.boolean()
});

// src/models/tag-category.v1.schema.ts
var import_zod27 = require("zod");
var TagCategoryV1Schema = import_zod27.z.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v2.schema.ts
var import_zod28 = require("zod");
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: import_zod28.z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: import_zod28.z.boolean().optional(),
  defaultRowUids: import_zod28.z.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: import_zod28.z.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: import_zod28.z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: import_zod28.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod28.z.string().optional()
});
var VariableV2Schema = import_zod28.z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema
]);

// src/models/widget.v1.schema.ts
var import_zod32 = require("zod");

// src/mixins/with-area.v1.schema.ts
var import_zod29 = require("zod");
var WithAreaV1Schema = import_zod29.z.object({
  area: import_zod29.z.object({
    width: import_zod29.z.number(),
    height: import_zod29.z.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
var import_zod30 = require("zod");
var WithPositionV1Schema = import_zod30.z.object({
  position: import_zod30.z.object({
    left: import_zod30.z.number(),
    top: import_zod30.z.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
var import_zod31 = require("zod");
var StyleV1Schema = import_zod31.z.object({
  justifyContent: import_zod31.z.string().optional(),
  alignItems: import_zod31.z.string().optional(),
  flexDirection: import_zod31.z.string().optional(),
  lineHeight: import_zod31.z.number().optional(),
  fontFamilyId: import_zod31.z.string().optional(),
  fontScale: import_zod31.z.number().optional(),
  color: import_zod31.z.string().optional(),
  paddingTop: import_zod31.z.number().optional(),
  paddingRight: import_zod31.z.number().optional(),
  paddingBottom: import_zod31.z.number().optional(),
  paddingLeft: import_zod31.z.number().optional()
}).nullable().optional();
var WithStyleV1Schema = import_zod31.z.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = import_zod32.z.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("bigNumber"),
  min: import_zod32.z.number().optional(),
  max: import_zod32.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod32.z.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("toggle"),
  toggleIconType: import_zod32.z.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("bulletList"),
  listVisibility: import_zod32.z.string().optional(),
  listStyleBulletBreakline: import_zod32.z.boolean().optional(),
  listStyleBulletType: import_zod32.z.string().optional(),
  listStyleBulletGap: import_zod32.z.number().optional(),
  listStyleBulletIconGap: import_zod32.z.number().optional(),
  listOptionStyle: import_zod32.z.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("inlineList"),
  listStyleTextSeparator: import_zod32.z.string().optional(),
  listVisibility: import_zod32.z.string().optional(),
  listOptionStyle: import_zod32.z.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("pips"),
  icon: import_zod32.z.string().optional(),
  gapX: import_zod32.z.number().optional(),
  gapY: import_zod32.z.number().optional(),
  max: import_zod32.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = import_zod32.z.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: import_zod32.z.literal("bar"),
  min: import_zod32.z.number().optional(),
  max: import_zod32.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: import_zod32.z.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: import_zod32.z.string().optional(),
  bgColor: import_zod32.z.string().optional(),
  showValue: import_zod32.z.boolean().optional()
});
var WidgetV1Schema = import_zod32.z.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema
]);

// src/schemas/bypp.v3.schema.ts
var CcLicenseV3Schema = import_zod33.z.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = import_zod33.z.object({
  authorName: import_zod33.z.string().min(1),
  authorUrl: import_zod33.z.string().url().optional(),
  sourceUrl: import_zod33.z.string().url().optional()
});
var ParentAttributionV3Schema = import_zod33.z.object({
  artifactName: import_zod33.z.string().min(1),
  authorName: import_zod33.z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: import_zod33.z.string().url().optional()
});
var BeyondPaperV3Schema = import_zod33.z.object({
  // Format metadata
  version: import_zod33.z.literal(3),
  format: import_zod33.z.literal("bypp"),
  // Bundle metadata
  name: import_zod33.z.string(),
  exportedAt: import_zod33.z.string(),
  bundleVersion: import_zod33.z.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: import_zod33.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: import_zod33.z.array(import_zod33.z.string().url()).optional(),
  // Content
  dialects: import_zod33.z.array(DialectV1Schema),
  entities: import_zod33.z.array(EntityV1Schema),
  pages: import_zod33.z.array(PageV1Schema),
  chunks: import_zod33.z.array(ChunkV1Schema),
  datasets: import_zod33.z.array(DatasetV1Schema),
  variables: import_zod33.z.array(VariableV2Schema),
  widgets: import_zod33.z.array(WidgetV1Schema),
  sheets: import_zod33.z.array(SheetV2Schema),
  dataTables: import_zod33.z.array(DataTableV2Schema),
  randomTables: import_zod33.z.array(RandomTableV1Schema),
  tags: import_zod33.z.array(TagV1Schema),
  tagCategories: import_zod33.z.array(TagCategoryV1Schema),
  scenes: import_zod33.z.array(SceneV1Schema),
  sceneMaps: import_zod33.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod33.z.array(SceneBackgroundV1Schema),
  assets: import_zod33.z.array(AssetV1Schema)
});

// src/mixins/with-credit.v1.schema.ts
var CreditV1Schema = import_zod34.z.object({
  name: import_zod34.z.string().min(1),
  url: import_zod34.z.string().url().optional(),
  license: CcLicenseV3Schema.optional()
});
var WithCreditV1Schema = import_zod34.z.object({
  credit: CreditV1Schema.optional()
});

// src/models/asset.v2.schema.ts
var import_zod38 = require("zod");

// src/mixins/with-audio-urls.v2.schema.ts
var import_zod35 = require("zod");
var WithAudioUrlsV2Schema = import_zod35.z.object({
  audioUrl: import_zod35.z.string().url().optional(),
  audioDurationSeconds: import_zod35.z.number().optional(),
  audioExt: import_zod35.z.string().optional()
});

// src/mixins/with-images-urls.v2.schema.ts
var import_zod36 = require("zod");
var WithImagesUrlsV2Schema = import_zod36.z.object({
  originalUrl: import_zod36.z.string().url().optional(),
  thumbnailUrl: import_zod36.z.string().url().optional(),
  squareUrl: import_zod36.z.string().url().optional(),
  closeupUrl: import_zod36.z.string().url().optional()
});

// src/mixins/with-video-urls.v2.schema.ts
var import_zod37 = require("zod");
var WithVideoUrlsV2Schema = import_zod37.z.object({
  videoUrl: import_zod37.z.string().url().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional()
});

// src/models/asset.v2.schema.ts
var AssetBaseV2Schema = import_zod38.z.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV2Schema = AssetBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: import_zod38.z.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV2Schema = AssetBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod38.z.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV2Schema = AssetBaseV2Schema.merge(
  WithAudioUrlsV2Schema
).extend({
  type: import_zod38.z.literal("audio")
});
var AudioExternalAssetV2Schema = AssetBaseV2Schema.extend({
  type: import_zod38.z.literal("audio-external"),
  provider: import_zod38.z.string(),
  externalId: import_zod38.z.string(),
  thumbnailUrl: import_zod38.z.string().url().optional(),
  durationSeconds: import_zod38.z.number().optional()
});
var EntityAssetV2Schema = AssetBaseV2Schema.extend({
  type: import_zod38.z.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV2Schema = import_zod38.z.discriminatedUnion("type", [
  ImageAssetV2Schema,
  VideoAssetV2Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema,
  EntityAssetV2Schema
]);

// src/models/asset.v3.schema.ts
var AssetBaseV3Schema = AssetBaseV2Schema.merge(WithCreditV1Schema);
var ImageAssetV3Schema = ImageAssetV2Schema.merge(WithCreditV1Schema);
var VideoAssetV3Schema = VideoAssetV2Schema.merge(WithCreditV1Schema);
var AudioAssetV3Schema = AudioAssetV2Schema.merge(WithCreditV1Schema);
var AudioExternalAssetV3Schema = AudioExternalAssetV2Schema.merge(
  WithCreditV1Schema
);
var EntityAssetV3Schema = EntityAssetV2Schema.merge(WithCreditV1Schema);
var AssetV3Schema = import_zod39.z.discriminatedUnion("type", [
  ImageAssetV3Schema,
  VideoAssetV3Schema,
  AudioAssetV3Schema,
  AudioExternalAssetV3Schema,
  EntityAssetV3Schema
]);

// src/mixins/with-images-urls.v3.schema.ts
var WithImagesUrlsV3Schema = WithImagesUrlsV2Schema.extend({
  dimensions: ImageDimensionsV1Schema.optional()
});

// src/models/bundle-image.v14.schema.ts
var BundleImageV14Schema = WithImagesUrlsV3Schema.merge(WithCreditV1Schema);

// src/models/chunk.v12.schema.ts
var import_zod42 = require("zod");

// src/models/chunk.v2.schema.ts
var import_zod40 = require("zod");
var ChunkBaseV2Schema = import_zod40.z.object({
  uid: ChunkUidSchema,
  name: import_zod40.z.string().optional(),
  blockStyle: ChunkBlockStyleV1Schema.optional(),
  headingLevel: ChunkHeadingLevelV1Schema.optional(),
  headingMode: ChunkHeadingModeV1Schema.optional()
});
var ChunkTextV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod40.z.literal("text"),
  content: import_zod40.z.string(),
  mentionedEntitiesUids: import_zod40.z.array(EntityUidSchema).optional()
});
var ChunkTextProxyV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod40.z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod40.z.literal("gallery"),
  assetUids: import_zod40.z.array(AssetUidSchema).default([])
});
var ChunkRandomV2Schema = ChunkBaseV2Schema.extend({
  type: import_zod40.z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: import_zod40.z.boolean().optional()
});
var ChunkV2Schema = import_zod40.z.discriminatedUnion("type", [
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/chunk.v11.schema.ts
var import_zod41 = require("zod");
var ChunkTextV11Schema = ChunkBaseV2Schema.extend({
  type: import_zod41.z.literal("text"),
  content: import_zod41.z.string(),
  mentionedEntitiesUids: import_zod41.z.array(EntityUidSchema).optional(),
  wrappedInEntityUid: EntityUidSchema.optional()
});
var ChunkV11Schema = import_zod41.z.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/chunk.v12.schema.ts
var ChunkMarkdownV12Schema = ChunkBaseV2Schema.extend({
  type: import_zod42.z.literal("markdown"),
  content: import_zod42.z.string()
});
var ChunkV12Schema = import_zod42.z.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
  ChunkMarkdownV12Schema
]);

// src/models/data-table.v3.schema.ts
var import_zod43 = require("zod");
var DataTableRowV3Schema = import_zod43.z.object({
  uid: DataTableRowUidSchema,
  data: import_zod43.z.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = import_zod43.z.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: import_zod43.z.string().optional(),
  weight: import_zod43.z.number().optional(),
  adminOnly: import_zod43.z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: import_zod43.z.array(DataTableColumnV2Schema).default([]),
  rows: import_zod43.z.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
var import_zod44 = require("zod");
var DatasetTargetV2Schema = import_zod44.z.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = import_zod44.z.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: import_zod44.z.number().optional(),
  targets: import_zod44.z.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: import_zod44.z.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v3.schema.ts
var import_zod45 = require("zod");
var DialectV3Schema = import_zod45.z.object({
  uid: DialectUidSchema,
  name: import_zod45.z.string(),
  fontFamily: import_zod45.z.string().optional(),
  order: import_zod45.z.number().optional(),
  spokenByEntitiesUids: import_zod45.z.array(EntityUidSchema).default([])
});

// src/models/entity.v5.schema.ts
var import_zod52 = require("zod");

// src/mixins/with-scenes.v2.schema.ts
var import_zod46 = require("zod");
var WithScenesV2Schema = import_zod46.z.object({
  scenesUids: import_zod46.z.array(SceneUidSchema).default([])
});

// src/models/entity-action.v1.schema.ts
var import_zod47 = require("zod");
var EntityActionV1Schema = import_zod47.z.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: import_zod47.z.number().nullable().optional(),
  type: import_zod47.z.literal("roll"),
  diceFormula: import_zod47.z.string().optional()
});

// src/models/entity.v4.schema.ts
var import_zod51 = require("zod");

// src/models/entity.v3.schema.ts
var import_zod50 = require("zod");

// src/mixins/with-archive.v2.schema.ts
var import_zod48 = require("zod");
var WithArchiveV2Schema = import_zod48.z.object({
  isArchived: import_zod48.z.boolean().default(false)
});

// src/mixins/with-pages.v2.schema.ts
var import_zod49 = require("zod");
var WithPagesV2Schema = import_zod49.z.object({
  pagesOrder: import_zod49.z.array(PageUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = import_zod50.z.object({
  uid: EntityUidSchema,
  displayName: import_zod50.z.string().optional(),
  description: import_zod50.z.string().optional(),
  tagsUid: import_zod50.z.array(TagUidSchema).default([]),
  sheetOverrides: import_zod50.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("group"),
  ranks: import_zod50.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod50.z.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod50.z.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: import_zod50.z.literal("event")
});
var EntityV3Schema = import_zod50.z.discriminatedUnion("type", [
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

// src/models/entity.v4.schema.ts
var EntityBaseV4Schema = EntityBaseV3Schema.merge(WithCreditV1Schema);
var CharacterEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("character")
});
var CreatureEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("creature")
});
var GroupEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("group"),
  ranks: import_zod51.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod51.z.array(EntityUidSchema).default([])
});
var PlaceEntityV4Schema = EntityBaseV4Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod51.z.literal("place") });
var ItemEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("item")
});
var NoteEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("note")
});
var AbilityEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("ability")
});
var StoryEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("story")
});
var EventEntityV4Schema = EntityBaseV4Schema.extend({
  type: import_zod51.z.literal("event")
});
var EntityV4Schema = import_zod51.z.discriminatedUnion("type", [
  CharacterEntityV4Schema,
  CreatureEntityV4Schema,
  GroupEntityV4Schema,
  PlaceEntityV4Schema,
  ItemEntityV4Schema,
  NoteEntityV4Schema,
  AbilityEntityV4Schema,
  StoryEntityV4Schema,
  EventEntityV4Schema
]);

// src/models/entity.v5.schema.ts
var EntityBaseV5Schema = EntityBaseV4Schema.extend({
  actions: import_zod52.z.array(EntityActionV1Schema).default([])
});
var CharacterEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("character")
});
var CreatureEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("creature")
});
var GroupEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("group"),
  ranks: import_zod52.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod52.z.array(EntityUidSchema).default([])
});
var PlaceEntityV5Schema = EntityBaseV5Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod52.z.literal("place") });
var ItemEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("item")
});
var NoteEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("note")
});
var AbilityEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("ability")
});
var StoryEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("story")
});
var EventEntityV5Schema = EntityBaseV5Schema.extend({
  type: import_zod52.z.literal("event")
});
var EntityV5Schema = import_zod52.z.discriminatedUnion("type", [
  CharacterEntityV5Schema,
  CreatureEntityV5Schema,
  GroupEntityV5Schema,
  PlaceEntityV5Schema,
  ItemEntityV5Schema,
  NoteEntityV5Schema,
  AbilityEntityV5Schema,
  StoryEntityV5Schema,
  EventEntityV5Schema
]);

// src/models/random-table.v7.schema.ts
var import_zod53 = require("zod");
var RandomTableRowV7Schema = import_zod53.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod53.z.number().default(1),
  content: import_zod53.z.string(),
  randomTableRefs: import_zod53.z.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = import_zod53.z.object({
  uid: RandomTableUidSchema,
  title: import_zod53.z.string(),
  rows: import_zod53.z.array(RandomTableRowV7Schema).default([]),
  diceFormula: import_zod53.z.string().optional()
});

// src/models/requirement.v1.schema.ts
var import_zod54 = require("zod");
var ByppFileUrlV1Schema = import_zod54.z.string().url().refine(
  (url) => {
    try {
      return /\.bypp$/i.test(new URL(url).pathname);
    } catch {
      return false;
    }
  },
  { message: "must be the address of a .bypp file" }
);
var RequirementSourceV1Schema = import_zod54.z.object({
  byppUrl: ByppFileUrlV1Schema,
  bundleName: import_zod54.z.string().optional(),
  bundleVersion: import_zod54.z.string().optional()
});
var RequirementV1Schema = import_zod54.z.object({
  category: import_zod54.z.string(),
  uid: import_zod54.z.string(),
  name: import_zod54.z.string().optional(),
  from: RequirementSourceV1Schema.optional()
});

// src/models/scene.v2.schema.ts
var import_zod55 = require("zod");
var SceneV2Schema = import_zod55.z.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: import_zod55.z.number().optional(),
  lightPositionY: import_zod55.z.number().optional(),
  lightPositionZ: import_zod55.z.number().optional(),
  lightIntensity: import_zod55.z.number().optional(),
  lightColor: import_zod55.z.string().optional(),
  useCustomLightPosition: import_zod55.z.boolean().optional(),
  indoorLight: import_zod55.z.boolean().optional()
});

// src/models/scene-background.v4.schema.ts
var import_zod58 = require("zod");

// src/models/scene-background.v3.schema.ts
var import_zod57 = require("zod");

// src/models/scene-background.v2.schema.ts
var import_zod56 = require("zod");
var SceneBackgroundBaseV2Schema = import_zod56.z.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: import_zod56.z.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: import_zod56.z.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: import_zod56.z.literal("customVideo")
});
var SceneBackgroundV2Schema = import_zod56.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: import_zod57.z.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: import_zod57.z.literal("customVideo")
});
var SceneBackgroundV3Schema = import_zod57.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-background.v4.schema.ts
var CustomImageSceneBackgroundV4Schema = CustomImageSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var CustomVideoSceneBackgroundV4Schema = CustomVideoSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var SceneBackgroundV4Schema = import_zod58.z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV4Schema,
  CustomVideoSceneBackgroundV4Schema
]);

// src/models/scene-map.v4.schema.ts
var import_zod61 = require("zod");

// src/models/scene-map.v3.schema.ts
var import_zod60 = require("zod");

// src/models/scene-map.v2.schema.ts
var import_zod59 = require("zod");
var SceneMapBaseV2Schema = import_zod59.z.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: import_zod59.z.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: import_zod59.z.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod59.z.literal("customVideo")
});
var SceneMapV2Schema = import_zod59.z.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: import_zod60.z.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: import_zod60.z.literal("customVideo")
});
var SceneMapV3Schema = import_zod60.z.discriminatedUnion("type", [
  CustomImageSceneMapV3Schema,
  CustomVideoSceneMapV3Schema
]);

// src/models/scene-map.v4.schema.ts
var CustomImageSceneMapV4Schema = CustomImageSceneMapV3Schema.merge(
  WithCreditV1Schema
);
var CustomVideoSceneMapV4Schema = CustomVideoSceneMapV3Schema.merge(
  WithCreditV1Schema
);
var SceneMapV4Schema = import_zod61.z.discriminatedUnion("type", [
  CustomImageSceneMapV4Schema,
  CustomVideoSceneMapV4Schema
]);

// src/models/sheet.v5.schema.ts
var import_zod66 = require("zod");

// src/mixins/with-style.v3.schema.ts
var import_zod63 = require("zod");

// src/mixins/with-style.v2.schema.ts
var import_zod62 = require("zod");
var ObjectFitV6Schema = import_zod62.z.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = import_zod62.z.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = import_zod62.z.object({
  justifyContent: import_zod62.z.string().optional(),
  alignItems: import_zod62.z.string().optional(),
  flexDirection: import_zod62.z.string().optional(),
  lineHeight: import_zod62.z.number().optional(),
  fontFamilyId: import_zod62.z.string().optional(),
  fontScale: import_zod62.z.number().optional(),
  color: import_zod62.z.string().optional(),
  paddingTop: import_zod62.z.number().optional(),
  paddingRight: import_zod62.z.number().optional(),
  paddingBottom: import_zod62.z.number().optional(),
  paddingLeft: import_zod62.z.number().optional(),
  // New in v2:
  borderWidth: import_zod62.z.number().optional(),
  borderStyle: import_zod62.z.string().optional(),
  borderColor: import_zod62.z.string().optional(),
  borderRadius: import_zod62.z.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = import_zod62.z.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: import_zod63.z.number().optional()
}).nullable().optional();
var WithStyleV3Schema = import_zod63.z.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
var import_zod65 = require("zod");

// src/models/sheet.v3.schema.ts
var import_zod64 = require("zod");
var SheetV3Schema = import_zod64.z.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: import_zod64.z.string().optional(),
  widgetUids: import_zod64.z.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: import_zod65.z.record(import_zod65.z.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: import_zod66.z.record(import_zod66.z.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/sheet.v7.schema.ts
var SheetV7Schema = SheetV6Schema.merge(WithCreditV1Schema);

// src/mixins/with-icon.v1.schema.ts
var import_zod67 = require("zod");
var WithIconV1Schema = import_zod67.z.object({
  icon: import_zod67.z.string().optional()
});

// src/models/tag.v2.schema.ts
var import_zod68 = require("zod");
var TagV2Schema = import_zod68.z.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: import_zod68.z.boolean().default(false)
});

// src/models/tag.v3.schema.ts
var TagV3Schema = TagV2Schema.merge(WithIconV1Schema);

// src/models/tag-category.v2.schema.ts
var TagCategoryV2Schema = TagCategoryV1Schema.merge(WithIconV1Schema);

// src/models/variable.v9.schema.ts
var import_zod73 = require("zod");

// src/models/variable.v8.schema.ts
var import_zod72 = require("zod");

// src/models/variable.v5.schema.ts
var import_zod69 = require("zod");
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: import_zod69.z.literal("image")
});
var VariableV5Schema = import_zod69.z.discriminatedUnion("type", [
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
var import_zod70 = require("zod");
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: import_zod70.z.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: import_zod70.z.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: import_zod70.z.array(DataTableColumnUidSchema).optional(),
    multiAggregator: import_zod70.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: import_zod70.z.string().optional()
  }
);
var VariableV6Schema = import_zod70.z.discriminatedUnion("type", [
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
var import_zod71 = require("zod");
var NumberVariableV2Schema = NumberVariableV1Schema.extend({
  min: import_zod71.z.number().optional(),
  max: import_zod71.z.number().optional(),
  step: import_zod71.z.number().optional()
});
var VariableV7Schema = import_zod71.z.discriminatedUnion("type", [
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

// src/models/variable.v8.schema.ts
var VariableBaseV8Schema = VariableBaseV1Schema.merge(WithIconV1Schema);
var NumberVariableV8Schema = NumberVariableV2Schema.merge(WithIconV1Schema);
var TextVariableV8Schema = TextVariableV1Schema.merge(WithIconV1Schema);
var BooleanVariableV8Schema = BooleanVariableV1Schema.merge(WithIconV1Schema);
var ChoiceVariableV8Schema = ChoiceVariableV1Schema.merge(WithIconV1Schema);
var FormulaVariableV8Schema = FormulaVariableV1Schema.merge(WithIconV1Schema);
var RollVariableV8Schema = RollVariableV1Schema.merge(WithIconV1Schema);
var DataTableRefVariableV8Schema = DataTableRefVariableV2Schema.merge(WithIconV1Schema);
var DataTableLookupVariableV8Schema = DataTableLookupVariableV2Schema.merge(WithIconV1Schema);
var ImageVariableV8Schema = ImageVariableV5Schema.merge(WithIconV1Schema);
var DataTableDirectLookupVariableV8Schema = DataTableDirectLookupVariableV6Schema.merge(WithIconV1Schema);
var VariableV8Schema = import_zod72.z.discriminatedUnion("type", [
  NumberVariableV8Schema,
  TextVariableV8Schema,
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  FormulaVariableV8Schema,
  RollVariableV8Schema,
  DataTableRefVariableV8Schema,
  DataTableLookupVariableV8Schema,
  ImageVariableV8Schema,
  DataTableDirectLookupVariableV8Schema
]);

// src/models/variable.v9.schema.ts
var EntityRefVariableV9Schema = VariableBaseV8Schema.extend({
  type: import_zod73.z.literal("entityRef"),
  sourceVariableUid: VariableUidSchema.optional(),
  targetsTypes: import_zod73.z.array(import_zod73.z.string()).optional(),
  targetsTags: import_zod73.z.array(TagUidSchema).optional(),
  targetTagsGroup: import_zod73.z.enum(["every", "some"]).optional(),
  max: import_zod73.z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var EntityLookupVariableV9Schema = VariableBaseV8Schema.extend({
  type: import_zod73.z.literal("entityLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  keyVariableUid: VariableUidSchema.optional(),
  labelVariableUid: VariableUidSchema.optional(),
  multiAggregator: import_zod73.z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: import_zod73.z.string().optional()
});
var VariableV9Schema = import_zod73.z.discriminatedUnion("type", [
  NumberVariableV8Schema,
  TextVariableV8Schema,
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  FormulaVariableV8Schema,
  RollVariableV8Schema,
  DataTableRefVariableV8Schema,
  DataTableLookupVariableV8Schema,
  ImageVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
  EntityRefVariableV9Schema,
  EntityLookupVariableV9Schema
]);

// src/models/widget.v11.schema.ts
var import_zod82 = require("zod");

// src/mixins/with-style.v4.schema.ts
var import_zod74 = require("zod");
var StyleV4Schema = StyleV3Schema.unwrap().unwrap().extend({
  fontWeight: import_zod74.z.string().optional(),
  fontStyle: import_zod74.z.string().optional()
}).nullable().optional();
var WithStyleV4Schema = import_zod74.z.object({
  style: StyleV4Schema
});

// src/models/widget.v6.schema.ts
var import_zod77 = require("zod");

// src/models/widget.v5.schema.ts
var import_zod76 = require("zod");

// src/models/entity-image-format.v5.schema.ts
var import_zod75 = require("zod");
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = import_zod75.z.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = import_zod76.z.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: import_zod76.z.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = import_zod76.z.discriminatedUnion("type", [
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
var WidgetV6Schema = import_zod77.z.discriminatedUnion("type", [
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
var import_zod78 = require("zod");
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: import_zod78.z.literal("wheel"),
  readingPosition: import_zod78.z.string().optional(),
  labelOrientation: import_zod78.z.string().optional(),
  radius: import_zod78.z.number().optional()
});
var WidgetV7Schema = import_zod78.z.discriminatedUnion("type", [
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
var import_zod79 = require("zod");
var WithWidgetActionsV8Schema = import_zod79.z.object({
  actionsVariablesUids: import_zod79.z.array(VariableUidSchema).optional()
});
var WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).merge(WithWidgetActionsV8Schema).extend({
  type: import_zod79.z.literal("actionRoll")
});
var WidgetV8Schema = import_zod79.z.discriminatedUnion("type", [
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

// src/models/widget.v9.schema.ts
var import_zod80 = require("zod");
var WidgetActionRollV9Schema = WidgetActionRollV8Schema.merge(WithCreditV1Schema);
var WidgetV9Schema = import_zod80.z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPipsV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBarV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithWidgetActionsV8Schema).merge(
    WithCreditV1Schema
  ),
  WidgetActionRollV9Schema
]);

// src/models/widget.v10.schema.ts
var import_zod81 = require("zod");
var WidgetEntityGridV10Schema = WidgetBaseV1Schema.extend({
  type: import_zod81.z.literal("entityGrid"),
  gapX: import_zod81.z.number().optional(),
  gapY: import_zod81.z.number().optional(),
  listOptionStyle: import_zod81.z.string().optional(),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional(),
  imageWidth: import_zod81.z.number().optional(),
  imageHeight: import_zod81.z.number().optional()
}).merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema);
var WidgetV10Schema = import_zod81.z.discriminatedUnion("type", [
  ...WidgetV9Schema.options,
  WidgetEntityGridV10Schema
]);

// src/models/widget.v11.schema.ts
var WidgetV11Schema = import_zod82.z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPipsV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBarV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithStyleV4Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetActionRollV9Schema.merge(WithStyleV4Schema),
  WidgetEntityGridV10Schema.merge(WithStyleV4Schema)
]);

// src/schemas/bypp.v4.schema.ts
var import_zod86 = require("zod");

// src/models/dialect.v2.schema.ts
var import_zod83 = require("zod");
var DialectFontV2Schema = import_zod83.z.object({
  fontFamily: import_zod83.z.string(),
  fontUrl: import_zod83.z.string().url()
});
var DialectV2Schema = import_zod83.z.object({
  uid: DialectUidSchema,
  name: import_zod83.z.string(),
  font: DialectFontV2Schema,
  order: import_zod83.z.number().optional(),
  spokenByEntitiesUids: import_zod83.z.array(EntityUidSchema).default([])
});

// src/models/entity.v2.schema.ts
var import_zod84 = require("zod");
var EntityBaseV2Schema = import_zod84.z.object({
  uid: EntityUidSchema,
  displayName: import_zod84.z.string().optional(),
  description: import_zod84.z.string().optional(),
  tagsUid: import_zod84.z.array(TagUidSchema).default([]),
  sheetOverrides: import_zod84.z.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("group"),
  ranks: import_zod84.z.array(GroupRankV1Schema).default([]),
  charactersUids: import_zod84.z.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: import_zod84.z.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: import_zod84.z.literal("event")
});
var EntityV2Schema = import_zod84.z.discriminatedUnion("type", [
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
var import_zod85 = require("zod");
var RandomTableRowV2Schema = import_zod85.z.object({
  uid: RandomTableRowUidSchema,
  range: import_zod85.z.number().default(1),
  content: import_zod85.z.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = import_zod85.z.object({
  uid: RandomTableUidSchema,
  title: import_zod85.z.string(),
  rows: import_zod85.z.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = import_zod86.z.object({
  bundleName: import_zod86.z.string().min(1),
  authorName: import_zod86.z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: import_zod86.z.string().url().optional()
});
var BeyondPaperV4Schema = import_zod86.z.object({
  // Format metadata
  version: import_zod86.z.literal(4),
  format: import_zod86.z.literal("bypp"),
  // Bundle metadata
  name: import_zod86.z.string(),
  exportedAt: import_zod86.z.string(),
  bundleVersion: import_zod86.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod86.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod86.z.array(import_zod86.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod86.z.array(DialectV2Schema).default([]),
  entities: import_zod86.z.array(EntityV2Schema).default([]),
  pages: import_zod86.z.array(PageV1Schema).default([]),
  chunks: import_zod86.z.array(ChunkV2Schema).default([]),
  datasets: import_zod86.z.array(DatasetV2Schema).default([]),
  variables: import_zod86.z.array(VariableV2Schema).default([]),
  widgets: import_zod86.z.array(WidgetV1Schema).default([]),
  sheets: import_zod86.z.array(SheetV3Schema).default([]),
  dataTables: import_zod86.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod86.z.array(RandomTableV2Schema).default([]),
  tags: import_zod86.z.array(TagV2Schema).default([]),
  tagCategories: import_zod86.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod86.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod86.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod86.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod86.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v22.schema.ts
var BeyondPaperV22Schema = import_zod87.z.object({
  // Format metadata
  version: import_zod87.z.literal(22),
  format: import_zod87.z.literal("bypp"),
  // Bundle metadata
  name: import_zod87.z.string(),
  exportedAt: import_zod87.z.string(),
  bundleVersion: import_zod87.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod87.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod87.z.array(import_zod87.z.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: import_zod87.z.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod87.z.array(DialectV3Schema).default([]),
  entities: import_zod87.z.array(EntityV5Schema).default([]),
  pages: import_zod87.z.array(PageV1Schema).default([]),
  chunks: import_zod87.z.array(ChunkV12Schema).default([]),
  datasets: import_zod87.z.array(DatasetV2Schema).default([]),
  variables: import_zod87.z.array(VariableV9Schema).default([]),
  widgets: import_zod87.z.array(WidgetV11Schema).default([]),
  sheets: import_zod87.z.array(SheetV7Schema).default([]),
  dataTables: import_zod87.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod87.z.array(RandomTableV7Schema).default([]),
  tags: import_zod87.z.array(TagV3Schema).default([]),
  tagCategories: import_zod87.z.array(TagCategoryV2Schema).default([]),
  scenes: import_zod87.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod87.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod87.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod87.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
var import_zod88 = require("zod");
var BeyondPaperV1Schema = import_zod88.z.object({
  // Format metadata
  version: import_zod88.z.literal(1),
  format: import_zod88.z.literal("bypp"),
  // Bundle metadata
  name: import_zod88.z.string(),
  exportedAt: import_zod88.z.string(),
  bundleVersion: import_zod88.z.string(),
  // Content
  dialects: import_zod88.z.array(DialectV1Schema),
  entities: import_zod88.z.array(EntityV1Schema),
  pages: import_zod88.z.array(PageV1Schema),
  chunks: import_zod88.z.array(ChunkV1Schema),
  datasets: import_zod88.z.array(DatasetV1Schema),
  variables: import_zod88.z.array(VariableV1Schema),
  widgets: import_zod88.z.array(WidgetV1Schema),
  randomTables: import_zod88.z.array(RandomTableV1Schema),
  tags: import_zod88.z.array(TagV1Schema),
  tagCategories: import_zod88.z.array(TagCategoryV1Schema),
  scenes: import_zod88.z.array(SceneV1Schema),
  sceneMaps: import_zod88.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod88.z.array(SceneBackgroundV1Schema),
  assets: import_zod88.z.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
var import_zod89 = require("zod");
var BeyondPaperV2Schema = import_zod89.z.object({
  // Format metadata
  version: import_zod89.z.literal(2),
  format: import_zod89.z.literal("bypp"),
  // Bundle metadata
  name: import_zod89.z.string(),
  exportedAt: import_zod89.z.string(),
  bundleVersion: import_zod89.z.string(),
  // Content
  dialects: import_zod89.z.array(DialectV1Schema),
  entities: import_zod89.z.array(EntityV1Schema),
  pages: import_zod89.z.array(PageV1Schema),
  chunks: import_zod89.z.array(ChunkV1Schema),
  datasets: import_zod89.z.array(DatasetV1Schema),
  variables: import_zod89.z.array(VariableV2Schema),
  widgets: import_zod89.z.array(WidgetV1Schema),
  sheets: import_zod89.z.array(SheetV2Schema),
  dataTables: import_zod89.z.array(DataTableV2Schema),
  randomTables: import_zod89.z.array(RandomTableV1Schema),
  tags: import_zod89.z.array(TagV1Schema),
  tagCategories: import_zod89.z.array(TagCategoryV1Schema),
  scenes: import_zod89.z.array(SceneV1Schema),
  sceneMaps: import_zod89.z.array(SceneMapV1Schema),
  sceneBackgrounds: import_zod89.z.array(SceneBackgroundV1Schema),
  assets: import_zod89.z.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
var import_zod90 = require("zod");
var BeyondPaperV5Schema = import_zod90.z.object({
  // Format metadata
  version: import_zod90.z.literal(5),
  format: import_zod90.z.literal("bypp"),
  // Bundle metadata
  name: import_zod90.z.string(),
  exportedAt: import_zod90.z.string(),
  bundleVersion: import_zod90.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod90.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod90.z.array(import_zod90.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod90.z.array(DialectV2Schema).default([]),
  entities: import_zod90.z.array(EntityV2Schema).default([]),
  pages: import_zod90.z.array(PageV1Schema).default([]),
  chunks: import_zod90.z.array(ChunkV2Schema).default([]),
  datasets: import_zod90.z.array(DatasetV2Schema).default([]),
  variables: import_zod90.z.array(VariableV5Schema).default([]),
  widgets: import_zod90.z.array(WidgetV5Schema).default([]),
  sheets: import_zod90.z.array(SheetV3Schema).default([]),
  dataTables: import_zod90.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod90.z.array(RandomTableV2Schema).default([]),
  tags: import_zod90.z.array(TagV2Schema).default([]),
  tagCategories: import_zod90.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod90.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod90.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod90.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod90.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
var import_zod91 = require("zod");
var BeyondPaperV6Schema = import_zod91.z.object({
  // Format metadata
  version: import_zod91.z.literal(6),
  format: import_zod91.z.literal("bypp"),
  // Bundle metadata
  name: import_zod91.z.string(),
  exportedAt: import_zod91.z.string(),
  bundleVersion: import_zod91.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod91.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod91.z.array(import_zod91.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod91.z.array(DialectV2Schema).default([]),
  entities: import_zod91.z.array(EntityV2Schema).default([]),
  pages: import_zod91.z.array(PageV1Schema).default([]),
  chunks: import_zod91.z.array(ChunkV2Schema).default([]),
  datasets: import_zod91.z.array(DatasetV2Schema).default([]),
  variables: import_zod91.z.array(VariableV6Schema).default([]),
  widgets: import_zod91.z.array(WidgetV5Schema).default([]),
  sheets: import_zod91.z.array(SheetV3Schema).default([]),
  dataTables: import_zod91.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod91.z.array(RandomTableV2Schema).default([]),
  tags: import_zod91.z.array(TagV2Schema).default([]),
  tagCategories: import_zod91.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod91.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod91.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod91.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod91.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
var import_zod92 = require("zod");
var BeyondPaperV7Schema = import_zod92.z.object({
  // Format metadata
  version: import_zod92.z.literal(7),
  format: import_zod92.z.literal("bypp"),
  // Bundle metadata
  name: import_zod92.z.string(),
  exportedAt: import_zod92.z.string(),
  bundleVersion: import_zod92.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod92.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod92.z.array(import_zod92.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod92.z.array(DialectV2Schema).default([]),
  entities: import_zod92.z.array(EntityV2Schema).default([]),
  pages: import_zod92.z.array(PageV1Schema).default([]),
  chunks: import_zod92.z.array(ChunkV2Schema).default([]),
  datasets: import_zod92.z.array(DatasetV2Schema).default([]),
  variables: import_zod92.z.array(VariableV6Schema).default([]),
  widgets: import_zod92.z.array(WidgetV5Schema).default([]),
  sheets: import_zod92.z.array(SheetV3Schema).default([]),
  dataTables: import_zod92.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod92.z.array(RandomTableV7Schema).default([]),
  tags: import_zod92.z.array(TagV2Schema).default([]),
  tagCategories: import_zod92.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod92.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod92.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod92.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod92.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
var import_zod93 = require("zod");
var BeyondPaperV8Schema = import_zod93.z.object({
  // Format metadata
  version: import_zod93.z.literal(8),
  format: import_zod93.z.literal("bypp"),
  // Bundle metadata
  name: import_zod93.z.string(),
  exportedAt: import_zod93.z.string(),
  bundleVersion: import_zod93.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod93.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod93.z.array(import_zod93.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod93.z.array(DialectV2Schema).default([]),
  entities: import_zod93.z.array(EntityV2Schema).default([]),
  pages: import_zod93.z.array(PageV1Schema).default([]),
  chunks: import_zod93.z.array(ChunkV2Schema).default([]),
  datasets: import_zod93.z.array(DatasetV2Schema).default([]),
  variables: import_zod93.z.array(VariableV6Schema).default([]),
  widgets: import_zod93.z.array(WidgetV6Schema).default([]),
  sheets: import_zod93.z.array(SheetV4Schema).default([]),
  dataTables: import_zod93.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod93.z.array(RandomTableV7Schema).default([]),
  tags: import_zod93.z.array(TagV2Schema).default([]),
  tagCategories: import_zod93.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod93.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod93.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod93.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod93.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
var import_zod94 = require("zod");
var BeyondPaperV9Schema = import_zod94.z.object({
  // Format metadata
  version: import_zod94.z.literal(9),
  format: import_zod94.z.literal("bypp"),
  // Bundle metadata
  name: import_zod94.z.string(),
  exportedAt: import_zod94.z.string(),
  bundleVersion: import_zod94.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod94.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod94.z.array(import_zod94.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod94.z.array(DialectV2Schema).default([]),
  entities: import_zod94.z.array(EntityV2Schema).default([]),
  pages: import_zod94.z.array(PageV1Schema).default([]),
  chunks: import_zod94.z.array(ChunkV2Schema).default([]),
  datasets: import_zod94.z.array(DatasetV2Schema).default([]),
  variables: import_zod94.z.array(VariableV7Schema).default([]),
  widgets: import_zod94.z.array(WidgetV7Schema).default([]),
  sheets: import_zod94.z.array(SheetV5Schema).default([]),
  dataTables: import_zod94.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod94.z.array(RandomTableV7Schema).default([]),
  tags: import_zod94.z.array(TagV2Schema).default([]),
  tagCategories: import_zod94.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod94.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod94.z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: import_zod94.z.array(SceneBackgroundV2Schema).default([]),
  assets: import_zod94.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
var import_zod95 = require("zod");
var BeyondPaperV10Schema = import_zod95.z.object({
  // Format metadata
  version: import_zod95.z.literal(10),
  format: import_zod95.z.literal("bypp"),
  // Bundle metadata
  name: import_zod95.z.string(),
  exportedAt: import_zod95.z.string(),
  bundleVersion: import_zod95.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod95.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod95.z.array(import_zod95.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod95.z.array(DialectV2Schema).default([]),
  entities: import_zod95.z.array(EntityV3Schema).default([]),
  pages: import_zod95.z.array(PageV1Schema).default([]),
  chunks: import_zod95.z.array(ChunkV2Schema).default([]),
  datasets: import_zod95.z.array(DatasetV2Schema).default([]),
  variables: import_zod95.z.array(VariableV7Schema).default([]),
  widgets: import_zod95.z.array(WidgetV7Schema).default([]),
  sheets: import_zod95.z.array(SheetV6Schema).default([]),
  dataTables: import_zod95.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod95.z.array(RandomTableV7Schema).default([]),
  tags: import_zod95.z.array(TagV2Schema).default([]),
  tagCategories: import_zod95.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod95.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod95.z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: import_zod95.z.array(SceneBackgroundV3Schema).default([]),
  assets: import_zod95.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v11.schema.ts
var import_zod96 = require("zod");
var BeyondPaperV11Schema = import_zod96.z.object({
  // Format metadata
  version: import_zod96.z.literal(11),
  format: import_zod96.z.literal("bypp"),
  // Bundle metadata
  name: import_zod96.z.string(),
  exportedAt: import_zod96.z.string(),
  bundleVersion: import_zod96.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod96.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod96.z.array(import_zod96.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod96.z.array(DialectV2Schema).default([]),
  entities: import_zod96.z.array(EntityV3Schema).default([]),
  pages: import_zod96.z.array(PageV1Schema).default([]),
  chunks: import_zod96.z.array(ChunkV11Schema).default([]),
  datasets: import_zod96.z.array(DatasetV2Schema).default([]),
  variables: import_zod96.z.array(VariableV7Schema).default([]),
  widgets: import_zod96.z.array(WidgetV7Schema).default([]),
  sheets: import_zod96.z.array(SheetV6Schema).default([]),
  dataTables: import_zod96.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod96.z.array(RandomTableV7Schema).default([]),
  tags: import_zod96.z.array(TagV2Schema).default([]),
  tagCategories: import_zod96.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod96.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod96.z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: import_zod96.z.array(SceneBackgroundV3Schema).default([]),
  assets: import_zod96.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v12.schema.ts
var import_zod97 = require("zod");
var BeyondPaperV12Schema = import_zod97.z.object({
  // Format metadata
  version: import_zod97.z.literal(12),
  format: import_zod97.z.literal("bypp"),
  // Bundle metadata
  name: import_zod97.z.string(),
  exportedAt: import_zod97.z.string(),
  bundleVersion: import_zod97.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod97.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod97.z.array(import_zod97.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod97.z.array(DialectV2Schema).default([]),
  entities: import_zod97.z.array(EntityV3Schema).default([]),
  pages: import_zod97.z.array(PageV1Schema).default([]),
  chunks: import_zod97.z.array(ChunkV11Schema).default([]),
  datasets: import_zod97.z.array(DatasetV2Schema).default([]),
  variables: import_zod97.z.array(VariableV7Schema).default([]),
  widgets: import_zod97.z.array(WidgetV8Schema).default([]),
  sheets: import_zod97.z.array(SheetV6Schema).default([]),
  dataTables: import_zod97.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod97.z.array(RandomTableV7Schema).default([]),
  tags: import_zod97.z.array(TagV2Schema).default([]),
  tagCategories: import_zod97.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod97.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod97.z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: import_zod97.z.array(SceneBackgroundV3Schema).default([]),
  assets: import_zod97.z.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v13.schema.ts
var import_zod98 = require("zod");
var BeyondPaperV13Schema = import_zod98.z.object({
  // Format metadata
  version: import_zod98.z.literal(13),
  format: import_zod98.z.literal("bypp"),
  // Bundle metadata
  name: import_zod98.z.string(),
  exportedAt: import_zod98.z.string(),
  bundleVersion: import_zod98.z.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod98.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod98.z.array(import_zod98.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod98.z.array(DialectV2Schema).default([]),
  entities: import_zod98.z.array(EntityV4Schema).default([]),
  pages: import_zod98.z.array(PageV1Schema).default([]),
  chunks: import_zod98.z.array(ChunkV11Schema).default([]),
  datasets: import_zod98.z.array(DatasetV2Schema).default([]),
  variables: import_zod98.z.array(VariableV7Schema).default([]),
  widgets: import_zod98.z.array(WidgetV9Schema).default([]),
  sheets: import_zod98.z.array(SheetV7Schema).default([]),
  dataTables: import_zod98.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod98.z.array(RandomTableV7Schema).default([]),
  tags: import_zod98.z.array(TagV2Schema).default([]),
  tagCategories: import_zod98.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod98.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod98.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod98.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod98.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v14.schema.ts
var import_zod99 = require("zod");
var BeyondPaperV14Schema = import_zod99.z.object({
  // Format metadata
  version: import_zod99.z.literal(14),
  format: import_zod99.z.literal("bypp"),
  // Bundle metadata
  name: import_zod99.z.string(),
  exportedAt: import_zod99.z.string(),
  bundleVersion: import_zod99.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod99.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod99.z.array(import_zod99.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod99.z.array(DialectV2Schema).default([]),
  entities: import_zod99.z.array(EntityV4Schema).default([]),
  pages: import_zod99.z.array(PageV1Schema).default([]),
  chunks: import_zod99.z.array(ChunkV11Schema).default([]),
  datasets: import_zod99.z.array(DatasetV2Schema).default([]),
  variables: import_zod99.z.array(VariableV7Schema).default([]),
  widgets: import_zod99.z.array(WidgetV9Schema).default([]),
  sheets: import_zod99.z.array(SheetV7Schema).default([]),
  dataTables: import_zod99.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod99.z.array(RandomTableV7Schema).default([]),
  tags: import_zod99.z.array(TagV2Schema).default([]),
  tagCategories: import_zod99.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod99.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod99.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod99.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod99.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v15.schema.ts
var import_zod100 = require("zod");
var BeyondPaperV15Schema = import_zod100.z.object({
  // Format metadata
  version: import_zod100.z.literal(15),
  format: import_zod100.z.literal("bypp"),
  // Bundle metadata
  name: import_zod100.z.string(),
  exportedAt: import_zod100.z.string(),
  bundleVersion: import_zod100.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod100.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod100.z.array(import_zod100.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod100.z.array(DialectV3Schema).default([]),
  entities: import_zod100.z.array(EntityV4Schema).default([]),
  pages: import_zod100.z.array(PageV1Schema).default([]),
  chunks: import_zod100.z.array(ChunkV11Schema).default([]),
  datasets: import_zod100.z.array(DatasetV2Schema).default([]),
  variables: import_zod100.z.array(VariableV7Schema).default([]),
  widgets: import_zod100.z.array(WidgetV9Schema).default([]),
  sheets: import_zod100.z.array(SheetV7Schema).default([]),
  dataTables: import_zod100.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod100.z.array(RandomTableV7Schema).default([]),
  tags: import_zod100.z.array(TagV2Schema).default([]),
  tagCategories: import_zod100.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod100.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod100.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod100.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod100.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v16.schema.ts
var import_zod101 = require("zod");
var BeyondPaperV16Schema = import_zod101.z.object({
  // Format metadata
  version: import_zod101.z.literal(16),
  format: import_zod101.z.literal("bypp"),
  // Bundle metadata
  name: import_zod101.z.string(),
  exportedAt: import_zod101.z.string(),
  bundleVersion: import_zod101.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod101.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod101.z.array(import_zod101.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod101.z.array(DialectV3Schema).default([]),
  entities: import_zod101.z.array(EntityV4Schema).default([]),
  pages: import_zod101.z.array(PageV1Schema).default([]),
  chunks: import_zod101.z.array(ChunkV11Schema).default([]),
  datasets: import_zod101.z.array(DatasetV2Schema).default([]),
  variables: import_zod101.z.array(VariableV8Schema).default([]),
  widgets: import_zod101.z.array(WidgetV9Schema).default([]),
  sheets: import_zod101.z.array(SheetV7Schema).default([]),
  dataTables: import_zod101.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod101.z.array(RandomTableV7Schema).default([]),
  tags: import_zod101.z.array(TagV2Schema).default([]),
  tagCategories: import_zod101.z.array(TagCategoryV1Schema).default([]),
  scenes: import_zod101.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod101.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod101.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod101.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v17.schema.ts
var import_zod102 = require("zod");
var BeyondPaperV17Schema = import_zod102.z.object({
  // Format metadata
  version: import_zod102.z.literal(17),
  format: import_zod102.z.literal("bypp"),
  // Bundle metadata
  name: import_zod102.z.string(),
  exportedAt: import_zod102.z.string(),
  bundleVersion: import_zod102.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod102.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod102.z.array(import_zod102.z.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod102.z.array(DialectV3Schema).default([]),
  entities: import_zod102.z.array(EntityV4Schema).default([]),
  pages: import_zod102.z.array(PageV1Schema).default([]),
  chunks: import_zod102.z.array(ChunkV11Schema).default([]),
  datasets: import_zod102.z.array(DatasetV2Schema).default([]),
  variables: import_zod102.z.array(VariableV8Schema).default([]),
  widgets: import_zod102.z.array(WidgetV9Schema).default([]),
  sheets: import_zod102.z.array(SheetV7Schema).default([]),
  dataTables: import_zod102.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod102.z.array(RandomTableV7Schema).default([]),
  tags: import_zod102.z.array(TagV3Schema).default([]),
  tagCategories: import_zod102.z.array(TagCategoryV2Schema).default([]),
  scenes: import_zod102.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod102.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod102.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod102.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v18.schema.ts
var import_zod103 = require("zod");
var BeyondPaperV18Schema = import_zod103.z.object({
  // Format metadata
  version: import_zod103.z.literal(18),
  format: import_zod103.z.literal("bypp"),
  // Bundle metadata
  name: import_zod103.z.string(),
  exportedAt: import_zod103.z.string(),
  bundleVersion: import_zod103.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod103.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod103.z.array(import_zod103.z.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: import_zod103.z.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod103.z.array(DialectV3Schema).default([]),
  entities: import_zod103.z.array(EntityV4Schema).default([]),
  pages: import_zod103.z.array(PageV1Schema).default([]),
  chunks: import_zod103.z.array(ChunkV11Schema).default([]),
  datasets: import_zod103.z.array(DatasetV2Schema).default([]),
  variables: import_zod103.z.array(VariableV8Schema).default([]),
  widgets: import_zod103.z.array(WidgetV9Schema).default([]),
  sheets: import_zod103.z.array(SheetV7Schema).default([]),
  dataTables: import_zod103.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod103.z.array(RandomTableV7Schema).default([]),
  tags: import_zod103.z.array(TagV3Schema).default([]),
  tagCategories: import_zod103.z.array(TagCategoryV2Schema).default([]),
  scenes: import_zod103.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod103.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod103.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod103.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v19.schema.ts
var import_zod104 = require("zod");
var BeyondPaperV19Schema = import_zod104.z.object({
  // Format metadata
  version: import_zod104.z.literal(19),
  format: import_zod104.z.literal("bypp"),
  // Bundle metadata
  name: import_zod104.z.string(),
  exportedAt: import_zod104.z.string(),
  bundleVersion: import_zod104.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod104.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod104.z.array(import_zod104.z.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: import_zod104.z.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod104.z.array(DialectV3Schema).default([]),
  entities: import_zod104.z.array(EntityV4Schema).default([]),
  pages: import_zod104.z.array(PageV1Schema).default([]),
  chunks: import_zod104.z.array(ChunkV11Schema).default([]),
  datasets: import_zod104.z.array(DatasetV2Schema).default([]),
  variables: import_zod104.z.array(VariableV9Schema).default([]),
  widgets: import_zod104.z.array(WidgetV10Schema).default([]),
  sheets: import_zod104.z.array(SheetV7Schema).default([]),
  dataTables: import_zod104.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod104.z.array(RandomTableV7Schema).default([]),
  tags: import_zod104.z.array(TagV3Schema).default([]),
  tagCategories: import_zod104.z.array(TagCategoryV2Schema).default([]),
  scenes: import_zod104.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod104.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod104.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod104.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v20.schema.ts
var import_zod105 = require("zod");
var BeyondPaperV20Schema = import_zod105.z.object({
  // Format metadata
  version: import_zod105.z.literal(20),
  format: import_zod105.z.literal("bypp"),
  // Bundle metadata
  name: import_zod105.z.string(),
  exportedAt: import_zod105.z.string(),
  bundleVersion: import_zod105.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod105.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod105.z.array(import_zod105.z.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: import_zod105.z.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod105.z.array(DialectV3Schema).default([]),
  entities: import_zod105.z.array(EntityV5Schema).default([]),
  pages: import_zod105.z.array(PageV1Schema).default([]),
  chunks: import_zod105.z.array(ChunkV11Schema).default([]),
  datasets: import_zod105.z.array(DatasetV2Schema).default([]),
  variables: import_zod105.z.array(VariableV9Schema).default([]),
  widgets: import_zod105.z.array(WidgetV10Schema).default([]),
  sheets: import_zod105.z.array(SheetV7Schema).default([]),
  dataTables: import_zod105.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod105.z.array(RandomTableV7Schema).default([]),
  tags: import_zod105.z.array(TagV3Schema).default([]),
  tagCategories: import_zod105.z.array(TagCategoryV2Schema).default([]),
  scenes: import_zod105.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod105.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod105.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod105.z.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v21.schema.ts
var import_zod106 = require("zod");
var BeyondPaperV21Schema = import_zod106.z.object({
  // Format metadata
  version: import_zod106.z.literal(21),
  format: import_zod106.z.literal("bypp"),
  // Bundle metadata
  name: import_zod106.z.string(),
  exportedAt: import_zod106.z.string(),
  bundleVersion: import_zod106.z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: import_zod106.z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: import_zod106.z.array(import_zod106.z.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: import_zod106.z.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: import_zod106.z.array(DialectV3Schema).default([]),
  entities: import_zod106.z.array(EntityV5Schema).default([]),
  pages: import_zod106.z.array(PageV1Schema).default([]),
  chunks: import_zod106.z.array(ChunkV12Schema).default([]),
  datasets: import_zod106.z.array(DatasetV2Schema).default([]),
  variables: import_zod106.z.array(VariableV9Schema).default([]),
  widgets: import_zod106.z.array(WidgetV10Schema).default([]),
  sheets: import_zod106.z.array(SheetV7Schema).default([]),
  dataTables: import_zod106.z.array(DataTableV3Schema).default([]),
  randomTables: import_zod106.z.array(RandomTableV7Schema).default([]),
  tags: import_zod106.z.array(TagV3Schema).default([]),
  tagCategories: import_zod106.z.array(TagCategoryV2Schema).default([]),
  scenes: import_zod106.z.array(SceneV2Schema).default([]),
  sceneMaps: import_zod106.z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: import_zod106.z.array(SceneBackgroundV4Schema).default([]),
  assets: import_zod106.z.array(AssetV3Schema).default([])
});

// src/v14.ts
var BYPP_FORMAT_VERSION2 = 14;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AssetSchema,
  BYPP_FORMAT_VERSION,
  BeyondPaperSchema,
  BundleImageSchema,
  ChunkSchema,
  CreditSchema,
  DataTableSchema,
  DatasetSchema,
  DialectSchema,
  EntitySchema,
  PageSchema,
  RandomTableSchema,
  SceneBackgroundSchema,
  SceneMapSchema,
  SceneSchema,
  SheetSchema,
  StyleSchema,
  TagCategorySchema,
  TagSchema,
  VariableSchema,
  WidgetSchema,
  WithCreditSchema
});
//# sourceMappingURL=v14.cjs.map