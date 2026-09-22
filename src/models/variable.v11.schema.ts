/**
 * Variable schema as **introduced in bypp v27** — the v10 set with the two
 * strings a reader shows as a variable's words made locale-keyed.
 *
 * Until v27 a variable's display `label` and a choice option's `label` were
 * one string each. Everything around them was already locale-keyed — a
 * data-table's name, a column's label, a translatable cell, an entity action's
 * label — so a producer that authored "Strength" / "Force" or "Wizard" /
 * "Magicien" had to keep one language on export and drop the others.
 *
 *  - `label` on every variant (`VariableLabelV27Schema`) is a
 *    `TranslatableText`. `name` stays a plain string: it is the internal
 *    identifier formulas and structural views use, not a display text.
 *  - `ChoiceOptionV27Schema` is `ChoiceOptionV1Schema` with `label` as a
 *    `TranslatableText`. The same option shape is what a data-table `choice`
 *    column carries (see `data-table.v4.schema`): one vocabulary.
 *
 * Every variant is otherwise re-used unchanged from v8/v9/v10.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TranslatableTextV2Schema } from "../mixins/translatable-text.v2.schema";
import { ChoiceOptionV1Schema } from "./variable.v1.schema";
import {
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
  DataTableLookupVariableV8Schema,
  DataTableRefVariableV8Schema,
  FormulaVariableV8Schema,
  ImageVariableV8Schema,
  NumberVariableV8Schema,
  TextVariableV8Schema,
} from "./variable.v8.schema";
import {
  EntityLookupVariableV9Schema,
  EntityRefVariableV9Schema,
} from "./variable.v9.schema";
import { RollVariableV10Schema } from "./variable.v10.schema";

/** The display label every variant carries; readers fall back to `name`. */
export const VariableLabelV27Schema = z.object({
  label: TranslatableTextV2Schema.optional(),
});

/**
 * A single option of a `choice` variable or column, `label` locale-keyed
 * (`{ en: "Wizard", fr: "Magicien" }`). A reader picks the locale it shows the
 * way it does for any other `TranslatableText`.
 */
export const ChoiceOptionV27Schema = ChoiceOptionV1Schema.extend({
  label: TranslatableTextV2Schema,
});

export type ChoiceOptionV27 = z.infer<typeof ChoiceOptionV27Schema>;

export const NumberVariableV11Schema = NumberVariableV8Schema.merge(
  VariableLabelV27Schema,
);
export const TextVariableV11Schema = TextVariableV8Schema.merge(
  VariableLabelV27Schema,
);
export const BooleanVariableV11Schema = BooleanVariableV8Schema.merge(
  VariableLabelV27Schema,
);
export const ChoiceVariableV11Schema = ChoiceVariableV8Schema.merge(
  VariableLabelV27Schema,
).extend({
  options: z.array(ChoiceOptionV27Schema).optional(),
});
export const FormulaVariableV11Schema = FormulaVariableV8Schema.merge(
  VariableLabelV27Schema,
);
export const RollVariableV11Schema = RollVariableV10Schema.merge(
  VariableLabelV27Schema,
);
export const DataTableRefVariableV11Schema = DataTableRefVariableV8Schema.merge(
  VariableLabelV27Schema,
);
export const DataTableLookupVariableV11Schema =
  DataTableLookupVariableV8Schema.merge(VariableLabelV27Schema);
export const ImageVariableV11Schema = ImageVariableV8Schema.merge(
  VariableLabelV27Schema,
);
export const DataTableDirectLookupVariableV11Schema =
  DataTableDirectLookupVariableV8Schema.merge(VariableLabelV27Schema);
export const EntityRefVariableV11Schema = EntityRefVariableV9Schema.merge(
  VariableLabelV27Schema,
);
export const EntityLookupVariableV11Schema = EntityLookupVariableV9Schema.merge(
  VariableLabelV27Schema,
);

export type NumberVariableV11 = z.infer<typeof NumberVariableV11Schema>;
export type TextVariableV11 = z.infer<typeof TextVariableV11Schema>;
export type BooleanVariableV11 = z.infer<typeof BooleanVariableV11Schema>;
export type ChoiceVariableV11 = z.infer<typeof ChoiceVariableV11Schema>;
export type FormulaVariableV11 = z.infer<typeof FormulaVariableV11Schema>;
export type RollVariableV11 = z.infer<typeof RollVariableV11Schema>;
export type DataTableRefVariableV11 = z.infer<
  typeof DataTableRefVariableV11Schema
>;
export type DataTableLookupVariableV11 = z.infer<
  typeof DataTableLookupVariableV11Schema
>;
export type ImageVariableV11 = z.infer<typeof ImageVariableV11Schema>;
export type DataTableDirectLookupVariableV11 = z.infer<
  typeof DataTableDirectLookupVariableV11Schema
>;
export type EntityRefVariableV11 = z.infer<typeof EntityRefVariableV11Schema>;
export type EntityLookupVariableV11 = z.infer<
  typeof EntityLookupVariableV11Schema
>;

/**
 * Discriminated union of all variable variants as of bypp v27. Narrow with
 * `variable.type`.
 */
export const VariableV11Schema = z.discriminatedUnion("type", [
  NumberVariableV11Schema,
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
]);

export type VariableV11 = z.infer<typeof VariableV11Schema>;
