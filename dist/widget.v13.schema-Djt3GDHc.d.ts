import { W as WidgetUid, V as VariableUid, A as AssetUid } from './scene.v2.schema-Cy0s-K0Y.js';
import { z } from 'zod';

declare const WidgetV13Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
}>]>;
type WidgetV13 = z.infer<typeof WidgetV13Schema>;

export { type WidgetV13 as W, WidgetV13Schema as a };
