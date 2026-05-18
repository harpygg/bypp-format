/**
 * DataTable schema as **introduced in bypp v2**.
 *
 * A data-table is a piece of structured reference content: typed
 * columns + rows. Conceptually a small relational table — think
 * "Classes", "Spells", "Bestiary entries". Other parts of a bundle
 * reference its rows by uid (e.g. `dataTableRef` / `dataTableLookup`
 * variables and columns).
 *
 * Unlike entities (which carry per-instance user data), data-tables are
 * **authored content**: shipped by the producer, identical for every
 * reader.
 *
 * Columns are a discriminated union by `type` (same pattern as
 * variables, widgets, chunks). Each column type carries its own typed
 * config inline (no nested `config: { … }` wrapper).
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TranslatableTextV2Schema } from "../mixins/translatable-text.v2.schema";
import { WithLocalizedNameV2Schema } from "../mixins/with-localized-name.v2.schema";
import {
  DataTableColumnUidSchema,
  DataTableRowUidSchema,
  DataTableUidSchema,
} from "../uid";
import { ChoiceOptionV1Schema } from "./variable.v1.schema";

// ─── Columns ────────────────────────────────────────────────────────

/**
 * Fields common to every column variant.
 *
 *  - `label` — locale-keyed display label (e.g. `{ en: "Class", fr:
 *    "Classe" }`). Different from the column's `uid` which is the
 *    stable identifier.
 *  - `icon` — optional FontAwesome-style icon name shown alongside the
 *    column header.
 *  - `isMandatory` — when `true`, the reader's authoring UI should
 *    refuse to "save" a row that doesn't have a value for this column.
 *    UX-only; bypp doesn't enforce.
 */
const DataTableColumnBaseV2Schema = z.object({
  uid: DataTableColumnUidSchema,
  label: TranslatableTextV2Schema.optional(),
  icon: z.string().optional(),
  isMandatory: z.boolean().optional(),
});

/** A numeric column. `defaultNumber` is the seed value used when no per-row value is stored. */
export const DataTableColumnNumberV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z.literal("number"),
    defaultNumber: z.number().optional(),
  },
);

export type DataTableColumnNumberV2 = z.infer<
  typeof DataTableColumnNumberV2Schema
>;

/**
 * A plain text column. `maxChars` is a UX-only cap on input length.
 * `defaultValue` is the seed string.
 */
export const DataTableColumnTextV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z.literal("text"),
  maxChars: z.number().optional(),
  defaultValue: z.string().optional(),
});

export type DataTableColumnTextV2 = z.infer<
  typeof DataTableColumnTextV2Schema
>;

/** A boolean column. `defaultBoolean` is the seed state. */
export const DataTableColumnBooleanV2Schema =
  DataTableColumnBaseV2Schema.extend({
    type: z.literal("boolean"),
    defaultBoolean: z.boolean().optional(),
  });

export type DataTableColumnBooleanV2 = z.infer<
  typeof DataTableColumnBooleanV2Schema
>;

/**
 * A picker column with a fixed set of options.
 *
 *  - `options[]` — the available choices (see `ChoiceOptionV1Schema`).
 *  - `isMultiple` — when `true`, each row stores an array of option
 *    uids; when `false` (default), a single uid.
 *  - `hasNumericValue` — when `true`, each option exposes a numeric
 *    value, used by formulas / lookups referencing this column.
 *  - `hasIcon` — when `true`, each option carries an icon name, prefixed
 *    in cell rendering.
 *
 * Same semantics as choice **variables** (see
 * `ChoiceVariableV1Schema`) — the same `ChoiceOption` shape is reused
 * for option entries.
 */
export const DataTableColumnChoiceV2Schema = DataTableColumnBaseV2Schema.extend(
  {
    type: z.literal("choice"),
    options: z.array(ChoiceOptionV1Schema).optional(),
    isMultiple: z.boolean().optional(),
    hasNumericValue: z.boolean().optional(),
    hasIcon: z.boolean().optional(),
  },
);

export type DataTableColumnChoiceV2 = z.infer<
  typeof DataTableColumnChoiceV2Schema
>;

/**
 * An icon column. Each row stores a single FontAwesome-style icon name.
 *
 * `defaultIcon` is the seed icon name used when no per-row value is set.
 *
 * Note: icon columns exist in data-tables only; they're disallowed as
 * sheet variables (would duplicate the variable-level `icon` field).
 */
export const DataTableColumnIconV2Schema = DataTableColumnBaseV2Schema.extend({
  type: z.literal("icon"),
  defaultIcon: z.string().optional(),
});

export type DataTableColumnIconV2 = z.infer<
  typeof DataTableColumnIconV2Schema
>;

/**
 * A column whose cells store **locale-keyed** strings (a `TranslatableText`
 * record like `{ en: "Wizard", fr: "Magicien" }`).
 *
 * Use this for preset content that ships across languages — e.g. a
 * "Classes" table where each row carries the class name in every
 * supported locale. Regular `text` columns still exist for mono-lingual
 * user-typed data.
 *
 * `defaultValue` is the seed record used when no per-row value is set.
 */
export const DataTableColumnTranslatableTextV2Schema =
  DataTableColumnBaseV2Schema.extend({
    type: z.literal("translatableText"),
    defaultValue: TranslatableTextV2Schema.optional(),
  });

export type DataTableColumnTranslatableTextV2 = z.infer<
  typeof DataTableColumnTranslatableTextV2Schema
>;

