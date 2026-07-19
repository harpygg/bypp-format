import { z } from 'zod';
import { D as DialectUid, E as EntityUid, T as TagUid, a as DatasetUid, S as SheetUid, P as PageUid, V as VariableUid, b as VariableChoiceUid, A as AssetUid, c as SceneUid, C as ChunkUid, R as RandomTableUid, h as DataTableUid, i as DataTableColumnUid, j as DataTableRowUid, W as WidgetUid, d as RandomTableRowUid, e as TagCategoryUid, f as SceneMapUid, g as SceneBackgroundUid } from './variable.v7.schema-ClZin-IT.cjs';

declare const BeyondPaperV9Schema: z.ZodObject<{
    version: z.ZodLiteral<9>;
    format: z.ZodLiteral<"bypp">;
    name: z.ZodString;
    exportedAt: z.ZodString;
    bundleVersion: z.ZodString;
    license: z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>;
    licenseVersion: z.ZodLiteral<"4.0">;
    attribution: z.ZodObject<{
        authorName: z.ZodString;
        authorUrl: z.ZodOptional<z.ZodString>;
        sourceUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authorName: string;
        authorUrl?: string | undefined;
        sourceUrl?: string | undefined;
    }, {
        authorName: string;
        authorUrl?: string | undefined;
        sourceUrl?: string | undefined;
    }>;
    parentAttribution: z.ZodOptional<z.ZodObject<{
        bundleName: z.ZodString;
        authorName: z.ZodString;
        license: z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>;
        sourceUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authorName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        bundleName: string;
        sourceUrl?: string | undefined;
    }, {
        authorName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        bundleName: string;
        sourceUrl?: string | undefined;
    }>>;
    creatorLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dialects: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    entities: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    } & {
        data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    } & {
        assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        scenesUids?: SceneUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        isArchived: z.ZodDefault<z.ZodBoolean>;
    } & {
        pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    }>]>, "many">>;
    pages: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>]>, "many">>;
    chunks: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>]>, "many">>;
    datasets: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    variables: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    } & {
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        step: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        min?: number | undefined;
        max?: number | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
    }, {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        min?: number | undefined;
        max?: number | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
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
            icon: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }>, "many">>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        hasNumericValue: z.ZodOptional<z.ZodBoolean>;
        hasIcon: z.ZodOptional<z.ZodBoolean>;
        defaultOptionUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">>;
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
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
        defaultOptionUids?: VariableChoiceUid[] | undefined;
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
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
        defaultOptionUids?: VariableChoiceUid[] | undefined;
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
        type: z.ZodLiteral<"dataTableRef">;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    }, {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
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
        type: z.ZodLiteral<"dataTableLookup">;
        sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
    }, {
        type: "dataTableLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
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
        type: z.ZodLiteral<"image">;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    }, {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
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
        type: z.ZodLiteral<"dataTableDirectLookup">;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        rowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
        chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    }, {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    }>]>, "many">>;
    widgets: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"empty">;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }, {
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"bigNumber">;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
        unit: z.ZodOptional<z.ZodString>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    }, {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"plainText">;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }, {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"toggle">;
        toggleIconType: z.ZodOptional<z.ZodString>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    }, {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"bulletList">;
        listVisibility: z.ZodOptional<z.ZodString>;
        listStyleBulletBreakline: z.ZodOptional<z.ZodBoolean>;
        listStyleBulletType: z.ZodOptional<z.ZodString>;
        listStyleBulletGap: z.ZodOptional<z.ZodNumber>;
        listStyleBulletIconGap: z.ZodOptional<z.ZodNumber>;
        listOptionStyle: z.ZodOptional<z.ZodString>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"inlineList">;
        listStyleTextSeparator: z.ZodOptional<z.ZodString>;
        listVisibility: z.ZodOptional<z.ZodString>;
        listOptionStyle: z.ZodOptional<z.ZodString>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "inlineList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"pips">;
        icon: z.ZodOptional<z.ZodString>;
        gapX: z.ZodOptional<z.ZodNumber>;
        gapY: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "pips";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        max?: number | undefined;
        icon?: string | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    }, {
        type: "pips";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        max?: number | undefined;
        icon?: string | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"bar">;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
        unit: z.ZodOptional<z.ZodString>;
        orientation: z.ZodOptional<z.ZodEnum<["ltr", "rtl", "ttb", "btt"]>>;
        barColor: z.ZodOptional<z.ZodString>;
        bgColor: z.ZodOptional<z.ZodString>;
        showValue: z.ZodOptional<z.ZodBoolean>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "bar";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
    }, {
        type: "bar";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        type: z.ZodLiteral<"entityImage">;
        formatSlug: z.ZodOptional<z.ZodEnum<["original", "thumbnail", "square", "closeup"]>>;
        objectFit: z.ZodOptional<z.ZodEnum<["contain", "cover", "fill", "none", "scale-down"]>>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "entityImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
    }, {
        type: "entityImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
        name: z.ZodString;
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
        variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>;
    } & {
        type: z.ZodLiteral<"wheel">;
        readingPosition: z.ZodOptional<z.ZodString>;
        labelOrientation: z.ZodOptional<z.ZodString>;
        radius: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "wheel";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
    }, {
        type: "wheel";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
    }>]>, "many">>;
    sheets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>;
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        widgetUids: z.ZodDefault<z.ZodArray<z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>, "many">>;
        compatibleDatasetUid: z.ZodOptional<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>>;
    } & {
        styles: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
            borderWidth: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            }>>;
        } & {
            rotation: z.ZodOptional<z.ZodNumber>;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        }>>>>>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        widgetUids: WidgetUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        styles?: Record<string, {
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined> | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | undefined;
        widgetUids?: WidgetUid[] | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        styles?: Record<string, {
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined> | undefined;
    }>, "many">>;
    dataTables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>;
    } & {
        name: z.ZodRecord<z.ZodString, z.ZodString>;
    } & {
        icon: z.ZodOptional<z.ZodString>;
        weight: z.ZodOptional<z.ZodNumber>;
        adminOnly: z.ZodOptional<z.ZodBoolean>;
        sourceUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columns: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"number">;
            defaultNumber: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            type: "number";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultNumber?: number | undefined;
        }, {
            type: "number";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultNumber?: number | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"text">;
            maxChars: z.ZodOptional<z.ZodNumber>;
            defaultValue: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "text";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: string | undefined;
            maxChars?: number | undefined;
        }, {
            type: "text";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: string | undefined;
            maxChars?: number | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"boolean">;
            defaultBoolean: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "boolean";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultBoolean?: boolean | undefined;
        }, {
            type: "boolean";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultBoolean?: boolean | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"choice">;
            options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
                label: z.ZodString;
                icon: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }, {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }>, "many">>;
            isMultiple: z.ZodOptional<z.ZodBoolean>;
            hasNumericValue: z.ZodOptional<z.ZodBoolean>;
            hasIcon: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
        }, {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"icon">;
            defaultIcon: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "icon";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultIcon?: string | undefined;
        }, {
            type: "icon";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultIcon?: string | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"translatableText">;
            defaultValue: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            type: "translatableText";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: Record<string, string> | undefined;
        }, {
            type: "translatableText";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: Record<string, string> | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"dataTableRef">;
            dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
            labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
            valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
            iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
            isMultiple: z.ZodOptional<z.ZodBoolean>;
            defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: "dataTableRef";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            labelColumnUid?: DataTableColumnUid | undefined;
            valueColumnUid?: DataTableColumnUid | undefined;
            iconColumnUid?: DataTableColumnUid | undefined;
            defaultRowUids?: DataTableRowUid[] | undefined;
        }, {
            type: "dataTableRef";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            labelColumnUid?: DataTableColumnUid | undefined;
            valueColumnUid?: DataTableColumnUid | undefined;
            iconColumnUid?: DataTableColumnUid | undefined;
            defaultRowUids?: DataTableRowUid[] | undefined;
        }>, z.ZodObject<{
            uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
            label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            icon: z.ZodOptional<z.ZodString>;
            isMandatory: z.ZodOptional<z.ZodBoolean>;
        } & {
            type: z.ZodLiteral<"dataTableLookup">;
            sourceColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
            dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
            columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
            chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
            multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
            multiSeparator: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "dataTableLookup";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            sourceColumnUid?: DataTableColumnUid | undefined;
            columnUid?: DataTableColumnUid | undefined;
            chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
            multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
            multiSeparator?: string | undefined;
        }, {
            type: "dataTableLookup";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            sourceColumnUid?: DataTableColumnUid | undefined;
            columnUid?: DataTableColumnUid | undefined;
            chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
            multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
            multiSeparator?: string | undefined;
        }>]>, "many">>;
        rows: z.ZodDefault<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>;
            data: z.ZodOptional<z.ZodRecord<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>>>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "DataTableRowUid" | undefined;
            };
            data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "DataTableRowUid" | undefined;
            };
            data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: Record<string, string>;
        uid: string & {
            readonly __bypp_flavor?: "DataTableUid" | undefined;
        };
        columns: ({
            type: "number";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultNumber?: number | undefined;
        } | {
            type: "text";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: string | undefined;
            maxChars?: number | undefined;
        } | {
            type: "boolean";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultBoolean?: boolean | undefined;
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
        } | {
            type: "icon";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultIcon?: string | undefined;
        } | {
            type: "translatableText";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: Record<string, string> | undefined;
        } | {
            type: "dataTableRef";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            labelColumnUid?: DataTableColumnUid | undefined;
            valueColumnUid?: DataTableColumnUid | undefined;
            iconColumnUid?: DataTableColumnUid | undefined;
            defaultRowUids?: DataTableRowUid[] | undefined;
        } | {
            type: "dataTableLookup";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            sourceColumnUid?: DataTableColumnUid | undefined;
            columnUid?: DataTableColumnUid | undefined;
            chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
            multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
            multiSeparator?: string | undefined;
        })[];
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "DataTableRowUid" | undefined;
            };
            data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
        }[];
        icon?: string | undefined;
        weight?: number | undefined;
        adminOnly?: boolean | undefined;
        sourceUid?: DataTableUid | undefined;
    }, {
        name: Record<string, string>;
        uid: string & {
            readonly __bypp_flavor?: "DataTableUid" | undefined;
        };
        icon?: string | undefined;
        weight?: number | undefined;
        adminOnly?: boolean | undefined;
        sourceUid?: DataTableUid | undefined;
        columns?: ({
            type: "number";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultNumber?: number | undefined;
        } | {
            type: "text";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: string | undefined;
            maxChars?: number | undefined;
        } | {
            type: "boolean";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultBoolean?: boolean | undefined;
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
        } | {
            type: "icon";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultIcon?: string | undefined;
        } | {
            type: "translatableText";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: Record<string, string> | undefined;
        } | {
            type: "dataTableRef";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            labelColumnUid?: DataTableColumnUid | undefined;
            valueColumnUid?: DataTableColumnUid | undefined;
            iconColumnUid?: DataTableColumnUid | undefined;
            defaultRowUids?: DataTableRowUid[] | undefined;
        } | {
            type: "dataTableLookup";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            sourceColumnUid?: DataTableColumnUid | undefined;
            columnUid?: DataTableColumnUid | undefined;
            chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
            multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
            multiSeparator?: string | undefined;
        })[] | undefined;
        rows?: {
            uid: string & {
                readonly __bypp_flavor?: "DataTableRowUid" | undefined;
            };
            data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
        }[] | undefined;
    }>, "many">>;
    randomTables: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>;
        title: z.ZodString;
        rows: z.ZodDefault<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<RandomTableRowUid, z.ZodTypeDef, RandomTableRowUid>;
            range: z.ZodDefault<z.ZodNumber>;
            content: z.ZodString;
            randomTableRefs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<RandomTableUid, z.ZodTypeDef, RandomTableUid>>>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableRefs?: Record<string, RandomTableUid> | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range?: number | undefined;
            randomTableRefs?: Record<string, RandomTableUid> | undefined;
        }>, "many">>;
        diceFormula: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableRefs?: Record<string, RandomTableUid> | undefined;
        }[];
        title: string;
        diceFormula?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        diceFormula?: string | undefined;
        rows?: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range?: number | undefined;
            randomTableRefs?: Record<string, RandomTableUid> | undefined;
        }[] | undefined;
    }>, "many">>;
    tags: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
    } & {
        name: z.ZodString;
    } & {
        categoryUid: z.ZodOptional<z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>>;
        useAsFolder: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        useAsFolder: boolean;
        categoryUid?: TagCategoryUid | undefined;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        categoryUid?: TagCategoryUid | undefined;
        useAsFolder?: boolean | undefined;
    }>, "many">>;
    tagCategories: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    scenes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>;
    } & {
        name: z.ZodString;
    } & {
        mapUid: z.ZodOptional<z.ZodType<SceneMapUid, z.ZodTypeDef, SceneMapUid>>;
        backgroundUid: z.ZodOptional<z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>>;
        lightPositionX: z.ZodOptional<z.ZodNumber>;
        lightPositionY: z.ZodOptional<z.ZodNumber>;
        lightPositionZ: z.ZodOptional<z.ZodNumber>;
        lightIntensity: z.ZodOptional<z.ZodNumber>;
        lightColor: z.ZodOptional<z.ZodString>;
        useCustomLightPosition: z.ZodOptional<z.ZodBoolean>;
        indoorLight: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | undefined;
        backgroundUid?: SceneBackgroundUid | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | undefined;
        backgroundUid?: SceneBackgroundUid | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
    }>, "many">>;
    sceneMaps: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        sourceFormat: z.ZodOptional<z.ZodString>;
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
        sourceFormat?: string | undefined;
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
        sourceFormat?: string | undefined;
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
        sourceFormat: z.ZodOptional<z.ZodString>;
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
        sourceFormat?: string | undefined;
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
        sourceFormat?: string | undefined;
    }>]>, "many">>;
    sceneBackgrounds: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
    } & {
        name: z.ZodString;
    } & {
        opacity: z.ZodOptional<z.ZodNumber>;
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
        opacity?: number | undefined;
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
        opacity?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
    } & {
        name: z.ZodString;
    } & {
        opacity: z.ZodOptional<z.ZodNumber>;
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
        opacity?: number | undefined;
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
        opacity?: number | undefined;
    }>]>, "many">>;
    assets: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        audioExt: z.ZodOptional<z.ZodString>;
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
        audioExt?: string | undefined;
    }, {
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        type: z.ZodLiteral<"audio-external">;
        provider: z.ZodString;
        externalId: z.ZodString;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        durationSeconds: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "audio-external";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        provider: string;
        externalId: string;
        thumbnailUrl?: string | undefined;
        durationSeconds?: number | undefined;
    }, {
        type: "audio-external";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        provider: string;
        externalId: string;
        thumbnailUrl?: string | undefined;
        durationSeconds?: number | undefined;
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
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    version: 9;
    format: "bypp";
    exportedAt: string;
    bundleVersion: string;
    licenseVersion: "4.0";
    attribution: {
        authorName: string;
        authorUrl?: string | undefined;
        sourceUrl?: string | undefined;
    };
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
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
        tagsUid: TagUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
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
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
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
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
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
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    } | {
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
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
        defaultOptionUids?: VariableChoiceUid[] | undefined;
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
    } | {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "dataTableLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
    } | {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    } | {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        min?: number | undefined;
        max?: number | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
    })[];
    widgets: ({
        type: "wheel";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
    } | {
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    } | {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    } | {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
        max?: number | undefined;
        icon?: string | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    } | {
        type: "bar";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
    } | {
        type: "entityImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
    })[];
    sheets: {
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        widgetUids: WidgetUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        styles?: Record<string, {
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined> | undefined;
    }[];
    dataTables: {
        name: Record<string, string>;
        uid: string & {
            readonly __bypp_flavor?: "DataTableUid" | undefined;
        };
        columns: ({
            type: "number";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultNumber?: number | undefined;
        } | {
            type: "text";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: string | undefined;
            maxChars?: number | undefined;
        } | {
            type: "boolean";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultBoolean?: boolean | undefined;
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
        } | {
            type: "icon";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultIcon?: string | undefined;
        } | {
            type: "translatableText";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: Record<string, string> | undefined;
        } | {
            type: "dataTableRef";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            labelColumnUid?: DataTableColumnUid | undefined;
            valueColumnUid?: DataTableColumnUid | undefined;
            iconColumnUid?: DataTableColumnUid | undefined;
            defaultRowUids?: DataTableRowUid[] | undefined;
        } | {
            type: "dataTableLookup";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            sourceColumnUid?: DataTableColumnUid | undefined;
            columnUid?: DataTableColumnUid | undefined;
            chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
            multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
            multiSeparator?: string | undefined;
        })[];
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "DataTableRowUid" | undefined;
            };
            data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
        }[];
        icon?: string | undefined;
        weight?: number | undefined;
        adminOnly?: boolean | undefined;
        sourceUid?: DataTableUid | undefined;
    }[];
    randomTables: {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableRefs?: Record<string, RandomTableUid> | undefined;
        }[];
        title: string;
        diceFormula?: string | undefined;
    }[];
    tags: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        useAsFolder: boolean;
        categoryUid?: TagCategoryUid | undefined;
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
        mapUid?: SceneMapUid | undefined;
        backgroundUid?: SceneBackgroundUid | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
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
        sourceFormat?: string | undefined;
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
        sourceFormat?: string | undefined;
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
        opacity?: number | undefined;
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
        opacity?: number | undefined;
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
        audioExt?: string | undefined;
    } | {
        type: "audio-external";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        provider: string;
        externalId: string;
        thumbnailUrl?: string | undefined;
        durationSeconds?: number | undefined;
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
    parentAttribution?: {
        authorName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        bundleName: string;
        sourceUrl?: string | undefined;
    } | undefined;
    creatorLinks?: string[] | undefined;
}, {
    name: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    version: 9;
    format: "bypp";
    exportedAt: string;
    bundleVersion: string;
    licenseVersion: "4.0";
    attribution: {
        authorName: string;
        authorUrl?: string | undefined;
        sourceUrl?: string | undefined;
    };
    parentAttribution?: {
        authorName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        bundleName: string;
        sourceUrl?: string | undefined;
    } | undefined;
    creatorLinks?: string[] | undefined;
    dialects?: {
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
    }[] | undefined;
    entities?: ({
        type: "character";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "creature";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "group";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
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
    } | {
        type: "place";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        scenesUids?: SceneUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "item";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "note";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "ability";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "story";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    } | {
        type: "event";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        assetUids?: AssetUid[] | undefined;
        data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
        isArchived?: boolean | undefined;
        pagesOrder?: PageUid[] | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        tagsUid?: TagUid[] | undefined;
        sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    })[] | undefined;
    pages?: ({
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
    })[] | undefined;
    chunks?: ({
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
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 1 | 2 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
        assetUids?: AssetUid[] | undefined;
    } | {
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
    })[] | undefined;
    datasets?: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "DatasetUid" | undefined;
        };
        weight?: number | undefined;
        targets?: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[] | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sheetUid?: SheetUid | undefined;
    }[] | undefined;
    variables?: ({
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
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
        defaultOptionUids?: VariableChoiceUid[] | undefined;
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
    } | {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "dataTableLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
    } | {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    } | {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        min?: number | undefined;
        max?: number | undefined;
        label?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
    })[] | undefined;
    widgets?: ({
        type: "wheel";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
    } | {
        type: "empty";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "bigNumber";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
    } | {
        type: "plainText";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
    } | {
        type: "toggle";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
    } | {
        type: "bulletList";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
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
        max?: number | undefined;
        icon?: string | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
    } | {
        type: "bar";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
    } | {
        type: "entityImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined;
        area?: {
            width: number;
            height: number;
        } | null | undefined;
        position?: {
            left: number;
            top: number;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
    })[] | undefined;
    sheets?: {
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | undefined;
        widgetUids?: WidgetUid[] | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        styles?: Record<string, {
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
            borderWidth?: number | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
        } | null | undefined> | undefined;
    }[] | undefined;
    dataTables?: {
        name: Record<string, string>;
        uid: string & {
            readonly __bypp_flavor?: "DataTableUid" | undefined;
        };
        icon?: string | undefined;
        weight?: number | undefined;
        adminOnly?: boolean | undefined;
        sourceUid?: DataTableUid | undefined;
        columns?: ({
            type: "number";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultNumber?: number | undefined;
        } | {
            type: "text";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: string | undefined;
            maxChars?: number | undefined;
        } | {
            type: "boolean";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultBoolean?: boolean | undefined;
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: string;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
        } | {
            type: "icon";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultIcon?: string | undefined;
        } | {
            type: "translatableText";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            defaultValue?: Record<string, string> | undefined;
        } | {
            type: "dataTableRef";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            labelColumnUid?: DataTableColumnUid | undefined;
            valueColumnUid?: DataTableColumnUid | undefined;
            iconColumnUid?: DataTableColumnUid | undefined;
            defaultRowUids?: DataTableRowUid[] | undefined;
        } | {
            type: "dataTableLookup";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            dataTableUid?: DataTableUid | undefined;
            sourceColumnUid?: DataTableColumnUid | undefined;
            columnUid?: DataTableColumnUid | undefined;
            chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
            multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
            multiSeparator?: string | undefined;
        })[] | undefined;
        rows?: {
            uid: string & {
                readonly __bypp_flavor?: "DataTableRowUid" | undefined;
            };
            data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
        }[] | undefined;
    }[] | undefined;
    randomTables?: {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        diceFormula?: string | undefined;
        rows?: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range?: number | undefined;
            randomTableRefs?: Record<string, RandomTableUid> | undefined;
        }[] | undefined;
    }[] | undefined;
    tags?: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        categoryUid?: TagCategoryUid | undefined;
        useAsFolder?: boolean | undefined;
    }[] | undefined;
    tagCategories?: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
    }[] | undefined;
    scenes?: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneUid" | undefined;
        };
        mapUid?: SceneMapUid | undefined;
        backgroundUid?: SceneBackgroundUid | undefined;
        lightPositionX?: number | undefined;
        lightPositionY?: number | undefined;
        lightPositionZ?: number | undefined;
        lightIntensity?: number | undefined;
        lightColor?: string | undefined;
        useCustomLightPosition?: boolean | undefined;
        indoorLight?: boolean | undefined;
    }[] | undefined;
    sceneMaps?: ({
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
        sourceFormat?: string | undefined;
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
        sourceFormat?: string | undefined;
    })[] | undefined;
    sceneBackgrounds?: ({
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        opacity?: number | undefined;
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
        opacity?: number | undefined;
    })[] | undefined;
    assets?: ({
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
        audioExt?: string | undefined;
    } | {
        type: "audio-external";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        provider: string;
        externalId: string;
        thumbnailUrl?: string | undefined;
        durationSeconds?: number | undefined;
    } | {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
    })[] | undefined;
}>;
type BeyondPaperV9 = z.infer<typeof BeyondPaperV9Schema>;

