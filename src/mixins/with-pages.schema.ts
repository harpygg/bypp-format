import { z } from "zod";
import { PageUidSchema } from "../uid";

export const WithPagesSchema = z.object({
  pagesOrder: z.array(PageUidSchema),
});
