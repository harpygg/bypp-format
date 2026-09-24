// src/version.ts
var BYPP_FORMAT_VERSION = 28;
var BYPP_FORMAT_EXT = "bypp";

// src/schemas/bypp.v28.schema.ts
import { z as z95 } from "zod";

// src/models/asset.v3.schema.ts
import { z as z39 } from "zod";

// src/mixins/with-credit.v1.schema.ts
import { z as z34 } from "zod";

// src/schemas/bypp.v3.schema.ts
import { z as z33 } from "zod";

// src/models/asset.v1.schema.ts
import { z as z6 } from "zod";

// src/mixins/with-audio-urls.v1.schema.ts
import { z } from "zod";
var WithAudioUrlsV1Schema = z.object({
  audioUrl: z.string().optional(),
  audioDurationSeconds: z.number().optional(),
  audioExt: z.enum(["mp3", "ogg"]).optional()
});

// src/mixins/with-images-urls.v1.schema.ts
import { z as z2 } from "zod";
var WithImagesUrlsV1Schema = z2.object({
  originalUrl: z2.string().optional(),
  thumbnailUrl: z2.string().optional(),
  squareUrl: z2.string().optional(),
  closeupUrl: z2.string().optional()
});

// src/mixins/with-name.v1.schema.ts
import { z as z3 } from "zod";
var WithNameV1Schema = z3.object({
  name: z3.string()
});

// src/mixins/with-video-urls.v1.schema.ts
import { z as z4 } from "zod";
var ImageDimensionsV1Schema = z4.object({
  width: z4.number(),
  height: z4.number()
});
var WithVideoUrlsV1Schema = z4.object({
  videoUrl: z4.string().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional()
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
var EntityActionUidSchema = z5.string();
var EntitySpawnUidSchema = z5.string();

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = z6.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z6.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z6.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: z6.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: z6.literal("audio-external"),
  youtubeVideoId: z6.string(),
  thumbnailUrl: z6.string(),
  durationSeconds: z6.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: z6.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = z6.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/chunk.v1.schema.ts
import { z as z7 } from "zod";
var ChunkBlockStyleV1Schema = z7.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule"
]);
var ChunkHeadingModeV1Schema = z7.enum(["inside", "outside"]);
var ChunkHeadingLevelV1Schema = z7.union([
  z7.literal(1),
  z7.literal(2),
  z7.literal(3),
  z7.literal(4)
]);
var ChunkBaseV1Schema = z7.object({
  uid: ChunkUidSchema,
  name: z7.string().nullable().optional(),
  blockStyle: ChunkBlockStyleV1Schema.nullable().optional(),
  headingLevel: ChunkHeadingLevelV1Schema.nullable().optional(),
  headingMode: ChunkHeadingModeV1Schema.nullable().optional()
});
var ChunkTextV1Schema = ChunkBaseV1Schema.extend({
  type: z7.literal("text"),
  content: z7.string(),
  mentionedEntitiesUids: z7.array(EntityUidSchema).optional()
});
var ChunkTextProxyV1Schema = ChunkBaseV1Schema.extend({
  type: z7.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV1Schema = ChunkBaseV1Schema.extend({
  type: z7.literal("gallery"),
  assetUids: z7.array(AssetUidSchema)
});
var ChunkRandomV1Schema = ChunkBaseV1Schema.extend({
  type: z7.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z7.boolean().optional()
});
var ChunkV1Schema = z7.discriminatedUnion("type", [
  ChunkTextV1Schema,
  ChunkTextProxyV1Schema,
  ChunkGalleryV1Schema,
  ChunkRandomV1Schema
]);

// src/models/data-table.v2.schema.ts
import { z as z11 } from "zod";

// src/mixins/translatable-text.v2.schema.ts
import { z as z8 } from "zod";
var TranslatableTextV2Schema = z8.record(z8.string(), z8.string());

// src/mixins/with-localized-name.v2.schema.ts
import { z as z9 } from "zod";
var WithLocalizedNameV2Schema = z9.object({
  name: TranslatableTextV2Schema
});

// src/models/variable.v1.schema.ts
import { z as z10 } from "zod";
var ChoiceOptionV1Schema = z10.object({
  uid: VariableChoiceUidSchema,
  label: z10.string(),
  icon: z10.string().optional(),
  value: z10.number().optional()
});
var VariableBaseV1Schema = z10.object({ uid: VariableUidSchema }).merge(WithNameV1Schema).extend({
  datasetsUids: z10.array(DatasetUidSchema),
  isMandatory: z10.boolean().optional(),
  isHiddenFromSheet: z10.boolean().optional(),
  label: z10.string().optional()
});
var NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: z10.literal("number"),
  defaultValue: z10.number().optional()
});
var TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: z10.literal("text"),
  maxChars: z10.number().optional(),
  defaultValue: z10.string().optional()
});
var BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: z10.literal("boolean"),
  defaultValue: z10.boolean().optional()
});
var ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: z10.literal("choice"),
  options: z10.array(ChoiceOptionV1Schema).optional(),
  isMultiple: z10.boolean().optional(),
  hasNumericValue: z10.boolean().optional(),
  hasIcon: z10.boolean().optional(),
  defaultOptionUids: z10.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: z10.literal("formula"),
  formula: z10.string().optional(),
  depsVariablesUid: z10.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigV1Schema = z10.object({
  icon: z10.string().nullable(),
  size: z10.number().optional(),
  rotate: z10.number().optional(),
  revert: z10.boolean().optional()
});
var IconCompoV1Schema = z10.record(
  z10.string(),
  IconCompoSlotConfigV1Schema
);
var ActionVisualV1Schema = z10.discriminatedUnion("type", [
  z10.object({ type: z10.literal("awesome"), icon: z10.string() }),
  z10.object({ type: z10.literal("compo"), icons: IconCompoV1Schema })
]);
var RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: z10.literal("roll"),
  diceFormula: z10.string().optional(),
  depsVariablesUid: z10.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: z10.number().nullable().optional()
});
var VariableV1Schema = z10.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema
]);

// src/models/data-table.v2.schema.ts
var DataTableColumnBaseV2Schema = z11.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: z11.string().optional(),
  isMandatory: z11.boolean().optional()
});
var DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z11.literal("number"),
    defaultNumber: z11.number().optional()
  }
);
var DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z11.literal("text"),
  maxChars: z11.number().optional(),
  defaultValue: z11.string().optional()
});
var DataTableColumnBooleanV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z11.literal("boolean"),
  defaultBoolean: z11.boolean().optional()
});
var DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z11.literal("choice"),
    options: z11.array(ChoiceOptionV1Schema).optional(),
    isMultiple: z11.boolean().optional(),
    hasNumericValue: z11.boolean().optional(),
    hasIcon: z11.boolean().optional()
  }
);
var DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z11.literal("icon"),
  defaultIcon: z11.string().optional()
});
var DataTableColumnTranslatableTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z11.literal("translatableText"),
  defaultValue: TranslatableTextV2Schema.optional()
});
var DataTableColumnDataTableRefV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z11.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z11.boolean().optional(),
  defaultRowUids: z11.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z11.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z11.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z11.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z11.string().optional()
});
var DataTableColumnV2Schema = z11.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableCellValueV2Schema = z11.union([
  z11.string(),
  z11.number(),
  z11.boolean(),
  z11.array(z11.string()),
  TranslatableTextV2Schema,
  z11.null()
]);
var DataTableRowV2Schema = z11.object({
  uid: DataTableRowUidSchema,
  data: z11.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV2Schema = z11.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z11.string().nullable().optional(),
  weight: z11.number().optional(),
  adminOnly: z11.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z11.array(DataTableColumnV2Schema),
  rows: z11.array(DataTableRowV2Schema)
});

// src/models/dataset.v1.schema.ts
import { z as z18 } from "zod";

// src/models/entity.v1.schema.ts
import { z as z17 } from "zod";

// src/mixins/with-archive.v1.schema.ts
import { z as z12 } from "zod";
var WithArchiveV1Schema = z12.object({
  isArchived: z12.boolean()
});

// src/mixins/with-assets.v1.schema.ts
import { z as z13 } from "zod";
var WithAssetsV1Schema = z13.object({
  assetUids: z13.array(AssetUidSchema).optional()
});

// src/mixins/with-data.v1.schema.ts
import { z as z14 } from "zod";
var VariableDataValueV1Schema = z14.union([
  z14.string(),
  z14.number(),
  z14.boolean(),
  z14.array(VariableChoiceUidSchema),
  z14.null()
]);
var VariablesDataRecordV1Schema = z14.record(
  VariableUidSchema,
  VariableDataValueV1Schema
);
var WithDataV1Schema = z14.object({
  data: VariablesDataRecordV1Schema.optional()
});

// src/mixins/with-pages.v1.schema.ts
import { z as z15 } from "zod";
var WithPagesV1Schema = z15.object({
  pagesOrder: z15.array(PageUidSchema)
});

// src/mixins/with-scenes.v1.schema.ts
import { z as z16 } from "zod";
var WithScenesV1Schema = z16.object({
  scenesUids: z16.array(SceneUidSchema)
});

// src/models/entity.v1.schema.ts
var EntityTypeV1Schema = z17.enum([
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
var GroupRankCharacterV1Schema = z17.object({
  entityUid: EntityUidSchema,
  label: z17.string()
});
var GroupRankV1Schema = z17.object({
  label: z17.string(),
  characters: z17.array(GroupRankCharacterV1Schema)
});
var EntityBaseV1Schema = z17.object({
  uid: EntityUidSchema,
  displayName: z17.string().nullable(),
  description: z17.string().nullable(),
  tagsUid: z17.array(TagUidSchema),
  sheetOverrides: z17.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV1Schema).merge(WithArchiveV1Schema).merge(WithPagesV1Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("character")
});
var CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("creature")
});
var GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("group"),
  ranks: z17.array(GroupRankV1Schema),
  charactersUids: z17.array(EntityUidSchema)
});
var PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema
).extend({ type: z17.literal("place") });
var ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("item")
});
var NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("note")
});
var AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("ability")
});
var StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("story")
});
var EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: z17.literal("event")
});
var EntityV1Schema = z17.discriminatedUnion("type", [
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
var DatasetTargetV1Schema = z18.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = z18.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z18.number().optional(),
  targets: z18.array(DatasetTargetV1Schema),
  targetTagsGroup: z18.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
import { z as z19 } from "zod";
var DialectFontV1Schema = z19.object({
  fontFamily: z19.string(),
  fontUrl: z19.string()
});
var DialectV1Schema = z19.object({
  uid: DialectUidSchema,
  name: z19.string(),
  font: DialectFontV1Schema,
  order: z19.number().optional(),
  spokenByEntitiesUids: z19.array(EntityUidSchema)
});

// src/models/page.v1.schema.ts
import { z as z20 } from "zod";
var PageStandardV1Schema = z20.object({ uid: PageUidSchema }).merge(WithNameV1Schema).extend({
  type: z20.literal("standard"),
  chunksOrder: z20.array(ChunkUidSchema)
});
var PageEntityV1Schema = z20.object({
  uid: PageUidSchema,
  type: z20.literal("entity"),
  entityUid: EntityUidSchema
});
var PageV1Schema = z20.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema
]);

// src/models/random-table.v1.schema.ts
import { z as z21 } from "zod";
var RandomTableRowV1Schema = z21.object({
  uid: RandomTableRowUidSchema,
  range: z21.number(),
  content: z21.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = z21.object({
  uid: RandomTableUidSchema,
  title: z21.string(),
  rows: z21.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
import { z as z22 } from "zod";
var SceneGameModeV1Schema = z22.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = z22.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: z22.number().optional(),
  lightPositionY: z22.number().optional(),
  lightPositionZ: z22.number().optional(),
  lightIntensity: z22.number().optional(),
  lightColor: z22.string().optional(),
  useCustomLightPosition: z22.boolean().optional(),
  indoorLight: z22.boolean().optional(),
  weather: z22.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
import { z as z23 } from "zod";
var SceneBackgroundBaseV1Schema = z23.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z23.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: z23.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: z23.literal("customVideo")
});
var SceneBackgroundV1Schema = z23.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/scene-map.v1.schema.ts
import { z as z24 } from "zod";
var GridDataV1Schema = z24.object({
  type: z24.enum(["square", "hexv", "hexh"]),
  size: z24.number(),
  sizeInUnit: z24.number(),
  measureUnit: z24.string(),
  lineWidth: z24.number(),
  color: z24.string().nullable().optional(),
  offset: z24.object({ x: z24.number(), z: z24.number() })
});
var SceneMapBaseV1Schema = z24.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema
});
var CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z24.literal("customImage")
});
var CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z24.literal("customVideo")
});
var Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z24.literal("dd2vtt")
});
var SceneMapV1Schema = z24.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema
]);

// src/models/sheet.v2.schema.ts
import { z as z25 } from "zod";
var SheetV2Schema = z25.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: z25.string().nullable().optional(),
  widgetUids: z25.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
import { z as z26 } from "zod";
var TagV1Schema = z26.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: z26.boolean()
});

