import { T as TagUid, e as TagCategoryUid } from './data-table.v3.schema-SKJA8p4m.cjs';
import { z } from 'zod';

/**
 * Tag — v3 adds an optional `icon`.
 *
 * A tag is a label an author draws on entities, and in the tools that produce
 * them a tag is drawn as much as it is read: a sword next to "Weapon", a
 * crown next to "Noble". The format carried the word and dropped the picture,
 * so a bundle round-tripping through `.bypp` came back as a wall of text and
 * the author re-picked every icon by hand.
 *
 * Same convention as everywhere else in the format: a bare icon NAME, never
 * a URL or a file, loose `string` rather than an enum. It is a slug each
 * consumer maps onto whatever icon library it draws with — the format ships
 * no artwork and endorses none. See `../mixins/with-icon.v1.schema` for the
 * reasoning, and `../icons` for a reference registry of tabletop slugs a
 * reader is likely to recognise.
 *
 * Unlike a variable's `icon`, this one carries no grouping meaning — tags are
 * already grouped, by `categoryUid`. It is a decoration on the label.
 */
declare const TagV3Schema: z.ZodObject<{
    uid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
} & {
    name: z.ZodString;
} & {
    categoryUid: z.ZodOptional<z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>>;
    useAsFolder: z.ZodDefault<z.ZodBoolean>;
} & {
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
    useAsFolder: boolean;
    icon?: string | undefined;
    categoryUid?: TagCategoryUid | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
    icon?: string | undefined;
    categoryUid?: TagCategoryUid | undefined;
    useAsFolder?: boolean | undefined;
}>;
type TagV3 = z.infer<typeof TagV3Schema>;

/**
 * A tag category — v2 adds an optional `icon`, for the same reason
 * `tag.v3.schema` does: the name of a bucket is half of how it reads, and a
 * category heading loses more than a tag does when its icon is dropped.
 *
 * A bare icon NAME, loose `string` — a slug the consumer maps onto its own
 * icon library. See `../mixins/with-icon.v1.schema` and the reference registry
 * in `../icons`.
 */
declare const TagCategoryV2Schema: z.ZodObject<{
    uid: z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>;
} & {
    name: z.ZodString;
} & {
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagCategoryUid" | undefined;
    };
    icon?: string | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagCategoryUid" | undefined;
    };
    icon?: string | undefined;
}>;
type TagCategoryV2 = z.infer<typeof TagCategoryV2Schema>;

export { type TagV3 as T, type TagCategoryV2 as a, TagCategoryV2Schema as b, TagV3Schema as c };
