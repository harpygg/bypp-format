import { z } from "zod";
import { TranslatableTextSchema } from "../mixins/translatable-text.schema";
import {
  DataTableColumnUidSchema,
  DataTableRowUidSchema,
  DataTableUidSchema,
} from "../uid";
import { ChoiceOptionSchema } from "./variable.schema";

// ─── Columns ────────────────────────────────────────────────────────
//
// One schema per column type, in the same discriminated-union pattern as
// `VariableSchema`. Per-type config fields are inlined on the column (no
// nested `config: { … }`) so consumers narrow with `column.type` and read
// the relevant fields directly.

const DataTableColumnBaseSchema = z.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextSchema.optional(),
  icon: z.string().optional(),
  isMandatory: z.boolean().optional(),
});

export const DataTableColumnNumberSchema = DataTableColumnBaseSchema.extend({
  type: z.literal("number"),
  defaultNumber: z.number().optional(),
});

export type DataTableColumnNumber = z.infer<typeof DataTableColumnNumberSchema>;

export const DataTableColumnTextSchema = DataTableColumnBaseSchema.extend({
  type: z.literal("text"),
  maxChars: z.number().optional(),
  defaultValue: z.string().optional(),
});

export type DataTableColumnText = z.infer<typeof DataTableColumnTextSchema>;

export const DataTableColumnBooleanSchema = DataTableColumnBaseSchema.extend({
  type: z.literal("boolean"),
  defaultBoolean: z.boolean().optional(),
});

export type DataTableColumnBoolean = z.infer<
  typeof DataTableColumnBooleanSchema
>;

export const DataTableColumnChoiceSchema = DataTableColumnBaseSchema.extend({
  type: z.literal("choice"),
  options: z.array(ChoiceOptionSchema).optional(),
  isMultiple: z.boolean().optional(),
  hasNumericValue: z.boolean().optional(),
  hasIcon: z.boolean().optional(),
});

export type DataTableColumnChoice = z.infer<typeof DataTableColumnChoiceSchema>;

export const DataTableColumnIconSchema = DataTableColumnBaseSchema.extend({
  type: z.literal("icon"),
  defaultIcon: z.string().optional(),
});

export type DataTableColumnIcon = z.infer<typeof DataTableColumnIconSchema>;

export const DataTableColumnTranslatableTextSchema =
  DataTableColumnBaseSchema.extend({
    type: z.literal("translatableText"),
    defaultValue: TranslatableTextSchema.optional(),
  });

export type DataTableColumnTranslatableText = z.infer<
  typeof DataTableColumnTranslatableTextSchema
>;

/**
 * Per-row reference to another data-table's row(s).
 * Display / formula resolution looks up the referenced row in
 * `dataTableUid` and reads `labelColumnUid` (display) / `valueColumnUid` (value).
 */
export const DataTableColumnDataTableRefSchema =
  DataTableColumnBaseSchema.extend({
    type: z.literal("dataTableRef"),
    dataTableUid: DataTableUidSchema.optional(),
    labelColumnUid: DataTableColumnUidSchema.optional(),
    valueColumnUid: DataTableColumnUidSchema.optional(),
    iconColumnUid: DataTableColumnUidSchema.optional(),
    isMultiple: z.boolean().optional(),
    defaultRowUids: z.array(DataTableRowUidSchema).optional(),
  });

export type DataTableColumnDataTableRef = z.infer<
  typeof DataTableColumnDataTableRefSchema
>;

/**
 * Derived column: reads a cell of another data-table given row uid(s)
 * supplied by a sibling `dataTableRef` column (`sourceColumnUid`).
 * Carries no row data of its own.
 */
export const DataTableColumnDataTableLookupSchema =
  DataTableColumnBaseSchema.extend({
    type: z.literal("dataTableLookup"),
    sourceColumnUid: DataTableColumnUidSchema.optional(),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    chainedLabelColumnUids: z.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z.string().optional(),
  });

export type DataTableColumnDataTableLookup = z.infer<
  typeof DataTableColumnDataTableLookupSchema
>;

export const DataTableColumnSchema = z.discriminatedUnion("type", [
  DataTableColumnNumberSchema,
  DataTableColumnTextSchema,
  DataTableColumnBooleanSchema,
  DataTableColumnChoiceSchema,
  DataTableColumnIconSchema,
  DataTableColumnTranslatableTextSchema,
  DataTableColumnDataTableRefSchema,
  DataTableColumnDataTableLookupSchema,
]);

export type DataTableColumn = z.infer<typeof DataTableColumnSchema>;

// ─── Rows ───────────────────────────────────────────────────────────
//
// Cell values are keyed by column uid. Their shape is constrained by the
// matching column's `type` (number → number, text → string, choice → option
// uid(s), …). zod can't express that cross-key correlation, so we type each
// value as a permissive union and rely on consumers to narrow against the
// column's `type` at read time. Lookup columns carry no per-row value.

export const DataTableCellValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.string()),
  TranslatableTextSchema,
  z.null(),
]);

export type DataTableCellValue = z.infer<typeof DataTableCellValueSchema>;

export const DataTableRowSchema = z.object({
  uid: DataTableRowUidSchema,
  data: z.record(DataTableColumnUidSchema, DataTableCellValueSchema).optional(),
});

export type DataTableRow = z.infer<typeof DataTableRowSchema>;

// ─── Data Table ─────────────────────────────────────────────────────

export const DataTableSchema = z.object({
  uid: DataTableUidSchema,
  name: TranslatableTextSchema,
  icon: z.string().nullable().optional(),
  weight: z.number().optional(),
  adminOnly: z.boolean().optional(),
  sourceUid: DataTableUidSchema.optional(),
  columns: z.array(DataTableColumnSchema),
  rows: z.array(DataTableRowSchema),
});

export type DataTable = z.infer<typeof DataTableSchema>;
