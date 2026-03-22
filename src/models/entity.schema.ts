import { z } from "zod";
import { WithArchiveSchema } from "../mixins/with-archive.schema";
import { WithAssetsSchema } from "../mixins/with-assets.schema";
import { WithDataSchema } from "../mixins/with-data.schema";
import { WithImagesUrlsSchema } from "../mixins/with-images-urls.schema";
import { WithNameSchema } from "../mixins/with-name.schema";
import { WithPagesSchema } from "../mixins/with-pages.schema";
import { WithScenesSchema } from "../mixins/with-scenes.schema";
import {
  DatasetUidSchema,
  EntityUidSchema,
  SheetUidSchema,
  TagUidSchema,
} from "../uid";

export const EntityTypeSchema = z.enum([
  "character",
  "creature",
  "place",
  "group",
  "item",
  "ability",
  "event",
  "story",
  "note",
]);

export type EntityType = z.infer<typeof EntityTypeSchema>;

// ─── Group Rank ─────────────────────────────────────────────────────

export const GroupRankCharacterSchema = z.object({
  entityUid: EntityUidSchema,
  label: z.string(),
});

export type GroupRankCharacter = z.infer<typeof GroupRankCharacterSchema>;

export const GroupRankSchema = z.object({
  label: z.string(),
  characters: z.array(GroupRankCharacterSchema),
});

export type GroupRank = z.infer<typeof GroupRankSchema>;

// ─── Entity Base ────────────────────────────────────────────────────

export const EntityBaseSchema = z
  .object({
    uid: EntityUidSchema,
    displayName: z.string().nullable(),
    description: z.string().nullable(),
    tagsUid: z.array(TagUidSchema),
    sheetOverrides: z.record(DatasetUidSchema, SheetUidSchema).optional(),
  })
  .merge(WithNameSchema)
  .merge(WithImagesUrlsSchema)
  .merge(WithArchiveSchema)
  .merge(WithPagesSchema)
  .merge(WithDataSchema)
  .merge(WithAssetsSchema);

export type EntityBase = z.infer<typeof EntityBaseSchema>;

// ─── Entity Subtypes ────────────────────────────────────────────────

export const CharacterEntitySchema = EntityBaseSchema
  .extend({ type: z.literal("character") });

export type CharacterEntity = z.infer<typeof CharacterEntitySchema>;

export const CreatureEntitySchema = EntityBaseSchema
  .extend({ type: z.literal("creature") });

export type CreatureEntity = z.infer<typeof CreatureEntitySchema>;

export const GroupEntitySchema = EntityBaseSchema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankSchema),
  charactersUids: z.array(EntityUidSchema),
});

export type GroupEntity = z.infer<typeof GroupEntitySchema>;

export const PlaceEntitySchema = EntityBaseSchema
  .merge(WithScenesSchema)
  .extend({ type: z.literal("place") });

export type PlaceEntity = z.infer<typeof PlaceEntitySchema>;

export const ItemEntitySchema = EntityBaseSchema.extend({
  type: z.literal("item"),
});

export const NoteEntitySchema = EntityBaseSchema.extend({
  type: z.literal("note"),
});

export const AbilityEntitySchema = EntityBaseSchema.extend({
  type: z.literal("ability"),
});

export const StoryEntitySchema = EntityBaseSchema.extend({
  type: z.literal("story"),
});

export const EventEntitySchema = EntityBaseSchema.extend({
  type: z.literal("event"),
});

export const EntitySchema = z.discriminatedUnion("type", [
  CharacterEntitySchema,
  CreatureEntitySchema,
  GroupEntitySchema,
  PlaceEntitySchema,
  ItemEntitySchema,
  NoteEntitySchema,
  AbilityEntitySchema,
  StoryEntitySchema,
  EventEntitySchema,
]);

export type Entity = z.infer<typeof EntitySchema>;
