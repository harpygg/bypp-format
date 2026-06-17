// src/version.ts
var BYPP_FORMAT_VERSION = 7;
var BYPP_FORMAT_EXT = "bypp";

// src/schemas/bypp.v7.schema.ts
import { z as z58 } from "zod";

// src/models/asset.v2.schema.ts
import { z as z7 } from "zod";

// src/mixins/with-audio-urls.v2.schema.ts
import { z } from "zod";
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
var KNOWN_EXTERNAL_AUDIO_PROVIDERS = [
  "youtube",
  "soundcloud",
  "vimeo",
  "bandcamp",
  "spotify"
];
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
var KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"];
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

// src/models/sheet.v3.schema.ts
import { z as z34 } from "zod";
var SheetV3Schema = z34.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z34.string().optional(),
  widgetUids: z34.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v2.schema.ts
import { z as z35 } from "zod";
var TagV2Schema = z35.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z35.boolean().default(false)
});

// src/models/tag-category.v1.schema.ts
import { z as z36 } from "zod";
var TagCategoryV1Schema = z36.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v6.schema.ts
import { z as z39 } from "zod";

// src/models/variable.v2.schema.ts
import { z as z37 } from "zod";
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: z37.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z37.boolean().optional(),
  defaultRowUids: z37.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: z37.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z37.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z37.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z37.string().optional()
});
var VariableV2Schema = z37.discriminatedUnion("type", [
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
import { z as z38 } from "zod";
var ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z38.literal("image")
});
var VariableV5Schema = z38.discriminatedUnion("type", [
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
var DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z39.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z39.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z39.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z39.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z39.string().optional()
  }
);
var VariableV6Schema = z39.discriminatedUnion("type", [
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

// src/models/widget.v5.schema.ts
import { z as z45 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z40 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z40.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v1.schema.ts
import { z as z44 } from "zod";

// src/mixins/with-area.v1.schema.ts
import { z as z41 } from "zod";
var WithAreaV1Schema = z41.object({
  area: z41.object({
    width: z41.number(),
    height: z41.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
import { z as z42 } from "zod";
var WithPositionV1Schema = z42.object({
  position: z42.object({
    left: z42.number(),
    top: z42.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
import { z as z43 } from "zod";
var StyleV1Schema = z43.object({
  justifyContent: z43.string().optional(),
  alignItems: z43.string().optional(),
  flexDirection: z43.string().optional(),
  lineHeight: z43.number().optional(),
  fontFamilyId: z43.string().optional(),
  fontScale: z43.number().optional(),
  color: z43.string().optional(),
  paddingTop: z43.number().optional(),
  paddingRight: z43.number().optional(),
  paddingBottom: z43.number().optional(),
  paddingLeft: z43.number().optional()
}).nullable().optional();
var WithStyleV1Schema = z43.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = z44.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("bigNumber"),
  min: z44.number().optional(),
  max: z44.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z44.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("toggle"),
  toggleIconType: z44.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("bulletList"),
  listVisibility: z44.string().optional(),
  listStyleBulletBreakline: z44.boolean().optional(),
  listStyleBulletType: z44.string().optional(),
  listStyleBulletGap: z44.number().optional(),
  listStyleBulletIconGap: z44.number().optional(),
  listOptionStyle: z44.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("inlineList"),
  listStyleTextSeparator: z44.string().optional(),
  listVisibility: z44.string().optional(),
  listOptionStyle: z44.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("pips"),
  icon: z44.string().optional(),
  gapX: z44.number().optional(),
  gapY: z44.number().optional(),
  max: z44.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = z44.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: z44.literal("bar"),
  min: z44.number().optional(),
  max: z44.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z44.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: z44.string().optional(),
  bgColor: z44.string().optional(),
  showValue: z44.boolean().optional()
});
var WidgetV1Schema = z44.discriminatedUnion("type", [
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
var EntityImageObjectFitV5Schema = z45.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z45.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z45.discriminatedUnion("type", [
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

// src/schemas/bypp.v3.schema.ts
import { z as z55 } from "zod";

// src/models/asset.v1.schema.ts
import { z as z47 } from "zod";

// src/mixins/with-audio-urls.v1.schema.ts
import { z as z46 } from "zod";
var WithAudioUrlsV1Schema = z46.object({
  audioUrl: z46.string().optional(),
  audioDurationSeconds: z46.number().optional(),
  audioExt: z46.enum(["mp3", "ogg"]).optional()
});

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = z47.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z47.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z47.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: z47.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: z47.literal("audio-external"),
  youtubeVideoId: z47.string(),
  thumbnailUrl: z47.string(),
  durationSeconds: z47.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: z47.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = z47.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/dataset.v1.schema.ts
import { z as z48 } from "zod";
var DatasetTargetV1Schema = z48.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = z48.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z48.number().optional(),
  targets: z48.array(DatasetTargetV1Schema),
  targetTagsGroup: z48.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
import { z as z49 } from "zod";
var DialectFontV1Schema = z49.object({
  fontFamily: z49.string(),
  fontUrl: z49.string()
});
var DialectV1Schema = z49.object({
  uid: DialectUidSchema,
  name: z49.string(),
  font: DialectFontV1Schema,
  order: z49.number().optional(),
  spokenByEntitiesUids: z49.array(EntityUidSchema)
});

// src/models/random-table.v1.schema.ts
import { z as z50 } from "zod";
var RandomTableRowV1Schema = z50.object({
  uid: RandomTableRowUidSchema,
  range: z50.number(),
  content: z50.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = z50.object({
  uid: RandomTableUidSchema,
  title: z50.string(),
  rows: z50.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
import { z as z51 } from "zod";
var SceneGameModeV1Schema = z51.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = z51.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: z51.number().optional(),
  lightPositionY: z51.number().optional(),
  lightPositionZ: z51.number().optional(),
  lightIntensity: z51.number().optional(),
  lightColor: z51.string().optional(),
  useCustomLightPosition: z51.boolean().optional(),
  indoorLight: z51.boolean().optional(),
  weather: z51.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
import { z as z52 } from "zod";
var SceneBackgroundBaseV1Schema = z52.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z52.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: z52.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: z52.literal("customVideo")
});
var SceneBackgroundV1Schema = z52.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/sheet.v2.schema.ts
import { z as z53 } from "zod";
var SheetV2Schema = z53.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: z53.string().nullable().optional(),
  widgetUids: z53.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
import { z as z54 } from "zod";
var TagV1Schema = z54.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: z54.boolean()
});

// src/schemas/bypp.v3.schema.ts
var CcLicenseV3Schema = z55.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = z55.object({
  authorName: z55.string().min(1),
  authorUrl: z55.string().url().optional(),
  sourceUrl: z55.string().url().optional()
});
var ParentAttributionV3Schema = z55.object({
  artifactName: z55.string().min(1),
  authorName: z55.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z55.string().url().optional()
});
var BeyondPaperV3Schema = z55.object({
  // Format metadata
  version: z55.literal(3),
  format: z55.literal("bypp"),
  // Bundle metadata
  name: z55.string(),
  exportedAt: z55.string(),
  bundleVersion: z55.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: z55.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: z55.array(z55.string().url()).optional(),
  // Content
  dialects: z55.array(DialectV1Schema),
  entities: z55.array(EntityV1Schema),
  pages: z55.array(PageV1Schema),
  chunks: z55.array(ChunkV1Schema),
  datasets: z55.array(DatasetV1Schema),
  variables: z55.array(VariableV2Schema),
  widgets: z55.array(WidgetV1Schema),
  sheets: z55.array(SheetV2Schema),
  dataTables: z55.array(DataTableV2Schema),
  randomTables: z55.array(RandomTableV1Schema),
  tags: z55.array(TagV1Schema),
  tagCategories: z55.array(TagCategoryV1Schema),
  scenes: z55.array(SceneV1Schema),
  sceneMaps: z55.array(SceneMapV1Schema),
  sceneBackgrounds: z55.array(SceneBackgroundV1Schema),
  assets: z55.array(AssetV1Schema)
});

// src/schemas/bypp.v4.schema.ts
import { z as z57 } from "zod";

// src/models/random-table.v2.schema.ts
import { z as z56 } from "zod";
var RandomTableRowV2Schema = z56.object({
  uid: RandomTableRowUidSchema,
  range: z56.number().default(1),
  content: z56.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z56.object({
  uid: RandomTableUidSchema,
  title: z56.string(),
  rows: z56.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z57.object({
  bundleName: z57.string().min(1),
  authorName: z57.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z57.string().url().optional()
});
var BeyondPaperV4Schema = z57.object({
  // Format metadata
  version: z57.literal(4),
  format: z57.literal("bypp"),
  // Bundle metadata
  name: z57.string(),
  exportedAt: z57.string(),
  bundleVersion: z57.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z57.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z57.array(z57.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z57.array(DialectV2Schema).default([]),
  entities: z57.array(EntityV2Schema).default([]),
  pages: z57.array(PageV1Schema).default([]),
  chunks: z57.array(ChunkV2Schema).default([]),
  datasets: z57.array(DatasetV2Schema).default([]),
  variables: z57.array(VariableV2Schema).default([]),
  widgets: z57.array(WidgetV1Schema).default([]),
  sheets: z57.array(SheetV3Schema).default([]),
  dataTables: z57.array(DataTableV3Schema).default([]),
  randomTables: z57.array(RandomTableV2Schema).default([]),
  tags: z57.array(TagV2Schema).default([]),
  tagCategories: z57.array(TagCategoryV1Schema).default([]),
  scenes: z57.array(SceneV2Schema).default([]),
  sceneMaps: z57.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z57.array(SceneBackgroundV2Schema).default([]),
  assets: z57.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
var BeyondPaperV7Schema = z58.object({
  // Format metadata
  version: z58.literal(7),
  format: z58.literal("bypp"),
  // Bundle metadata
  name: z58.string(),
  exportedAt: z58.string(),
  bundleVersion: z58.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z58.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z58.array(z58.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z58.array(DialectV2Schema).default([]),
  entities: z58.array(EntityV2Schema).default([]),
  pages: z58.array(PageV1Schema).default([]),
  chunks: z58.array(ChunkV2Schema).default([]),
  datasets: z58.array(DatasetV2Schema).default([]),
  variables: z58.array(VariableV6Schema).default([]),
  widgets: z58.array(WidgetV5Schema).default([]),
  sheets: z58.array(SheetV3Schema).default([]),
  dataTables: z58.array(DataTableV3Schema).default([]),
  randomTables: z58.array(RandomTableV7Schema).default([]),
  tags: z58.array(TagV2Schema).default([]),
  tagCategories: z58.array(TagCategoryV1Schema).default([]),
  scenes: z58.array(SceneV2Schema).default([]),
  sceneMaps: z58.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z58.array(SceneBackgroundV2Schema).default([]),
  assets: z58.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z59 } from "zod";
var BeyondPaperV1Schema = z59.object({
  // Format metadata
  version: z59.literal(1),
  format: z59.literal("bypp"),
  // Bundle metadata
  name: z59.string(),
  exportedAt: z59.string(),
  bundleVersion: z59.string(),
  // Content
  dialects: z59.array(DialectV1Schema),
  entities: z59.array(EntityV1Schema),
  pages: z59.array(PageV1Schema),
  chunks: z59.array(ChunkV1Schema),
  datasets: z59.array(DatasetV1Schema),
  variables: z59.array(VariableV1Schema),
  widgets: z59.array(WidgetV1Schema),
  randomTables: z59.array(RandomTableV1Schema),
  tags: z59.array(TagV1Schema),
  tagCategories: z59.array(TagCategoryV1Schema),
  scenes: z59.array(SceneV1Schema),
  sceneMaps: z59.array(SceneMapV1Schema),
  sceneBackgrounds: z59.array(SceneBackgroundV1Schema),
  assets: z59.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z60 } from "zod";
var BeyondPaperV2Schema = z60.object({
  // Format metadata
  version: z60.literal(2),
  format: z60.literal("bypp"),
  // Bundle metadata
  name: z60.string(),
  exportedAt: z60.string(),
  bundleVersion: z60.string(),
  // Content
  dialects: z60.array(DialectV1Schema),
  entities: z60.array(EntityV1Schema),
  pages: z60.array(PageV1Schema),
  chunks: z60.array(ChunkV1Schema),
  datasets: z60.array(DatasetV1Schema),
  variables: z60.array(VariableV2Schema),
  widgets: z60.array(WidgetV1Schema),
  sheets: z60.array(SheetV2Schema),
  dataTables: z60.array(DataTableV2Schema),
  randomTables: z60.array(RandomTableV1Schema),
  tags: z60.array(TagV1Schema),
  tagCategories: z60.array(TagCategoryV1Schema),
  scenes: z60.array(SceneV1Schema),
  sceneMaps: z60.array(SceneMapV1Schema),
  sceneBackgrounds: z60.array(SceneBackgroundV1Schema),
  assets: z60.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z61 } from "zod";
var BeyondPaperV5Schema = z61.object({
  // Format metadata
  version: z61.literal(5),
  format: z61.literal("bypp"),
  // Bundle metadata
  name: z61.string(),
  exportedAt: z61.string(),
  bundleVersion: z61.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z61.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z61.array(z61.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z61.array(DialectV2Schema).default([]),
  entities: z61.array(EntityV2Schema).default([]),
  pages: z61.array(PageV1Schema).default([]),
  chunks: z61.array(ChunkV2Schema).default([]),
  datasets: z61.array(DatasetV2Schema).default([]),
  variables: z61.array(VariableV5Schema).default([]),
  widgets: z61.array(WidgetV5Schema).default([]),
  sheets: z61.array(SheetV3Schema).default([]),
  dataTables: z61.array(DataTableV3Schema).default([]),
  randomTables: z61.array(RandomTableV2Schema).default([]),
  tags: z61.array(TagV2Schema).default([]),
  tagCategories: z61.array(TagCategoryV1Schema).default([]),
  scenes: z61.array(SceneV2Schema).default([]),
  sceneMaps: z61.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z61.array(SceneBackgroundV2Schema).default([]),
  assets: z61.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
import { z as z62 } from "zod";
var BeyondPaperV6Schema = z62.object({
  // Format metadata
  version: z62.literal(6),
  format: z62.literal("bypp"),
  // Bundle metadata
  name: z62.string(),
  exportedAt: z62.string(),
  bundleVersion: z62.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z62.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z62.array(z62.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z62.array(DialectV2Schema).default([]),
  entities: z62.array(EntityV2Schema).default([]),
  pages: z62.array(PageV1Schema).default([]),
  chunks: z62.array(ChunkV2Schema).default([]),
  datasets: z62.array(DatasetV2Schema).default([]),
  variables: z62.array(VariableV6Schema).default([]),
  widgets: z62.array(WidgetV5Schema).default([]),
  sheets: z62.array(SheetV3Schema).default([]),
  dataTables: z62.array(DataTableV3Schema).default([]),
  randomTables: z62.array(RandomTableV2Schema).default([]),
  tags: z62.array(TagV2Schema).default([]),
  tagCategories: z62.array(TagCategoryV1Schema).default([]),
  scenes: z62.array(SceneV2Schema).default([]),
  sceneMaps: z62.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z62.array(SceneBackgroundV2Schema).default([]),
  assets: z62.array(AssetV2Schema).default([])
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

// src/migrations/index.ts
var MIGRATIONS = {
  1: v1ToV2,
  2: v2ToV3,
  3: v3ToV4,
  4: v4ToV5,
  5: v5ToV6,
  6: v6ToV7
};
var DOWN_MIGRATIONS = {
  2: v2ToV1,
  3: v3ToV2,
  4: v4ToV3,
  5: v5ToV4,
  6: v6ToV5,
  7: v7ToV6
};
var SCHEMA_BY_VERSION = {
  1: BeyondPaperV1Schema,
  2: BeyondPaperV2Schema,
  3: BeyondPaperV3Schema,
  4: BeyondPaperV4Schema,
  5: BeyondPaperV5Schema,
  6: BeyondPaperV6Schema,
  7: BeyondPaperV7Schema
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
  AbilityEntityV2Schema as AbilityEntitySchema,
  AbilityEntityV1Schema,
  AbilityEntityV2Schema,
  IconCompoSlotConfigV1Schema as ActionVisualIconCompoSlotConfigSchema,
  ActionVisualV1Schema as ActionVisualSchema,
  ActionVisualV1Schema,
  AssetBaseV2Schema as AssetBaseSchema,
  AssetBaseV1Schema,
  AssetBaseV2Schema,
  AssetV2Schema as AssetSchema,
  AssetUidSchema,
  AssetV1Schema,
  AssetV2Schema,
  AttributionV3Schema as AttributionSchema,
  AttributionV3Schema,
  AudioAssetV2Schema as AudioAssetSchema,
  AudioAssetV1Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema as AudioExternalAssetSchema,
  AudioExternalAssetV1Schema,
  AudioExternalAssetV2Schema,
  BYPP_FORMAT_EXT,
  BYPP_FORMAT_VERSION,
  BarOrientationV1Schema as BarOrientationSchema,
  BarOrientationV1Schema,
  BeyondPaperV7Schema as BeyondPaperSchema,
  BeyondPaperV1Schema,
  BeyondPaperV2Schema,
  BeyondPaperV3Schema,
  BeyondPaperV4Schema,
  BeyondPaperV5Schema,
  BeyondPaperV6Schema,
  BeyondPaperV7Schema,
  BooleanVariableV1Schema as BooleanVariableSchema,
  BooleanVariableV1Schema,
  CcLicenseV3Schema as CcLicenseSchema,
  CcLicenseV3Schema,
  CharacterEntityV2Schema as CharacterEntitySchema,
  CharacterEntityV1Schema,
  CharacterEntityV2Schema,
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
  ChunkV2Schema as ChunkSchema,
  ChunkTextProxyV2Schema as ChunkTextProxySchema,
  ChunkTextProxyV1Schema,
  ChunkTextProxyV2Schema,
  ChunkTextV2Schema as ChunkTextSchema,
  ChunkTextV1Schema,
  ChunkTextV2Schema,
  ChunkUidSchema,
  ChunkV1Schema,
  ChunkV2Schema,
  CreatureEntityV2Schema as CreatureEntitySchema,
  CreatureEntityV1Schema,
  CreatureEntityV2Schema,
  CustomImageSceneBackgroundV2Schema as CustomImageSceneBackgroundSchema,
  CustomImageSceneBackgroundV1Schema,
  CustomImageSceneBackgroundV2Schema,
  CustomImageSceneMapV2Schema as CustomImageSceneMapSchema,
  CustomImageSceneMapV1Schema,
  CustomImageSceneMapV2Schema,
  CustomVideoSceneBackgroundV2Schema as CustomVideoSceneBackgroundSchema,
  CustomVideoSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV2Schema,
  CustomVideoSceneMapV2Schema as CustomVideoSceneMapSchema,
  CustomVideoSceneMapV1Schema,
  CustomVideoSceneMapV2Schema,
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
  EntityAssetV2Schema as EntityAssetSchema,
  EntityAssetV1Schema,
  EntityAssetV2Schema,
  EntityBaseV2Schema as EntityBaseSchema,
  EntityBaseV1Schema,
  EntityBaseV2Schema,
  EntityImageFormatV5Schema as EntityImageFormatSchema,
  EntityImageFormatV5Schema,
  EntityImageObjectFitV5Schema as EntityImageObjectFitSchema,
  EntityImageObjectFitV5Schema,
  EntityV2Schema as EntitySchema,
  EntityTypeV1Schema as EntityTypeSchema,
  EntityTypeV1Schema,
  EntityTypeV1Schema as EntityTypeV2Schema,
  EntityUidSchema,
  EntityV1Schema,
  EntityV2Schema,
  EventEntityV2Schema as EventEntitySchema,
  EventEntityV1Schema,
  EventEntityV2Schema,
  FormulaVariableV1Schema as FormulaVariableSchema,
  FormulaVariableV1Schema,
  GridDataV1Schema as GridDataSchema,
  GridDataV1Schema,
  GroupEntityV2Schema as GroupEntitySchema,
  GroupEntityV1Schema,
  GroupEntityV2Schema,
  GroupRankCharacterV1Schema as GroupRankCharacterSchema,
  GroupRankCharacterV1Schema,
  GroupRankV1Schema as GroupRankSchema,
  GroupRankV1Schema,
  IconCompoV1Schema as IconCompoSchema,
  IconCompoSlotConfigV1Schema as IconCompoSlotConfigSchema,
  IconCompoSlotConfigV1Schema,
  IconCompoV1Schema,
  ImageAssetV2Schema as ImageAssetSchema,
  ImageAssetV1Schema,
  ImageAssetV2Schema,
  ImageDimensionsV1Schema as ImageDimensionsSchema,
  ImageDimensionsV1Schema,
  ImageVariableV5Schema as ImageVariableSchema,
  ImageVariableV5Schema,
  ItemEntityV2Schema as ItemEntitySchema,
  ItemEntityV1Schema,
  ItemEntityV2Schema,
  KNOWN_AUDIO_EXTS,
  KNOWN_EXTERNAL_AUDIO_PROVIDERS,
  KNOWN_VTT_SOURCE_FORMATS,
  MIGRATIONS,
  NoteEntityV2Schema as NoteEntitySchema,
  NoteEntityV1Schema,
  NoteEntityV2Schema,
  NumberVariableV1Schema as NumberVariableSchema,
  NumberVariableV1Schema,
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
  PlaceEntityV2Schema as PlaceEntitySchema,
  PlaceEntityV1Schema,
  PlaceEntityV2Schema,
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
  SceneBackgroundV2Schema as SceneBackgroundSchema,
  SceneBackgroundUidSchema,
  SceneBackgroundV1Schema,
  SceneBackgroundV2Schema,
  SceneGameModeV1Schema,
  SceneMapBaseV2Schema as SceneMapBaseSchema,
  SceneMapBaseV1Schema,
  SceneMapBaseV2Schema,
  SceneMapV2Schema as SceneMapSchema,
  SceneMapUidSchema,
  SceneMapV1Schema,
  SceneMapV2Schema,
  SceneV2Schema as SceneSchema,
  SceneUidSchema,
  SceneV1Schema,
  SceneV2Schema,
  SheetV3Schema as SheetSchema,
  SheetUidSchema,
  SheetV2Schema,
  SheetV3Schema,
  StoryEntityV2Schema as StoryEntitySchema,
  StoryEntityV1Schema,
  StoryEntityV2Schema,
  StyleV1Schema as StyleSchema,
  StyleV1Schema,
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
  VariableV6Schema as VariableSchema,
  VariableUidSchema,
  VariableV1Schema,
  VariableV2Schema,
  VariableV5Schema,
  VariableV6Schema,
  VariablesDataRecordV1Schema as VariablesDataRecordSchema,
  VariablesDataRecordV1Schema,
  VideoAssetV2Schema as VideoAssetSchema,
  VideoAssetV1Schema,
  VideoAssetV2Schema,
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
  WidgetEntityImageV5Schema as WidgetEntityImageSchema,
  WidgetEntityImageV5Schema,
  WidgetInlineListV1Schema as WidgetInlineListSchema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema as WidgetPipsSchema,
  WidgetPipsV1Schema,
  WidgetPlainTextV1Schema as WidgetPlainTextSchema,
  WidgetPlainTextV1Schema,
  WidgetV5Schema as WidgetSchema,
  WidgetToggleV1Schema as WidgetToggleSchema,
  WidgetToggleV1Schema,
  WidgetUidSchema,
  WidgetV1Schema,
  WidgetV5Schema,
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
  WithDataV1Schema as WithDataSchema,
  WithDataV1Schema,
  WithImagesUrlsV2Schema as WithImagesUrlsSchema,
  WithImagesUrlsV1Schema,
  WithImagesUrlsV2Schema,
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
  WithStyleV1Schema as WithStyleSchema,
  WithStyleV1Schema,
  WithVideoUrlsV2Schema as WithVideoUrlsSchema,
  WithVideoUrlsV1Schema,
  WithVideoUrlsV2Schema,
  migrate
};
//# sourceMappingURL=index.js.map