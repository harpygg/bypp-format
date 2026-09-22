import { A as AssetUid, T as TagUid, D as DialectUid, E as EntityUid, a as DatasetUid, S as SheetUid, P as PageUid, V as VariableUid, b as VariableChoiceUid, aF as EntityActionUid, c as SceneUid, C as ChunkUid, R as RandomTableUid, h as DataTableUid, i as DataTableColumnUid, j as DataTableRowUid, W as WidgetUid, d as RandomTableRowUid, e as TagCategoryUid, f as SceneMapUid, g as SceneBackgroundUid } from './scene.v2.schema-H-0sHBmq.js';
import { z } from 'zod';

declare const BeyondPaperV27Schema: z.ZodObject<{
    version: z.ZodLiteral<27>;
    format: z.ZodLiteral<"bypp">;
    name: z.ZodString;
    exportedAt: z.ZodString;
    bundleVersion: z.ZodString;
    image: z.ZodOptional<z.ZodObject<{
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
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    }, {
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    }>>;
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
    requires: z.ZodDefault<z.ZodArray<z.ZodObject<{
        category: z.ZodString;
        uid: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        from: z.ZodOptional<z.ZodObject<{
            byppUrl: z.ZodEffects<z.ZodString, string, string>;
            bundleName: z.ZodOptional<z.ZodString>;
            bundleVersion: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            byppUrl: string;
            bundleVersion?: string | undefined;
            bundleName?: string | undefined;
        }, {
            byppUrl: string;
            bundleVersion?: string | undefined;
            bundleName?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uid: string;
        category: string;
        name?: string | undefined;
        from?: {
            byppUrl: string;
            bundleVersion?: string | undefined;
            bundleName?: string | undefined;
        } | undefined;
    }, {
        uid: string;
        category: string;
        name?: string | undefined;
        from?: {
            byppUrl: string;
            bundleVersion?: string | undefined;
            bundleName?: string | undefined;
        } | undefined;
    }>, "many">>;
    theme: z.ZodOptional<z.ZodObject<{
        slug: z.ZodOptional<z.ZodString>;
        elements: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
        tagStyles: z.ZodDefault<z.ZodArray<z.ZodObject<{
            tagUid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
            style: z.ZodObject<{
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
                rotation: z.ZodOptional<z.ZodNumber>;
                fontWeight: z.ZodOptional<z.ZodString>;
                fontStyle: z.ZodOptional<z.ZodString>;
                marginTop: z.ZodOptional<z.ZodNumber>;
                marginRight: z.ZodOptional<z.ZodNumber>;
                marginBottom: z.ZodOptional<z.ZodNumber>;
                marginLeft: z.ZodOptional<z.ZodNumber>;
                backgroundColor: z.ZodOptional<z.ZodString>;
                textDecoration: z.ZodOptional<z.ZodString>;
                backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
            } & {
                margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
                padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
                borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
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
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            style: {
                color?: string | undefined;
                justifyContent?: string | undefined;
                alignItems?: string | undefined;
                flexDirection?: string | undefined;
                lineHeight?: number | undefined;
                fontFamilyId?: string | undefined;
                fontScale?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            };
            tagUid: string & {
                readonly __bypp_flavor?: "TagUid" | undefined;
            };
        }, {
            style: {
                color?: string | undefined;
                justifyContent?: string | undefined;
                alignItems?: string | undefined;
                flexDirection?: string | undefined;
                lineHeight?: number | undefined;
                fontFamilyId?: string | undefined;
                fontScale?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            };
            tagUid: string & {
                readonly __bypp_flavor?: "TagUid" | undefined;
            };
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        elements: Record<string, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>;
        tagStyles: {
            style: {
                color?: string | undefined;
                justifyContent?: string | undefined;
                alignItems?: string | undefined;
                flexDirection?: string | undefined;
                lineHeight?: number | undefined;
                fontFamilyId?: string | undefined;
                fontScale?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            };
            tagUid: string & {
                readonly __bypp_flavor?: "TagUid" | undefined;
            };
        }[];
        slug?: string | undefined;
    }, {
        slug?: string | undefined;
        elements?: Record<string, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }> | undefined;
        tagStyles?: {
            style: {
                color?: string | undefined;
                justifyContent?: string | undefined;
                alignItems?: string | undefined;
                flexDirection?: string | undefined;
                lineHeight?: number | undefined;
                fontFamilyId?: string | undefined;
                fontScale?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            };
            tagUid: string & {
                readonly __bypp_flavor?: "TagUid" | undefined;
            };
        }[] | undefined;
    }>>;
    dialects: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<DialectUid, z.ZodTypeDef, DialectUid>;
        name: z.ZodString;
        fontFamily: z.ZodOptional<z.ZodString>;
        order: z.ZodOptional<z.ZodNumber>;
        spokenByEntitiesUids: z.ZodDefault<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "DialectUid" | undefined;
        };
        spokenByEntitiesUids: EntityUid[];
        fontFamily?: string | undefined;
        order?: number | undefined;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "DialectUid" | undefined;
        };
        fontFamily?: string | undefined;
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
        }[] | undefined;
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
        wrappedInEntityUid: z.ZodOptional<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>>;
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
        wrappedInEntityUid?: EntityUid | undefined;
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
        wrappedInEntityUid?: EntityUid | undefined;
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
    }>, z.ZodObject<{
        uid: z.ZodType<ChunkUid, z.ZodTypeDef, ChunkUid>;
        name: z.ZodOptional<z.ZodString>;
        blockStyle: z.ZodOptional<z.ZodEnum<["gm-tips", "more-info", "warning", "quote", "note", "tip", "info", "rule"]>>;
        headingLevel: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>]>>;
        headingMode: z.ZodOptional<z.ZodEnum<["inside", "outside"]>>;
    } & {
        type: z.ZodLiteral<"markdown">;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "markdown";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
    }, {
        type: "markdown";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
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
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"number">;
        defaultValue: z.ZodOptional<z.ZodNumber>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        step: z.ZodOptional<z.ZodNumber>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        min?: number | undefined;
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"text">;
        maxChars: z.ZodOptional<z.ZodNumber>;
        defaultValue: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"boolean">;
        defaultValue: z.ZodOptional<z.ZodBoolean>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"choice">;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        hasNumericValue: z.ZodOptional<z.ZodBoolean>;
        hasIcon: z.ZodOptional<z.ZodBoolean>;
        defaultOptionUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">>;
        icon: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    } & {
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
            icon: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        } & {
            label: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }>, "many">>;
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
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
        defaultOptionUids?: VariableChoiceUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"formula">;
        formula: z.ZodOptional<z.ZodString>;
        depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "formula";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        formula?: string | undefined;
        depsVariablesUid?: VariableUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
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
        icon: z.ZodOptional<z.ZodString>;
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
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "roll";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"dataTableRef">;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"dataTableLookup">;
        sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"image">;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    }, {
        type: "image";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodLiteral<"dataTableDirectLookup">;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        rowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
        chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        icon: z.ZodOptional<z.ZodString>;
        type: z.ZodLiteral<"entityRef">;
        sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        targetsTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        targetsTags: z.ZodOptional<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
        targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
        max: z.ZodOptional<z.ZodNumber>;
        maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "entityRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sourceVariableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        targetsTypes?: string[] | undefined;
        targetsTags?: TagUid[] | undefined;
    }, {
        type: "entityRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sourceVariableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        targetsTypes?: string[] | undefined;
        targetsTags?: TagUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        name: z.ZodString;
        datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
        isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
        icon: z.ZodOptional<z.ZodString>;
        type: z.ZodLiteral<"entityLookup">;
        sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        keyVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        labelVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
    } & {
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "entityLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
        keyVariableUid?: VariableUid | undefined;
        labelVariableUid?: VariableUid | undefined;
    }, {
        type: "entityLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
        keyVariableUid?: VariableUid | undefined;
        labelVariableUid?: VariableUid | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
        type: z.ZodLiteral<"wheel">;
        readingPosition: z.ZodOptional<z.ZodString>;
        labelOrientation: z.ZodOptional<z.ZodString>;
        radius: z.ZodOptional<z.ZodNumber>;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    } & {
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
        type: "wheel";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    }, {
        type: "wheel";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
        type: z.ZodLiteral<"actionRoll">;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "actionRoll";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    }, {
        type: "actionRoll";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
        type: z.ZodLiteral<"entityGrid">;
        gapX: z.ZodOptional<z.ZodNumber>;
        gapY: z.ZodOptional<z.ZodNumber>;
        listOptionStyle: z.ZodOptional<z.ZodString>;
        formatSlug: z.ZodOptional<z.ZodEnum<["original", "thumbnail", "square", "closeup"]>>;
        objectFit: z.ZodOptional<z.ZodEnum<["contain", "cover", "fill", "none", "scale-down"]>>;
        imageWidth: z.ZodOptional<z.ZodNumber>;
        imageHeight: z.ZodOptional<z.ZodNumber>;
        actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
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
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "entityGrid";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listOptionStyle?: string | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
        imageWidth?: number | undefined;
        imageHeight?: number | undefined;
    }, {
        type: "entityGrid";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listOptionStyle?: string | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
        imageWidth?: number | undefined;
        imageHeight?: number | undefined;
    }>]>, "many">>;
    sheets: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>;
        name: z.ZodOptional<z.ZodString>;
        widgetUids: z.ZodDefault<z.ZodArray<z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>, "many">>;
        compatibleDatasetUid: z.ZodOptional<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>>;
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
        }>>>>>;
    } & {
        originalUrl: z.ZodOptional<z.ZodString>;
        thumbnailUrl: z.ZodOptional<z.ZodString>;
        squareUrl: z.ZodOptional<z.ZodString>;
        closeupUrl: z.ZodOptional<z.ZodString>;
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
        uid: string & {
            readonly __bypp_flavor?: "SheetUid" | undefined;
        };
        widgetUids: WidgetUid[];
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        name?: string | undefined;
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        widgetUids?: WidgetUid[] | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
            type: z.ZodLiteral<"choice">;
            isMultiple: z.ZodOptional<z.ZodBoolean>;
            hasNumericValue: z.ZodOptional<z.ZodBoolean>;
            hasIcon: z.ZodOptional<z.ZodBoolean>;
        } & {
            options: z.ZodOptional<z.ZodArray<z.ZodObject<{
                uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
                icon: z.ZodOptional<z.ZodString>;
                value: z.ZodOptional<z.ZodNumber>;
            } & {
                label: z.ZodRecord<z.ZodString, z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
                value?: number | undefined;
                icon?: string | undefined;
            }, {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
                value?: number | undefined;
                icon?: string | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
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
                label: Record<string, string>;
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
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
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
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
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
    } & {
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        useAsFolder: boolean;
        icon?: string | undefined;
        categoryUid?: TagCategoryUid | undefined;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
        icon?: string | undefined;
        categoryUid?: TagCategoryUid | undefined;
        useAsFolder?: boolean | undefined;
    }>, "many">>;
    tagCategories: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<TagCategoryUid, z.ZodTypeDef, TagCategoryUid>;
    } & {
        name: z.ZodString;
    } & {
        icon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
        icon?: string | undefined;
    }, {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
        icon?: string | undefined;
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
        type: z.ZodLiteral<"customImage">;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        type: z.ZodLiteral<"customImage">;
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
        type: "customImage";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "SceneBackgroundUid" | undefined;
        };
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        opacity?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        opacity?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        opacity?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    }, {
        type: "audio";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        audioUrl?: string | undefined;
        audioDurationSeconds?: number | undefined;
        audioExt?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        type: "audio-external";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        provider: string;
        externalId: string;
        thumbnailUrl?: string | undefined;
        durationSeconds?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
    } & {
        name: z.ZodString;
    } & {
        type: z.ZodLiteral<"entity">;
        entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
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
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    }, {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    version: 27;
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
        spokenByEntitiesUids: EntityUid[];
        fontFamily?: string | undefined;
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
        wrappedInEntityUid?: EntityUid | undefined;
    } | {
        type: "markdown";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
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
        min?: number | undefined;
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
    } | {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
    } | {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    } | {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "entityRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sourceVariableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        targetsTypes?: string[] | undefined;
        targetsTags?: TagUid[] | undefined;
    } | {
        type: "entityLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
        keyVariableUid?: VariableUid | undefined;
        labelVariableUid?: VariableUid | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
        type: "wheel";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
        type: "actionRoll";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
        type: "entityGrid";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listOptionStyle?: string | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
        imageWidth?: number | undefined;
        imageHeight?: number | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
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
        icon?: string | undefined;
        categoryUid?: TagCategoryUid | undefined;
    }[];
    tagCategories: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
        icon?: string | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        opacity?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    } | {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    })[];
    requires: {
        uid: string;
        category: string;
        name?: string | undefined;
        from?: {
            byppUrl: string;
            bundleVersion?: string | undefined;
            bundleName?: string | undefined;
        } | undefined;
    }[];
    image?: {
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    } | undefined;
    parentAttribution?: {
        authorName: string;
        license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
        bundleName: string;
        sourceUrl?: string | undefined;
    } | undefined;
    creatorLinks?: string[] | undefined;
    theme?: {
        elements: Record<string, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>;
        tagStyles: {
            style: {
                color?: string | undefined;
                justifyContent?: string | undefined;
                alignItems?: string | undefined;
                flexDirection?: string | undefined;
                lineHeight?: number | undefined;
                fontFamilyId?: string | undefined;
                fontScale?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            };
            tagUid: string & {
                readonly __bypp_flavor?: "TagUid" | undefined;
            };
        }[];
        slug?: string | undefined;
    } | undefined;
}, {
    name: string;
    license: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR";
    version: 27;
    format: "bypp";
    exportedAt: string;
    bundleVersion: string;
    licenseVersion: "4.0";
    attribution: {
        authorName: string;
        authorUrl?: string | undefined;
        sourceUrl?: string | undefined;
    };
    image?: {
        originalUrl?: string | undefined;
        thumbnailUrl?: string | undefined;
        squareUrl?: string | undefined;
        closeupUrl?: string | undefined;
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    } | undefined;
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
        fontFamily?: string | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
        }[] | undefined;
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
    } | {
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
        wrappedInEntityUid?: EntityUid | undefined;
    } | {
        type: "markdown";
        uid: string & {
            readonly __bypp_flavor?: "ChunkUid" | undefined;
        };
        content: string;
        name?: string | undefined;
        blockStyle?: "gm-tips" | "more-info" | "warning" | "quote" | "note" | "tip" | "info" | "rule" | undefined;
        headingLevel?: 2 | 1 | 3 | 4 | undefined;
        headingMode?: "inside" | "outside" | undefined;
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
        min?: number | undefined;
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        defaultValue?: number | undefined;
        step?: number | undefined;
    } | {
        type: "text";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
    } | {
        type: "dataTableRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
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
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
    } | {
        type: "dataTableDirectLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        rowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "entityRef";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        max?: number | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        targetTagsGroup?: "every" | "some" | undefined;
        sourceVariableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        targetsTypes?: string[] | undefined;
        targetsTags?: TagUid[] | undefined;
    } | {
        type: "entityLookup";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
        datasetsUids: DatasetUid[];
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isHiddenFromSheet?: boolean | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
        sourceVariableUid?: VariableUid | undefined;
        keyVariableUid?: VariableUid | undefined;
        labelVariableUid?: VariableUid | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        toggleIconType?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listStyleBulletBreakline?: boolean | undefined;
        listStyleBulletType?: string | undefined;
        listStyleBulletGap?: number | undefined;
        listStyleBulletIconGap?: number | undefined;
        listOptionStyle?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listVisibility?: string | undefined;
        listOptionStyle?: string | undefined;
        listStyleTextSeparator?: string | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        maxVariable?: VariableUid | null | undefined;
        unit?: string | undefined;
        orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
        barColor?: string | undefined;
        bgColor?: string | undefined;
        showValue?: boolean | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
        type: "wheel";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        readingPosition?: string | undefined;
        labelOrientation?: string | undefined;
        radius?: number | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
        type: "actionRoll";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
    } | {
        type: "entityGrid";
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
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        } | null | undefined;
        variableUid?: VariableUid | undefined;
        listOptionStyle?: string | undefined;
        gapX?: number | undefined;
        gapY?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
        actionsVariablesUids?: VariableUid[] | undefined;
        imageWidth?: number | undefined;
        imageHeight?: number | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        widgetUids?: WidgetUid[] | undefined;
        compatibleDatasetUid?: DatasetUid | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
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
        } | {
            type: "choice";
            uid: string & {
                readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
            };
            options?: {
                uid: string & {
                    readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
                };
                label: Record<string, string>;
                value?: number | undefined;
                icon?: string | undefined;
            }[] | undefined;
            label?: Record<string, string> | undefined;
            icon?: string | undefined;
            isMandatory?: boolean | undefined;
            isMultiple?: boolean | undefined;
            hasNumericValue?: boolean | undefined;
            hasIcon?: boolean | undefined;
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
        icon?: string | undefined;
        categoryUid?: TagCategoryUid | undefined;
        useAsFolder?: boolean | undefined;
    }[] | undefined;
    tagCategories?: {
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "TagCategoryUid" | undefined;
        };
        icon?: string | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        dimensions?: {
            width: number;
            height: number;
        } | undefined;
        opacity?: number | undefined;
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
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
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    } | {
        type: "entity";
        name: string;
        uid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        credit?: {
            name: string;
            url?: string | undefined;
            license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
        } | undefined;
    })[] | undefined;
    requires?: {
        uid: string;
        category: string;
        name?: string | undefined;
        from?: {
            byppUrl: string;
            bundleVersion?: string | undefined;
            bundleName?: string | undefined;
        } | undefined;
    }[] | undefined;
    theme?: {
        slug?: string | undefined;
        elements?: Record<string, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
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
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }> | undefined;
        tagStyles?: {
            style: {
                color?: string | undefined;
                justifyContent?: string | undefined;
                alignItems?: string | undefined;
                flexDirection?: string | undefined;
                lineHeight?: number | undefined;
                fontFamilyId?: string | undefined;
                fontScale?: number | undefined;
                paddingTop?: number | undefined;
                paddingRight?: number | undefined;
                paddingBottom?: number | undefined;
                paddingLeft?: number | undefined;
                borderWidth?: number | number[] | undefined;
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
                fontWeight?: string | undefined;
                fontStyle?: string | undefined;
                marginTop?: number | undefined;
                marginRight?: number | undefined;
                marginBottom?: number | undefined;
                marginLeft?: number | undefined;
                backgroundColor?: string | undefined;
                textDecoration?: string | undefined;
                backgroundRepeat?: boolean | undefined;
                margin?: number | number[] | undefined;
                padding?: number | number[] | undefined;
            };
            tagUid: string & {
                readonly __bypp_flavor?: "TagUid" | undefined;
            };
        }[] | undefined;
    } | undefined;
}>;
type BeyondPaperV27 = z.infer<typeof BeyondPaperV27Schema>;

