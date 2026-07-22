import { z } from "zod";
import { CcLicenseV3Schema } from "../schemas/bypp.v3.schema";

/**
 * Credit for the human who made a single media file — an illustrator, a
 * composer, a cartographer, a photographer.
 *
 *  - `name` — who to credit. Required whenever the block is present: a
 *    credit without a name credits nobody.
 *  - `url` — where to find them (portfolio, shop, profile page).
 *  - `license` — the licence THIS FILE is under, when it differs from the
 *    bundle's. Same enum as the bundle-level `license`
 *    (`CcLicenseV3Schema`); there is deliberately no second licence
 *    vocabulary in the format. Absent means "inherits the bundle's
 *    licence".
 *
 * Why this exists: before v13 a bundle had exactly one licence, so a bundle
 * mixing a commissioned illustration (not reusable) with CC0 sound effects
 * had to collapse to the most restrictive item and declare the whole thing
 * `ARR` — dishonest about the files that were in fact free to reuse. A
 * per-file credit lets the bundle stay accurate file by file.
 */
export const CreditV1Schema = z.object({
  name: z.string().min(1),
  url: z.string().url().optional(),
  license: CcLicenseV3Schema.optional(),
});

export type CreditV1 = z.infer<typeof CreditV1Schema>;

/**
 * Mixin: an optional per-file `credit`.
 *
 * It is a mixin of its own rather than a field on `with-images-urls` because
 * credit is not an image concern — audio and video carry their own URL
 * mixins (`with-audio-urls`, `with-video-urls`), and folding credit into the
 * image one would mean three copies free to drift apart.
 *
 * It also has the opposite lifecycle to the storage fields it sits next to.
 * Every URL / path / token field is rewritten when a file is re-encoded or
 * re-uploaded; the credit must survive that untouched — re-encoding a
 * painting does not change who painted it.
 */
export const WithCreditV1Schema = z.object({
  credit: CreditV1Schema.optional(),
});

export type WithCreditV1 = z.infer<typeof WithCreditV1Schema>;
