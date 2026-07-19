// src/schemas/bypp.v11.schema.ts
import { z as z69 } from "zod";

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

// src/models/chunk.v11.schema.ts
import { z as z10 } from "zod";

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

// src/models/chunk.v11.schema.ts
var ChunkTextV11Schema = ChunkBaseV2Schema.extend({
  type: z10.literal("text"),
  content: z10.string(),
  mentionedEntitiesUids: z10.array(EntityUidSchema).optional(),
  wrappedInEntityUid: EntityUidSchema.optional()
});
var ChunkV11Schema = z10.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema
]);

// src/models/data-table.v3.schema.ts
import { z as z15 } from "zod";

// src/mixins/with-localized-name.v2.schema.ts
import { z as z12 } from "zod";

// src/mixins/translatable-text.v2.schema.ts
import { z as z11 } from "zod";
var TranslatableTextV2Schema = z11.record(z11.string(), z11.string());

// src/mixins/with-localized-name.v2.schema.ts
var WithLocalizedNameV2Schema = z12.object({
  name: TranslatableTextV2Schema
});

// src/models/data-table.v2.schema.ts
import { z as z14 } from "zod";

// src/models/variable.v1.schema.ts
import { z as z13 } from "zod";
var ChoiceOptionV1Schema = z13.object({
  uid: VariableChoiceUidSchema,
  label: z13.string(),
  icon: z13.string().optional(),
  value: z13.number().optional()
});
var VariableBaseV1Schema = z13.object({ uid: VariableUidSchema }).merge(WithNameV1Schema).extend({
  datasetsUids: z13.array(DatasetUidSchema),
  isMandatory: z13.boolean().optional(),
  isHiddenFromSheet: z13.boolean().optional(),
  label: z13.string().optional()
});
var NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: z13.literal("number"),
  defaultValue: z13.number().optional()
});
var TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: z13.literal("text"),
  maxChars: z13.number().optional(),
  defaultValue: z13.string().optional()
});
var BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: z13.literal("boolean"),
  defaultValue: z13.boolean().optional()
});
var ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: z13.literal("choice"),
  options: z13.array(ChoiceOptionV1Schema).optional(),
  isMultiple: z13.boolean().optional(),
  hasNumericValue: z13.boolean().optional(),
  hasIcon: z13.boolean().optional(),
  defaultOptionUids: z13.array(VariableChoiceUidSchema).optional()
});
var FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: z13.literal("formula"),
  formula: z13.string().optional(),
  depsVariablesUid: z13.array(VariableUidSchema).optional()
});
var IconCompoSlotConfigV1Schema = z13.object({
  icon: z13.string().nullable(),
  size: z13.number().optional(),
  rotate: z13.number().optional(),
  revert: z13.boolean().optional()
});
var IconCompoV1Schema = z13.record(
  z13.string(),
  IconCompoSlotConfigV1Schema
);
var ActionVisualV1Schema = z13.discriminatedUnion("type", [
  z13.object({ type: z13.literal("awesome"), icon: z13.string() }),
  z13.object({ type: z13.literal("compo"), icons: IconCompoV1Schema })
]);
var RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: z13.literal("roll"),
  diceFormula: z13.string().optional(),
  depsVariablesUid: z13.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: z13.number().nullable().optional()
});
var VariableV1Schema = z13.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema
]);

// src/models/data-table.v2.schema.ts
var DataTableColumnBaseV2Schema = z14.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: z14.string().optional(),
  isMandatory: z14.boolean().optional()
});
var DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z14.literal("number"),
    defaultNumber: z14.number().optional()
  }
);
var DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z14.literal("text"),
  maxChars: z14.number().optional(),
  defaultValue: z14.string().optional()
});
var DataTableColumnBooleanV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z14.literal("boolean"),
  defaultBoolean: z14.boolean().optional()
});
var DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z14.literal("choice"),
    options: z14.array(ChoiceOptionV1Schema).optional(),
    isMultiple: z14.boolean().optional(),
    hasNumericValue: z14.boolean().optional(),
    hasIcon: z14.boolean().optional()
  }
);
var DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z14.literal("icon"),
  defaultIcon: z14.string().optional()
});
var DataTableColumnTranslatableTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z14.literal("translatableText"),
  defaultValue: TranslatableTextV2Schema.optional()
});
var DataTableColumnDataTableRefV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z14.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z14.boolean().optional(),
  defaultRowUids: z14.array(DataTableRowUidSchema).optional()
});
var DataTableColumnDataTableLookupV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z14.literal("dataTableLookup"),
  sourceColumnUid: DataTableColumnUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z14.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z14.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z14.string().optional()
});
var DataTableColumnV2Schema = z14.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema
]);
var DataTableCellValueV2Schema = z14.union([
  z14.string(),
  z14.number(),
  z14.boolean(),
  z14.array(z14.string()),
  TranslatableTextV2Schema,
  z14.null()
]);
var DataTableRowV2Schema = z14.object({
  uid: DataTableRowUidSchema,
  data: z14.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV2Schema = z14.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z14.string().nullable().optional(),
  weight: z14.number().optional(),
  adminOnly: z14.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z14.array(DataTableColumnV2Schema),
  rows: z14.array(DataTableRowV2Schema)
});