/** The display label every variant carries; readers fall back to `name`. */
declare const VariableLabelV27Schema: z.ZodObject<{
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    label?: Record<string, string> | undefined;
}, {
    label?: Record<string, string> | undefined;
}>;
/**
 * A single option of a `choice` variable or column, `label` locale-keyed
 * (`{ en: "Wizard", fr: "Magicien" }`). A reader picks the locale it shows the
 * way it does for any other `TranslatableText`.
 */
declare const ChoiceOptionV27Schema: z.ZodObject<{
    uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
    icon: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodNumber>;
} & {
    label: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
    };
    label: Record<string, string>;
    value?: number | undefined;
    icon?: string | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
    };
    label: Record<string, string>;
    value?: number | undefined;
    icon?: string | undefined;
}>;
type ChoiceOptionV27 = z.infer<typeof ChoiceOptionV27Schema>;
declare const NumberVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"number">;
    defaultValue: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    step: z.ZodOptional<z.ZodNumber>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    min?: number | undefined;
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
    step?: number | undefined;
}>;
declare const TextVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>;
declare const BooleanVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"boolean">;
    defaultValue: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}>;
declare const ChoiceVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
    defaultOptionUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
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
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
    defaultOptionUids?: VariableChoiceUid[] | undefined;
}>;
declare const FormulaVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"formula">;
    formula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}>;
