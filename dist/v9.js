// src/schemas/bypp.v9.schema.ts
import { z as z65 } from "zod";

// src/models/asset.v2.schema.ts
import { z as z7 } from "zod";

// src/mixins/with-audio-urls.v2.schema.ts
import { z } from "zod";
var WithAudioUrlsV2Schema = z.object({
  audioUrl: z.string().url().optional(),
  audioDurationSeconds: z.number().optional(),
  audioExt: z.string().optional()
});

// src/mixins/with-images-urls.v2.schema.ts
import { z as z2 } from "zod";
var WithImagesUrlsV2Schema = z2.object({
  originalUrl: z2.string().url().optional(),
  thumbnailUrl: z2.string().url().optional(),
  squareUrl: z2.string().url().optional(),
  closeupUrl: z2.string().url().optional()
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

// src/mixins/with-video-urls.v2.schema.ts
import { z as z5 } from "zod";
var WithVideoUrlsV2Schema = z5.object({
  videoUrl: z5.string().url().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional()
});

// src/uid.ts
import { z as z6 } from "zod";
var EntityUidSchema = z6.string();
var PageUidSchema = z6.string();
var ChunkUidSchema = z6.string();
var DatasetUidSchema = z6.string();
var VariableUidSchema = z6.string();
var WidgetUidSchema = z6.string();
var RandomTableUidSchema = z6.string();
var RandomTableRowUidSchema = z6.string();
var TagUidSchema = z6.string();
var TagCategoryUidSchema = z6.string();
var SceneUidSchema = z6.string();
var SceneMapUidSchema = z6.string();
var SceneBackgroundUidSchema = z6.string();
var AssetUidSchema = z6.string();
var DialectUidSchema = z6.string();
var SheetUidSchema = z6.string();
var EntityTokenUidSchema = z6.string();
var VariableChoiceUidSchema = z6.string();
var DataTableUidSchema = z6.string();
var DataTableRowUidSchema = z6.string();
var DataTableColumnUidSchema = z6.string();

// src/models/asset.v2.schema.ts
var AssetBaseV2Schema = z7.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV2Schema = AssetBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z7.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV2Schema = AssetBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z7.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV2Schema = AssetBaseV2Schema.merge(
  WithAudioUrlsV2Schema
).extend({
  type: z7.literal("audio")
});
var AudioExternalAssetV2Schema = AssetBaseV2Schema.extend({
  type: z7.literal("audio-external"),
  provider: z7.string(),
  externalId: z7.string(),
  thumbnailUrl: z7.string().url().optional(),
  durationSeconds: z7.number().optional()
});
var EntityAssetV2Schema = AssetBaseV2Schema.extend({
  type: z7.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV2Schema = z7.discriminatedUnion("type", [
  ImageAssetV2Schema,
  VideoAssetV2Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema,
  EntityAssetV2Schema
]);

// src/models/chunk.v2.schema.ts
import { z as z9 } from "zod";

// src/models/chunk.v1.schema.ts
import { z as z8 } from "zod";
var ChunkBlockStyleV1Schema = z8.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule"
]);
var ChunkHeadingModeV1Schema = z8.enum(["inside", "outside"]);
var ChunkHeadingLevelV1Schema = z8.union([
  z8.literal(1),
  z8.literal(2),
  z8.literal(3),
  z8.literal(4)
]);
var ChunkBaseV1Schema = z8.object({
  uid: ChunkUidSchema,
  name: z8.string().nullable().optional(),
  blockStyle: ChunkBlockStyleV1Schema.nullable().optional(),
  headingLevel: ChunkHeadingLevelV1Schema.nullable().optional(),
  headingMode: ChunkHeadingModeV1Schema.nullable().optional()
});
var ChunkTextV1Schema = ChunkBaseV1Schema.extend({
  type: z8.literal("text"),
  content: z8.string(),
  mentionedEntitiesUids: z8.array(EntityUidSchema).optional()
});
var ChunkTextProxyV1Schema = ChunkBaseV1Schema.extend({
  type: z8.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV1Schema = ChunkBaseV1Schema.extend({
  type: z8.literal("gallery"),
  assetUids: z8.array(AssetUidSchema)
});
var ChunkRandomV1Schema = ChunkBaseV1Schema.extend({
  type: z8.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z8.boolean().optional()
});
var ChunkV1Schema = z8.discriminatedUnion("type", [
  ChunkTextV1Schema,
  ChunkTextProxyV1Schema,
  ChunkGalleryV1Schema,
  ChunkRandomV1Schema
]);

// src/models/chunk.v2.schema.ts
var ChunkBaseV2Schema = z9.object({
  uid: ChunkUidSchema,
  name: z9.string().optional(),
  blockStyle: ChunkBlockStyleV1Schema.optional(),
  headingLevel: ChunkHeadingLevelV1Schema.optional(),
  headingMode: ChunkHeadingModeV1Schema.optional()
});
var ChunkTextV2Schema = ChunkBaseV2Schema.extend({
  type: z9.literal("text"),
  content: z9.string(),
  mentionedEntitiesUids: z9.array(EntityUidSchema).optional()
});
var ChunkTextProxyV2Schema = ChunkBaseV2Schema.extend({
  type: z9.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema
});
var ChunkGalleryV2Schema = ChunkBaseV2Schema.extend({
  type: z9.literal("gallery"),
  assetUids: z9.array(AssetUidSchema).default([])
});
var ChunkRandomV2Schema = ChunkBaseV2Schema.extend({
  type: z9.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z9.boolean().optional()
});
var ChunkV2Schema = z9.discriminatedUnion("type", [
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/data-table.v3.schema.ts
import { z as z14 } from "zod";

// src/mixins/with-localized-name.v2.schema.ts
import { z as z11 } from "zod";

// src/mixins/translatable-text.v2.schema.ts
import { z as z10 } from "zod";
var TranslatableTextV2Schema = z10.record(z10.string(), z10.string());

// src/mixins/with-localized-name.v2.schema.ts
var WithLocalizedNameV2Schema = z11.object({
  name: TranslatableTextV2Schema
});

// src/models/data-table.v2.schema.ts
import { z as z13 } from "zod";

// src/models/variable.v1.schema.ts
import { z as z12 } from "zod";
var ChoiceOptionV1Schema = z12.object({
  uid: VariableChoiceUidSchema,
  label: z12.string(),
  icon: z12.string().optional(),
  value: z12.number().optional()
});
var VariableBaseV1Schema = z12.object({ uid: VariableUidSchema }).merge(WithNameV1Schema).extend({
  datasetsUids: z12.array(DatasetUidSchema),
  isMandatory: z12.boolean().optional(),
  isHiddenFromSheet: z12.boolean().optional(),
  label: z12.string().optional()
});
var NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: z12.literal("number"),
  defaultValue: z12.number().optional()
});
var TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: z12.literal("text"),
  maxChars: z12.number().optional(),
  defaultValue: z12.string().optional()
});
var BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: z12.literal("boolean"),
  defaultValue: z12.boolean().optional()
});
var ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: z12.literal("choice"),
  options: z12.array(ChoiceOptionV1Schema).optional(),
  isMultiple: z12.boolean().optional(),
  hasNumericValue: z12.boolean().optional(),
  hasIcon: z12.boolean().optional(),
  defaultOptionUids: z12.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: z12.literal("formula"),
  formula: z12.string().optional(),
  depsVariablesUid: z12.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigV1Schema = z12.object({
  icon: z12.string().nullable(),
  size: z12.number().optional(),
  rotate: z12.number().optional(),
  revert: z12.boolean().optional()
});
var IconCompoV1Schema = z12.record(
  z12.string(),
  IconCompoSlotConfigV1Schema
);
var ActionVisualV1Schema = z12.discriminatedUnion("type", [
  z12.object({ type: z12.literal("awesome"), icon: z12.string() }),
  z12.object({ type: z12.literal("compo"), icons: IconCompoV1Schema })
]);
var RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: z12.literal("roll"),
  diceFormula: z12.string().optional(),
  depsVariablesUid: z12.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: z12.number().nullable().optional()
});
var VariableV1Schema = z12.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema
]);

