import { T as TagUid, a as DatasetUid, S as SheetUid } from './scene.v2.schema-Cy0s-K0Y.js';
import { z } from 'zod';

declare const DatasetTargetV2Schema: z.ZodUnion<[z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>, z.ZodType<TagUid, z.ZodTypeDef, TagUid>]>;
/**
 * Dataset — v2 changes: `targets` defaults to `[]` (empty = "applies to
 * nothing", was already accepted semantically; just lets the producer
 * omit the field).
 */
declare const DatasetV2Schema: z.ZodObject<{
    uid: z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>;
} & {
    name: z.ZodString;
} & {
    weight: z.ZodOptional<z.ZodNumber>;
    targets: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>, z.ZodType<TagUid, z.ZodTypeDef, TagUid>]>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    sheetUid: z.ZodOptional<z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "DatasetUid" | undefined;
    };
    targets: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[];
    weight?: number | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sheetUid?: SheetUid | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "DatasetUid" | undefined;
    };
    weight?: number | undefined;
    targets?: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[] | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sheetUid?: SheetUid | undefined;
}>;
type DatasetV2 = z.infer<typeof DatasetV2Schema>;

export { DatasetTargetV2Schema as D, type DatasetV2 as a, DatasetV2Schema as b };
