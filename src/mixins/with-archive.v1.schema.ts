import { z } from "zod";

/**
 * Mixin: a single boolean flag indicating whether an item is archived.
 *
 * The bypp format only stores the flag — what "archived" implies
 * behaviorally is up to the reader (greyed out, filtered out by
 * default, accessible via a dedicated tab, etc.).
 */
export const WithArchiveV1Schema = z.object({
  isArchived: z.boolean(),
});
