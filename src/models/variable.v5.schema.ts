/**
 * Variable schema as **introduced in bypp v5** — extends v2 with one new
 * variant: `image`.
 *
 * An `image` variable carries no primitive value of its own; it proxies
 * one of the bound entity's images, which an `entityImage` widget then
 * renders (picking the rendition via its `formatSlug`). It has no fields
 * beyond the shared variable base — the discriminator alone is the data.
 *
 * The v2 variants (the 6 v1 ones plus the two data-table-aware ones) are
 * unchanged and re-imported directly. Only the new variant and the union
 * are defined here.
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
  VariableBaseV1Schema,
} from "./variable.v1.schema";
import {
  DataTableLookupVariableV2Schema,
  DataTableRefVariableV2Schema,
} from "./variable.v2.schema";

/**
 * A variable that proxies one of the bound entity's images. No value of
 * its own — a bare `{ type: "image", … }` over the variable base.
 */
export const ImageVariableV5Schema = VariableBaseV1Schema.extend({
  type: z.literal("image"),
});

export type ImageVariableV5 = z.infer<typeof ImageVariableV5Schema>;

/**
 * Discriminated union of all variable variants as of bypp v5 — the v2 set
 * plus `image`. Narrow with `variable.type`.
 */
export const VariableV5Schema = z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
  ImageVariableV5Schema,
]);

export type VariableV5 = z.infer<typeof VariableV5Schema>;
