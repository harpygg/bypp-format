import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { TagCategoryUidSchema, TagUidSchema } from "../uid";

/**
 * Tag — v2 changes:
 *  - `categoryUid` is `.optional()` instead of `.nullable()` (omit the
 *    field when the tag stands alone, instead of writing `null`).
 *  - `useAsFolder` defaults to `false`.
 */
export const TagV2Schema = z
  .object({ uid: TagUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    categoryUid: TagCategoryUidSchema.optional(),
    useAsFolder: z.boolean().default(false),
  });

export type TagV2 = z.infer<typeof TagV2Schema>;