// src/models/data-table.v3.schema.ts
var DataTableRowV3Schema = z15.object({
  uid: DataTableRowUidSchema,
  data: z15.record(DataTableColumnUidSchema, DataTableCellValueV2Schema).optional()
});
var DataTableV3Schema = z15.object({ uid: DataTableUidSchema }).merge(WithLocalizedNameV2Schema).extend({
  icon: z15.string().optional(),
  weight: z15.number().optional(),
  adminOnly: z15.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z15.array(DataTableColumnV2Schema).default([]),
  rows: z15.array(DataTableRowV3Schema).default([])
});

// src/models/dataset.v2.schema.ts
import { z as z23 } from "zod";

// src/models/entity.v1.schema.ts
import { z as z22 } from "zod";

// src/mixins/with-archive.v1.schema.ts
import { z as z16 } from "zod";
var WithArchiveV1Schema = z16.object({
  isArchived: z16.boolean()
});

// src/mixins/with-assets.v1.schema.ts
import { z as z17 } from "zod";
var WithAssetsV1Schema = z17.object({
  assetUids: z17.array(AssetUidSchema).optional()
});

// src/mixins/with-data.v1.schema.ts
import { z as z18 } from "zod";
var VariableDataValueV1Schema = z18.union([
  z18.string(),
  z18.number(),
  z18.boolean(),
  z18.array(VariableChoiceUidSchema),
  z18.null()
]);
var VariablesDataRecordV1Schema = z18.record(
  VariableUidSchema,
  VariableDataValueV1Schema
);
var WithDataV1Schema = z18.object({
  data: VariablesDataRecordV1Schema.optional()
});

// src/mixins/with-images-urls.v1.schema.ts
import { z as z19 } from "zod";
var WithImagesUrlsV1Schema = z19.object({
  originalUrl: z19.string().optional(),
  thumbnailUrl: z19.string().optional(),
  squareUrl: z19.string().optional(),
  closeupUrl: z19.string().optional()
});

// src/mixins/with-pages.v1.schema.ts
import { z as z20 } from "zod";
var WithPagesV1Schema = z20.object({
  pagesOrder: z20.array(PageUidSchema)
});

// src/mixins/with-scenes.v1.schema.ts
import { z as z21 } from "zod";
var WithScenesV1Schema = z21.object({
  scenesUids: z21.array(SceneUidSchema)
});

// src/models/entity.v1.schema.ts
var EntityTypeV1Schema = z22.enum([
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
var GroupRankCharacterV1Schema = z22.object({
  entityUid: EntityUidSchema,
  label: z22.string()
});
var GroupRankV1Schema = z22.object({
  label: z22.string(),
  characters: z22.array(GroupRankCharacterV1Schema)
});
var EntityBaseV1Schema = z22.object({
  uid: EntityUidSchema,
  displayName: z22.string().nullable(),
  description: z22.string().nullable(),
  tagsUid: z22.array(TagUidSchema),
  sheetOverrides: z22.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV1Schema).merge(WithArchiveV1Schema).merge(WithPagesV1Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("character")
});
var CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("creature")
});
var GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("group"),
  ranks: z22.array(GroupRankV1Schema),
  charactersUids: z22.array(EntityUidSchema)
});
var PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema
).extend({ type: z22.literal("place") });
var ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("item")
});
var NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("note")
});
var AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("ability")
});
var StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("story")
});
var EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: z22.literal("event")
});
var EntityV1Schema = z22.discriminatedUnion("type", [
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
var DatasetTargetV2Schema = z23.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV2Schema = z23.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z23.number().optional(),
  targets: z23.array(DatasetTargetV2Schema).default([]),
  targetTagsGroup: z23.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v2.schema.ts
import { z as z24 } from "zod";
var DialectFontV2Schema = z24.object({
  fontFamily: z24.string(),
  fontUrl: z24.string().url()
});
var DialectV2Schema = z24.object({
  uid: DialectUidSchema,
  name: z24.string(),
  font: DialectFontV2Schema,
  order: z24.number().optional(),
  spokenByEntitiesUids: z24.array(EntityUidSchema).default([])
});

// src/models/entity.v3.schema.ts
import { z as z28 } from "zod";

// src/mixins/with-archive.v2.schema.ts
import { z as z25 } from "zod";
var WithArchiveV2Schema = z25.object({
  isArchived: z25.boolean().default(false)
});

// src/mixins/with-images-urls.v3.schema.ts
var WithImagesUrlsV3Schema = WithImagesUrlsV2Schema.extend({
  dimensions: ImageDimensionsV1Schema.optional()
});

// src/mixins/with-pages.v2.schema.ts
import { z as z26 } from "zod";
var WithPagesV2Schema = z26.object({
  pagesOrder: z26.array(PageUidSchema).default([])
});

// src/mixins/with-scenes.v2.schema.ts
import { z as z27 } from "zod";
var WithScenesV2Schema = z27.object({
  scenesUids: z27.array(SceneUidSchema).default([])
});

// src/models/entity.v3.schema.ts
var EntityBaseV3Schema = z28.object({
  uid: EntityUidSchema,
  displayName: z28.string().optional(),
  description: z28.string().optional(),
  tagsUid: z28.array(TagUidSchema).default([]),
  sheetOverrides: z28.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV3Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("character")
});
var CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("creature")
});
var GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("group"),
  ranks: z28.array(GroupRankV1Schema).default([]),
  charactersUids: z28.array(EntityUidSchema).default([])
});
var PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema
).extend({ type: z28.literal("place") });
var ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("item")
});
var NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("note")
});
var AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("ability")
});
var StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("story")
});
var EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: z28.literal("event")
});
var EntityV3Schema = z28.discriminatedUnion("type", [
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

// src/models/page.v1.schema.ts
import { z as z29 } from "zod";
var PageStandardV1Schema = z29.object({ uid: PageUidSchema }).merge(WithNameV1Schema).extend({
  type: z29.literal("standard"),
  chunksOrder: z29.array(ChunkUidSchema)
});
var PageEntityV1Schema = z29.object({
  uid: PageUidSchema,
  type: z29.literal("entity"),
  entityUid: EntityUidSchema
});
var PageV1Schema = z29.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema
]);

