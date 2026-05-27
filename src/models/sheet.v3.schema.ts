import { z } from "zod";
import { WithImagesUrlsV2Schema } from "../mixins/with-images-urls.v2.schema";
import { DatasetUidSchema, SheetUidSchema, WidgetUidSchema } from "../uid";

/**
 * Sheet — v3 changes:
 *  - `widgetUids` defaults to `[]` (an empty sheet is valid).
 *  - Image URLs go through `WithImagesUrlsV2Schema` (url-validated).
 *  - `name` switched from `.nullable().optional()` to plain `.optional()`.
 */
export const SheetV3Schema = z
  .object({ uid: SheetUidSchema })
  .merge(WithImagesUrlsV2Schema)
  .extend({
    name: z.string().optional(),
    widgetUids: z.array(WidgetUidSchema).default([]),
    compatibleDatasetUid: DatasetUidSchema.optional(),
  });

export type SheetV3 = z.infer<typeof SheetV3Schema>;
