import { z } from "zod";
import { WithImagesUrlsSchema } from "../mixins/with-images-urls.schema";
import { DatasetUidSchema, SheetUidSchema, WidgetUidSchema } from "../uid";

/**
 * A sheet — the visual canvas that lays out widgets driven by a dataset's
 * variables. Sheets reference top-level widgets by UID (ordered).
 *
 * `compatibleDatasetUid` is the dataset whose variables this sheet renders.
 * It mirrors `dataset.sheetUid` and helps a reader find the right sheet for
 * a given dataset without re-walking every sheet.
 */
export const SheetSchema = z
  .object({ uid: SheetUidSchema })
  .merge(WithImagesUrlsSchema)
  .extend({
    name: z.string().nullable().optional(),
    widgetUids: z.array(WidgetUidSchema),
    compatibleDatasetUid: DatasetUidSchema.optional(),
  });

export type Sheet = z.infer<typeof SheetSchema>;
