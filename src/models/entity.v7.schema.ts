/**
 * Entity schema as **introduced in bypp format v30** — v6 plus `subtypeUid`,
 * the sub-type it sits on (`entity-subtype.v30`): the longsword, an `item`,
 * on Weapons.
 *
 * A `subtypeUid` naming no sub-type of the document, or one whose `baseType`
 * is not the entity's `type`, reads as none: the entity sits on its type.
 *
 * Every other field is unchanged from v6; the union is re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import { EntitySubtypeUidSchema, EntityUidSchema } from "../uid";
import { GroupRankV1Schema } from "./entity.v1.schema";
import { EntityBaseV6Schema } from "./entity.v6.schema";

export const EntityBaseV7Schema = EntityBaseV6Schema.extend({
  subtypeUid: EntitySubtypeUidSchema.optional(),
});

export type EntityBaseV7 = z.infer<typeof EntityBaseV7Schema>;

export const CharacterEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV7 = z.infer<typeof CharacterEntityV7Schema>;

export const CreatureEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV7 = z.infer<typeof CreatureEntityV7Schema>;

export const GroupEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV7 = z.infer<typeof GroupEntityV7Schema>;

export const PlaceEntityV7Schema = EntityBaseV7Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV7 = z.infer<typeof PlaceEntityV7Schema>;

export const ItemEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV7Schema = EntityBaseV7Schema.extend({
  type: z.literal("event"),
});

export const EntityV7Schema = z.discriminatedUnion("type", [
  CharacterEntityV7Schema,
  CreatureEntityV7Schema,
  GroupEntityV7Schema,
  PlaceEntityV7Schema,
  ItemEntityV7Schema,
  NoteEntityV7Schema,
  AbilityEntityV7Schema,
  StoryEntityV7Schema,
  EventEntityV7Schema,
]);

export type EntityV7 = z.infer<typeof EntityV7Schema>;
