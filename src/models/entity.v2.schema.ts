import { z } from "zod";
import { WithArchiveV2Schema } from "../mixins/with-archive.v2.schema";
import { WithAssetsV1Schema } from "../mixins/with-assets.v1.schema";
import { WithDataV1Schema } from "../mixins/with-data.v1.schema";
import { WithImagesUrlsV2Schema } from "../mixins/with-images-urls.v2.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithPagesV2Schema } from "../mixins/with-pages.v2.schema";
import { WithScenesV2Schema } from "../mixins/with-scenes.v2.schema";
import {
  DatasetUidSchema,
  EntityUidSchema,
  SheetUidSchema,
  TagUidSchema,
} from "../uid";
import {
  EntityTypeV1Schema,
  GroupRankV1Schema,
} from "./entity.v1.schema";

/**
 * Entity base — v2 changes:
 *  - `displayName` is `.optional()` (was `.nullable()`). Omit the field
 *    when no override; readers fall back to `name`.
 *  - `description` is `.optional()` for the same reason.
 *  - `tagsUid` defaults to `[]`.
 *  - `isArchived` (via `WithArchiveV2Schema`) defaults to `false`.
 *  - `pagesOrder` (via `WithPagesV2Schema`) defaults to `[]`.
 *  - Image URLs go through `WithImagesUrlsV2Schema` (url-validated).
 *
 * `EntityTypeV1Schema` and `GroupRankV1Schema` are re-used from v1 —
 * the entity taxonomy and group rank shapes are unchanged.
 */
export const EntityBaseV2Schema = z
  .object({
    uid: EntityUidSchema,
    displayName: z.string().optional(),
    description: z.string().optional(),
    tagsUid: z.array(TagUidSchema).default([]),
    sheetOverrides: z.record(DatasetUidSchema, SheetUidSchema).optional(),
  })
  .merge(WithNameV1Schema)
  .merge(WithImagesUrlsV2Schema)
  .merge(WithArchiveV2Schema)
  .merge(WithPagesV2Schema)
  .merge(WithDataV1Schema)
  .merge(WithAssetsV1Schema);

export type EntityBaseV2 = z.infer<typeof EntityBaseV2Schema>;

export const CharacterEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("character"),
});
export type CharacterEntityV2 = z.infer<typeof CharacterEntityV2Schema>;

export const CreatureEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("creature"),
});
export type CreatureEntityV2 = z.infer<typeof CreatureEntityV2Schema>;

export const GroupEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("group"),
  ranks: z.array(GroupRankV1Schema).default([]),
  charactersUids: z.array(EntityUidSchema).default([]),
});
export type GroupEntityV2 = z.infer<typeof GroupEntityV2Schema>;

export const PlaceEntityV2Schema = EntityBaseV2Schema.merge(
  WithScenesV2Schema,
).extend({ type: z.literal("place") });
export type PlaceEntityV2 = z.infer<typeof PlaceEntityV2Schema>;

export const ItemEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("item"),
});

export const NoteEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("note"),
});

export const AbilityEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("ability"),
});

export const StoryEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("story"),
});

export const EventEntityV2Schema = EntityBaseV2Schema.extend({
  type: z.literal("event"),
});

export const EntityV2Schema = z.discriminatedUnion("type", [
  CharacterEntityV2Schema,
  CreatureEntityV2Schema,
  GroupEntityV2Schema,
  PlaceEntityV2Schema,
  ItemEntityV2Schema,
  NoteEntityV2Schema,
  AbilityEntityV2Schema,
  StoryEntityV2Schema,
  EventEntityV2Schema,
]);

export type EntityV2 = z.infer<typeof EntityV2Schema>;

// Re-export entity type enum unchanged so consumers can keep importing
// from a single place even after the v2 fork.
export { EntityTypeV1Schema as EntityTypeV2Schema };
export type { EntityTypeV1 as EntityTypeV2 } from "./entity.v1.schema";
