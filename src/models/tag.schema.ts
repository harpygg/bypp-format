import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import { TagCategoryUidSchema, TagUidSchema } from "../uid";

export const TagSchema = z
  .object({ uid: TagUidSchema })
  .merge(WithNameSchema)
  .extend({
    categoryUid: TagCategoryUidSchema.nullable(),
    useAsFolder: z.boolean(),
  });

export type Tag = z.infer<typeof TagSchema>;
