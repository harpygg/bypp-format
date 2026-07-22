/**
 * Entity schema as **introduced in bypp format v13** — v3 with an optional
 * per-file `credit` (see `with-credit.v1.schema`) on the base, hence on every
 * variant of the union.
 *
 * An entity carries its own image (via `WithImagesUrlsV3`), and that portrait
 * is very often the one file in a bundle that is NOT freely reusable — a
 * commissioned character illustration next to CC0 scenery. The credit sits on
 * the base rather than on one variant because every entity kind can have an
 * image: a place has a landscape, an item has an object render, a story has a
 * cover.
 *
 * The taxonomy, group ranks, image URLs and every other field are unchanged
 * from v3; only the mixin is merged in and the union re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import { EntityUidSchema } from "../uid";
import { EntityTypeV1Schema, GroupRankV1Schema } from "./entity.v1.schema";
import { EntityBaseV3Schema } from "./entity.v3.schema";

export const EntityBaseV4Schema = EntityBaseV3Schema.merge(WithCreditV1Schema);

export type EntityBaseV4 = z.infer<typeof EntityBaseV4Schema>;

export const CharacterEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV4 = z.infer<typeof CharacterEntityV4Schema>;

export const CreatureEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV4 = z.infer<typeof CreatureEntityV4Schema>;

export const GroupEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV4 = z.infer<typeof GroupEntityV4Schema>;

export const PlaceEntityV4Schema = EntityBaseV4Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV4 = z.infer<typeof PlaceEntityV4Schema>;

export const ItemEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV4Schema = EntityBaseV4Schema.extend({
  type: z.literal("event"),
});

export const EntityV4Schema = z.discriminatedUnion("type", [
  CharacterEntityV4Schema,
  CreatureEntityV4Schema,
  GroupEntityV4Schema,
  PlaceEntityV4Schema,
  ItemEntityV4Schema,
  NoteEntityV4Schema,
  AbilityEntityV4Schema,
  StoryEntityV4Schema,
  EventEntityV4Schema,
]);

export type EntityV4 = z.infer<typeof EntityV4Schema>;

// Entity taxonomy unchanged since v1 — re-export under the v4 name so
// consumers can keep importing from a single place.
export { EntityTypeV1Schema as EntityTypeV4Schema };
export type { EntityTypeV1 as EntityTypeV4 } from "./entity.v1.schema";
