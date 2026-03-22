import { z } from "zod";

export const ImageDimensionsSchema = z.object({
  width: z.number(),
  height: z.number(),
});

export type ImageDimensions = z.infer<typeof ImageDimensionsSchema>;

export const WithVideoUrlsSchema = z.object({
  videoUrl: z.string().optional(),
  videoDimensions: ImageDimensionsSchema.optional(),
});
