import { j as DataTableRowUid, i as DataTableColumnUid, b as VariableChoiceUid, h as DataTableUid } from './scene.v2.schema-WTy2SpxZ.js';
import { z } from 'zod';

/** A numeric column. `defaultNumber` is the seed value used when no per-row value is stored. */
declare const DataTableColumnNumberV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"number">;
    defaultNumber: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultNumber?: number | undefined;
}, {
    type: "number";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultNumber?: number | undefined;
}>;
type DataTableColumnNumberV2 = z.infer<typeof DataTableColumnNumberV2Schema>;
/**
 * A plain text column. `maxChars` is a UX-only cap on input length.
 * `defaultValue` is the seed string.
 */
declare const DataTableColumnTextV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>;
type DataTableColumnTextV2 = z.infer<typeof DataTableColumnTextV2Schema>;
/** A boolean column. `defaultBoolean` is the seed state. */
declare const DataTableColumnBooleanV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"boolean">;
    defaultBoolean: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultBoolean?: boolean | undefined;
}, {
    type: "boolean";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultBoolean?: boolean | undefined;
}>;
type DataTableColumnBooleanV2 = z.infer<typeof DataTableColumnBooleanV2Schema>;
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
declare const DataTableColumnChoiceV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"choice">;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        label: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
}, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
}>;
type DataTableColumnChoiceV2 = z.infer<typeof DataTableColumnChoiceV2Schema>;
/**
 * An icon column. Each row stores a single FontAwesome-style icon name.
 *
 * `defaultIcon` is the seed icon name used when no per-row value is set.
 *
 * Note: icon columns exist in data-tables only; they're disallowed as
 * sheet variables (would duplicate the variable-level `icon` field).
 */
declare const DataTableColumnIconV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"icon">;
    defaultIcon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "icon";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultIcon?: string | undefined;
}, {
    type: "icon";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultIcon?: string | undefined;
}>;
type DataTableColumnIconV2 = z.infer<typeof DataTableColumnIconV2Schema>;
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
declare const DataTableColumnTranslatableTextV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"translatableText">;
    defaultValue: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "translatableText";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: Record<string, string> | undefined;
}, {
    type: "translatableText";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: Record<string, string> | undefined;
}>;
type DataTableColumnTranslatableTextV2 = z.infer<typeof DataTableColumnTranslatableTextV2Schema>;
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
declare const DataTableColumnDataTableRefV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"dataTableRef">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableRef";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}, {
    type: "dataTableRef";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}>;
type DataTableColumnDataTableRefV2 = z.infer<typeof DataTableColumnDataTableRefV2Schema>;
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
declare const DataTableColumnDataTableLookupV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"dataTableLookup">;
    sourceColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableLookup";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    sourceColumnUid?: DataTableColumnUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
}, {
    type: "dataTableLookup";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    sourceColumnUid?: DataTableColumnUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
}>;
type DataTableColumnDataTableLookupV2 = z.infer<typeof DataTableColumnDataTableLookupV2Schema>;
/**
 * Discriminated union of every data-table column type. Narrow with
 * `column.type` to access type-specific fields.
 */
declare const DataTableColumnV2Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"number">;
    defaultNumber: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultNumber?: number | undefined;
}, {
    type: "number";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultNumber?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}, {
    type: "text";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"boolean">;
    defaultBoolean: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultBoolean?: boolean | undefined;
}, {
    type: "boolean";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultBoolean?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"choice">;
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        label: z.ZodString;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
}, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: string;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"icon">;
    defaultIcon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "icon";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultIcon?: string | undefined;
}, {
    type: "icon";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultIcon?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"translatableText">;
    defaultValue: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "translatableText";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: Record<string, string> | undefined;
}, {
    type: "translatableText";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    defaultValue?: Record<string, string> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"dataTableRef">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableRef";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}, {
    type: "dataTableRef";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
} & {
    type: z.ZodLiteral<"dataTableLookup">;
    sourceColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableLookup";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    sourceColumnUid?: DataTableColumnUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
}, {
    type: "dataTableLookup";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    sourceColumnUid?: DataTableColumnUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
}>]>;
type DataTableColumnV2 = z.infer<typeof DataTableColumnV2Schema>;
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
declare const DataTableCellValueV2Schema: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>;
type DataTableCellValueV2 = z.infer<typeof DataTableCellValueV2Schema>;
/**
 * A single row: a uid + an optional map of column-uid → cell value.
 * Missing column entries are valid — they mean "no value set" and the
 * reader uses the column's `defaultX` seed.
 */
declare const DataTableRowV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "DataTableRowUid" | undefined;
    };
    data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "DataTableRowUid" | undefined;
    };
    data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
}>;
type DataTableRowV2 = z.infer<typeof DataTableRowV2Schema>;
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
declare const DataTableV2Schema: z.ZodObject<{
    uid: z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>;
} & {
    name: z.ZodRecord<z.ZodString, z.ZodString>;
} & {
    icon: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    weight: z.ZodOptional<z.ZodNumber>;
    adminOnly: z.ZodOptional<z.ZodBoolean>;
    sourceUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columns: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"number">;
        defaultNumber: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    }, {
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"text">;
        maxChars: z.ZodOptional<z.ZodNumber>;
        defaultValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }, {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"boolean">;
        defaultBoolean: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    }, {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"choice">;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
            label: z.ZodString;
            icon: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }>, "many">>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        hasNumericValue: z.ZodOptional<z.ZodBoolean>;
        hasIcon: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    }, {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"icon">;
        defaultIcon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    }, {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"translatableText">;
        defaultValue: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    }, {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"dataTableRef">;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    }, {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"dataTableLookup">;
        sourceColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    }, {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    }>]>, "many">;
    rows: z.ZodArray<z.ZodObject<{
        uid: z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>;
        data: z.ZodOptional<z.ZodRecord<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>>>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: Record<string, string>;
    uid: string & {
        readonly __bypp_flavor?: "DataTableUid" | undefined;
    };
    columns: ({
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    } | {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    } | {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    } | {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    } | {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    } | {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    })[];
    rows: {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }[];
    icon?: string | null | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    sourceUid?: DataTableUid | undefined;
}, {
    name: Record<string, string>;
    uid: string & {
        readonly __bypp_flavor?: "DataTableUid" | undefined;
    };
    columns: ({
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    } | {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    } | {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    } | {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    } | {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    } | {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    })[];
    rows: {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }[];
    icon?: string | null | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    sourceUid?: DataTableUid | undefined;
}>;
type DataTableV2 = z.infer<typeof DataTableV2Schema>;

