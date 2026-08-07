import { z } from "zod";
import { DialectUidSchema, EntityUidSchema } from "../uid";

/**
 * Dialect — v3 changes: the `font` object is gone, replaced by a bare
 * `fontFamily` name.
 *
 * v2 carried `{ fontFamily, fontUrl }`, and the URL is what made the format
 * non-neutral. No producer ever stored it: it was synthesized at export time
 * from the family name and pointed at that producer's own asset server, so
 * every third-party reader fetched its typefaces from a single vendor. No
 * reader consumed it either — they matched on the family name and ignored the
 * URL. It carried all of the cost and none of the benefit.
 *
 * It also shipped a redistribution claim the format has no business making.
 * Fantasy scripts are commonly derived from copyrighted alphabets, and a
 * `.bypp` sold by one publisher would have been serving another party's font
 * file from a third party's servers.
 *
 * What remains is a **name, not a file**. Naming a typeface redistributes
 * nothing, it survives the round-trip unchanged, and a reader is free to map
 * it onto whatever it has licensed — or to render the dialect in its own font.
 *
 * `fontFamily` is optional and loosely typed on purpose: a dialect is "a
 * language these entities speak", the typeface is decoration, and a producer
 * with no opinion on it should not have to invent one.
 */
export const DialectV3Schema = z.object({
  uid: DialectUidSchema,
  name: z.string(),
  fontFamily: z.string().optional(),
  order: z.number().optional(),
  spokenByEntitiesUids: z.array(EntityUidSchema).default([]),
});

export type DialectV3 = z.infer<typeof DialectV3Schema>;
