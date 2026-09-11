import { z } from 'zod';

/**
 * One item this document reads but does not carry: it must already exist
 * wherever the document is installed — most often because another bundle,
 * present there, provides it.
 *
 * `category` names the content array the item would sit in (`"datasets"`,
 * `"variables"`, `"dataTables"`, …) and `uid` its identifier in that array.
 * Uids are stable across a bundle's versions, so this pair is the contract; a
 * reader checks presence by uid, never by version.
 *
 * `name` is a courtesy for the human who has to fix a missing requirement.
 *
 * `from` is a hint at where the item can be found: `byppUrl` is the address
 * of the `.bypp` document that provides it — a file, fetchable as-is, so any
 * reader can satisfy the requirement with nothing but this format. Not a web
 * page, and not an identifier of any platform: whoever serves the file is free
 * to recognise the address as their own, the format does not. `bundleName`
 * and `bundleVersion` say what the producer was reading, in the words of the
 * manifest (`bundleVersion` is the same free string as the manifest's own).
 * A hint only: the same uid provided by a newer version of that document, or
 * by any other source, satisfies the requirement.
 *
 * Everything here is a loose string: a requirement produced by one platform
 * must stay readable by another that has never heard of the first.
 */
/**
 * A URL whose path names a `.bypp` file. Checked on the path alone: a
 * download link may well carry a query string (a token, `alt=media`) or a
 * fragment after the name, and neither says anything about what is served.
 * The extension is the format's own (`BYPP_FORMAT_EXT`), and requiring it is
 * what keeps a web page — the bundle's storefront, say — from being mistaken
 * for the file: a reader fetches this address and parses the answer, nothing
 * else.
 */
declare const ByppFileUrlV1Schema: z.ZodEffects<z.ZodString, string, string>;
declare const RequirementSourceV1Schema: z.ZodObject<{
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
}>;
type RequirementSourceV1 = z.infer<typeof RequirementSourceV1Schema>;
declare const RequirementV1Schema: z.ZodObject<{
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
}>;
type RequirementV1 = z.infer<typeof RequirementV1Schema>;

export { ByppFileUrlV1Schema as B, type RequirementV1 as R, type RequirementSourceV1 as a, RequirementV1Schema as b, RequirementSourceV1Schema as c };
