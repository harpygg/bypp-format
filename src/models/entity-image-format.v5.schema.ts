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

import { z } from "zod";
import { WithImagesUrlsV2Schema } from "../mixins/with-images-urls.v2.schema";

/** The canonical entity image renditions. Order is not significant. */
export const ENTITY_IMAGE_RENDITIONS = [
  "original",
  "thumbnail",
  "square",
  "closeup",
] as const;

export const EntityImageFormatV5Schema = z.enum(ENTITY_IMAGE_RENDITIONS);

export type EntityImageFormatV5 = z.infer<typeof EntityImageFormatV5Schema>;

// ─── Compile-time link to the entity image fields ────────────────────────
//
// Every rendition must map to an existing `${rendition}Url` field on the
// entity image mixin, and every image URL field must have a matching
// rendition. Add or rename one without the other and the build breaks here
// — keeping `formatSlug`'s options and the entity's actual images in lockstep.

type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
type Expect<T extends true> = T;

type ImageUrlFieldKeys = keyof z.infer<typeof WithImagesUrlsV2Schema>;
type RenditionUrlKeys = `${(typeof ENTITY_IMAGE_RENDITIONS)[number]}Url`;

type _AssertRenditionsMatchImageFields = Expect<
  Equal<ImageUrlFieldKeys, RenditionUrlKeys>
>;
