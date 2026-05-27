import { z } from "zod";
import { WithLocalizedNameV2Schema } from "../mixins/with-localized-name.v2.schema";
import {
  DataTableColumnUidSchema,
  DataTableRowUidSchema,
  DataTableUidSchema,
} from "../uid";
import {
  DataTableCellValueV2Schema,
  DataTableColumnV2Schema,
} from "./data-table.v2.schema";

/**
 * Data-table row — v3: `data` already optional in v2, unchanged.
 */
export const DataTableRowV3Schema = z.object({
  uid: DataTableRowUidSchema,
  data: z
    .record(DataTableColumnUidSchema, DataTableCellValueV2Schema)
    .optional(),
});

export type DataTableRowV3 = z.infer<typeof DataTableRowV3Schema>;

/**
 * Data-table — v3 changes: `columns` and `rows` default to `[]`.
 * Column shapes themselves are re-exported from v2 (no change needed).
 */
export const DataTableV3Schema = z
  .object({ uid: DataTableUidSchema })
  .merge(WithLocalizedNameV2Schema)
  .extend({
    icon: z.string().optional(),
    weight: z.number().optional(),
    adminOnly: z.boolean().optional(),
    sourceUid: DataTableUidSchema.optional(),
    columns: z.array(DataTableColumnV2Schema).default([]),
    rows: z.array(DataTableRowV3Schema).default([]),
  });

export type DataTableV3 = z.infer<typeof DataTableV3Schema>;
