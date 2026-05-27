import { z } from "zod";
import { ImageDimensionsV1Schema } from "./with-video-urls.v1.schema";

/**
 * Mixin: a single video URL plus its dimensions.
 *
 * In v2, `videoUrl` is `.url()`-validated. `ImageDimensionsV1Schema` is
 * re-exported unchanged from v1 — it's a leaf shape that didn't need a
 * fork.
 */
export const WithVideoUrlsV2Schema = z.object({
  videoUrl: z.string().url().optional(),
  videoDimensions: ImageDimensionsV1Schema.optional(),
});
