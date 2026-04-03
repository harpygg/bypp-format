import { z } from 'zod';

declare const BYPP_FORMAT_VERSION = 1;
declare const BYPP_FORMAT_EXT = "bypp";

/**
 * Flavored UID types for the .bypp format.
 *
 * Uses "flavoring" (optional phantom property) instead of strict branding.
 * This makes the types:
 * 1. Incompatible with each other (can't put an EntityUid where a PageUid is expected)
 * 2. Compatible with ANY consumer's own branded strings (Typesaurus, Zod, etc.)
 *    because the flavor property is optional — any `string` or `string & { ... }`
 *    satisfies the contract without needing to carry the flavor key.
 *
 * @see https://spin.atomicobject.com/typescript-flexible-nominal-typing/
 */
type Flavor<T extends string> = string & {
    readonly __bypp_flavor?: T;
};
type EntityUid = Flavor<"EntityUid">;
type PageUid = Flavor<"PageUid">;
type ChunkUid = Flavor<"ChunkUid">;
type DatasetUid = Flavor<"DatasetUid">;
type VariableUid = Flavor<"VariableUid">;
type WidgetUid = Flavor<"WidgetUid">;
type RandomTableUid = Flavor<"RandomTableUid">;
type RandomTableRowUid = Flavor<"RandomTableRowUid">;
type TagUid = Flavor<"TagUid">;
type TagCategoryUid = Flavor<"TagCategoryUid">;
type SceneUid = Flavor<"SceneUid">;
type SceneMapUid = Flavor<"SceneMapUid">;
type SceneBackgroundUid = Flavor<"SceneBackgroundUid">;
type AssetUid = Flavor<"AssetUid">;
type DialectUid = Flavor<"DialectUid">;
type SheetUid = Flavor<"SheetUid">;
type VariableChoiceUid = Flavor<"VariableChoiceUid">;
declare const EntityUidSchema: z.ZodType<EntityUid>;
declare const PageUidSchema: z.ZodType<PageUid>;
declare const ChunkUidSchema: z.ZodType<ChunkUid>;
declare const DatasetUidSchema: z.ZodType<DatasetUid>;
declare const VariableUidSchema: z.ZodType<VariableUid>;
declare const WidgetUidSchema: z.ZodType<WidgetUid>;
declare const RandomTableUidSchema: z.ZodType<RandomTableUid>;
declare const RandomTableRowUidSchema: z.ZodType<RandomTableRowUid>;
declare const TagUidSchema: z.ZodType<TagUid>;
declare const TagCategoryUidSchema: z.ZodType<TagCategoryUid>;
declare const SceneUidSchema: z.ZodType<SceneUid>;
declare const SceneMapUidSchema: z.ZodType<SceneMapUid>;
declare const SceneBackgroundUidSchema: z.ZodType<SceneBackgroundUid>;
declare const AssetUidSchema: z.ZodType<AssetUid>;
declare const DialectUidSchema: z.ZodType<DialectUid>;
declare const SheetUidSchema: z.ZodType<SheetUid>;
declare const VariableChoiceUidSchema: z.ZodType<VariableChoiceUid>;

