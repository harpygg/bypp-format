import { D as DialectUid, E as EntityUid } from './data-table.v3.schema-qpxPwgjy.js';
import { z } from 'zod';

/**
 * Dialect font — v2 changes: `fontUrl` is `.url()`-validated.
 */
declare const DialectFontV2Schema: z.ZodObject<{
    fontFamily: z.ZodString;
    fontUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fontFamily: string;
    fontUrl: string;
}, {
    fontFamily: string;
    fontUrl: string;
}>;
type DialectFontV2 = z.infer<typeof DialectFontV2Schema>;
/**
 * Dialect — v2 changes: `spokenByEntitiesUids` defaults to `[]`.
 */
declare const DialectV2Schema: z.ZodObject<{
    uid: z.ZodType<DialectUid, z.ZodTypeDef, DialectUid>;
    name: z.ZodString;
    font: z.ZodObject<{
        fontFamily: z.ZodString;
        fontUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fontFamily: string;
        fontUrl: string;
    }, {
        fontFamily: string;
        fontUrl: string;
    }>;
    order: z.ZodOptional<z.ZodNumber>;
    spokenByEntitiesUids: z.ZodDefault<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "DialectUid" | undefined;
    };
    font: {
        fontFamily: string;
        fontUrl: string;
    };
    spokenByEntitiesUids: EntityUid[];
    order?: number | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "DialectUid" | undefined;
    };
    font: {
        fontFamily: string;
        fontUrl: string;
    };
    order?: number | undefined;
    spokenByEntitiesUids?: EntityUid[] | undefined;
}>;
type DialectV2 = z.infer<typeof DialectV2Schema>;

export { type DialectFontV2 as D, DialectFontV2Schema as a, type DialectV2 as b, DialectV2Schema as c };
