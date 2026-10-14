/**
 * Entity schema as **introduced in bypp format v31** — v7 plus what an entity
 * is in play:
 *
 *  - `modes` — its modes (`entity-mode.v31`): the Bracer of Kord's Worn and
 *    Bulwark.
 *  - `stackOrder` — the order of the modes of the spawns it bears, once a
 *    player sorted them (`StackOrderEntryV31`). Absent, a reader picks its
 *    own.
 *  - `item` — what an item is beyond its sheet, one kind at a time: a
 *    container and its slots (Rana's backpack, 20), or countable (her gold
 *    pieces, counted by `system-quantity` on each spawn). Absent, a plain
 *    item. Only an item reads it.
 *  - `synonyms` — other names a reader may find it under: "Healing potion"
 *    for "Potion of healing".
 *  - `shortcutRows` — its rows of shortcuts in play, as a player put them
 *    away (`entity-shortcut.v31`): Magic Missile on square 3. Absent, none.
 *  - `actions` — re-typed to `entity-action.v3` (`type` optional).
 *
 * Every other field is unchanged from v7; the union is re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import { EntityUidSchema } from "../uid";
import { EntityActionV3Schema } from "./entity-action.v3.schema";
import {
  EntityModeV31Schema,
  StackOrderEntryV31Schema,
} from "./entity-mode.v31.schema";
import { EntityShortcutRowV31Schema } from "./entity-shortcut.v31.schema";
import { GroupRankV1Schema } from "./entity.v1.schema";
import { EntityBaseV7Schema } from "./entity.v7.schema";

export const ItemKindV31Schema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("container"),
    slots: z.number().int().positive(),
  }),
  z.object({ kind: z.literal("countable") }),
]);

export type ItemKindV31 = z.infer<typeof ItemKindV31Schema>;

export const EntityBaseV8Schema = EntityBaseV7Schema.extend({
  actions: z.array(EntityActionV3Schema).default([]),
  modes: z.array(EntityModeV31Schema).default([]),
  stackOrder: z.array(StackOrderEntryV31Schema).optional(),
  item: ItemKindV31Schema.optional(),
  synonyms: z.array(z.string()).optional(),
  shortcutRows: z.array(EntityShortcutRowV31Schema).optional(),
});

export type EntityBaseV8 = z.infer<typeof EntityBaseV8Schema>;

export const CharacterEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV8 = z.infer<typeof CharacterEntityV8Schema>;

export const CreatureEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV8 = z.infer<typeof CreatureEntityV8Schema>;

export const GroupEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV8 = z.infer<typeof GroupEntityV8Schema>;

export const PlaceEntityV8Schema = EntityBaseV8Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV8 = z.infer<typeof PlaceEntityV8Schema>;

export const ItemEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV8Schema = EntityBaseV8Schema.extend({
  type: z.literal("event"),
});

export const EntityV8Schema = z.discriminatedUnion("type", [
  CharacterEntityV8Schema,
  CreatureEntityV8Schema,
  GroupEntityV8Schema,
  PlaceEntityV8Schema,
  ItemEntityV8Schema,
  NoteEntityV8Schema,
  AbilityEntityV8Schema,
  StoryEntityV8Schema,
  EventEntityV8Schema,
]);

export type EntityV8 = z.infer<typeof EntityV8Schema>;