declare const BeyondPaperSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    format: z.ZodLiteral<"bypp">;
    name: z.ZodString;
    exportedAt: z.ZodString;
    bundleVersion: z.ZodString;
    dialects: z.ZodArray<z.ZodObject<{
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
        spokenByEntitiesUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
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
        spokenByEntitiesUids: EntityUid[];
        order?: number | undefined;
    }>, "many">;
    entities: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "character";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "creature";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    } & {
        type: z.ZodLiteral<"group">;
        ranks: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        charactersUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "group";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "group";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    } & {
        scenesUids: z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "place";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        scenesUids: SceneUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "item";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "note";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "ability";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "story";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        displayName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
        sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        isArchived: z.ZodBoolean;
    } & {
        pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }, {
        type: "event";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>]>, "many">;
    pages: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<PageUid, z.ZodTypeDef, PageUid>;
    } & {
        name: z.ZodString;
    } & {
        type: z.ZodLiteral<"standard">;
        chunksOrder: z.ZodArray<z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "standard";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        chunksOrder: ChunkUid[];
    }, {
        type: "standard";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        chunksOrder: ChunkUid[];
    }>, z.ZodObject<{
        uid: z.ZodType<PageUid, z.ZodTypeDef, PageUid>;
        type: z.ZodLiteral<"entity">;
        entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    }, "strip", z.ZodTypeAny, {
        type: "entity";
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    }, {
        type: "entity";
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    }>]>, "many">;
    chunks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
        headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
        headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        mentionedEntitiesUids?: EntityUid[] | undefined;
    }, {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        mentionedEntitiesUids?: EntityUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
        headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
        headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
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
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
        headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
        headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
    } & {
        type: z.ZodLiteral<"gallery">;
        assetUids: z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    }, {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
        headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
        headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        folded?: boolean | undefined;
    }, {
        type: "random";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        randomTableUid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        folded?: boolean | undefined;
    }>]>, "many">;
    datasets: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>;
    } & {
        name: z.ZodString;
    } & {
        weight: z.ZodOptional<z.ZodNumber>;
        targets: z.ZodArray<z.ZodUnion<[z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>, z.ZodType<TagUid, z.ZodTypeDef, TagUid>]>, "many">;
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
        targets: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[];
        weight?: number | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sheetUid?: SheetUid | undefined;
    }>, "many">;
    variables: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    } & {
        name: z.ZodString;
    } & {
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"number">;
        defaultValue: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
    }, {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    } & {
        name: z.ZodString;
    } & {
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"text">;
        maxChars: z.ZodOptional<z.ZodNumber>;
        defaultValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }, {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    } & {
        name: z.ZodString;
    } & {
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"boolean">;
        defaultValue: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: boolean | undefined;
    }, {
        type: "boolean";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    } & {
        name: z.ZodString;
    } & {
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"choice">;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
        }>, "many">>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        defaultValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "choice";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        isMultiple?: boolean | undefined;
    }, {
        type: "choice";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        isMultiple?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    } & {
        name: z.ZodString;
    } & {
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"formula">;
        formula: z.ZodOptional<z.ZodString>;
        depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "formula";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        formula?: string | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
    }, {
        type: "formula";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        formula?: string | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    } & {
        name: z.ZodString;
    } & {
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        label: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"roll">;
        diceFormula: z.ZodOptional<z.ZodString>;
        depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "roll";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
        diceFormula?: string | undefined;
    }, {
        type: "roll";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
        diceFormula?: string | undefined;
    }>]>, "many">;
    widgets: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"empty">;
    }, "strip", z.ZodTypeAny, {
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }, {
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"bigNumber">;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
        unit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        min?: number | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    }, {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        min?: number | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"plainText">;
    }, "strip", z.ZodTypeAny, {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }, {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"toggle">;
        toggleIconType: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    }, {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"bulletList">;
        listVisibility: z.ZodOptional<z.ZodString>;
        listStyleBulletBreakline: z.ZodOptional<z.ZodBoolean>;
        listStyleBulletType: z.ZodOptional<z.ZodString>;
        listStyleBulletGap: z.ZodOptional<z.ZodNumber>;
        listStyleBulletIconGap: z.ZodOptional<z.ZodNumber>;
        listOptionStyle: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
    }, {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"inlineList">;
        listStyleTextSeparator: z.ZodOptional<z.ZodString>;
        listVisibility: z.ZodOptional<z.ZodString>;
        listOptionStyle: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "inlineList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
    }, {
        type: "inlineList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    } & {
        name: z.ZodString;
    } & {
        area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>>>;
    } & {
        position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            left: z.ZodNumber;
            top: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            left: number;
            top: number;
        }, {
            left: number;
            top: number;
        }>>>;
    } & {
        style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        }>>>;
    } & {
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    } & {
        type: z.ZodLiteral<"pips">;
        gapX: z.ZodOptional<z.ZodNumber>;
        gapY: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    }, "strip", z.ZodTypeAny, {
        type: "pips";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    }, {
        type: "pips";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    }>]>, "many">;
    randomTables: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>;
        title: z.ZodString;
        rows: z.ZodArray<z.ZodObject<{
            uid: z.ZodType<RandomTableRowUid, z.ZodTypeDef, RandomTableRowUid>;
            range: z.ZodNumber;
            content: z.ZodString;
            randomTableUid: z.ZodOptional<z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }[];
    }, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }[];
    }>, "many">;
    tags: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
    } & {
        name: z.ZodString;
    } & {
        categoryUid: z.ZodNullable<z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>>;
        useAsFolder: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        categoryUid: TagCategoryUid | null;
        useAsFolder: boolean;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        categoryUid: TagCategoryUid | null;
        useAsFolder: boolean;
    }>, "many">;
    tagCategories: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>;
    } & {
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
    }>, "many">;
    scenes: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>;
    } & {
        name: z.ZodString;
    } & {
        mapUid: z.ZodOptional<z.ZodNullable<z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>>>;
        backgroundUid: z.ZodOptional<z.ZodNullable<z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>>>;
        lightPositionX: z.ZodOptional<z.ZodNumber>;
        lightPositionY: z.ZodOptional<z.ZodNumber>;
        lightPositionZ: z.ZodOptional<z.ZodNumber>;
        lightIntensity: z.ZodOptional<z.ZodNumber>;
        lightColor: z.ZodOptional<z.ZodString>;
        useCustomLightPosition: z.ZodOptional<z.ZodBoolean>;
        indoorLight: z.ZodOptional<z.ZodBoolean>;
        weather: z.ZodOptional<z.ZodNullable<z.ZodEnum<["none", "fog", "dark"]>>>;
        gameMode: z.ZodOptional<z.ZodEnum<["2d_vtt", "3d_vtt", "totm"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | null | undefined;
        backgroundUid?: SceneBackgroundUid | null | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
        weather?: "none" | "fog" | "dark" | null | undefined;
        gameMode?: "2d_vtt" | "3d_vtt" | "totm" | undefined;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | null | undefined;
        backgroundUid?: SceneBackgroundUid | null | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
        weather?: "none" | "fog" | "dark" | null | undefined;
        gameMode?: "2d_vtt" | "3d_vtt" | "totm" | undefined;
    }>, "many">;
    sceneMaps: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
    } & {
        name: z.ZodString;
    } & {
        grid: z.ZodObject<{
            type: z.ZodEnum<["square", "hexv", "hexh"]>;
            size: z.ZodNumber;
            sizeInUnit: z.ZodNumber;
            measureUnit: z.ZodString;
            lineWidth: z.ZodNumber;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            offset: z.ZodObject<{
                x: z.ZodNumber;
                z: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                z: number;
            }, {
                x: number;
                z: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        }, {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        }>;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"customImage">;
    }, "strip", z.ZodTypeAny, {
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }, {
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
    } & {
        name: z.ZodString;
    } & {
        grid: z.ZodObject<{
            type: z.ZodEnum<["square", "hexv", "hexh"]>;
            size: z.ZodNumber;
            sizeInUnit: z.ZodNumber;
            measureUnit: z.ZodString;
            lineWidth: z.ZodNumber;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            offset: z.ZodObject<{
                x: z.ZodNumber;
                z: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                z: number;
            }, {
                x: number;
                z: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        }, {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        }>;
    } & {
        videoUrl: z.ZodOptional<z.ZodString>;
        videoDimensions: z.ZodOptional<z.ZodObject<{
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
        type: z.ZodLiteral<"customVideo">;
    }, "strip", z.ZodTypeAny, {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    }, {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
    } & {
        name: z.ZodString;
    } & {
        grid: z.ZodObject<{
            type: z.ZodEnum<["square", "hexv", "hexh"]>;
            size: z.ZodNumber;
            sizeInUnit: z.ZodNumber;
            measureUnit: z.ZodString;
            lineWidth: z.ZodNumber;
            color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            offset: z.ZodObject<{
                x: z.ZodNumber;
                z: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                x: number;
                z: number;
            }, {
                x: number;
                z: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        }, {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        }>;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"dd2vtt">;
    }, "strip", z.ZodTypeAny, {
        type: "dd2vtt";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }, {
        type: "dd2vtt";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }>]>, "many">;
    sceneBackgrounds: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"customImage">;
    }, "strip", z.ZodTypeAny, {
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }, {
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
    } & {
        name: z.ZodString;
    } & {
        videoUrl: z.ZodOptional<z.ZodString>;
        videoDimensions: z.ZodOptional<z.ZodObject<{
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
        type: z.ZodLiteral<"customVideo">;
    }, "strip", z.ZodTypeAny, {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    }, {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    }>]>, "many">;
    assets: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"image">;
        dimensions: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }, {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        videoUrl: z.ZodOptional<z.ZodString>;
        videoDimensions: z.ZodOptional<z.ZodObject<{
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
        type: z.ZodLiteral<"video">;
        dimensions: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width: number;
            height: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "video";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    }, {
        type: "video";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        audioUrl: z.ZodOptional<z.ZodString>;
        audioDurationSeconds: z.ZodOptional<z.ZodNumber>;
        audioExt: z.ZodOptional<z.ZodEnum<["mp3", "ogg"]>>;
    } & {
        type: z.ZodLiteral<"audio">;
    }, "strip", z.ZodTypeAny, {
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: "mp3" | "ogg" | undefined;
    }, {
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: "mp3" | "ogg" | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        type: z.ZodLiteral<"audio-external">;
        youtubeVideoId: z.ZodString;
        thumbnailUrl: z.ZodString;
        durationSeconds: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "audio-external";
        thumbnailUrl: string;
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        youtubeVideoId: string;
        durationSeconds: number;
    }, {
        type: "audio-external";
        thumbnailUrl: string;
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        youtubeVideoId: string;
        durationSeconds: number;
    }>, z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        type: z.ZodLiteral<"entity">;
        entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    }, "strip", z.ZodTypeAny, {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    }, {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    version: 1;
    format: "bypp";
    exportedAt: string;
    bundleVersion: string;
    dialects: {
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
    }[];
    entities: ({
        type: "character";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "creature";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "group";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "place";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        scenesUids: SceneUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "item";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "note";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "ability";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "story";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "event";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    })[];
    pages: ({
        type: "standard";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        chunksOrder: ChunkUid[];
    } | {
        type: "entity";
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    })[];
    chunks: ({
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        mentionedEntitiesUids?: EntityUid[] | undefined;
    } | {
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
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    } | {
        type: "random";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        randomTableUid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        folded?: boolean | undefined;
    })[];
    datasets: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "DatasetUid" | undefined;
        };
        targets: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[];
        weight?: number | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sheetUid?: SheetUid | undefined;
    }[];
    variables: ({
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
    } | {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    } | {
        type: "boolean";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: boolean | undefined;
    } | {
        type: "choice";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        isMultiple?: boolean | undefined;
    } | {
        type: "formula";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        formula?: string | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
    } | {
        type: "roll";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
        diceFormula?: string | undefined;
    })[];
    widgets: ({
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        min?: number | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    } | {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    } | {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
    } | {
        type: "inlineList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
    } | {
        type: "pips";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    })[];
    randomTables: {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }[];
    }[];
    tags: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        categoryUid: TagCategoryUid | null;
        useAsFolder: boolean;
    }[];
    tagCategories: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
    }[];
    scenes: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | null | undefined;
        backgroundUid?: SceneBackgroundUid | null | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
        weather?: "none" | "fog" | "dark" | null | undefined;
        gameMode?: "2d_vtt" | "3d_vtt" | "totm" | undefined;
    }[];
    sceneMaps: ({
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    } | {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    } | {
        type: "dd2vtt";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    })[];
    sceneBackgrounds: ({
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    } | {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    })[];
    assets: ({
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    } | {
        type: "video";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    } | {
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: "mp3" | "ogg" | undefined;
    } | {
        type: "audio-external";
        thumbnailUrl: string;
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        youtubeVideoId: string;
        durationSeconds: number;
    } | {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    })[];
}, {
    name: string;
    version: 1;
    format: "bypp";
    exportedAt: string;
    bundleVersion: string;
    dialects: {
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
    }[];
    entities: ({
        type: "character";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "creature";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "group";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "place";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        scenesUids: SceneUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "item";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "note";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "ability";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "story";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "event";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        isArchived: boolean;
        pagesOrder: PageUid[];
        displayName: string | null;
        description: string | null;
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    })[];
    pages: ({
        type: "standard";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        chunksOrder: ChunkUid[];
    } | {
        type: "entity";
        uid: string & {
            readonly __bypp_flavor?: "PageUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    })[];
    chunks: ({
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        mentionedEntitiesUids?: EntityUid[] | undefined;
    } | {
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
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    } | {
        type: "random";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        randomTableUid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
        folded?: boolean | undefined;
    })[];
    datasets: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "DatasetUid" | undefined;
        };
        targets: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[];
        weight?: number | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sheetUid?: SheetUid | undefined;
    }[];
    variables: ({
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
    } | {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    } | {
        type: "boolean";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: boolean | undefined;
    } | {
        type: "choice";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        isMultiple?: boolean | undefined;
    } | {
        type: "formula";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        formula?: string | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
    } | {
        type: "roll";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
        diceFormula?: string | undefined;
    })[];
    widgets: ({
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        min?: number | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    } | {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    } | {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
    } | {
        type: "inlineList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
    } | {
        type: "pips";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        style?: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        max?: number | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    })[];
    randomTables: {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }[];
    }[];
    tags: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        categoryUid: TagCategoryUid | null;
        useAsFolder: boolean;
    }[];
    tagCategories: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
    }[];
    scenes: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | null | undefined;
        backgroundUid?: SceneBackgroundUid | null | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
        weather?: "none" | "fog" | "dark" | null | undefined;
        gameMode?: "2d_vtt" | "3d_vtt" | "totm" | undefined;
    }[];
    sceneMaps: ({
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    } | {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    } | {
        type: "dd2vtt";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneMapUid" | undefined;
        };
        grid: {
            type: "square" | "hexv" | "hexh";
            size: number;
            sizeInUnit: number;
            measureUnit: string;
            lineWidth: number;
            offset: {
                x: number;
                z: number;
            };
            color?: string | null | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    })[];
    sceneBackgrounds: ({
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    } | {
        type: "customVideo";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    })[];
    assets: ({
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
    } | {
        type: "video";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        dimensions: {
            width: number;
            height: number;
        };
        videoUrl?: string | undefined;
        videoDimensions?: {
            width: number;
            height: number;
        } | undefined;
    } | {
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: "mp3" | "ogg" | undefined;
    } | {
        type: "audio-external";
        thumbnailUrl: string;
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        youtubeVideoId: string;
        durationSeconds: number;
    } | {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    })[];
}>;
type BeyondPaper = z.infer<typeof BeyondPaperSchema>;

