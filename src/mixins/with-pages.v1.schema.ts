import { z } from "zod";
import { PageUidSchema } from "../uid";

/**
 * Mixin: an ordered list of page UIDs that an item "owns" or composes,
 * in display order.
 *
 * The actual page definitions live in the bundle's top-level `pages[]`
 * array — this mixin only carries references.
 *
 * UIDs that don't resolve to a page in the bundle should be tolerated
 * (skipped) by readers — orphan refs can happen if the producer
 * selectively excluded pages from the export.
 */
export const WithPagesV1Schema = z.object({
  pagesOrder: z.array(PageUidSchema),
});
