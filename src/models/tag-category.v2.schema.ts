import { z } from "zod";
import { WithIconV1Schema } from "../mixins/with-icon.v1.schema";
import { TagCategoryV1Schema } from "./tag-category.v1.schema";

/**
 * A tag category — v2 adds an optional `icon`, for the same reason
 * `tag.v3.schema` does: the name of a bucket is half of how it reads, and a
 * category heading loses more than a tag does when its icon is dropped.
 *
 * A bare icon NAME, loose `string` — a slug the consumer maps onto its own
 * icon library. See `../mixins/with-icon.v1.schema` and the reference registry
 * in `../icons`.
 */
export const TagCategoryV2Schema = TagCategoryV1Schema.merge(WithIconV1Schema);

export type TagCategoryV2 = z.infer<typeof TagCategoryV2Schema>;