declare const WithNameSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;

declare const WithImagesUrlsSchema: z.ZodObject<{
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>;

declare const WithAudioUrlsSchema: z.ZodObject<{
    audioUrl: z.ZodOptional<z.ZodString>;
    audioDurationSeconds: z.ZodOptional<z.ZodNumber>;
    audioExt: z.ZodOptional<z.ZodEnum<["mp3", "ogg"]>>;
}, "strip", z.ZodTypeAny, {
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: "mp3" | "ogg" | undefined;
}, {
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: "mp3" | "ogg" | undefined;
}>;

declare const ImageDimensionsSchema: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
}, {
    width: number;
    height: number;
}>;
type ImageDimensions = z.infer<typeof ImageDimensionsSchema>;
declare const WithVideoUrlsSchema: z.ZodObject<{
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>;

declare const WithArchiveSchema: z.ZodObject<{
    isArchived: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isArchived: boolean;
}, {
    isArchived: boolean;
}>;

declare const WithPagesSchema: z.ZodObject<{
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
}, "strip", z.ZodTypeAny, {
    pagesOrder: PageUid[];
}, {
    pagesOrder: PageUid[];
}>;

declare const WithScenesSchema: z.ZodObject<{
    scenesUids: z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">;
}, "strip", z.ZodTypeAny, {
    scenesUids: SceneUid[];
}, {
    scenesUids: SceneUid[];
}>;

declare const VariableDataValueSchema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>;
declare const VariablesDataRecordSchema: z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>;
declare const WithDataSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
}, "strip", z.ZodTypeAny, {
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
}, {
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
}>;