declare const RollVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
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
    icon: z.ZodOptional<z.ZodString>;
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
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
declare const DataTableRefVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableRef">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}>;
declare const DataTableLookupVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
}>;
declare const ImageVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"image">;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}>;
declare const DataTableDirectLookupVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableDirectLookup">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    rowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableDirectLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    rowUids?: DataTableRowUid[] | undefined;
}>;
declare const EntityRefVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityRef">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    targetsTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    targetsTags: z.ZodOptional<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}>;
declare const EntityLookupVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    keyVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    labelVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}>;
type NumberVariableV11 = z.infer<typeof NumberVariableV11Schema>;
type TextVariableV11 = z.infer<typeof TextVariableV11Schema>;
type BooleanVariableV11 = z.infer<typeof BooleanVariableV11Schema>;
type ChoiceVariableV11 = z.infer<typeof ChoiceVariableV11Schema>;
type FormulaVariableV11 = z.infer<typeof FormulaVariableV11Schema>;
type RollVariableV11 = z.infer<typeof RollVariableV11Schema>;
type DataTableRefVariableV11 = z.infer<typeof DataTableRefVariableV11Schema>;
type DataTableLookupVariableV11 = z.infer<typeof DataTableLookupVariableV11Schema>;
type ImageVariableV11 = z.infer<typeof ImageVariableV11Schema>;
type DataTableDirectLookupVariableV11 = z.infer<typeof DataTableDirectLookupVariableV11Schema>;
type EntityRefVariableV11 = z.infer<typeof EntityRefVariableV11Schema>;
type EntityLookupVariableV11 = z.infer<typeof EntityLookupVariableV11Schema>;
/**
 * Discriminated union of all variable variants as of bypp v27. Narrow with
 * `variable.type`.
 */
