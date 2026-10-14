import { aI as EntityActionUid, V as VariableUid } from './scene.v2.schema-Cy0s-K0Y.cjs';
import { z } from 'zod';

declare const EntityActionV2Schema: z.ZodObject<{
    uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
    label: z.ZodRecord<z.ZodString, z.ZodString>;
    visual: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"awesome">;
        icon: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "awesome";
        icon: string;
    }, {
        type: "awesome";
        icon: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"compo">;
        icons: z.ZodRecord<z.ZodString, z.ZodObject<{
            icon: z.ZodNullable<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            rotate: z.ZodOptional<z.ZodNumber>;
            revert: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    }, {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    }>]>>;
    hue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodLiteral<"roll">;
    diceFormula: z.ZodOptional<z.ZodString>;
} & {
    rolls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        diceFormula: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        diceFormula: string;
        key: string;
    }, {
        label: string;
        diceFormula: string;
        key: string;
    }>, "many">>;
    updates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        variableUid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        formula: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }, {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }>, "many">>;
    log: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    uid: string & {
        readonly __bypp_flavor?: "EntityActionUid" | undefined;
    };
    label: Record<string, string>;
    diceFormula?: string | undefined;
    visual?: {
        type: "awesome";
        icon: string;
    } | {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    } | undefined;
    hue?: number | null | undefined;
    rolls?: {
        label: string;
        diceFormula: string;
        key: string;
    }[] | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    log?: string | undefined;
}, {
    type: "roll";
    uid: string & {
        readonly __bypp_flavor?: "EntityActionUid" | undefined;
    };
    label: Record<string, string>;
    diceFormula?: string | undefined;
    visual?: {
        type: "awesome";
        icon: string;
    } | {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    } | undefined;
    hue?: number | null | undefined;
    rolls?: {
        label: string;
        diceFormula: string;
        key: string;
    }[] | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    log?: string | undefined;
}>;
type EntityActionV2 = z.infer<typeof EntityActionV2Schema>;

export { type EntityActionV2 as E, EntityActionV2Schema as a };
