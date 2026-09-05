import { z } from "zod";

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
export const ByppFileUrlV1Schema = z
  .string()
  .url()
  .refine(
    (url) => {
      try {
        return /\.bypp$/i.test(new URL(url).pathname);
      } catch {
        return false;
      }
    },
    { message: "must be the address of a .bypp file" },
  );

export const RequirementSourceV1Schema = z.object({
  byppUrl: ByppFileUrlV1Schema,
  bundleName: z.string().optional(),
  bundleVersion: z.string().optional(),
});

export type RequirementSourceV1 = z.infer<typeof RequirementSourceV1Schema>;

export const RequirementV1Schema = z.object({
  category: z.string(),
  uid: z.string(),
  name: z.string().optional(),
  from: RequirementSourceV1Schema.optional(),
});

export type RequirementV1 = z.infer<typeof RequirementV1Schema>;