/**
 * Entity base — v2 changes:
 *  - `displayName` is `.optional()` (was `.nullable()`). Omit the field
 *    when no override; readers fall back to `name`.
 *  - `description` is `.optional()` for the same reason.
 *  - `tagsUid` defaults to `[]`.
 *  - `isArchived` (via `WithArchiveV2Schema`) defaults to `false`.
 *  - `pagesOrder` (via `WithPagesV2Schema`) defaults to `[]`.
 *  - Image URLs go through `WithImagesUrlsV2Schema` (url-validated).
 *
 * `EntityTypeV1Schema` and `GroupRankV1Schema` are re-used from v1 —
 * the entity taxonomy and group rank shapes are unchanged.
 */
declare const EntityBaseV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type EntityBaseV2 = z.infer<typeof EntityBaseV2Schema>;
declare const CharacterEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type CharacterEntityV2 = z.infer<typeof CharacterEntityV2Schema>;
declare const CreatureEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type CreatureEntityV2 = z.infer<typeof CreatureEntityV2Schema>;
declare const GroupEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
}>;
type GroupEntityV2 = z.infer<typeof GroupEntityV2Schema>;
declare const PlaceEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    scenesUids?: SceneUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type PlaceEntityV2 = z.infer<typeof PlaceEntityV2Schema>;
declare const ItemEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const NoteEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const AbilityEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const StoryEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const EventEntityV2Schema: z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
declare const EntityV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    scenesUids?: SceneUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    isArchived: z.ZodDefault<z.ZodBoolean>;
} & {
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
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
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
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
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>]>;
type EntityV2 = z.infer<typeof EntityV2Schema>;