declare const VariableV11Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"number">;
    defaultValue: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    step: z.ZodOptional<z.ZodNumber>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    min?: number | undefined;
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
    step?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"boolean">;
    defaultValue: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
    defaultOptionUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
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
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
    defaultOptionUids?: VariableChoiceUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"formula">;
    formula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
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
    icon: z.ZodOptional<z.ZodString>;
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
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableRef">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"image">;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableDirectLookup">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    rowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableDirectLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
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
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    rowUids?: DataTableRowUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityRef">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    targetsTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    targetsTags: z.ZodOptional<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    keyVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    labelVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}>]>;
type VariableV11 = z.infer<typeof VariableV11Schema>;

declare const DataTableColumnChoiceV4Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
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
        label: Record<string, string>;
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
type DataTableColumnChoiceV4 = z.infer<typeof DataTableColumnChoiceV4Schema>;
declare const DataTableColumnV4Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
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
        label: Record<string, string>;
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
type DataTableColumnV4 = z.infer<typeof DataTableColumnV4Schema>;
declare const DataTableV4Schema: z.ZodObject<{
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
        type: z.ZodLiteral<"choice">;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        hasNumericValue: z.ZodOptional<z.ZodBoolean>;
        hasIcon: z.ZodOptional<z.ZodBoolean>;
    } & {
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
            icon: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        } & {
            label: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
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
            label: Record<string, string>;
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
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
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
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    })[] | undefined;
    rows?: {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }[] | undefined;
}>;
type DataTableV4 = z.infer<typeof DataTableV4Schema>;

