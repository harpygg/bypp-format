/**
 * Variable schema as **introduced in bypp v2** — extends v1 with two
 * data-table-aware variants: `dataTableRef` and `dataTableLookup`.
 *
 * Variables of these two types reference rows of a data-table (defined
 * in `dataTables[]` at the bundle's top level). They were added in v2
 * alongside the data-table feature itself.
 *
 * Sub-shapes that didn't change from v1 (NumberVariable, TextVariable,
 * etc.) are re-imported directly from `variable.v1.schema.ts`. Only the
 * union itself and the two new variants are defined here.
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
  DataTableColumnUidSchema,
  DataTableRowUidSchema,
  DataTableUidSchema,
  VariableUidSchema,
} from "../uid";

/**
 * A variable whose stored value points to one (or many, if `isMultiple`)
 * row(s) of a target data-table. Picker-style — the user picks rows
 * from a list backed by the data-table's contents.
 *
 * Fields:
 *  - `dataTableUid` — the target data-table.
 *  - `labelColumnUid` — column of the target table used to render the
 *    display label in pickers and cells (what the user SEES).
 *  - `valueColumnUid` — column of the target table read when the
 *    variable is used as a value in formulas / lookups (what other
 *    code GETS). May be the same column as `labelColumnUid`.
 *  - `iconColumnUid` — column carrying an icon name; prefixes picker /
 *    cell rendering. Must point to an `icon`-type column in the target
 *    table when set.
 *  - `isMultiple` — when `true`, the stored value is a list of row
 *    uids; when `false` or absent, a single row uid (or `null` if
 *    unset).
 *  - `defaultRowUids` — pre-selected row uid(s) used when the entity has
 *    no value yet. In single mode, only the first is used.
 *
 * All config fields are optional so a partially-configured ref can
 * exist during a dialog flow. Readers must handle the partial state
 * gracefully (display the variable as "not configured" rather than
 * crash).
 */
export const DataTableRefVariableV2Schema = VariableBaseV1Schema.extend({
  type: z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z.boolean().optional(),
  defaultRowUids: z.array(DataTableRowUidSchema).optional(),
});

export type DataTableRefVariableV2 = z.infer<
  typeof DataTableRefVariableV2Schema
>;

/**
 * A derived variable that reads a cell from a data-table, given row
 * uid(s) supplied by an upstream `dataTableRef` variable. Carries no
 * stored value of its own — its value is recomputed on demand.
 *
 * Fields:
 *  - `sourceVariableUid` — the sibling `dataTableRef` variable on the
 *    same entity whose stored row uid(s) feed this lookup. When absent
 *    or pointing to a non-ref variable, the lookup resolves to nothing.
 *  - `dataTableUid` — the table to read from on the **primary** hop.
 *  - `columnUid` — the column on the primary table to read.
 *  - `chainedLabelColumnUids` — per-hop column overrides when the chain
 *    follows multiple `dataTableRef` jumps (the source ref's
 *    `valueColumnUid` might itself be a `dataTableRef` pointing to
 *    another table, and so on). `chainedLabelColumnUids[i]` overrides
 *    the column read on the i-th hop. Each hop without an override
 *    falls back to that intermediate ref's `labelColumnUid`.
 *  - `multiAggregator` — how to combine values when the source supplies
 *    more than one row:
 *    - `"concat"` (default) — join cell values with `multiSeparator`.
 *    - `"sum"` / `"avg"` / `"min"` / `"max"` — numeric aggregators
 *      over number-typed cells only; if no number cell contributes the
 *      lookup fails.
 *  - `multiSeparator` — the string used by `"concat"`. Defaults to
 *    `", "` when absent.
 *
 * All fields optional so a partially-configured lookup can exist during
 * dialog authoring.
 */
export const DataTableLookupVariableV2Schema = VariableBaseV1Schema.extend({
  type: z.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z.string().optional(),
});

export type DataTableLookupVariableV2 = z.infer<
  typeof DataTableLookupVariableV2Schema
>;

/**
 * Discriminated union of all v2 variable variants — the 6 v1 variants
 * plus the two new data-table-aware ones. Narrow with `variable.type`.
 */
export const VariableV2Schema = z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
  DataTableRefVariableV2Schema,
  DataTableLookupVariableV2Schema,
]);

export type VariableV2 = z.infer<typeof VariableV2Schema>;
