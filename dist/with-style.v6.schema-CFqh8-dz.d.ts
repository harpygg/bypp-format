import { A as AssetUid } from './scene.v2.schema-Cy0s-K0Y.js';
import { z } from 'zod';

declare const SidesV6Schema: z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>;
type SidesV6 = z.infer<typeof SidesV6Schema>;
/**
 * CSS-like styling — **v6**, a superset of v5.
 *
 * v6 lets a spacing differ per side, in one field rather than four:
 *  - `margin` — the air an element keeps around itself,
 *  - `padding` — the air it keeps inside, and
 *  - `borderWidth` — WIDENED from a single number to the same notation.
 *
 * What tells one block of content from another is very often WHICH edge its
 * line is on: a bar down the left side is a quote, a thin box is a table, and
 * a single `borderWidth` cannot say both — it draws all four edges or none.
 * Spacing has the same need, and `padding: [0, 0, 0, 1]` is how anyone who has
 * written CSS already expects to say it.
 *
 * Nothing is removed. The per-side fields v1 and v5 introduced
 * (`paddingTop…`, `marginTop…`) stay exactly as they were — older bundles
 * carry them, and this file could not drop them without breaking those. They
 * are what a v6 document falls back on:
 *
 *   **`margin` wins when present; the four `margin*` fields are read only when
 *   it is absent.** Likewise `padding`. A document produced by this version's
 *   migrator never carries both for the same box.
 *
 * `borderWidth` is widened, not redefined: every value a v5 style could hold
 * is still valid and still means the same thing (a plain number is "the same
 * width on all four sides"), so every document written before v6 parses
 * unchanged. The widening is what lets a border say which edge it is on,
 * since v5 had no `borderWidth*` per side to fall back on.
 *
 * Every v5 field is reused as-is: `StyleV5Schema` is `nullable().optional()`,
 * so it's unwrapped twice to reach the inner object before extending.
 *
 * This file MUST NOT be modified once shipped.
 */
declare const StyleV6Schema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
type StyleV6 = z.infer<typeof StyleV6Schema>;
/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
declare const WithStyleV6Schema: z.ZodObject<{
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
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
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
}>;

export { type SidesV6 as S, WithStyleV6Schema as W, SidesV6Schema as a, type StyleV6 as b, StyleV6Schema as c };
