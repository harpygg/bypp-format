import { z } from 'zod';
import { C as ChunkUid, E as EntityUid, A as AssetUid, R as RandomTableUid } from './variable.v7.schema-ClZin-IT.cjs';

/**
 * Chunk — v11 changes: a text chunk may carry `wrappedInEntityUid`, the
 * entity whose data a reader should resolve the block against.
 *
 * A text block can embed variable references (see the `variables` category).
 * By default those resolve against whichever entity owns the page the block
 * sits on. `wrappedInEntityUid` overrides that: the block resolves against the
 * named entity instead, and a reader is expected to surface which entity the
 * block belongs to (Harpy frames it with the entity's avatar).
 *
 * This REPLACES the `textProxy` variant, which modelled the same idea as a
 * SECOND chunk pointing at the one holding the text. That indirection carried
 * no information the pointer target didn't already have, and let the two
 * documents drift apart. The variant is gone from v11: `v10-to-v11` folds
 * every proxy into its target, so a v11 document can never contain one.
 * Readers pinned to v10 or earlier still need to handle it.
 *
 * Every other variant is re-imported unchanged from v2.
 */
declare const ChunkTextV11Schema: z.ZodObject<{
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
    wrappedInEntityUid?: EntityUid | undefined;
}>;
type ChunkTextV11 = z.infer<typeof ChunkTextV11Schema>;
declare const ChunkV11Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
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
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
    folded?: boolean | undefined;
}>]>;
type ChunkV11 = z.infer<typeof ChunkV11Schema>;

export { type ChunkV11 as C, type ChunkTextV11 as a, ChunkV11Schema as b, ChunkTextV11Schema as c };