/**
 * Scene background — v2 changes: switched to `WithImagesUrlsV2Schema` /
 * `WithVideoUrlsV2Schema` for URL validation. Shape unchanged otherwise.
 */
declare const SceneBackgroundBaseV2Schema: z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    opacity: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    opacity?: number | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
    };
    opacity?: number | undefined;
}>;
type SceneBackgroundBaseV2 = z.infer<typeof SceneBackgroundBaseV2Schema>;
declare const CustomImageSceneBackgroundV2Schema: z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    opacity: z.ZodOptional<z.ZodNumber>;
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
    opacity?: number | undefined;
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
    opacity?: number | undefined;
}>;
type CustomImageSceneBackgroundV2 = z.infer<typeof CustomImageSceneBackgroundV2Schema>;
declare const CustomVideoSceneBackgroundV2Schema: z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    opacity: z.ZodOptional<z.ZodNumber>;
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
    opacity?: number | undefined;
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
    opacity?: number | undefined;
}>;
type CustomVideoSceneBackgroundV2 = z.infer<typeof CustomVideoSceneBackgroundV2Schema>;
declare const SceneBackgroundV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    opacity: z.ZodOptional<z.ZodNumber>;
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
    opacity?: number | undefined;
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
    opacity?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<SceneBackgroundUid, z.ZodTypeDef, SceneBackgroundUid>;
} & {
    name: z.ZodString;
} & {
    opacity: z.ZodOptional<z.ZodNumber>;
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
    opacity?: number | undefined;
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
    opacity?: number | undefined;
}>]>;
type SceneBackgroundV2 = z.infer<typeof SceneBackgroundV2Schema>;

