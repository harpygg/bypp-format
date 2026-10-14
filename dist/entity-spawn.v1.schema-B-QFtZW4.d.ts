import { a0 as EntitySpawnUid, E as EntityUid, V as VariableUid, b as VariableChoiceUid } from './scene.v2.schema-Cy0s-K0Y.js';
import { z } from 'zod';

declare const EntitySpawnV1Schema: z.ZodObject<{
    uid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    ownerUid: z.ZodOptional<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>>;
    label: z.ZodOptional<z.ZodString>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label?: string | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    ownerUid?: EntityUid | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label?: string | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    ownerUid?: EntityUid | undefined;
}>;
type EntitySpawnV1 = z.infer<typeof EntitySpawnV1Schema>;

export { type EntitySpawnV1 as E, EntitySpawnV1Schema as a };
