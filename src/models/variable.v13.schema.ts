/**
 * Variable schema as **introduced in bypp format v31** — v12 with a number's
 * `maxVariable`.
 *
 * A number may take its maximum off another attribute of the same entity when
 * `max` is unset: HP up to Max HP, `{ type: "number", maxVariable: "max-hp" }`.
 * A reader keeps a value written by an effect under it and may draw it as a
 * gauge. `null` and absent both mean none.
 *
 * Every other variant is re-used unchanged from v12.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { VariableUidSchema } from "../uid";
import {
  BooleanVariableV11Schema,
  ChoiceVariableV11Schema,
  DataTableDirectLookupVariableV11Schema,
  DataTableLookupVariableV11Schema,
  DataTableRefVariableV11Schema,
  EntityLookupVariableV11Schema,
  EntityRefVariableV11Schema,
  FormulaVariableV11Schema,
  ImageVariableV11Schema,
  NumberVariableV11Schema,
  RollVariableV11Schema,
  TextVariableV11Schema,
} from "./variable.v11.schema";
import { EntitySpawnRefVariableV12Schema } from "./variable.v12.schema";

export const NumberVariableV13Schema = NumberVariableV11Schema.extend({
  maxVariable: VariableUidSchema.nullable().optional(),
});

export type NumberVariableV13 = z.infer<typeof NumberVariableV13Schema>;

/**
 * Discriminated union of all variable variants as of bypp v31. Narrow with
 * `variable.type`.
 */
export const VariableV13Schema = z.discriminatedUnion("type", [
  NumberVariableV13Schema,
  TextVariableV11Schema,
  BooleanVariableV11Schema,
  ChoiceVariableV11Schema,
  FormulaVariableV11Schema,
  RollVariableV11Schema,
  DataTableRefVariableV11Schema,
  DataTableLookupVariableV11Schema,
  ImageVariableV11Schema,
  DataTableDirectLookupVariableV11Schema,
  EntityRefVariableV11Schema,
  EntityLookupVariableV11Schema,
  EntitySpawnRefVariableV12Schema,
]);

export type VariableV13 = z.infer<typeof VariableV13Schema>;
