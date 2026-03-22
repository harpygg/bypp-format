import { z } from "zod";

export const WithArchiveSchema = z.object({
  isArchived: z.boolean(),
});