/**
 * Data-table row — v3: `data` already optional in v2, unchanged.
 */
declare const DataTableRowV3Schema: z.ZodObject<{
    uid: z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "DataTableRowUid" | undefined;
    };
    data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "DataTableRowUid" | undefined;
    };
    data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
}>;
type DataTableRowV3 = z.infer<typeof DataTableRowV3Schema>;
/**
 * Data-table — v3 changes: `columns` and `rows` default to `[]`.
 * Column shapes themselves are re-exported from v2 (no change needed).
 */
declare const DataTableV3Schema: z.ZodObject<{
    uid: z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>;
} & {
    name: z.ZodRecord<z.ZodString, z.ZodString>;
} & {
    icon: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    adminOnly: z.ZodOptional<z.ZodBoolean>;
    sourceUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columns: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"number">;
        defaultNumber: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    }, {
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"text">;
        maxChars: z.ZodOptional<z.ZodNumber>;
        defaultValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }, {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"boolean">;
        defaultBoolean: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    }, {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"choice">;
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
            label: z.ZodString;
            icon: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }>, "many">>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        hasNumericValue: z.ZodOptional<z.ZodBoolean>;
        hasIcon: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    }, {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"icon">;
        defaultIcon: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    }, {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"translatableText">;
        defaultValue: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    }, {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"dataTableRef">;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    }, {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    }>, z.ZodObject<{
        uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
        label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        icon: z.ZodOptional<z.ZodString>;
        isMandatory: z.ZodOptional<z.ZodBoolean>;
    } & {
        type: z.ZodLiteral<"dataTableLookup">;
        sourceColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
        columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
        chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
        multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
        multiSeparator: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    }, {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    }>]>, "many">>;
    rows: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>;
        data: z.ZodOptional<z.ZodRecord<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString, "many">, z.ZodRecord<z.ZodString, z.ZodString>, z.ZodNull]>>>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: Record<string, string>;
    uid: string & {
        readonly __bypp_flavor?: "DataTableUid" | undefined;
    };
    columns: ({
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    } | {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    } | {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    } | {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    } | {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    } | {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    })[];
    rows: {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }[];
    icon?: string | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    sourceUid?: DataTableUid | undefined;
}, {
    name: Record<string, string>;
    uid: string & {
        readonly __bypp_flavor?: "DataTableUid" | undefined;
    };
    icon?: string | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    sourceUid?: DataTableUid | undefined;
    columns?: ({
        type: "number";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultNumber?: number | undefined;
    } | {
        type: "text";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: string | undefined;
        maxChars?: number | undefined;
    } | {
        type: "boolean";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultBoolean?: boolean | undefined;
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: string;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    } | {
        type: "icon";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultIcon?: string | undefined;
    } | {
        type: "translatableText";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        defaultValue?: Record<string, string> | undefined;
    } | {
        type: "dataTableRef";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        labelColumnUid?: DataTableColumnUid | undefined;
        valueColumnUid?: DataTableColumnUid | undefined;
        iconColumnUid?: DataTableColumnUid | undefined;
        defaultRowUids?: DataTableRowUid[] | undefined;
    } | {
        type: "dataTableLookup";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        dataTableUid?: DataTableUid | undefined;
        sourceColumnUid?: DataTableColumnUid | undefined;
        columnUid?: DataTableColumnUid | undefined;
        chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
        multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
        multiSeparator?: string | undefined;
    })[] | undefined;
    rows?: {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }[] | undefined;
}>;
type DataTableV3 = z.infer<typeof DataTableV3Schema>;

export { DataTableV3Schema as A, type DataTableRowV2 as D, type DataTableCellValueV2 as a, DataTableCellValueV2Schema as b, type DataTableColumnBooleanV2 as c, DataTableColumnBooleanV2Schema as d, type DataTableColumnChoiceV2 as e, DataTableColumnChoiceV2Schema as f, type DataTableColumnDataTableLookupV2 as g, DataTableColumnDataTableLookupV2Schema as h, type DataTableColumnDataTableRefV2 as i, DataTableColumnDataTableRefV2Schema as j, type DataTableColumnIconV2 as k, DataTableColumnIconV2Schema as l, type DataTableColumnNumberV2 as m, DataTableColumnNumberV2Schema as n, type DataTableColumnTextV2 as o, DataTableColumnTextV2Schema as p, type DataTableColumnTranslatableTextV2 as q, DataTableColumnTranslatableTextV2Schema as r, type DataTableColumnV2 as s, DataTableColumnV2Schema as t, type DataTableRowV3 as u, DataTableRowV3Schema as v, DataTableRowV2Schema as w, type DataTableV2 as x, DataTableV2Schema as y, type DataTableV3 as z };
