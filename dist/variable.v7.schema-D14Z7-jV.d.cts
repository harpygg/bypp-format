import { z } from 'zod';

declare const CcLicenseV3Schema: z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>;
type CcLicenseV3 = z.infer<typeof CcLicenseV3Schema>;
declare const AttributionV3Schema: z.ZodObject<{
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
type AttributionV3 = z.infer<typeof AttributionV3Schema>;
declare const ParentAttributionV3Schema: z.ZodObject<{
    artifactName: z.ZodString;
    authorName: z.ZodString;
    license: z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>;
    sourceUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    authorName: string;
    artifactName: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    sourceUrl?: string | undefined;
}, {
    authorName: string;
    artifactName: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    sourceUrl?: string | undefined;
}>;
type ParentAttributionV3 = z.infer<typeof ParentAttributionV3Schema>;
declare const BeyondPaperV3Schema: z.ZodObject<{
    version: z.ZodLiteral<3>;
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
        artifactName: z.ZodString;
        authorName: z.ZodString;
        license: z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>;
        sourceUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        authorName: string;
        artifactName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        sourceUrl?: string | undefined;
    }, {
        authorName: string;
        artifactName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        sourceUrl?: string | undefined;
    }>>;
    creatorLinks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    }, {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        min?: number | undefined;
        max?: number | undefined;
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
        icon: z.ZodOptional<z.ZodString>;
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
        max?: number | undefined;
        icon?: string | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
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
        type: z.ZodLiteral<"bar">;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
        unit: z.ZodOptional<z.ZodString>;
        orientation: z.ZodOptional<z.ZodEnum<["ltr", "rtl", "ttb", "btt"]>>;
        barColor: z.ZodOptional<z.ZodString>;
        bgColor: z.ZodOptional<z.ZodString>;
        showValue: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "bar";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
    }>]>, "many">;
    sheets: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        widgetUids: z.ZodArray<z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>, "many">;
        compatibleDatasetUid: z.ZodOptional<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        widgetUids: WidgetUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | null | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        widgetUids: WidgetUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | null | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
    }>, "many">;
    dataTables: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>;
    } & {
        name: z.ZodRecord<z.ZodString, z.ZodString>;
    } & {
        icon: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        weight: z.ZodOptional<z.ZodNumber>;
        adminOnly: z.ZodOptional<z.ZodBoolean>;
        sourceUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columns: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        }>]>, "many">;
        rows: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
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
        icon?: string | null | undefined;
        weight?: number | undefined;
        adminOnly?: boolean | undefined;
        sourceUid?: DataTableUid | undefined;
    }, {
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
        icon?: string | null | undefined;
        weight?: number | undefined;
        adminOnly?: boolean | undefined;
        sourceUid?: DataTableUid | undefined;
    }>, "many">;
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
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }[];
        title: string;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        rows: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            range: number;
            randomTableUid?: RandomTableUid | undefined;
        }[];
        title: string;
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
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    version: 3;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        min?: number | undefined;
        max?: number | undefined;
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
        max?: number | undefined;
        icon?: string | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
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
        name?: string | null | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
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
        icon?: string | null | undefined;
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
            randomTableUid?: RandomTableUid | undefined;
        }[];
        title: string;
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
    parentAttribution?: {
        authorName: string;
        artifactName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        sourceUrl?: string | undefined;
    } | undefined;
    creatorLinks?: string[] | undefined;
}, {
    name: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    version: 3;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
        headingMode?: "inside" | "outside" | null | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | null | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | null | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | null | undefined;
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
        min?: number | undefined;
        max?: number | undefined;
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
        max?: number | undefined;
        icon?: string | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
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
        name?: string | null | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
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
        icon?: string | null | undefined;
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
            randomTableUid?: RandomTableUid | undefined;
        }[];
        title: string;
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
    parentAttribution?: {
        authorName: string;
        artifactName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        sourceUrl?: string | undefined;
    } | undefined;
    creatorLinks?: string[] | undefined;
}>;
type BeyondPaperV3 = z.infer<typeof BeyondPaperV3Schema>;

