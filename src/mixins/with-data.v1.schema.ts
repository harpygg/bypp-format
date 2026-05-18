import { z } from "zod";
import { VariableChoiceUidSchema, VariableUidSchema } from "../uid";

/**
 * A single cell's value, keyed by variable uid inside `WithDataV1Schema`.
 *
 * The shape depends on the variable's `type`:
 *  - `number` variable → `number`
 *  - `text` / `formula` (resolved) → `string`
 *  - `boolean` / `toggle`-like → `boolean`
 *  - `choice` (multi or single) → `VariableChoiceUid[]`
 *  - any variable explicitly cleared by the user → `null`
 *
 * zod can't express the per-key correlation (data is `Record<VarUid, …>`
 * and zod records don't index by discriminator). Consumers narrow against
 * the matching variable's `type` at read time.
 */
export const VariableDataValueV1Schema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(VariableChoiceUidSchema),
  z.null(),
]);

/**
 * Map from variable uid → cell value. The per-entity values of every
 * dataset's variables. Missing keys mean "no value set" — the renderer
 * falls back to the variable's `defaultValue` (or the equivalent for
 * choice/data-table variables).
 */
export const VariablesDataRecordV1Schema = z.record(
  VariableUidSchema,
  VariableDataValueV1Schema,
);

/**
 * Mixin: optional bag of per-variable data attached to an entity.
 *
 * This is where the actual values typed by users live (the character's HP
 * is `42`, their class is `wizard`, etc.). The schema of each cell is
 * driven by the matching variable's definition.
 */
export const WithDataV1Schema = z.object({
  data: VariablesDataRecordV1Schema.optional(),
});