// src/models/random-table.v7.schema.ts
import { z as z30 } from "zod";
var RandomTableRowV7Schema = z30.object({
  uid: RandomTableRowUidSchema,
  range: z30.number().default(1),
  content: z30.string(),
  randomTableRefs: z30.record(RandomTableUidSchema).optional()
});
var RandomTableV7Schema = z30.object({
  uid: RandomTableUidSchema,
  title: z30.string(),
  rows: z30.array(RandomTableRowV7Schema).default([]),
  diceFormula: z30.string().optional()
});

// src/models/scene.v2.schema.ts
import { z as z31 } from "zod";
var SceneV2Schema = z31.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.optional(),
  backgroundUid: SceneBackgroundUidSchema.optional(),
  lightPositionX: z31.number().optional(),
  lightPositionY: z31.number().optional(),
  lightPositionZ: z31.number().optional(),
  lightIntensity: z31.number().optional(),
  lightColor: z31.string().optional(),
  useCustomLightPosition: z31.boolean().optional(),
  indoorLight: z31.boolean().optional()
});

// src/models/scene-background.v3.schema.ts
import { z as z33 } from "zod";

// src/models/scene-background.v2.schema.ts
import { z as z32 } from "zod";
var SceneBackgroundBaseV2Schema = z32.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z32.number().optional()
});
var CustomImageSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
  type: z32.literal("customImage")
});
var CustomVideoSceneBackgroundV2Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z32.literal("customVideo")
});
var SceneBackgroundV2Schema = z32.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema
]);

// src/models/scene-background.v3.schema.ts
var CustomImageSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
  type: z33.literal("customImage")
});
var CustomVideoSceneBackgroundV3Schema = SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
  type: z33.literal("customVideo")
});
var SceneBackgroundV3Schema = z33.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema
]);

// src/models/scene-map.v3.schema.ts
import { z as z36 } from "zod";

// src/models/scene-map.v2.schema.ts
import { z as z35 } from "zod";

// src/models/scene-map.v1.schema.ts
import { z as z34 } from "zod";
var GridDataV1Schema = z34.object({
  type: z34.enum(["square", "hexv", "hexh"]),
  size: z34.number(),
  sizeInUnit: z34.number(),
  measureUnit: z34.string(),
  lineWidth: z34.number(),
  color: z34.string().nullable().optional(),
  offset: z34.object({ x: z34.number(), z: z34.number() })
});
var SceneMapBaseV1Schema = z34.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema
});
var CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z34.literal("customImage")
});
var CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z34.literal("customVideo")
});
var Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z34.literal("dd2vtt")
});
var SceneMapV1Schema = z34.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema
]);

// src/models/scene-map.v2.schema.ts
var SceneMapBaseV2Schema = z35.object({ uid: SceneMapUidSchema }).merge(WithNameV1Schema).extend({
  grid: GridDataV1Schema,
  sourceFormat: z35.string().optional()
});
var CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema
).extend({
  type: z35.literal("customImage")
});
var CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z35.literal("customVideo")
});
var SceneMapV2Schema = z35.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema
]);

// src/models/scene-map.v3.schema.ts
var CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema
).extend({
  type: z36.literal("customImage")
});
var CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema
).extend({
  type: z36.literal("customVideo")
});
var SceneMapV3Schema = z36.discriminatedUnion("type", [
  CustomImageSceneMapV3Schema,
  CustomVideoSceneMapV3Schema
]);

// src/models/sheet.v5.schema.ts
import { z as z41 } from "zod";

// src/mixins/with-style.v3.schema.ts
import { z as z38 } from "zod";

