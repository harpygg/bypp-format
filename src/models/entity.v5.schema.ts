/**
 * Entity schema as **introduced in bypp format v20** — v4 with the actions an
 * entity carries itself (see `entity-action.v1.schema`).
 *
 * Until v20 an entity could only act through its sheets: every attribute, and
 * so every roll, belonged to a dataset and therefore to every entity of it. A
 * named sword with its own attack had nowhere to put it, and exporting one
 * dropped the attack without a word. `actions` is that place.
 *
 * It sits on the base rather than on one variant: any entity can act. A place
 * has a trap, an ability has its own roll, a character has a signature move.
 *
 * Every other field is unchanged from v4; only the list is added and the union
 * re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import { EntityUidSchema } from "../uid";
import { EntityActionV1Schema } from "./entity-action.v1.schema";
import { EntityTypeV1Schema, GroupRankV1Schema } from "./entity.v1.schema";
import { EntityBaseV4Schema } from "./entity.v4.schema";

export const EntityBaseV5Schema = EntityBaseV4Schema.extend({
  actions: z.array(EntityActionV1Schema).default([]),
});

export type EntityBaseV5 = z.infer<typeof EntityBaseV5Schema>;

export const CharacterEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV5 = z.infer<typeof CharacterEntityV5Schema>;

export const CreatureEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV5 = z.infer<typeof CreatureEntityV5Schema>;

export const GroupEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV5 = z.infer<typeof GroupEntityV5Schema>;

export const PlaceEntityV5Schema = EntityBaseV5Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV5 = z.infer<typeof PlaceEntityV5Schema>;

export const ItemEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV5Schema = EntityBaseV5Schema.extend({
  type: z.literal("event"),
});

export const EntityV5Schema = z.discriminatedUnion("type", [
  CharacterEntityV5Schema,
  CreatureEntityV5Schema,
  GroupEntityV5Schema,
  PlaceEntityV5Schema,
  ItemEntityV5Schema,
  NoteEntityV5Schema,
  AbilityEntityV5Schema,
  StoryEntityV5Schema,
  EventEntityV5Schema,
]);

export type EntityV5 = z.infer<typeof EntityV5Schema>;

// Entity taxonomy unchanged since v1 — re-export under the v5 name so
// consumers can keep importing from a single place.
export { EntityTypeV1Schema as EntityTypeV5Schema };
export type { EntityTypeV1 as EntityTypeV5 } from "./entity.v1.schema";
