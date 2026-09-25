// src/schemas/bypp.v29.schema.ts
import { z as z96 } from "zod";

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

// src/models/bundle-credit.v29.schema.ts
import { z as z40 } from "zod";
var BundleCreditV29Schema = CreditV1Schema.extend({
  role: z40.string().min(1).optional()
});

// src/mixins/with-images-urls.v3.schema.ts
var WithImagesUrlsV3Schema = WithImagesUrlsV2Schema.extend({
  dimensions: ImageDimensionsV1Schema.optional()
});

// src/models/bundle-image.v14.schema.ts
var BundleImageV14Schema = WithImagesUrlsV3Schema.merge(WithCreditV1Schema);

// src/models/chunk.v12.schema.ts
import { z as z43 } from "zod";

// src/models/chunk.v2.schema.ts
import { z as z41 } from "zod";
var ChunkBaseV2Schema = z41.object({
  uid: ChunkUidSchema,
  name: z41.string().optional(),
  blockStyle: ChunkBlockStyleV1Schema.optional(),
  headingLevel: ChunkHeadingLevelV1Schema.optional(),
  headingMode: ChunkHeadingModeV1Schema.optional()
});
var ChunkTextV2Schema = ChunkBaseV2Schema.extend({
  type: z41.literal("text"),
  content: z41.string(),
  mentionedEntitiesUids: z41.array(EntityUidSchema).optional()
});
var ChunkTextProxyV2Schema = ChunkBaseV2Schema.extend({
  type: z41.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV2Schema = ChunkBaseV2Schema.extend({
  type: z41.literal("gallery"),
  assetUids: z41.array(AssetUidSchema).default([])
});
var ChunkRandomV2Schema = ChunkBaseV2Schema.extend({
  type: z41.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z41.boolean().optional()
});
var ChunkV2Schema = z41.discriminatedUnion("type", [
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/chunk.v11.schema.ts
import { z as z42 } from "zod";
var ChunkTextV11Schema = ChunkBaseV2Schema.extend({
  type: z42.literal("text"),
  content: z42.string(),
  mentionedEntitiesUids: z42.array(EntityUidSchema).optional(),
  wrappedInEntityUid: EntityUidSchema.optional()
});
var ChunkV11Schema = z42.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/chunk.v12.schema.ts
var ChunkMarkdownV12Schema = ChunkBaseV2Schema.extend({
  type: z43.literal("markdown"),
  content: z43.string()
});
var ChunkV12Schema = z43.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
  ChunkMarkdownV12Schema
]);

// src/models/data-table.v4.schema.ts
import { z as z53 } from "zod";

// src/models/data-table.v3.schema.ts
import { z as z44 } from "zod";
var DataTableRowV3Schema = z44.object({
  uid: DataTableRowUidSchema,
  data: z44.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = z44.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z44.string().optional(),
  weight: z44.number().optional(),
  adminOnly: z44.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z44.array(DataTableColumnV2Schema).default([]),
  rows: z44.array(DataTableRowV3Schema).default([])
});

// src/models/variable.v11.schema.ts
import { z as z52 } from "zod";

// src/models/variable.v8.schema.ts
import { z as z49 } from "zod";

// src/mixins/with-icon.v1.schema.ts
import { z as z45 } from "zod";
var WithIconV1Schema = z45.object({
  icon: z45.string().optional()
});

// src/models/variable.v5.schema.ts
import { z as z46 } from "zod";
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z46.literal("image")
});
var VariableV5Schema = z46.discriminatedUnion("type", [
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
import { z as z47 } from "zod";
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z47.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z47.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z47.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z47.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z47.string().optional()
  }
);
var VariableV6Schema = z47.discriminatedUnion("type", [
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
import { z as z48 } from "zod";
var NumberVariableV2Schema = NumberVariableV1Schema.extend({
  min: z48.number().optional(),
  max: z48.number().optional(),
  step: z48.number().optional()
});
var VariableV7Schema = z48.discriminatedUnion("type", [
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
var VariableV8Schema = z49.discriminatedUnion("type", [
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
import { z as z50 } from "zod";
var EntityRefVariableV9Schema = VariableBaseV8Schema.extend({
  type: z50.literal("entityRef"),
  sourceVariableUid: VariableUidSchema.optional(),
  targetsTypes: z50.array(z50.string()).optional(),
  targetsTags: z50.array(TagUidSchema).optional(),
  targetTagsGroup: z50.enum(["every", "some"]).optional(),
  max: z50.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var EntityLookupVariableV9Schema = VariableBaseV8Schema.extend({
  type: z50.literal("entityLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  keyVariableUid: VariableUidSchema.optional(),
  labelVariableUid: VariableUidSchema.optional(),
  multiAggregator: z50.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z50.string().optional()
});
var VariableV9Schema = z50.discriminatedUnion("type", [
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
import { z as z51 } from "zod";
var VariableUpdateV26Schema = z51.object({
  variableUid: VariableUidSchema,
  formula: z51.string()
});
var ActionRollV26Schema = z51.object({
  key: z51.string(),
  label: z51.string(),
  diceFormula: z51.string()
});
var ActionSectionsV26Schema = z51.object({
  rolls: z51.array(ActionRollV26Schema).optional(),
  updates: z51.array(VariableUpdateV26Schema).optional(),
  log: z51.string().optional()
});
var RollVariableV10Schema = RollVariableV8Schema.merge(
  ActionSectionsV26Schema
);
var VariableV10Schema = z51.discriminatedUnion("type", [
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
var VariableLabelV27Schema = z52.object({
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
  options: z52.array(ChoiceOptionV27Schema).optional()
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
var VariableV11Schema = z52.discriminatedUnion("type", [
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
  options: z53.array(ChoiceOptionV27Schema).optional()
});
var DataTableColumnV4Schema = z53.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV4Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableV4Schema = z53.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z53.string().optional(),
  weight: z53.number().optional(),
  adminOnly: z53.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z53.array(DataTableColumnV4Schema).default([]),
  rows: z53.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
import { z as z54 } from "zod";
var DatasetTargetV2Schema = z54.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = z54.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z54.number().optional(),
  targets: z54.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: z54.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v3.schema.ts
import { z as z55 } from "zod";
var DialectV3Schema = z55.object({
  uid: DialectUidSchema,
  name: z55.string(),
  fontFamily: z55.string().optional(),
  order: z55.number().optional(),
  spokenByEntitiesUids: z55.array(EntityUidSchema).default([])
});

// src/models/entity.v6.schema.ts
import { z as z62 } from "zod";

// src/mixins/with-scenes.v2.schema.ts
import { z as z56 } from "zod";
var WithScenesV2Schema = z56.object({
  scenesUids: z56.array(SceneUidSchema).default([])
});

// src/models/entity-action.v2.schema.ts
import { z as z57 } from "zod";
var EntityActionV2Schema = z57.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: z57.number().nullable().optional(),
  type: z57.literal("roll"),
  diceFormula: z57.string().optional()
}).merge(ActionSectionsV26Schema);

// src/models/entity.v4.schema.ts
import { z as z61 } from "zod";

// src/models/entity.v3.schema.ts
import { z as z60 } from "zod";

// src/mixins/with-archive.v2.schema.ts
import { z as z58 } from "zod";
var WithArchiveV2Schema = z58.object({
  isArchived: z58.boolean().default(false)
});

// src/mixins/with-pages.v2.schema.ts
import { z as z59 } from "zod";
var WithPagesV2Schema = z59.object({
  pagesOrder: z59.array(PageUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = z60.object({
  uid: EntityUidSchema,
  displayName: z60.string().optional(),
  description: z60.string().optional(),
  tagsUid: z60.array(TagUidSchema).default([]),
  sheetOverrides: z60.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("group"),
  ranks: z60.array(GroupRankV1Schema).default([]),
  charactersUids: z60.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: z60.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: z60.literal("event")
});
var EntityV3Schema = z60.discriminatedUnion("type", [
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
  type: z61.literal("character")
});
var CreatureEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("creature")
});
var GroupEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("group"),
  ranks: z61.array(GroupRankV1Schema).default([]),
  charactersUids: z61.array(EntityUidSchema).default([])
});
var PlaceEntityV4Schema = EntityBaseV4Schema.merge(
  WithScenesV2Schema
).extend({ type: z61.literal("place") });
var ItemEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("item")
});
var NoteEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("note")
});
var AbilityEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("ability")
});
var StoryEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("story")
});
var EventEntityV4Schema = EntityBaseV4Schema.extend({
  type: z61.literal("event")
});
var EntityV4Schema = z61.discriminatedUnion("type", [
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
  actions: z62.array(EntityActionV2Schema).default([])
});
var CharacterEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("character")
});
var CreatureEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("creature")
});
var GroupEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("group"),
  ranks: z62.array(GroupRankV1Schema).default([]),
  charactersUids: z62.array(EntityUidSchema).default([])
});
var PlaceEntityV6Schema = EntityBaseV6Schema.merge(
  WithScenesV2Schema
).extend({ type: z62.literal("place") });
var ItemEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("item")
});
var NoteEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("note")
});
var AbilityEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("ability")
});
var StoryEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("story")
});
var EventEntityV6Schema = EntityBaseV6Schema.extend({
  type: z62.literal("event")
});
var EntityV6Schema = z62.discriminatedUnion("type", [
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
import { z as z63 } from "zod";
var EntitySpawnV1Schema = z63.object({
  uid: EntitySpawnUidSchema,
  entityUid: EntityUidSchema,
  ownerUid: EntityUidSchema.optional(),
  label: z63.string().optional()
}).merge(WithDataV1Schema);

// src/models/random-table.v7.schema.ts
import { z as z64 } from "zod";
var RandomTableRowV7Schema = z64.object({
  uid: RandomTableRowUidSchema,
  range: z64.number().default(1),
  content: z64.string(),
  randomTableRefs: z64.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = z64.object({
  uid: RandomTableUidSchema,
  title: z64.string(),
  rows: z64.array(RandomTableRowV7Schema).default([]),
  diceFormula: z64.string().optional()
});

// src/models/requirement.v1.schema.ts
import { z as z65 } from "zod";
var ByppFileUrlV1Schema = z65.string().url().refine(
  (url) => {
    try {
      return /\.bypp$/i.test(new URL(url).pathname);
    } catch {
      return false;
    }
  },
  { message: "must be the address of a .bypp file" }
);
var RequirementSourceV1Schema = z65.object({
  byppUrl: ByppFileUrlV1Schema,
  bundleName: z65.string().optional(),
  bundleVersion: z65.string().optional()
});
var RequirementV1Schema = z65.object({
  category: z65.string(),
  uid: z65.string(),
  name: z65.string().optional(),
  from: RequirementSourceV1Schema.optional()
});

// src/models/scene.v2.schema.ts
import { z as z66 } from "zod";
var SceneV2Schema = z66.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: z66.number().optional(),
  lightPositionY: z66.number().optional(),
  lightPositionZ: z66.number().optional(),
  lightIntensity: z66.number().optional(),
  lightColor: z66.string().optional(),
  useCustomLightPosition: z66.boolean().optional(),
  indoorLight: z66.boolean().optional()
});

// src/models/scene-background.v4.schema.ts
import { z as z69 } from "zod";

// src/models/scene-background.v3.schema.ts
import { z as z68 } from "zod";

// src/models/scene-background.v2.schema.ts
import { z as z67 } from "zod";
var SceneBackgroundBaseV2Schema = z67.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z67.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: z67.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z67.literal("customVideo")
});
var SceneBackgroundV2Schema = z67.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: z68.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z68.literal("customVideo")
});
var SceneBackgroundV3Schema = z68.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-background.v4.schema.ts
var CustomImageSceneBackgroundV4Schema = CustomImageSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var CustomVideoSceneBackgroundV4Schema = CustomVideoSceneBackgroundV3Schema.merge(WithCreditV1Schema);
var SceneBackgroundV4Schema = z69.discriminatedUnion("type", [
  CustomImageSceneBackgroundV4Schema,
  CustomVideoSceneBackgroundV4Schema
]);

