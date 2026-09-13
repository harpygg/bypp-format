import { z } from "zod";
import { StyleV3Schema } from "./with-style.v3.schema";

/**
 * CSS-like styling — **v4**, a superset of v3.
 *
 * v4 adds the two emphasis properties on top of the v3 whitelist:
 *  - `fontWeight` — a CSS `font-weight` value (`bold`, `600`, …), and
 *  - `fontStyle` — a CSS `font-style` value (`italic`, `normal`, …).
 *
 * Both are free CSS strings rather than an enum, like `borderStyle` before
 * them, and both accept `inherit`: a level that is not emphasised must keep
 * taking its weight from whatever surrounds it instead of forcing `normal`
 * over a theme that wanted otherwise.
 *
 * Every v3 field is reused as-is: `StyleV3Schema` is `nullable().optional()`,
 * so it's unwrapped twice to reach the inner object before extending. v4
 * stays a strict superset — no v3 field is redefined.
 *
 * This file MUST NOT be modified once shipped.
 */
export const StyleV4Schema = StyleV3Schema.unwrap()
  .unwrap()
  .extend({
    fontWeight: z.string().optional(),
    fontStyle: z.string().optional(),
  })
  .nullable()
  .optional();

export type StyleV4 = z.infer<typeof StyleV4Schema>;

/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
export const WithStyleV4Schema = z.object({
  style: StyleV4Schema,
});