/**
 * Parent-bundle attribution — v4 renames `artifactName` to `bundleName`
 * for vocabulary consistency with the rest of the format.
 */
declare const ParentAttributionV4Schema: z.ZodObject<{
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
}>;
type ParentAttributionV4 = z.infer<typeof ParentAttributionV4Schema>;
declare const BeyondPaperV4Schema: z.ZodObject<{
    version: z.ZodLiteral<4>;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    }, {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
    }>]>, "many">>;
    widgets: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
        min?: number | undefined;
        max?: number | undefined;
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
        icon: z.ZodOptional<z.ZodString>;
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
        max?: number | undefined;
        icon?: string | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
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
        type: z.ZodLiteral<"bar">;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
        unit: z.ZodOptional<z.ZodString>;
        orientation: z.ZodOptional<z.ZodEnum<["ltr", "rtl", "ttb", "btt"]>>;
        barColor: z.ZodOptional<z.ZodString>;
        bgColor: z.ZodOptional<z.ZodString>;
        showValue: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "bar";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "WidgetUid" | undefined;
        };
        min?: number | undefined;
        max?: number | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
    }>]>, "many">>;
    sheets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
    } & {
        name: z.ZodOptional<z.ZodString>;
        widgetUids: z.ZodDefault<z.ZodArray<z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>, "many">>;
        compatibleDatasetUid: z.ZodOptional<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>>;
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
            randomTableUid?: RandomTableUid | undefined;
            range?: number | undefined;
        }>, "many">>;
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
            randomTableUid?: RandomTableUid | undefined;
        }[];
        title: string;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "RandomTableUid" | undefined;
        };
        title: string;
        rows?: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            randomTableUid?: RandomTableUid | undefined;
            range?: number | undefined;
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
    version: 4;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        assetUids: AssetUid[];
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        min?: number | undefined;
        max?: number | undefined;
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
        max?: number | undefined;
        icon?: string | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
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
            randomTableUid?: RandomTableUid | undefined;
        }[];
        title: string;
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
    version: 4;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    } | {
        type: "gallery";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
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
    })[] | undefined;
    widgets?: ({
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
        min?: number | undefined;
        max?: number | undefined;
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
        max?: number | undefined;
        icon?: string | undefined;
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
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
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
        rows?: {
            uid: string & {
                readonly __bypp_flavor?: "RandomTableRowUid" | undefined;
            };
            content: string;
            randomTableUid?: RandomTableUid | undefined;
            range?: number | undefined;
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
type BeyondPaperV4 = z.infer<typeof BeyondPaperV4Schema>;

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
type DataTableUid = Flavor<"DataTableUid">;
type DataTableRowUid = Flavor<"DataTableRowUid">;
type DataTableColumnUid = Flavor<"DataTableColumnUid">;
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
declare const DataTableUidSchema: z.ZodType<DataTableUid>;
declare const DataTableRowUidSchema: z.ZodType<DataTableRowUid>;
declare const DataTableColumnUidSchema: z.ZodType<DataTableColumnUid>;

/**
 * CSS-like styling for a widget (or any item that supports inline style) —
 * **v2**, a superset of v1.
 *
 * v2 adds, on top of the v1 whitelist:
 *  - the `border*` group (width / style / color / radius), and
 *  - `background` — a background image referencing a bundle asset, with a
 *    CSS `object-fit`.
 *
 * As in v1 this is intentionally a curated subset of CSS — new style
 * properties are added version by version, never removed.
 *
 * This file MUST NOT be modified once shipped.
 */
/**
 * CSS `object-fit` keyword — how an image fills its box. Shared by the
 * background image here and (from widget v6) the entity-image widget.
 */
declare const ObjectFitV6Schema: z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>;
type ObjectFitV6 = z.infer<typeof ObjectFitV6Schema>;
/**
 * A background image drawn behind the item. `assetUid` references an image
 * entry in the bundle's top-level `assets[]`; `objectFit` controls how it
 * fills the box (defaults to `cover` when absent).
 */
declare const WidgetBackgroundV6Schema: z.ZodObject<{
    assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
}, "strip", z.ZodTypeAny, {
    assetUid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
}, {
    assetUid: string & {
        readonly __bypp_flavor?: "AssetUid" | undefined;
    };
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
}>;
type WidgetBackgroundV6 = z.infer<typeof WidgetBackgroundV6Schema>;
declare const StyleV2Schema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    }, {
        assetUid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    }>>;
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
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    } | undefined;
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
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    } | undefined;
}>>>;
type StyleV2 = z.infer<typeof StyleV2Schema>;
/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
declare const WithStyleV2Schema: z.ZodObject<{
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
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
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
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
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
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
    } | null | undefined;
}>;

