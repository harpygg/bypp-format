import { z } from "zod";
import { WithArchiveV1Schema } from "../mixins/with-archive.v1.schema";
import { WithAssetsV1Schema } from "../mixins/with-assets.v1.schema";
import { WithDataV1Schema } from "../mixins/with-data.v1.schema";
import { WithImagesUrlsV1Schema } from "../mixins/with-images-urls.v1.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithPagesV1Schema } from "../mixins/with-pages.v1.schema";
import { WithScenesV1Schema } from "../mixins/with-scenes.v1.schema";
import {
  DatasetUidSchema,
  EntityUidSchema,
  SheetUidSchema,
  TagUidSchema,
} from "../uid";

/**
 * The taxonomy of entity kinds. Each value is a discriminator that
 * selects which entity variant a record is (and thus which extra fields
 * it carries). Stable across bypp versions — adding a new entity type is
 * a major change (would require a v3+ fork).
 *
 * - `character` — a playable / non-playable character.
 * - `creature` — a monster or similar non-character actor.
 * - `place` — a location (carries scenes).
 * - `group` — a collective (carries ranks + member list).
 * - `item` — a piece of equipment / inventory.
 * - `ability` — a single skill / power / spell.
 * - `event` — something that happens at a point in time.
 * - `story` — a story arc / legend / narrative fragment.
 * - `note` — a free-form GM / author note.
 */
export const EntityTypeV1Schema = z.enum([
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

export type EntityTypeV1 = z.infer<typeof EntityTypeV1Schema>;

// ─── Group Rank ─────────────────────────────────────────────────────

/**
 * A single character listed inside a group rank. `entityUid` references
 * the actual character (must resolve to a `character`-type entity in the
 * bundle). `label` is the rank-local label (e.g. "First Mate", "Acolyte")
 * — separate from the character's own name.
 */
export const GroupRankCharacterV1Schema = z.object({
  entityUid: EntityUidSchema,
  label: z.string(),
});

export type GroupRankCharacterV1 = z.infer<typeof GroupRankCharacterV1Schema>;

/**
 * A rank tier inside a group entity — captures hierarchical membership.
 * "Captain" rank may contain one character; "Crew" rank may contain
 * many. The order of `ranks[]` on a group entity is significant.
 */
export const GroupRankV1Schema = z.object({
  label: z.string(),
  characters: z.array(GroupRankCharacterV1Schema),
});

export type GroupRankV1 = z.infer<typeof GroupRankV1Schema>;

// ─── Entity Base ────────────────────────────────────────────────────

/**
 * Fields common to every entity, before the type-specific extensions.
 *
 *  - `displayName` — what readers show instead of `name` in player-facing
 *    contexts. `null` means "use `name`". Lets the GM track a creature
 *    as "the assassin" while players see "hooded figure".
 *  - `description` — short summary string (one paragraph, not rich
 *    text — for that, use a page chunk).
 *  - `tagsUid` — every tag this entity has. Drives dataset targeting,
 *    filtering, grouping.
 *  - `sheetOverrides` — per-dataset sheet customization. When a viewer
 *    renders this entity under dataset D, it uses `sheetOverrides[D]`
 *    (if set) instead of the dataset's default `sheetUid`. Lets one
 *    character use a compact sheet while another uses a full one for the
 *    same dataset.
 *  - Mixins: `name`, image URLs, archive flag, owned pages, variable
 *    data, asset gallery.
 */
export const EntityBaseV1Schema = z
  .object({
    uid: EntityUidSchema,
    displayName: z.string().nullable(),
    description: z.string().nullable(),
    tagsUid: z.array(TagUidSchema),
    sheetOverrides: z.record(DatasetUidSchema, SheetUidSchema).optional(),
  })
  .merge(WithNameV1Schema)
  .merge(WithImagesUrlsV1Schema)
  .merge(WithArchiveV1Schema)
  .merge(WithPagesV1Schema)
  .merge(WithDataV1Schema)
  .merge(WithAssetsV1Schema);

export type EntityBaseV1 = z.infer<typeof EntityBaseV1Schema>;

// ─── Entity Subtypes ────────────────────────────────────────────────

/** A playable / non-playable character. No type-specific fields beyond the base. */
export const CharacterEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("character"),
});

export type CharacterEntityV1 = z.infer<typeof CharacterEntityV1Schema>;

/** A monster or similar non-character actor. No type-specific fields beyond the base. */
export const CreatureEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("creature"),
});

export type CreatureEntityV1 = z.infer<typeof CreatureEntityV1Schema>;

/**
 * A collective entity (party, faction, family, crew…) made of members
 * organized by rank.
 *
 *  - `ranks[]` — tiers of membership, in display order (top of hierarchy
 *    first).
 *  - `charactersUids[]` — flat list of all member uids across all ranks.
 *    Mirrors what `ranks[].characters[].entityUid` collectively contains;
 *    kept separate as a denormalized index so readers can filter "is
 *    entity X in this group?" without walking the rank tree.
 */
export const GroupEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema),
  charactersUids: z.array(EntityUidSchema),
});

export type GroupEntityV1 = z.infer<typeof GroupEntityV1Schema>;

/**
 * A location entity. Carries its `scenesUids` (the playable scenes attached
 * to this place — combat encounters, exploration scenes, etc.).
 */
export const PlaceEntityV1Schema = EntityBaseV1Schema.merge(
  WithScenesV1Schema,
).extend({ type: z.literal("place") });

export type PlaceEntityV1 = z.infer<typeof PlaceEntityV1Schema>;

/** Inventory / equipment item. No type-specific fields beyond the base. */
export const ItemEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("item"),
});

/** Free-form GM or author note. No type-specific fields beyond the base. */
export const NoteEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("note"),
});

/** A power, skill, spell, or similar ability. No type-specific fields beyond the base. */
export const AbilityEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("ability"),
});

/** A narrative fragment (legend, lore, backstory). No type-specific fields beyond the base. */
export const StoryEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("story"),
});

/** An event in the timeline. No type-specific fields beyond the base. */
export const EventEntityV1Schema = EntityBaseV1Schema.extend({
  type: z.literal("event"),
});

/**
 * Discriminated union of every entity kind. Narrow with `entity.type` —
 * the result carries the matching type-specific fields automatically.
 */
export const EntityV1Schema = z.discriminatedUnion("type", [
  CharacterEntityV1Schema,
  CreatureEntityV1Schema,
  GroupEntityV1Schema,
  PlaceEntityV1Schema,
  ItemEntityV1Schema,
  NoteEntityV1Schema,
  AbilityEntityV1Schema,
  StoryEntityV1Schema,
  EventEntityV1Schema,
]);

export type EntityV1 = z.infer<typeof EntityV1Schema>;