declare const WithAssetsSchema: z.ZodObject<{
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    assetUids?: AssetUid[] | undefined;
}, {
    assetUids?: AssetUid[] | undefined;
}>;

declare const WithAreaSchema: z.ZodObject<{
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
}, "strip", z.ZodTypeAny, {
    area?: {
        width: number;
        height: number;
    } | null | undefined;
}, {
    area?: {
        width: number;
        height: number;
    } | null | undefined;
}>;

declare const WithPositionSchema: z.ZodObject<{
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
}, "strip", z.ZodTypeAny, {
    position?: {
        left: number;
        top: number;
    } | null | undefined;
}, {
    position?: {
        left: number;
        top: number;
    } | null | undefined;
}>;

declare const StyleSchema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
    justifyContent: z.ZodOptional<z.ZodString>;
    alignItems: z.ZodOptional<z.ZodString>;
    flexDirection: z.ZodOptional<z.ZodString>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    fontFamilyId: z.ZodOptional<z.ZodString>;
    fontScale: z.ZodOptional<z.ZodNumber>;
    color: z.ZodOptional<z.ZodString>;
    paddingTop: z.ZodOptional<z.ZodNumber>;
    paddingRight: z.ZodOptional<z.ZodNumber>;
    paddingBottom: z.ZodOptional<z.ZodNumber>;
    paddingLeft: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    color?: string | undefined;
    justifyContent?: string | undefined;
    alignItems?: string | undefined;
    flexDirection?: string | undefined;
    lineHeight?: number | undefined;
    fontFamilyId?: string | undefined;
    fontScale?: number | undefined;
    paddingTop?: number | undefined;
    paddingRight?: number | undefined;
    paddingBottom?: number | undefined;
    paddingLeft?: number | undefined;
}, {
    color?: string | undefined;
    justifyContent?: string | undefined;
    alignItems?: string | undefined;
    flexDirection?: string | undefined;
    lineHeight?: number | undefined;
    fontFamilyId?: string | undefined;
    fontScale?: number | undefined;
    paddingTop?: number | undefined;
    paddingRight?: number | undefined;
    paddingBottom?: number | undefined;
    paddingLeft?: number | undefined;
}>>>;
declare const WithStyleSchema: z.ZodObject<{
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
}, {
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
}>;

declare const EntityTypeSchema: z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>;
type EntityType = z.infer<typeof EntityTypeSchema>;
declare const GroupRankCharacterSchema: z.ZodObject<{
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
}>;
type GroupRankCharacter = z.infer<typeof GroupRankCharacterSchema>;
declare const GroupRankSchema: z.ZodObject<{
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
}>;
type GroupRank = z.infer<typeof GroupRankSchema>;
declare const EntityBaseSchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type EntityBase = z.infer<typeof EntityBaseSchema>;
declare const CharacterEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type CharacterEntity = z.infer<typeof CharacterEntitySchema>;
declare const CreatureEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type CreatureEntity = z.infer<typeof CreatureEntitySchema>;
declare const GroupEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    charactersUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type GroupEntity = z.infer<typeof GroupEntitySchema>;
declare const PlaceEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    scenesUids: z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type PlaceEntity = z.infer<typeof PlaceEntitySchema>;
declare const ItemEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const NoteEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const AbilityEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const StoryEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const EventEntitySchema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const EntitySchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    charactersUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    scenesUids: z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>]>;
type Entity = z.infer<typeof EntitySchema>;

declare const PageStandardSchema: z.ZodObject<{
    uid: z.ZodType<PageUid, z.ZodTypeDef, PageUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"standard">;
    chunksOrder: z.ZodArray<z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "standard";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    chunksOrder: ChunkUid[];
}, {
    type: "standard";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    chunksOrder: ChunkUid[];
}>;
type PageStandard = z.infer<typeof PageStandardSchema>;
declare const PageEntitySchema: z.ZodObject<{
    uid: z.ZodType<PageUid, z.ZodTypeDef, PageUid>;
    type: z.ZodLiteral<"entity">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "entity";
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}, {
    type: "entity";
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}>;
type PageEntity = z.infer<typeof PageEntitySchema>;
declare const PageSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<PageUid, z.ZodTypeDef, PageUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"standard">;
    chunksOrder: z.ZodArray<z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "standard";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    chunksOrder: ChunkUid[];
}, {
    type: "standard";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    chunksOrder: ChunkUid[];
}>, z.ZodObject<{
    uid: z.ZodType<PageUid, z.ZodTypeDef, PageUid>;
    type: z.ZodLiteral<"entity">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "entity";
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}, {
    type: "entity";
    uid: string & {
        readonly __bypp_flavor?: "PageUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}>]>;
type Page = z.infer<typeof PageSchema>;

declare const ChunkBlockStyleSchema: z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>;
declare const ChunkHeadingModeSchema: z.ZodEnum<["inside", "outside"]>;
declare const ChunkHeadingLevelSchema: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>;
type ChunkBlockStyle = z.infer<typeof ChunkBlockStyleSchema>;
type ChunkHeadingMode = z.infer<typeof ChunkHeadingModeSchema>;
type ChunkHeadingLevel = z.infer<typeof ChunkHeadingLevelSchema>;
declare const ChunkBaseSchema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}>;
type ChunkBase = z.infer<typeof ChunkBaseSchema>;
declare const ChunkTextSchema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
}, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
}>;
type ChunkText = z.infer<typeof ChunkTextSchema>;
declare const ChunkTextProxySchema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}>;
type ChunkTextProxy = z.infer<typeof ChunkTextProxySchema>;
declare const ChunkGallerySchema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
} & {
    type: z.ZodLiteral<"gallery">;
    assetUids: z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    assetUids: AssetUid[];
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    assetUids: AssetUid[];
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}>;
type ChunkGallery = z.infer<typeof ChunkGallerySchema>;
declare const ChunkRandomSchema: z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    folded?: boolean | undefined;
}, {
    type: "random";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    randomTableUid: string & {
        readonly __bypp_flavor?: "RandomTableUid" | undefined;
    };
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    folded?: boolean | undefined;
}>;
type ChunkRandom = z.infer<typeof ChunkRandomSchema>;
declare const ChunkSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
}, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    content: string;
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    mentionedEntitiesUids?: EntityUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
} & {
    type: z.ZodLiteral<"gallery">;
    assetUids: z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    assetUids: AssetUid[];
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}, {
    type: "gallery";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    assetUids: AssetUid[];
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    blockStyle: z.ZodOptional<z.ZodNullable<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>>;
    headingLevel: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>>;
    headingMode: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inside", "outside"]>>>;
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
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    folded?: boolean | undefined;
}, {
    type: "random";
    uid: string & {
        readonly __bypp_flavor?: "ChunkUid" | undefined;
    };
    randomTableUid: string & {
        readonly __bypp_flavor?: "RandomTableUid" | undefined;
    };
    name?: string | null | undefined;
    blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
    headingLevel?: 1 | 2 | 3 | 4 | null | undefined;
    headingMode?: "inside" | "outside" | null | undefined;
    folded?: boolean | undefined;
}>]>;
type Chunk = z.infer<typeof ChunkSchema>;

