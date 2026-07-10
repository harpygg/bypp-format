/**
 * Variable schema as **introduced in bypp v7** — extends v6 by upgrading the
 * `number` variant to carry value-domain constraints (`min` / `max` / `step`).
 * Every other variant is unchanged and re-imported directly.
 *
 * These are the DATA's constraints (a "1–20" stat), independent of any widget
 * — e.g. a wheel widget spins the variable's `min..max` stepped by `step`.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import {
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  NumberVariableV1Schema,
  RollVariableV1Schema,
  TextVariableV1Schema,
} from "./variable.v1.schema";
import {
  DataTableLookupVariableV2Schema,
  DataTableRefVariableV2Schema,
} from "./variable.v2.schema";
import { ImageVariableV5Schema } from "./variable.v5.schema";
import { DataTableDirectLookupVariableV6Schema } from "./variable.v6.schema";

/** A numeric variable with an optional value domain. `min`/`max` bound the
 * range; `step` is the increment (default 1). */
export const NumberVariableV2Schema = NumberVariableV1Schema.extend({
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
});

export type NumberVariableV2 = z.infer<typeof NumberVariableV2Schema>;

/**
 * Discriminated union of all variable variants as of bypp v7 — the v6 set
 * with the `number` variant upgraded to v2. Narrow with `variable.type`.
 */
export const VariableV7Schema = z.discriminatedUnion("type", [
  NumberVariableV2Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
  ImageVariableV5Schema,
  DataTableDirectLookupVariableV6Schema,
]);

export type VariableV7 = z.infer<typeof VariableV7Schema>;