/**
 * CSS-like styling — **v3**, a superset of v2.
 *
 * v3 adds one property on top of the v2 whitelist:
 *  - `rotation` — a visual tilt of the whole item, in degrees. Like every
 *    other style property it cascades (global → widget-type → instance).
 *
 * Every v2 field is reused as-is: `StyleV2Schema` is
 * `nullable().optional()`, so it's unwrapped twice to reach the inner object
 * before extending. v3 stays a strict superset — no v2 field is redefined.
 *
 * This file MUST NOT be modified once shipped.
 */
declare const StyleV3Schema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    }, {
        assetUid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    } | undefined;
    rotation?: number | undefined;
}>>>;
type StyleV3 = z.infer<typeof StyleV3Schema>;
/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
declare const WithStyleV3Schema: z.ZodObject<{
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
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
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
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    } | null | undefined;
}>;

/**
 * A "standard" page — a named document made of an ordered list of chunks
 * (text blocks, galleries, random tables…).
 *
 * The actual chunk content lives in the bundle's top-level `chunks[]`
 * array. `chunksOrder` references them by uid in display order.
 *
 * Pages are referenced from elsewhere in the bundle by uid (e.g. via
 * `WithPagesV1Schema`) — they don't carry their own ownership info.
 */
declare const PageStandardV1Schema: z.ZodObject<{
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
type PageStandardV1 = z.infer<typeof PageStandardV1Schema>;
/**
 * An "entity" page — a virtual page that's actually a window onto an
 * entity. When the reader renders it, it shows the target entity's sheet
 * / dataset view instead of standalone chunks.
 *
 * Used to embed an entity (a character, a place, …) into a navigable
 * page hierarchy without duplicating its content.
 */
declare const PageEntityV1Schema: z.ZodObject<{
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
type PageEntityV1 = z.infer<typeof PageEntityV1Schema>;
/**
 * Discriminated union of all page types. Readers narrow with `page.type`
 * to access the per-type fields.
 */
declare const PageV1Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
type PageV1 = z.infer<typeof PageV1Schema>;

/**
 * Tactical grid overlaid on top of a scene's map. Drives token placement
 * and movement at the table.
 *
 * Fields:
 *  - `type` — `square` (axis-aligned squares), `hexv` (vertical-pointy
 *    hexes — flat top), or `hexh` (horizontal-pointy hexes — pointy top).
 *  - `size` — cell size in pixels (the on-screen distance between two
 *    adjacent grid intersections).
 *  - `sizeInUnit` — cell size in the game's measurement unit (e.g.
 *    `5` for 5 feet per square in D&D-like systems).
 *  - `measureUnit` — the unit name (e.g. `"ft"`, `"m"`).
 *  - `lineWidth` — pixel width of the grid lines when rendered.
 *  - `color` — grid line color as a CSS string. `null` means "use the
 *    reader's default".
 *  - `offset` — pixel offset of the grid's origin from the map's
 *    top-left, lets producers align the grid to a non-zero anchor point
 *    on their map image.
 */
declare const GridDataV1Schema: z.ZodObject<{
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
type GridDataV1 = z.infer<typeof GridDataV1Schema>;
/**
 * Common fields for every scene-map variant. The `grid` is always
 * present — even mapless / featureless backdrops carry a grid (it might
 * just be invisible to players).
 */
declare const SceneMapBaseV1Schema: z.ZodObject<{
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
type SceneMapBaseV1 = z.infer<typeof SceneMapBaseV1Schema>;
/**
 * A static image used as a scene map. The image URLs come from the
 * standard image-URLs mixin (multiple crops available).
 */
declare const CustomImageSceneMapV1Schema: z.ZodObject<{
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
type CustomImageSceneMapV1 = z.infer<typeof CustomImageSceneMapV1Schema>;
/**
 * A looping video used as a scene map (animated environments — flowing
 * water, fire, parallax skies, …).
 */
declare const CustomVideoSceneMapV1Schema: z.ZodObject<{
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
type CustomVideoSceneMapV1 = z.infer<typeof CustomVideoSceneMapV1Schema>;
/**
 * A scene map sourced from a DungeonDraft VTT file (.dd2vtt). Carries the
 * baked-in image URLs (the .dd2vtt format embeds an image plus lights /
 * walls metadata — readers may use the image only here, deferring the
 * advanced metadata to a future schema bump).
 */
declare const Dd2VttSceneMapV1Schema: z.ZodObject<{
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
type Dd2VttSceneMapV1 = z.infer<typeof Dd2VttSceneMapV1Schema>;
/**
 * Discriminated union of all scene-map variants. Narrow with `map.type`.
 */
declare const SceneMapV1Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
type SceneMapV1 = z.infer<typeof SceneMapV1Schema>;

/**
 * A tag category — a named bucket that groups related tags together (e.g.
 * "Races", "Classes", "Locations"). Categories themselves carry no data
 * beyond their name; the grouping happens via tags pointing back through
 * `tag.categoryUid`.
 */
declare const TagCategoryV1Schema: z.ZodObject<{
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
type TagCategoryV1 = z.infer<typeof TagCategoryV1Schema>;

/**
 * Entity image renditions — introduced in bypp **v5**.
 *
 * This is the SINGLE SOURCE OF TRUTH for "which image of an entity". Each
 * rendition `X` corresponds 1:1 to the `${X}Url` field carried by the
 * entity image mixin (`WithImagesUrlsV2Schema`):
 *
 *   original  → originalUrl
 *   thumbnail → thumbnailUrl
 *   square    → squareUrl
 *   closeup   → closeupUrl
 *
 * It lives here (next to the entity image model, not on the widget) so the
 * `entityImage` widget's `formatSlug` stays tied to the entity image model:
 * adding a rendition updates the widget's options automatically, and the
 * compile-time assertion below stops the two from drifting apart.
 *
 * This file MUST NOT be modified once shipped.
 */

/** The canonical entity image renditions. Order is not significant. */
declare const ENTITY_IMAGE_RENDITIONS: readonly ["original", "thumbnail", "square", "closeup"];
declare const EntityImageFormatV5Schema: z.ZodEnum<["original", "thumbnail", "square", "closeup"]>;
type EntityImageFormatV5 = z.infer<typeof EntityImageFormatV5Schema>;

/**
 * CSS `object-fit` keyword controlling how the entity image fills the
 * widget box. (A widget rendering concern, unlike `formatSlug` which is an
 * entity image rendition — see `entity-image-format.v5.schema.ts`.)
 */
declare const EntityImageObjectFitV5Schema: z.ZodEnum<["contain", "cover", "fill", "none", "scale-down"]>;
type EntityImageObjectFitV5 = z.infer<typeof EntityImageObjectFitV5Schema>;
/**
 * Renders the bound entity's image. `formatSlug` picks the rendition,
 * `objectFit` controls how it fills the widget box. Both optional —
 * a bare `{ type: "entityImage" }` is valid (reader picks defaults).
 */
declare const WidgetEntityImageV5Schema: z.ZodObject<{
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
    type: z.ZodLiteral<"entityImage">;
    formatSlug: z.ZodOptional<z.ZodEnum<["original", "thumbnail", "square", "closeup"]>>;
    objectFit: z.ZodOptional<z.ZodEnum<["contain", "cover", "fill", "none", "scale-down"]>>;
}, "strip", z.ZodTypeAny, {
    type: "entityImage";
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
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
}, {
    type: "entityImage";
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
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
}>;
type WidgetEntityImageV5 = z.infer<typeof WidgetEntityImageV5Schema>;
/**
 * Discriminated union of all widget kinds as of bypp v5 — the v1 set
 * plus `entityImage`. Narrow with `widget.type`.
 */
declare const WidgetV5Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    min?: number | undefined;
    max?: number | undefined;
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
    icon: z.ZodOptional<z.ZodString>;
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
    max?: number | undefined;
    icon?: string | undefined;
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
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
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
    type: z.ZodLiteral<"bar">;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    unit: z.ZodOptional<z.ZodString>;
    orientation: z.ZodOptional<z.ZodEnum<["ltr", "rtl", "ttb", "btt"]>>;
    barColor: z.ZodOptional<z.ZodString>;
    bgColor: z.ZodOptional<z.ZodString>;
    showValue: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "bar";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    min?: number | undefined;
    max?: number | undefined;
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
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
    orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
    barColor?: string | undefined;
    bgColor?: string | undefined;
    showValue?: boolean | undefined;
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
    type: z.ZodLiteral<"entityImage">;
    formatSlug: z.ZodOptional<z.ZodEnum<["original", "thumbnail", "square", "closeup"]>>;
    objectFit: z.ZodOptional<z.ZodEnum<["contain", "cover", "fill", "none", "scale-down"]>>;
}, "strip", z.ZodTypeAny, {
    type: "entityImage";
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
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
}, {
    type: "entityImage";
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
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
}>]>;
type WidgetV5 = z.infer<typeof WidgetV5Schema>;

/** A numeric column. `defaultNumber` is the seed value used when no per-row value is stored. */
declare const DataTableColumnNumberV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnNumberV2 = z.infer<typeof DataTableColumnNumberV2Schema>;
/**
 * A plain text column. `maxChars` is a UX-only cap on input length.
 * `defaultValue` is the seed string.
 */
declare const DataTableColumnTextV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnTextV2 = z.infer<typeof DataTableColumnTextV2Schema>;
/** A boolean column. `defaultBoolean` is the seed state. */
declare const DataTableColumnBooleanV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnBooleanV2 = z.infer<typeof DataTableColumnBooleanV2Schema>;
/**
 * A picker column with a fixed set of options.
 *
 *  - `options[]` — the available choices (see `ChoiceOptionV1Schema`).
 *  - `isMultiple` — when `true`, each row stores an array of option
 *    uids; when `false` (default), a single uid.
 *  - `hasNumericValue` — when `true`, each option exposes a numeric
 *    value, used by formulas / lookups referencing this column.
 *  - `hasIcon` — when `true`, each option carries an icon name, prefixed
 *    in cell rendering.
 *
 * Same semantics as choice **variables** (see
 * `ChoiceVariableV1Schema`) — the same `ChoiceOption` shape is reused
 * for option entries.
 */
declare const DataTableColumnChoiceV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnChoiceV2 = z.infer<typeof DataTableColumnChoiceV2Schema>;
/**
 * An icon column. Each row stores a single FontAwesome-style icon name.
 *
 * `defaultIcon` is the seed icon name used when no per-row value is set.
 *
 * Note: icon columns exist in data-tables only; they're disallowed as
 * sheet variables (would duplicate the variable-level `icon` field).
 */
declare const DataTableColumnIconV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnIconV2 = z.infer<typeof DataTableColumnIconV2Schema>;
/**
 * A column whose cells store **locale-keyed** strings (a `TranslatableText`
 * record like `{ en: "Wizard", fr: "Magicien" }`).
 *
 * Use this for preset content that ships across languages — e.g. a
 * "Classes" table where each row carries the class name in every
 * supported locale. Regular `text` columns still exist for mono-lingual
 * user-typed data.
 *
 * `defaultValue` is the seed record used when no per-row value is set.
 */
declare const DataTableColumnTranslatableTextV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnTranslatableTextV2 = z.infer<typeof DataTableColumnTranslatableTextV2Schema>;
/**
 * A column whose cells store row uid(s) pointing to **another**
 * data-table. Same semantics as the `dataTableRef` **variable** — see
 * `DataTableRefVariableV2Schema` for the field-level explanations.
 *
 * Why have both a variable AND a column variant? Variables live on
 * sheets (per-entity instances), columns live in data-tables (authored
 * content). A "race" table column can ref a "subraces" table; a sheet
 * variable can ref a "class" table.
 */
declare const DataTableColumnDataTableRefV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnDataTableRefV2 = z.infer<typeof DataTableColumnDataTableRefV2Schema>;
/**
 * A derived column that reads a cell of another data-table given row
 * uid(s) supplied by a **sibling** column on the SAME table.
 *
 * Fields:
 *  - `sourceColumnUid` — the sibling column (must be a `dataTableRef`
 *    column on the same data-table) whose row uid(s) feed the lookup.
 *    Same role as `sourceVariableUid` on the lookup variable, but
 *    scoped to columns.
 *  - `dataTableUid` / `columnUid` / `chainedLabelColumnUids` /
 *    `multiAggregator` / `multiSeparator` — same semantics as the
 *    lookup **variable** (see `DataTableLookupVariableV2Schema`).
 *
 * Lookup columns carry no per-row value of their own; their value is
 * recomputed from the source column on read.
 */
declare const DataTableColumnDataTableLookupV2Schema: z.ZodObject<{
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
}>;
type DataTableColumnDataTableLookupV2 = z.infer<typeof DataTableColumnDataTableLookupV2Schema>;
/**
 * Discriminated union of every data-table column type. Narrow with
 * `column.type` to access type-specific fields.
 */
declare const DataTableColumnV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}>]>;
type DataTableColumnV2 = z.infer<typeof DataTableColumnV2Schema>;
/**
 * A single cell's value. The actual shape constraint depends on the
 * column's `type` (number → number, text → string, choice → option
 * uid(s), translatableText → record, …). Because zod records can't
 * express that per-key correlation, the union is permissive — consumers
 * narrow against the column's `type` at read time.
 *
 * Lookup columns carry no value (their cells are absent from
 * `row.data`).
 */
declare const DataTableCellValueV2Schema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>;
type DataTableCellValueV2 = z.infer<typeof DataTableCellValueV2Schema>;
/**
 * A single row: a uid + an optional map of column-uid → cell value.
 * Missing column entries are valid — they mean "no value set" and the
 * reader uses the column's `defaultX` seed.
 */
declare const DataTableRowV2Schema: z.ZodObject<{
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
}>;
type DataTableRowV2 = z.infer<typeof DataTableRowV2Schema>;
/**
 * A data-table — typed columns + rows of authored reference data.
 *
 *  - `name` — locale-keyed display label (e.g. `{ en: "Spells", fr:
 *    "Sorts" }`).
 *  - `icon` — optional FontAwesome-style icon name used when the table
 *    is shown in lists / browsers. `null` means "no icon".
 *  - `weight` — optional sort hint when listing multiple tables in the
 *    same UI. Lower weight = earlier in the list.
 *  - `adminOnly` — when `true`, only admin / GM users should see this
 *    table in the reader. UX-only — bypp doesn't enforce.
 *  - `sourceUid` — when this table was cloned from another table (a
 *    "fork" — e.g. user-customized version of a published table), this
 *    points back to the original. Lets readers show a "based on X"
 *    chip.
 *  - `columns[]` / `rows[]` — the actual table content.
 */
declare const DataTableV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>;
} & {
    name: z.ZodRecord<z.ZodString, z.ZodString>;
} & {
    icon: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNumber>;
    adminOnly: z.ZodOptional<z.ZodBoolean>;
    sourceUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columns: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    }>]>, "many">;
    rows: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
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
    icon?: string | null | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    sourceUid?: DataTableUid | undefined;
}, {
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
    icon?: string | null | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    sourceUid?: DataTableUid | undefined;
}>;
type DataTableV2 = z.infer<typeof DataTableV2Schema>;

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

/**
 * Random table row — v7 replaces the single optional `randomTableUid`
 * nested-table reference with an explicit placeholder map. Each key is a
 * **placeholder token that appears literally in `content`** (e.g. `"$1"` or
 * `"$weapon"`); its value is the table rolled in its place. When a row comes
 * up, a reader rolls every referenced table and substitutes each result for
 * its placeholder token in `content`.
 *
 * The mapping is explicit on purpose: a reader replaces by token, not by
 * position, so it never has to assume any particular `$N` numbering
 * convention. See {@link "./random-table.v1.schema"} for the conceptual model
 * of nested rolls.
 */
declare const RandomTableRowV7Schema: z.ZodObject<{
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
}>;
type RandomTableRowV7 = z.infer<typeof RandomTableRowV7Schema>;
/**
 * Random table — v7 adds an optional `diceFormula` override. When set it
 * constrains the roll (an `XdY` notation in the producer); when unset, readers
 * derive the formula from the rows (`1d<sum of (range + 1)>`). Kept as a loose
 * string (not a regex) for forward-compatibility, like other reader-hint
 * fields.
 */
declare const RandomTableV7Schema: z.ZodObject<{
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
}>;
type RandomTableV7 = z.infer<typeof RandomTableV7Schema>;

/**
 * Tag — v2 changes:
 *  - `categoryUid` is `.optional()` instead of `.nullable()` (omit the
 *    field when the tag stands alone, instead of writing `null`).
 *  - `useAsFolder` defaults to `false`.
 */
declare const TagV2Schema: z.ZodObject<{
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
}>;
type TagV2 = z.infer<typeof TagV2Schema>;

/**
 * Scene — v2 changes:
 *  - `weather` removed. Was a Harpy-specific 3-value enum that didn't
 *    extend cleanly to other readers. Removing the typed slot leaves the
 *    door open for a future, well-designed atmospheric extension.
 *  - `gameMode` removed. Same reason — the 3 modes (`2d_vtt`, `3d_vtt`,
 *    `totm`) reflected Harpy's renderer, not a portable concept.
 *
 * All lighting fields stay (light position / intensity / color / indoor)
 * — those are generic 3D scene parameters useful to any reader that
 * renders the scene.
 */
declare const SceneV2Schema: z.ZodObject<{
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
}>;
type SceneV2 = z.infer<typeof SceneV2Schema>;

/**
 * Data-table row — v3: `data` already optional in v2, unchanged.
 */
declare const DataTableRowV3Schema: z.ZodObject<{
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
}>;
type DataTableRowV3 = z.infer<typeof DataTableRowV3Schema>;
/**
 * Data-table — v3 changes: `columns` and `rows` default to `[]`.
 * Column shapes themselves are re-exported from v2 (no change needed).
 */
declare const DataTableV3Schema: z.ZodObject<{
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
}>;
type DataTableV3 = z.infer<typeof DataTableV3Schema>;

/** A numeric variable with an optional value domain. `min`/`max` bound the
 * range; `step` is the increment (default 1). */
declare const NumberVariableV2Schema: z.ZodObject<{
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
}>;
type NumberVariableV2 = z.infer<typeof NumberVariableV2Schema>;
/**
 * Discriminated union of all variable variants as of bypp v7 — the v6 set
 * with the `number` variant upgraded to v2. Narrow with `variable.type`.
 */
declare const VariableV7Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}>]>;
type VariableV7 = z.infer<typeof VariableV7Schema>;