declare const DatasetTargetSchema: z.ZodUnion<[z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>, z.ZodType<TagUid, z.ZodTypeDef, TagUid>]>;
declare const DatasetSchema: z.ZodObject<{
    uid: z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>;
} & {
    name: z.ZodString;
} & {
    weight: z.ZodOptional<z.ZodNumber>;
    targets: z.ZodArray<z.ZodUnion<[z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>, z.ZodType<TagUid, z.ZodTypeDef, TagUid>]>, "many">;
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
    targets: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[];
    weight?: number | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sheetUid?: SheetUid | undefined;
}>;
type Dataset = z.infer<typeof DatasetSchema>;

declare const ChoiceOptionSchema: z.ZodObject<{
    uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
    };
    label: string;
}, {
    uid: string & {
        readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
    };
    label: string;
}>;
type ChoiceOption = z.infer<typeof ChoiceOptionSchema>;
declare const VariableBaseSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}>;
type VariableBase = z.infer<typeof VariableBaseSchema>;
declare const NumberVariableSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"number">;
    defaultValue: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
}, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
}>;
type NumberVariable = z.infer<typeof NumberVariableSchema>;
declare const TextVariableSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>;
type TextVariable = z.infer<typeof TextVariableSchema>;
declare const BooleanVariableSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"boolean">;
    defaultValue: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}>;
type BooleanVariable = z.infer<typeof BooleanVariableSchema>;
declare const ChoiceVariableSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"choice">;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }>, "many">>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }[] | undefined;
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    isMultiple?: boolean | undefined;
}, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }[] | undefined;
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    isMultiple?: boolean | undefined;
}>;
type ChoiceVariable = z.infer<typeof ChoiceVariableSchema>;
declare const FormulaVariableSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"formula">;
    formula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}>;
type FormulaVariable = z.infer<typeof FormulaVariableSchema>;
declare const RollVariableSchema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"roll">;
    diceFormula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
}, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
}>;
type RollVariable = z.infer<typeof RollVariableSchema>;
declare const VariableSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"number">;
    defaultValue: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
}, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"boolean">;
    defaultValue: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"choice">;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }>, "many">>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }[] | undefined;
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    isMultiple?: boolean | undefined;
}, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
    }[] | undefined;
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    isMultiple?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"formula">;
    formula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
} & {
    name: z.ZodString;
} & {
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    label: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"roll">;
    diceFormula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
}, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
}>]>;
type Variable = z.infer<typeof VariableSchema>;

declare const WidgetBaseSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}>;
type WidgetBase = z.infer<typeof WidgetBaseSchema>;
declare const WidgetEmptySchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"empty">;
}, "strip", z.ZodTypeAny, {
    type: "empty";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}, {
    type: "empty";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}>;
type WidgetEmpty = z.infer<typeof WidgetEmptySchema>;
declare const WidgetBigNumberSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"bigNumber">;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    unit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "bigNumber";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    min?: number | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
}, {
    type: "bigNumber";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    min?: number | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
}>;
type WidgetBigNumber = z.infer<typeof WidgetBigNumberSchema>;
declare const WidgetPlainTextSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"plainText">;
}, "strip", z.ZodTypeAny, {
    type: "plainText";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}, {
    type: "plainText";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}>;
type WidgetPlainText = z.infer<typeof WidgetPlainTextSchema>;
declare const WidgetToggleSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"toggle">;
    toggleIconType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "toggle";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    toggleIconType?: string | undefined;
}, {
    type: "toggle";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    toggleIconType?: string | undefined;
}>;
type WidgetToggle = z.infer<typeof WidgetToggleSchema>;
declare const WidgetBulletListSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"bulletList">;
    listVisibility: z.ZodOptional<z.ZodString>;
    listStyleBulletBreakline: z.ZodOptional<z.ZodBoolean>;
    listStyleBulletType: z.ZodOptional<z.ZodString>;
    listStyleBulletGap: z.ZodOptional<z.ZodNumber>;
    listStyleBulletIconGap: z.ZodOptional<z.ZodNumber>;
    listOptionStyle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "bulletList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listStyleBulletBreakline?: boolean | undefined;
    listStyleBulletType?: string | undefined;
    listStyleBulletGap?: number | undefined;
    listStyleBulletIconGap?: number | undefined;
    listOptionStyle?: string | undefined;
}, {
    type: "bulletList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listStyleBulletBreakline?: boolean | undefined;
    listStyleBulletType?: string | undefined;
    listStyleBulletGap?: number | undefined;
    listStyleBulletIconGap?: number | undefined;
    listOptionStyle?: string | undefined;
}>;
type WidgetBulletList = z.infer<typeof WidgetBulletListSchema>;
declare const WidgetInlineListSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"inlineList">;
    listStyleTextSeparator: z.ZodOptional<z.ZodString>;
    listVisibility: z.ZodOptional<z.ZodString>;
    listOptionStyle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "inlineList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listOptionStyle?: string | undefined;
    listStyleTextSeparator?: string | undefined;
}, {
    type: "inlineList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listOptionStyle?: string | undefined;
    listStyleTextSeparator?: string | undefined;
}>;
type WidgetInlineList = z.infer<typeof WidgetInlineListSchema>;
declare const WidgetPipsSchema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"pips">;
    gapX: z.ZodOptional<z.ZodNumber>;
    gapY: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
}, "strip", z.ZodTypeAny, {
    type: "pips";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
}, {
    type: "pips";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
}>;
type WidgetPips = z.infer<typeof WidgetPipsSchema>;
declare const WidgetSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"empty">;
}, "strip", z.ZodTypeAny, {
    type: "empty";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}, {
    type: "empty";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"bigNumber">;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    unit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "bigNumber";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    min?: number | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
}, {
    type: "bigNumber";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    min?: number | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"plainText">;
}, "strip", z.ZodTypeAny, {
    type: "plainText";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}, {
    type: "plainText";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"toggle">;
    toggleIconType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "toggle";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    toggleIconType?: string | undefined;
}, {
    type: "toggle";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    toggleIconType?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"bulletList">;
    listVisibility: z.ZodOptional<z.ZodString>;
    listStyleBulletBreakline: z.ZodOptional<z.ZodBoolean>;
    listStyleBulletType: z.ZodOptional<z.ZodString>;
    listStyleBulletGap: z.ZodOptional<z.ZodNumber>;
    listStyleBulletIconGap: z.ZodOptional<z.ZodNumber>;
    listOptionStyle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "bulletList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listStyleBulletBreakline?: boolean | undefined;
    listStyleBulletType?: string | undefined;
    listStyleBulletGap?: number | undefined;
    listStyleBulletIconGap?: number | undefined;
    listOptionStyle?: string | undefined;
}, {
    type: "bulletList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listStyleBulletBreakline?: boolean | undefined;
    listStyleBulletType?: string | undefined;
    listStyleBulletGap?: number | undefined;
    listStyleBulletIconGap?: number | undefined;
    listOptionStyle?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"inlineList">;
    listStyleTextSeparator: z.ZodOptional<z.ZodString>;
    listVisibility: z.ZodOptional<z.ZodString>;
    listOptionStyle: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "inlineList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listOptionStyle?: string | undefined;
    listStyleTextSeparator?: string | undefined;
}, {
    type: "inlineList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listOptionStyle?: string | undefined;
    listStyleTextSeparator?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
} & {
    name: z.ZodString;
} & {
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
} & {
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    }>>>;
} & {
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
} & {
    type: z.ZodLiteral<"pips">;
    gapX: z.ZodOptional<z.ZodNumber>;
    gapY: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
}, "strip", z.ZodTypeAny, {
    type: "pips";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
}, {
    type: "pips";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    max?: number | undefined;
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
}>]>;
type Widget = z.infer<typeof WidgetSchema>;

