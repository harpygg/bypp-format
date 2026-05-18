import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { ChunkUidSchema, EntityUidSchema, PageUidSchema } from "../uid";

/**
 * A "standard" page — a named document made of an ordered list of chunks
 * (text blocks, galleries, random tables…).
 *
 * The actual chunk content lives in the bundle's top-level `chunks[]`
 * array. `chunksOrder` references them by uid in display order.
 *
 * Pages are referenced from elsewhere in the bundle by uid (e.g. via
 * `WithPagesV1Schema`) — they don't carry their own ownership info.
 */
export const PageStandardV1Schema = z
  .object({ uid: PageUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    type: z.literal("standard"),
    chunksOrder: z.array(ChunkUidSchema),
  });

export type PageStandardV1 = z.infer<typeof PageStandardV1Schema>;

/**
 * An "entity" page — a virtual page that's actually a window onto an
 * entity. When the reader renders it, it shows the target entity's sheet
 * / dataset view instead of standalone chunks.
 *
 * Used to embed an entity (a character, a place, …) into a navigable
 * page hierarchy without duplicating its content.
 */
export const PageEntityV1Schema = z.object({
  uid: PageUidSchema,
  type: z.literal("entity"),
  entityUid: EntityUidSchema,
});

export type PageEntityV1 = z.infer<typeof PageEntityV1Schema>;

/**
 * Discriminated union of all page types. Readers narrow with `page.type`
 * to access the per-type fields.
 */
export const PageV1Schema = z.discriminatedUnion("type", [
  PageStandardV1Schema,
  PageEntityV1Schema,
]);

export type PageV1 = z.infer<typeof PageV1Schema>;
