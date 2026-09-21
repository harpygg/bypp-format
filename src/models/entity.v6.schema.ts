/**
 * Entity schema as **introduced in bypp format v26** — v5 with its actions
 * re-typed to `entity-action.v2.schema`, which adds the update kind beside
 * the roll.
 *
 * Every other field is unchanged from v5; only the element type of `actions`
 * moves and the union is re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import { EntityUidSchema } from "../uid";
import { EntityActionV2Schema } from "./entity-action.v2.schema";
import { EntityTypeV1Schema, GroupRankV1Schema } from "./entity.v1.schema";
import { EntityBaseV4Schema } from "./entity.v4.schema";

export const EntityBaseV6Schema = EntityBaseV4Schema.extend({
  actions: z.array(EntityActionV2Schema).default([]),
});

export type EntityBaseV6 = z.infer<typeof EntityBaseV6Schema>;

export const CharacterEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV6 = z.infer<typeof CharacterEntityV6Schema>;

export const CreatureEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV6 = z.infer<typeof CreatureEntityV6Schema>;

export const GroupEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV6 = z.infer<typeof GroupEntityV6Schema>;

export const PlaceEntityV6Schema = EntityBaseV6Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV6 = z.infer<typeof PlaceEntityV6Schema>;

export const ItemEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV6Schema = EntityBaseV6Schema.extend({
  type: z.literal("event"),
});

export const EntityV6Schema = z.discriminatedUnion("type", [
  CharacterEntityV6Schema,
  CreatureEntityV6Schema,
  GroupEntityV6Schema,
  PlaceEntityV6Schema,
  ItemEntityV6Schema,
  NoteEntityV6Schema,
  AbilityEntityV6Schema,
  StoryEntityV6Schema,
  EventEntityV6Schema,
]);

export type EntityV6 = z.infer<typeof EntityV6Schema>;

// Entity taxonomy unchanged since v1 — re-export under the v6 name so
// consumers can keep importing from a single place.
export { EntityTypeV1Schema as EntityTypeV6Schema };
export type { EntityTypeV1 as EntityTypeV6 } from "./entity.v1.schema";
