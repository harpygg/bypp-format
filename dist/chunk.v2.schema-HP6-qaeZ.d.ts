import { z } from 'zod';
import { C as ChunkUid, A as AssetUid, R as RandomTableUid, E as EntityUid } from './variable.v7.schema-ClZin-IT.js';

/**
 * Chunk — v2 changes: optional fields previously typed
 * `.nullable().optional()` are now just `.optional()`. Producers should
 * omit instead of writing `null`; readers see the same `undefined` in
 * both cases.
 */
declare const ChunkBaseV2Schema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}>;
type ChunkBaseV2 = z.infer<typeof ChunkBaseV2Schema>;
declare const ChunkTextV2Schema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"text">;
    content: z.ZodString;
    mentionedEntitiesUids: z.ZodOptional<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
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
}>;
type ChunkTextV2 = z.infer<typeof ChunkTextV2Schema>;
declare const ChunkTextProxyV2Schema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"textProxy">;
    chunkUid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "textProxy";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    chunkUid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    type: "textProxy";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    chunkUid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}>;
type ChunkTextProxyV2 = z.infer<typeof ChunkTextProxyV2Schema>;
declare const ChunkGalleryV2Schema: z.ZodObject<{
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
}>;
type ChunkGalleryV2 = z.infer<typeof ChunkGalleryV2Schema>;
declare const ChunkRandomV2Schema: z.ZodObject<{
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
}>;
type ChunkRandomV2 = z.infer<typeof ChunkRandomV2Schema>;
declare const ChunkV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"text">;
    content: z.ZodString;
    mentionedEntitiesUids: z.ZodOptional<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
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
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodString>;
    blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
    headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
    headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
} & {
    type: z.ZodLiteral<"textProxy">;
    chunkUid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "textProxy";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    chunkUid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
}, {
    type: "textProxy";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    chunkUid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | undefined;
    headingMode?: "inside" | "outside" | undefined;
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
type ChunkV2 = z.infer<typeof ChunkV2Schema>;

export { type ChunkBaseV2 as C, type ChunkGalleryV2 as a, type ChunkRandomV2 as b, ChunkBaseV2Schema as c, ChunkGalleryV2Schema as d, ChunkRandomV2Schema as e, type ChunkTextProxyV2 as f, ChunkTextProxyV2Schema as g, type ChunkTextV2 as h, ChunkTextV2Schema as i, type ChunkV2 as j, ChunkV2Schema as k };