declare const RandomTableRowSchema: z.ZodObject<{
    uid: z.ZodType<RandomTableRowUid, z.ZodTypeDef, RandomTableRowUid>;
    range: z.ZodNumber;
    content: z.ZodString;
    randomTableUid: z.ZodOptional<z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
    };
    content: string;
    range: number;
    randomTableUid?: RandomTableUid | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
    };
    content: string;
    range: number;
    randomTableUid?: RandomTableUid | undefined;
}>;
type RandomTableRow = z.infer<typeof RandomTableRowSchema>;
declare const RandomTableSchema: z.ZodObject<{
    uid: z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>;
    title: z.ZodString;
    rows: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<RandomTableRowUid, z.ZodTypeDef, RandomTableRowUid>;
        range: z.ZodNumber;
        content: z.ZodString;
        randomTableUid: z.ZodOptional<z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
        };
        content: string;
        range: number;
        randomTableUid?: RandomTableUid | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
        };
        content: string;
        range: number;
        randomTableUid?: RandomTableUid | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "RandomTableUid" | undefined;
    };
    title: string;
    rows: {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
        };
        content: string;
        range: number;
        randomTableUid?: RandomTableUid | undefined;
    }[];
}, {
    uid: string & {
        readonly __bypp_flavor?: "RandomTableUid" | undefined;
    };
    title: string;
    rows: {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
        };
        content: string;
        range: number;
        randomTableUid?: RandomTableUid | undefined;
    }[];
}>;
type RandomTable = z.infer<typeof RandomTableSchema>;

declare const TagSchema: z.ZodObject<{
    uid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
} & {
    name: z.ZodString;
} & {
    categoryUid: z.ZodNullable<z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>>;
    useAsFolder: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
    categoryUid: TagCategoryUid | null;
    useAsFolder: boolean;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
    categoryUid: TagCategoryUid | null;
    useAsFolder: boolean;
}>;
type Tag = z.infer<typeof TagSchema>;

declare const TagCategorySchema: z.ZodObject<{
    uid: z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>;
} & {
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagCategoryUid" | undefined;
    };
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "TagCategoryUid" | undefined;
    };
}>;
type TagCategory = z.infer<typeof TagCategorySchema>;

declare const SceneGameModeSchema: z.ZodEnum<["2d_vtt", "3d_vtt", "totm"]>;
type SceneGameMode = z.infer<typeof SceneGameModeSchema>;
declare const SceneSchema: z.ZodObject<{
    uid: z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>;
} & {
    name: z.ZodString;
} & {
    mapUid: z.ZodOptional<z.ZodNullable<z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>>>;
    backgroundUid: z.ZodOptional<z.ZodNullable<z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>>>;
    lightPositionX: z.ZodOptional<z.ZodNumber>;
    lightPositionY: z.ZodOptional<z.ZodNumber>;
    lightPositionZ: z.ZodOptional<z.ZodNumber>;
    lightIntensity: z.ZodOptional<z.ZodNumber>;
    lightColor: z.ZodOptional<z.ZodString>;
    useCustomLightPosition: z.ZodOptional<z.ZodBoolean>;
    indoorLight: z.ZodOptional<z.ZodBoolean>;
    weather: z.ZodOptional<z.ZodNullable<z.ZodEnum<["none", "fog", "dark"]>>>;
    gameMode: z.ZodOptional<z.ZodEnum<["2d_vtt", "3d_vtt", "totm"]>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneUid" | undefined;
    };
    mapUid?: SceneMapUid | null | undefined;
    backgroundUid?: SceneBackgroundUid | null | undefined;
    lightPositionX?: number | undefined;
    lightPositionY?: number | undefined;
    lightPositionZ?: number | undefined;
    lightIntensity?: number | undefined;
    lightColor?: string | undefined;
    useCustomLightPosition?: boolean | undefined;
    indoorLight?: boolean | undefined;
    weather?: "none" | "fog" | "dark" | null | undefined;
    gameMode?: "2d_vtt" | "3d_vtt" | "totm" | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneUid" | undefined;
    };
    mapUid?: SceneMapUid | null | undefined;
    backgroundUid?: SceneBackgroundUid | null | undefined;
    lightPositionX?: number | undefined;
    lightPositionY?: number | undefined;
    lightPositionZ?: number | undefined;
    lightIntensity?: number | undefined;
    lightColor?: string | undefined;
    useCustomLightPosition?: boolean | undefined;
    indoorLight?: boolean | undefined;
    weather?: "none" | "fog" | "dark" | null | undefined;
    gameMode?: "2d_vtt" | "3d_vtt" | "totm" | undefined;
}>;
type Scene = z.infer<typeof SceneSchema>;

