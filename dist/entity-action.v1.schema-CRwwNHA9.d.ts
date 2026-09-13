import { E as EntityUid, T as TagUid, a as DatasetUid, S as SheetUid, P as PageUid, V as VariableUid, b as VariableChoiceUid, A as AssetUid, b5 as EntityActionUid, c as SceneUid } from './data-table.v3.schema-SKJA8p4m.js';
import { z } from 'zod';

declare const EntityBaseV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
type EntityBaseV5 = z.infer<typeof EntityBaseV5Schema>;
declare const CharacterEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
type CharacterEntityV5 = z.infer<typeof CharacterEntityV5Schema>;
declare const CreatureEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
type CreatureEntityV5 = z.infer<typeof CreatureEntityV5Schema>;
declare const GroupEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
type GroupEntityV5 = z.infer<typeof GroupEntityV5Schema>;
declare const PlaceEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
type PlaceEntityV5 = z.infer<typeof PlaceEntityV5Schema>;
declare const ItemEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
declare const NoteEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
declare const AbilityEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
declare const StoryEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
declare const EventEntityV5Schema: z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>;
declare const EntityV5Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
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
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
    actions: {
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
    }[];
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
    actions?: {
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
    }[] | undefined;
}>]>;
type EntityV5 = z.infer<typeof EntityV5Schema>;

declare const EntityActionV1Schema: z.ZodObject<{
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
}>;
type EntityActionV1 = z.infer<typeof EntityActionV1Schema>;

export { AbilityEntityV5Schema as A, type CharacterEntityV5 as C, type EntityV5 as E, type GroupEntityV5 as G, ItemEntityV5Schema as I, NoteEntityV5Schema as N, type PlaceEntityV5 as P, StoryEntityV5Schema as S, type EntityActionV1 as a, type EntityBaseV5 as b, CharacterEntityV5Schema as c, type CreatureEntityV5 as d, CreatureEntityV5Schema as e, EntityActionV1Schema as f, EntityBaseV5Schema as g, EntityV5Schema as h, EventEntityV5Schema as i, GroupEntityV5Schema as j, PlaceEntityV5Schema as k };