/**
 * A column whose cells store row uid(s) pointing to **another**
 * data-table. Same semantics as the `dataTableRef` **variable** — see
 * `DataTableRefVariableV2Schema` for the field-level explanations.
 *
 * Why have both a variable AND a column variant? Variables live on
 * sheets (per-entity instances), columns live in data-tables (authored
 * content). A "race" table column can ref a "subraces" table; a sheet
 * variable can ref a "class" table.
 */
export const DataTableColumnDataTableRefV2Schema =
  DataTableColumnBaseV2Schema.extend({
    type: z.literal("dataTableRef"),
    dataTableUid: DataTableUidSchema.optional(),
    labelColumnUid: DataTableColumnUidSchema.optional(),
    valueColumnUid: DataTableColumnUidSchema.optional(),
    iconColumnUid: DataTableColumnUidSchema.optional(),
    isMultiple: z.boolean().optional(),
    defaultRowUids: z.array(DataTableRowUidSchema).optional(),
  });

export type DataTableColumnDataTableRefV2 = z.infer<
  typeof DataTableColumnDataTableRefV2Schema
>;

/**
 * A derived column that reads a cell of another data-table given row
 * uid(s) supplied by a **sibling** column on the SAME table.
 *
 * Fields:
 *  - `sourceColumnUid` — the sibling column (must be a `dataTableRef`
 *    column on the same data-table) whose row uid(s) feed the lookup.
 *    Same role as `sourceVariableUid` on the lookup variable, but
 *    scoped to columns.
 *  - `dataTableUid` / `columnUid` / `chainedLabelColumnUids` /
 *    `multiAggregator` / `multiSeparator` — same semantics as the
 *    lookup **variable** (see `DataTableLookupVariableV2Schema`).
 *
 * Lookup columns carry no per-row value of their own; their value is
 * recomputed from the source column on read.
 */
export const DataTableColumnDataTableLookupV2Schema =
  DataTableColumnBaseV2Schema.extend({
    type: z.literal("dataTableLookup"),
    sourceColumnUid: DataTableColumnUidSchema.optional(),
    dataTableUid: DataTableUidSchema.optional(),
    columnUid: DataTableColumnUidSchema.optional(),
    chainedLabelColumnUids: z.array(DataTableColumnUidSchema).optional(),
    multiAggregator: z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
    multiSeparator: z.string().optional(),
  });

export type DataTableColumnDataTableLookupV2 = z.infer<
  typeof DataTableColumnDataTableLookupV2Schema
>;

/**
 * Discriminated union of every data-table column type. Narrow with
 * `column.type` to access type-specific fields.
 */
export const DataTableColumnV2Schema = z.discriminatedUnion("type", [
  DataTableColumnNumberV2Schema,
  DataTableColumnTextV2Schema,
  DataTableColumnBooleanV2Schema,
  DataTableColumnChoiceV2Schema,
  DataTableColumnIconV2Schema,
  DataTableColumnTranslatableTextV2Schema,
  DataTableColumnDataTableRefV2Schema,
  DataTableColumnDataTableLookupV2Schema,
]);

export type DataTableColumnV2 = z.infer<typeof DataTableColumnV2Schema>;

// ─── Rows ───────────────────────────────────────────────────────────

/**
 * A single cell's value. The actual shape constraint depends on the
 * column's `type` (number → number, text → string, choice → option
 * uid(s), translatableText → record, …). Because zod records can't
 * express that per-key correlation, the union is permissive — consumers
 * narrow against the column's `type` at read time.
 *
 * Lookup columns carry no value (their cells are absent from
 * `row.data`).
 */
export const DataTableCellValueV2Schema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.string()),
  TranslatableTextV2Schema,
  z.null(),
]);

export type DataTableCellValueV2 = z.infer<typeof DataTableCellValueV2Schema>;

/**
 * A single row: a uid + an optional map of column-uid → cell value.
 * Missing column entries are valid — they mean "no value set" and the
 * reader uses the column's `defaultX` seed.
 */
export const DataTableRowV2Schema = z.object({
  uid: DataTableRowUidSchema,
  data: z
    .record(DataTableColumnUidSchema, DataTableCellValueV2Schema)
    .optional(),
});

export type DataTableRowV2 = z.infer<typeof DataTableRowV2Schema>;

// ─── Data Table ─────────────────────────────────────────────────────

/**
 * A data-table — typed columns + rows of authored reference data.
 *
 *  - `name` — locale-keyed display label (e.g. `{ en: "Spells", fr:
 *    "Sorts" }`).
 *  - `icon` — optional FontAwesome-style icon name used when the table
 *    is shown in lists / browsers. `null` means "no icon".
 *  - `weight` — optional sort hint when listing multiple tables in the
 *    same UI. Lower weight = earlier in the list.
 *  - `adminOnly` — when `true`, only admin / GM users should see this
 *    table in the reader. UX-only — bypp doesn't enforce.
 *  - `sourceUid` — when this table was cloned from another table (a
 *    "fork" — e.g. user-customized version of a published table), this
 *    points back to the original. Lets readers show a "based on X"
 *    chip.
 *  - `columns[]` / `rows[]` — the actual table content.
 */
export const DataTableV2Schema = z
  .object({ uid: DataTableUidSchema })
  .merge(WithLocalizedNameV2Schema)
  .extend({
    icon: z.string().nullable().optional(),
    weight: z.number().optional(),
    adminOnly: z.boolean().optional(),
    sourceUid: DataTableUidSchema.optional(),
    columns: z.array(DataTableColumnV2Schema),
    rows: z.array(DataTableRowV2Schema),
  });

export type DataTableV2 = z.infer<typeof DataTableV2Schema>;