// src/mixins/with-style.v2.schema.ts
import { z as z37 } from "zod";
var ObjectFitV6Schema = z37.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down"
]);
var WidgetBackgroundV6Schema = z37.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional()
});
var StyleV2Schema = z37.object({
  justifyContent: z37.string().optional(),
  alignItems: z37.string().optional(),
  flexDirection: z37.string().optional(),
  lineHeight: z37.number().optional(),
  fontFamilyId: z37.string().optional(),
  fontScale: z37.number().optional(),
  color: z37.string().optional(),
  paddingTop: z37.number().optional(),
  paddingRight: z37.number().optional(),
  paddingBottom: z37.number().optional(),
  paddingLeft: z37.number().optional(),
  // New in v2:
  borderWidth: z37.number().optional(),
  borderStyle: z37.string().optional(),
  borderColor: z37.string().optional(),
  borderRadius: z37.string().optional(),
  background: WidgetBackgroundV6Schema.optional()
}).nullable().optional();
var WithStyleV2Schema = z37.object({
  style: StyleV2Schema
});

// src/mixins/with-style.v3.schema.ts
var StyleV3Schema = StyleV2Schema.unwrap().unwrap().extend({
  rotation: z38.number().optional()
}).nullable().optional();
var WithStyleV3Schema = z38.object({
  style: StyleV3Schema
});

// src/models/sheet.v4.schema.ts
import { z as z40 } from "zod";

// src/models/sheet.v3.schema.ts
import { z as z39 } from "zod";
var SheetV3Schema = z39.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV2Schema).extend({
  name: z39.string().optional(),
  widgetUids: z39.array(WidgetUidSchema).default([]),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/sheet.v4.schema.ts
var SheetV4Schema = SheetV3Schema.extend({
  styles: z40.record(z40.string(), StyleV2Schema).optional()
});

// src/models/sheet.v5.schema.ts
var SheetV5Schema = SheetV4Schema.extend({
  styles: z41.record(z41.string(), StyleV3Schema).optional()
});

// src/models/sheet.v6.schema.ts
var SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

// src/models/tag.v2.schema.ts
import { z as z42 } from "zod";
var TagV2Schema = z42.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.optional(),
  useAsFolder: z42.boolean().default(false)
});

// src/models/tag-category.v1.schema.ts
import { z as z43 } from "zod";
var TagCategoryV1Schema = z43.object({ uid: TagCategoryUidSchema }).merge(WithNameV1Schema);

// src/models/variable.v7.schema.ts
import { z as z47 } from "zod";

