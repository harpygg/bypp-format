/**
 * Sheet schema as **introduced in bypp v6-of-sheet** (bypp format v10) — v5
 * with the image URLs upgraded from `WithImagesUrlsV2` to `WithImagesUrlsV3`
 * (adds the original image's `dimensions`). The sheet's background is its own
 * stored image, and readers need its aspect-ratio to lay out the widgets;
 * before v6 the dimensions were lost on export. Everything else is unchanged
 * from v5.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithImagesUrlsV3Schema } from "../mixins/with-images-urls.v3.schema";
import { SheetV5Schema } from "./sheet.v5.schema";

export const SheetV6Schema = SheetV5Schema.merge(WithImagesUrlsV3Schema);

export type SheetV6 = z.infer<typeof SheetV6Schema>;