// src/models/scene-map.v4.schema.ts
import { z as z72 } from "zod";

// src/models/scene-map.v3.schema.ts
import { z as z71 } from "zod";

// src/models/scene-map.v2.schema.ts
import { z as z70 } from "zod";
var SceneMapBaseV2Schema = z70.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: z70.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z70.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z70.literal("customVideo")
});
var SceneMapV2Schema = z70.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: z71.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z71.literal("customVideo")
});
var SceneMapV3Schema = z71.discriminatedUnion("type", [
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
var SceneMapV4Schema = z72.discriminatedUnion("type", [
  CustomImageSceneMapV4Schema,
  CustomVideoSceneMapV4Schema
]);

// src/models/sheet.v5.schema.ts
import { z as z77 } from "zod";

// src/mixins/with-style.v3.schema.ts
import { z as z74 } from "zod";

// src/mixins/with-style.v2.schema.ts
import { z as z73 } from "zod";
var ObjectFitV6Schema = z73.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = z73.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = z73.object({
  justifyContent: z73.string().optional(),
  alignItems: z73.string().optional(),
  flexDirection: z73.string().optional(),
  lineHeight: z73.number().optional(),
  fontFamilyId: z73.string().optional(),
  fontScale: z73.number().optional(),
  color: z73.string().optional(),
  paddingTop: z73.number().optional(),
  paddingRight: z73.number().optional(),
  paddingBottom: z73.number().optional(),
  paddingLeft: z73.number().optional(),
  // New in v2:
  borderWidth: z73.number().optional(),
  borderStyle: z73.string().optional(),
  borderColor: z73.string().optional(),
  borderRadius: z73.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = z73.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: z74.number().optional()
}).nullable().optional();
var WithStyleV3Schema = z74.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
import { z as z76 } from "zod";

// src/models/sheet.v3.schema.ts
import { z as z75 } from "zod";
var SheetV3Schema = z75.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z75.string().optional(),
  widgetUids: z75.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: z76.record(z76.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: z77.record(z77.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/sheet.v7.schema.ts
var SheetV7Schema = SheetV6Schema.merge(WithCreditV1Schema);

// src/models/tag.v2.schema.ts
import { z as z78 } from "zod";
var TagV2Schema = z78.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z78.boolean().default(false)
});

// src/models/tag.v3.schema.ts
var TagV3Schema = TagV2Schema.merge(WithIconV1Schema);

// src/models/tag-category.v2.schema.ts
var TagCategoryV2Schema = TagCategoryV1Schema.merge(WithIconV1Schema);

// src/models/theme.v25.schema.ts
import { z as z82 } from "zod";

// src/mixins/with-style.v6.schema.ts
import { z as z81 } from "zod";

// src/mixins/with-style.v5.schema.ts
import { z as z80 } from "zod";

// src/mixins/with-style.v4.schema.ts
import { z as z79 } from "zod";
var StyleV4Schema = StyleV3Schema.unwrap().unwrap().extend({
  fontWeight: z79.string().optional(),
  fontStyle: z79.string().optional()
}).nullable().optional();
var WithStyleV4Schema = z79.object({
  style: StyleV4Schema
});

// src/mixins/with-style.v5.schema.ts
var StyleV5Schema = StyleV4Schema.unwrap().unwrap().extend({
  marginTop: z80.number().optional(),
  marginRight: z80.number().optional(),
  marginBottom: z80.number().optional(),
  marginLeft: z80.number().optional(),
  backgroundColor: z80.string().optional(),
  textDecoration: z80.string().optional(),
  backgroundRepeat: z80.boolean().optional()
}).nullable().optional();
var WithStyleV5Schema = z80.object({
  style: StyleV5Schema
});

// src/mixins/with-style.v6.schema.ts
var SideV6Schema = z81.number();
var SidesV6Schema = z81.union([
  SideV6Schema,
  z81.array(SideV6Schema).refine((sides) => sides.length === 2 || sides.length === 4, {
    message: "two values for vertical and horizontal, or four clockwise"
  })
]);
var StyleV6Schema = StyleV5Schema.unwrap().unwrap().extend({
  margin: SidesV6Schema.optional(),
  padding: SidesV6Schema.optional(),
  borderWidth: SidesV6Schema.optional()
}).nullable().optional();
var WithStyleV6Schema = z81.object({
  style: StyleV6Schema
});

// src/models/theme.v25.schema.ts
var ThemeStyleV25Schema = StyleV6Schema.unwrap().unwrap();
var ThemeTagStyleV25Schema = z82.object({
  tagUid: TagUidSchema,
  style: ThemeStyleV25Schema
});
var ThemeV25Schema = z82.object({
  slug: z82.string().optional(),
  elements: z82.record(z82.string(), ThemeStyleV25Schema).default({}),
  tagStyles: z82.array(ThemeTagStyleV25Schema).default([])
});

// src/models/variable.v12.schema.ts
import { z as z83 } from "zod";
var EntitySpawnRefVariableV12Schema = EntityRefVariableV9Schema.merge(
  VariableLabelV27Schema
).extend({
  type: z83.literal("entitySpawnRef")
});
var VariableV12Schema = z83.discriminatedUnion("type", [
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
import { z as z91 } from "zod";

// src/models/widget.v6.schema.ts
import { z as z86 } from "zod";

// src/models/widget.v5.schema.ts
import { z as z85 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z84 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z84.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = z85.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z85.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z85.discriminatedUnion("type", [
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
var WidgetV6Schema = z86.discriminatedUnion("type", [
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
import { z as z87 } from "zod";
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: z87.literal("wheel"),
  readingPosition: z87.string().optional(),
  labelOrientation: z87.string().optional(),
  radius: z87.number().optional()
});
var WidgetV7Schema = z87.discriminatedUnion("type", [
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
import { z as z88 } from "zod";
var WithWidgetActionsV8Schema = z88.object({
  actionsVariablesUids: z88.array(VariableUidSchema).optional()
});
var WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).merge(WithWidgetActionsV8Schema).extend({
  type: z88.literal("actionRoll")
});
var WidgetV8Schema = z88.discriminatedUnion("type", [
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
import { z as z89 } from "zod";
var WidgetActionRollV9Schema = WidgetActionRollV8Schema.merge(WithCreditV1Schema);
var WidgetV9Schema = z89.discriminatedUnion("type", [
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
import { z as z90 } from "zod";
var WidgetEntityGridV10Schema = WidgetBaseV1Schema.extend({
  type: z90.literal("entityGrid"),
  gapX: z90.number().optional(),
  gapY: z90.number().optional(),
  listOptionStyle: z90.string().optional(),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional(),
  imageWidth: z90.number().optional(),
  imageHeight: z90.number().optional()
}).merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema).merge(WithCreditV1Schema);
var WidgetV10Schema = z90.discriminatedUnion("type", [
  ...WidgetV9Schema.options,
  WidgetEntityGridV10Schema
]);

// src/models/widget.v13.schema.ts
var WidgetV13Schema = z91.discriminatedUnion("type", [
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
import { z as z95 } from "zod";

// src/models/dialect.v2.schema.ts
import { z as z92 } from "zod";
var DialectFontV2Schema = z92.object({
  fontFamily: z92.string(),
  fontUrl: z92.string().url()
});
var DialectV2Schema = z92.object({
  uid: DialectUidSchema,
  name: z92.string(),
  font: DialectFontV2Schema,
  order: z92.number().optional(),
  spokenByEntitiesUids: z92.array(EntityUidSchema).default([])
});

// src/models/entity.v2.schema.ts
import { z as z93 } from "zod";
var EntityBaseV2Schema = z93.object({
  uid: EntityUidSchema,
  displayName: z93.string().optional(),
  description: z93.string().optional(),
  tagsUid: z93.array(TagUidSchema).default([]),
  sheetOverrides: z93.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("group"),
  ranks: z93.array(GroupRankV1Schema).default([]),
  charactersUids: z93.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: z93.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z93.literal("event")
});
var EntityV2Schema = z93.discriminatedUnion("type", [
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
import { z as z94 } from "zod";
var RandomTableRowV2Schema = z94.object({
  uid: RandomTableRowUidSchema,
  range: z94.number().default(1),
  content: z94.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z94.object({
  uid: RandomTableUidSchema,
  title: z94.string(),
  rows: z94.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z95.object({
  bundleName: z95.string().min(1),
  authorName: z95.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z95.string().url().optional()
});
var BeyondPaperV4Schema = z95.object({
  // Format metadata
  version: z95.literal(4),
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
  entities: z95.array(EntityV2Schema).default([]),
  pages: z95.array(PageV1Schema).default([]),
  chunks: z95.array(ChunkV2Schema).default([]),
  datasets: z95.array(DatasetV2Schema).default([]),
  variables: z95.array(VariableV2Schema).default([]),
  widgets: z95.array(WidgetV1Schema).default([]),
  sheets: z95.array(SheetV3Schema).default([]),
  dataTables: z95.array(DataTableV3Schema).default([]),
  randomTables: z95.array(RandomTableV2Schema).default([]),
  tags: z95.array(TagV2Schema).default([]),
  tagCategories: z95.array(TagCategoryV1Schema).default([]),
  scenes: z95.array(SceneV2Schema).default([]),
  sceneMaps: z95.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z95.array(SceneBackgroundV2Schema).default([]),
  assets: z95.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v29.schema.ts
var BeyondPaperV29Schema = z96.object({
  // Format metadata
  version: z96.literal(29),
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
  // Everyone else who worked on the bundle, in display order. Absent from
  // every document produced before v29.
  credits: z96.array(BundleCreditV29Schema).default([]),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z96.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z96.array(DialectV3Schema).default([]),
  entities: z96.array(EntityV6Schema).default([]),
  // Copies of entities, each over its model (see `entity-spawn.v1.schema`).
  // Absent from every document produced before v28.
  entitySpawns: z96.array(EntitySpawnV1Schema).default([]),
  pages: z96.array(PageV1Schema).default([]),
  chunks: z96.array(ChunkV12Schema).default([]),
  datasets: z96.array(DatasetV2Schema).default([]),
  variables: z96.array(VariableV12Schema).default([]),
  widgets: z96.array(WidgetV13Schema).default([]),
  sheets: z96.array(SheetV7Schema).default([]),
  dataTables: z96.array(DataTableV4Schema).default([]),
  randomTables: z96.array(RandomTableV7Schema).default([]),
  tags: z96.array(TagV3Schema).default([]),
  tagCategories: z96.array(TagCategoryV2Schema).default([]),
  scenes: z96.array(SceneV2Schema).default([]),
  sceneMaps: z96.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z96.array(SceneBackgroundV4Schema).default([]),
  assets: z96.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z97 } from "zod";
var BeyondPaperV1Schema = z97.object({
  // Format metadata
  version: z97.literal(1),
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
  variables: z97.array(VariableV1Schema),
  widgets: z97.array(WidgetV1Schema),
  randomTables: z97.array(RandomTableV1Schema),
  tags: z97.array(TagV1Schema),
  tagCategories: z97.array(TagCategoryV1Schema),
  scenes: z97.array(SceneV1Schema),
  sceneMaps: z97.array(SceneMapV1Schema),
  sceneBackgrounds: z97.array(SceneBackgroundV1Schema),
  assets: z97.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z98 } from "zod";
var BeyondPaperV2Schema = z98.object({
  // Format metadata
  version: z98.literal(2),
  format: z98.literal("bypp"),
  // Bundle metadata
  name: z98.string(),
  exportedAt: z98.string(),
  bundleVersion: z98.string(),
  // Content
  dialects: z98.array(DialectV1Schema),
  entities: z98.array(EntityV1Schema),
  pages: z98.array(PageV1Schema),
  chunks: z98.array(ChunkV1Schema),
  datasets: z98.array(DatasetV1Schema),
  variables: z98.array(VariableV2Schema),
  widgets: z98.array(WidgetV1Schema),
  sheets: z98.array(SheetV2Schema),
  dataTables: z98.array(DataTableV2Schema),
  randomTables: z98.array(RandomTableV1Schema),
  tags: z98.array(TagV1Schema),
  tagCategories: z98.array(TagCategoryV1Schema),
  scenes: z98.array(SceneV1Schema),
  sceneMaps: z98.array(SceneMapV1Schema),
  sceneBackgrounds: z98.array(SceneBackgroundV1Schema),
  assets: z98.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z99 } from "zod";
var BeyondPaperV5Schema = z99.object({
  // Format metadata
  version: z99.literal(5),
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
  variables: z99.array(VariableV5Schema).default([]),
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

// src/schemas/bypp.v6.schema.ts
import { z as z100 } from "zod";
var BeyondPaperV6Schema = z100.object({
  // Format metadata
  version: z100.literal(6),
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
  randomTables: z100.array(RandomTableV2Schema).default([]),
  tags: z100.array(TagV2Schema).default([]),
  tagCategories: z100.array(TagCategoryV1Schema).default([]),
  scenes: z100.array(SceneV2Schema).default([]),
  sceneMaps: z100.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z100.array(SceneBackgroundV2Schema).default([]),
  assets: z100.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
import { z as z101 } from "zod";
var BeyondPaperV7Schema = z101.object({
  // Format metadata
  version: z101.literal(7),
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
  widgets: z101.array(WidgetV5Schema).default([]),
  sheets: z101.array(SheetV3Schema).default([]),
  dataTables: z101.array(DataTableV3Schema).default([]),
  randomTables: z101.array(RandomTableV7Schema).default([]),
  tags: z101.array(TagV2Schema).default([]),
  tagCategories: z101.array(TagCategoryV1Schema).default([]),
  scenes: z101.array(SceneV2Schema).default([]),
  sceneMaps: z101.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z101.array(SceneBackgroundV2Schema).default([]),
  assets: z101.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
import { z as z102 } from "zod";
var BeyondPaperV8Schema = z102.object({
  // Format metadata
  version: z102.literal(8),
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
  variables: z102.array(VariableV6Schema).default([]),
  widgets: z102.array(WidgetV6Schema).default([]),
  sheets: z102.array(SheetV4Schema).default([]),
  dataTables: z102.array(DataTableV3Schema).default([]),
  randomTables: z102.array(RandomTableV7Schema).default([]),
  tags: z102.array(TagV2Schema).default([]),
  tagCategories: z102.array(TagCategoryV1Schema).default([]),
  scenes: z102.array(SceneV2Schema).default([]),
  sceneMaps: z102.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z102.array(SceneBackgroundV2Schema).default([]),
  assets: z102.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
import { z as z103 } from "zod";
var BeyondPaperV9Schema = z103.object({
  // Format metadata
  version: z103.literal(9),
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
  entities: z103.array(EntityV2Schema).default([]),
  pages: z103.array(PageV1Schema).default([]),
  chunks: z103.array(ChunkV2Schema).default([]),
  datasets: z103.array(DatasetV2Schema).default([]),
  variables: z103.array(VariableV7Schema).default([]),
  widgets: z103.array(WidgetV7Schema).default([]),
  sheets: z103.array(SheetV5Schema).default([]),
  dataTables: z103.array(DataTableV3Schema).default([]),
  randomTables: z103.array(RandomTableV7Schema).default([]),
  tags: z103.array(TagV2Schema).default([]),
  tagCategories: z103.array(TagCategoryV1Schema).default([]),
  scenes: z103.array(SceneV2Schema).default([]),
  sceneMaps: z103.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z103.array(SceneBackgroundV2Schema).default([]),
  assets: z103.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
import { z as z104 } from "zod";
var BeyondPaperV10Schema = z104.object({
  // Format metadata
  version: z104.literal(10),
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
  chunks: z104.array(ChunkV2Schema).default([]),
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

// src/schemas/bypp.v11.schema.ts
import { z as z105 } from "zod";
var BeyondPaperV11Schema = z105.object({
  // Format metadata
  version: z105.literal(11),
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
  widgets: z105.array(WidgetV7Schema).default([]),
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

// src/schemas/bypp.v12.schema.ts
import { z as z106 } from "zod";
var BeyondPaperV12Schema = z106.object({
  // Format metadata
  version: z106.literal(12),
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
  entities: z106.array(EntityV3Schema).default([]),
  pages: z106.array(PageV1Schema).default([]),
  chunks: z106.array(ChunkV11Schema).default([]),
  datasets: z106.array(DatasetV2Schema).default([]),
  variables: z106.array(VariableV7Schema).default([]),
  widgets: z106.array(WidgetV8Schema).default([]),
  sheets: z106.array(SheetV6Schema).default([]),
  dataTables: z106.array(DataTableV3Schema).default([]),
  randomTables: z106.array(RandomTableV7Schema).default([]),
  tags: z106.array(TagV2Schema).default([]),
  tagCategories: z106.array(TagCategoryV1Schema).default([]),
  scenes: z106.array(SceneV2Schema).default([]),
  sceneMaps: z106.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z106.array(SceneBackgroundV3Schema).default([]),
  assets: z106.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v13.schema.ts
import { z as z107 } from "zod";
var BeyondPaperV13Schema = z107.object({
  // Format metadata
  version: z107.literal(13),
  format: z107.literal("bypp"),
  // Bundle metadata
  name: z107.string(),
  exportedAt: z107.string(),
  bundleVersion: z107.string(),
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

// src/schemas/bypp.v14.schema.ts
import { z as z108 } from "zod";
var BeyondPaperV14Schema = z108.object({
  // Format metadata
  version: z108.literal(14),
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
  dialects: z108.array(DialectV2Schema).default([]),
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

// src/schemas/bypp.v15.schema.ts
import { z as z109 } from "zod";
var BeyondPaperV15Schema = z109.object({
  // Format metadata
  version: z109.literal(15),
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
  variables: z109.array(VariableV7Schema).default([]),
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

// src/schemas/bypp.v16.schema.ts
import { z as z110 } from "zod";
var BeyondPaperV16Schema = z110.object({
  // Format metadata
  version: z110.literal(16),
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
  tags: z110.array(TagV2Schema).default([]),
  tagCategories: z110.array(TagCategoryV1Schema).default([]),
  scenes: z110.array(SceneV2Schema).default([]),
  sceneMaps: z110.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z110.array(SceneBackgroundV4Schema).default([]),
  assets: z110.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v17.schema.ts
import { z as z111 } from "zod";
var BeyondPaperV17Schema = z111.object({
  // Format metadata
  version: z111.literal(17),
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

// src/schemas/bypp.v18.schema.ts
import { z as z112 } from "zod";
var BeyondPaperV18Schema = z112.object({
  // Format metadata
  version: z112.literal(18),
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
  variables: z112.array(VariableV8Schema).default([]),
  widgets: z112.array(WidgetV9Schema).default([]),
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

// src/schemas/bypp.v19.schema.ts
import { z as z113 } from "zod";
var BeyondPaperV19Schema = z113.object({
  // Format metadata
  version: z113.literal(19),
  format: z113.literal("bypp"),
  // Bundle metadata
  name: z113.string(),
  exportedAt: z113.string(),
  bundleVersion: z113.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z113.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z113.array(z113.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z113.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z113.array(DialectV3Schema).default([]),
  entities: z113.array(EntityV4Schema).default([]),
  pages: z113.array(PageV1Schema).default([]),
  chunks: z113.array(ChunkV11Schema).default([]),
  datasets: z113.array(DatasetV2Schema).default([]),
  variables: z113.array(VariableV9Schema).default([]),
  widgets: z113.array(WidgetV10Schema).default([]),
  sheets: z113.array(SheetV7Schema).default([]),
  dataTables: z113.array(DataTableV3Schema).default([]),
  randomTables: z113.array(RandomTableV7Schema).default([]),
  tags: z113.array(TagV3Schema).default([]),
  tagCategories: z113.array(TagCategoryV2Schema).default([]),
  scenes: z113.array(SceneV2Schema).default([]),
  sceneMaps: z113.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z113.array(SceneBackgroundV4Schema).default([]),
  assets: z113.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v20.schema.ts
import { z as z116 } from "zod";

// src/models/entity.v5.schema.ts
import { z as z115 } from "zod";

// src/models/entity-action.v1.schema.ts
import { z as z114 } from "zod";
var EntityActionV1Schema = z114.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: z114.number().nullable().optional(),
  type: z114.literal("roll"),
  diceFormula: z114.string().optional()
});

// src/models/entity.v5.schema.ts
var EntityBaseV5Schema = EntityBaseV4Schema.extend({
  actions: z115.array(EntityActionV1Schema).default([])
});
var CharacterEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("character")
});
var CreatureEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("creature")
});
var GroupEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("group"),
  ranks: z115.array(GroupRankV1Schema).default([]),
  charactersUids: z115.array(EntityUidSchema).default([])
});
var PlaceEntityV5Schema = EntityBaseV5Schema.merge(
  WithScenesV2Schema
).extend({ type: z115.literal("place") });
var ItemEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("item")
});
var NoteEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("note")
});
var AbilityEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("ability")
});
var StoryEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("story")
});
var EventEntityV5Schema = EntityBaseV5Schema.extend({
  type: z115.literal("event")
});
var EntityV5Schema = z115.discriminatedUnion("type", [
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
var BeyondPaperV20Schema = z116.object({
  // Format metadata
  version: z116.literal(20),
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
  chunks: z116.array(ChunkV11Schema).default([]),
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

// src/schemas/bypp.v21.schema.ts
import { z as z117 } from "zod";
var BeyondPaperV21Schema = z117.object({
  // Format metadata
  version: z117.literal(21),
  format: z117.literal("bypp"),
  // Bundle metadata
  name: z117.string(),
  exportedAt: z117.string(),
  bundleVersion: z117.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z117.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z117.array(z117.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z117.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z117.array(DialectV3Schema).default([]),
  entities: z117.array(EntityV5Schema).default([]),
  pages: z117.array(PageV1Schema).default([]),
  chunks: z117.array(ChunkV12Schema).default([]),
  datasets: z117.array(DatasetV2Schema).default([]),
  variables: z117.array(VariableV9Schema).default([]),
  widgets: z117.array(WidgetV10Schema).default([]),
  sheets: z117.array(SheetV7Schema).default([]),
  dataTables: z117.array(DataTableV3Schema).default([]),
  randomTables: z117.array(RandomTableV7Schema).default([]),
  tags: z117.array(TagV3Schema).default([]),
  tagCategories: z117.array(TagCategoryV2Schema).default([]),
  scenes: z117.array(SceneV2Schema).default([]),
  sceneMaps: z117.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z117.array(SceneBackgroundV4Schema).default([]),
  assets: z117.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v22.schema.ts
import { z as z119 } from "zod";

// src/models/widget.v11.schema.ts
import { z as z118 } from "zod";
var WidgetV11Schema = z118.discriminatedUnion("type", [
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
var BeyondPaperV22Schema = z119.object({
  // Format metadata
  version: z119.literal(22),
  format: z119.literal("bypp"),
  // Bundle metadata
  name: z119.string(),
  exportedAt: z119.string(),
  bundleVersion: z119.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z119.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z119.array(z119.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z119.array(RequirementV1Schema).default([]),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z119.array(DialectV3Schema).default([]),
  entities: z119.array(EntityV5Schema).default([]),
  pages: z119.array(PageV1Schema).default([]),
  chunks: z119.array(ChunkV12Schema).default([]),
  datasets: z119.array(DatasetV2Schema).default([]),
  variables: z119.array(VariableV9Schema).default([]),
  widgets: z119.array(WidgetV11Schema).default([]),
  sheets: z119.array(SheetV7Schema).default([]),
  dataTables: z119.array(DataTableV3Schema).default([]),
  randomTables: z119.array(RandomTableV7Schema).default([]),
  tags: z119.array(TagV3Schema).default([]),
  tagCategories: z119.array(TagCategoryV2Schema).default([]),
  scenes: z119.array(SceneV2Schema).default([]),
  sceneMaps: z119.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z119.array(SceneBackgroundV4Schema).default([]),
  assets: z119.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v23.schema.ts
import { z as z121 } from "zod";

// src/models/widget.v12.schema.ts
import { z as z120 } from "zod";
var WidgetV12Schema = z120.discriminatedUnion("type", [
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
var BeyondPaperV23Schema = z121.object({
  // Format metadata
  version: z121.literal(23),
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
  widgets: z121.array(WidgetV12Schema).default([]),
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

// src/schemas/bypp.v24.schema.ts
import { z as z122 } from "zod";
var BeyondPaperV24Schema = z122.object({
  // Format metadata
  version: z122.literal(24),
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

// src/schemas/bypp.v25.schema.ts
import { z as z123 } from "zod";
var BeyondPaperV25Schema = z123.object({
  // Format metadata
  version: z123.literal(25),
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
  // every document produced before v25: a document that says nothing here is
  // painted by whatever surrounds it, which is what they all were.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z123.array(DialectV3Schema).default([]),
  entities: z123.array(EntityV5Schema).default([]),
  pages: z123.array(PageV1Schema).default([]),
  chunks: z123.array(ChunkV12Schema).default([]),
  datasets: z123.array(DatasetV2Schema).default([]),
  variables: z123.array(VariableV9Schema).default([]),
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

// src/schemas/bypp.v26.schema.ts
import { z as z124 } from "zod";
var BeyondPaperV26Schema = z124.object({
  // Format metadata
  version: z124.literal(26),
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
  variables: z124.array(VariableV10Schema).default([]),
  widgets: z124.array(WidgetV13Schema).default([]),
  sheets: z124.array(SheetV7Schema).default([]),
  dataTables: z124.array(DataTableV3Schema).default([]),
  randomTables: z124.array(RandomTableV7Schema).default([]),
  tags: z124.array(TagV3Schema).default([]),
  tagCategories: z124.array(TagCategoryV2Schema).default([]),
  scenes: z124.array(SceneV2Schema).default([]),
  sceneMaps: z124.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z124.array(SceneBackgroundV4Schema).default([]),
  assets: z124.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v27.schema.ts
import { z as z125 } from "zod";
var BeyondPaperV27Schema = z125.object({
  // Format metadata
  version: z125.literal(27),
  format: z125.literal("bypp"),
  // Bundle metadata
  name: z125.string(),
  exportedAt: z125.string(),
  bundleVersion: z125.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z125.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z125.array(z125.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z125.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z125.array(DialectV3Schema).default([]),
  entities: z125.array(EntityV6Schema).default([]),
  pages: z125.array(PageV1Schema).default([]),
  chunks: z125.array(ChunkV12Schema).default([]),
  datasets: z125.array(DatasetV2Schema).default([]),
  variables: z125.array(VariableV11Schema).default([]),
  widgets: z125.array(WidgetV13Schema).default([]),
  sheets: z125.array(SheetV7Schema).default([]),
  dataTables: z125.array(DataTableV4Schema).default([]),
  randomTables: z125.array(RandomTableV7Schema).default([]),
  tags: z125.array(TagV3Schema).default([]),
  tagCategories: z125.array(TagCategoryV2Schema).default([]),
  scenes: z125.array(SceneV2Schema).default([]),
  sceneMaps: z125.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z125.array(SceneBackgroundV4Schema).default([]),
  assets: z125.array(AssetV3Schema).default([])
});

// src/schemas/bypp.v28.schema.ts
import { z as z126 } from "zod";
var BeyondPaperV28Schema = z126.object({
  // Format metadata
  version: z126.literal(28),
  format: z126.literal("bypp"),
  // Bundle metadata
  name: z126.string(),
  exportedAt: z126.string(),
  bundleVersion: z126.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z126.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z126.array(z126.string().url()).optional(),
  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z126.array(RequirementV1Schema).default([]),
  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z126.array(DialectV3Schema).default([]),
  entities: z126.array(EntityV6Schema).default([]),
  // Copies of entities, each over its model (see `entity-spawn.v1.schema`).
  // Absent from every document produced before v28.
  entitySpawns: z126.array(EntitySpawnV1Schema).default([]),
  pages: z126.array(PageV1Schema).default([]),
  chunks: z126.array(ChunkV12Schema).default([]),
  datasets: z126.array(DatasetV2Schema).default([]),
  variables: z126.array(VariableV12Schema).default([]),
  widgets: z126.array(WidgetV13Schema).default([]),
  sheets: z126.array(SheetV7Schema).default([]),
  dataTables: z126.array(DataTableV4Schema).default([]),
  randomTables: z126.array(RandomTableV7Schema).default([]),
  tags: z126.array(TagV3Schema).default([]),
  tagCategories: z126.array(TagCategoryV2Schema).default([]),
  scenes: z126.array(SceneV2Schema).default([]),
  sceneMaps: z126.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z126.array(SceneBackgroundV4Schema).default([]),
  assets: z126.array(AssetV3Schema).default([])
});

// src/v22.ts
var BYPP_FORMAT_VERSION2 = 22;
export {
  AssetV3Schema as AssetSchema,
  BYPP_FORMAT_VERSION2 as BYPP_FORMAT_VERSION,
  BeyondPaperV22Schema as BeyondPaperSchema,
  BundleImageV14Schema as BundleImageSchema,
  ByppFileUrlV1Schema as ByppFileUrlSchema,
  ChunkMarkdownV12Schema as ChunkMarkdownSchema,
  ChunkV12Schema as ChunkSchema,
  CreditV1Schema as CreditSchema,
  DataTableV3Schema as DataTableSchema,
  DatasetV2Schema as DatasetSchema,
  DialectV3Schema as DialectSchema,
  EntityActionV1Schema as EntityActionSchema,
  EntityV5Schema as EntitySchema,
  PageV1Schema as PageSchema,
  RandomTableV7Schema as RandomTableSchema,
  RequirementV1Schema as RequirementSchema,
  RequirementSourceV1Schema as RequirementSourceSchema,
  SceneBackgroundV4Schema as SceneBackgroundSchema,
  SceneMapV4Schema as SceneMapSchema,
  SceneV2Schema as SceneSchema,
  SheetV7Schema as SheetSchema,
  StyleV4Schema as StyleSchema,
  TagCategoryV2Schema as TagCategorySchema,
  TagV3Schema as TagSchema,
  VariableV9Schema as VariableSchema,
  WidgetV11Schema as WidgetSchema,
  WithCreditV1Schema as WithCreditSchema,
  WithIconV1Schema as WithIconSchema
};
//# sourceMappingURL=v22.js.map