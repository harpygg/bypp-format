/**
 * An action an entity carries itself, as **introduced in bypp format v31** —
 * v2 with `type` optional.
 *
 * `type` said nothing since v26 (an action is what its sections say) and was
 * kept as `"roll"` for v1 readers only. A v31 producer may leave it out; the
 * down-migration writes it back.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { EntityActionV2Schema } from "./entity-action.v2.schema";

export const EntityActionV3Schema = EntityActionV2Schema.extend({
  type: z.literal("roll").optional(),
});

export type EntityActionV3 = z.infer<typeof EntityActionV3Schema>;
