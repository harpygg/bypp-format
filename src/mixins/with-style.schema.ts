import { z } from "zod";

export const StyleSchema = z
  .object({
    justifyContent: z.string().optional(),
    alignItems: z.string().optional(),
    flexDirection: z.string().optional(),
    lineHeight: z.number().optional(),
    fontFamilyId: z.string().optional(),
    fontScale: z.number().optional(),
    color: z.string().optional(),
    paddingTop: z.number().optional(),
    paddingRight: z.number().optional(),
    paddingBottom: z.number().optional(),
    paddingLeft: z.number().optional(),
  })
  .nullable()
  .optional();

export const WithStyleSchema = z.object({
  style: StyleSchema,
});