/**
 * Well-known VTT exchange formats producers may have sourced a
 * customImage / customVideo scene map from. Use this as a discovery aid;
 * the wire field is just `z.string()` so the format stays open.
 *
 *  - `dd2vtt` — DungeonDraft VTT export
 *  - `uvtt`   — Universal VTT (open spec)
 *  - `fvtt`   — Foundry VTT scene export
 */
declare const KNOWN_VTT_SOURCE_FORMATS: readonly ["dd2vtt", "uvtt", "fvtt"];
type KnownVttSourceFormat = (typeof KNOWN_VTT_SOURCE_FORMATS)[number];
/**
 * Scene map — v2 changes:
 *  - `Dd2VttSceneMapV1Schema` discriminator variant removed. The DD2VTT
 *    files are still importable, but they collapse into `customImage`
 *    (or `customVideo`) with the new orthogonal `sourceFormat` annotation
 *    set to `"dd2vtt"`. This keeps the discriminator clean (just two
 *    visual kinds: image vs. video) and lets new source formats join
 *    without bumping the union every time.
 */
declare const SceneMapBaseV2Schema: z.ZodObject<{
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
    sourceFormat: z.ZodOptional<z.ZodString>;
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
    sourceFormat?: string | undefined;
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
    sourceFormat?: string | undefined;
}>;
type SceneMapBaseV2 = z.infer<typeof SceneMapBaseV2Schema>;
declare const CustomImageSceneMapV2Schema: z.ZodObject<{
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
    sourceFormat: z.ZodOptional<z.ZodString>;
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
    sourceFormat?: string | undefined;
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
    sourceFormat?: string | undefined;
}>;
type CustomImageSceneMapV2 = z.infer<typeof CustomImageSceneMapV2Schema>;
declare const CustomVideoSceneMapV2Schema: z.ZodObject<{
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
    sourceFormat: z.ZodOptional<z.ZodString>;
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
    sourceFormat?: string | undefined;
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
    sourceFormat?: string | undefined;
}>;
type CustomVideoSceneMapV2 = z.infer<typeof CustomVideoSceneMapV2Schema>;
declare const SceneMapV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    sourceFormat: z.ZodOptional<z.ZodString>;
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
    sourceFormat?: string | undefined;
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
    sourceFormat?: string | undefined;
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
    sourceFormat: z.ZodOptional<z.ZodString>;
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
    sourceFormat?: string | undefined;
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
    sourceFormat?: string | undefined;
}>]>;
type SceneMapV2 = z.infer<typeof SceneMapV2Schema>;