// src/models/tag-category.v1.schema.ts
import { z as z27 } from "zod";
var TagCategoryV1Schema = z27.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v2.schema.ts
import { z as z28 } from "zod";
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: z28.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z28.boolean().optional(),
  defaultRowUids: z28.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: z28.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z28.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z28.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z28.string().optional()
});
var VariableV2Schema = z28.discriminatedUnion("type", [
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
import { z as z32 } from "zod";

// src/mixins/with-area.v1.schema.ts
import { z as z29 } from "zod";
var WithAreaV1Schema = z29.object({
  area: z29.object({
    width: z29.number(),
    height: z29.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
import { z as z30 } from "zod";
var WithPositionV1Schema = z30.object({
  position: z30.object({
    left: z30.number(),
    top: z30.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
import { z as z31 } from "zod";
var StyleV1Schema = z31.object({
  justifyContent: z31.string().optional(),
  alignItems: z31.string().optional(),
  flexDirection: z31.string().optional(),
  lineHeight: z31.number().optional(),
  fontFamilyId: z31.string().optional(),
  fontScale: z31.number().optional(),
  color: z31.string().optional(),
  paddingTop: z31.number().optional(),
  paddingRight: z31.number().optional(),
  paddingBottom: z31.number().optional(),
  paddingLeft: z31.number().optional()
}).nullable().optional();
var WithStyleV1Schema = z31.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = z32.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("bigNumber"),
  min: z32.number().optional(),
  max: z32.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z32.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("toggle"),
  toggleIconType: z32.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("bulletList"),
  listVisibility: z32.string().optional(),
  listStyleBulletBreakline: z32.boolean().optional(),
  listStyleBulletType: z32.string().optional(),
  listStyleBulletGap: z32.number().optional(),
  listStyleBulletIconGap: z32.number().optional(),
  listOptionStyle: z32.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("inlineList"),
  listStyleTextSeparator: z32.string().optional(),
  listVisibility: z32.string().optional(),
  listOptionStyle: z32.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("pips"),
  icon: z32.string().optional(),
  gapX: z32.number().optional(),
  gapY: z32.number().optional(),
  max: z32.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = z32.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: z32.literal("bar"),
  min: z32.number().optional(),
  max: z32.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z32.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: z32.string().optional(),
  bgColor: z32.string().optional(),
  showValue: z32.boolean().optional()
});
var WidgetV1Schema = z32.discriminatedUnion("type", [
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
var CcLicenseV3Schema = z33.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = z33.object({
  authorName: z33.string().min(1),
  authorUrl: z33.string().url().optional(),
  sourceUrl: z33.string().url().optional()
});
var ParentAttributionV3Schema = z33.object({
  artifactName: z33.string().min(1),
  authorName: z33.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z33.string().url().optional()
});
var BeyondPaperV3Schema = z33.object({
  // Format metadata
  version: z33.literal(3),
  format: z33.literal("bypp"),
  // Bundle metadata
  name: z33.string(),
  exportedAt: z33.string(),
  bundleVersion: z33.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: z33.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: z33.array(z33.string().url()).optional(),
  // Content
  dialects: z33.array(DialectV1Schema),
  entities: z33.array(EntityV1Schema),
  pages: z33.array(PageV1Schema),
  chunks: z33.array(ChunkV1Schema),
  datasets: z33.array(DatasetV1Schema),
  variables: z33.array(VariableV2Schema),
  widgets: z33.array(WidgetV1Schema),
  sheets: z33.array(SheetV2Schema),
  dataTables: z33.array(DataTableV2Schema),
  randomTables: z33.array(RandomTableV1Schema),
  tags: z33.array(TagV1Schema),
  tagCategories: z33.array(TagCategoryV1Schema),
  scenes: z33.array(SceneV1Schema),
  sceneMaps: z33.array(SceneMapV1Schema),
  sceneBackgrounds: z33.array(SceneBackgroundV1Schema),
  assets: z33.array(AssetV1Schema)
});

// src/mixins/with-credit.v1.schema.ts
var CreditV1Schema = z34.object({
  name: z34.string().min(1),
  url: z34.string().url().optional(),
  license: CcLicenseV3Schema.optional()
});
var WithCreditV1Schema = z34.object({
  credit: CreditV1Schema.optional()
});

// src/models/asset.v2.schema.ts
import { z as z38 } from "zod";

// src/mixins/with-audio-urls.v2.schema.ts
import { z as z35 } from "zod";
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
var WithAudioUrlsV2Schema = z35.object({
  audioUrl: z35.string().url().optional(),
  audioDurationSeconds: z35.number().optional(),
  audioExt: z35.string().optional()
});

// src/mixins/with-images-urls.v2.schema.ts
import { z as z36 } from "zod";
var WithImagesUrlsV2Schema = z36.object({
  originalUrl: z36.string().url().optional(),
  thumbnailUrl: z36.string().url().optional(),
  squareUrl: z36.string().url().optional(),
  closeupUrl: z36.string().url().optional()
});

// src/mixins/with-video-urls.v2.schema.ts
import { z as z37 } from "zod";
var WithVideoUrlsV2Schema = z37.object({
  videoUrl: z37.string().url().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional()
});

// src/models/asset.v2.schema.ts
var KNOWN_EXTERNAL_AUDIO_PROVIDERS = [
  "youtube",
  "soundcloud",
  "vimeo",
  "bandcamp",
  "spotify"
];
var AssetBaseV2Schema = z38.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV2Schema = AssetBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z38.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV2Schema = AssetBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z38.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV2Schema = AssetBaseV2Schema.merge(
  WithAudioUrlsV2Schema
).extend({
  type: z38.literal("audio")
});
var AudioExternalAssetV2Schema = AssetBaseV2Schema.extend({
  type: z38.literal("audio-external"),
  provider: z38.string(),
  externalId: z38.string(),
  thumbnailUrl: z38.string().url().optional(),
  durationSeconds: z38.number().optional()
});
var EntityAssetV2Schema = AssetBaseV2Schema.extend({
  type: z38.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV2Schema = z38.discriminatedUnion("type", [
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
var AssetV3Schema = z39.discriminatedUnion("type", [
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
import { z as z42 } from "zod";

// src/models/chunk.v2.schema.ts
import { z as z40 } from "zod";
var ChunkBaseV2Schema = z40.object({
  uid: ChunkUidSchema,
  name: z40.string().optional(),
  blockStyle: ChunkBlockStyleV1Schema.optional(),
  headingLevel: ChunkHeadingLevelV1Schema.optional(),
  headingMode: ChunkHeadingModeV1Schema.optional()
});
var ChunkTextV2Schema = ChunkBaseV2Schema.extend({
  type: z40.literal("text"),
  content: z40.string(),
  mentionedEntitiesUids: z40.array(EntityUidSchema).optional()
});
var ChunkTextProxyV2Schema = ChunkBaseV2Schema.extend({
  type: z40.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV2Schema = ChunkBaseV2Schema.extend({
  type: z40.literal("gallery"),
  assetUids: z40.array(AssetUidSchema).default([])
});
var ChunkRandomV2Schema = ChunkBaseV2Schema.extend({
  type: z40.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z40.boolean().optional()
});
var ChunkV2Schema = z40.discriminatedUnion("type", [
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/chunk.v11.schema.ts
import { z as z41 } from "zod";
var ChunkTextV11Schema = ChunkBaseV2Schema.extend({
  type: z41.literal("text"),
  content: z41.string(),
  mentionedEntitiesUids: z41.array(EntityUidSchema).optional(),
  wrappedInEntityUid: EntityUidSchema.optional()
});
var ChunkV11Schema = z41.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/chunk.v12.schema.ts
var ChunkMarkdownV12Schema = ChunkBaseV2Schema.extend({
  type: z42.literal("markdown"),
  content: z42.string()
});
var ChunkV12Schema = z42.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
  ChunkMarkdownV12Schema
]);

// src/models/data-table.v4.schema.ts
import { z as z52 } from "zod";

// src/models/data-table.v3.schema.ts
import { z as z43 } from "zod";
var DataTableRowV3Schema = z43.object({
  uid: DataTableRowUidSchema,
  data: z43.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = z43.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z43.string().optional(),
  weight: z43.number().optional(),
  adminOnly: z43.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z43.array(DataTableColumnV2Schema).default([]),
  rows: z43.array(DataTableRowV3Schema).default([])
});

// src/models/variable.v11.schema.ts
import { z as z51 } from "zod";

// src/models/variable.v8.schema.ts
import { z as z48 } from "zod";

// src/mixins/with-icon.v1.schema.ts
import { z as z44 } from "zod";
var WithIconV1Schema = z44.object({
  icon: z44.string().optional()
});

// src/models/variable.v5.schema.ts
import { z as z45 } from "zod";
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z45.literal("image")
});
var VariableV5Schema = z45.discriminatedUnion("type", [
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
import { z as z46 } from "zod";
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z46.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z46.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z46.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z46.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z46.string().optional()
  }
);
var VariableV6Schema = z46.discriminatedUnion("type", [
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
import { z as z47 } from "zod";
var NumberVariableV2Schema = NumberVariableV1Schema.extend({
  min: z47.number().optional(),
  max: z47.number().optional(),
  step: z47.number().optional()
});
var VariableV7Schema = z47.discriminatedUnion("type", [
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
var VariableV8Schema = z48.discriminatedUnion("type", [
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
import { z as z49 } from "zod";
var EntityRefVariableV9Schema = VariableBaseV8Schema.extend({
  type: z49.literal("entityRef"),
  sourceVariableUid: VariableUidSchema.optional(),
  targetsTypes: z49.array(z49.string()).optional(),
  targetsTags: z49.array(TagUidSchema).optional(),
  targetTagsGroup: z49.enum(["every", "some"]).optional(),
  max: z49.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var EntityLookupVariableV9Schema = VariableBaseV8Schema.extend({
  type: z49.literal("entityLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  keyVariableUid: VariableUidSchema.optional(),
  labelVariableUid: VariableUidSchema.optional(),
  multiAggregator: z49.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z49.string().optional()
});
var VariableV9Schema = z49.discriminatedUnion("type", [
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

// src/models/variable.v10.schema.ts
import { z as z50 } from "zod";
var VariableUpdateV26Schema = z50.object({
  variableUid: VariableUidSchema,
  formula: z50.string()
});
var ActionRollV26Schema = z50.object({
  key: z50.string(),
  label: z50.string(),
  diceFormula: z50.string()
});
var ActionSectionsV26Schema = z50.object({
  rolls: z50.array(ActionRollV26Schema).optional(),
  updates: z50.array(VariableUpdateV26Schema).optional(),
  log: z50.string().optional()
});
var RollVariableV10Schema = RollVariableV8Schema.merge(
  ActionSectionsV26Schema
);
var VariableV10Schema = z50.discriminatedUnion("type", [
  NumberVariableV8Schema,
  TextVariableV8Schema,
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  FormulaVariableV8Schema,
  RollVariableV10Schema,
  DataTableRefVariableV8Schema,
  DataTableLookupVariableV8Schema,
  ImageVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
  EntityRefVariableV9Schema,
  EntityLookupVariableV9Schema
]);

// src/models/variable.v11.schema.ts
var VariableLabelV27Schema = z51.object({
  label: TranslatableTextV2Schema.optional()
});
var ChoiceOptionV27Schema = ChoiceOptionV1Schema.extend({
  label: TranslatableTextV2Schema
});
var NumberVariableV11Schema = NumberVariableV8Schema.merge(
  VariableLabelV27Schema
);
var TextVariableV11Schema = TextVariableV8Schema.merge(
  VariableLabelV27Schema
);
var BooleanVariableV11Schema = BooleanVariableV8Schema.merge(
  VariableLabelV27Schema
);
var ChoiceVariableV11Schema = ChoiceVariableV8Schema.merge(
  VariableLabelV27Schema
).extend({
  options: z51.array(ChoiceOptionV27Schema).optional()
});
var FormulaVariableV11Schema = FormulaVariableV8Schema.merge(
  VariableLabelV27Schema
);
var RollVariableV11Schema = RollVariableV10Schema.merge(
  VariableLabelV27Schema
);
var DataTableRefVariableV11Schema = DataTableRefVariableV8Schema.merge(
  VariableLabelV27Schema
);
var DataTableLookupVariableV11Schema = DataTableLookupVariableV8Schema.merge(VariableLabelV27Schema);
var ImageVariableV11Schema = ImageVariableV8Schema.merge(
  VariableLabelV27Schema
);
var DataTableDirectLookupVariableV11Schema = DataTableDirectLookupVariableV8Schema.merge(VariableLabelV27Schema);
var EntityRefVariableV11Schema = EntityRefVariableV9Schema.merge(
  VariableLabelV27Schema
);
var EntityLookupVariableV11Schema = EntityLookupVariableV9Schema.merge(
  VariableLabelV27Schema
);
var VariableV11Schema = z51.discriminatedUnion("type", [
  NumberVariableV11Schema,
  TextVariableV11Schema,
  BooleanVariableV11Schema,
  ChoiceVariableV11Schema,
  FormulaVariableV11Schema,
  RollVariableV11Schema,
  DataTableRefVariableV11Schema,
  DataTableLookupVariableV11Schema,
  ImageVariableV11Schema,
  DataTableDirectLookupVariableV11Schema,
  EntityRefVariableV11Schema,
  EntityLookupVariableV11Schema
]);

// src/models/data-table.v4.schema.ts
var DataTableColumnChoiceV4Schema = DataTableColumnChoiceV2Schema.extend({
  options: z52.array(ChoiceOptionV27Schema).optional()
});
var DataTableColumnV4Schema = z52.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV4Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableV4Schema = z52.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z52.string().optional(),
  weight: z52.number().optional(),
  adminOnly: z52.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z52.array(DataTableColumnV4Schema).default([]),
  rows: z52.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
import { z as z53 } from "zod";
var DatasetTargetV2Schema = z53.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = z53.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z53.number().optional(),
  targets: z53.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: z53.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v3.schema.ts
import { z as z54 } from "zod";
var DialectV3Schema = z54.object({
  uid: DialectUidSchema,
  name: z54.string(),
  fontFamily: z54.string().optional(),
  order: z54.number().optional(),
  spokenByEntitiesUids: z54.array(EntityUidSchema).default([])
});

// src/models/entity.v6.schema.ts
import { z as z61 } from "zod";

// src/mixins/with-scenes.v2.schema.ts
import { z as z55 } from "zod";
var WithScenesV2Schema = z55.object({
  scenesUids: z55.array(SceneUidSchema).default([])
});

// src/models/entity-action.v2.schema.ts
import { z as z56 } from "zod";
var EntityActionV2Schema = z56.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: z56.number().nullable().optional(),
  type: z56.literal("roll"),
  diceFormula: z56.string().optional()
}).merge(ActionSectionsV26Schema);

// src/models/entity.v4.schema.ts
import { z as z60 } from "zod";

// src/models/entity.v3.schema.ts
import { z as z59 } from "zod";

// src/mixins/with-archive.v2.schema.ts
import { z as z57 } from "zod";
var WithArchiveV2Schema = z57.object({
  isArchived: z57.boolean().default(false)
});

// src/mixins/with-pages.v2.schema.ts
import { z as z58 } from "zod";
var WithPagesV2Schema = z58.object({
  pagesOrder: z58.array(PageUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = z59.object({
  uid: EntityUidSchema,
  displayName: z59.string().optional(),
  description: z59.string().optional(),
  tagsUid: z59.array(TagUidSchema).default([]),
  sheetOverrides: z59.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("group"),
  ranks: z59.array(GroupRankV1Schema).default([]),
  charactersUids: z59.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: z59.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: z59.literal("event")
});
var EntityV3Schema = z59.discriminatedUnion("type", [
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
  type: z60.literal("character")
});
var CreatureEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("creature")
});
var GroupEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("group"),
  ranks: z60.array(GroupRankV1Schema).default([]),
  charactersUids: z60.array(EntityUidSchema).default([])
});
var PlaceEntityV4Schema = EntityBaseV4Schema.merge(
  WithScenesV2Schema
).extend({ type: z60.literal("place") });
var ItemEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("item")
});
var NoteEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("note")
});
var AbilityEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("ability")
});
var StoryEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("story")
});
var EventEntityV4Schema = EntityBaseV4Schema.extend({
  type: z60.literal("event")
});
var EntityV4Schema = z60.discriminatedUnion("type", [
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

// src/models/entity.v6.schema.ts
var EntityBaseV6Schema = EntityBaseV4Schema.extend({
  actions: z61.array(EntityActionV2Schema).default([])
});
var CharacterEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("character")
});
var CreatureEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("creature")
});
var GroupEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("group"),
  ranks: z61.array(GroupRankV1Schema).default([]),
  charactersUids: z61.array(EntityUidSchema).default([])
});
var PlaceEntityV6Schema = EntityBaseV6Schema.merge(
  WithScenesV2Schema
).extend({ type: z61.literal("place") });
var ItemEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("item")
});
var NoteEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("note")
});
var AbilityEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("ability")
});
var StoryEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("story")
});
var EventEntityV6Schema = EntityBaseV6Schema.extend({
  type: z61.literal("event")
});
var EntityV6Schema = z61.discriminatedUnion("type", [
  CharacterEntityV6Schema,
  CreatureEntityV6Schema,
  GroupEntityV6Schema,
  PlaceEntityV6Schema,
  ItemEntityV6Schema,
  NoteEntityV6Schema,
  AbilityEntityV6Schema,
  StoryEntityV6Schema,
  EventEntityV6Schema
]);

// src/models/entity-spawn.v1.schema.ts
import { z as z62 } from "zod";
var EntitySpawnV1Schema = z62.object({
  uid: EntitySpawnUidSchema,
  entityUid: EntityUidSchema,
  ownerUid: EntityUidSchema.optional(),
  label: z62.string().optional()
}).merge(WithDataV1Schema);

// src/models/random-table.v7.schema.ts
import { z as z63 } from "zod";
var RandomTableRowV7Schema = z63.object({
  uid: RandomTableRowUidSchema,
  range: z63.number().default(1),
  content: z63.string(),
  randomTableRefs: z63.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = z63.object({
  uid: RandomTableUidSchema,
  title: z63.string(),
  rows: z63.array(RandomTableRowV7Schema).default([]),
  diceFormula: z63.string().optional()
});

// src/models/requirement.v1.schema.ts
import { z as z64 } from "zod";
var ByppFileUrlV1Schema = z64.string().url().refine(
  (url) => {
    try {
      return /\.bypp$/i.test(new URL(url).pathname);
    } catch {
      return false;
    }
  },
  { message: "must be the address of a .bypp file" }
);
var RequirementSourceV1Schema = z64.object({
  byppUrl: ByppFileUrlV1Schema,
  bundleName: z64.string().optional(),
  bundleVersion: z64.string().optional()
});
var RequirementV1Schema = z64.object({
  category: z64.string(),
  uid: z64.string(),
  name: z64.string().optional(),
  from: RequirementSourceV1Schema.optional()
});

// src/models/scene.v2.schema.ts
import { z as z65 } from "zod";
var SceneV2Schema = z65.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: z65.number().optional(),
  lightPositionY: z65.number().optional(),
  lightPositionZ: z65.number().optional(),
  lightIntensity: z65.number().optional(),
  lightColor: z65.string().optional(),
  useCustomLightPosition: z65.boolean().optional(),
  indoorLight: z65.boolean().optional()
});

// src/models/scene-background.v4.schema.ts
import { z as z68 } from "zod";

// src/models/scene-background.v3.schema.ts
import { z as z67 } from "zod";

// src/models/scene-background.v2.schema.ts
import { z as z66 } from "zod";
var SceneBackgroundBaseV2Schema = z66.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z66.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: z66.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z66.literal("customVideo")
});
var SceneBackgroundV2Schema = z66.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: z67.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z67.literal("customVideo")
});
var SceneBackgroundV3Schema = z67.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-background.v4.schema.ts
var CustomImageSceneBackgroundV4Schema = CustomImageSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var CustomVideoSceneBackgroundV4Schema = CustomVideoSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var SceneBackgroundV4Schema = z68.discriminatedUnion("type", [
  CustomImageSceneBackgroundV4Schema,
  CustomVideoSceneBackgroundV4Schema
]);

