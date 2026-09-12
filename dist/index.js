// src/version.ts
var BYPP_FORMAT_VERSION = 20;
var BYPP_FORMAT_EXT = "bypp";

// src/schemas/bypp.v20.schema.ts
import { z as z84 } from "zod";

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

// src/models/chunk.v11.schema.ts
import { z as z41 } from "zod";

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

// src/models/data-table.v3.schema.ts
import { z as z42 } from "zod";
var DataTableRowV3Schema = z42.object({
  uid: DataTableRowUidSchema,
  data: z42.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = z42.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z42.string().optional(),
  weight: z42.number().optional(),
  adminOnly: z42.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z42.array(DataTableColumnV2Schema).default([]),
  rows: z42.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
import { z as z43 } from "zod";
var DatasetTargetV2Schema = z43.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = z43.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z43.number().optional(),
  targets: z43.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: z43.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v3.schema.ts
import { z as z44 } from "zod";
var DialectV3Schema = z44.object({
  uid: DialectUidSchema,
  name: z44.string(),
  fontFamily: z44.string().optional(),
  order: z44.number().optional(),
  spokenByEntitiesUids: z44.array(EntityUidSchema).default([])
});

// src/models/entity.v5.schema.ts
import { z as z51 } from "zod";

// src/mixins/with-scenes.v2.schema.ts
import { z as z45 } from "zod";
var WithScenesV2Schema = z45.object({
  scenesUids: z45.array(SceneUidSchema).default([])
});

// src/models/entity-action.v1.schema.ts
import { z as z46 } from "zod";
var EntityActionV1Schema = z46.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: z46.number().nullable().optional(),
  type: z46.literal("roll"),
  diceFormula: z46.string().optional()
});

// src/models/entity.v4.schema.ts
import { z as z50 } from "zod";

// src/models/entity.v3.schema.ts
import { z as z49 } from "zod";

// src/mixins/with-archive.v2.schema.ts
import { z as z47 } from "zod";
var WithArchiveV2Schema = z47.object({
  isArchived: z47.boolean().default(false)
});

// src/mixins/with-pages.v2.schema.ts
import { z as z48 } from "zod";
var WithPagesV2Schema = z48.object({
  pagesOrder: z48.array(PageUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = z49.object({
  uid: EntityUidSchema,
  displayName: z49.string().optional(),
  description: z49.string().optional(),
  tagsUid: z49.array(TagUidSchema).default([]),
  sheetOverrides: z49.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("group"),
  ranks: z49.array(GroupRankV1Schema).default([]),
  charactersUids: z49.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: z49.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: z49.literal("event")
});
var EntityV3Schema = z49.discriminatedUnion("type", [
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
  type: z50.literal("character")
});
var CreatureEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("creature")
});
var GroupEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("group"),
  ranks: z50.array(GroupRankV1Schema).default([]),
  charactersUids: z50.array(EntityUidSchema).default([])
});
var PlaceEntityV4Schema = EntityBaseV4Schema.merge(
  WithScenesV2Schema
).extend({ type: z50.literal("place") });
var ItemEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("item")
});
var NoteEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("note")
});
var AbilityEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("ability")
});
var StoryEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("story")
});
var EventEntityV4Schema = EntityBaseV4Schema.extend({
  type: z50.literal("event")
});
var EntityV4Schema = z50.discriminatedUnion("type", [
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
  actions: z51.array(EntityActionV1Schema).default([])
});
var CharacterEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("character")
});
var CreatureEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("creature")
});
var GroupEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("group"),
  ranks: z51.array(GroupRankV1Schema).default([]),
  charactersUids: z51.array(EntityUidSchema).default([])
});
var PlaceEntityV5Schema = EntityBaseV5Schema.merge(
  WithScenesV2Schema
).extend({ type: z51.literal("place") });
var ItemEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("item")
});
var NoteEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("note")
});
var AbilityEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("ability")
});
var StoryEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("story")
});
var EventEntityV5Schema = EntityBaseV5Schema.extend({
  type: z51.literal("event")
});
var EntityV5Schema = z51.discriminatedUnion("type", [
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
import { z as z52 } from "zod";
var RandomTableRowV7Schema = z52.object({
  uid: RandomTableRowUidSchema,
  range: z52.number().default(1),
  content: z52.string(),
  randomTableRefs: z52.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = z52.object({
  uid: RandomTableUidSchema,
  title: z52.string(),
  rows: z52.array(RandomTableRowV7Schema).default([]),
  diceFormula: z52.string().optional()
});

// src/models/requirement.v1.schema.ts
import { z as z53 } from "zod";
var ByppFileUrlV1Schema = z53.string().url().refine(
  (url) => {
    try {
      return /\.bypp$/i.test(new URL(url).pathname);
    } catch {
      return false;
    }
  },
  { message: "must be the address of a .bypp file" }
);
var RequirementSourceV1Schema = z53.object({
  byppUrl: ByppFileUrlV1Schema,
  bundleName: z53.string().optional(),
  bundleVersion: z53.string().optional()
});
var RequirementV1Schema = z53.object({
  category: z53.string(),
  uid: z53.string(),
  name: z53.string().optional(),
  from: RequirementSourceV1Schema.optional()
});

// src/models/scene.v2.schema.ts
import { z as z54 } from "zod";
var SceneV2Schema = z54.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: z54.number().optional(),
  lightPositionY: z54.number().optional(),
  lightPositionZ: z54.number().optional(),
  lightIntensity: z54.number().optional(),
  lightColor: z54.string().optional(),
  useCustomLightPosition: z54.boolean().optional(),
  indoorLight: z54.boolean().optional()
});

// src/models/scene-background.v4.schema.ts
import { z as z57 } from "zod";

// src/models/scene-background.v3.schema.ts
import { z as z56 } from "zod";

// src/models/scene-background.v2.schema.ts
import { z as z55 } from "zod";
var SceneBackgroundBaseV2Schema = z55.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z55.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: z55.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z55.literal("customVideo")
});
var SceneBackgroundV2Schema = z55.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: z56.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z56.literal("customVideo")
});
var SceneBackgroundV3Schema = z56.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-background.v4.schema.ts
var CustomImageSceneBackgroundV4Schema = CustomImageSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var CustomVideoSceneBackgroundV4Schema = CustomVideoSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var SceneBackgroundV4Schema = z57.discriminatedUnion("type", [
  CustomImageSceneBackgroundV4Schema,
  CustomVideoSceneBackgroundV4Schema
]);

