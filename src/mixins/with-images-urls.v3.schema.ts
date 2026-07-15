import { z } from "zod";
import { WithImagesUrlsV2Schema } from "./with-images-urls.v2.schema";
import { ImageDimensionsV1Schema } from "./with-video-urls.v1.schema";

/**
 * Mixin: pre-rendered image URLs + the original image's pixel dimensions.
 *
 * v3 keeps every v2 URL field and ADDS optional `dimensions` (the natural
 * width/height of the original image). Readers use it to reserve the right
 * aspect-ratio before the image loads (a sheet, for instance, positions its
 * widgets inside that box). It's optional: legacy producers that no longer
 * have the dimensions omit it, and readers fall back to measuring the loaded
 * image.
 */
export const WithImagesUrlsV3Schema = WithImagesUrlsV2Schema.extend({
  dimensions: ImageDimensionsV1Schema.optional(),
});
