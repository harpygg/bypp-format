import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { TagCategoryUidSchema, TagUidSchema } from "../uid";

/**
 * A tag — a free-form label that can be attached to entities (and other
 * things in the future) to classify them. Tags are the primary mechanism
 * to filter / group / target content in a bypp bundle.
 *
 * Fields:
 *  - `categoryUid` — optional grouping. When set, this tag belongs to a
 *    tag category (defined in the bundle's `tagCategories[]`). `null`
 *    means the tag stands alone, ungrouped.
 *  - `useAsFolder` — UI hint. When `true`, readers should treat this tag
 *    like a virtual folder in browsers (entities tagged with it appear
 *    nested under it). When `false`, it's a regular flat label.
 */
export const TagV1Schema = z
  .object({ uid: TagUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    categoryUid: TagCategoryUidSchema.nullable(),
    useAsFolder: z.boolean(),
  });

export type TagV1 = z.infer<typeof TagV1Schema>;