// src/models/scene-map.v4.schema.ts
import { z as z71 } from "zod";

// src/models/scene-map.v3.schema.ts
import { z as z70 } from "zod";

// src/models/scene-map.v2.schema.ts
import { z as z69 } from "zod";
var KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"];
var SceneMapBaseV2Schema = z69.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: z69.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z69.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z69.literal("customVideo")
});
var SceneMapV2Schema = z69.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: z70.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z70.literal("customVideo")
});
var SceneMapV3Schema = z70.discriminatedUnion("type", [
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
var SceneMapV4Schema = z71.discriminatedUnion("type", [
  CustomImageSceneMapV4Schema,
  CustomVideoSceneMapV4Schema
]);

// src/models/sheet.v5.schema.ts
import { z as z76 } from "zod";

// src/mixins/with-style.v3.schema.ts
import { z as z73 } from "zod";

// src/mixins/with-style.v2.schema.ts
import { z as z72 } from "zod";
var ObjectFitV6Schema = z72.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = z72.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = z72.object({
  justifyContent: z72.string().optional(),
  alignItems: z72.string().optional(),
  flexDirection: z72.string().optional(),
  lineHeight: z72.number().optional(),
  fontFamilyId: z72.string().optional(),
  fontScale: z72.number().optional(),
  color: z72.string().optional(),
  paddingTop: z72.number().optional(),
  paddingRight: z72.number().optional(),
  paddingBottom: z72.number().optional(),
  paddingLeft: z72.number().optional(),
  // New in v2:
  borderWidth: z72.number().optional(),
  borderStyle: z72.string().optional(),
  borderColor: z72.string().optional(),
  borderRadius: z72.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = z72.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: z73.number().optional()
}).nullable().optional();
var WithStyleV3Schema = z73.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
import { z as z75 } from "zod";

// src/models/sheet.v3.schema.ts
import { z as z74 } from "zod";
var SheetV3Schema = z74.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z74.string().optional(),
  widgetUids: z74.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: z75.record(z75.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: z76.record(z76.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/sheet.v7.schema.ts
var SheetV7Schema = SheetV6Schema.merge(WithCreditV1Schema);

// src/models/tag.v2.schema.ts
import { z as z77 } from "zod";
var TagV2Schema = z77.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z77.boolean().default(false)
});

// src/models/tag.v3.schema.ts
var TagV3Schema = TagV2Schema.merge(WithIconV1Schema);

// src/models/tag-category.v2.schema.ts
var TagCategoryV2Schema = TagCategoryV1Schema.merge(WithIconV1Schema);

// src/models/theme.v25.schema.ts
import { z as z81 } from "zod";

// src/mixins/with-style.v6.schema.ts
import { z as z80 } from "zod";

// src/mixins/with-style.v5.schema.ts
import { z as z79 } from "zod";

// src/mixins/with-style.v4.schema.ts
import { z as z78 } from "zod";
var StyleV4Schema = StyleV3Schema.unwrap().unwrap().extend({
  fontWeight: z78.string().optional(),
  fontStyle: z78.string().optional()
}).nullable().optional();
var WithStyleV4Schema = z78.object({
  style: StyleV4Schema
});

// src/mixins/with-style.v5.schema.ts
var StyleV5Schema = StyleV4Schema.unwrap().unwrap().extend({
  marginTop: z79.number().optional(),
  marginRight: z79.number().optional(),
  marginBottom: z79.number().optional(),
  marginLeft: z79.number().optional(),
  backgroundColor: z79.string().optional(),
  textDecoration: z79.string().optional(),
  backgroundRepeat: z79.boolean().optional()
}).nullable().optional();
var WithStyleV5Schema = z79.object({
  style: StyleV5Schema
});

// src/mixins/with-style.v6.schema.ts
var SideV6Schema = z80.number();
var SidesV6Schema = z80.union([
  SideV6Schema,
  z80.array(SideV6Schema).refine((sides) => sides.length === 2 || sides.length === 4, {
    message: "two values for vertical and horizontal, or four clockwise"
  })
]);
var StyleV6Schema = StyleV5Schema.unwrap().unwrap().extend({
  margin: SidesV6Schema.optional(),
  padding: SidesV6Schema.optional(),
  borderWidth: SidesV6Schema.optional()
}).nullable().optional();
var WithStyleV6Schema = z80.object({
  style: StyleV6Schema
});

// src/models/theme.v25.schema.ts
var ThemeStyleV25Schema = StyleV6Schema.unwrap().unwrap();
var ThemeTagStyleV25Schema = z81.object({
  tagUid: TagUidSchema,
  style: ThemeStyleV25Schema
});
var ThemeV25Schema = z81.object({
  slug: z81.string().optional(),
  elements: z81.record(z81.string(), ThemeStyleV25Schema).default({}),
  tagStyles: z81.array(ThemeTagStyleV25Schema).default([])
});

// src/models/variable.v12.schema.ts
import { z as z82 } from "zod";
var EntitySpawnRefVariableV12Schema = EntityRefVariableV9Schema.merge(
  VariableLabelV27Schema
).extend({
  type: z82.literal("entitySpawnRef")
});
var VariableV12Schema = z82.discriminatedUnion("type", [
  NumberVariableV11Schema,
  TextVariableV11Schema,
  BooleanVariableV11Schema,
  ChoiceVariableV11Schema,
  FormulaVariableV11Schema,
  RollVariableV11Schema,
  DataTableRefVariableV11Schema,
  DataTableLookupVariableV11Schema,
  ImageVariableV11Schema,
  DataTableDirectLookupVariableV11Schema,
  EntityRefVariableV11Schema,
  EntityLookupVariableV11Schema,
  EntitySpawnRefVariableV12Schema
]);

// src/models/widget.v13.schema.ts
import { z as z90 } from "zod";

// src/models/widget.v6.schema.ts
import { z as z85 } from "zod";

// src/models/widget.v5.schema.ts
import { z as z84 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z83 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z83.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = z84.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z84.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z84.discriminatedUnion("type", [
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
var WidgetV6Schema = z85.discriminatedUnion("type", [
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
import { z as z86 } from "zod";
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: z86.literal("wheel"),
  readingPosition: z86.string().optional(),
  labelOrientation: z86.string().optional(),
  radius: z86.number().optional()
});
var WidgetV7Schema = z86.discriminatedUnion("type", [
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
import { z as z87 } from "zod";
var WithWidgetActionsV8Schema = z87.object({
  actionsVariablesUids: z87.array(VariableUidSchema).optional()
});
var WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).merge(WithWidgetActionsV8Schema).extend({
  type: z87.literal("actionRoll")
});
var WidgetV8Schema = z87.discriminatedUnion("type", [
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
import { z as z88 } from "zod";
var WidgetActionRollV9Schema = WidgetActionRollV8Schema.merge(WithCreditV1Schema);
var WidgetV9Schema = z88.discriminatedUnion("type", [
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
import { z as z89 } from "zod";
var WidgetEntityGridV10Schema = WidgetBaseV1Schema.extend({
  type: z89.literal("entityGrid"),
  gapX: z89.number().optional(),
  gapY: z89.number().optional(),
  listOptionStyle: z89.string().optional(),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional(),
  imageWidth: z89.number().optional(),
  imageHeight: z89.number().optional()
}).merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema);
var WidgetV10Schema = z89.discriminatedUnion("type", [
  ...WidgetV9Schema.options,
  WidgetEntityGridV10Schema
]);

// src/models/widget.v13.schema.ts
var WidgetV13Schema = z90.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPipsV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBarV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithStyleV6Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetActionRollV9Schema.merge(WithStyleV6Schema),
  WidgetEntityGridV10Schema.merge(WithStyleV6Schema)
]);

// src/schemas/bypp.v4.schema.ts
import { z as z94 } from "zod";

// src/models/dialect.v2.schema.ts
import { z as z91 } from "zod";
var DialectFontV2Schema = z91.object({
  fontFamily: z91.string(),
  fontUrl: z91.string().url()
});
var DialectV2Schema = z91.object({
  uid: DialectUidSchema,
  name: z91.string(),
  font: DialectFontV2Schema,
  order: z91.number().optional(),
  spokenByEntitiesUids: z91.array(EntityUidSchema).default([])
});

// src/models/entity.v2.schema.ts
import { z as z92 } from "zod";
var EntityBaseV2Schema = z92.object({
  uid: EntityUidSchema,
  displayName: z92.string().optional(),
  description: z92.string().optional(),
  tagsUid: z92.array(TagUidSchema).default([]),
  sheetOverrides: z92.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("group"),
  ranks: z92.array(GroupRankV1Schema).default([]),
  charactersUids: z92.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: z92.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z92.literal("event")
});
var EntityV2Schema = z92.discriminatedUnion("type", [
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
import { z as z93 } from "zod";
var RandomTableRowV2Schema = z93.object({
  uid: RandomTableRowUidSchema,
  range: z93.number().default(1),
  content: z93.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z93.object({
  uid: RandomTableUidSchema,
  title: z93.string(),
  rows: z93.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z94.object({
  bundleName: z94.string().min(1),
  authorName: z94.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z94.string().url().optional()
});
var BeyondPaperV4Schema = z94.object({
  // Format metadata
  version: z94.literal(4),
  format: z94.literal("bypp"),
  // Bundle metadata
  name: z94.string(),
  exportedAt: z94.string(),
  bundleVersion: z94.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z94.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z94.array(z94.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z94.array(DialectV2Schema).default([]),
  entities: z94.array(EntityV2Schema).default([]),
  pages: z94.array(PageV1Schema).default([]),
  chunks: z94.array(ChunkV2Schema).default([]),
  datasets: z94.array(DatasetV2Schema).default([]),
  variables: z94.array(VariableV2Schema).default([]),
  widgets: z94.array(WidgetV1Schema).default([]),
  sheets: z94.array(SheetV3Schema).default([]),
  dataTables: z94.array(DataTableV3Schema).default([]),
  randomTables: z94.array(RandomTableV2Schema).default([]),
  tags: z94.array(TagV2Schema).default([]),
  tagCategories: z94.array(TagCategoryV1Schema).default([]),
  scenes: z94.array(SceneV2Schema).default([]),
  sceneMaps: z94.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z94.array(SceneBackgroundV2Schema).default([]),
  assets: z94.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v28.schema.ts
var BeyondPaperV28Schema = z95.object({
  // Format metadata
  version: z95.literal(28),
  format: z95.literal("bypp"),
  // Bundle metadata
  name: z95.string(),
  exportedAt: z95.string(),
  bundleVersion: z95.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z95.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z95.array(z95.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z95.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z95.array(DialectV3Schema).default([]),
  entities: z95.array(EntityV6Schema).default([]),
  // Copies of entities, each over its model (see `entity-spawn.v1.schema`).
  // Absent from every document produced before v28.
  entitySpawns: z95.array(EntitySpawnV1Schema).default([]),
  pages: z95.array(PageV1Schema).default([]),
  chunks: z95.array(ChunkV12Schema).default([]),
  datasets: z95.array(DatasetV2Schema).default([]),
  variables: z95.array(VariableV12Schema).default([]),
  widgets: z95.array(WidgetV13Schema).default([]),
  sheets: z95.array(SheetV7Schema).default([]),
  dataTables: z95.array(DataTableV4Schema).default([]),
  randomTables: z95.array(RandomTableV7Schema).default([]),
  tags: z95.array(TagV3Schema).default([]),
  tagCategories: z95.array(TagCategoryV2Schema).default([]),
  scenes: z95.array(SceneV2Schema).default([]),
  sceneMaps: z95.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z95.array(SceneBackgroundV4Schema).default([]),
  assets: z95.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z96 } from "zod";
var BeyondPaperV1Schema = z96.object({
  // Format metadata
  version: z96.literal(1),
  format: z96.literal("bypp"),
  // Bundle metadata
  name: z96.string(),
  exportedAt: z96.string(),
  bundleVersion: z96.string(),
  // Content
  dialects: z96.array(DialectV1Schema),
  entities: z96.array(EntityV1Schema),
  pages: z96.array(PageV1Schema),
  chunks: z96.array(ChunkV1Schema),
  datasets: z96.array(DatasetV1Schema),
  variables: z96.array(VariableV1Schema),
  widgets: z96.array(WidgetV1Schema),
  randomTables: z96.array(RandomTableV1Schema),
  tags: z96.array(TagV1Schema),
  tagCategories: z96.array(TagCategoryV1Schema),
  scenes: z96.array(SceneV1Schema),
  sceneMaps: z96.array(SceneMapV1Schema),
  sceneBackgrounds: z96.array(SceneBackgroundV1Schema),
  assets: z96.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z97 } from "zod";
var BeyondPaperV2Schema = z97.object({
  // Format metadata
  version: z97.literal(2),
  format: z97.literal("bypp"),
  // Bundle metadata
  name: z97.string(),
  exportedAt: z97.string(),
  bundleVersion: z97.string(),
  // Content
  dialects: z97.array(DialectV1Schema),
  entities: z97.array(EntityV1Schema),
  pages: z97.array(PageV1Schema),
  chunks: z97.array(ChunkV1Schema),
  datasets: z97.array(DatasetV1Schema),
  variables: z97.array(VariableV2Schema),
  widgets: z97.array(WidgetV1Schema),
  sheets: z97.array(SheetV2Schema),
  dataTables: z97.array(DataTableV2Schema),
  randomTables: z97.array(RandomTableV1Schema),
  tags: z97.array(TagV1Schema),
  tagCategories: z97.array(TagCategoryV1Schema),
  scenes: z97.array(SceneV1Schema),
  sceneMaps: z97.array(SceneMapV1Schema),
  sceneBackgrounds: z97.array(SceneBackgroundV1Schema),
  assets: z97.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z98 } from "zod";
var BeyondPaperV5Schema = z98.object({
  // Format metadata
  version: z98.literal(5),
  format: z98.literal("bypp"),
  // Bundle metadata
  name: z98.string(),
  exportedAt: z98.string(),
  bundleVersion: z98.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z98.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z98.array(z98.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z98.array(DialectV2Schema).default([]),
  entities: z98.array(EntityV2Schema).default([]),
  pages: z98.array(PageV1Schema).default([]),
  chunks: z98.array(ChunkV2Schema).default([]),
  datasets: z98.array(DatasetV2Schema).default([]),
  variables: z98.array(VariableV5Schema).default([]),
  widgets: z98.array(WidgetV5Schema).default([]),
  sheets: z98.array(SheetV3Schema).default([]),
  dataTables: z98.array(DataTableV3Schema).default([]),
  randomTables: z98.array(RandomTableV2Schema).default([]),
  tags: z98.array(TagV2Schema).default([]),
  tagCategories: z98.array(TagCategoryV1Schema).default([]),
  scenes: z98.array(SceneV2Schema).default([]),
  sceneMaps: z98.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z98.array(SceneBackgroundV2Schema).default([]),
  assets: z98.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
import { z as z99 } from "zod";
var BeyondPaperV6Schema = z99.object({
  // Format metadata
  version: z99.literal(6),
  format: z99.literal("bypp"),
  // Bundle metadata
  name: z99.string(),
  exportedAt: z99.string(),
  bundleVersion: z99.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z99.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z99.array(z99.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z99.array(DialectV2Schema).default([]),
  entities: z99.array(EntityV2Schema).default([]),
  pages: z99.array(PageV1Schema).default([]),
  chunks: z99.array(ChunkV2Schema).default([]),
  datasets: z99.array(DatasetV2Schema).default([]),
  variables: z99.array(VariableV6Schema).default([]),
  widgets: z99.array(WidgetV5Schema).default([]),
  sheets: z99.array(SheetV3Schema).default([]),
  dataTables: z99.array(DataTableV3Schema).default([]),
  randomTables: z99.array(RandomTableV2Schema).default([]),
  tags: z99.array(TagV2Schema).default([]),
  tagCategories: z99.array(TagCategoryV1Schema).default([]),
  scenes: z99.array(SceneV2Schema).default([]),
  sceneMaps: z99.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z99.array(SceneBackgroundV2Schema).default([]),
  assets: z99.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
import { z as z100 } from "zod";
var BeyondPaperV7Schema = z100.object({
  // Format metadata
  version: z100.literal(7),
  format: z100.literal("bypp"),
  // Bundle metadata
  name: z100.string(),
  exportedAt: z100.string(),
  bundleVersion: z100.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z100.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z100.array(z100.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z100.array(DialectV2Schema).default([]),
  entities: z100.array(EntityV2Schema).default([]),
  pages: z100.array(PageV1Schema).default([]),
  chunks: z100.array(ChunkV2Schema).default([]),
  datasets: z100.array(DatasetV2Schema).default([]),
  variables: z100.array(VariableV6Schema).default([]),
  widgets: z100.array(WidgetV5Schema).default([]),
  sheets: z100.array(SheetV3Schema).default([]),
  dataTables: z100.array(DataTableV3Schema).default([]),
  randomTables: z100.array(RandomTableV7Schema).default([]),
  tags: z100.array(TagV2Schema).default([]),
  tagCategories: z100.array(TagCategoryV1Schema).default([]),
  scenes: z100.array(SceneV2Schema).default([]),
  sceneMaps: z100.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z100.array(SceneBackgroundV2Schema).default([]),
  assets: z100.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
import { z as z101 } from "zod";
var BeyondPaperV8Schema = z101.object({
  // Format metadata
  version: z101.literal(8),
  format: z101.literal("bypp"),
  // Bundle metadata
  name: z101.string(),
  exportedAt: z101.string(),
  bundleVersion: z101.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z101.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z101.array(z101.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z101.array(DialectV2Schema).default([]),
  entities: z101.array(EntityV2Schema).default([]),
  pages: z101.array(PageV1Schema).default([]),
  chunks: z101.array(ChunkV2Schema).default([]),
  datasets: z101.array(DatasetV2Schema).default([]),
  variables: z101.array(VariableV6Schema).default([]),
  widgets: z101.array(WidgetV6Schema).default([]),
  sheets: z101.array(SheetV4Schema).default([]),
  dataTables: z101.array(DataTableV3Schema).default([]),
  randomTables: z101.array(RandomTableV7Schema).default([]),
  tags: z101.array(TagV2Schema).default([]),
  tagCategories: z101.array(TagCategoryV1Schema).default([]),
  scenes: z101.array(SceneV2Schema).default([]),
  sceneMaps: z101.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z101.array(SceneBackgroundV2Schema).default([]),
  assets: z101.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
import { z as z102 } from "zod";
var BeyondPaperV9Schema = z102.object({
  // Format metadata
  version: z102.literal(9),
  format: z102.literal("bypp"),
  // Bundle metadata
  name: z102.string(),
  exportedAt: z102.string(),
  bundleVersion: z102.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z102.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z102.array(z102.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z102.array(DialectV2Schema).default([]),
  entities: z102.array(EntityV2Schema).default([]),
  pages: z102.array(PageV1Schema).default([]),
  chunks: z102.array(ChunkV2Schema).default([]),
  datasets: z102.array(DatasetV2Schema).default([]),
  variables: z102.array(VariableV7Schema).default([]),
  widgets: z102.array(WidgetV7Schema).default([]),
  sheets: z102.array(SheetV5Schema).default([]),
  dataTables: z102.array(DataTableV3Schema).default([]),
  randomTables: z102.array(RandomTableV7Schema).default([]),
  tags: z102.array(TagV2Schema).default([]),
  tagCategories: z102.array(TagCategoryV1Schema).default([]),
  scenes: z102.array(SceneV2Schema).default([]),
  sceneMaps: z102.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z102.array(SceneBackgroundV2Schema).default([]),
  assets: z102.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
import { z as z103 } from "zod";
var BeyondPaperV10Schema = z103.object({
  // Format metadata
  version: z103.literal(10),
  format: z103.literal("bypp"),
  // Bundle metadata
  name: z103.string(),
  exportedAt: z103.string(),
  bundleVersion: z103.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z103.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z103.array(z103.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z103.array(DialectV2Schema).default([]),
  entities: z103.array(EntityV3Schema).default([]),
  pages: z103.array(PageV1Schema).default([]),
  chunks: z103.array(ChunkV2Schema).default([]),
  datasets: z103.array(DatasetV2Schema).default([]),
  variables: z103.array(VariableV7Schema).default([]),
  widgets: z103.array(WidgetV7Schema).default([]),
  sheets: z103.array(SheetV6Schema).default([]),
  dataTables: z103.array(DataTableV3Schema).default([]),
  randomTables: z103.array(RandomTableV7Schema).default([]),
  tags: z103.array(TagV2Schema).default([]),
  tagCategories: z103.array(TagCategoryV1Schema).default([]),
  scenes: z103.array(SceneV2Schema).default([]),
  sceneMaps: z103.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z103.array(SceneBackgroundV3Schema).default([]),
  assets: z103.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v11.schema.ts
import { z as z104 } from "zod";
var BeyondPaperV11Schema = z104.object({
  // Format metadata
  version: z104.literal(11),
  format: z104.literal("bypp"),
  // Bundle metadata
  name: z104.string(),
  exportedAt: z104.string(),
  bundleVersion: z104.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z104.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z104.array(z104.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z104.array(DialectV2Schema).default([]),
  entities: z104.array(EntityV3Schema).default([]),
  pages: z104.array(PageV1Schema).default([]),
  chunks: z104.array(ChunkV11Schema).default([]),
  datasets: z104.array(DatasetV2Schema).default([]),
  variables: z104.array(VariableV7Schema).default([]),
  widgets: z104.array(WidgetV7Schema).default([]),
  sheets: z104.array(SheetV6Schema).default([]),
  dataTables: z104.array(DataTableV3Schema).default([]),
  randomTables: z104.array(RandomTableV7Schema).default([]),
  tags: z104.array(TagV2Schema).default([]),
  tagCategories: z104.array(TagCategoryV1Schema).default([]),
  scenes: z104.array(SceneV2Schema).default([]),
  sceneMaps: z104.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z104.array(SceneBackgroundV3Schema).default([]),
  assets: z104.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v12.schema.ts
import { z as z105 } from "zod";
var BeyondPaperV12Schema = z105.object({
  // Format metadata
  version: z105.literal(12),
  format: z105.literal("bypp"),
  // Bundle metadata
  name: z105.string(),
  exportedAt: z105.string(),
  bundleVersion: z105.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z105.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z105.array(z105.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z105.array(DialectV2Schema).default([]),
  entities: z105.array(EntityV3Schema).default([]),
  pages: z105.array(PageV1Schema).default([]),
  chunks: z105.array(ChunkV11Schema).default([]),
  datasets: z105.array(DatasetV2Schema).default([]),
  variables: z105.array(VariableV7Schema).default([]),
  widgets: z105.array(WidgetV8Schema).default([]),
  sheets: z105.array(SheetV6Schema).default([]),
  dataTables: z105.array(DataTableV3Schema).default([]),
  randomTables: z105.array(RandomTableV7Schema).default([]),
  tags: z105.array(TagV2Schema).default([]),
  tagCategories: z105.array(TagCategoryV1Schema).default([]),
  scenes: z105.array(SceneV2Schema).default([]),
  sceneMaps: z105.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z105.array(SceneBackgroundV3Schema).default([]),
  assets: z105.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v13.schema.ts
import { z as z106 } from "zod";
var BeyondPaperV13Schema = z106.object({
  // Format metadata
  version: z106.literal(13),
  format: z106.literal("bypp"),
  // Bundle metadata
  name: z106.string(),
  exportedAt: z106.string(),
  bundleVersion: z106.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z106.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z106.array(z106.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z106.array(DialectV2Schema).default([]),
  entities: z106.array(EntityV4Schema).default([]),
  pages: z106.array(PageV1Schema).default([]),
  chunks: z106.array(ChunkV11Schema).default([]),
  datasets: z106.array(DatasetV2Schema).default([]),
  variables: z106.array(VariableV7Schema).default([]),
  widgets: z106.array(WidgetV9Schema).default([]),
  sheets: z106.array(SheetV7Schema).default([]),
  dataTables: z106.array(DataTableV3Schema).default([]),
  randomTables: z106.array(RandomTableV7Schema).default([]),
  tags: z106.array(TagV2Schema).default([]),
  tagCategories: z106.array(TagCategoryV1Schema).default([]),
  scenes: z106.array(SceneV2Schema).default([]),
  sceneMaps: z106.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z106.array(SceneBackgroundV4Schema).default([]),
  assets: z106.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v14.schema.ts
import { z as z107 } from "zod";
var BeyondPaperV14Schema = z107.object({
  // Format metadata
  version: z107.literal(14),
  format: z107.literal("bypp"),
  // Bundle metadata
  name: z107.string(),
  exportedAt: z107.string(),
  bundleVersion: z107.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z107.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z107.array(z107.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z107.array(DialectV2Schema).default([]),
  entities: z107.array(EntityV4Schema).default([]),
  pages: z107.array(PageV1Schema).default([]),
  chunks: z107.array(ChunkV11Schema).default([]),
  datasets: z107.array(DatasetV2Schema).default([]),
  variables: z107.array(VariableV7Schema).default([]),
  widgets: z107.array(WidgetV9Schema).default([]),
  sheets: z107.array(SheetV7Schema).default([]),
  dataTables: z107.array(DataTableV3Schema).default([]),
  randomTables: z107.array(RandomTableV7Schema).default([]),
  tags: z107.array(TagV2Schema).default([]),
  tagCategories: z107.array(TagCategoryV1Schema).default([]),
  scenes: z107.array(SceneV2Schema).default([]),
  sceneMaps: z107.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z107.array(SceneBackgroundV4Schema).default([]),
  assets: z107.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v15.schema.ts
import { z as z108 } from "zod";
var BeyondPaperV15Schema = z108.object({
  // Format metadata
  version: z108.literal(15),
  format: z108.literal("bypp"),
  // Bundle metadata
  name: z108.string(),
  exportedAt: z108.string(),
  bundleVersion: z108.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z108.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z108.array(z108.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z108.array(DialectV3Schema).default([]),
  entities: z108.array(EntityV4Schema).default([]),
  pages: z108.array(PageV1Schema).default([]),
  chunks: z108.array(ChunkV11Schema).default([]),
  datasets: z108.array(DatasetV2Schema).default([]),
  variables: z108.array(VariableV7Schema).default([]),
  widgets: z108.array(WidgetV9Schema).default([]),
  sheets: z108.array(SheetV7Schema).default([]),
  dataTables: z108.array(DataTableV3Schema).default([]),
  randomTables: z108.array(RandomTableV7Schema).default([]),
  tags: z108.array(TagV2Schema).default([]),
  tagCategories: z108.array(TagCategoryV1Schema).default([]),
  scenes: z108.array(SceneV2Schema).default([]),
  sceneMaps: z108.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z108.array(SceneBackgroundV4Schema).default([]),
  assets: z108.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v16.schema.ts
import { z as z109 } from "zod";
var BeyondPaperV16Schema = z109.object({
  // Format metadata
  version: z109.literal(16),
  format: z109.literal("bypp"),
  // Bundle metadata
  name: z109.string(),
  exportedAt: z109.string(),
  bundleVersion: z109.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z109.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z109.array(z109.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z109.array(DialectV3Schema).default([]),
  entities: z109.array(EntityV4Schema).default([]),
  pages: z109.array(PageV1Schema).default([]),
  chunks: z109.array(ChunkV11Schema).default([]),
  datasets: z109.array(DatasetV2Schema).default([]),
  variables: z109.array(VariableV8Schema).default([]),
  widgets: z109.array(WidgetV9Schema).default([]),
  sheets: z109.array(SheetV7Schema).default([]),
  dataTables: z109.array(DataTableV3Schema).default([]),
  randomTables: z109.array(RandomTableV7Schema).default([]),
  tags: z109.array(TagV2Schema).default([]),
  tagCategories: z109.array(TagCategoryV1Schema).default([]),
  scenes: z109.array(SceneV2Schema).default([]),
  sceneMaps: z109.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z109.array(SceneBackgroundV4Schema).default([]),
  assets: z109.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v17.schema.ts
import { z as z110 } from "zod";
var BeyondPaperV17Schema = z110.object({
  // Format metadata
  version: z110.literal(17),
  format: z110.literal("bypp"),
  // Bundle metadata
  name: z110.string(),
  exportedAt: z110.string(),
  bundleVersion: z110.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z110.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z110.array(z110.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z110.array(DialectV3Schema).default([]),
  entities: z110.array(EntityV4Schema).default([]),
  pages: z110.array(PageV1Schema).default([]),
  chunks: z110.array(ChunkV11Schema).default([]),
  datasets: z110.array(DatasetV2Schema).default([]),
  variables: z110.array(VariableV8Schema).default([]),
  widgets: z110.array(WidgetV9Schema).default([]),
  sheets: z110.array(SheetV7Schema).default([]),
  dataTables: z110.array(DataTableV3Schema).default([]),
  randomTables: z110.array(RandomTableV7Schema).default([]),
  tags: z110.array(TagV3Schema).default([]),
  tagCategories: z110.array(TagCategoryV2Schema).default([]),
  scenes: z110.array(SceneV2Schema).default([]),
  sceneMaps: z110.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z110.array(SceneBackgroundV4Schema).default([]),
  assets: z110.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v18.schema.ts
import { z as z111 } from "zod";
var BeyondPaperV18Schema = z111.object({
  // Format metadata
  version: z111.literal(18),
  format: z111.literal("bypp"),
  // Bundle metadata
  name: z111.string(),
  exportedAt: z111.string(),
  bundleVersion: z111.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z111.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z111.array(z111.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z111.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z111.array(DialectV3Schema).default([]),
  entities: z111.array(EntityV4Schema).default([]),
  pages: z111.array(PageV1Schema).default([]),
  chunks: z111.array(ChunkV11Schema).default([]),
  datasets: z111.array(DatasetV2Schema).default([]),
  variables: z111.array(VariableV8Schema).default([]),
  widgets: z111.array(WidgetV9Schema).default([]),
  sheets: z111.array(SheetV7Schema).default([]),
  dataTables: z111.array(DataTableV3Schema).default([]),
  randomTables: z111.array(RandomTableV7Schema).default([]),
  tags: z111.array(TagV3Schema).default([]),
  tagCategories: z111.array(TagCategoryV2Schema).default([]),
  scenes: z111.array(SceneV2Schema).default([]),
  sceneMaps: z111.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z111.array(SceneBackgroundV4Schema).default([]),
  assets: z111.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v19.schema.ts
import { z as z112 } from "zod";
var BeyondPaperV19Schema = z112.object({
  // Format metadata
  version: z112.literal(19),
  format: z112.literal("bypp"),
  // Bundle metadata
  name: z112.string(),
  exportedAt: z112.string(),
  bundleVersion: z112.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z112.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z112.array(z112.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z112.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z112.array(DialectV3Schema).default([]),
  entities: z112.array(EntityV4Schema).default([]),
  pages: z112.array(PageV1Schema).default([]),
  chunks: z112.array(ChunkV11Schema).default([]),
  datasets: z112.array(DatasetV2Schema).default([]),
  variables: z112.array(VariableV9Schema).default([]),
  widgets: z112.array(WidgetV10Schema).default([]),
  sheets: z112.array(SheetV7Schema).default([]),
  dataTables: z112.array(DataTableV3Schema).default([]),
  randomTables: z112.array(RandomTableV7Schema).default([]),
  tags: z112.array(TagV3Schema).default([]),
  tagCategories: z112.array(TagCategoryV2Schema).default([]),
  scenes: z112.array(SceneV2Schema).default([]),
  sceneMaps: z112.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z112.array(SceneBackgroundV4Schema).default([]),
  assets: z112.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v20.schema.ts
import { z as z115 } from "zod";

// src/models/entity.v5.schema.ts
import { z as z114 } from "zod";

// src/models/entity-action.v1.schema.ts
import { z as z113 } from "zod";
var EntityActionV1Schema = z113.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: z113.number().nullable().optional(),
  type: z113.literal("roll"),
  diceFormula: z113.string().optional()
});

// src/models/entity.v5.schema.ts
var EntityBaseV5Schema = EntityBaseV4Schema.extend({
  actions: z114.array(EntityActionV1Schema).default([])
});
var CharacterEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("character")
});
var CreatureEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("creature")
});
var GroupEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("group"),
  ranks: z114.array(GroupRankV1Schema).default([]),
  charactersUids: z114.array(EntityUidSchema).default([])
});
var PlaceEntityV5Schema = EntityBaseV5Schema.merge(
  WithScenesV2Schema
).extend({ type: z114.literal("place") });
var ItemEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("item")
});
var NoteEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("note")
});
var AbilityEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("ability")
});
var StoryEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("story")
});
var EventEntityV5Schema = EntityBaseV5Schema.extend({
  type: z114.literal("event")
});
var EntityV5Schema = z114.discriminatedUnion("type", [
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

// src/schemas/bypp.v20.schema.ts
var BeyondPaperV20Schema = z115.object({
  // Format metadata
  version: z115.literal(20),
  format: z115.literal("bypp"),
  // Bundle metadata
  name: z115.string(),
  exportedAt: z115.string(),
  bundleVersion: z115.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z115.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z115.array(z115.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z115.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z115.array(DialectV3Schema).default([]),
  entities: z115.array(EntityV5Schema).default([]),
  pages: z115.array(PageV1Schema).default([]),
  chunks: z115.array(ChunkV11Schema).default([]),
  datasets: z115.array(DatasetV2Schema).default([]),
  variables: z115.array(VariableV9Schema).default([]),
  widgets: z115.array(WidgetV10Schema).default([]),
  sheets: z115.array(SheetV7Schema).default([]),
  dataTables: z115.array(DataTableV3Schema).default([]),
  randomTables: z115.array(RandomTableV7Schema).default([]),
  tags: z115.array(TagV3Schema).default([]),
  tagCategories: z115.array(TagCategoryV2Schema).default([]),
  scenes: z115.array(SceneV2Schema).default([]),
  sceneMaps: z115.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z115.array(SceneBackgroundV4Schema).default([]),
  assets: z115.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v21.schema.ts
import { z as z116 } from "zod";
var BeyondPaperV21Schema = z116.object({
  // Format metadata
  version: z116.literal(21),
  format: z116.literal("bypp"),
  // Bundle metadata
  name: z116.string(),
  exportedAt: z116.string(),
  bundleVersion: z116.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z116.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z116.array(z116.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z116.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z116.array(DialectV3Schema).default([]),
  entities: z116.array(EntityV5Schema).default([]),
  pages: z116.array(PageV1Schema).default([]),
  chunks: z116.array(ChunkV12Schema).default([]),
  datasets: z116.array(DatasetV2Schema).default([]),
  variables: z116.array(VariableV9Schema).default([]),
  widgets: z116.array(WidgetV10Schema).default([]),
  sheets: z116.array(SheetV7Schema).default([]),
  dataTables: z116.array(DataTableV3Schema).default([]),
  randomTables: z116.array(RandomTableV7Schema).default([]),
  tags: z116.array(TagV3Schema).default([]),
  tagCategories: z116.array(TagCategoryV2Schema).default([]),
  scenes: z116.array(SceneV2Schema).default([]),
  sceneMaps: z116.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z116.array(SceneBackgroundV4Schema).default([]),
  assets: z116.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v22.schema.ts
import { z as z118 } from "zod";

// src/models/widget.v11.schema.ts
import { z as z117 } from "zod";
var WidgetV11Schema = z117.discriminatedUnion("type", [
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

// src/schemas/bypp.v22.schema.ts
var BeyondPaperV22Schema = z118.object({
  // Format metadata
  version: z118.literal(22),
  format: z118.literal("bypp"),
  // Bundle metadata
  name: z118.string(),
  exportedAt: z118.string(),
  bundleVersion: z118.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z118.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z118.array(z118.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z118.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z118.array(DialectV3Schema).default([]),
  entities: z118.array(EntityV5Schema).default([]),
  pages: z118.array(PageV1Schema).default([]),
  chunks: z118.array(ChunkV12Schema).default([]),
  datasets: z118.array(DatasetV2Schema).default([]),
  variables: z118.array(VariableV9Schema).default([]),
  widgets: z118.array(WidgetV11Schema).default([]),
  sheets: z118.array(SheetV7Schema).default([]),
  dataTables: z118.array(DataTableV3Schema).default([]),
  randomTables: z118.array(RandomTableV7Schema).default([]),
  tags: z118.array(TagV3Schema).default([]),
  tagCategories: z118.array(TagCategoryV2Schema).default([]),
  scenes: z118.array(SceneV2Schema).default([]),
  sceneMaps: z118.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z118.array(SceneBackgroundV4Schema).default([]),
  assets: z118.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v23.schema.ts
import { z as z120 } from "zod";

// src/models/widget.v12.schema.ts
import { z as z119 } from "zod";
var WidgetV12Schema = z119.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetPipsV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetBarV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithStyleV5Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema),
  WidgetActionRollV9Schema.merge(WithStyleV5Schema),
  WidgetEntityGridV10Schema.merge(WithStyleV5Schema)
]);

// src/schemas/bypp.v23.schema.ts
var BeyondPaperV23Schema = z120.object({
  // Format metadata
  version: z120.literal(23),
  format: z120.literal("bypp"),
  // Bundle metadata
  name: z120.string(),
  exportedAt: z120.string(),
  bundleVersion: z120.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z120.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z120.array(z120.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z120.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z120.array(DialectV3Schema).default([]),
  entities: z120.array(EntityV5Schema).default([]),
  pages: z120.array(PageV1Schema).default([]),
  chunks: z120.array(ChunkV12Schema).default([]),
  datasets: z120.array(DatasetV2Schema).default([]),
  variables: z120.array(VariableV9Schema).default([]),
  widgets: z120.array(WidgetV12Schema).default([]),
  sheets: z120.array(SheetV7Schema).default([]),
  dataTables: z120.array(DataTableV3Schema).default([]),
  randomTables: z120.array(RandomTableV7Schema).default([]),
  tags: z120.array(TagV3Schema).default([]),
  tagCategories: z120.array(TagCategoryV2Schema).default([]),
  scenes: z120.array(SceneV2Schema).default([]),
  sceneMaps: z120.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z120.array(SceneBackgroundV4Schema).default([]),
  assets: z120.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v24.schema.ts
import { z as z121 } from "zod";
var BeyondPaperV24Schema = z121.object({
  // Format metadata
  version: z121.literal(24),
  format: z121.literal("bypp"),
  // Bundle metadata
  name: z121.string(),
  exportedAt: z121.string(),
  bundleVersion: z121.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z121.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z121.array(z121.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z121.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z121.array(DialectV3Schema).default([]),
  entities: z121.array(EntityV5Schema).default([]),
  pages: z121.array(PageV1Schema).default([]),
  chunks: z121.array(ChunkV12Schema).default([]),
  datasets: z121.array(DatasetV2Schema).default([]),
  variables: z121.array(VariableV9Schema).default([]),
  widgets: z121.array(WidgetV13Schema).default([]),
  sheets: z121.array(SheetV7Schema).default([]),
  dataTables: z121.array(DataTableV3Schema).default([]),
  randomTables: z121.array(RandomTableV7Schema).default([]),
  tags: z121.array(TagV3Schema).default([]),
  tagCategories: z121.array(TagCategoryV2Schema).default([]),
  scenes: z121.array(SceneV2Schema).default([]),
  sceneMaps: z121.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z121.array(SceneBackgroundV4Schema).default([]),
  assets: z121.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v25.schema.ts
import { z as z122 } from "zod";
var BeyondPaperV25Schema = z122.object({
  // Format metadata
  version: z122.literal(25),
  format: z122.literal("bypp"),
  // Bundle metadata
  name: z122.string(),
  exportedAt: z122.string(),
  bundleVersion: z122.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z122.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z122.array(z122.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z122.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25: a document that says nothing here is
  // painted by whatever surrounds it, which is what they all were.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z122.array(DialectV3Schema).default([]),
  entities: z122.array(EntityV5Schema).default([]),
  pages: z122.array(PageV1Schema).default([]),
  chunks: z122.array(ChunkV12Schema).default([]),
  datasets: z122.array(DatasetV2Schema).default([]),
  variables: z122.array(VariableV9Schema).default([]),
  widgets: z122.array(WidgetV13Schema).default([]),
  sheets: z122.array(SheetV7Schema).default([]),
  dataTables: z122.array(DataTableV3Schema).default([]),
  randomTables: z122.array(RandomTableV7Schema).default([]),
  tags: z122.array(TagV3Schema).default([]),
  tagCategories: z122.array(TagCategoryV2Schema).default([]),
  scenes: z122.array(SceneV2Schema).default([]),
  sceneMaps: z122.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z122.array(SceneBackgroundV4Schema).default([]),
  assets: z122.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v26.schema.ts
import { z as z123 } from "zod";
var BeyondPaperV26Schema = z123.object({
  // Format metadata
  version: z123.literal(26),
  format: z123.literal("bypp"),
  // Bundle metadata
  name: z123.string(),
  exportedAt: z123.string(),
  bundleVersion: z123.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z123.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z123.array(z123.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z123.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z123.array(DialectV3Schema).default([]),
  entities: z123.array(EntityV6Schema).default([]),
  pages: z123.array(PageV1Schema).default([]),
  chunks: z123.array(ChunkV12Schema).default([]),
  datasets: z123.array(DatasetV2Schema).default([]),
  variables: z123.array(VariableV10Schema).default([]),
  widgets: z123.array(WidgetV13Schema).default([]),
  sheets: z123.array(SheetV7Schema).default([]),
  dataTables: z123.array(DataTableV3Schema).default([]),
  randomTables: z123.array(RandomTableV7Schema).default([]),
  tags: z123.array(TagV3Schema).default([]),
  tagCategories: z123.array(TagCategoryV2Schema).default([]),
  scenes: z123.array(SceneV2Schema).default([]),
  sceneMaps: z123.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z123.array(SceneBackgroundV4Schema).default([]),
  assets: z123.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v27.schema.ts
import { z as z124 } from "zod";
var BeyondPaperV27Schema = z124.object({
  // Format metadata
  version: z124.literal(27),
  format: z124.literal("bypp"),
  // Bundle metadata
  name: z124.string(),
  exportedAt: z124.string(),
  bundleVersion: z124.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z124.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z124.array(z124.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z124.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z124.array(DialectV3Schema).default([]),
  entities: z124.array(EntityV6Schema).default([]),
  pages: z124.array(PageV1Schema).default([]),
  chunks: z124.array(ChunkV12Schema).default([]),
  datasets: z124.array(DatasetV2Schema).default([]),
  variables: z124.array(VariableV11Schema).default([]),
  widgets: z124.array(WidgetV13Schema).default([]),
  sheets: z124.array(SheetV7Schema).default([]),
  dataTables: z124.array(DataTableV4Schema).default([]),
  randomTables: z124.array(RandomTableV7Schema).default([]),
  tags: z124.array(TagV3Schema).default([]),
  tagCategories: z124.array(TagCategoryV2Schema).default([]),
  scenes: z124.array(SceneV2Schema).default([]),
  sceneMaps: z124.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z124.array(SceneBackgroundV4Schema).default([]),
  assets: z124.array(AssetV3Schema).default([])
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

// src/migrations/v12-to-v13.ts
var v12ToV13 = (v12) => ({
  ...v12,
  version: 13
});

// src/migrations/v13-to-v12.ts
var v13ToV12 = (v13) => ({
  ...v13,
  version: 12,
  assets: v13.assets.map(stripCredit),
  entities: v13.entities.map(stripCredit),
  sceneMaps: v13.sceneMaps.map(stripCredit),
  sceneBackgrounds: v13.sceneBackgrounds.map(stripCredit),
  sheets: v13.sheets.map(stripCredit),
  widgets: v13.widgets.map(stripCredit)
});
var stripCredit = (item) => {
  if (!("credit" in item)) {
    return item;
  }
  const { credit: _credit, ...rest } = item;
  return rest;
};

// src/migrations/v13-to-v14.ts
var v13ToV14 = (v13) => ({
  ...v13,
  version: 14
});

// src/migrations/v14-to-v13.ts
var v14ToV13 = (v14) => {
  const { image: _image, ...rest } = v14;
  return {
    ...rest,
    version: 13
  };
};

// src/migrations/v14-to-v15.ts
var v14ToV15 = (v14) => ({
  ...v14,
  version: 15,
  dialects: v14.dialects.map(({ font, ...rest }) => ({
    ...rest,
    fontFamily: font.fontFamily
  }))
});

// src/migrations/v15-to-v14.ts
var LEGACY_FONT_BASE_URL = "https://harpy.gg/assets/fonts";
var v15ToV14 = (v15) => ({
  ...v15,
  version: 14,
  dialects: v15.dialects.flatMap(
    ({ fontFamily, ...rest }) => fontFamily === void 0 ? [] : [
      {
        ...rest,
        font: {
          fontFamily,
          fontUrl: `${LEGACY_FONT_BASE_URL}/${fontFamily}.woff2`
        }
      }
    ]
  )
});

// src/migrations/v15-to-v16.ts
var v15ToV16 = (v15) => ({
  ...v15,
  version: 16
});

// src/migrations/v16-to-v15.ts
var v16ToV15 = (v16) => ({
  ...v16,
  version: 15,
  variables: v16.variables.map(({ icon: _icon, ...rest }) => rest)
});

// src/migrations/v16-to-v17.ts
var v16ToV17 = (v16) => ({
  ...v16,
  version: 17
});

// src/migrations/v17-to-v16.ts
var v17ToV16 = (v17) => ({
  ...v17,
  version: 16,
  tags: v17.tags.map(({ icon: _icon, ...rest }) => rest),
  tagCategories: v17.tagCategories.map(({ icon: _icon, ...rest }) => rest)
});

// src/migrations/v17-to-v18.ts
var v17ToV18 = (v17) => ({
  ...v17,
  version: 18,
  requires: []
});

// src/migrations/v18-to-v17.ts
var v18ToV17 = ({
  requires: _requires,
  ...v18
}) => ({
  ...v18,
  version: 17
});

// src/migrations/v18-to-v19.ts
var v18ToV19 = (v18) => ({
  ...v18,
  version: 19
});

// src/migrations/v19-to-v18.ts
var v19ToV18 = (v19) => {
  const droppedVariables = new Set(
    v19.variables.filter((v) => v.type === "entityRef" || v.type === "entityLookup").map((v) => v.uid)
  );
  const droppedWidgets = new Set(
    v19.widgets.filter((w) => w.type === "entityGrid").map((w) => w.uid)
  );
  return {
    ...v19,
    version: 18,
    variables: v19.variables.filter((v) => !droppedVariables.has(v.uid)),
    widgets: v19.widgets.flatMap((w) => {
      if (w.type === "entityGrid") {
        return [];
      }
      if (w.variableUid && droppedVariables.has(w.variableUid)) {
        const { variableUid: _variableUid, ...unbound } = w;
        return [unbound];
      }
      return [w];
    }),
    sheets: v19.sheets.map((sheet) => ({
      ...sheet,
      widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgets.has(uid))
    })),
    entities: v19.entities.map((entity) => {
      if (!entity.data) {
        return entity;
      }
      const data = Object.fromEntries(
        Object.entries(entity.data).filter(
          ([uid]) => !droppedVariables.has(uid)
        )
      );
      return Object.keys(data).length > 0 ? { ...entity, data } : (({ data: _data, ...rest }) => rest)(entity);
    })
  };
};

// src/migrations/v19-to-v20.ts
var v19ToV20 = (v19) => ({
  ...v19,
  version: 20,
  entities: v19.entities.map((entity) => ({ ...entity, actions: [] }))
});

// src/migrations/v20-to-v19.ts
var v20ToV19 = (v20) => ({
  ...v20,
  version: 19,
  entities: v20.entities.map(({ actions: _actions, ...entity }) => entity)
});

// src/migrations/v20-to-v21.ts
var v20ToV21 = (v20) => ({
  ...v20,
  version: 21
});

// src/migrations/v21-to-v20.ts
var escapeHtml = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var toText = (chunk) => chunk.type === "markdown" ? {
  ...chunk,
  type: "text",
  content: `<pre>${escapeHtml(chunk.content)}</pre>`
} : chunk;
var v21ToV20 = (v21) => ({
  ...v21,
  version: 20,
  chunks: v21.chunks.map(toText)
});

// src/migrations/v21-to-v22.ts
var v21ToV22 = (v21) => ({
  ...v21,
  version: 22
});

// src/migrations/v22-to-v21.ts
var dropEmphasis = (widget) => {
  if (!widget.style) {
    return widget;
  }
  const { fontWeight, fontStyle, ...style } = widget.style;
  return { ...widget, style };
};
var v22ToV21 = (v22) => ({
  ...v22,
  version: 21,
  widgets: v22.widgets.map(dropEmphasis)
});

// src/migrations/v22-to-v23.ts
var v22ToV23 = (v22) => ({
  ...v22,
  version: 23
});

// src/migrations/v23-to-v22.ts
var dropFlowStyle = (widget) => {
  if (!widget.style) {
    return widget;
  }
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    backgroundColor,
    textDecoration,
    backgroundRepeat,
    ...style
  } = widget.style;
  return { ...widget, style };
};
var v23ToV22 = (v23) => ({
  ...v23,
  version: 22,
  widgets: v23.widgets.map(dropFlowStyle)
});

// src/migrations/v23-to-v24.ts
function narrowSides(edges) {
  const [top, right, bottom, left] = edges;
  if (top === void 0 || right === void 0 || bottom === void 0 || left === void 0) {
    return void 0;
  }
  if (top === right && right === bottom && bottom === left) {
    return top;
  }
  if (top === bottom && right === left) {
    return [top, right];
  }
  return [top, right, bottom, left];
}
function foldMargin(style) {
  const sides = narrowSides([
    style.marginTop,
    style.marginRight,
    style.marginBottom,
    style.marginLeft
  ]);
  if (sides === void 0) {
    return style;
  }
  const { marginTop, marginRight, marginBottom, marginLeft, ...rest } = style;
  return { ...rest, margin: sides };
}
function foldPadding(style) {
  const sides = narrowSides([
    style.paddingTop,
    style.paddingRight,
    style.paddingBottom,
    style.paddingLeft
  ]);
  if (sides === void 0) {
    return style;
  }
  const { paddingTop, paddingRight, paddingBottom, paddingLeft, ...rest } = style;
  return { ...rest, padding: sides };
}
function foldSides(widget) {
  if (!widget.style) {
    return widget;
  }
  return { ...widget, style: foldPadding(foldMargin(widget.style)) };
}
var v23ToV24 = (v23) => ({
  ...v23,
  version: 24,
  widgets: v23.widgets.map(foldSides)
});

// src/migrations/v24-to-v23.ts
function resolveSides(sides) {
  if (sides === void 0) {
    return void 0;
  }
  if (typeof sides === "number") {
    return [sides, sides, sides, sides];
  }
  const [first, second, third, fourth] = sides;
  if (sides.length === 2 && first !== void 0 && second !== void 0) {
    return [first, second, first, second];
  }
  if (sides.length === 4 && first !== void 0 && second !== void 0 && third !== void 0 && fourth !== void 0) {
    return [first, second, third, fourth];
  }
  return void 0;
}
function collapseBorderWidth(borderWidth) {
  if (borderWidth === void 0 || typeof borderWidth === "number") {
    return borderWidth;
  }
  const edges = resolveSides(borderWidth);
  if (!edges) {
    return void 0;
  }
  const [top, right, bottom, left] = edges;
  return top === right && right === bottom && bottom === left ? top : void 0;
}
function expandSides(widget) {
  const styleV24 = widget.style;
  if (!styleV24) {
    return { ...widget, style: styleV24 };
  }
  const { margin, padding, borderWidth, ...rest } = styleV24;
  const marginEdges = resolveSides(margin);
  const paddingEdges = resolveSides(padding);
  const width = collapseBorderWidth(borderWidth);
  const style = {
    ...rest,
    ...marginEdges && {
      marginTop: marginEdges[0],
      marginRight: marginEdges[1],
      marginBottom: marginEdges[2],
      marginLeft: marginEdges[3]
    },
    ...paddingEdges && {
      paddingTop: paddingEdges[0],
      paddingRight: paddingEdges[1],
      paddingBottom: paddingEdges[2],
      paddingLeft: paddingEdges[3]
    },
    ...width !== void 0 && { borderWidth: width }
  };
  return { ...widget, style };
}
var v24ToV23 = (v24) => ({
  ...v24,
  version: 23,
  widgets: v24.widgets.map(expandSides)
});

// src/migrations/v24-to-v25.ts
var v24ToV25 = (v24) => ({
  ...v24,
  version: 25
});

// src/migrations/v25-to-v24.ts
var v25ToV24 = ({
  theme: _theme,
  ...v25
}) => ({
  ...v25,
  version: 24
});

// src/migrations/v25-to-v26.ts
var v25ToV26 = (v25) => ({
  ...v25,
  version: 26
});

// src/migrations/v26-to-v25.ts
var firstFormula = (rolls) => rolls && rolls.length > 0 ? { diceFormula: rolls[0].diceFormula } : {};
var v26ToV25 = (v26) => ({
  ...v26,
  version: 25,
  variables: v26.variables.map((variable) => {
    if (variable.type !== "roll") {
      return variable;
    }
    const { rolls, updates: _updates, log: _log, ...roll } = variable;
    return { ...roll, ...firstFormula(rolls) };
  }),
  entities: v26.entities.map((entity) => ({
    ...entity,
    actions: entity.actions.map(
      ({ rolls, updates: _updates, log: _log, ...action }) => ({
        ...action,
        ...firstFormula(rolls)
      })
    )
  }))
});

// src/migrations/v26-to-v27.ts
var translatable = ({
  label,
  ...option
}) => ({
  ...option,
  label: { en: label }
});
var v26ToV27 = (v26) => ({
  ...v26,
  version: 27,
  variables: v26.variables.map((variable) => {
    const label = variable.label === void 0 ? void 0 : { en: variable.label };
    return variable.type === "choice" ? { ...variable, label, options: variable.options?.map(translatable) } : { ...variable, label };
  }),
  dataTables: v26.dataTables.map((table) => ({
    ...table,
    columns: table.columns.map(
      (column) => column.type === "choice" ? { ...column, options: column.options?.map(translatable) } : column
    )
  }))
});

// src/migrations/v27-to-v26.ts
var oneLanguage = (label) => label.en || Object.values(label).find((value) => value.length > 0);
var flat = ({ label, ...option }) => ({
  ...option,
  label: oneLanguage(label) ?? ""
});
var v27ToV26 = (v27) => ({
  ...v27,
  version: 26,
  variables: v27.variables.map((variable) => {
    const label = variable.label && oneLanguage(variable.label);
    return variable.type === "choice" ? { ...variable, label, options: variable.options?.map(flat) } : { ...variable, label };
  }),
  dataTables: v27.dataTables.map((table) => ({
    ...table,
    columns: table.columns.map(
      (column) => column.type === "choice" ? { ...column, options: column.options?.map(flat) } : column
    )
  }))
});

// src/migrations/v27-to-v28.ts
var v27ToV28 = (v27) => ({
  ...v27,
  version: 28,
  entitySpawns: []
});

// src/migrations/v28-to-v27.ts
var v28ToV27 = (v28) => {
  const spawnRefs = new Set(
    v28.variables.filter((v) => v.type === "entitySpawnRef").map((v) => v.uid)
  );
  const droppedVariables = /* @__PURE__ */ new Set([
    ...spawnRefs,
    ...v28.variables.filter(
      (v) => v.type === "entityLookup" && v.sourceVariableUid !== void 0 && spawnRefs.has(v.sourceVariableUid)
    ).map((v) => v.uid)
  ]);
  const { entitySpawns: _entitySpawns, ...rest } = v28;
  return {
    ...rest,
    version: 27,
    variables: v28.variables.flatMap(
      (v) => v.type === "entitySpawnRef" || droppedVariables.has(v.uid) ? [] : [v]
    ),
    widgets: v28.widgets.map((w) => {
      if (w.variableUid && droppedVariables.has(w.variableUid)) {
        const { variableUid: _variableUid, ...unbound } = w;
        return unbound;
      }
      return w;
    }),
    entities: v28.entities.map((entity) => {
      if (!entity.data) {
        return entity;
      }
      const data = Object.fromEntries(
        Object.entries(entity.data).filter(
          ([uid]) => !droppedVariables.has(uid)
        )
      );
      return Object.keys(data).length > 0 ? { ...entity, data } : (({ data: _data, ...rest2 }) => rest2)(entity);
    })
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
  11: v11ToV12,
  12: v12ToV13,
  13: v13ToV14,
  14: v14ToV15,
  15: v15ToV16,
  16: v16ToV17,
  17: v17ToV18,
  18: v18ToV19,
  19: v19ToV20,
  20: v20ToV21,
  21: v21ToV22,
  22: v22ToV23,
  23: v23ToV24,
  24: v24ToV25,
  25: v25ToV26,
  26: v26ToV27,
  27: v27ToV28
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
  12: v12ToV11,
  13: v13ToV12,
  14: v14ToV13,
  15: v15ToV14,
  16: v16ToV15,
  17: v17ToV16,
  18: v18ToV17,
  19: v19ToV18,
  20: v20ToV19,
  21: v21ToV20,
  22: v22ToV21,
  23: v23ToV22,
  24: v24ToV23,
  25: v25ToV24,
  26: v26ToV25,
  27: v27ToV26,
  28: v28ToV27
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
  12: BeyondPaperV12Schema,
  13: BeyondPaperV13Schema,
  14: BeyondPaperV14Schema,
  15: BeyondPaperV15Schema,
  16: BeyondPaperV16Schema,
  17: BeyondPaperV17Schema,
  18: BeyondPaperV18Schema,
  19: BeyondPaperV19Schema,
  20: BeyondPaperV20Schema,
  21: BeyondPaperV21Schema,
  22: BeyondPaperV22Schema,
  23: BeyondPaperV23Schema,
  24: BeyondPaperV24Schema,
  25: BeyondPaperV25Schema,
  26: BeyondPaperV26Schema,
  27: BeyondPaperV27Schema,
  28: BeyondPaperV28Schema
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
export {
  AbilityEntityV6Schema as AbilityEntitySchema,
  AbilityEntityV1Schema,
  AbilityEntityV2Schema,
  AbilityEntityV3Schema,
  AbilityEntityV4Schema,
  AbilityEntityV5Schema,
  AbilityEntityV6Schema,
  ActionRollV26Schema as ActionRollSchema,
  ActionRollV26Schema,
  ActionSectionsV26Schema as ActionSectionsSchema,
  ActionSectionsV26Schema,
  IconCompoSlotConfigV1Schema as ActionVisualIconCompoSlotConfigSchema,
  ActionVisualV1Schema as ActionVisualSchema,
  ActionVisualV1Schema,
  AssetBaseV3Schema as AssetBaseSchema,
  AssetBaseV1Schema,
  AssetBaseV2Schema,
  AssetBaseV3Schema,
  AssetV3Schema as AssetSchema,
  AssetUidSchema,
  AssetV1Schema,
  AssetV2Schema,
  AssetV3Schema,
  AttributionV3Schema as AttributionSchema,
  AttributionV3Schema,
  AudioAssetV3Schema as AudioAssetSchema,
  AudioAssetV1Schema,
  AudioAssetV2Schema,
  AudioAssetV3Schema,
  AudioExternalAssetV3Schema as AudioExternalAssetSchema,
  AudioExternalAssetV1Schema,
  AudioExternalAssetV2Schema,
  AudioExternalAssetV3Schema,
  BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION,
  BarOrientationV1Schema as BarOrientationSchema,
  BarOrientationV1Schema,
  BeyondPaperV28Schema as BeyondPaperSchema,
  BeyondPaperV10Schema,
  BeyondPaperV11Schema,
  BeyondPaperV12Schema,
  BeyondPaperV13Schema,
  BeyondPaperV14Schema,
  BeyondPaperV15Schema,
  BeyondPaperV16Schema,
  BeyondPaperV17Schema,
  BeyondPaperV18Schema,
  BeyondPaperV19Schema,
  BeyondPaperV1Schema,
  BeyondPaperV20Schema,
  BeyondPaperV21Schema,
  BeyondPaperV22Schema,
  BeyondPaperV23Schema,
  BeyondPaperV24Schema,
  BeyondPaperV25Schema,
  BeyondPaperV26Schema,
  BeyondPaperV27Schema,
  BeyondPaperV28Schema,
  BeyondPaperV2Schema,
  BeyondPaperV3Schema,
  BeyondPaperV4Schema,
  BeyondPaperV5Schema,
  BeyondPaperV6Schema,
  BeyondPaperV7Schema,
  BeyondPaperV8Schema,
  BeyondPaperV9Schema,
  BooleanVariableV11Schema as BooleanVariableSchema,
  BooleanVariableV11Schema,
  BooleanVariableV1Schema,
  BooleanVariableV8Schema,
  BundleImageV14Schema as BundleImageSchema,
  BundleImageV14Schema,
  ByppFileUrlV1Schema as ByppFileUrlSchema,
  ByppFileUrlV1Schema,
  CcLicenseV3Schema as CcLicenseSchema,
  CcLicenseV3Schema,
  CharacterEntityV6Schema as CharacterEntitySchema,
  CharacterEntityV1Schema,
  CharacterEntityV2Schema,
  CharacterEntityV3Schema,
  CharacterEntityV4Schema,
  CharacterEntityV5Schema,
  CharacterEntityV6Schema,
  ChoiceOptionV27Schema as ChoiceOptionSchema,
  ChoiceOptionV1Schema,
  ChoiceOptionV27Schema,
  ChoiceVariableV11Schema as ChoiceVariableSchema,
  ChoiceVariableV11Schema,
  ChoiceVariableV1Schema,
  ChoiceVariableV8Schema,
  ChunkBaseV2Schema as ChunkBaseSchema,
  ChunkBaseV1Schema,
  ChunkBaseV2Schema,
  ChunkBlockStyleV1Schema as ChunkBlockStyleSchema,
  ChunkBlockStyleV1Schema,
  ChunkGalleryV2Schema as ChunkGallerySchema,
  ChunkGalleryV1Schema,
  ChunkGalleryV2Schema,
  ChunkHeadingLevelV1Schema as ChunkHeadingLevelSchema,
  ChunkHeadingLevelV1Schema,
  ChunkHeadingModeV1Schema as ChunkHeadingModeSchema,
  ChunkHeadingModeV1Schema,
  ChunkMarkdownV12Schema as ChunkMarkdownSchema,
  ChunkMarkdownV12Schema,
  ChunkRandomV2Schema as ChunkRandomSchema,
  ChunkRandomV1Schema,
  ChunkRandomV2Schema,
  ChunkV12Schema as ChunkSchema,
  ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema,
  ChunkTextV11Schema as ChunkTextSchema,
  ChunkTextV11Schema,
  ChunkTextV1Schema,
  ChunkTextV2Schema,
  ChunkUidSchema,
  ChunkV11Schema,
  ChunkV12Schema,
  ChunkV1Schema,
  ChunkV2Schema,
  CreatureEntityV6Schema as CreatureEntitySchema,
  CreatureEntityV1Schema,
  CreatureEntityV2Schema,
  CreatureEntityV3Schema,
  CreatureEntityV4Schema,
  CreatureEntityV5Schema,
  CreatureEntityV6Schema,
  CreditV1Schema as CreditSchema,
  CreditV1Schema,
  CustomImageSceneBackgroundV4Schema as CustomImageSceneBackgroundSchema,
  CustomImageSceneBackgroundV1Schema,
  CustomImageSceneBackgroundV2Schema,
  CustomImageSceneBackgroundV3Schema,
  CustomImageSceneBackgroundV4Schema,
  CustomImageSceneMapV4Schema as CustomImageSceneMapSchema,
  CustomImageSceneMapV1Schema,
  CustomImageSceneMapV2Schema,
  CustomImageSceneMapV3Schema,
  CustomImageSceneMapV4Schema,
  CustomVideoSceneBackgroundV4Schema as CustomVideoSceneBackgroundSchema,
  CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV4Schema,
  CustomVideoSceneMapV4Schema as CustomVideoSceneMapSchema,
  CustomVideoSceneMapV1Schema,
  CustomVideoSceneMapV2Schema,
  CustomVideoSceneMapV3Schema,
  CustomVideoSceneMapV4Schema,
  DOWN_MIGRATIONS,
  DataTableCellValueV2Schema as DataTableCellValueSchema,
  DataTableCellValueV2Schema,
  DataTableColumnBooleanV2Schema as DataTableColumnBooleanSchema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV4Schema as DataTableColumnChoiceSchema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnChoiceV4Schema,
  DataTableColumnDataTableLookupV2Schema as DataTableColumnDataTableLookupSchema,
  DataTableColumnDataTableLookupV2Schema,
  DataTableColumnDataTableRefV2Schema as DataTableColumnDataTableRefSchema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnIconV2Schema as DataTableColumnIconSchema,
  DataTableColumnIconV2Schema,
  DataTableColumnNumberV2Schema as DataTableColumnNumberSchema,
  DataTableColumnNumberV2Schema,
  DataTableColumnV4Schema as DataTableColumnSchema,
  DataTableColumnTextV2Schema as DataTableColumnTextSchema,
  DataTableColumnTextV2Schema,
  DataTableColumnTranslatableTextV2Schema as DataTableColumnTranslatableTextSchema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnUidSchema,
  DataTableColumnV2Schema,
  DataTableColumnV4Schema,
  DataTableDirectLookupVariableV11Schema as DataTableDirectLookupVariableSchema,
  DataTableDirectLookupVariableV11Schema,
  DataTableDirectLookupVariableV6Schema,
  DataTableDirectLookupVariableV8Schema,
  DataTableLookupVariableV11Schema as DataTableLookupVariableSchema,
  DataTableLookupVariableV11Schema,
  DataTableLookupVariableV2Schema,
  DataTableLookupVariableV8Schema,
  DataTableRefVariableV11Schema as DataTableRefVariableSchema,
  DataTableRefVariableV11Schema,
  DataTableRefVariableV2Schema,
  DataTableRefVariableV8Schema,
  DataTableRowV3Schema as DataTableRowSchema,
  DataTableRowUidSchema,
  DataTableRowV2Schema,
  DataTableRowV3Schema,
  DataTableV4Schema as DataTableSchema,
  DataTableUidSchema,
  DataTableV2Schema,
  DataTableV3Schema,
  DataTableV4Schema,
  DatasetV2Schema as DatasetSchema,
  DatasetTargetV2Schema as DatasetTargetSchema,
  DatasetTargetV1Schema,
  DatasetTargetV2Schema,
  DatasetUidSchema,
  DatasetV1Schema,
  DatasetV2Schema,
  Dd2VttSceneMapV1Schema,
  DialectFontV1Schema,
  DialectFontV2Schema,
  DialectV3Schema as DialectSchema,
  DialectUidSchema,
  DialectV1Schema,
  DialectV2Schema,
  DialectV3Schema,
  ENTITY_IMAGE_RENDITIONS,
  EntityActionV2Schema as EntityActionSchema,
  EntityActionV1Schema,
  EntityActionV2Schema,
  EntityAssetV3Schema as EntityAssetSchema,
  EntityAssetV1Schema,
  EntityAssetV2Schema,
  EntityAssetV3Schema,
  EntityBaseV6Schema as EntityBaseSchema,
  EntityBaseV1Schema,
  EntityBaseV2Schema,
  EntityBaseV3Schema,
  EntityBaseV4Schema,
  EntityBaseV5Schema,
  EntityBaseV6Schema,
  EntityImageFormatV5Schema as EntityImageFormatSchema,
  EntityImageFormatV5Schema,
  EntityImageObjectFitV5Schema as EntityImageObjectFitSchema,
  EntityImageObjectFitV5Schema,
  EntityLookupVariableV11Schema as EntityLookupVariableSchema,
  EntityLookupVariableV11Schema,
  EntityLookupVariableV9Schema,
  EntityRefVariableV11Schema as EntityRefVariableSchema,
  EntityRefVariableV11Schema,
  EntityRefVariableV9Schema,
  EntityV6Schema as EntitySchema,
  EntitySpawnRefVariableV12Schema as EntitySpawnRefVariableSchema,
  EntitySpawnRefVariableV12Schema,
  EntitySpawnV1Schema as EntitySpawnSchema,
  EntitySpawnUidSchema,
  EntitySpawnV1Schema,
  EntityTypeV1Schema as EntityTypeSchema,
  EntityTypeV1Schema,
  EntityTypeV1Schema as EntityTypeV2Schema,
  EntityTypeV1Schema as EntityTypeV3Schema,
  EntityTypeV1Schema as EntityTypeV4Schema,
  EntityTypeV1Schema as EntityTypeV5Schema,
  EntityTypeV1Schema as EntityTypeV6Schema,
  EntityUidSchema,
  EntityV1Schema,
  EntityV2Schema,
  EntityV3Schema,
  EntityV4Schema,
  EntityV5Schema,
  EntityV6Schema,
  EventEntityV6Schema as EventEntitySchema,
  EventEntityV1Schema,
  EventEntityV2Schema,
  EventEntityV3Schema,
  EventEntityV4Schema,
  EventEntityV5Schema,
  EventEntityV6Schema,
  FormulaVariableV11Schema as FormulaVariableSchema,
  FormulaVariableV11Schema,
  FormulaVariableV1Schema,
  FormulaVariableV8Schema,
  GridDataV1Schema as GridDataSchema,
  GridDataV1Schema,
  GroupEntityV6Schema as GroupEntitySchema,
  GroupEntityV1Schema,
  GroupEntityV2Schema,
  GroupEntityV3Schema,
  GroupEntityV4Schema,
  GroupEntityV5Schema,
  GroupEntityV6Schema,
  GroupRankCharacterV1Schema as GroupRankCharacterSchema,
  GroupRankCharacterV1Schema,
  GroupRankV1Schema as GroupRankSchema,
  GroupRankV1Schema,
  IconCompoV1Schema as IconCompoSchema,
  IconCompoSlotConfigV1Schema as IconCompoSlotConfigSchema,
  IconCompoSlotConfigV1Schema,
  IconCompoV1Schema,
  ImageAssetV3Schema as ImageAssetSchema,
  ImageAssetV1Schema,
  ImageAssetV2Schema,
  ImageAssetV3Schema,
  ImageDimensionsV1Schema as ImageDimensionsSchema,
  ImageDimensionsV1Schema,
  ImageVariableV11Schema as ImageVariableSchema,
  ImageVariableV11Schema,
  ImageVariableV5Schema,
  ImageVariableV8Schema,
  ItemEntityV6Schema as ItemEntitySchema,
  ItemEntityV1Schema,
  ItemEntityV2Schema,
  ItemEntityV3Schema,
  ItemEntityV4Schema,
  ItemEntityV5Schema,
  ItemEntityV6Schema,
  KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS,
  NoteEntityV6Schema as NoteEntitySchema,
  NoteEntityV1Schema,
  NoteEntityV2Schema,
  NoteEntityV3Schema,
  NoteEntityV4Schema,
  NoteEntityV5Schema,
  NoteEntityV6Schema,
  NumberVariableV11Schema as NumberVariableSchema,
  NumberVariableV11Schema,
  NumberVariableV1Schema,
  NumberVariableV2Schema,
  NumberVariableV8Schema,
  ObjectFitV6Schema as ObjectFitSchema,
  ObjectFitV6Schema,
  PageEntityV1Schema as PageEntitySchema,
  PageEntityV1Schema,
  PageV1Schema as PageSchema,
  PageStandardV1Schema as PageStandardSchema,
  PageStandardV1Schema,
  PageUidSchema,
  PageV1Schema,
  ParentAttributionV4Schema as ParentAttributionSchema,
  ParentAttributionV3Schema,
  ParentAttributionV4Schema,
  PlaceEntityV6Schema as PlaceEntitySchema,
  PlaceEntityV1Schema,
  PlaceEntityV2Schema,
  PlaceEntityV3Schema,
  PlaceEntityV4Schema,
  PlaceEntityV5Schema,
  PlaceEntityV6Schema,
  RandomTableRowV7Schema as RandomTableRowSchema,
  RandomTableRowUidSchema,
  RandomTableRowV1Schema,
  RandomTableRowV2Schema,
  RandomTableRowV7Schema,
  RandomTableV7Schema as RandomTableSchema,
  RandomTableUidSchema,
  RandomTableV1Schema,
  RandomTableV2Schema,
  RandomTableV7Schema,
  RequirementV1Schema as RequirementSchema,
  RequirementSourceV1Schema as RequirementSourceSchema,
  RequirementSourceV1Schema,
  RequirementV1Schema,
  RollVariableV11Schema as RollVariableSchema,
  RollVariableV10Schema,
  RollVariableV11Schema,
  RollVariableV1Schema,
  RollVariableV8Schema,
  SCHEMA_BY_VERSION,
  SceneBackgroundBaseV2Schema as SceneBackgroundBaseSchema,
  SceneBackgroundBaseV1Schema,
  SceneBackgroundBaseV2Schema,
  SceneBackgroundV4Schema as SceneBackgroundSchema,
  SceneBackgroundUidSchema,
  SceneBackgroundV1Schema,
  SceneBackgroundV2Schema,
  SceneBackgroundV3Schema,
  SceneBackgroundV4Schema,
  SceneGameModeV1Schema,
  SceneMapBaseV2Schema as SceneMapBaseSchema,
  SceneMapBaseV1Schema,
  SceneMapBaseV2Schema,
  SceneMapV4Schema as SceneMapSchema,
  SceneMapUidSchema,
  SceneMapV1Schema,
  SceneMapV2Schema,
  SceneMapV3Schema,
  SceneMapV4Schema,
  SceneV2Schema as SceneSchema,
  SceneUidSchema,
  SceneV1Schema,
  SceneV2Schema,
  SheetV7Schema as SheetSchema,
  SheetUidSchema,
  SheetV2Schema,
  SheetV3Schema,
  SheetV5Schema,
  SheetV6Schema,
  SheetV7Schema,
  SidesV6Schema as SidesSchema,
  SidesV6Schema,
  StoryEntityV6Schema as StoryEntitySchema,
  StoryEntityV1Schema,
  StoryEntityV2Schema,
  StoryEntityV3Schema,
  StoryEntityV4Schema,
  StoryEntityV5Schema,
  StoryEntityV6Schema,
  StyleV6Schema as StyleSchema,
  StyleV1Schema,
  StyleV2Schema,
  StyleV3Schema,
  StyleV4Schema,
  StyleV5Schema,
  StyleV6Schema,
  TagCategoryV2Schema as TagCategorySchema,
  TagCategoryUidSchema,
  TagCategoryV1Schema,
  TagCategoryV2Schema,
  TagV3Schema as TagSchema,
  TagUidSchema,
  TagV1Schema,
  TagV2Schema,
  TagV3Schema,
  TextVariableV11Schema as TextVariableSchema,
  TextVariableV11Schema,
  TextVariableV1Schema,
  TextVariableV8Schema,
  ThemeV25Schema as ThemeSchema,
  ThemeStyleV25Schema as ThemeStyleSchema,
  ThemeStyleV25Schema,
  ThemeTagStyleV25Schema as ThemeTagStyleSchema,
  ThemeTagStyleV25Schema,
  ThemeV25Schema,
  TranslatableTextV2Schema as TranslatableTextSchema,
  TranslatableTextV2Schema,
  VariableBaseV8Schema as VariableBaseSchema,
  VariableBaseV1Schema,
  VariableBaseV8Schema,
  VariableChoiceUidSchema,
  VariableDataValueV1Schema as VariableDataValueSchema,
  VariableDataValueV1Schema,
  VariableLabelV27Schema,
  VariableV12Schema as VariableSchema,
  VariableUidSchema,
  VariableUpdateV26Schema as VariableUpdateSchema,
  VariableUpdateV26Schema,
  VariableV10Schema,
  VariableV11Schema,
  VariableV12Schema,
  VariableV1Schema,
  VariableV2Schema,
  VariableV5Schema,
  VariableV6Schema,
  VariableV7Schema,
  VariableV8Schema,
  VariableV9Schema,
  VariablesDataRecordV1Schema as VariablesDataRecordSchema,
  VariablesDataRecordV1Schema,
  VideoAssetV3Schema as VideoAssetSchema,
  VideoAssetV1Schema,
  VideoAssetV2Schema,
  VideoAssetV3Schema,
  WidgetActionRollV9Schema as WidgetActionRollSchema,
  WidgetActionRollV8Schema,
  WidgetActionRollV9Schema,
  WidgetBackgroundV6Schema as WidgetBackgroundSchema,
  WidgetBackgroundV6Schema,
  WidgetBarV1Schema as WidgetBarSchema,
  WidgetBarV1Schema,
  WidgetBaseV1Schema as WidgetBaseSchema,
  WidgetBaseV1Schema,
  WidgetBigNumberV1Schema as WidgetBigNumberSchema,
  WidgetBigNumberV1Schema,
  WidgetBulletListV1Schema as WidgetBulletListSchema,
  WidgetBulletListV1Schema,
  WidgetEmptyV1Schema as WidgetEmptySchema,
  WidgetEmptyV1Schema,
  WidgetEntityGridV10Schema as WidgetEntityGridSchema,
  WidgetEntityGridV10Schema,
  WidgetEntityImageV6Schema as WidgetEntityImageSchema,
  WidgetEntityImageV5Schema,
  WidgetInlineListV1Schema as WidgetInlineListSchema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema as WidgetPipsSchema,
  WidgetPipsV1Schema,
  WidgetPlainTextV1Schema as WidgetPlainTextSchema,
  WidgetPlainTextV1Schema,
  WidgetV13Schema as WidgetSchema,
  WidgetToggleV1Schema as WidgetToggleSchema,
  WidgetToggleV1Schema,
  WidgetUidSchema,
  WidgetV10Schema,
  WidgetV11Schema,
  WidgetV12Schema,
  WidgetV13Schema,
  WidgetV1Schema,
  WidgetV5Schema,
  WidgetV7Schema,
  WidgetV8Schema,
  WidgetV9Schema,
  WidgetWheelV7Schema as WidgetWheelSchema,
  WithArchiveV2Schema as WithArchiveSchema,
  WithArchiveV1Schema,
  WithArchiveV2Schema,
  WithAreaV1Schema as WithAreaSchema,
  WithAreaV1Schema,
  WithAssetsV1Schema as WithAssetsSchema,
  WithAssetsV1Schema,
  WithAudioUrlsV2Schema as WithAudioUrlsSchema,
  WithAudioUrlsV1Schema,
  WithAudioUrlsV2Schema,
  WithCreditV1Schema as WithCreditSchema,
  WithCreditV1Schema,
  WithDataV1Schema as WithDataSchema,
  WithDataV1Schema,
  WithIconV1Schema,
  WithImagesUrlsV2Schema as WithImagesUrlsSchema,
  WithImagesUrlsV1Schema,
  WithImagesUrlsV2Schema,
  WithImagesUrlsV3Schema,
  WithLocalizedNameV2Schema as WithLocalizedNameSchema,
  WithLocalizedNameV2Schema,
  WithNameV1Schema as WithNameSchema,
  WithNameV1Schema,
  WithPagesV2Schema as WithPagesSchema,
  WithPagesV1Schema,
  WithPagesV2Schema,
  WithPositionV1Schema as WithPositionSchema,
  WithPositionV1Schema,
  WithScenesV2Schema as WithScenesSchema,
  WithScenesV1Schema,
  WithScenesV2Schema,
  WithStyleV6Schema as WithStyleSchema,
  WithStyleV1Schema,
  WithStyleV2Schema,
  WithStyleV3Schema,
  WithStyleV4Schema,
  WithStyleV5Schema,
  WithStyleV6Schema,
  WithVideoUrlsV2Schema as WithVideoUrlsSchema,
  WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema,
  WithWidgetActionsV8Schema as WithWidgetActionsSchema,
  WithWidgetActionsV8Schema,
  migrate
};
//# sourceMappingURL=index.js.map