export { type DataTableColumnChoiceV2 as $, type AssetUid as A, type BeyondPaperV3 as B, type ChunkUid as C, type DialectUid as D, type EntityUid as E, type RandomTableRowV7 as F, type SceneV2 as G, type TagV2 as H, type TagCategoryV1 as I, type VariableV7 as J, type CcLicenseV3 as K, CcLicenseV3Schema as L, ChunkUidSchema as M, type CustomImageSceneMapV1 as N, CustomImageSceneMapV1Schema as O, type PageUid as P, type CustomVideoSceneMapV1 as Q, type RandomTableUid as R, type SheetUid as S, type TagUid as T, CustomVideoSceneMapV1Schema as U, type VariableUid as V, type WidgetUid as W, type DataTableCellValueV2 as X, DataTableCellValueV2Schema as Y, type DataTableColumnBooleanV2 as Z, DataTableColumnBooleanV2Schema as _, type DatasetUid as a, SheetUidSchema as a$, DataTableColumnChoiceV2Schema as a0, type DataTableColumnDataTableLookupV2 as a1, DataTableColumnDataTableLookupV2Schema as a2, type DataTableColumnDataTableRefV2 as a3, DataTableColumnDataTableRefV2Schema as a4, type DataTableColumnIconV2 as a5, DataTableColumnIconV2Schema as a6, type DataTableColumnNumberV2 as a7, DataTableColumnNumberV2Schema as a8, DataTableColumnV2Schema as a9, EntityUidSchema as aA, type GridDataV1 as aB, GridDataV1Schema as aC, type NumberVariableV2 as aD, NumberVariableV2Schema as aE, type ObjectFitV6 as aF, ObjectFitV6Schema as aG, PageEntityV1Schema as aH, PageV1Schema as aI, PageStandardV1Schema as aJ, PageUidSchema as aK, type ParentAttributionV4 as aL, ParentAttributionV4Schema as aM, type ParentAttributionV3 as aN, ParentAttributionV3Schema as aO, RandomTableRowV7Schema as aP, RandomTableRowUidSchema as aQ, RandomTableV7Schema as aR, RandomTableUidSchema as aS, SceneBackgroundUidSchema as aT, type SceneMapBaseV1 as aU, SceneMapBaseV1Schema as aV, SceneMapUidSchema as aW, type SceneMapV1 as aX, SceneMapV1Schema as aY, SceneV2Schema as aZ, SceneUidSchema as a_, type DataTableColumnTextV2 as aa, DataTableColumnTextV2Schema as ab, type DataTableColumnTranslatableTextV2 as ac, DataTableColumnTranslatableTextV2Schema as ad, DataTableColumnUidSchema as ae, type DataTableRowV3 as af, DataTableRowV3Schema as ag, DataTableRowUidSchema as ah, DataTableRowV2Schema as ai, DataTableV3Schema as aj, DataTableUidSchema as ak, type DataTableV2 as al, DataTableV2Schema as am, DatasetV2Schema as an, DatasetTargetV2Schema as ao, DatasetUidSchema as ap, type Dd2VttSceneMapV1 as aq, Dd2VttSceneMapV1Schema as ar, DialectFontV2Schema as as, DialectV2Schema as at, DialectUidSchema as au, ENTITY_IMAGE_RENDITIONS as av, type EntityImageFormatV5 as aw, EntityImageFormatV5Schema as ax, type EntityImageObjectFitV5 as ay, EntityImageObjectFitV5Schema as az, type VariableChoiceUid as b, type StyleV3 as b0, StyleV3Schema as b1, type StyleV2 as b2, StyleV2Schema as b3, TagCategoryV1Schema as b4, TagCategoryUidSchema as b5, TagV2Schema as b6, TagUidSchema as b7, VariableChoiceUidSchema as b8, VariableV7Schema as b9, VariableUidSchema as ba, type WidgetBackgroundV6 as bb, WidgetBackgroundV6Schema as bc, type WidgetEntityImageV5 as bd, WidgetEntityImageV5Schema as be, WidgetUidSchema as bf, type WidgetV5 as bg, WidgetV5Schema as bh, WithStyleV3Schema as bi, WithStyleV2Schema as bj, type SceneUid as c, type RandomTableRowUid as d, type TagCategoryUid as e, type SceneMapUid as f, type SceneBackgroundUid as g, type DataTableUid as h, type DataTableColumnUid as i, type DataTableRowUid as j, AssetUidSchema as k, type AttributionV3 as l, AttributionV3Schema as m, BeyondPaperV3Schema as n, type BeyondPaperV4 as o, BeyondPaperV4Schema as p, type DataTableV3 as q, type DataTableColumnV2 as r, type DataTableRowV2 as s, type DatasetV2 as t, type DialectV2 as u, type DialectFontV2 as v, type PageV1 as w, type PageEntityV1 as x, type PageStandardV1 as y, type RandomTableV7 as z };
