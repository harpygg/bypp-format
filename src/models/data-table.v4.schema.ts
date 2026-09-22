/**
 * Data-table schema as **introduced in bypp v27** — v3 with a `choice` column
 * whose options carry a locale-keyed `label` (`ChoiceOptionV27Schema`, the
 * same option shape a `choice` variable carries since v27).
 *
 * Every other column type and the row shape are re-used unchanged; only
 * `choice` moves and the column union is re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithLocalizedNameV2Schema } from "../mixins/with-localized-name.v2.schema";
import { DataTableUidSchema } from "../uid";
import {
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnDataTableLookupV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnTranslatableTextV2Schema,
} from "./data-table.v2.schema";
import { DataTableRowV3Schema } from "./data-table.v3.schema";
import { ChoiceOptionV27Schema } from "./variable.v11.schema";

export const DataTableColumnChoiceV4Schema =
  DataTableColumnChoiceV2Schema.extend({
    options: z.array(ChoiceOptionV27Schema).optional(),
  });

export type DataTableColumnChoiceV4 = z.infer<
  typeof DataTableColumnChoiceV4Schema
>;

export const DataTableColumnV4Schema = z.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV4Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema,
]);

export type DataTableColumnV4 = z.infer<typeof DataTableColumnV4Schema>;

export const DataTableV4Schema = z
  .object({ uid: DataTableUidSchema })
  .merge(WithLocalizedNameV2Schema)
  .extend({
    icon: z.string().optional(),
    weight: z.number().optional(),
    adminOnly: z.boolean().optional(),
    sourceUid: DataTableUidSchema.optional(),
    columns: z.array(DataTableColumnV4Schema).default([]),
    rows: z.array(DataTableRowV3Schema).default([]),
  });

export type DataTableV4 = z.infer<typeof DataTableV4Schema>;
