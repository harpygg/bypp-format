/**
 * An action an entity carries itself, as **introduced in bypp format v20**.
 *
 * An attribute belongs to every entity of its sheet: a dagger's own "1d4
 * piercing" has nowhere to live among them, because the next dagger rolls
 * something else. An action belongs to ONE entity, and travels with it.
 *
 * `diceFormula` is HTML, like every other formula in this format: the
 * attributes it reads are `<span data-variable="…">` tags, so a reader can
 * resolve them and an author can see their names. The uids inside are
 * remapped on import along with every other reference.
 *
 * `visual` and `hue` are the ones a roll variable already uses (see
 * `variable.v1.schema`): an action wears the same square as a sheet's roll,
 * and there is no reason for two vocabularies.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TranslatableTextV2Schema } from "../mixins/translatable-text.v2.schema";
import { EntityActionUidSchema } from "../uid";
import { ActionVisualV1Schema } from "./variable.v1.schema";

export const EntityActionV1Schema = z.object({
  uid: EntityActionUidSchema,
  label: TranslatableTextV2Schema,
  visual: ActionVisualV1Schema.optional(),
  hue: z.number().nullable().optional(),
  type: z.literal("roll"),
  diceFormula: z.string().optional(),
});

export type EntityActionV1 = z.infer<typeof EntityActionV1Schema>;