// src/models/variable.v2.schema.ts
import { z as z44 } from "zod";
var DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: z44.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z44.boolean().optional(),
  defaultRowUids: z44.array(DataTableRowUidSchema).optional()
});
var DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: z44.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z44.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z44.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z44.string().optional()
});
var VariableV2Schema = z44.discriminatedUnion("type", [
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

// src/models/widget.v7.schema.ts
import { z as z55 } from "zod";

// src/models/widget.v6.schema.ts
import { z as z54 } from "zod";

// src/models/widget.v1.schema.ts
import { z as z51 } from "zod";

// src/mixins/with-area.v1.schema.ts
import { z as z48 } from "zod";
var WithAreaV1Schema = z48.object({
  area: z48.object({
    width: z48.number(),
    height: z48.number()
  }).nullable().optional()
});

// src/mixins/with-position.v1.schema.ts
import { z as z49 } from "zod";
var WithPositionV1Schema = z49.object({
  position: z49.object({
    left: z49.number(),
    top: z49.number()
  }).nullable().optional()
});

// src/mixins/with-style.v1.schema.ts
import { z as z50 } from "zod";
var StyleV1Schema = z50.object({
  justifyContent: z50.string().optional(),
  alignItems: z50.string().optional(),
  flexDirection: z50.string().optional(),
  lineHeight: z50.number().optional(),
  fontFamilyId: z50.string().optional(),
  fontScale: z50.number().optional(),
  color: z50.string().optional(),
  paddingTop: z50.number().optional(),
  paddingRight: z50.number().optional(),
  paddingBottom: z50.number().optional(),
  paddingLeft: z50.number().optional()
}).nullable().optional();
var WithStyleV1Schema = z50.object({
  style: StyleV1Schema
});

// src/models/widget.v1.schema.ts
var WidgetBaseV1Schema = z51.object({ uid: WidgetUidSchema }).merge(WithNameV1Schema).merge(WithAreaV1Schema).merge(WithPositionV1Schema).merge(WithStyleV1Schema).extend({
  variableUid: VariableUidSchema.optional()
});
var WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("empty")
});
var WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("bigNumber"),
  min: z51.number().optional(),
  max: z51.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z51.string().optional()
});
var WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("plainText")
});
var WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("toggle"),
  toggleIconType: z51.string().optional()
});
var WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("bulletList"),
  listVisibility: z51.string().optional(),
  listStyleBulletBreakline: z51.boolean().optional(),
  listStyleBulletType: z51.string().optional(),
  listStyleBulletGap: z51.number().optional(),
  listStyleBulletIconGap: z51.number().optional(),
  listOptionStyle: z51.string().optional()
});
var WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("inlineList"),
  listStyleTextSeparator: z51.string().optional(),
  listVisibility: z51.string().optional(),
  listOptionStyle: z51.string().optional()
});
var WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("pips"),
  icon: z51.string().optional(),
  gapX: z51.number().optional(),
  gapY: z51.number().optional(),
  max: z51.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional()
});
var BarOrientationV1Schema = z51.enum(["ltr", "rtl", "ttb", "btt"]);
var WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: z51.literal("bar"),
  min: z51.number().optional(),
  max: z51.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z51.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: z51.string().optional(),
  bgColor: z51.string().optional(),
  showValue: z51.boolean().optional()
});
var WidgetV1Schema = z51.discriminatedUnion("type", [
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
import { z as z53 } from "zod";

// src/models/entity-image-format.v5.schema.ts
import { z as z52 } from "zod";
var ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup"
];
var EntityImageFormatV5Schema = z52.enum(ENTITY_IMAGE_RENDITIONS);

// src/models/widget.v5.schema.ts
var EntityImageObjectFitV5Schema = z53.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down"
]);
var WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z53.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional()
});
var WidgetV5Schema = z53.discriminatedUnion("type", [
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
var WidgetV6Schema = z54.discriminatedUnion("type", [
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
  type: z55.literal("wheel"),
  readingPosition: z55.string().optional(),
  labelOrientation: z55.string().optional(),
  radius: z55.number().optional()
});
var WidgetV7Schema = z55.discriminatedUnion("type", [
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
import { z as z65 } from "zod";

// src/models/asset.v1.schema.ts
import { z as z57 } from "zod";

// src/mixins/with-audio-urls.v1.schema.ts
import { z as z56 } from "zod";
var WithAudioUrlsV1Schema = z56.object({
  audioUrl: z56.string().optional(),
  audioDurationSeconds: z56.number().optional(),
  audioExt: z56.enum(["mp3", "ogg"]).optional()
});

// src/models/asset.v1.schema.ts
var AssetBaseV1Schema = z57.object({ uid: AssetUidSchema }).merge(WithNameV1Schema);
var ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema
).extend({
  type: z57.literal("image"),
  dimensions: ImageDimensionsV1Schema
});
var VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema
).extend({
  type: z57.literal("video"),
  dimensions: ImageDimensionsV1Schema
});
var AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema
).extend({
  type: z57.literal("audio")
});
var AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: z57.literal("audio-external"),
  youtubeVideoId: z57.string(),
  thumbnailUrl: z57.string(),
  durationSeconds: z57.number()
});
var EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: z57.literal("entity"),
  entityUid: EntityUidSchema
});
var AssetV1Schema = z57.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema
]);

// src/models/dataset.v1.schema.ts
import { z as z58 } from "zod";
var DatasetTargetV1Schema = z58.union([
  EntityTypeV1Schema,
  TagUidSchema
]);
var DatasetV1Schema = z58.object({ uid: DatasetUidSchema }).merge(WithNameV1Schema).extend({
  weight: z58.number().optional(),
  targets: z58.array(DatasetTargetV1Schema),
  targetTagsGroup: z58.enum(["every", "some"]).optional(),
  sheetUid: SheetUidSchema.optional()
});

// src/models/dialect.v1.schema.ts
import { z as z59 } from "zod";
var DialectFontV1Schema = z59.object({
  fontFamily: z59.string(),
  fontUrl: z59.string()
});
var DialectV1Schema = z59.object({
  uid: DialectUidSchema,
  name: z59.string(),
  font: DialectFontV1Schema,
  order: z59.number().optional(),
  spokenByEntitiesUids: z59.array(EntityUidSchema)
});

// src/models/random-table.v1.schema.ts
import { z as z60 } from "zod";
var RandomTableRowV1Schema = z60.object({
  uid: RandomTableRowUidSchema,
  range: z60.number(),
  content: z60.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV1Schema = z60.object({
  uid: RandomTableUidSchema,
  title: z60.string(),
  rows: z60.array(RandomTableRowV1Schema)
});

// src/models/scene.v1.schema.ts
import { z as z61 } from "zod";
var SceneGameModeV1Schema = z61.enum(["2d_vtt", "3d_vtt", "totm"]);
var SceneV1Schema = z61.object({ uid: SceneUidSchema }).merge(WithNameV1Schema).extend({
  mapUid: SceneMapUidSchema.nullable().optional(),
  backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
  lightPositionX: z61.number().optional(),
  lightPositionY: z61.number().optional(),
  lightPositionZ: z61.number().optional(),
  lightIntensity: z61.number().optional(),
  lightColor: z61.string().optional(),
  useCustomLightPosition: z61.boolean().optional(),
  indoorLight: z61.boolean().optional(),
  weather: z61.enum(["none", "fog", "dark"]).nullable().optional(),
  gameMode: SceneGameModeV1Schema.optional()
});

// src/models/scene-background.v1.schema.ts
import { z as z62 } from "zod";
var SceneBackgroundBaseV1Schema = z62.object({ uid: SceneBackgroundUidSchema }).merge(WithNameV1Schema).extend({
  opacity: z62.number().optional()
});
var CustomImageSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
  type: z62.literal("customImage")
});
var CustomVideoSceneBackgroundV1Schema = SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
  type: z62.literal("customVideo")
});
var SceneBackgroundV1Schema = z62.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema
]);