export { VariableV11Schema as A, type BeyondPaperV27 as B, type ChoiceOptionV27 as C, type DataTableV4 as D, type EntityLookupVariableV11 as E, type FormulaVariableV11 as F, type ImageVariableV11 as I, type NumberVariableV11 as N, type RollVariableV11 as R, type TextVariableV11 as T, type VariableV11 as V, BeyondPaperV27Schema as a, type BooleanVariableV11 as b, BooleanVariableV11Schema as c, type DataTableColumnV4 as d, type DataTableLookupVariableV11 as e, type DataTableRefVariableV11 as f, ChoiceOptionV27Schema as g, type ChoiceVariableV11 as h, ChoiceVariableV11Schema as i, type DataTableColumnChoiceV4 as j, DataTableColumnChoiceV4Schema as k, DataTableColumnV4Schema as l, type DataTableDirectLookupVariableV11 as m, DataTableDirectLookupVariableV11Schema as n, DataTableLookupVariableV11Schema as o, DataTableRefVariableV11Schema as p, DataTableV4Schema as q, EntityLookupVariableV11Schema as r, type EntityRefVariableV11 as s, EntityRefVariableV11Schema as t, FormulaVariableV11Schema as u, ImageVariableV11Schema as v, NumberVariableV11Schema as w, RollVariableV11Schema as x, TextVariableV11Schema as y, VariableLabelV27Schema as z };
