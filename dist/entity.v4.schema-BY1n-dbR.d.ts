import { E as EntityUid, T as TagUid, a as DatasetUid, S as SheetUid, P as PageUid, V as VariableUid, b as VariableChoiceUid, A as AssetUid, c as SceneUid } from './scene.v2.schema-WTy2SpxZ.js';
import { z } from 'zod';

declare const EntityBaseV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
type EntityBaseV4 = z.infer<typeof EntityBaseV4Schema>;
declare const CharacterEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"character">;
}, "strip", z.ZodTypeAny, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
type CharacterEntityV4 = z.infer<typeof CharacterEntityV4Schema>;
declare const CreatureEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"creature">;
}, "strip", z.ZodTypeAny, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
type CreatureEntityV4 = z.infer<typeof CreatureEntityV4Schema>;
declare const GroupEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        characters: z.ZodArray<z.ZodObject<{
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }>, "many">>;
    charactersUids: z.ZodDefault<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    ranks?: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[] | undefined;
    charactersUids?: EntityUid[] | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
type GroupEntityV4 = z.infer<typeof GroupEntityV4Schema>;
declare const PlaceEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    scenesUids: z.ZodDefault<z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">>;
} & {
    type: z.ZodLiteral<"place">;
}, "strip", z.ZodTypeAny, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    scenesUids?: SceneUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
type PlaceEntityV4 = z.infer<typeof PlaceEntityV4Schema>;
declare const ItemEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"item">;
}, "strip", z.ZodTypeAny, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
declare const NoteEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"note">;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
declare const AbilityEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"ability">;
}, "strip", z.ZodTypeAny, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
declare const StoryEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"story">;
}, "strip", z.ZodTypeAny, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
declare const EventEntityV4Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"event">;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>;
declare const EntityV4Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"character">;
}, "strip", z.ZodTypeAny, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"creature">;
}, "strip", z.ZodTypeAny, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        characters: z.ZodArray<z.ZodObject<{
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }>, "many">>;
    charactersUids: z.ZodDefault<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    ranks?: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[] | undefined;
    charactersUids?: EntityUid[] | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    scenesUids: z.ZodDefault<z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">>;
} & {
    type: z.ZodLiteral<"place">;
}, "strip", z.ZodTypeAny, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    scenesUids?: SceneUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"item">;
}, "strip", z.ZodTypeAny, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"note">;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"ability">;
}, "strip", z.ZodTypeAny, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"story">;
}, "strip", z.ZodTypeAny, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    type: z.ZodLiteral<"event">;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
}>]>;
type EntityV4 = z.infer<typeof EntityV4Schema>;

export { AbilityEntityV4Schema as A, type CharacterEntityV4 as C, type EntityBaseV4 as E, type GroupEntityV4 as G, ItemEntityV4Schema as I, NoteEntityV4Schema as N, type PlaceEntityV4 as P, StoryEntityV4Schema as S, type CreatureEntityV4 as a, CharacterEntityV4Schema as b, CreatureEntityV4Schema as c, EntityBaseV4Schema as d, type EntityV4 as e, EntityV4Schema as f, EventEntityV4Schema as g, GroupEntityV4Schema as h, PlaceEntityV4Schema as i };