// src/models/sheet.v2.schema.ts
import { z as z63 } from "zod";
var SheetV2Schema = z63.object({ uid: SheetUidSchema }).merge(WithImagesUrlsV1Schema).extend({
  name: z63.string().nullable().optional(),
  widgetUids: z63.array(WidgetUidSchema),
  compatibleDatasetUid: DatasetUidSchema.optional()
});

// src/models/tag.v1.schema.ts
import { z as z64 } from "zod";
var TagV1Schema = z64.object({ uid: TagUidSchema }).merge(WithNameV1Schema).extend({
  categoryUid: TagCategoryUidSchema.nullable(),
  useAsFolder: z64.boolean()
});

// src/schemas/bypp.v3.schema.ts
var CcLicenseV3Schema = z65.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR"
]);
var AttributionV3Schema = z65.object({
  authorName: z65.string().min(1),
  authorUrl: z65.string().url().optional(),
  sourceUrl: z65.string().url().optional()
});
var ParentAttributionV3Schema = z65.object({
  artifactName: z65.string().min(1),
  authorName: z65.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z65.string().url().optional()
});
var BeyondPaperV3Schema = z65.object({
  // Format metadata
  version: z65.literal(3),
  format: z65.literal("bypp"),
  // Bundle metadata
  name: z65.string(),
  exportedAt: z65.string(),
  bundleVersion: z65.string(),
  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: z65.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: z65.array(z65.string().url()).optional(),
  // Content
  dialects: z65.array(DialectV1Schema),
  entities: z65.array(EntityV1Schema),
  pages: z65.array(PageV1Schema),
  chunks: z65.array(ChunkV1Schema),
  datasets: z65.array(DatasetV1Schema),
  variables: z65.array(VariableV2Schema),
  widgets: z65.array(WidgetV1Schema),
  sheets: z65.array(SheetV2Schema),
  dataTables: z65.array(DataTableV2Schema),
  randomTables: z65.array(RandomTableV1Schema),
  tags: z65.array(TagV1Schema),
  tagCategories: z65.array(TagCategoryV1Schema),
  scenes: z65.array(SceneV1Schema),
  sceneMaps: z65.array(SceneMapV1Schema),
  sceneBackgrounds: z65.array(SceneBackgroundV1Schema),
  assets: z65.array(AssetV1Schema)
});

// src/schemas/bypp.v4.schema.ts
import { z as z68 } from "zod";

