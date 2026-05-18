import { z } from "zod";

/**
 * Pixel dimensions for any rasterized asset (image, video). Carried
 * alongside the URL so readers can lay out / aspect-ratio without
 * decoding the file.
 */
export const ImageDimensionsV1Schema = z.object({
  width: z.number(),
  height: z.number(),
});

export type ImageDimensionsV1 = z.infer<typeof ImageDimensionsV1Schema>;

/**
 * Mixin: a single video URL plus its dimensions.
 *
 * Producers are responsible for hosting the video. Readers fetch on
 * demand — the bypp format never embeds the binary content. `videoUrl`
 * is optional (a record without it = no video set).
 */
export const WithVideoUrlsV1Schema = z.object({
  videoUrl: z.string().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional(),
});
