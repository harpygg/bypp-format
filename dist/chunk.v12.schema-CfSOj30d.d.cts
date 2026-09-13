import { C as ChunkUid, E as EntityUid, A as AssetUid, R as RandomTableUid } from './data-table.v3.schema-SKJA8p4m.cjs';
import { z } from 'zod';

/**
 * Chunk — v12 adds a **markdown** block, as introduced in bypp format v21.
 *
 * The text block holds HTML, which is what a rich-text editor produces and
 * what a reader renders as is. Markdown is the other way people write: a
 * table typed in three lines, a heading typed with a hash, text a person
 * keeps in Obsidian or in a repository and pastes across whole. Converting it
 * to HTML on the way in loses the source — the author can no longer edit what
 * they wrote — so the format carries the markdown itself and leaves the
 * rendering to the reader.
 *
 * `content` is the markdown source, exactly as written. A reader that has no
 * markdown renderer still has the words: unrendered markdown reads.
 *
 * It is a SECOND block rather than a flag on the text one: the two carry
 * different languages, and a block that could be either would have every
 * consumer guess which.
 *
 * This file MUST NOT be modified once shipped.
 */
declare const ChunkMarkdownV12Schema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"markdown">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "markdown";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    type: "markdown";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}>;
type ChunkMarkdownV12 = z.infer<typeof ChunkMarkdownV12Schema>;
declare const ChunkV12Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"text">;
    content: z.ZodString;
    mentionedEntitiesUids: z.ZodOptional<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
    wrappedInEntityUid: z.ZodOptional<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
    wrappedInEntityUid?: EntityUid | undefined;
}, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
    wrappedInEntityUid?: EntityUid | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"gallery">;
    assetUids: z.ZodDefault<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    assetUids: AssetUid[];
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    assetUids?: AssetUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"random">;
    randomTableUid: z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>;
    folded: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "random";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    randomTableUid: string & {
        readonly __bypp_flavor?: "RandomTableUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    folded?: boolean | undefined;
}, {
    type: "random";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    randomTableUid: string & {
        readonly __bypp_flavor?: "RandomTableUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    folded?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"markdown">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "markdown";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    type: "markdown";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 2 | 1 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}>]>;
type ChunkV12 = z.infer<typeof ChunkV12Schema>;

export { type ChunkV12 as C, type ChunkMarkdownV12 as a, ChunkMarkdownV12Schema as b, ChunkV12Schema as c };