// src/models/scene-map.v4.schema.ts
import { z as z60 } from "zod";

// src/models/scene-map.v3.schema.ts
import { z as z59 } from "zod";

// src/models/scene-map.v2.schema.ts
import { z as z58 } from "zod";
var KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"];
var SceneMapBaseV2Schema = z58.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: z58.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z58.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z58.literal("customVideo")
});
var SceneMapV2Schema = z58.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: z59.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z59.literal("customVideo")
});
var SceneMapV3Schema = z59.discriminatedUnion("type", [
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
var SceneMapV4Schema = z60.discriminatedUnion("type", [
  CustomImageSceneMapV4Schema,
  CustomVideoSceneMapV4Schema
]);

// src/models/sheet.v5.schema.ts
import { z as z65 } from "zod";

// src/mixins/with-style.v3.schema.ts
import { z as z62 } from "zod";

// src/mixins/with-style.v2.schema.ts
import { z as z61 } from "zod";
var ObjectFitV6Schema = z61.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = z61.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = z61.object({
  justifyContent: z61.string().optional(),
  alignItems: z61.string().optional(),
  flexDirection: z61.string().optional(),
  lineHeight: z61.number().optional(),
  fontFamilyId: z61.string().optional(),
  fontScale: z61.number().optional(),
  color: z61.string().optional(),
  paddingTop: z61.number().optional(),
  paddingRight: z61.number().optional(),
  paddingBottom: z61.number().optional(),
  paddingLeft: z61.number().optional(),
  // New in v2:
  borderWidth: z61.number().optional(),
  borderStyle: z61.string().optional(),
  borderColor: z61.string().optional(),
  borderRadius: z61.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = z61.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: z62.number().optional()
}).nullable().optional();
var WithStyleV3Schema = z62.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
import { z as z64 } from "zod";

// src/models/sheet.v3.schema.ts
import { z as z63 } from "zod";
var SheetV3Schema = z63.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z63.string().optional(),
  widgetUids: z63.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: z64.record(z64.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: z65.record(z65.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/sheet.v7.schema.ts
var SheetV7Schema = SheetV6Schema.merge(WithCreditV1Schema);

// src/mixins/with-icon.v1.schema.ts
import { z as z66 } from "zod";
var WithIconV1Schema = z66.object({
  icon: z66.string().optional()
});

// src/models/tag.v2.schema.ts
import { z as z67 } from "zod";
var TagV2Schema = z67.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z67.boolean().default(false)
});

// src/models/tag.v3.schema.ts
var TagV3Schema = TagV2Schema.merge(WithIconV1Schema);

// src/models/tag-category.v2.schema.ts
var TagCategoryV2Schema = TagCategoryV1Schema.merge(WithIconV1Schema);

// src/models/variable.v9.schema.ts
import { z as z72 } from "zod";

// src/models/variable.v8.schema.ts
import { z as z71 } from "zod";

// src/models/variable.v5.schema.ts
import { z as z68 } from "zod";
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z68.literal("image")
});
var VariableV5Schema = z68.discriminatedUnion("type", [
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
import { z as z69 } from "zod";
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z69.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z69.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z69.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z69.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z69.string().optional()
  }
);
var VariableV6Schema = z69.discriminatedUnion("type", [
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
import { z as z70 } from "zod";
var NumberVariableV2Schema = NumberVariableV1Schema.extend({
  min: z70.number().optional(),
  max: z70.number().optional(),
  step: z70.number().optional()
});
var VariableV7Schema = z70.discriminatedUnion("type", [
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
var VariableV8Schema = z71.discriminatedUnion("type", [
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
  type: z72.literal("entityRef"),
  sourceVariableUid: VariableUidSchema.optional(),
  targetsTypes: z72.array(z72.string()).optional(),
  targetsTags: z72.array(TagUidSchema).optional(),
  targetTagsGroup: z72.enum(["every", "some"]).optional(),
  max: z72.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var EntityLookupVariableV9Schema = VariableBaseV8Schema.extend({
  type: z72.literal("entityLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  keyVariableUid: VariableUidSchema.optional(),
  labelVariableUid: VariableUidSchema.optional(),
  multiAggregator: z72.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z72.string().optional()
});
var VariableV9Schema = z72.discriminatedUnion("type", [
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

// src/models/widget.v10.schema.ts
import { z as z79 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z73 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z73.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
import { z as z74 } from "zod";
var EntityImageObjectFitV5Schema = z74.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z74.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z74.discriminatedUnion("type", [
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

// src/models/widget.v8.schema.ts
import { z as z77 } from "zod";

// src/models/widget.v6.schema.ts
import { z as z75 } from "zod";
var WidgetEmptyV6Schema = WidgetEmptyV1Schema.merge(WithStyleV2Schema);
var WidgetBigNumberV6Schema = WidgetBigNumberV1Schema.merge(WithStyleV2Schema);
var WidgetPlainTextV6Schema = WidgetPlainTextV1Schema.merge(WithStyleV2Schema);
var WidgetToggleV6Schema = WidgetToggleV1Schema.merge(WithStyleV2Schema);
var WidgetBulletListV6Schema = WidgetBulletListV1Schema.merge(WithStyleV2Schema);
var WidgetInlineListV6Schema = WidgetInlineListV1Schema.merge(WithStyleV2Schema);
var WidgetPipsV6Schema = WidgetPipsV1Schema.merge(WithStyleV2Schema);
var WidgetBarV6Schema = WidgetBarV1Schema.merge(WithStyleV2Schema);
var WidgetEntityImageV6Schema = WidgetEntityImageV5Schema.merge(WithStyleV2Schema);
var WidgetV6Schema = z75.discriminatedUnion("type", [
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
import { z as z76 } from "zod";
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: z76.literal("wheel"),
  readingPosition: z76.string().optional(),
  labelOrientation: z76.string().optional(),
  radius: z76.number().optional()
});
var WidgetV7Schema = z76.discriminatedUnion("type", [
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
var WithWidgetActionsV8Schema = z77.object({
  actionsVariablesUids: z77.array(VariableUidSchema).optional()
});
var WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).merge(WithWidgetActionsV8Schema).extend({
  type: z77.literal("actionRoll")
});
var WidgetV8Schema = z77.discriminatedUnion("type", [
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
import { z as z78 } from "zod";
var WidgetActionRollV9Schema = WidgetActionRollV8Schema.merge(WithCreditV1Schema);
var WidgetV9Schema = z78.discriminatedUnion("type", [
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
var WidgetEntityGridV10Schema = WidgetBaseV1Schema.extend({
  type: z79.literal("entityGrid"),
  gapX: z79.number().optional(),
  gapY: z79.number().optional(),
  listOptionStyle: z79.string().optional(),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional(),
  imageWidth: z79.number().optional(),
  imageHeight: z79.number().optional()
}).merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema);
var WidgetV10Schema = z79.discriminatedUnion("type", [
  ...WidgetV9Schema.options,
  WidgetEntityGridV10Schema
]);

// src/schemas/bypp.v4.schema.ts
import { z as z83 } from "zod";

// src/models/dialect.v2.schema.ts
import { z as z80 } from "zod";
var DialectFontV2Schema = z80.object({
  fontFamily: z80.string(),
  fontUrl: z80.string().url()
});
var DialectV2Schema = z80.object({
  uid: DialectUidSchema,
  name: z80.string(),
  font: DialectFontV2Schema,
  order: z80.number().optional(),
  spokenByEntitiesUids: z80.array(EntityUidSchema).default([])
});

// src/models/entity.v2.schema.ts
import { z as z81 } from "zod";
var EntityBaseV2Schema = z81.object({
  uid: EntityUidSchema,
  displayName: z81.string().optional(),
  description: z81.string().optional(),
  tagsUid: z81.array(TagUidSchema).default([]),
  sheetOverrides: z81.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("group"),
  ranks: z81.array(GroupRankV1Schema).default([]),
  charactersUids: z81.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: z81.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z81.literal("event")
});
var EntityV2Schema = z81.discriminatedUnion("type", [
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
import { z as z82 } from "zod";
var RandomTableRowV2Schema = z82.object({
  uid: RandomTableRowUidSchema,
  range: z82.number().default(1),
  content: z82.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z82.object({
  uid: RandomTableUidSchema,
  title: z82.string(),
  rows: z82.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z83.object({
  bundleName: z83.string().min(1),
  authorName: z83.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z83.string().url().optional()
});
var BeyondPaperV4Schema = z83.object({
  // Format metadata
  version: z83.literal(4),
  format: z83.literal("bypp"),
  // Bundle metadata
  name: z83.string(),
  exportedAt: z83.string(),
  bundleVersion: z83.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z83.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z83.array(z83.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z83.array(DialectV2Schema).default([]),
  entities: z83.array(EntityV2Schema).default([]),
  pages: z83.array(PageV1Schema).default([]),
  chunks: z83.array(ChunkV2Schema).default([]),
  datasets: z83.array(DatasetV2Schema).default([]),
  variables: z83.array(VariableV2Schema).default([]),
  widgets: z83.array(WidgetV1Schema).default([]),
  sheets: z83.array(SheetV3Schema).default([]),
  dataTables: z83.array(DataTableV3Schema).default([]),
  randomTables: z83.array(RandomTableV2Schema).default([]),
  tags: z83.array(TagV2Schema).default([]),
  tagCategories: z83.array(TagCategoryV1Schema).default([]),
  scenes: z83.array(SceneV2Schema).default([]),
  sceneMaps: z83.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z83.array(SceneBackgroundV2Schema).default([]),
  assets: z83.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v20.schema.ts
var BeyondPaperV20Schema = z84.object({
  // Format metadata
  version: z84.literal(20),
  format: z84.literal("bypp"),
  // Bundle metadata
  name: z84.string(),
  exportedAt: z84.string(),
  bundleVersion: z84.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z84.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z84.array(z84.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z84.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z84.array(DialectV3Schema).default([]),
  entities: z84.array(EntityV5Schema).default([]),
  pages: z84.array(PageV1Schema).default([]),
  chunks: z84.array(ChunkV11Schema).default([]),
  datasets: z84.array(DatasetV2Schema).default([]),
  variables: z84.array(VariableV9Schema).default([]),
  widgets: z84.array(WidgetV10Schema).default([]),
  sheets: z84.array(SheetV7Schema).default([]),
  dataTables: z84.array(DataTableV3Schema).default([]),
  randomTables: z84.array(RandomTableV7Schema).default([]),
  tags: z84.array(TagV3Schema).default([]),
  tagCategories: z84.array(TagCategoryV2Schema).default([]),
  scenes: z84.array(SceneV2Schema).default([]),
  sceneMaps: z84.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z84.array(SceneBackgroundV4Schema).default([]),
  assets: z84.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z85 } from "zod";
var BeyondPaperV1Schema = z85.object({
  // Format metadata
  version: z85.literal(1),
  format: z85.literal("bypp"),
  // Bundle metadata
  name: z85.string(),
  exportedAt: z85.string(),
  bundleVersion: z85.string(),
  // Content
  dialects: z85.array(DialectV1Schema),
  entities: z85.array(EntityV1Schema),
  pages: z85.array(PageV1Schema),
  chunks: z85.array(ChunkV1Schema),
  datasets: z85.array(DatasetV1Schema),
  variables: z85.array(VariableV1Schema),
  widgets: z85.array(WidgetV1Schema),
  randomTables: z85.array(RandomTableV1Schema),
  tags: z85.array(TagV1Schema),
  tagCategories: z85.array(TagCategoryV1Schema),
  scenes: z85.array(SceneV1Schema),
  sceneMaps: z85.array(SceneMapV1Schema),
  sceneBackgrounds: z85.array(SceneBackgroundV1Schema),
  assets: z85.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z86 } from "zod";
var BeyondPaperV2Schema = z86.object({
  // Format metadata
  version: z86.literal(2),
  format: z86.literal("bypp"),
  // Bundle metadata
  name: z86.string(),
  exportedAt: z86.string(),
  bundleVersion: z86.string(),
  // Content
  dialects: z86.array(DialectV1Schema),
  entities: z86.array(EntityV1Schema),
  pages: z86.array(PageV1Schema),
  chunks: z86.array(ChunkV1Schema),
  datasets: z86.array(DatasetV1Schema),
  variables: z86.array(VariableV2Schema),
  widgets: z86.array(WidgetV1Schema),
  sheets: z86.array(SheetV2Schema),
  dataTables: z86.array(DataTableV2Schema),
  randomTables: z86.array(RandomTableV1Schema),
  tags: z86.array(TagV1Schema),
  tagCategories: z86.array(TagCategoryV1Schema),
  scenes: z86.array(SceneV1Schema),
  sceneMaps: z86.array(SceneMapV1Schema),
  sceneBackgrounds: z86.array(SceneBackgroundV1Schema),
  assets: z86.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z87 } from "zod";
var BeyondPaperV5Schema = z87.object({
  // Format metadata
  version: z87.literal(5),
  format: z87.literal("bypp"),
  // Bundle metadata
  name: z87.string(),
  exportedAt: z87.string(),
  bundleVersion: z87.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z87.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z87.array(z87.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z87.array(DialectV2Schema).default([]),
  entities: z87.array(EntityV2Schema).default([]),
  pages: z87.array(PageV1Schema).default([]),
  chunks: z87.array(ChunkV2Schema).default([]),
  datasets: z87.array(DatasetV2Schema).default([]),
  variables: z87.array(VariableV5Schema).default([]),
  widgets: z87.array(WidgetV5Schema).default([]),
  sheets: z87.array(SheetV3Schema).default([]),
  dataTables: z87.array(DataTableV3Schema).default([]),
  randomTables: z87.array(RandomTableV2Schema).default([]),
  tags: z87.array(TagV2Schema).default([]),
  tagCategories: z87.array(TagCategoryV1Schema).default([]),
  scenes: z87.array(SceneV2Schema).default([]),
  sceneMaps: z87.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z87.array(SceneBackgroundV2Schema).default([]),
  assets: z87.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
import { z as z88 } from "zod";
var BeyondPaperV6Schema = z88.object({
  // Format metadata
  version: z88.literal(6),
  format: z88.literal("bypp"),
  // Bundle metadata
  name: z88.string(),
  exportedAt: z88.string(),
  bundleVersion: z88.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z88.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z88.array(z88.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z88.array(DialectV2Schema).default([]),
  entities: z88.array(EntityV2Schema).default([]),
  pages: z88.array(PageV1Schema).default([]),
  chunks: z88.array(ChunkV2Schema).default([]),
  datasets: z88.array(DatasetV2Schema).default([]),
  variables: z88.array(VariableV6Schema).default([]),
  widgets: z88.array(WidgetV5Schema).default([]),
  sheets: z88.array(SheetV3Schema).default([]),
  dataTables: z88.array(DataTableV3Schema).default([]),
  randomTables: z88.array(RandomTableV2Schema).default([]),
  tags: z88.array(TagV2Schema).default([]),
  tagCategories: z88.array(TagCategoryV1Schema).default([]),
  scenes: z88.array(SceneV2Schema).default([]),
  sceneMaps: z88.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z88.array(SceneBackgroundV2Schema).default([]),
  assets: z88.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
import { z as z89 } from "zod";
var BeyondPaperV7Schema = z89.object({
  // Format metadata
  version: z89.literal(7),
  format: z89.literal("bypp"),
  // Bundle metadata
  name: z89.string(),
  exportedAt: z89.string(),
  bundleVersion: z89.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z89.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z89.array(z89.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z89.array(DialectV2Schema).default([]),
  entities: z89.array(EntityV2Schema).default([]),
  pages: z89.array(PageV1Schema).default([]),
  chunks: z89.array(ChunkV2Schema).default([]),
  datasets: z89.array(DatasetV2Schema).default([]),
  variables: z89.array(VariableV6Schema).default([]),
  widgets: z89.array(WidgetV5Schema).default([]),
  sheets: z89.array(SheetV3Schema).default([]),
  dataTables: z89.array(DataTableV3Schema).default([]),
  randomTables: z89.array(RandomTableV7Schema).default([]),
  tags: z89.array(TagV2Schema).default([]),
  tagCategories: z89.array(TagCategoryV1Schema).default([]),
  scenes: z89.array(SceneV2Schema).default([]),
  sceneMaps: z89.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z89.array(SceneBackgroundV2Schema).default([]),
  assets: z89.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
import { z as z90 } from "zod";
var BeyondPaperV8Schema = z90.object({
  // Format metadata
  version: z90.literal(8),
  format: z90.literal("bypp"),
  // Bundle metadata
  name: z90.string(),
  exportedAt: z90.string(),
  bundleVersion: z90.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z90.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z90.array(z90.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z90.array(DialectV2Schema).default([]),
  entities: z90.array(EntityV2Schema).default([]),
  pages: z90.array(PageV1Schema).default([]),
  chunks: z90.array(ChunkV2Schema).default([]),
  datasets: z90.array(DatasetV2Schema).default([]),
  variables: z90.array(VariableV6Schema).default([]),
  widgets: z90.array(WidgetV6Schema).default([]),
  sheets: z90.array(SheetV4Schema).default([]),
  dataTables: z90.array(DataTableV3Schema).default([]),
  randomTables: z90.array(RandomTableV7Schema).default([]),
  tags: z90.array(TagV2Schema).default([]),
  tagCategories: z90.array(TagCategoryV1Schema).default([]),
  scenes: z90.array(SceneV2Schema).default([]),
  sceneMaps: z90.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z90.array(SceneBackgroundV2Schema).default([]),
  assets: z90.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
import { z as z91 } from "zod";
var BeyondPaperV9Schema = z91.object({
  // Format metadata
  version: z91.literal(9),
  format: z91.literal("bypp"),
  // Bundle metadata
  name: z91.string(),
  exportedAt: z91.string(),
  bundleVersion: z91.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z91.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z91.array(z91.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z91.array(DialectV2Schema).default([]),
  entities: z91.array(EntityV2Schema).default([]),
  pages: z91.array(PageV1Schema).default([]),
  chunks: z91.array(ChunkV2Schema).default([]),
  datasets: z91.array(DatasetV2Schema).default([]),
  variables: z91.array(VariableV7Schema).default([]),
  widgets: z91.array(WidgetV7Schema).default([]),
  sheets: z91.array(SheetV5Schema).default([]),
  dataTables: z91.array(DataTableV3Schema).default([]),
  randomTables: z91.array(RandomTableV7Schema).default([]),
  tags: z91.array(TagV2Schema).default([]),
  tagCategories: z91.array(TagCategoryV1Schema).default([]),
  scenes: z91.array(SceneV2Schema).default([]),
  sceneMaps: z91.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z91.array(SceneBackgroundV2Schema).default([]),
  assets: z91.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
import { z as z92 } from "zod";
var BeyondPaperV10Schema = z92.object({
  // Format metadata
  version: z92.literal(10),
  format: z92.literal("bypp"),
  // Bundle metadata
  name: z92.string(),
  exportedAt: z92.string(),
  bundleVersion: z92.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z92.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z92.array(z92.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z92.array(DialectV2Schema).default([]),
  entities: z92.array(EntityV3Schema).default([]),
  pages: z92.array(PageV1Schema).default([]),
  chunks: z92.array(ChunkV2Schema).default([]),
  datasets: z92.array(DatasetV2Schema).default([]),
  variables: z92.array(VariableV7Schema).default([]),
  widgets: z92.array(WidgetV7Schema).default([]),
  sheets: z92.array(SheetV6Schema).default([]),
  dataTables: z92.array(DataTableV3Schema).default([]),
  randomTables: z92.array(RandomTableV7Schema).default([]),
  tags: z92.array(TagV2Schema).default([]),
  tagCategories: z92.array(TagCategoryV1Schema).default([]),
  scenes: z92.array(SceneV2Schema).default([]),
  sceneMaps: z92.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z92.array(SceneBackgroundV3Schema).default([]),
  assets: z92.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v11.schema.ts
import { z as z93 } from "zod";
var BeyondPaperV11Schema = z93.object({
  // Format metadata
  version: z93.literal(11),
  format: z93.literal("bypp"),
  // Bundle metadata
  name: z93.string(),
  exportedAt: z93.string(),
  bundleVersion: z93.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z93.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z93.array(z93.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z93.array(DialectV2Schema).default([]),
  entities: z93.array(EntityV3Schema).default([]),
  pages: z93.array(PageV1Schema).default([]),
  chunks: z93.array(ChunkV11Schema).default([]),
  datasets: z93.array(DatasetV2Schema).default([]),
  variables: z93.array(VariableV7Schema).default([]),
  widgets: z93.array(WidgetV7Schema).default([]),
  sheets: z93.array(SheetV6Schema).default([]),
  dataTables: z93.array(DataTableV3Schema).default([]),
  randomTables: z93.array(RandomTableV7Schema).default([]),
  tags: z93.array(TagV2Schema).default([]),
  tagCategories: z93.array(TagCategoryV1Schema).default([]),
  scenes: z93.array(SceneV2Schema).default([]),
  sceneMaps: z93.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z93.array(SceneBackgroundV3Schema).default([]),
  assets: z93.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v12.schema.ts
import { z as z94 } from "zod";
var BeyondPaperV12Schema = z94.object({
  // Format metadata
  version: z94.literal(12),
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
  entities: z94.array(EntityV3Schema).default([]),
  pages: z94.array(PageV1Schema).default([]),
  chunks: z94.array(ChunkV11Schema).default([]),
  datasets: z94.array(DatasetV2Schema).default([]),
  variables: z94.array(VariableV7Schema).default([]),
  widgets: z94.array(WidgetV8Schema).default([]),
  sheets: z94.array(SheetV6Schema).default([]),
  dataTables: z94.array(DataTableV3Schema).default([]),
  randomTables: z94.array(RandomTableV7Schema).default([]),
  tags: z94.array(TagV2Schema).default([]),
  tagCategories: z94.array(TagCategoryV1Schema).default([]),
  scenes: z94.array(SceneV2Schema).default([]),
  sceneMaps: z94.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z94.array(SceneBackgroundV3Schema).default([]),
  assets: z94.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v13.schema.ts
import { z as z95 } from "zod";
var BeyondPaperV13Schema = z95.object({
  // Format metadata
  version: z95.literal(13),
  format: z95.literal("bypp"),
  // Bundle metadata
  name: z95.string(),
  exportedAt: z95.string(),
  bundleVersion: z95.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z95.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z95.array(z95.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z95.array(DialectV2Schema).default([]),
  entities: z95.array(EntityV4Schema).default([]),
  pages: z95.array(PageV1Schema).default([]),
  chunks: z95.array(ChunkV11Schema).default([]),
  datasets: z95.array(DatasetV2Schema).default([]),
  variables: z95.array(VariableV7Schema).default([]),
  widgets: z95.array(WidgetV9Schema).default([]),
  sheets: z95.array(SheetV7Schema).default([]),
  dataTables: z95.array(DataTableV3Schema).default([]),
  randomTables: z95.array(RandomTableV7Schema).default([]),
  tags: z95.array(TagV2Schema).default([]),
  tagCategories: z95.array(TagCategoryV1Schema).default([]),
  scenes: z95.array(SceneV2Schema).default([]),
  sceneMaps: z95.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z95.array(SceneBackgroundV4Schema).default([]),
  assets: z95.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v14.schema.ts
import { z as z96 } from "zod";
var BeyondPaperV14Schema = z96.object({
  // Format metadata
  version: z96.literal(14),
  format: z96.literal("bypp"),
  // Bundle metadata
  name: z96.string(),
  exportedAt: z96.string(),
  bundleVersion: z96.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z96.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z96.array(z96.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z96.array(DialectV2Schema).default([]),
  entities: z96.array(EntityV4Schema).default([]),
  pages: z96.array(PageV1Schema).default([]),
  chunks: z96.array(ChunkV11Schema).default([]),
  datasets: z96.array(DatasetV2Schema).default([]),
  variables: z96.array(VariableV7Schema).default([]),
  widgets: z96.array(WidgetV9Schema).default([]),
  sheets: z96.array(SheetV7Schema).default([]),
  dataTables: z96.array(DataTableV3Schema).default([]),
  randomTables: z96.array(RandomTableV7Schema).default([]),
  tags: z96.array(TagV2Schema).default([]),
  tagCategories: z96.array(TagCategoryV1Schema).default([]),
  scenes: z96.array(SceneV2Schema).default([]),
  sceneMaps: z96.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z96.array(SceneBackgroundV4Schema).default([]),
  assets: z96.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v15.schema.ts
import { z as z97 } from "zod";
var BeyondPaperV15Schema = z97.object({
  // Format metadata
  version: z97.literal(15),
  format: z97.literal("bypp"),
  // Bundle metadata
  name: z97.string(),
  exportedAt: z97.string(),
  bundleVersion: z97.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z97.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z97.array(z97.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z97.array(DialectV3Schema).default([]),
  entities: z97.array(EntityV4Schema).default([]),
  pages: z97.array(PageV1Schema).default([]),
  chunks: z97.array(ChunkV11Schema).default([]),
  datasets: z97.array(DatasetV2Schema).default([]),
  variables: z97.array(VariableV7Schema).default([]),
  widgets: z97.array(WidgetV9Schema).default([]),
  sheets: z97.array(SheetV7Schema).default([]),
  dataTables: z97.array(DataTableV3Schema).default([]),
  randomTables: z97.array(RandomTableV7Schema).default([]),
  tags: z97.array(TagV2Schema).default([]),
  tagCategories: z97.array(TagCategoryV1Schema).default([]),
  scenes: z97.array(SceneV2Schema).default([]),
  sceneMaps: z97.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z97.array(SceneBackgroundV4Schema).default([]),
  assets: z97.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v16.schema.ts
import { z as z98 } from "zod";
var BeyondPaperV16Schema = z98.object({
  // Format metadata
  version: z98.literal(16),
  format: z98.literal("bypp"),
  // Bundle metadata
  name: z98.string(),
  exportedAt: z98.string(),
  bundleVersion: z98.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z98.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z98.array(z98.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z98.array(DialectV3Schema).default([]),
  entities: z98.array(EntityV4Schema).default([]),
  pages: z98.array(PageV1Schema).default([]),
  chunks: z98.array(ChunkV11Schema).default([]),
  datasets: z98.array(DatasetV2Schema).default([]),
  variables: z98.array(VariableV8Schema).default([]),
  widgets: z98.array(WidgetV9Schema).default([]),
  sheets: z98.array(SheetV7Schema).default([]),
  dataTables: z98.array(DataTableV3Schema).default([]),
  randomTables: z98.array(RandomTableV7Schema).default([]),
  tags: z98.array(TagV2Schema).default([]),
  tagCategories: z98.array(TagCategoryV1Schema).default([]),
  scenes: z98.array(SceneV2Schema).default([]),
  sceneMaps: z98.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z98.array(SceneBackgroundV4Schema).default([]),
  assets: z98.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v17.schema.ts
import { z as z99 } from "zod";
var BeyondPaperV17Schema = z99.object({
  // Format metadata
  version: z99.literal(17),
  format: z99.literal("bypp"),
  // Bundle metadata
  name: z99.string(),
  exportedAt: z99.string(),
  bundleVersion: z99.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z99.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z99.array(z99.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z99.array(DialectV3Schema).default([]),
  entities: z99.array(EntityV4Schema).default([]),
  pages: z99.array(PageV1Schema).default([]),
  chunks: z99.array(ChunkV11Schema).default([]),
  datasets: z99.array(DatasetV2Schema).default([]),
  variables: z99.array(VariableV8Schema).default([]),
  widgets: z99.array(WidgetV9Schema).default([]),
  sheets: z99.array(SheetV7Schema).default([]),
  dataTables: z99.array(DataTableV3Schema).default([]),
  randomTables: z99.array(RandomTableV7Schema).default([]),
  tags: z99.array(TagV3Schema).default([]),
  tagCategories: z99.array(TagCategoryV2Schema).default([]),
  scenes: z99.array(SceneV2Schema).default([]),
  sceneMaps: z99.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z99.array(SceneBackgroundV4Schema).default([]),
  assets: z99.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v18.schema.ts
import { z as z100 } from "zod";
var BeyondPaperV18Schema = z100.object({
  // Format metadata
  version: z100.literal(18),
  format: z100.literal("bypp"),
  // Bundle metadata
  name: z100.string(),
  exportedAt: z100.string(),
  bundleVersion: z100.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z100.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z100.array(z100.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z100.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z100.array(DialectV3Schema).default([]),
  entities: z100.array(EntityV4Schema).default([]),
  pages: z100.array(PageV1Schema).default([]),
  chunks: z100.array(ChunkV11Schema).default([]),
  datasets: z100.array(DatasetV2Schema).default([]),
  variables: z100.array(VariableV8Schema).default([]),
  widgets: z100.array(WidgetV9Schema).default([]),
  sheets: z100.array(SheetV7Schema).default([]),
  dataTables: z100.array(DataTableV3Schema).default([]),
  randomTables: z100.array(RandomTableV7Schema).default([]),
  tags: z100.array(TagV3Schema).default([]),
  tagCategories: z100.array(TagCategoryV2Schema).default([]),
  scenes: z100.array(SceneV2Schema).default([]),
  sceneMaps: z100.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z100.array(SceneBackgroundV4Schema).default([]),
  assets: z100.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v19.schema.ts
import { z as z101 } from "zod";
var BeyondPaperV19Schema = z101.object({
  // Format metadata
  version: z101.literal(19),
  format: z101.literal("bypp"),
  // Bundle metadata
  name: z101.string(),
  exportedAt: z101.string(),
  bundleVersion: z101.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z101.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z101.array(z101.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z101.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z101.array(DialectV3Schema).default([]),
  entities: z101.array(EntityV4Schema).default([]),
  pages: z101.array(PageV1Schema).default([]),
  chunks: z101.array(ChunkV11Schema).default([]),
  datasets: z101.array(DatasetV2Schema).default([]),
  variables: z101.array(VariableV9Schema).default([]),
  widgets: z101.array(WidgetV10Schema).default([]),
  sheets: z101.array(SheetV7Schema).default([]),
  dataTables: z101.array(DataTableV3Schema).default([]),
  randomTables: z101.array(RandomTableV7Schema).default([]),
  tags: z101.array(TagV3Schema).default([]),
  tagCategories: z101.array(TagCategoryV2Schema).default([]),
  scenes: z101.array(SceneV2Schema).default([]),
  sceneMaps: z101.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z101.array(SceneBackgroundV4Schema).default([]),
  assets: z101.array(AssetV3Schema).default([])
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
  19: v19ToV20
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
  20: v20ToV19
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
  20: BeyondPaperV20Schema
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
  AbilityEntityV5Schema as AbilityEntitySchema,
  AbilityEntityV1Schema,
  AbilityEntityV2Schema,
  AbilityEntityV3Schema,
  AbilityEntityV4Schema,
  AbilityEntityV5Schema,
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
  BeyondPaperV20Schema as BeyondPaperSchema,
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
  BeyondPaperV2Schema,
  BeyondPaperV3Schema,
  BeyondPaperV4Schema,
  BeyondPaperV5Schema,
  BeyondPaperV6Schema,
  BeyondPaperV7Schema,
  BeyondPaperV8Schema,
  BeyondPaperV9Schema,
  BooleanVariableV8Schema as BooleanVariableSchema,
  BooleanVariableV1Schema,
  BooleanVariableV8Schema,
  BundleImageV14Schema as BundleImageSchema,
  BundleImageV14Schema,
  ByppFileUrlV1Schema as ByppFileUrlSchema,
  ByppFileUrlV1Schema,
  CcLicenseV3Schema as CcLicenseSchema,
  CcLicenseV3Schema,
  CharacterEntityV5Schema as CharacterEntitySchema,
  CharacterEntityV1Schema,
  CharacterEntityV2Schema,
  CharacterEntityV3Schema,
  CharacterEntityV4Schema,
  CharacterEntityV5Schema,
  ChoiceOptionV1Schema as ChoiceOptionSchema,
  ChoiceOptionV1Schema,
  ChoiceVariableV8Schema as ChoiceVariableSchema,
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
  ChunkRandomV2Schema as ChunkRandomSchema,
  ChunkRandomV1Schema,
  ChunkRandomV2Schema,
  ChunkV11Schema as ChunkSchema,
  ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema,
  ChunkTextV11Schema as ChunkTextSchema,
  ChunkTextV11Schema,
  ChunkTextV1Schema,
  ChunkTextV2Schema,
  ChunkUidSchema,
  ChunkV11Schema,
  ChunkV1Schema,
  ChunkV2Schema,
  CreatureEntityV5Schema as CreatureEntitySchema,
  CreatureEntityV1Schema,
  CreatureEntityV2Schema,
  CreatureEntityV3Schema,
  CreatureEntityV4Schema,
  CreatureEntityV5Schema,
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
  DataTableDirectLookupVariableV8Schema as DataTableDirectLookupVariableSchema,
  DataTableDirectLookupVariableV6Schema,
  DataTableDirectLookupVariableV8Schema,
  DataTableLookupVariableV8Schema as DataTableLookupVariableSchema,
  DataTableLookupVariableV2Schema,
  DataTableLookupVariableV8Schema,
  DataTableRefVariableV8Schema as DataTableRefVariableSchema,
  DataTableRefVariableV2Schema,
  DataTableRefVariableV8Schema,
  DataTableRowV3Schema as DataTableRowSchema,
  DataTableRowUidSchema,
  DataTableRowV2Schema,
  DataTableRowV3Schema,
  DataTableV3Schema as DataTableSchema,
  DataTableUidSchema,
  DataTableV2Schema,
  DataTableV3Schema,
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
  EntityActionV1Schema as EntityActionSchema,
  EntityActionV1Schema,
  EntityAssetV3Schema as EntityAssetSchema,
  EntityAssetV1Schema,
  EntityAssetV2Schema,
  EntityAssetV3Schema,
  EntityBaseV5Schema as EntityBaseSchema,
  EntityBaseV1Schema,
  EntityBaseV2Schema,
  EntityBaseV3Schema,
  EntityBaseV4Schema,
  EntityBaseV5Schema,
  EntityImageFormatV5Schema as EntityImageFormatSchema,
  EntityImageFormatV5Schema,
  EntityImageObjectFitV5Schema as EntityImageObjectFitSchema,
  EntityImageObjectFitV5Schema,
  EntityLookupVariableV9Schema as EntityLookupVariableSchema,
  EntityLookupVariableV9Schema,
  EntityRefVariableV9Schema as EntityRefVariableSchema,
  EntityRefVariableV9Schema,
  EntityV5Schema as EntitySchema,
  EntityTypeV1Schema as EntityTypeSchema,
  EntityTypeV1Schema,
  EntityTypeV1Schema as EntityTypeV2Schema,
  EntityTypeV1Schema as EntityTypeV3Schema,
  EntityTypeV1Schema as EntityTypeV4Schema,
  EntityTypeV1Schema as EntityTypeV5Schema,
  EntityUidSchema,
  EntityV1Schema,
  EntityV2Schema,
  EntityV3Schema,
  EntityV4Schema,
  EntityV5Schema,
  EventEntityV5Schema as EventEntitySchema,
  EventEntityV1Schema,
  EventEntityV2Schema,
  EventEntityV3Schema,
  EventEntityV4Schema,
  EventEntityV5Schema,
  FormulaVariableV8Schema as FormulaVariableSchema,
  FormulaVariableV1Schema,
  FormulaVariableV8Schema,
  GridDataV1Schema as GridDataSchema,
  GridDataV1Schema,
  GroupEntityV5Schema as GroupEntitySchema,
  GroupEntityV1Schema,
  GroupEntityV2Schema,
  GroupEntityV3Schema,
  GroupEntityV4Schema,
  GroupEntityV5Schema,
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
  ImageVariableV8Schema as ImageVariableSchema,
  ImageVariableV5Schema,
  ImageVariableV8Schema,
  ItemEntityV5Schema as ItemEntitySchema,
  ItemEntityV1Schema,
  ItemEntityV2Schema,
  ItemEntityV3Schema,
  ItemEntityV4Schema,
  ItemEntityV5Schema,
  KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS,
  NoteEntityV5Schema as NoteEntitySchema,
  NoteEntityV1Schema,
  NoteEntityV2Schema,
  NoteEntityV3Schema,
  NoteEntityV4Schema,
  NoteEntityV5Schema,
  NumberVariableV8Schema as NumberVariableSchema,
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
  PlaceEntityV5Schema as PlaceEntitySchema,
  PlaceEntityV1Schema,
  PlaceEntityV2Schema,
  PlaceEntityV3Schema,
  PlaceEntityV4Schema,
  PlaceEntityV5Schema,
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
  RollVariableV8Schema as RollVariableSchema,
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
  StoryEntityV5Schema as StoryEntitySchema,
  StoryEntityV1Schema,
  StoryEntityV2Schema,
  StoryEntityV3Schema,
  StoryEntityV4Schema,
  StoryEntityV5Schema,
  StyleV3Schema as StyleSchema,
  StyleV1Schema,
  StyleV2Schema,
  StyleV3Schema,
  TagCategoryV2Schema as TagCategorySchema,
  TagCategoryUidSchema,
  TagCategoryV1Schema,
  TagCategoryV2Schema,
  TagV3Schema as TagSchema,
  TagUidSchema,
  TagV1Schema,
  TagV2Schema,
  TagV3Schema,
  TextVariableV8Schema as TextVariableSchema,
  TextVariableV1Schema,
  TextVariableV8Schema,
  TranslatableTextV2Schema as TranslatableTextSchema,
  TranslatableTextV2Schema,
  VariableBaseV8Schema as VariableBaseSchema,
  VariableBaseV1Schema,
  VariableBaseV8Schema,
  VariableChoiceUidSchema,
  VariableDataValueV1Schema as VariableDataValueSchema,
  VariableDataValueV1Schema,
  VariableV9Schema as VariableSchema,
  VariableUidSchema,
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
  WidgetV10Schema as WidgetSchema,
  WidgetToggleV1Schema as WidgetToggleSchema,
  WidgetToggleV1Schema,
  WidgetUidSchema,
  WidgetV10Schema,
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
  WithStyleV3Schema as WithStyleSchema,
  WithStyleV1Schema,
  WithStyleV2Schema,
  WithStyleV3Schema,
  WithVideoUrlsV2Schema as WithVideoUrlsSchema,
  WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema,
  WithWidgetActionsV8Schema as WithWidgetActionsSchema,
  WithWidgetActionsV8Schema,
  migrate
};
//# sourceMappingURL=index.js.map