import { z } from "zod";

/**
 * Mixin: pre-rendered image URLs at different sizes / crops.
 *
 * The producer is responsible for hosting these URLs. Readers fetch them
 * as-is — the bypp format itself doesn't carry pixel data.
 *
 * - `originalUrl` — full-resolution source.
 * - `thumbnailUrl` — small preview.
 * - `squareUrl` — cropped square.
 * - `closeupUrl` — portrait crop.
 *
 * All four are optional and independent.
 */
export const WithImagesUrlsV1Schema = z.object({
  originalUrl: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  squareUrl: z.string().optional(),
  closeupUrl: z.string().optional(),
});
