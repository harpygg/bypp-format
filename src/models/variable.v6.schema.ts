/**
 * Variable schema as **introduced in bypp v6** — extends v5 with one new
 * variant: `dataTableDirectLookup`.
 *
 * A `dataTableDirectLookup` variable reads a column from one or more rows
 * of a data-table, with the row(s) chosen DIRECTLY on the variable config.
 * It is the source-less sibling of `dataTableLookup`: where the lookup gets
 * its row uid(s) from an upstream `dataTableRef` variable, the direct lookup
 * bakes them into `rowUids`. Carries no stored per-instance value — its value
 * is recomputed on demand from `(dataTableUid, columnUid, rowUids,
 * multiAggregator)`.
 *
 * The v5 variants (the 6 v1 ones, the two data-table-aware v2 ones, and the
 * v5 `image` one) are unchanged and re-imported directly. Only the new
 * variant and the union are defined here.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import {
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  NumberVariableV1Schema,
  RollVariableV1Schema,
  TextVariableV1Schema,
  VariableBaseV1Schema,
} from "./variable.v1.schema";
import {
  DataTableLookupVariableV2Schema,
  DataTableRefVariableV2Schema,
} from "./variable.v2.schema";
import { ImageVariableV5Schema } from "./variable.v5.schema";
import {
  DataTableColumnUidSchema,
  DataTableRowUidSchema,
  DataTableUidSchema,
} from "../uid";

/**
 * A derived variable that reads a column from explicitly chosen row(s) of a
 * data-table. Unlike `dataTableLookup`, there is no `sourceVariableUid` — the
 * row uid(s) live on `rowUids`.
 *
 * Fields:
 *  - `dataTableUid` — the table to read from.
 *  - `columnUid` — the column on that table to read.
 *  - `rowUids` — the rows whose `columnUid` cell is read / aggregated.
 *  - `chainedLabelColumnUids` — per-hop column overrides when `columnUid`
 *    is itself a `dataTableRef` and the chain follows multiple jumps. Same
 *    semantics as `dataTableLookup`.
 *  - `multiAggregator` — how to combine values when more than one row is
 *    selected:
 *    - `"concat"` (default) — join cell values with `multiSeparator`.
 *    - `"sum"` / `"avg"` / `"min"` / `"max"` — numeric aggregators over
 *      number-typed cells only; if no number cell contributes the lookup
 *      fails.
 *  - `multiSeparator` — the string used by `"concat"`. Defaults to `", "`
 *    when absent.
 *
 * All fields optional so a partially-configured direct lookup can exist
 * during dialog authoring.
 */
export const DataTableDirectLookupVariableV6Schema = VariableBaseV1Schema.extend(
  {
    type: z.literal("dataTableDirectLookup"),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    rowUids: z.array(DataTableRowUidSchema).optional(),
    chainedLabelColumnUids: z.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z.string().optional(),
  },
);

export type DataTableDirectLookupVariableV6 = z.infer<
  typeof DataTableDirectLookupVariableV6Schema
>;

/**
 * Discriminated union of all variable variants as of bypp v6 — the v5 set
 * plus `dataTableDirectLookup`. Narrow with `variable.type`.
 */
export const VariableV6Schema = z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
  ImageVariableV5Schema,
  DataTableDirectLookupVariableV6Schema,
]);

export type VariableV6 = z.infer<typeof VariableV6Schema>;
