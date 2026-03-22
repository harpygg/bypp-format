import { z } from "zod";
import { RandomTableRowUidSchema, RandomTableUidSchema } from "../uid";

export const RandomTableRowSchema = z.object({
  uid: RandomTableRowUidSchema,
  range: z.number(),
  content: z.string(),
  randomTableUid: RandomTableUidSchema.optional(),
});

export type RandomTableRow = z.infer<typeof RandomTableRowSchema>;

export const RandomTableSchema = z.object({
  uid: RandomTableUidSchema,
  title: z.string(),
  rows: z.array(RandomTableRowSchema),
});

export type RandomTable = z.infer<typeof RandomTableSchema>;
