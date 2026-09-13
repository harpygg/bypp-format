import { e as TagCategoryUid, T as TagUid } from './data-table.v3.schema-SKJA8p4m.js';
import { z } from 'zod';

/**
 * A tag category — a named bucket that groups related tags together (e.g.
 * "Races", "Classes", "Locations"). Categories themselves carry no data
 * beyond their name; the grouping happens via tags pointing back through
 * `tag.categoryUid`.
 */
declare const TagCategoryV1Schema: z.ZodObject<{
    uid: z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>;
} & {
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagCategoryUid" | undefined;
    };
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagCategoryUid" | undefined;
    };
}>;
type TagCategoryV1 = z.infer<typeof TagCategoryV1Schema>;

/**
 * Tag — v2 changes:
 *  - `categoryUid` is `.optional()` instead of `.nullable()` (omit the
 *    field when the tag stands alone, instead of writing `null`).
 *  - `useAsFolder` defaults to `false`.
 */
declare const TagV2Schema: z.ZodObject<{
    uid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
} & {
    name: z.ZodString;
} & {
    categoryUid: z.ZodOptional<z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>>;
    useAsFolder: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
    useAsFolder: boolean;
    categoryUid?: TagCategoryUid | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
    categoryUid?: TagCategoryUid | undefined;
    useAsFolder?: boolean | undefined;
}>;
type TagV2 = z.infer<typeof TagV2Schema>;

export { type TagCategoryV1 as T, TagCategoryV1Schema as a, type TagV2 as b, TagV2Schema as c };
