/**
 * Entity spawn schema as **introduced in bypp v28**: one copy of an entity,
 * carrying only what sets it apart from its model.
 *
 * An entity is a model: "Longbow", "Frost arrow", "Goblin". Twenty characters
 * carrying a longbow, or three goblins with their own hit points, are twenty
 * or three spawns of one entity, not twenty or three entities. A spawn stores
 * its own values and reads everything else (name, type, tags, picture, which
 * sheets apply, the values it does not set) from `entityUid`, so fixing a
 * typo on the model fixes every spawn of it.
 *
 *  - `entityUid` — the model. A reader that cannot find it has nothing to
 *    show the spawn as.
 *  - `ownerUid` — the entity it belongs to (Frodo), whose rights apply to it.
 *    It stays the same through a bag inside a bag: the bag is where the spawn
 *    is held, the owner is who holds the bag. Absent on a spawn that belongs
 *    to nobody yet.
 *  - `label` — its own name ("Kael's arrows"). Absent or empty reads the
 *    model's name.
 *  - `data` — its own values, keyed by variable uid like an entity's. A key
 *    it does not set, or sets to `null`, reads the model's value.
 *
 * Where a spawn is held is not on the spawn: it is the value of an
 * `entitySpawnRef` variable on its holder (an entity, or another spawn for
 * a bag), a list of spawn uids.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithDataV1Schema } from "../mixins/with-data.v1.schema";
import { EntitySpawnUidSchema, EntityUidSchema } from "../uid";

export const EntitySpawnV1Schema = z
  .object({
    uid: EntitySpawnUidSchema,
    entityUid: EntityUidSchema,
    ownerUid: EntityUidSchema.optional(),
    label: z.string().optional(),
  })
  .merge(WithDataV1Schema);

export type EntitySpawnV1 = z.infer<typeof EntitySpawnV1Schema>;
