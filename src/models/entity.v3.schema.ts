/**
 * Entity schema as **introduced in bypp format v10** — v2 with the image URLs
 * upgraded from `WithImagesUrlsV2` to `WithImagesUrlsV3` (adds the original
 * image's `dimensions`). The taxonomy, group ranks and every other field are
 * unchanged from v2.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithArchiveV2Schema } from "../mixins/with-archive.v2.schema";
import { WithAssetsV1Schema } from "../mixins/with-assets.v1.schema";
import { WithDataV1Schema } from "../mixins/with-data.v1.schema";
import { WithImagesUrlsV3Schema } from "../mixins/with-images-urls.v3.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithPagesV2Schema } from "../mixins/with-pages.v2.schema";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import {
  DatasetUidSchema,
  EntityUidSchema,
  SheetUidSchema,
  TagUidSchema,
} from "../uid";
import { EntityTypeV1Schema, GroupRankV1Schema } from "./entity.v1.schema";

export const EntityBaseV3Schema = z
  .object({
    uid: EntityUidSchema,
    displayName: z.string().optional(),
    description: z.string().optional(),
    tagsUid: z.array(TagUidSchema).default([]),
    sheetOverrides: z.record(DatasetUidSchema, SheetUidSchema).optional(),
  })
  .merge(WithNameV1Schema)
  .merge(WithImagesUrlsV3Schema)
  .merge(WithArchiveV2Schema)
  .merge(WithPagesV2Schema)
  .merge(WithDataV1Schema)
  .merge(WithAssetsV1Schema);

export type EntityBaseV3 = z.infer<typeof EntityBaseV3Schema>;

export const CharacterEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV3 = z.infer<typeof CharacterEntityV3Schema>;

export const CreatureEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV3 = z.infer<typeof CreatureEntityV3Schema>;

export const GroupEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV3 = z.infer<typeof GroupEntityV3Schema>;

export const PlaceEntityV3Schema = EntityBaseV3Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV3 = z.infer<typeof PlaceEntityV3Schema>;

export const ItemEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV3Schema = EntityBaseV3Schema.extend({
  type: z.literal("event"),
});

export const EntityV3Schema = z.discriminatedUnion("type", [
  CharacterEntityV3Schema,
  CreatureEntityV3Schema,
  GroupEntityV3Schema,
  PlaceEntityV3Schema,
  ItemEntityV3Schema,
  NoteEntityV3Schema,
  AbilityEntityV3Schema,
  StoryEntityV3Schema,
  EventEntityV3Schema,
]);

export type EntityV3 = z.infer<typeof EntityV3Schema>;

// Entity taxonomy unchanged since v1 — re-export under the v3 name so
// consumers can keep importing from a single place.
export { EntityTypeV1Schema as EntityTypeV3Schema };
export type { EntityTypeV1 as EntityTypeV3 } from "./entity.v1.schema";
