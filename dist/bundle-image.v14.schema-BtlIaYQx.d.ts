import { z } from 'zod';

/**
 * The bundle's own cover image, as **introduced in bypp format v14**.
 *
 * Every media-bearing model in the format already carries its picture; the
 * bundle itself did not, so a reader listing `.bypp` files it holds had
 * nothing to show but a name. This is the picture OF the bundle — the one on
 * a shelf, in a library grid, on a download page — not a picture the bundle
 * contains.
 *
 * Shape-wise it is exactly what any other image-bearing model gets: the
 * pre-rendered URL set + the original's pixel `dimensions`
 * (`with-images-urls.v3.schema`) and an optional `credit`
 * (`with-credit.v1.schema`). Every field is optional in turn, including the
 * URLs: a producer that only renders a thumbnail emits only `thumbnailUrl`.
 *
 * It carries a `credit` for the same reason `sheets[]` does: cover art is
 * very often commissioned, by someone who is not the bundle's author and
 * whose licence may differ from the bundle's. `credit.license` overrides the
 * bundle's for this one file; absent, it inherits — see
 * {@link "../mixins/with-credit.v1.schema"}.
 *
 * This file MUST NOT be modified once shipped.
 */

declare const BundleImageV14Schema: z.ZodObject<{
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
}>;
type BundleImageV14 = z.infer<typeof BundleImageV14Schema>;

export { type BundleImageV14 as B, BundleImageV14Schema as a };
