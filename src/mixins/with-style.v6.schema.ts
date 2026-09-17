import { z } from "zod";
import { StyleV5Schema } from "./with-style.v5.schema";

/**
 * One value per edge, written the way CSS writes a shorthand: a single number
 * for all four sides, two for vertical then horizontal, four clockwise from
 * the top.
 *
 * An array rather than a tuple union, deliberately. A producer that stores its
 * styles in a document database gets the tuple widened to a plain array on the
 * way back out, and a format that insisted on the tuple would make every such
 * reader cast. The length is checked instead, where the check can also say
 * what the lengths mean.
 *
 * A side is a plain `z.number()` with no floor: like the wheel's `radius`, the
 * format stays a permissive reader hint and leaves the clamping to the
 * producer's own model. A negative margin is a real CSS gesture, and a
 * document that already carried one in `marginTop` must still migrate up.
 */
const SideV6Schema = z.number();

export const SidesV6Schema = z.union([
  SideV6Schema,
  z.array(SideV6Schema).refine((sides) => sides.length === 2 || sides.length === 4, {
    message: "two values for vertical and horizontal, or four clockwise",
  }),
]);

export type SidesV6 = z.infer<typeof SidesV6Schema>;

/**
 * CSS-like styling — **v6**, a superset of v5.
 *
 * v6 lets a spacing differ per side, in one field rather than four:
 *  - `margin` — the air an element keeps around itself,
 *  - `padding` — the air it keeps inside, and
 *  - `borderWidth` — WIDENED from a single number to the same notation.
 *
 * What tells one block of content from another is very often WHICH edge its
 * line is on: a bar down the left side is a quote, a thin box is a table, and
 * a single `borderWidth` cannot say both — it draws all four edges or none.
 * Spacing has the same need, and `padding: [0, 0, 0, 1]` is how anyone who has
 * written CSS already expects to say it.
 *
 * Nothing is removed. The per-side fields v1 and v5 introduced
 * (`paddingTop…`, `marginTop…`) stay exactly as they were — older bundles
 * carry them, and this file could not drop them without breaking those. They
 * are what a v6 document falls back on:
 *
 *   **`margin` wins when present; the four `margin*` fields are read only when
 *   it is absent.** Likewise `padding`. A document produced by this version's
 *   migrator never carries both for the same box.
 *
 * `borderWidth` is widened, not redefined: every value a v5 style could hold
 * is still valid and still means the same thing (a plain number is "the same
 * width on all four sides"), so every document written before v6 parses
 * unchanged. The widening is what lets a border say which edge it is on,
 * since v5 had no `borderWidth*` per side to fall back on.
 *
 * Every v5 field is reused as-is: `StyleV5Schema` is `nullable().optional()`,
 * so it's unwrapped twice to reach the inner object before extending.
 *
 * This file MUST NOT be modified once shipped.
 */
export const StyleV6Schema = StyleV5Schema.unwrap()
  .unwrap()
  .extend({
    margin: SidesV6Schema.optional(),
    padding: SidesV6Schema.optional(),
    borderWidth: SidesV6Schema.optional(),
  })
  .nullable()
  .optional();

export type StyleV6 = z.infer<typeof StyleV6Schema>;

/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
export const WithStyleV6Schema = z.object({
  style: StyleV6Schema,
});
