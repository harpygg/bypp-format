import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import { ChunkUidSchema, EntityUidSchema, PageUidSchema } from "../uid";

export const PageStandardSchema = z
  .object({ uid: PageUidSchema })
  .merge(WithNameSchema)
  .extend({
    type: z.literal("standard"),
    chunksOrder: z.array(ChunkUidSchema),
  });

export type PageStandard = z.infer<typeof PageStandardSchema>;

export const PageEntitySchema = z.object({
  uid: PageUidSchema,
  type: z.literal("entity"),
  entityUid: EntityUidSchema,
});

export type PageEntity = z.infer<typeof PageEntitySchema>;

export const PageSchema = z.discriminatedUnion("type", [
  PageStandardSchema,
  PageEntitySchema,
]);

export type Page = z.infer<typeof PageSchema>;
