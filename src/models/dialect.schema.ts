import { z } from "zod";
import { DialectUidSchema, EntityUidSchema } from "../uid";

export const DialectFontSchema = z.object({
  fontFamily: z.string(),
  fontUrl: z.string(),
});

export type DialectFont = z.infer<typeof DialectFontSchema>;

export const DialectSchema = z.object({
  uid: DialectUidSchema,
  name: z.string(),
  font: DialectFontSchema,
  order: z.number().optional(),
  spokenByEntitiesUids: z.array(EntityUidSchema),
});

export type Dialect = z.infer<typeof DialectSchema>;
