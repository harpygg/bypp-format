/**
 * Entity spawn schema as **introduced in bypp format v31** — v1 with a spawn
 * that may be borne by another spawn, and its modes.
 *
 *  - `owner` replaces `ownerUid`: who bears it, an entity or a spawn.
 *    `{ kind: "entity", uid: "rana" }` for Rana's arrows and everything in
 *    her bag; `{ kind: "spawn", uid: "caramel" }` for the saddlebags of
 *    Caramel, a donkey she owns as a spawn. Absent on a spawn nobody bears (a
 *    goblin on a scene).
 *  - `activeModes` — its entity's modes checked on it (`entity-mode.v31`).
 *    Absent, each mode is as its `arrival` says.
 *  - `stackOrder` — for a spawn that bears its own contents, the order of
 *    their modes, as an entity's (`entity.v8`).
 *
 * How many a spawn counts and what an inventory holds are values in `data`,
 * under the reserved `system-quantity` and `system-inventory`
 * (`system-variable.v31`).
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithDataV1Schema } from "../mixins/with-data.v1.schema";
import {
  EntityModeUidSchema,
  EntitySpawnUidSchema,
  EntityUidSchema,
} from "../uid";
import { StackOrderEntryV31Schema } from "./entity-mode.v31.schema";

export const SpawnOwnerV2Schema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("entity"), uid: EntityUidSchema }),
  z.object({ kind: z.literal("spawn"), uid: EntitySpawnUidSchema }),
]);

export type SpawnOwnerV2 = z.infer<typeof SpawnOwnerV2Schema>;

export const EntitySpawnV2Schema = z
  .object({
    uid: EntitySpawnUidSchema,
    entityUid: EntityUidSchema,
    owner: SpawnOwnerV2Schema.optional(),
    label: z.string().optional(),
    activeModes: z.array(EntityModeUidSchema).optional(),
    stackOrder: z.array(StackOrderEntryV31Schema).optional(),
  })
  .merge(WithDataV1Schema);

export type EntitySpawnV2 = z.infer<typeof EntitySpawnV2Schema>;