declare const SheetV5Schema: z.ZodObject<{
    uid: z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    widgetUids: z.ZodDefault<z.ZodArray<z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>, "many">>;
    compatibleDatasetUid: z.ZodOptional<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>>;
} & {
    styles: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        borderWidth: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
        }>>;
    } & {
        rotation: z.ZodOptional<z.ZodNumber>;
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    }>>>>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "SheetUid" | undefined;
    };
    widgetUids: WidgetUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    name?: string | undefined;
    compatibleDatasetUid?: DatasetUid | undefined;
    styles?: Record<string, {
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    } | null | undefined> | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "SheetUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    name?: string | undefined;
    widgetUids?: WidgetUid[] | undefined;
    compatibleDatasetUid?: DatasetUid | undefined;
    styles?: Record<string, {
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "cover" | "contain" | "none" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    } | null | undefined> | undefined;
}>;
type SheetV5 = z.infer<typeof SheetV5Schema>;

export { AbilityEntityV2Schema as A, type BeyondPaperV9 as B, type CharacterEntityV2 as C, type SheetV5 as D, type EntityBaseV2 as E, SheetV5Schema as F, type GroupEntityV2 as G, StoryEntityV2Schema as H, ItemEntityV2Schema as I, KNOWN_VTT_SOURCE_FORMATS as K, NoteEntityV2Schema as N, type PlaceEntityV2 as P, type SceneBackgroundBaseV2 as S, BeyondPaperV9Schema as a, type SceneMapBaseV2 as b, CharacterEntityV2Schema as c, type CreatureEntityV2 as d, CreatureEntityV2Schema as e, type CustomImageSceneBackgroundV2 as f, CustomImageSceneBackgroundV2Schema as g, type CustomImageSceneMapV2 as h, CustomImageSceneMapV2Schema as i, type CustomVideoSceneBackgroundV2 as j, CustomVideoSceneBackgroundV2Schema as k, type CustomVideoSceneMapV2 as l, CustomVideoSceneMapV2Schema as m, EntityBaseV2Schema as n, type EntityV2 as o, EntityV2Schema as p, EventEntityV2Schema as q, GroupEntityV2Schema as r, type KnownVttSourceFormat as s, PlaceEntityV2Schema as t, SceneBackgroundBaseV2Schema as u, type SceneBackgroundV2 as v, SceneBackgroundV2Schema as w, SceneMapBaseV2Schema as x, type SceneMapV2 as y, SceneMapV2Schema as z };
