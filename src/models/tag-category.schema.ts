import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import { TagCategoryUidSchema } from "../uid";

export const TagCategorySchema = z
  .object({ uid: TagCategoryUidSchema })
  .merge(WithNameSchema);

export type TagCategory = z.infer<typeof TagCategorySchema>;
