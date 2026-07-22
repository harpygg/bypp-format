// src/version.ts
var BYPP_FORMAT_VERSION = 13;
var BYPP_FORMAT_EXT = "bypp";

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
var KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"];
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
  12: v12ToV13
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
  13: v13ToV12
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
  13: BeyondPaperV13Schema
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
  AbilityEntityV4Schema as AbilityEntitySchema,
  AbilityEntityV1Schema,
  AbilityEntityV2Schema,
  AbilityEntityV3Schema,
  AbilityEntityV4Schema,
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
  BeyondPaperV13Schema as BeyondPaperSchema,
  BeyondPaperV10Schema,
  BeyondPaperV11Schema,
  BeyondPaperV12Schema,
  BeyondPaperV13Schema,
  BeyondPaperV1Schema,
  BeyondPaperV2Schema,
  BeyondPaperV3Schema,
  BeyondPaperV4Schema,
  BeyondPaperV5Schema,
  BeyondPaperV6Schema,
  BeyondPaperV7Schema,
  BeyondPaperV8Schema,
  BeyondPaperV9Schema,
  BooleanVariableV1Schema as BooleanVariableSchema,
  BooleanVariableV1Schema,
  CcLicenseV3Schema as CcLicenseSchema,
  CcLicenseV3Schema,
  CharacterEntityV4Schema as CharacterEntitySchema,
  CharacterEntityV1Schema,
  CharacterEntityV2Schema,
  CharacterEntityV3Schema,
  CharacterEntityV4Schema,
  ChoiceOptionV1Schema as ChoiceOptionSchema,
  ChoiceOptionV1Schema,
  ChoiceVariableV1Schema as ChoiceVariableSchema,
  ChoiceVariableV1Schema,
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
  CreatureEntityV4Schema as CreatureEntitySchema,
  CreatureEntityV1Schema,
  CreatureEntityV2Schema,
  CreatureEntityV3Schema,
  CreatureEntityV4Schema,
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
  DataTableDirectLookupVariableV6Schema as DataTableDirectLookupVariableSchema,
  DataTableDirectLookupVariableV6Schema,
  DataTableLookupVariableV2Schema as DataTableLookupVariableSchema,
  DataTableLookupVariableV2Schema,
  DataTableRefVariableV2Schema as DataTableRefVariableSchema,
  DataTableRefVariableV2Schema,
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
  DialectFontV2Schema as DialectFontSchema,
  DialectFontV1Schema,
  DialectFontV2Schema,
  DialectV2Schema as DialectSchema,
  DialectUidSchema,
  DialectV1Schema,
  DialectV2Schema,
  ENTITY_IMAGE_RENDITIONS,
  EntityAssetV3Schema as EntityAssetSchema,
  EntityAssetV1Schema,
  EntityAssetV2Schema,
  EntityAssetV3Schema,
  EntityBaseV4Schema as EntityBaseSchema,
  EntityBaseV1Schema,
  EntityBaseV2Schema,
  EntityBaseV3Schema,
  EntityBaseV4Schema,
  EntityImageFormatV5Schema as EntityImageFormatSchema,
  EntityImageFormatV5Schema,
  EntityImageObjectFitV5Schema as EntityImageObjectFitSchema,
  EntityImageObjectFitV5Schema,
  EntityV4Schema as EntitySchema,
  EntityTypeV1Schema as EntityTypeSchema,
  EntityTypeV1Schema,
  EntityTypeV1Schema as EntityTypeV2Schema,
  EntityTypeV1Schema as EntityTypeV3Schema,
  EntityTypeV1Schema as EntityTypeV4Schema,
  EntityUidSchema,
  EntityV1Schema,
  EntityV2Schema,
  EntityV3Schema,
  EntityV4Schema,
  EventEntityV4Schema as EventEntitySchema,
  EventEntityV1Schema,
  EventEntityV2Schema,
  EventEntityV3Schema,
  EventEntityV4Schema,
  FormulaVariableV1Schema as FormulaVariableSchema,
  FormulaVariableV1Schema,
  GridDataV1Schema as GridDataSchema,
  GridDataV1Schema,
  GroupEntityV4Schema as GroupEntitySchema,
  GroupEntityV1Schema,
  GroupEntityV2Schema,
  GroupEntityV3Schema,
  GroupEntityV4Schema,
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
  ImageVariableV5Schema as ImageVariableSchema,
  ImageVariableV5Schema,
  ItemEntityV4Schema as ItemEntitySchema,
  ItemEntityV1Schema,
  ItemEntityV2Schema,
  ItemEntityV3Schema,
  ItemEntityV4Schema,
  KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS,
  NoteEntityV4Schema as NoteEntitySchema,
  NoteEntityV1Schema,
  NoteEntityV2Schema,
  NoteEntityV3Schema,
  NoteEntityV4Schema,
  NumberVariableV1Schema as NumberVariableSchema,
  NumberVariableV1Schema,
  NumberVariableV2Schema,
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
  PlaceEntityV4Schema as PlaceEntitySchema,
  PlaceEntityV1Schema,
  PlaceEntityV2Schema,
  PlaceEntityV3Schema,
  PlaceEntityV4Schema,
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
  RollVariableV1Schema as RollVariableSchema,
  RollVariableV1Schema,
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
  StoryEntityV4Schema as StoryEntitySchema,
  StoryEntityV1Schema,
  StoryEntityV2Schema,
  StoryEntityV3Schema,
  StoryEntityV4Schema,
  StyleV3Schema as StyleSchema,
  StyleV1Schema,
  StyleV2Schema,
  StyleV3Schema,
  TagCategoryV1Schema as TagCategorySchema,
  TagCategoryUidSchema,
  TagCategoryV1Schema,
  TagV2Schema as TagSchema,
  TagUidSchema,
  TagV1Schema,
  TagV2Schema,
  TextVariableV1Schema as TextVariableSchema,
  TextVariableV1Schema,
  TranslatableTextV2Schema as TranslatableTextSchema,
  TranslatableTextV2Schema,
  VariableBaseV1Schema as VariableBaseSchema,
  VariableBaseV1Schema,
  VariableChoiceUidSchema,
  VariableDataValueV1Schema as VariableDataValueSchema,
  VariableDataValueV1Schema,
  VariableV7Schema as VariableSchema,
  VariableUidSchema,
  VariableV1Schema,
  VariableV2Schema,
  VariableV5Schema,
  VariableV6Schema,
  VariableV7Schema,
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
  WidgetEntityImageV6Schema as WidgetEntityImageSchema,
  WidgetEntityImageV5Schema,
  WidgetInlineListV1Schema as WidgetInlineListSchema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema as WidgetPipsSchema,
  WidgetPipsV1Schema,
  WidgetPlainTextV1Schema as WidgetPlainTextSchema,
  WidgetPlainTextV1Schema,
  WidgetV9Schema as WidgetSchema,
  WidgetToggleV1Schema as WidgetToggleSchema,
  WidgetToggleV1Schema,
  WidgetUidSchema,
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