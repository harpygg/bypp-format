import { z } from "zod";

/**
 * Mixin: optional 2D position on a canvas, in pixels from the top-left
 * corner of the parent container.
 *
 * `null` / `undefined` means "no fixed position" — the renderer places
 * the item via its layout logic instead.
 */
export const WithPositionV1Schema = z.object({
  position: z
    .object({
      left: z.number(),
      top: z.number(),
    })
    .nullable()
    .optional(),
});
