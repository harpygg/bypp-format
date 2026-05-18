// src/version.ts
var BYPP_FORMAT_VERSION = 2;
var BYPP_FORMAT_EXT = "bypp";

// src/schemas/bypp.v2.schema.ts
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

// src/schemas/bypp.v2.schema.ts
var BeyondPaperV2Schema = z33.object({
  // Format metadata
  version: z33.literal(2),
  format: z33.literal("bypp"),
  // Bundle metadata
  name: z33.string(),
  exportedAt: z33.string(),
  bundleVersion: z33.string(),
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

// src/schemas/bypp.v1.schema.ts
import { z as z34 } from "zod";
var BeyondPaperV1Schema = z34.object({
  // Format metadata
  version: z34.literal(1),
  format: z34.literal("bypp"),
  // Bundle metadata
  name: z34.string(),
  exportedAt: z34.string(),
  bundleVersion: z34.string(),
  // Content
  dialects: z34.array(DialectV1Schema),
  entities: z34.array(EntityV1Schema),
  pages: z34.array(PageV1Schema),
  chunks: z34.array(ChunkV1Schema),
  datasets: z34.array(DatasetV1Schema),
  variables: z34.array(VariableV1Schema),
  widgets: z34.array(WidgetV1Schema),
  randomTables: z34.array(RandomTableV1Schema),
  tags: z34.array(TagV1Schema),
  tagCategories: z34.array(TagCategoryV1Schema),
  scenes: z34.array(SceneV1Schema),
  sceneMaps: z34.array(SceneMapV1Schema),
  sceneBackgrounds: z34.array(SceneBackgroundV1Schema),
  assets: z34.array(AssetV1Schema)
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

// src/migrations/index.ts
var MIGRATIONS = {
  1: v1ToV2
};
var DOWN_MIGRATIONS = {
  2: v2ToV1
};
var SCHEMA_BY_VERSION = {
  1: BeyondPaperV1Schema,
  2: BeyondPaperV2Schema
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
  AbilityEntityV1Schema as AbilityEntitySchema,
  AbilityEntityV1Schema,
  IconCompoSlotConfigV1Schema as ActionVisualIconCompoSlotConfigSchema,
  ActionVisualV1Schema as ActionVisualSchema,
  ActionVisualV1Schema,
  AssetBaseV1Schema as AssetBaseSchema,
  AssetBaseV1Schema,
  AssetV1Schema as AssetSchema,
  AssetUidSchema,
  AssetV1Schema,
  AudioAssetV1Schema as AudioAssetSchema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema as AudioExternalAssetSchema,
  AudioExternalAssetV1Schema,
  BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION,
  BarOrientationV1Schema as BarOrientationSchema,
  BarOrientationV1Schema,
  BeyondPaperV2Schema as BeyondPaperSchema,
  BeyondPaperV1Schema,
  BeyondPaperV2Schema,
  BooleanVariableV1Schema as BooleanVariableSchema,
  BooleanVariableV1Schema,
  CharacterEntityV1Schema as CharacterEntitySchema,
  CharacterEntityV1Schema,
  ChoiceOptionV1Schema as ChoiceOptionSchema,
  ChoiceOptionV1Schema,
  ChoiceVariableV1Schema as ChoiceVariableSchema,
  ChoiceVariableV1Schema,
  ChunkBaseV1Schema as ChunkBaseSchema,
  ChunkBaseV1Schema,
  ChunkBlockStyleV1Schema as ChunkBlockStyleSchema,
  ChunkBlockStyleV1Schema,
  ChunkGalleryV1Schema as ChunkGallerySchema,
  ChunkGalleryV1Schema,
  ChunkHeadingLevelV1Schema as ChunkHeadingLevelSchema,
  ChunkHeadingLevelV1Schema,
  ChunkHeadingModeV1Schema as ChunkHeadingModeSchema,
  ChunkHeadingModeV1Schema,
  ChunkRandomV1Schema as ChunkRandomSchema,
  ChunkRandomV1Schema,
  ChunkV1Schema as ChunkSchema,
  ChunkTextProxyV1Schema as ChunkTextProxySchema,
  ChunkTextProxyV1Schema,
  ChunkTextV1Schema as ChunkTextSchema,
  ChunkTextV1Schema,
  ChunkUidSchema,
  ChunkV1Schema,
  CreatureEntityV1Schema as CreatureEntitySchema,
  CreatureEntityV1Schema,
  CustomImageSceneBackgroundV1Schema as CustomImageSceneBackgroundSchema,
  CustomImageSceneBackgroundV1Schema,
  CustomImageSceneMapV1Schema as CustomImageSceneMapSchema,
  CustomImageSceneMapV1Schema,
  CustomVideoSceneBackgroundV1Schema as CustomVideoSceneBackgroundSchema,
  CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneMapV1Schema as CustomVideoSceneMapSchema,
  CustomVideoSceneMapV1Schema,
  DOWN_MIGRATIONS,
  DataTableCellValueV2Schema as DataTableCellValueSchema,
  DataTableCellValueV2Schema,
  DataTableColumnBooleanV2Schema as DataTableColumnBooleanSchema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema as DataTableColumnChoiceSchema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnDataTableLookupV2Schema as DataTableColumnDataTableLookupSchema,
  DataTableColumnDataTableLookupV2Schema,
  DataTableColumnDataTableRefV2Schema as DataTableColumnDataTableRefSchema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnIconV2Schema as DataTableColumnIconSchema,
  DataTableColumnIconV2Schema,
  DataTableColumnNumberV2Schema as DataTableColumnNumberSchema,
  DataTableColumnNumberV2Schema,
  DataTableColumnV2Schema as DataTableColumnSchema,
  DataTableColumnTextV2Schema as DataTableColumnTextSchema,
  DataTableColumnTextV2Schema,
  DataTableColumnTranslatableTextV2Schema as DataTableColumnTranslatableTextSchema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnUidSchema,
  DataTableColumnV2Schema,
  DataTableLookupVariableV2Schema as DataTableLookupVariableSchema,
  DataTableLookupVariableV2Schema,
  DataTableRefVariableV2Schema as DataTableRefVariableSchema,
  DataTableRefVariableV2Schema,
  DataTableRowV2Schema as DataTableRowSchema,
  DataTableRowUidSchema,
  DataTableRowV2Schema,
  DataTableV2Schema as DataTableSchema,
  DataTableUidSchema,
  DataTableV2Schema,
  DatasetV1Schema as DatasetSchema,
  DatasetTargetV1Schema as DatasetTargetSchema,
  DatasetTargetV1Schema,
  DatasetUidSchema,
  DatasetV1Schema,
  Dd2VttSceneMapV1Schema as Dd2VttSceneMapSchema,
  Dd2VttSceneMapV1Schema,
  DialectFontV1Schema as DialectFontSchema,
  DialectFontV1Schema,
  DialectV1Schema as DialectSchema,
  DialectUidSchema,
  DialectV1Schema,
  EntityAssetV1Schema as EntityAssetSchema,
  EntityAssetV1Schema,
  EntityBaseV1Schema as EntityBaseSchema,
  EntityBaseV1Schema,
  EntityV1Schema as EntitySchema,
  EntityTypeV1Schema as EntityTypeSchema,
  EntityTypeV1Schema,
  EntityUidSchema,
  EntityV1Schema,
  EventEntityV1Schema as EventEntitySchema,
  EventEntityV1Schema,
  FormulaVariableV1Schema as FormulaVariableSchema,
  FormulaVariableV1Schema,
  GridDataV1Schema as GridDataSchema,
  GridDataV1Schema,
  GroupEntityV1Schema as GroupEntitySchema,
  GroupEntityV1Schema,
  GroupRankCharacterV1Schema as GroupRankCharacterSchema,
  GroupRankCharacterV1Schema,
  GroupRankV1Schema as GroupRankSchema,
  GroupRankV1Schema,
  IconCompoV1Schema as IconCompoSchema,
  IconCompoSlotConfigV1Schema as IconCompoSlotConfigSchema,
  IconCompoSlotConfigV1Schema,
  IconCompoV1Schema,
  ImageAssetV1Schema as ImageAssetSchema,
  ImageAssetV1Schema,
  ImageDimensionsV1Schema as ImageDimensionsSchema,
  ImageDimensionsV1Schema,
  ItemEntityV1Schema as ItemEntitySchema,
  ItemEntityV1Schema,
  MIGRATIONS,
  NoteEntityV1Schema as NoteEntitySchema,
  NoteEntityV1Schema,
  NumberVariableV1Schema as NumberVariableSchema,
  NumberVariableV1Schema,
  PageEntityV1Schema as PageEntitySchema,
  PageEntityV1Schema,
  PageV1Schema as PageSchema,
  PageStandardV1Schema as PageStandardSchema,
  PageStandardV1Schema,
  PageUidSchema,
  PageV1Schema,
  PlaceEntityV1Schema as PlaceEntitySchema,
  PlaceEntityV1Schema,
  RandomTableRowV1Schema as RandomTableRowSchema,
  RandomTableRowUidSchema,
  RandomTableRowV1Schema,
  RandomTableV1Schema as RandomTableSchema,
  RandomTableUidSchema,
  RandomTableV1Schema,
  RollVariableV1Schema as RollVariableSchema,
  RollVariableV1Schema,
  SCHEMA_BY_VERSION,
  SceneBackgroundBaseV1Schema as SceneBackgroundBaseSchema,
  SceneBackgroundBaseV1Schema,
  SceneBackgroundV1Schema as SceneBackgroundSchema,
  SceneBackgroundUidSchema,
  SceneBackgroundV1Schema,
  SceneGameModeV1Schema as SceneGameModeSchema,
  SceneGameModeV1Schema,
  SceneMapBaseV1Schema as SceneMapBaseSchema,
  SceneMapBaseV1Schema,
  SceneMapV1Schema as SceneMapSchema,
  SceneMapUidSchema,
  SceneMapV1Schema,
  SceneV1Schema as SceneSchema,
  SceneUidSchema,
  SceneV1Schema,
  SheetV2Schema as SheetSchema,
  SheetUidSchema,
  SheetV2Schema,
  StoryEntityV1Schema as StoryEntitySchema,
  StoryEntityV1Schema,
  StyleV1Schema as StyleSchema,
  StyleV1Schema,
  TagCategoryV1Schema as TagCategorySchema,
  TagCategoryUidSchema,
  TagCategoryV1Schema,
  TagV1Schema as TagSchema,
  TagUidSchema,
  TagV1Schema,
  TextVariableV1Schema as TextVariableSchema,
  TextVariableV1Schema,
  TranslatableTextV2Schema as TranslatableTextSchema,
  TranslatableTextV2Schema,
  VariableBaseV1Schema as VariableBaseSchema,
  VariableBaseV1Schema,
  VariableChoiceUidSchema,
  VariableDataValueV1Schema as VariableDataValueSchema,
  VariableDataValueV1Schema,
  VariableV2Schema as VariableSchema,
  VariableUidSchema,
  VariableV1Schema,
  VariableV2Schema,
  VariablesDataRecordV1Schema as VariablesDataRecordSchema,
  VariablesDataRecordV1Schema,
  VideoAssetV1Schema as VideoAssetSchema,
  VideoAssetV1Schema,
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
  WidgetInlineListV1Schema as WidgetInlineListSchema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema as WidgetPipsSchema,
  WidgetPipsV1Schema,
  WidgetPlainTextV1Schema as WidgetPlainTextSchema,
  WidgetPlainTextV1Schema,
  WidgetV1Schema as WidgetSchema,
  WidgetToggleV1Schema as WidgetToggleSchema,
  WidgetToggleV1Schema,
  WidgetUidSchema,
  WidgetV1Schema,
  WithArchiveV1Schema as WithArchiveSchema,
  WithArchiveV1Schema,
  WithAreaV1Schema as WithAreaSchema,
  WithAreaV1Schema,
  WithAssetsV1Schema as WithAssetsSchema,
  WithAssetsV1Schema,
  WithAudioUrlsV1Schema as WithAudioUrlsSchema,
  WithAudioUrlsV1Schema,
  WithDataV1Schema as WithDataSchema,
  WithDataV1Schema,
  WithImagesUrlsV1Schema as WithImagesUrlsSchema,
  WithImagesUrlsV1Schema,
  WithLocalizedNameV2Schema as WithLocalizedNameSchema,
  WithLocalizedNameV2Schema,
  WithNameV1Schema as WithNameSchema,
  WithNameV1Schema,
  WithPagesV1Schema as WithPagesSchema,
  WithPagesV1Schema,
  WithPositionV1Schema as WithPositionSchema,
  WithPositionV1Schema,
  WithScenesV1Schema as WithScenesSchema,
  WithScenesV1Schema,
  WithStyleV1Schema as WithStyleSchema,
  WithStyleV1Schema,
  WithVideoUrlsV1Schema as WithVideoUrlsSchema,
  WithVideoUrlsV1Schema,
  migrate
};
//# sourceMappingURL=index.js.map