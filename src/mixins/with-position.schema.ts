import { z } from "zod";

export const WithPositionSchema = z.object({
  position: z
    .object({
      left: z.number(),
      top: z.number(),
    })
    .nullable()
    .optional(),
});
