/**
 * Variable schema as **introduced in bypp v16** — the v7 set with an
 * optional `icon` on the shared variable base.
 *
 * A dataset routinely holds more fields than fit on one screen — a d20
 * character sheet has six abilities, a dozen skills, saves, senses, gear
 * slots. Readers that lay those out need a way to say which fields belong
 * together, and until v16 the format gave them none: a `.bypp` carried the
 * fields but not the shape of the sheet they came from, so every reader
 * showed one undifferentiated list and every producer lost its grouping the
 * moment it exported.
 *
 * `icon` is that missing piece, and it is deliberately not a `category`
 * string: an icon name IS the grouping key. It names the section AND heads
 * it, so a reader has something to draw without the producer having to
 * author a label in a language the reader may not speak. See
 * `../mixins/with-icon.v1.schema` for the full reasoning.
 *
 * Every variant is re-declared by merging the icon mixin into its v7 shape;
 * nothing else changes, and the union is re-declared over the new variants.
 * Same pattern as `asset.v3.schema` merging the credit mixin at v13.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithIconV1Schema } from "../mixins/with-icon.v1.schema";
import {
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  TextVariableV1Schema,
  VariableBaseV1Schema,
} from "./variable.v1.schema";
import {
  DataTableLookupVariableV2Schema,
  DataTableRefVariableV2Schema,
} from "./variable.v2.schema";
import { ImageVariableV5Schema } from "./variable.v5.schema";
import { DataTableDirectLookupVariableV6Schema } from "./variable.v6.schema";
import { NumberVariableV2Schema } from "./variable.v7.schema";

export const VariableBaseV8Schema =
  VariableBaseV1Schema.merge(WithIconV1Schema);

export type VariableBaseV8 = z.infer<typeof VariableBaseV8Schema>;

export const NumberVariableV8Schema =
  NumberVariableV2Schema.merge(WithIconV1Schema);

export type NumberVariableV8 = z.infer<typeof NumberVariableV8Schema>;

export const TextVariableV8Schema =
  TextVariableV1Schema.merge(WithIconV1Schema);

export type TextVariableV8 = z.infer<typeof TextVariableV8Schema>;

export const BooleanVariableV8Schema =
  BooleanVariableV1Schema.merge(WithIconV1Schema);

export type BooleanVariableV8 = z.infer<typeof BooleanVariableV8Schema>;

export const ChoiceVariableV8Schema =
  ChoiceVariableV1Schema.merge(WithIconV1Schema);

export type ChoiceVariableV8 = z.infer<typeof ChoiceVariableV8Schema>;

export const FormulaVariableV8Schema =
  FormulaVariableV1Schema.merge(WithIconV1Schema);

export type FormulaVariableV8 = z.infer<typeof FormulaVariableV8Schema>;

export const RollVariableV8Schema =
  RollVariableV1Schema.merge(WithIconV1Schema);

export type RollVariableV8 = z.infer<typeof RollVariableV8Schema>;

export const DataTableRefVariableV8Schema =
  DataTableRefVariableV2Schema.merge(WithIconV1Schema);

export type DataTableRefVariableV8 = z.infer<
  typeof DataTableRefVariableV8Schema
>;

export const DataTableLookupVariableV8Schema =
  DataTableLookupVariableV2Schema.merge(WithIconV1Schema);

export type DataTableLookupVariableV8 = z.infer<
  typeof DataTableLookupVariableV8Schema
>;

export const ImageVariableV8Schema =
  ImageVariableV5Schema.merge(WithIconV1Schema);

export type ImageVariableV8 = z.infer<typeof ImageVariableV8Schema>;

export const DataTableDirectLookupVariableV8Schema =
  DataTableDirectLookupVariableV6Schema.merge(WithIconV1Schema);

export type DataTableDirectLookupVariableV8 = z.infer<
  typeof DataTableDirectLookupVariableV8Schema
>;

/**
 * Discriminated union of all variable variants as of bypp v16 — the v7 set,
 * every variant carrying the optional `icon`. Narrow with `variable.type`.
 */
export const VariableV8Schema = z.discriminatedUnion("type", [
  NumberVariableV8Schema,
  TextVariableV8Schema,
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  FormulaVariableV8Schema,
  RollVariableV8Schema,
  DataTableRefVariableV8Schema,
  DataTableLookupVariableV8Schema,
  ImageVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
]);

export type VariableV8 = z.infer<typeof VariableV8Schema>;
