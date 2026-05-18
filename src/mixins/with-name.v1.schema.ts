import { z } from "zod";

/**
 * Mixin: carries a single mandatory display name string.
 *
 * The name is what users see in lists, headings, and references. Always
 * a plain mono-lingual string — for locale-keyed content, use
 * `WithLocalizedNameV2Schema` / `TranslatableText` instead.
 */
export const WithNameV1Schema = z.object({
  name: z.string(),
});
