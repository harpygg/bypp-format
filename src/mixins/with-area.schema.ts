import { z } from "zod";

export const WithAreaSchema = z.object({
  area: z
    .object({
      width: z.number(),
      height: z.number(),
    })
    .nullable()
    .optional(),
});
