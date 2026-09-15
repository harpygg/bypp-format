import { z } from "zod";
import { StyleV4Schema } from "./with-style.v4.schema";

/**
 * CSS-like styling — **v5**, a superset of v4.
 *
 * v5 adds what an item needs once it sits in a flow of text rather than in a
 * box of its own:
 *  - the `margin*` group — the air an element keeps around itself, in em, and
 *  - `backgroundColor` — a plain colour behind it, next to the `background`
 *    image v2 already carried, and
 *  - `textDecoration` — a CSS `text-decoration` value, `none` included, which
 *    is what turns off an underline a theme draws, and
 *  - `backgroundRepeat` — whether that background image tiles. A surface wider
 *    than a widget can wear a pattern rather than a picture, and the two are
 *    drawn differently: tiled at its own size, or laid once to cover.
 *
 * Every v4 field is reused as-is: `StyleV4Schema` is `nullable().optional()`,
 * so it's unwrapped twice to reach the inner object before extending. v5 stays
 * a strict superset — no v4 field is redefined.
 *
 * This file MUST NOT be modified once shipped.
 */
export const StyleV5Schema = StyleV4Schema.unwrap()
  .unwrap()
  .extend({
    marginTop: z.number().optional(),
    marginRight: z.number().optional(),
    marginBottom: z.number().optional(),
    marginLeft: z.number().optional(),
    backgroundColor: z.string().optional(),
    textDecoration: z.string().optional(),
    backgroundRepeat: z.boolean().optional(),
  })
  .nullable()
  .optional();

export type StyleV5 = z.infer<typeof StyleV5Schema>;

/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
export const WithStyleV5Schema = z.object({
  style: StyleV5Schema,
});
