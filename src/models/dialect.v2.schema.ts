import { z } from "zod";
import { DialectUidSchema, EntityUidSchema } from "../uid";

/**
 * Dialect font — v2 changes: `fontUrl` is `.url()`-validated.
 */
export const DialectFontV2Schema = z.object({
  fontFamily: z.string(),
  fontUrl: z.string().url(),
});

export type DialectFontV2 = z.infer<typeof DialectFontV2Schema>;

/**
 * Dialect — v2 changes: `spokenByEntitiesUids` defaults to `[]`.
 */
export const DialectV2Schema = z.object({
  uid: DialectUidSchema,
  name: z.string(),
  font: DialectFontV2Schema,
  order: z.number().optional(),
  spokenByEntitiesUids: z.array(EntityUidSchema).default([]),
});

export type DialectV2 = z.infer<typeof DialectV2Schema>;