// src/models/data-table.v2.schema.ts
var DataTableColumnBaseV2Schema = z13.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: z13.string().optional(),
  isMandatory: z13.boolean().optional()
});
var DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z13.literal("number"),
    defaultNumber: z13.number().optional()
  }
);
var DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z13.literal("text"),
  maxChars: z13.number().optional(),
  defaultValue: z13.string().optional()
});
var DataTableColumnBooleanV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z13.literal("boolean"),
  defaultBoolean: z13.boolean().optional()
});
var DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z13.literal("choice"),
    options: z13.array(ChoiceOptionV1Schema).optional(),
    isMultiple: z13.boolean().optional(),
    hasNumericValue: z13.boolean().optional(),
    hasIcon: z13.boolean().optional()
  }
);
var DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z13.literal("icon"),
  defaultIcon: z13.string().optional()
});
var DataTableColumnTranslatableTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z13.literal("translatableText"),
  defaultValue: TranslatableTextV2Schema.optional()
});
var DataTableColumnDataTableRefV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z13.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z13.boolean().optional(),
  defaultRowUids: z13.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z13.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z13.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z13.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z13.string().optional()
});
var DataTableColumnV2Schema = z13.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableCellValueV2Schema = z13.union([
  z13.string(),
  z13.number(),
  z13.boolean(),
  z13.array(z13.string()),
  TranslatableTextV2Schema,
  z13.null()
]);
var DataTableRowV2Schema = z13.object({
  uid: DataTableRowUidSchema,
  data: z13.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV2Schema = z13.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z13.string().nullable().optional(),
  weight: z13.number().optional(),
  adminOnly: z13.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z13.array(DataTableColumnV2Schema),
  rows: z13.array(DataTableRowV2Schema)
});

