import { z } from "zod";
import { RandomTableRowUidSchema, RandomTableUidSchema } from "../uid";

/**
 * Random table row — v2 changes: `range` defaults to `1` (uniform weight).
 */
export const RandomTableRowV2Schema = z.object({
  uid: RandomTableRowUidSchema,
  range: z.number().default(1),
  content: z.string(),
  randomTableUid: RandomTableUidSchema.optional(),
});

export type RandomTableRowV2 = z.infer<typeof RandomTableRowV2Schema>;

export const RandomTableV2Schema = z.object({
  uid: RandomTableUidSchema,
  title: z.string(),
  rows: z.array(RandomTableRowV2Schema).default([]),
});

export type RandomTableV2 = z.infer<typeof RandomTableV2Schema>;
