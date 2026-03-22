import { z } from "zod";

export const WithImagesUrlsSchema = z.object({
  originalUrl: z.string().optional(),
  thumbnailUrl: z.string().optional(),
  squareUrl: z.string().optional(),
  closeupUrl: z.string().optional(),
});