// src/models/data-table.v3.schema.ts
var DataTableRowV3Schema = z14.object({
  uid: DataTableRowUidSchema,
  data: z14.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = z14.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z14.string().optional(),
  weight: z14.number().optional(),
  adminOnly: z14.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z14.array(DataTableColumnV2Schema).default([]),
  rows: z14.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
import { z as z22 } from "zod";

// src/models/entity.v1.schema.ts
import { z as z21 } from "zod";

// src/mixins/with-archive.v1.schema.ts
import { z as z15 } from "zod";
var WithArchiveV1Schema = z15.object({
  isArchived: z15.boolean()
});

// src/mixins/with-assets.v1.schema.ts
import { z as z16 } from "zod";
var WithAssetsV1Schema = z16.object({
  assetUids: z16.array(AssetUidSchema).optional()
});

// src/mixins/with-data.v1.schema.ts
import { z as z17 } from "zod";
var VariableDataValueV1Schema = z17.union([
  z17.string(),
  z17.number(),
  z17.boolean(),
  z17.array(VariableChoiceUidSchema),
  z17.null()
]);
var VariablesDataRecordV1Schema = z17.record(
  VariableUidSchema,
  VariableDataValueV1Schema
);
var WithDataV1Schema = z17.object({
  data: VariablesDataRecordV1Schema.optional()
});

// src/mixins/with-images-urls.v1.schema.ts
import { z as z18 } from "zod";
var WithImagesUrlsV1Schema = z18.object({
  originalUrl: z18.string().optional(),
  thumbnailUrl: z18.string().optional(),
  squareUrl: z18.string().optional(),
  closeupUrl: z18.string().optional()
});

// src/mixins/with-pages.v1.schema.ts
import { z as z19 } from "zod";
var WithPagesV1Schema = z19.object({
  pagesOrder: z19.array(PageUidSchema)
});

// src/mixins/with-scenes.v1.schema.ts
import { z as z20 } from "zod";
var WithScenesV1Schema = z20.object({
  scenesUids: z20.array(SceneUidSchema)
});

// src/models/entity.v1.schema.ts
var EntityTypeV1Schema = z21.enum([
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
var GroupRankCharacterV1Schema = z21.object({
  entityUid: EntityUidSchema,
  label: z21.string()
});
var GroupRankV1Schema = z21.object({
  label: z21.string(),
  characters: z21.array(GroupRankCharacterV1Schema)
});
var EntityBaseV1Schema = z21.object({
  uid: EntityUidSchema,
  displayName: z21.string().nullable(),
  description: z21.string().nullable(),
  tagsUid: z21.array(TagUidSchema),
  sheetOverrides: z21.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV1Schema).merge(WithArchiveV1Schema).merge(WithPagesV1Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("character")
});
var CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("creature")
});
var GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("group"),
  ranks: z21.array(GroupRankV1Schema),
  charactersUids: z21.array(EntityUidSchema)
});
var PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema
).extend({ type: z21.literal("place") });
var ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("item")
});
var NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("note")
});
var AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("ability")
});
var StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("story")
});
var EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: z21.literal("event")
});
var EntityV1Schema = z21.discriminatedUnion("type", [
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

// src/models/dataset.v2.schema.ts
var DatasetTargetV2Schema = z22.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = z22.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z22.number().optional(),
  targets: z22.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: z22.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v2.schema.ts
import { z as z23 } from "zod";
var DialectFontV2Schema = z23.object({
  fontFamily: z23.string(),
  fontUrl: z23.string().url()
});
var DialectV2Schema = z23.object({
  uid: DialectUidSchema,
  name: z23.string(),
  font: DialectFontV2Schema,
  order: z23.number().optional(),
  spokenByEntitiesUids: z23.array(EntityUidSchema).default([])
});

// src/models/entity.v2.schema.ts
import { z as z27 } from "zod";

// src/mixins/with-archive.v2.schema.ts
import { z as z24 } from "zod";
var WithArchiveV2Schema = z24.object({
  isArchived: z24.boolean().default(false)
});

// src/mixins/with-pages.v2.schema.ts
import { z as z25 } from "zod";
var WithPagesV2Schema = z25.object({
  pagesOrder: z25.array(PageUidSchema).default([])
});

// src/mixins/with-scenes.v2.schema.ts
import { z as z26 } from "zod";
var WithScenesV2Schema = z26.object({
  scenesUids: z26.array(SceneUidSchema).default([])
});

// src/models/entity.v2.schema.ts
var EntityBaseV2Schema = z27.object({
  uid: EntityUidSchema,
  displayName: z27.string().optional(),
  description: z27.string().optional(),
  tagsUid: z27.array(TagUidSchema).default([]),
  sheetOverrides: z27.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("group"),
  ranks: z27.array(GroupRankV1Schema).default([]),
  charactersUids: z27.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: z27.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z27.literal("event")
});
var EntityV2Schema = z27.discriminatedUnion("type", [
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

// src/models/page.v1.schema.ts
import { z as z28 } from "zod";
var PageStandardV1Schema = z28.object({ uid: PageUidSchema }).merge(WithNameV1Schema).extend({
  type: z28.literal("standard"),
  chunksOrder: z28.array(ChunkUidSchema)
});
var PageEntityV1Schema = z28.object({
  uid: PageUidSchema,
  type: z28.literal("entity"),
  entityUid: EntityUidSchema
});
var PageV1Schema = z28.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema
]);

// src/models/random-table.v7.schema.ts
import { z as z29 } from "zod";
var RandomTableRowV7Schema = z29.object({
  uid: RandomTableRowUidSchema,
  range: z29.number().default(1),
  content: z29.string(),
  randomTableRefs: z29.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = z29.object({
  uid: RandomTableUidSchema,
  title: z29.string(),
  rows: z29.array(RandomTableRowV7Schema).default([]),
  diceFormula: z29.string().optional()
});

// src/models/scene.v2.schema.ts
import { z as z30 } from "zod";
var SceneV2Schema = z30.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: z30.number().optional(),
  lightPositionY: z30.number().optional(),
  lightPositionZ: z30.number().optional(),
  lightIntensity: z30.number().optional(),
  lightColor: z30.string().optional(),
  useCustomLightPosition: z30.boolean().optional(),
  indoorLight: z30.boolean().optional()
});

// src/models/scene-background.v2.schema.ts
import { z as z31 } from "zod";
var SceneBackgroundBaseV2Schema = z31.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z31.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: z31.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z31.literal("customVideo")
});
var SceneBackgroundV2Schema = z31.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-map.v2.schema.ts
import { z as z33 } from "zod";

