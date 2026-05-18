import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { TagCategoryUidSchema } from "../uid";

/**
 * A tag category — a named bucket that groups related tags together (e.g.
 * "Races", "Classes", "Locations"). Categories themselves carry no data
 * beyond their name; the grouping happens via tags pointing back through
 * `tag.categoryUid`.
 */
export const TagCategoryV1Schema = z
  .object({ uid: TagCategoryUidSchema })
  .merge(WithNameV1Schema);

export type TagCategoryV1 = z.infer<typeof TagCategoryV1Schema>;