// src/models/entity.v2.schema.ts
import { z as z66 } from "zod";
var EntityBaseV2Schema = z66.object({
  uid: EntityUidSchema,
  displayName: z66.string().optional(),
  description: z66.string().optional(),
  tagsUid: z66.array(TagUidSchema).default([]),
  sheetOverrides: z66.record(DatasetUidSchema, SheetUidSchema).optional()
}).merge(WithNameV1Schema).merge(WithImagesUrlsV2Schema).merge(WithArchiveV2Schema).merge(WithPagesV2Schema).merge(WithDataV1Schema).merge(WithAssetsV1Schema);
var CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("character")
});
var CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("creature")
});
var GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("group"),
  ranks: z66.array(GroupRankV1Schema).default([]),
  charactersUids: z66.array(EntityUidSchema).default([])
});
var PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema
).extend({ type: z66.literal("place") });
var ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("item")
});
var NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("note")
});
var AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("ability")
});
var StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("story")
});
var EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z66.literal("event")
});
var EntityV2Schema = z66.discriminatedUnion("type", [
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
import { z as z67 } from "zod";
var RandomTableRowV2Schema = z67.object({
  uid: RandomTableRowUidSchema,
  range: z67.number().default(1),
  content: z67.string(),
  randomTableUid: RandomTableUidSchema.optional()
});
var RandomTableV2Schema = z67.object({
  uid: RandomTableUidSchema,
  title: z67.string(),
  rows: z67.array(RandomTableRowV2Schema).default([])
});

// src/schemas/bypp.v4.schema.ts
var ParentAttributionV4Schema = z68.object({
  bundleName: z68.string().min(1),
  authorName: z68.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z68.string().url().optional()
});
var BeyondPaperV4Schema = z68.object({
  // Format metadata
  version: z68.literal(4),
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
  variables: z68.array(VariableV2Schema).default([]),
  widgets: z68.array(WidgetV1Schema).default([]),
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

// src/schemas/bypp.v11.schema.ts
var BeyondPaperV11Schema = z69.object({
  // Format metadata
  version: z69.literal(11),
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
  entities: z69.array(EntityV3Schema).default([]),
  pages: z69.array(PageV1Schema).default([]),
  chunks: z69.array(ChunkV11Schema).default([]),
  datasets: z69.array(DatasetV2Schema).default([]),
  variables: z69.array(VariableV7Schema).default([]),
  widgets: z69.array(WidgetV7Schema).default([]),
  sheets: z69.array(SheetV6Schema).default([]),
  dataTables: z69.array(DataTableV3Schema).default([]),
  randomTables: z69.array(RandomTableV7Schema).default([]),
  tags: z69.array(TagV2Schema).default([]),
  tagCategories: z69.array(TagCategoryV1Schema).default([]),
  scenes: z69.array(SceneV2Schema).default([]),
  sceneMaps: z69.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z69.array(SceneBackgroundV3Schema).default([]),
  assets: z69.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v1.schema.ts
import { z as z70 } from "zod";
var BeyondPaperV1Schema = z70.object({
  // Format metadata
  version: z70.literal(1),
  format: z70.literal("bypp"),
  // Bundle metadata
  name: z70.string(),
  exportedAt: z70.string(),
  bundleVersion: z70.string(),
  // Content
  dialects: z70.array(DialectV1Schema),
  entities: z70.array(EntityV1Schema),
  pages: z70.array(PageV1Schema),
  chunks: z70.array(ChunkV1Schema),
  datasets: z70.array(DatasetV1Schema),
  variables: z70.array(VariableV1Schema),
  widgets: z70.array(WidgetV1Schema),
  randomTables: z70.array(RandomTableV1Schema),
  tags: z70.array(TagV1Schema),
  tagCategories: z70.array(TagCategoryV1Schema),
  scenes: z70.array(SceneV1Schema),
  sceneMaps: z70.array(SceneMapV1Schema),
  sceneBackgrounds: z70.array(SceneBackgroundV1Schema),
  assets: z70.array(AssetV1Schema)
});

// src/schemas/bypp.v2.schema.ts
import { z as z71 } from "zod";
var BeyondPaperV2Schema = z71.object({
  // Format metadata
  version: z71.literal(2),
  format: z71.literal("bypp"),
  // Bundle metadata
  name: z71.string(),
  exportedAt: z71.string(),
  bundleVersion: z71.string(),
  // Content
  dialects: z71.array(DialectV1Schema),
  entities: z71.array(EntityV1Schema),
  pages: z71.array(PageV1Schema),
  chunks: z71.array(ChunkV1Schema),
  datasets: z71.array(DatasetV1Schema),
  variables: z71.array(VariableV2Schema),
  widgets: z71.array(WidgetV1Schema),
  sheets: z71.array(SheetV2Schema),
  dataTables: z71.array(DataTableV2Schema),
  randomTables: z71.array(RandomTableV1Schema),
  tags: z71.array(TagV1Schema),
  tagCategories: z71.array(TagCategoryV1Schema),
  scenes: z71.array(SceneV1Schema),
  sceneMaps: z71.array(SceneMapV1Schema),
  sceneBackgrounds: z71.array(SceneBackgroundV1Schema),
  assets: z71.array(AssetV1Schema)
});

// src/schemas/bypp.v5.schema.ts
import { z as z72 } from "zod";
var BeyondPaperV5Schema = z72.object({
  // Format metadata
  version: z72.literal(5),
  format: z72.literal("bypp"),
  // Bundle metadata
  name: z72.string(),
  exportedAt: z72.string(),
  bundleVersion: z72.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z72.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z72.array(z72.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z72.array(DialectV2Schema).default([]),
  entities: z72.array(EntityV2Schema).default([]),
  pages: z72.array(PageV1Schema).default([]),
  chunks: z72.array(ChunkV2Schema).default([]),
  datasets: z72.array(DatasetV2Schema).default([]),
  variables: z72.array(VariableV5Schema).default([]),
  widgets: z72.array(WidgetV5Schema).default([]),
  sheets: z72.array(SheetV3Schema).default([]),
  dataTables: z72.array(DataTableV3Schema).default([]),
  randomTables: z72.array(RandomTableV2Schema).default([]),
  tags: z72.array(TagV2Schema).default([]),
  tagCategories: z72.array(TagCategoryV1Schema).default([]),
  scenes: z72.array(SceneV2Schema).default([]),
  sceneMaps: z72.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z72.array(SceneBackgroundV2Schema).default([]),
  assets: z72.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v6.schema.ts
import { z as z73 } from "zod";
var BeyondPaperV6Schema = z73.object({
  // Format metadata
  version: z73.literal(6),
  format: z73.literal("bypp"),
  // Bundle metadata
  name: z73.string(),
  exportedAt: z73.string(),
  bundleVersion: z73.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z73.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z73.array(z73.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z73.array(DialectV2Schema).default([]),
  entities: z73.array(EntityV2Schema).default([]),
  pages: z73.array(PageV1Schema).default([]),
  chunks: z73.array(ChunkV2Schema).default([]),
  datasets: z73.array(DatasetV2Schema).default([]),
  variables: z73.array(VariableV6Schema).default([]),
  widgets: z73.array(WidgetV5Schema).default([]),
  sheets: z73.array(SheetV3Schema).default([]),
  dataTables: z73.array(DataTableV3Schema).default([]),
  randomTables: z73.array(RandomTableV2Schema).default([]),
  tags: z73.array(TagV2Schema).default([]),
  tagCategories: z73.array(TagCategoryV1Schema).default([]),
  scenes: z73.array(SceneV2Schema).default([]),
  sceneMaps: z73.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z73.array(SceneBackgroundV2Schema).default([]),
  assets: z73.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v7.schema.ts
import { z as z74 } from "zod";
var BeyondPaperV7Schema = z74.object({
  // Format metadata
  version: z74.literal(7),
  format: z74.literal("bypp"),
  // Bundle metadata
  name: z74.string(),
  exportedAt: z74.string(),
  bundleVersion: z74.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z74.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z74.array(z74.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z74.array(DialectV2Schema).default([]),
  entities: z74.array(EntityV2Schema).default([]),
  pages: z74.array(PageV1Schema).default([]),
  chunks: z74.array(ChunkV2Schema).default([]),
  datasets: z74.array(DatasetV2Schema).default([]),
  variables: z74.array(VariableV6Schema).default([]),
  widgets: z74.array(WidgetV5Schema).default([]),
  sheets: z74.array(SheetV3Schema).default([]),
  dataTables: z74.array(DataTableV3Schema).default([]),
  randomTables: z74.array(RandomTableV7Schema).default([]),
  tags: z74.array(TagV2Schema).default([]),
  tagCategories: z74.array(TagCategoryV1Schema).default([]),
  scenes: z74.array(SceneV2Schema).default([]),
  sceneMaps: z74.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z74.array(SceneBackgroundV2Schema).default([]),
  assets: z74.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v8.schema.ts
import { z as z75 } from "zod";
var BeyondPaperV8Schema = z75.object({
  // Format metadata
  version: z75.literal(8),
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
  variables: z75.array(VariableV6Schema).default([]),
  widgets: z75.array(WidgetV6Schema).default([]),
  sheets: z75.array(SheetV4Schema).default([]),
  dataTables: z75.array(DataTableV3Schema).default([]),
  randomTables: z75.array(RandomTableV7Schema).default([]),
  tags: z75.array(TagV2Schema).default([]),
  tagCategories: z75.array(TagCategoryV1Schema).default([]),
  scenes: z75.array(SceneV2Schema).default([]),
  sceneMaps: z75.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z75.array(SceneBackgroundV2Schema).default([]),
  assets: z75.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v9.schema.ts
import { z as z76 } from "zod";
var BeyondPaperV9Schema = z76.object({
  // Format metadata
  version: z76.literal(9),
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
  entities: z76.array(EntityV2Schema).default([]),
  pages: z76.array(PageV1Schema).default([]),
  chunks: z76.array(ChunkV2Schema).default([]),
  datasets: z76.array(DatasetV2Schema).default([]),
  variables: z76.array(VariableV7Schema).default([]),
  widgets: z76.array(WidgetV7Schema).default([]),
  sheets: z76.array(SheetV5Schema).default([]),
  dataTables: z76.array(DataTableV3Schema).default([]),
  randomTables: z76.array(RandomTableV7Schema).default([]),
  tags: z76.array(TagV2Schema).default([]),
  tagCategories: z76.array(TagCategoryV1Schema).default([]),
  scenes: z76.array(SceneV2Schema).default([]),
  sceneMaps: z76.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z76.array(SceneBackgroundV2Schema).default([]),
  assets: z76.array(AssetV2Schema).default([])
});

// src/schemas/bypp.v10.schema.ts
import { z as z77 } from "zod";
var BeyondPaperV10Schema = z77.object({
  // Format metadata
  version: z77.literal(10),
  format: z77.literal("bypp"),
  // Bundle metadata
  name: z77.string(),
  exportedAt: z77.string(),
  bundleVersion: z77.string(),
  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z77.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z77.array(z77.string().url()).optional(),
  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z77.array(DialectV2Schema).default([]),
  entities: z77.array(EntityV3Schema).default([]),
  pages: z77.array(PageV1Schema).default([]),
  chunks: z77.array(ChunkV2Schema).default([]),
  datasets: z77.array(DatasetV2Schema).default([]),
  variables: z77.array(VariableV7Schema).default([]),
  widgets: z77.array(WidgetV7Schema).default([]),
  sheets: z77.array(SheetV6Schema).default([]),
  dataTables: z77.array(DataTableV3Schema).default([]),
  randomTables: z77.array(RandomTableV7Schema).default([]),
  tags: z77.array(TagV2Schema).default([]),
  tagCategories: z77.array(TagCategoryV1Schema).default([]),
  scenes: z77.array(SceneV2Schema).default([]),
  sceneMaps: z77.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z77.array(SceneBackgroundV3Schema).default([]),
  assets: z77.array(AssetV2Schema).default([])
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