// src/models/scene-map.v1.schema.ts
import { z as z32 } from "zod";
var GridDataV1Schema = z32.object({
  type: z32.enum(["square", "hexv", "hexh"]),
  size: z32.number(),
  sizeInUnit: z32.number(),
  measureUnit: z32.string(),
  lineWidth: z32.number(),
  color: z32.string().nullable().optional(),
  offset: z32.object({ x: z32.number(), z: z32.number() })
});
var SceneMapBaseV1Schema = z32.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema
});
var CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z32.literal("customImage")
});
var CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z32.literal("customVideo")
});
var Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z32.literal("dd2vtt")
});
var SceneMapV1Schema = z32.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema
]);

// src/models/scene-map.v2.schema.ts
var SceneMapBaseV2Schema = z33.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: z33.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z33.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z33.literal("customVideo")
});
var SceneMapV2Schema = z33.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/sheet.v5.schema.ts
import { z as z38 } from "zod";

// src/mixins/with-style.v3.schema.ts
import { z as z35 } from "zod";

// src/mixins/with-style.v2.schema.ts
import { z as z34 } from "zod";
var ObjectFitV6Schema = z34.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = z34.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = z34.object({
  justifyContent: z34.string().optional(),
  alignItems: z34.string().optional(),
  flexDirection: z34.string().optional(),
  lineHeight: z34.number().optional(),
  fontFamilyId: z34.string().optional(),
  fontScale: z34.number().optional(),
  color: z34.string().optional(),
  paddingTop: z34.number().optional(),
  paddingRight: z34.number().optional(),
  paddingBottom: z34.number().optional(),
  paddingLeft: z34.number().optional(),
  // New in v2:
  borderWidth: z34.number().optional(),
  borderStyle: z34.string().optional(),
  borderColor: z34.string().optional(),
  borderRadius: z34.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = z34.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: z35.number().optional()
}).nullable().optional();
var WithStyleV3Schema = z35.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
import { z as z37 } from "zod";