declare const GridDataSchema: z.ZodObject<{
    type: z.ZodEnum<["square", "hexv", "hexh"]>;
    size: z.ZodNumber;
    sizeInUnit: z.ZodNumber;
    measureUnit: z.ZodString;
    lineWidth: z.ZodNumber;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    offset: z.ZodObject<{
        x: z.ZodNumber;
        z: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        x: number;
        z: number;
    }, {
        x: number;
        z: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "square" | "hexv" | "hexh";
    size: number;
    sizeInUnit: number;
    measureUnit: string;
    lineWidth: number;
    offset: {
        x: number;
        z: number;
    };
    color?: string | null | undefined;
}, {
    type: "square" | "hexv" | "hexh";
    size: number;
    sizeInUnit: number;
    measureUnit: string;
    lineWidth: number;
    offset: {
        x: number;
        z: number;
    };
    color?: string | null | undefined;
}>;
type GridData = z.infer<typeof GridDataSchema>;
declare const SceneMapBaseSchema: z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
}>;
type SceneMapBase = z.infer<typeof SceneMapBaseSchema>;
declare const CustomImageSceneMapSchema: z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"customImage">;
}, "strip", z.ZodTypeAny, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>;
type CustomImageSceneMap = z.infer<typeof CustomImageSceneMapSchema>;
declare const CustomVideoSceneMapSchema: z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
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
    type: z.ZodLiteral<"customVideo">;
}, "strip", z.ZodTypeAny, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>;
type CustomVideoSceneMap = z.infer<typeof CustomVideoSceneMapSchema>;
declare const Dd2VttSceneMapSchema: z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"dd2vtt">;
}, "strip", z.ZodTypeAny, {
    type: "dd2vtt";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "dd2vtt";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>;
type Dd2VttSceneMap = z.infer<typeof Dd2VttSceneMapSchema>;
declare const SceneMapSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"customImage">;
}, "strip", z.ZodTypeAny, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
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
    type: z.ZodLiteral<"customVideo">;
}, "strip", z.ZodTypeAny, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>;
} & {
    name: z.ZodString;
} & {
    grid: z.ZodObject<{
        type: z.ZodEnum<["square", "hexv", "hexh"]>;
        size: z.ZodNumber;
        sizeInUnit: z.ZodNumber;
        measureUnit: z.ZodString;
        lineWidth: z.ZodNumber;
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        offset: z.ZodObject<{
            x: z.ZodNumber;
            z: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            x: number;
            z: number;
        }, {
            x: number;
            z: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }, {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    }>;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"dd2vtt">;
}, "strip", z.ZodTypeAny, {
    type: "dd2vtt";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "dd2vtt";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneMapUid" | undefined;
    };
    grid: {
        type: "square" | "hexv" | "hexh";
        size: number;
        sizeInUnit: number;
        measureUnit: string;
        lineWidth: number;
        offset: {
            x: number;
            z: number;
        };
        color?: string | null | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>]>;
type SceneMap = z.infer<typeof SceneMapSchema>;

declare const SceneBackgroundBaseSchema: z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
}>;
type SceneBackgroundBase = z.infer<typeof SceneBackgroundBaseSchema>;
declare const CustomImageSceneBackgroundSchema: z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"customImage">;
}, "strip", z.ZodTypeAny, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>;
type CustomImageSceneBackground = z.infer<typeof CustomImageSceneBackgroundSchema>;
declare const CustomVideoSceneBackgroundSchema: z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
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
    type: z.ZodLiteral<"customVideo">;
}, "strip", z.ZodTypeAny, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>;
type CustomVideoSceneBackground = z.infer<typeof CustomVideoSceneBackgroundSchema>;
declare const SceneBackgroundSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"customImage">;
}, "strip", z.ZodTypeAny, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "customImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
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
    type: z.ZodLiteral<"customVideo">;
}, "strip", z.ZodTypeAny, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "customVideo";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>]>;
type SceneBackground = z.infer<typeof SceneBackgroundSchema>;

declare const AssetBaseSchema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
}>;
type AssetBase = z.infer<typeof AssetBaseSchema>;
declare const ImageAssetSchema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"image">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>;
type ImageAsset = z.infer<typeof ImageAssetSchema>;
declare const VideoAssetSchema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
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
    type: z.ZodLiteral<"video">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>;
type VideoAsset = z.infer<typeof VideoAssetSchema>;
declare const AudioAssetSchema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    audioUrl: z.ZodOptional<z.ZodString>;
    audioDurationSeconds: z.ZodOptional<z.ZodNumber>;
    audioExt: z.ZodOptional<z.ZodEnum<["mp3", "ogg"]>>;
} & {
    type: z.ZodLiteral<"audio">;
}, "strip", z.ZodTypeAny, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: "mp3" | "ogg" | undefined;
}, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: "mp3" | "ogg" | undefined;
}>;
type AudioAsset = z.infer<typeof AudioAssetSchema>;
declare const AudioExternalAssetSchema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"audio-external">;
    youtubeVideoId: z.ZodString;
    thumbnailUrl: z.ZodString;
    durationSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "audio-external";
    thumbnailUrl: string;
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    youtubeVideoId: string;
    durationSeconds: number;
}, {
    type: "audio-external";
    thumbnailUrl: string;
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    youtubeVideoId: string;
    durationSeconds: number;
}>;
type AudioExternalAsset = z.infer<typeof AudioExternalAssetSchema>;
declare const EntityAssetSchema: z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"entity">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}>;
type EntityAsset = z.infer<typeof EntityAssetSchema>;
declare const AssetSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"image">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    videoUrl: z.ZodOptional<z.ZodString>;
    videoDimensions: z.ZodOptional<z.ZodObject<{
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
    type: z.ZodLiteral<"video">;
    dimensions: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}, {
    type: "video";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    dimensions: {
        width: number;
        height: number;
    };
    videoUrl?: string | undefined;
    videoDimensions?: {
        width: number;
        height: number;
    } | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    audioUrl: z.ZodOptional<z.ZodString>;
    audioDurationSeconds: z.ZodOptional<z.ZodNumber>;
    audioExt: z.ZodOptional<z.ZodEnum<["mp3", "ogg"]>>;
} & {
    type: z.ZodLiteral<"audio">;
}, "strip", z.ZodTypeAny, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: "mp3" | "ogg" | undefined;
}, {
    type: "audio";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    audioUrl?: string | undefined;
    audioDurationSeconds?: number | undefined;
    audioExt?: "mp3" | "ogg" | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"audio-external">;
    youtubeVideoId: z.ZodString;
    thumbnailUrl: z.ZodString;
    durationSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "audio-external";
    thumbnailUrl: string;
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    youtubeVideoId: string;
    durationSeconds: number;
}, {
    type: "audio-external";
    thumbnailUrl: string;
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    youtubeVideoId: string;
    durationSeconds: number;
}>, z.ZodObject<{
    uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
} & {
    name: z.ZodString;
} & {
    type: z.ZodLiteral<"entity">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}, {
    type: "entity";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
}>]>;
type Asset = z.infer<typeof AssetSchema>;

