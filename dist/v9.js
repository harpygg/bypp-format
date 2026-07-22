// src/schemas/bypp.v13.schema.ts
import { z as z76 } from "zod";

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

// src/models/dialect.v2.schema.ts
import { z as z44 } from "zod";
var DialectFontV2Schema = z44.object({
  fontFamily: z44.string(),
  fontUrl: z44.string().url()
});
var DialectV2Schema = z44.object({
  uid: DialectUidSchema,
  name: z44.string(),
  font: DialectFontV2Schema,
  order: z44.number().optional(),
  spokenByEntitiesUids: z44.array(EntityUidSchema).default([])
});

// src/models/entity.v4.schema.ts
import { z as z49 } from "zod";

// src/mixins/with-scenes.v2.schema.ts
import { z as z45 } from "zod";
var WithScenesV2Schema = z45.object({
  scenesUids: z45.array(SceneUidSchema).default([])
});

// src/models/entity.v3.schema.ts
import { z as z48 } from "zod";

// src/mixins/with-archive.v2.schema.ts
import { z as z46 } from "zod";
var WithArchiveV2Schema = z46.object({
  isArchived: z46.boolean().default(false)
});

// src/mixins/with-images-urls.v3.schema.ts
var WithImagesUrlsV3Schema = WithImagesUrlsV2Schema.extend({
  dimensions: ImageDimensionsV1Schema.optional()
});

// src/mixins/with-pages.v2.schema.ts
import { z as z47 } from "zod";
var WithPagesV2Schema = z47.object({
  pagesOrder: z47.array(PageUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = z48.object({
  uid: EntityUidSchema,
  displayName: z48.string().optional(),
  description: z48.string().optional(),
  tagsUid: z48.array(TagUidSchema).default([]),
  sheetOverrides: z48.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("group"),
  ranks: z48.array(GroupRankV1Schema).default([]),
  charactersUids: z48.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: z48.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: z48.literal("event")
});
var EntityV3Schema = z48.discriminatedUnion("type", [
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
  type: z49.literal("character")
});
var CreatureEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("creature")
});
var GroupEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("group"),
  ranks: z49.array(GroupRankV1Schema).default([]),
  charactersUids: z49.array(EntityUidSchema).default([])
});
var PlaceEntityV4Schema = EntityBaseV4Schema.merge(
  WithScenesV2Schema
).extend({ type: z49.literal("place") });
var ItemEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("item")
});
var NoteEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("note")
});
var AbilityEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("ability")
});
var StoryEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("story")
});
var EventEntityV4Schema = EntityBaseV4Schema.extend({
  type: z49.literal("event")
});
var EntityV4Schema = z49.discriminatedUnion("type", [
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

// src/models/random-table.v7.schema.ts
import { z as z50 } from "zod";
var RandomTableRowV7Schema = z50.object({
  uid: RandomTableRowUidSchema,
  range: z50.number().default(1),
  content: z50.string(),
  randomTableRefs: z50.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = z50.object({
  uid: RandomTableUidSchema,
  title: z50.string(),
  rows: z50.array(RandomTableRowV7Schema).default([]),
  diceFormula: z50.string().optional()
});

// src/models/scene.v2.schema.ts
import { z as z51 } from "zod";
var SceneV2Schema = z51.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: z51.number().optional(),
  lightPositionY: z51.number().optional(),
  lightPositionZ: z51.number().optional(),
  lightIntensity: z51.number().optional(),
  lightColor: z51.string().optional(),
  useCustomLightPosition: z51.boolean().optional(),
  indoorLight: z51.boolean().optional()
});

// src/models/scene-background.v4.schema.ts
import { z as z54 } from "zod";

// src/models/scene-background.v3.schema.ts
import { z as z53 } from "zod";

// src/models/scene-background.v2.schema.ts
import { z as z52 } from "zod";
var SceneBackgroundBaseV2Schema = z52.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z52.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: z52.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z52.literal("customVideo")
});
var SceneBackgroundV2Schema = z52.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: z53.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z53.literal("customVideo")
});
var SceneBackgroundV3Schema = z53.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-background.v4.schema.ts
var CustomImageSceneBackgroundV4Schema = CustomImageSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var CustomVideoSceneBackgroundV4Schema = CustomVideoSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var SceneBackgroundV4Schema = z54.discriminatedUnion("type", [
  CustomImageSceneBackgroundV4Schema,
  CustomVideoSceneBackgroundV4Schema
]);

