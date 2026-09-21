/**
 * An action an entity carries itself, as **introduced in bypp format v26** —
 * v1 with the two sections a sheet's `roll` gained in the same version.
 *
 * An action has no kind: it is what its sections say, each optional and run
 * in this order — `rolls` thrown and posted, `updates` applied, `log`
 * posted. `diceFormula` stays as the first roll's formula, for v1 readers. See `variable.v10.schema` for what the sections mean and the two
 * reserved attributes the roll leaves for them. `type` stays `"roll"` for
 * v1 readers, which know no other value; it no longer says anything.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TranslatableTextV2Schema } from "../mixins/translatable-text.v2.schema";
import { EntityActionUidSchema } from "../uid";
import { ActionVisualV1Schema } from "./variable.v1.schema";
import { ActionSectionsV26Schema } from "./variable.v10.schema";

export const EntityActionV2Schema = z
  .object({
    uid: EntityActionUidSchema,
    label: TranslatableTextV2Schema,
    visual: ActionVisualV1Schema.optional(),
    hue: z.number().nullable().optional(),
    type: z.literal("roll"),
    diceFormula: z.string().optional(),
  })
  .merge(ActionSectionsV26Schema);

export type EntityActionV2 = z.infer<typeof EntityActionV2Schema>;
