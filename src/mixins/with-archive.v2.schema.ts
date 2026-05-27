import { z } from "zod";

/**
 * Mixin: archive flag. In v2, `isArchived` defaults to `false` — most
 * items aren't archived, so the producer can omit the field entirely.
 * Readers always see a concrete boolean post-parse.
 */
export const WithArchiveV2Schema = z.object({
  isArchived: z.boolean().default(false),
});
