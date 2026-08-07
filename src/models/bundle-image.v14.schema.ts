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

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithImagesUrlsV3Schema } from "../mixins/with-images-urls.v3.schema";

export const BundleImageV14Schema =
  WithImagesUrlsV3Schema.merge(WithCreditV1Schema);

export type BundleImageV14 = z.infer<typeof BundleImageV14Schema>;