// src/models/scene-map.v4.schema.ts
import { z as z57 } from "zod";

// src/models/scene-map.v3.schema.ts
import { z as z56 } from "zod";

// src/models/scene-map.v2.schema.ts
import { z as z55 } from "zod";
var SceneMapBaseV2Schema = z55.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: z55.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z55.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z55.literal("customVideo")
});
var SceneMapV2Schema = z55.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: z56.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z56.literal("customVideo")
});
var SceneMapV3Schema = z56.discriminatedUnion("type", [
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
var SceneMapV4Schema = z57.discriminatedUnion("type", [
  CustomImageSceneMapV4Schema,
  CustomVideoSceneMapV4Schema
]);

// src/models/sheet.v5.schema.ts
import { z as z62 } from "zod";

// src/mixins/with-style.v3.schema.ts
import { z as z59 } from "zod";

// src/mixins/with-style.v2.schema.ts
import { z as z58 } from "zod";
var ObjectFitV6Schema = z58.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = z58.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = z58.object({
  justifyContent: z58.string().optional(),
  alignItems: z58.string().optional(),
  flexDirection: z58.string().optional(),
  lineHeight: z58.number().optional(),
  fontFamilyId: z58.string().optional(),
  fontScale: z58.number().optional(),
  color: z58.string().optional(),
  paddingTop: z58.number().optional(),
  paddingRight: z58.number().optional(),
  paddingBottom: z58.number().optional(),
  paddingLeft: z58.number().optional(),
  // New in v2:
  borderWidth: z58.number().optional(),
  borderStyle: z58.string().optional(),
  borderColor: z58.string().optional(),
  borderRadius: z58.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = z58.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: z59.number().optional()
}).nullable().optional();
var WithStyleV3Schema = z59.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
import { z as z61 } from "zod";

// src/models/sheet.v3.schema.ts
import { z as z60 } from "zod";
var SheetV3Schema = z60.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z60.string().optional(),
  widgetUids: z60.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: z61.record(z61.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: z62.record(z62.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/sheet.v7.schema.ts
var SheetV7Schema = SheetV6Schema.merge(WithCreditV1Schema);

// src/models/tag.v2.schema.ts
import { z as z63 } from "zod";
var TagV2Schema = z63.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z63.boolean().default(false)
});

// src/models/variable.v7.schema.ts
import { z as z66 } from "zod";

// src/models/variable.v5.schema.ts
import { z as z64 } from "zod";
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z64.literal("image")
});
var VariableV5Schema = z64.discriminatedUnion("type", [
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
import { z as z65 } from "zod";
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z65.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z65.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z65.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z65.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z65.string().optional()
  }
);
var VariableV6Schema = z65.discriminatedUnion("type", [
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
  min: z66.number().optional(),
  max: z66.number().optional(),
  step: z66.number().optional()
});
var VariableV7Schema = z66.discriminatedUnion("type", [
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

// src/models/widget.v9.schema.ts
import { z as z72 } from "zod";

// src/models/widget.v6.schema.ts
import { z as z69 } from "zod";

// src/models/widget.v5.schema.ts
import { z as z68 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z67 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z67.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = z68.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z68.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z68.discriminatedUnion("type", [
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
var WidgetV6Schema = z69.discriminatedUnion("type", [
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
import { z as z70 } from "zod";
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: z70.literal("wheel"),
  readingPosition: z70.string().optional(),
  labelOrientation: z70.string().optional(),
  radius: z70.number().optional()
});
var WidgetV7Schema = z70.discriminatedUnion("type", [
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
import { z as z71 } from "zod";
var WithWidgetActionsV8Schema = z71.object({
  actionsVariablesUids: z71.array(VariableUidSchema).optional()
});
var WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).merge(WithWidgetActionsV8Schema).extend({
  type: z71.literal("actionRoll")
});
var WidgetV8Schema = z71.discriminatedUnion("type", [
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
var WidgetActionRollV9Schema = WidgetActionRollV8Schema.merge(WithCreditV1Schema);
var WidgetV9Schema = z72.discriminatedUnion("type", [
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

// src/schemas/bypp.v4.schema.ts
import { z as z75 } from "zod";

// src/models/entity.v2.schema.ts
import { z as z73 } from "zod";
var EntityBaseV2Schema = z73.object({
  uid: EntityUidSchema,
  displayName: z73.string().optional(),
  description: z73.string().optional(),
  tagsUid: z73.array(TagUidSchema).default([]),
  sheetOverrides: z73.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("group"),
  ranks: z73.array(GroupRankV1Schema).default([]),
  charactersUids: z73.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: z73.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z73.literal("event")
});
var EntityV2Schema = z73.discriminatedUnion("type", [
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
import { z as z74 } from "zod";
var RandomTableRowV2Schema = z74.object({
  uid: RandomTableRowUidSchema,
  range: z74.number().default(1),
  content: z74.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z74.object({
  uid: RandomTableUidSchema,
  title: z74.string(),
  rows: z74.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z75.object({
  bundleName: z75.string().min(1),
  authorName: z75.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z75.string().url().optional()
});
var BeyondPaperV4Schema = z75.object({
  // Format metadata
  version: z75.literal(4),
  format: z75.literal("bypp"),
  // Bundle metadata
  name: z75.string(),
  exportedAt: z75.string(),
  bundleVersion: z75.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z75.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z75.array(z75.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z75.array(DialectV2Schema).default([]),
  entities: z75.array(EntityV2Schema).default([]),
  pages: z75.array(PageV1Schema).default([]),
  chunks: z75.array(ChunkV2Schema).default([]),
  datasets: z75.array(DatasetV2Schema).default([]),
  variables: z75.array(VariableV2Schema).default([]),
  widgets: z75.array(WidgetV1Schema).default([]),
  sheets: z75.array(SheetV3Schema).default([]),
  dataTables: z75.array(DataTableV3Schema).default([]),
  randomTables: z75.array(RandomTableV2Schema).default([]),
  tags: z75.array(TagV2Schema).default([]),
  tagCategories: z75.array(TagCategoryV1Schema).default([]),
  scenes: z75.array(SceneV2Schema).default([]),
  sceneMaps: z75.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z75.array(SceneBackgroundV2Schema).default([]),
  assets: z75.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v13.schema.ts
var BeyondPaperV13Schema = z76.object({
  // Format metadata
  version: z76.literal(13),
  format: z76.literal("bypp"),
  // Bundle metadata
  name: z76.string(),
  exportedAt: z76.string(),
  bundleVersion: z76.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z76.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z76.array(z76.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z76.array(DialectV2Schema).default([]),
  entities: z76.array(EntityV4Schema).default([]),
  pages: z76.array(PageV1Schema).default([]),
  chunks: z76.array(ChunkV11Schema).default([]),
  datasets: z76.array(DatasetV2Schema).default([]),
  variables: z76.array(VariableV7Schema).default([]),
  widgets: z76.array(WidgetV9Schema).default([]),
  sheets: z76.array(SheetV7Schema).default([]),
  dataTables: z76.array(DataTableV3Schema).default([]),
  randomTables: z76.array(RandomTableV7Schema).default([]),
  tags: z76.array(TagV2Schema).default([]),
  tagCategories: z76.array(TagCategoryV1Schema).default([]),
  scenes: z76.array(SceneV2Schema).default([]),
  sceneMaps: z76.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z76.array(SceneBackgroundV4Schema).default([]),
  assets: z76.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z77 } from "zod";
var BeyondPaperV1Schema = z77.object({
  // Format metadata
  version: z77.literal(1),
  format: z77.literal("bypp"),
  // Bundle metadata
  name: z77.string(),
  exportedAt: z77.string(),
  bundleVersion: z77.string(),
  // Content
  dialects: z77.array(DialectV1Schema),
  entities: z77.array(EntityV1Schema),
  pages: z77.array(PageV1Schema),
  chunks: z77.array(ChunkV1Schema),
  datasets: z77.array(DatasetV1Schema),
  variables: z77.array(VariableV1Schema),
  widgets: z77.array(WidgetV1Schema),
  randomTables: z77.array(RandomTableV1Schema),
  tags: z77.array(TagV1Schema),
  tagCategories: z77.array(TagCategoryV1Schema),
  scenes: z77.array(SceneV1Schema),
  sceneMaps: z77.array(SceneMapV1Schema),
  sceneBackgrounds: z77.array(SceneBackgroundV1Schema),
  assets: z77.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z78 } from "zod";
var BeyondPaperV2Schema = z78.object({
  // Format metadata
  version: z78.literal(2),
  format: z78.literal("bypp"),
  // Bundle metadata
  name: z78.string(),
  exportedAt: z78.string(),
  bundleVersion: z78.string(),
  // Content
  dialects: z78.array(DialectV1Schema),
  entities: z78.array(EntityV1Schema),
  pages: z78.array(PageV1Schema),
  chunks: z78.array(ChunkV1Schema),
  datasets: z78.array(DatasetV1Schema),
  variables: z78.array(VariableV2Schema),
  widgets: z78.array(WidgetV1Schema),
  sheets: z78.array(SheetV2Schema),
  dataTables: z78.array(DataTableV2Schema),
  randomTables: z78.array(RandomTableV1Schema),
  tags: z78.array(TagV1Schema),
  tagCategories: z78.array(TagCategoryV1Schema),
  scenes: z78.array(SceneV1Schema),
  sceneMaps: z78.array(SceneMapV1Schema),
  sceneBackgrounds: z78.array(SceneBackgroundV1Schema),
  assets: z78.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z79 } from "zod";
var BeyondPaperV5Schema = z79.object({
  // Format metadata
  version: z79.literal(5),
  format: z79.literal("bypp"),
  // Bundle metadata
  name: z79.string(),
  exportedAt: z79.string(),
  bundleVersion: z79.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z79.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z79.array(z79.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z79.array(DialectV2Schema).default([]),
  entities: z79.array(EntityV2Schema).default([]),
  pages: z79.array(PageV1Schema).default([]),
  chunks: z79.array(ChunkV2Schema).default([]),
  datasets: z79.array(DatasetV2Schema).default([]),
  variables: z79.array(VariableV5Schema).default([]),
  widgets: z79.array(WidgetV5Schema).default([]),
  sheets: z79.array(SheetV3Schema).default([]),
  dataTables: z79.array(DataTableV3Schema).default([]),
  randomTables: z79.array(RandomTableV2Schema).default([]),
  tags: z79.array(TagV2Schema).default([]),
  tagCategories: z79.array(TagCategoryV1Schema).default([]),
  scenes: z79.array(SceneV2Schema).default([]),
  sceneMaps: z79.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z79.array(SceneBackgroundV2Schema).default([]),
  assets: z79.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
import { z as z80 } from "zod";
var BeyondPaperV6Schema = z80.object({
  // Format metadata
  version: z80.literal(6),
  format: z80.literal("bypp"),
  // Bundle metadata
  name: z80.string(),
  exportedAt: z80.string(),
  bundleVersion: z80.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z80.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z80.array(z80.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z80.array(DialectV2Schema).default([]),
  entities: z80.array(EntityV2Schema).default([]),
  pages: z80.array(PageV1Schema).default([]),
  chunks: z80.array(ChunkV2Schema).default([]),
  datasets: z80.array(DatasetV2Schema).default([]),
  variables: z80.array(VariableV6Schema).default([]),
  widgets: z80.array(WidgetV5Schema).default([]),
  sheets: z80.array(SheetV3Schema).default([]),
  dataTables: z80.array(DataTableV3Schema).default([]),
  randomTables: z80.array(RandomTableV2Schema).default([]),
  tags: z80.array(TagV2Schema).default([]),
  tagCategories: z80.array(TagCategoryV1Schema).default([]),
  scenes: z80.array(SceneV2Schema).default([]),
  sceneMaps: z80.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z80.array(SceneBackgroundV2Schema).default([]),
  assets: z80.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
import { z as z81 } from "zod";
var BeyondPaperV7Schema = z81.object({
  // Format metadata
  version: z81.literal(7),
  format: z81.literal("bypp"),
  // Bundle metadata
  name: z81.string(),
  exportedAt: z81.string(),
  bundleVersion: z81.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z81.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z81.array(z81.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z81.array(DialectV2Schema).default([]),
  entities: z81.array(EntityV2Schema).default([]),
  pages: z81.array(PageV1Schema).default([]),
  chunks: z81.array(ChunkV2Schema).default([]),
  datasets: z81.array(DatasetV2Schema).default([]),
  variables: z81.array(VariableV6Schema).default([]),
  widgets: z81.array(WidgetV5Schema).default([]),
  sheets: z81.array(SheetV3Schema).default([]),
  dataTables: z81.array(DataTableV3Schema).default([]),
  randomTables: z81.array(RandomTableV7Schema).default([]),
  tags: z81.array(TagV2Schema).default([]),
  tagCategories: z81.array(TagCategoryV1Schema).default([]),
  scenes: z81.array(SceneV2Schema).default([]),
  sceneMaps: z81.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z81.array(SceneBackgroundV2Schema).default([]),
  assets: z81.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
import { z as z82 } from "zod";
var BeyondPaperV8Schema = z82.object({
  // Format metadata
  version: z82.literal(8),
  format: z82.literal("bypp"),
  // Bundle metadata
  name: z82.string(),
  exportedAt: z82.string(),
  bundleVersion: z82.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z82.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z82.array(z82.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z82.array(DialectV2Schema).default([]),
  entities: z82.array(EntityV2Schema).default([]),
  pages: z82.array(PageV1Schema).default([]),
  chunks: z82.array(ChunkV2Schema).default([]),
  datasets: z82.array(DatasetV2Schema).default([]),
  variables: z82.array(VariableV6Schema).default([]),
  widgets: z82.array(WidgetV6Schema).default([]),
  sheets: z82.array(SheetV4Schema).default([]),
  dataTables: z82.array(DataTableV3Schema).default([]),
  randomTables: z82.array(RandomTableV7Schema).default([]),
  tags: z82.array(TagV2Schema).default([]),
  tagCategories: z82.array(TagCategoryV1Schema).default([]),
  scenes: z82.array(SceneV2Schema).default([]),
  sceneMaps: z82.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z82.array(SceneBackgroundV2Schema).default([]),
  assets: z82.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
import { z as z83 } from "zod";
var BeyondPaperV9Schema = z83.object({
  // Format metadata
  version: z83.literal(9),
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
  variables: z83.array(VariableV7Schema).default([]),
  widgets: z83.array(WidgetV7Schema).default([]),
  sheets: z83.array(SheetV5Schema).default([]),
  dataTables: z83.array(DataTableV3Schema).default([]),
  randomTables: z83.array(RandomTableV7Schema).default([]),
  tags: z83.array(TagV2Schema).default([]),
  tagCategories: z83.array(TagCategoryV1Schema).default([]),
  scenes: z83.array(SceneV2Schema).default([]),
  sceneMaps: z83.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z83.array(SceneBackgroundV2Schema).default([]),
  assets: z83.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
import { z as z84 } from "zod";
var BeyondPaperV10Schema = z84.object({
  // Format metadata
  version: z84.literal(10),
  format: z84.literal("bypp"),
  // Bundle metadata
  name: z84.string(),
  exportedAt: z84.string(),
  bundleVersion: z84.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z84.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z84.array(z84.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z84.array(DialectV2Schema).default([]),
  entities: z84.array(EntityV3Schema).default([]),
  pages: z84.array(PageV1Schema).default([]),
  chunks: z84.array(ChunkV2Schema).default([]),
  datasets: z84.array(DatasetV2Schema).default([]),
  variables: z84.array(VariableV7Schema).default([]),
  widgets: z84.array(WidgetV7Schema).default([]),
  sheets: z84.array(SheetV6Schema).default([]),
  dataTables: z84.array(DataTableV3Schema).default([]),
  randomTables: z84.array(RandomTableV7Schema).default([]),
  tags: z84.array(TagV2Schema).default([]),
  tagCategories: z84.array(TagCategoryV1Schema).default([]),
  scenes: z84.array(SceneV2Schema).default([]),
  sceneMaps: z84.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z84.array(SceneBackgroundV3Schema).default([]),
  assets: z84.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v11.schema.ts
import { z as z85 } from "zod";
var BeyondPaperV11Schema = z85.object({
  // Format metadata
  version: z85.literal(11),
  format: z85.literal("bypp"),
  // Bundle metadata
  name: z85.string(),
  exportedAt: z85.string(),
  bundleVersion: z85.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z85.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z85.array(z85.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z85.array(DialectV2Schema).default([]),
  entities: z85.array(EntityV3Schema).default([]),
  pages: z85.array(PageV1Schema).default([]),
  chunks: z85.array(ChunkV11Schema).default([]),
  datasets: z85.array(DatasetV2Schema).default([]),
  variables: z85.array(VariableV7Schema).default([]),
  widgets: z85.array(WidgetV7Schema).default([]),
  sheets: z85.array(SheetV6Schema).default([]),
  dataTables: z85.array(DataTableV3Schema).default([]),
  randomTables: z85.array(RandomTableV7Schema).default([]),
  tags: z85.array(TagV2Schema).default([]),
  tagCategories: z85.array(TagCategoryV1Schema).default([]),
  scenes: z85.array(SceneV2Schema).default([]),
  sceneMaps: z85.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z85.array(SceneBackgroundV3Schema).default([]),
  assets: z85.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v12.schema.ts
import { z as z86 } from "zod";
var BeyondPaperV12Schema = z86.object({
  // Format metadata
  version: z86.literal(12),
  format: z86.literal("bypp"),
  // Bundle metadata
  name: z86.string(),
  exportedAt: z86.string(),
  bundleVersion: z86.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z86.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z86.array(z86.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z86.array(DialectV2Schema).default([]),
  entities: z86.array(EntityV3Schema).default([]),
  pages: z86.array(PageV1Schema).default([]),
  chunks: z86.array(ChunkV11Schema).default([]),
  datasets: z86.array(DatasetV2Schema).default([]),
  variables: z86.array(VariableV7Schema).default([]),
  widgets: z86.array(WidgetV8Schema).default([]),
  sheets: z86.array(SheetV6Schema).default([]),
  dataTables: z86.array(DataTableV3Schema).default([]),
  randomTables: z86.array(RandomTableV7Schema).default([]),
  tags: z86.array(TagV2Schema).default([]),
  tagCategories: z86.array(TagCategoryV1Schema).default([]),
  scenes: z86.array(SceneV2Schema).default([]),
  sceneMaps: z86.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z86.array(SceneBackgroundV3Schema).default([]),
  assets: z86.array(AssetV2Schema).default([])
});

// src/v9.ts
var BYPP_FORMAT_VERSION2 = 9;
export {
  AssetV2Schema as AssetSchema,
  BYPP_FORMAT_VERSION2 as BYPP_FORMAT_VERSION,
  BeyondPaperV9Schema as BeyondPaperSchema,
  ChunkV2Schema as ChunkSchema,
  DataTableV3Schema as DataTableSchema,
  DatasetV2Schema as DatasetSchema,
  DialectV2Schema as DialectSchema,
  EntityV2Schema as EntitySchema,
  PageV1Schema as PageSchema,
  RandomTableV7Schema as RandomTableSchema,
  SceneBackgroundV2Schema as SceneBackgroundSchema,
  SceneMapV2Schema as SceneMapSchema,
  SceneV2Schema as SceneSchema,
  SheetV5Schema as SheetSchema,
  StyleV3Schema as StyleSchema,
  TagCategoryV1Schema as TagCategorySchema,
  TagV2Schema as TagSchema,
  VariableV7Schema as VariableSchema,
  WidgetV7Schema as WidgetSchema
};
//# sourceMappingURL=v9.js.map