declare const DialectFontSchema: z.ZodObject<{
    fontFamily: z.ZodString;
    fontUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    fontFamily: string;
    fontUrl: string;
}, {
    fontFamily: string;
    fontUrl: string;
}>;
type DialectFont = z.infer<typeof DialectFontSchema>;
declare const DialectSchema: z.ZodObject<{
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
    spokenByEntitiesUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
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
    spokenByEntitiesUids: EntityUid[];
    order?: number | undefined;
}>;
type Dialect = z.infer<typeof DialectSchema>;

export { AbilityEntitySchema, type Asset, type AssetBase, AssetBaseSchema, AssetSchema, type AssetUid, AssetUidSchema, type AudioAsset, AudioAssetSchema, type AudioExternalAsset, AudioExternalAssetSchema, BYPP_FORMAT_EXT, BYPP_FORMAT_VERSION, type BeyondPaper, BeyondPaperSchema, type BooleanVariable, BooleanVariableSchema, type Asset as ByppAsset, type AssetBase as ByppAssetBase, type CharacterEntity as ByppCharacterEntity, type Chunk as ByppChunk, type ChunkBase as ByppChunkBase, type ChunkGallery as ByppChunkGallery, type ChunkRandom as ByppChunkRandom, type ChunkText as ByppChunkText, type ChunkTextProxy as ByppChunkTextProxy, type CreatureEntity as ByppCreatureEntity, type Dataset as ByppDataset, type Dialect as ByppDialect, type DialectFont as ByppDialectFont, type Entity as ByppEntity, type EntityBase as ByppEntityBase, type GroupEntity as ByppGroupEntity, type GroupRank as ByppGroupRank, type GroupRankCharacter as ByppGroupRankCharacter, type Page as ByppPage, type PageEntity as ByppPageEntity, type PageStandard as ByppPageStandard, type PlaceEntity as ByppPlaceEntity, type RandomTable as ByppRandomTable, type RandomTableRow as ByppRandomTableRow, type Scene as ByppScene, type SceneBackground as ByppSceneBackground, type SceneBackgroundBase as ByppSceneBackgroundBase, type SceneMap as ByppSceneMap, type SceneMapBase as ByppSceneMapBase, type Tag as ByppTag, type TagCategory as ByppTagCategory, type Variable as ByppVariable, type VariableBase as ByppVariableBase, type Widget as ByppWidget, type WidgetBase as ByppWidgetBase, type CharacterEntity, CharacterEntitySchema, type ChoiceOption, ChoiceOptionSchema, type ChoiceVariable, ChoiceVariableSchema, type Chunk, type ChunkBase, ChunkBaseSchema, type ChunkBlockStyle, ChunkBlockStyleSchema, type ChunkGallery, ChunkGallerySchema, type ChunkHeadingLevel, ChunkHeadingLevelSchema, type ChunkHeadingMode, ChunkHeadingModeSchema, type ChunkRandom, ChunkRandomSchema, ChunkSchema, type ChunkText, type ChunkTextProxy, ChunkTextProxySchema, ChunkTextSchema, type ChunkUid, ChunkUidSchema, type CreatureEntity, CreatureEntitySchema, type CustomImageSceneBackground, CustomImageSceneBackgroundSchema, type CustomImageSceneMap, CustomImageSceneMapSchema, type CustomVideoSceneBackground, CustomVideoSceneBackgroundSchema, type CustomVideoSceneMap, CustomVideoSceneMapSchema, type Dataset, DatasetSchema, DatasetTargetSchema, type DatasetUid, DatasetUidSchema, type Dd2VttSceneMap, Dd2VttSceneMapSchema, type Dialect, type DialectFont, DialectFontSchema, DialectSchema, type DialectUid, DialectUidSchema, type Entity, type EntityAsset, EntityAssetSchema, type EntityBase, EntityBaseSchema, EntitySchema, type EntityType, EntityTypeSchema, type EntityUid, EntityUidSchema, EventEntitySchema, type FormulaVariable, FormulaVariableSchema, type GridData, GridDataSchema, type GroupEntity, GroupEntitySchema, type GroupRank, type GroupRankCharacter, GroupRankCharacterSchema, GroupRankSchema, type ImageAsset, ImageAssetSchema, type ImageDimensions, ImageDimensionsSchema, ItemEntitySchema, NoteEntitySchema, type NumberVariable, NumberVariableSchema, type Page, type PageEntity, PageEntitySchema, PageSchema, type PageStandard, PageStandardSchema, type PageUid, PageUidSchema, type PlaceEntity, PlaceEntitySchema, type RandomTable, type RandomTableRow, RandomTableRowSchema, type RandomTableRowUid, RandomTableRowUidSchema, RandomTableSchema, type RandomTableUid, RandomTableUidSchema, type RollVariable, RollVariableSchema, type Scene, type SceneBackground, type SceneBackgroundBase, SceneBackgroundBaseSchema, SceneBackgroundSchema, type SceneBackgroundUid, SceneBackgroundUidSchema, type SceneGameMode, SceneGameModeSchema, type SceneMap, type SceneMapBase, SceneMapBaseSchema, SceneMapSchema, type SceneMapUid, SceneMapUidSchema, SceneSchema, type SceneUid, SceneUidSchema, type SheetUid, SheetUidSchema, StoryEntitySchema, StyleSchema, type Tag, type TagCategory, TagCategorySchema, type TagCategoryUid, TagCategoryUidSchema, TagSchema, type TagUid, TagUidSchema, type TextVariable, TextVariableSchema, type Variable, type VariableBase, VariableBaseSchema, type VariableChoiceUid, VariableChoiceUidSchema, VariableDataValueSchema, VariableSchema, type VariableUid, VariableUidSchema, VariablesDataRecordSchema, type VideoAsset, VideoAssetSchema, type Widget, type WidgetBase, WidgetBaseSchema, type WidgetBigNumber, WidgetBigNumberSchema, type WidgetBulletList, WidgetBulletListSchema, type WidgetEmpty, WidgetEmptySchema, type WidgetInlineList, WidgetInlineListSchema, type WidgetPips, WidgetPipsSchema, type WidgetPlainText, WidgetPlainTextSchema, WidgetSchema, type WidgetToggle, WidgetToggleSchema, type WidgetUid, WidgetUidSchema, WithArchiveSchema, WithAreaSchema, WithAssetsSchema, WithAudioUrlsSchema, WithDataSchema, WithImagesUrlsSchema, WithNameSchema, WithPagesSchema, WithPositionSchema, WithScenesSchema, WithStyleSchema, WithVideoUrlsSchema };
