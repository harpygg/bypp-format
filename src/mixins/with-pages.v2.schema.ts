import { z } from "zod";
import { PageUidSchema } from "../uid";

/**
 * Mixin: ordered list of page UIDs. In v2, defaults to `[]` so producers
 * can omit the field on items that own no pages.
 */
export const WithPagesV2Schema = z.object({
  pagesOrder: z.array(PageUidSchema).default([]),
});
