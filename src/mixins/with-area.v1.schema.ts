import { z } from "zod";

/**
 * Mixin: optional 2D size (width × height) for items laid out on a
 * canvas.
 *
 * `null` is valid and means "no explicit area" — the renderer falls back
 * to its default sizing logic. `undefined` (field absent) has the same
 * effect.
 */
export const WithAreaV1Schema = z.object({
  area: z
    .object({
      width: z.number(),
      height: z.number(),
    })
    .nullable()
    .optional(),
});
