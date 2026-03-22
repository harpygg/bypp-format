import { z } from "zod";

export const WithNameSchema = z.object({
  name: z.string(),
});