// src/models/sheet.v3.schema.ts
import { z as z36 } from "zod";
var SheetV3Schema = z36.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z36.string().optional(),
  widgetUids: z36.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: z37.record(z37.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: z38.record(z38.string(), StyleV3Schema).optional()
});

// src/models/tag.v2.schema.ts
import { z as z39 } from "zod";
var TagV2Schema = z39.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z39.boolean().default(false)
});

// src/models/tag-category.v1.schema.ts
import { z as z40 } from "zod";
var TagCategoryV1Schema = z40.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v7.schema.ts
import { z as z44 } from "zod";

// src/models/variable.v2.schema.ts
import { z as z41 } from "zod";
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: z41.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z41.boolean().optional(),
  defaultRowUids: z41.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: z41.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z41.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z41.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z41.string().optional()
});
var VariableV2Schema = z41.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema
]);

// src/models/variable.v5.schema.ts
import { z as z42 } from "zod";
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z42.literal("image")
});
var VariableV5Schema = z42.discriminatedUnion("type", [
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
import { z as z43 } from "zod";
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z43.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z43.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z43.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z43.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z43.string().optional()
  }
);
var VariableV6Schema = z43.discriminatedUnion("type", [
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
  min: z44.number().optional(),
  max: z44.number().optional(),
  step: z44.number().optional()
});
var VariableV7Schema = z44.discriminatedUnion("type", [
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

// src/models/widget.v7.schema.ts
import { z as z52 } from "zod";

// src/models/widget.v6.schema.ts
import { z as z51 } from "zod";

// src/models/widget.v1.schema.ts
import { z as z48 } from "zod";

// src/mixins/with-area.v1.schema.ts
import { z as z45 } from "zod";
var WithAreaV1Schema = z45.object({
  area: z45.object({
    width: z45.number(),
    height: z45.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
import { z as z46 } from "zod";
var WithPositionV1Schema = z46.object({
  position: z46.object({
    left: z46.number(),
    top: z46.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
import { z as z47 } from "zod";
var StyleV1Schema = z47.object({
  justifyContent: z47.string().optional(),
  alignItems: z47.string().optional(),
  flexDirection: z47.string().optional(),
  lineHeight: z47.number().optional(),
  fontFamilyId: z47.string().optional(),
  fontScale: z47.number().optional(),
  color: z47.string().optional(),
  paddingTop: z47.number().optional(),
  paddingRight: z47.number().optional(),
  paddingBottom: z47.number().optional(),
  paddingLeft: z47.number().optional()
}).nullable().optional();
var WithStyleV1Schema = z47.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = z48.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("bigNumber"),
  min: z48.number().optional(),
  max: z48.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z48.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("toggle"),
  toggleIconType: z48.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("bulletList"),
  listVisibility: z48.string().optional(),
  listStyleBulletBreakline: z48.boolean().optional(),
  listStyleBulletType: z48.string().optional(),
  listStyleBulletGap: z48.number().optional(),
  listStyleBulletIconGap: z48.number().optional(),
  listOptionStyle: z48.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("inlineList"),
  listStyleTextSeparator: z48.string().optional(),
  listVisibility: z48.string().optional(),
  listOptionStyle: z48.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("pips"),
  icon: z48.string().optional(),
  gapX: z48.number().optional(),
  gapY: z48.number().optional(),
  max: z48.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = z48.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: z48.literal("bar"),
  min: z48.number().optional(),
  max: z48.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z48.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: z48.string().optional(),
  bgColor: z48.string().optional(),
  showValue: z48.boolean().optional()
});
var WidgetV1Schema = z48.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema
]);

// src/models/widget.v5.schema.ts
import { z as z50 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z49 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z49.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = z50.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z50.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z50.discriminatedUnion("type", [
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
var WidgetV6Schema = z51.discriminatedUnion("type", [
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
var WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema
).extend({
  type: z52.literal("wheel"),
  readingPosition: z52.string().optional(),
  labelOrientation: z52.string().optional(),
  radius: z52.number().optional()
});
var WidgetV7Schema = z52.discriminatedUnion("type", [
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

// src/schemas/bypp.v3.schema.ts
import { z as z62 } from "zod";

// src/models/asset.v1.schema.ts
import { z as z54 } from "zod";

// src/mixins/with-audio-urls.v1.schema.ts
import { z as z53 } from "zod";
var WithAudioUrlsV1Schema = z53.object({
  audioUrl: z53.string().optional(),
  audioDurationSeconds: z53.number().optional(),
  audioExt: z53.enum(["mp3", "ogg"]).optional()
});

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = z54.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z54.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z54.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: z54.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: z54.literal("audio-external"),
  youtubeVideoId: z54.string(),
  thumbnailUrl: z54.string(),
  durationSeconds: z54.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: z54.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = z54.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/dataset.v1.schema.ts
import { z as z55 } from "zod";
var DatasetTargetV1Schema = z55.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = z55.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z55.number().optional(),
  targets: z55.array(DatasetTargetV1Schema),
  targetTagsGroup: z55.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
import { z as z56 } from "zod";
var DialectFontV1Schema = z56.object({
  fontFamily: z56.string(),
  fontUrl: z56.string()
});
var DialectV1Schema = z56.object({
  uid: DialectUidSchema,
  name: z56.string(),
  font: DialectFontV1Schema,
  order: z56.number().optional(),
  spokenByEntitiesUids: z56.array(EntityUidSchema)
});

// src/models/random-table.v1.schema.ts
import { z as z57 } from "zod";
var RandomTableRowV1Schema = z57.object({
  uid: RandomTableRowUidSchema,
  range: z57.number(),
  content: z57.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = z57.object({
  uid: RandomTableUidSchema,
  title: z57.string(),
  rows: z57.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
import { z as z58 } from "zod";
var SceneGameModeV1Schema = z58.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = z58.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: z58.number().optional(),
  lightPositionY: z58.number().optional(),
  lightPositionZ: z58.number().optional(),
  lightIntensity: z58.number().optional(),
  lightColor: z58.string().optional(),
  useCustomLightPosition: z58.boolean().optional(),
  indoorLight: z58.boolean().optional(),
  weather: z58.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
import { z as z59 } from "zod";
var SceneBackgroundBaseV1Schema = z59.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z59.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: z59.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: z59.literal("customVideo")
});
var SceneBackgroundV1Schema = z59.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/sheet.v2.schema.ts
import { z as z60 } from "zod";
var SheetV2Schema = z60.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: z60.string().nullable().optional(),
  widgetUids: z60.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
import { z as z61 } from "zod";
var TagV1Schema = z61.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: z61.boolean()
});

// src/schemas/bypp.v3.schema.ts
var CcLicenseV3Schema = z62.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = z62.object({
  authorName: z62.string().min(1),
  authorUrl: z62.string().url().optional(),
  sourceUrl: z62.string().url().optional()
});
var ParentAttributionV3Schema = z62.object({
  artifactName: z62.string().min(1),
  authorName: z62.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z62.string().url().optional()
});
var BeyondPaperV3Schema = z62.object({
  // Format metadata
  version: z62.literal(3),
  format: z62.literal("bypp"),
  // Bundle metadata
  name: z62.string(),
  exportedAt: z62.string(),
  bundleVersion: z62.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: z62.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: z62.array(z62.string().url()).optional(),
  // Content
  dialects: z62.array(DialectV1Schema),
  entities: z62.array(EntityV1Schema),
  pages: z62.array(PageV1Schema),
  chunks: z62.array(ChunkV1Schema),
  datasets: z62.array(DatasetV1Schema),
  variables: z62.array(VariableV2Schema),
  widgets: z62.array(WidgetV1Schema),
  sheets: z62.array(SheetV2Schema),
  dataTables: z62.array(DataTableV2Schema),
  randomTables: z62.array(RandomTableV1Schema),
  tags: z62.array(TagV1Schema),
  tagCategories: z62.array(TagCategoryV1Schema),
  scenes: z62.array(SceneV1Schema),
  sceneMaps: z62.array(SceneMapV1Schema),
  sceneBackgrounds: z62.array(SceneBackgroundV1Schema),
  assets: z62.array(AssetV1Schema)
});

// src/schemas/bypp.v4.schema.ts
import { z as z64 } from "zod";

// src/models/random-table.v2.schema.ts
import { z as z63 } from "zod";
var RandomTableRowV2Schema = z63.object({
  uid: RandomTableRowUidSchema,
  range: z63.number().default(1),
  content: z63.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z63.object({
  uid: RandomTableUidSchema,
  title: z63.string(),
  rows: z63.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z64.object({
  bundleName: z64.string().min(1),
  authorName: z64.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z64.string().url().optional()
});
var BeyondPaperV4Schema = z64.object({
  // Format metadata
  version: z64.literal(4),
  format: z64.literal("bypp"),
  // Bundle metadata
  name: z64.string(),
  exportedAt: z64.string(),
  bundleVersion: z64.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z64.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z64.array(z64.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z64.array(DialectV2Schema).default([]),
  entities: z64.array(EntityV2Schema).default([]),
  pages: z64.array(PageV1Schema).default([]),
  chunks: z64.array(ChunkV2Schema).default([]),
  datasets: z64.array(DatasetV2Schema).default([]),
  variables: z64.array(VariableV2Schema).default([]),
  widgets: z64.array(WidgetV1Schema).default([]),
  sheets: z64.array(SheetV3Schema).default([]),
  dataTables: z64.array(DataTableV3Schema).default([]),
  randomTables: z64.array(RandomTableV2Schema).default([]),
  tags: z64.array(TagV2Schema).default([]),
  tagCategories: z64.array(TagCategoryV1Schema).default([]),
  scenes: z64.array(SceneV2Schema).default([]),
  sceneMaps: z64.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z64.array(SceneBackgroundV2Schema).default([]),
  assets: z64.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
var BeyondPaperV9Schema = z65.object({
  // Format metadata
  version: z65.literal(9),
  format: z65.literal("bypp"),
  // Bundle metadata
  name: z65.string(),
  exportedAt: z65.string(),
  bundleVersion: z65.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z65.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z65.array(z65.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z65.array(DialectV2Schema).default([]),
  entities: z65.array(EntityV2Schema).default([]),
  pages: z65.array(PageV1Schema).default([]),
  chunks: z65.array(ChunkV2Schema).default([]),
  datasets: z65.array(DatasetV2Schema).default([]),
  variables: z65.array(VariableV7Schema).default([]),
  widgets: z65.array(WidgetV7Schema).default([]),
  sheets: z65.array(SheetV5Schema).default([]),
  dataTables: z65.array(DataTableV3Schema).default([]),
  randomTables: z65.array(RandomTableV7Schema).default([]),
  tags: z65.array(TagV2Schema).default([]),
  tagCategories: z65.array(TagCategoryV1Schema).default([]),
  scenes: z65.array(SceneV2Schema).default([]),
  sceneMaps: z65.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z65.array(SceneBackgroundV2Schema).default([]),
  assets: z65.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z66 } from "zod";
var BeyondPaperV1Schema = z66.object({
  // Format metadata
  version: z66.literal(1),
  format: z66.literal("bypp"),
  // Bundle metadata
  name: z66.string(),
  exportedAt: z66.string(),
  bundleVersion: z66.string(),
  // Content
  dialects: z66.array(DialectV1Schema),
  entities: z66.array(EntityV1Schema),
  pages: z66.array(PageV1Schema),
  chunks: z66.array(ChunkV1Schema),
  datasets: z66.array(DatasetV1Schema),
  variables: z66.array(VariableV1Schema),
  widgets: z66.array(WidgetV1Schema),
  randomTables: z66.array(RandomTableV1Schema),
  tags: z66.array(TagV1Schema),
  tagCategories: z66.array(TagCategoryV1Schema),
  scenes: z66.array(SceneV1Schema),
  sceneMaps: z66.array(SceneMapV1Schema),
  sceneBackgrounds: z66.array(SceneBackgroundV1Schema),
  assets: z66.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z67 } from "zod";
var BeyondPaperV2Schema = z67.object({
  // Format metadata
  version: z67.literal(2),
  format: z67.literal("bypp"),
  // Bundle metadata
  name: z67.string(),
  exportedAt: z67.string(),
  bundleVersion: z67.string(),
  // Content
  dialects: z67.array(DialectV1Schema),
  entities: z67.array(EntityV1Schema),
  pages: z67.array(PageV1Schema),
  chunks: z67.array(ChunkV1Schema),
  datasets: z67.array(DatasetV1Schema),
  variables: z67.array(VariableV2Schema),
  widgets: z67.array(WidgetV1Schema),
  sheets: z67.array(SheetV2Schema),
  dataTables: z67.array(DataTableV2Schema),
  randomTables: z67.array(RandomTableV1Schema),
  tags: z67.array(TagV1Schema),
  tagCategories: z67.array(TagCategoryV1Schema),
  scenes: z67.array(SceneV1Schema),
  sceneMaps: z67.array(SceneMapV1Schema),
  sceneBackgrounds: z67.array(SceneBackgroundV1Schema),
  assets: z67.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z68 } from "zod";
var BeyondPaperV5Schema = z68.object({
  // Format metadata
  version: z68.literal(5),
  format: z68.literal("bypp"),
  // Bundle metadata
  name: z68.string(),
  exportedAt: z68.string(),
  bundleVersion: z68.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z68.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z68.array(z68.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z68.array(DialectV2Schema).default([]),
  entities: z68.array(EntityV2Schema).default([]),
  pages: z68.array(PageV1Schema).default([]),
  chunks: z68.array(ChunkV2Schema).default([]),
  datasets: z68.array(DatasetV2Schema).default([]),
  variables: z68.array(VariableV5Schema).default([]),
  widgets: z68.array(WidgetV5Schema).default([]),
  sheets: z68.array(SheetV3Schema).default([]),
  dataTables: z68.array(DataTableV3Schema).default([]),
  randomTables: z68.array(RandomTableV2Schema).default([]),
  tags: z68.array(TagV2Schema).default([]),
  tagCategories: z68.array(TagCategoryV1Schema).default([]),
  scenes: z68.array(SceneV2Schema).default([]),
  sceneMaps: z68.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z68.array(SceneBackgroundV2Schema).default([]),
  assets: z68.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
import { z as z69 } from "zod";
var BeyondPaperV6Schema = z69.object({
  // Format metadata
  version: z69.literal(6),
  format: z69.literal("bypp"),
  // Bundle metadata
  name: z69.string(),
  exportedAt: z69.string(),
  bundleVersion: z69.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z69.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z69.array(z69.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z69.array(DialectV2Schema).default([]),
  entities: z69.array(EntityV2Schema).default([]),
  pages: z69.array(PageV1Schema).default([]),
  chunks: z69.array(ChunkV2Schema).default([]),
  datasets: z69.array(DatasetV2Schema).default([]),
  variables: z69.array(VariableV6Schema).default([]),
  widgets: z69.array(WidgetV5Schema).default([]),
  sheets: z69.array(SheetV3Schema).default([]),
  dataTables: z69.array(DataTableV3Schema).default([]),
  randomTables: z69.array(RandomTableV2Schema).default([]),
  tags: z69.array(TagV2Schema).default([]),
  tagCategories: z69.array(TagCategoryV1Schema).default([]),
  scenes: z69.array(SceneV2Schema).default([]),
  sceneMaps: z69.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z69.array(SceneBackgroundV2Schema).default([]),
  assets: z69.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
import { z as z70 } from "zod";
var BeyondPaperV7Schema = z70.object({
  // Format metadata
  version: z70.literal(7),
  format: z70.literal("bypp"),
  // Bundle metadata
  name: z70.string(),
  exportedAt: z70.string(),
  bundleVersion: z70.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z70.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z70.array(z70.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z70.array(DialectV2Schema).default([]),
  entities: z70.array(EntityV2Schema).default([]),
  pages: z70.array(PageV1Schema).default([]),
  chunks: z70.array(ChunkV2Schema).default([]),
  datasets: z70.array(DatasetV2Schema).default([]),
  variables: z70.array(VariableV6Schema).default([]),
  widgets: z70.array(WidgetV5Schema).default([]),
  sheets: z70.array(SheetV3Schema).default([]),
  dataTables: z70.array(DataTableV3Schema).default([]),
  randomTables: z70.array(RandomTableV7Schema).default([]),
  tags: z70.array(TagV2Schema).default([]),
  tagCategories: z70.array(TagCategoryV1Schema).default([]),
  scenes: z70.array(SceneV2Schema).default([]),
  sceneMaps: z70.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z70.array(SceneBackgroundV2Schema).default([]),
  assets: z70.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
import { z as z71 } from "zod";
var BeyondPaperV8Schema = z71.object({
  // Format metadata
  version: z71.literal(8),
  format: z71.literal("bypp"),
  // Bundle metadata
  name: z71.string(),
  exportedAt: z71.string(),
  bundleVersion: z71.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z71.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z71.array(z71.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z71.array(DialectV2Schema).default([]),
  entities: z71.array(EntityV2Schema).default([]),
  pages: z71.array(PageV1Schema).default([]),
  chunks: z71.array(ChunkV2Schema).default([]),
  datasets: z71.array(DatasetV2Schema).default([]),
  variables: z71.array(VariableV6Schema).default([]),
  widgets: z71.array(WidgetV6Schema).default([]),
  sheets: z71.array(SheetV4Schema).default([]),
  dataTables: z71.array(DataTableV3Schema).default([]),
  randomTables: z71.array(RandomTableV7Schema).default([]),
  tags: z71.array(TagV2Schema).default([]),
  tagCategories: z71.array(TagCategoryV1Schema).default([]),
  scenes: z71.array(SceneV2Schema).default([]),
  sceneMaps: z71.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z71.array(SceneBackgroundV2Schema).default([]),
  assets: z71.array(AssetV2Schema).default([])
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