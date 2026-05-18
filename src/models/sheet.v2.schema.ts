/**
 * Sheet schema as **introduced in bypp v2**.
 *
 * A sheet is the visual canvas that lays out widgets driven by a
 * dataset's variables. Sheets are what users see when they open an
 * entity: a grid of widgets rendering / editing the values stored in
 * the entity's data record.
 *
 * Fields:
 *  - `name` — optional display label.
 *  - `widgetUids` — the widgets composing this sheet, **in z-order**
 *    (later entries paint on top of earlier ones — relevant for
 *    overlapping widgets). The actual widget definitions live in the
 *    bundle's top-level `widgets[]` array; this field references them
 *    by uid.
 *  - `compatibleDatasetUid` — the dataset whose variables this sheet
 *    renders. Mirrors `dataset.sheetUid` (the dataset → sheet link)
 *    and helps readers find the right sheet for a given dataset
 *    without re-walking every sheet. Optional — sheets that aren't
 *    dataset-bound omit it.
 *  - Image URLs (mixin) — optional thumbnail / preview of the sheet
 *    itself.
 */

import { z } from "zod";
import { WithImagesUrlsV1Schema } from "../mixins/with-images-urls.v1.schema";
import { DatasetUidSchema, SheetUidSchema, WidgetUidSchema } from "../uid";

export const SheetV2Schema = z
  .object({ uid: SheetUidSchema })
  .merge(WithImagesUrlsV1Schema)
  .extend({
    name: z.string().nullable().optional(),
    widgetUids: z.array(WidgetUidSchema),
    compatibleDatasetUid: DatasetUidSchema.optional(),
  });

export type SheetV2 = z.infer<typeof SheetV2Schema>;
