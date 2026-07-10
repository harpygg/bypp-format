import { z } from "zod";
import { StyleV2Schema } from "./with-style.v2.schema";

/**
 * CSS-like styling — **v3**, a superset of v2.
 *
 * v3 adds one property on top of the v2 whitelist:
 *  - `rotation` — a visual tilt of the whole item, in degrees. Like every
 *    other style property it cascades (global → widget-type → instance).
 *
 * Every v2 field is reused as-is: `StyleV2Schema` is
 * `nullable().optional()`, so it's unwrapped twice to reach the inner object
 * before extending. v3 stays a strict superset — no v2 field is redefined.
 *
 * This file MUST NOT be modified once shipped.
 */
export const StyleV3Schema = StyleV2Schema.unwrap()
  .unwrap()
  .extend({
    rotation: z.number().optional(),
  })
  .nullable()
  .optional();

export type StyleV3 = z.infer<typeof StyleV3Schema>;

/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
export const WithStyleV3Schema = z.object({
  style: StyleV3Schema,
});
