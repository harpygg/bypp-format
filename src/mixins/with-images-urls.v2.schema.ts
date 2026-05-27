import { z } from "zod";

/**
 * Mixin: pre-rendered image URLs at different sizes / crops.
 *
 * In v2, every URL is `.url()`-validated. Producers that emit a
 * non-conformant URL get caught at validation time rather than failing
 * silently in the reader.
 */
export const WithImagesUrlsV2Schema = z.object({
  originalUrl: z.string().url().optional(),
  thumbnailUrl: z.string().url().optional(),
  squareUrl: z.string().url().optional(),
  closeupUrl: z.string().url().optional(),
});
