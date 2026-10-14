import { a2 as EntitySubtypeUid } from './scene.v2.schema-Cy0s-K0Y.js';
import { z } from 'zod';

declare const EntitySubtypeV30Schema: z.ZodObject<{
    uid: z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>;
    name: z.ZodRecord<z.ZodString, z.ZodString>;
    baseType: z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>;
    icon: z.ZodOptional<z.ZodString>;
    help: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name: Record<string, string>;
    uid: string & {
        readonly __bypp_flavor?: "EntitySubtypeUid" | undefined;
    };
    baseType: "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story";
    icon?: string | undefined;
    help?: Record<string, string> | undefined;
}, {
    name: Record<string, string>;
    uid: string & {
        readonly __bypp_flavor?: "EntitySubtypeUid" | undefined;
    };
    baseType: "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story";
    icon?: string | undefined;
    help?: Record<string, string> | undefined;
}>;
type EntitySubtypeV30 = z.infer<typeof EntitySubtypeV30Schema>;

export { type EntitySubtypeV30 as E, EntitySubtypeV30Schema as a };
