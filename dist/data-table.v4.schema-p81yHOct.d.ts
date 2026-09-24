import { V as VariableUid, a as DatasetUid, h as DataTableUid, i as DataTableColumnUid, j as DataTableRowUid, b as VariableChoiceUid, T as TagUid } from './scene.v2.schema-WTy2SpxZ.js';
import { z } from 'zod';

/** The display label every variant carries; readers fall back to `name`. */
declare const VariableLabelV27Schema: z.ZodObject<{
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    label?: Record<string, string> | undefined;
}, {
    label?: Record<string, string> | undefined;
}>;
/**
 * A single option of a `choice` variable or column, `label` locale-keyed
 * (`{ en: "Wizard", fr: "Magicien" }`). A reader picks the locale it shows the
 * way it does for any other `TranslatableText`.
 */
declare const ChoiceOptionV27Schema: z.ZodObject<{
    uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
    icon: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodNumber>;
} & {
    label: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
    };
    label: Record<string, string>;
    value?: number | undefined;
    icon?: string | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
    };
    label: Record<string, string>;
    value?: number | undefined;
    icon?: string | undefined;
}>;
type ChoiceOptionV27 = z.infer<typeof ChoiceOptionV27Schema>;
declare const NumberVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"number">;
    defaultValue: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    step: z.ZodOptional<z.ZodNumber>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    min?: number | undefined;
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
    step?: number | undefined;
}, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    min?: number | undefined;
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
    step?: number | undefined;
}>;
declare const TextVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>;
declare const BooleanVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"boolean">;
    defaultValue: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}>;
declare const ChoiceVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
    defaultOptionUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
    defaultOptionUids?: VariableChoiceUid[] | undefined;
}, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
    defaultOptionUids?: VariableChoiceUid[] | undefined;
}>;
declare const FormulaVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"formula">;
    formula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}>;
declare const RollVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"roll">;
    diceFormula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    visual: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"awesome">;
        icon: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "awesome";
        icon: string;
    }, {
        type: "awesome";
        icon: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"compo">;
        icons: z.ZodRecord<z.ZodString, z.ZodObject<{
            icon: z.ZodNullable<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            rotate: z.ZodOptional<z.ZodNumber>;
            revert: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    }, {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    }>]>>;
    hue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    icon: z.ZodOptional<z.ZodString>;
    rolls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        diceFormula: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        diceFormula: string;
        key: string;
    }, {
        label: string;
        diceFormula: string;
        key: string;
    }>, "many">>;
    updates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        variableUid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        formula: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }, {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }>, "many">>;
    log: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
    visual?: {
        type: "awesome";
        icon: string;
    } | {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    } | undefined;
    hue?: number | null | undefined;
    rolls?: {
        label: string;
        diceFormula: string;
        key: string;
    }[] | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    log?: string | undefined;
}, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
    visual?: {
        type: "awesome";
        icon: string;
    } | {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    } | undefined;
    hue?: number | null | undefined;
    rolls?: {
        label: string;
        diceFormula: string;
        key: string;
    }[] | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    log?: string | undefined;
}>;
declare const DataTableRefVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableRef">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}, {
    type: "dataTableRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}>;
declare const DataTableLookupVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
}, {
    type: "dataTableLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
}>;
declare const ImageVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"image">;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}>;
declare const DataTableDirectLookupVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableDirectLookup">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    rowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableDirectLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    rowUids?: DataTableRowUid[] | undefined;
}, {
    type: "dataTableDirectLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    rowUids?: DataTableRowUid[] | undefined;
}>;
declare const EntityRefVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityRef">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    targetsTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    targetsTags: z.ZodOptional<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}>;
declare const EntityLookupVariableV11Schema: z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    keyVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    labelVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}>;
type NumberVariableV11 = z.infer<typeof NumberVariableV11Schema>;
type TextVariableV11 = z.infer<typeof TextVariableV11Schema>;
type BooleanVariableV11 = z.infer<typeof BooleanVariableV11Schema>;
type ChoiceVariableV11 = z.infer<typeof ChoiceVariableV11Schema>;
type FormulaVariableV11 = z.infer<typeof FormulaVariableV11Schema>;
type RollVariableV11 = z.infer<typeof RollVariableV11Schema>;
type DataTableRefVariableV11 = z.infer<typeof DataTableRefVariableV11Schema>;
type DataTableLookupVariableV11 = z.infer<typeof DataTableLookupVariableV11Schema>;
type ImageVariableV11 = z.infer<typeof ImageVariableV11Schema>;
type DataTableDirectLookupVariableV11 = z.infer<typeof DataTableDirectLookupVariableV11Schema>;
type EntityRefVariableV11 = z.infer<typeof EntityRefVariableV11Schema>;
type EntityLookupVariableV11 = z.infer<typeof EntityLookupVariableV11Schema>;
/**
 * Discriminated union of all variable variants as of bypp v27. Narrow with
 * `variable.type`.
 */
declare const VariableV11Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"number">;
    defaultValue: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    step: z.ZodOptional<z.ZodNumber>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    min?: number | undefined;
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
    step?: number | undefined;
}, {
    type: "number";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    min?: number | undefined;
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: number | undefined;
    step?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"text">;
    maxChars: z.ZodOptional<z.ZodNumber>;
    defaultValue: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}, {
    type: "text";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: string | undefined;
    maxChars?: number | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"boolean">;
    defaultValue: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}, {
    type: "boolean";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    defaultValue?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
    defaultOptionUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
    defaultOptionUids?: VariableChoiceUid[] | undefined;
}, {
    type: "choice";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }[] | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    hasNumericValue?: boolean | undefined;
    hasIcon?: boolean | undefined;
    defaultOptionUids?: VariableChoiceUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"formula">;
    formula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}, {
    type: "formula";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    formula?: string | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"roll">;
    diceFormula: z.ZodOptional<z.ZodString>;
    depsVariablesUid: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    visual: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"awesome">;
        icon: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "awesome";
        icon: string;
    }, {
        type: "awesome";
        icon: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"compo">;
        icons: z.ZodRecord<z.ZodString, z.ZodObject<{
            icon: z.ZodNullable<z.ZodString>;
            size: z.ZodOptional<z.ZodNumber>;
            rotate: z.ZodOptional<z.ZodNumber>;
            revert: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    }, {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    }>]>>;
    hue: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    icon: z.ZodOptional<z.ZodString>;
    rolls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        diceFormula: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: string;
        diceFormula: string;
        key: string;
    }, {
        label: string;
        diceFormula: string;
        key: string;
    }>, "many">>;
    updates: z.ZodOptional<z.ZodArray<z.ZodObject<{
        variableUid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
        formula: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }, {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }>, "many">>;
    log: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
    visual?: {
        type: "awesome";
        icon: string;
    } | {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    } | undefined;
    hue?: number | null | undefined;
    rolls?: {
        label: string;
        diceFormula: string;
        key: string;
    }[] | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    log?: string | undefined;
}, {
    type: "roll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    depsVariablesUid?: VariableUid[] | undefined;
    diceFormula?: string | undefined;
    visual?: {
        type: "awesome";
        icon: string;
    } | {
        type: "compo";
        icons: Record<string, {
            icon: string | null;
            size?: number | undefined;
            rotate?: number | undefined;
            revert?: boolean | undefined;
        }>;
    } | undefined;
    hue?: number | null | undefined;
    rolls?: {
        label: string;
        diceFormula: string;
        key: string;
    }[] | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    log?: string | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableRef">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    labelColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    valueColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    iconColumnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    defaultRowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}, {
    type: "dataTableRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    isMultiple?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    labelColumnUid?: DataTableColumnUid | undefined;
    valueColumnUid?: DataTableColumnUid | undefined;
    iconColumnUid?: DataTableColumnUid | undefined;
    defaultRowUids?: DataTableRowUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
}, {
    type: "dataTableLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"image">;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}, {
    type: "image";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"dataTableDirectLookup">;
    dataTableUid: z.ZodOptional<z.ZodType<DataTableUid, z.ZodTypeDef, DataTableUid>>;
    columnUid: z.ZodOptional<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>>;
    rowUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableRowUid, z.ZodTypeDef, DataTableRowUid>, "many">>;
    chainedLabelColumnUids: z.ZodOptional<z.ZodArray<z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>, "many">>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "dataTableDirectLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    rowUids?: DataTableRowUid[] | undefined;
}, {
    type: "dataTableDirectLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    dataTableUid?: DataTableUid | undefined;
    columnUid?: DataTableColumnUid | undefined;
    chainedLabelColumnUids?: DataTableColumnUid[] | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    rowUids?: DataTableRowUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityRef">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    targetsTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    targetsTags: z.ZodOptional<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}, {
    type: "entityRef";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    max?: number | undefined;
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sourceVariableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    targetsTypes?: string[] | undefined;
    targetsTags?: TagUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    type: z.ZodLiteral<"entityLookup">;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    keyVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    labelVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    multiAggregator: z.ZodOptional<z.ZodEnum<["concat", "sum", "avg", "min", "max"]>>;
    multiSeparator: z.ZodOptional<z.ZodString>;
} & {
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}, {
    type: "entityLookup";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "VariableUid" | undefined;
    };
    datasetsUids: DatasetUid[];
    label?: Record<string, string> | undefined;
    icon?: string | undefined;
    isMandatory?: boolean | undefined;
    isHiddenFromSheet?: boolean | undefined;
    multiAggregator?: "concat" | "min" | "max" | "sum" | "avg" | undefined;
    multiSeparator?: string | undefined;
    sourceVariableUid?: VariableUid | undefined;
    keyVariableUid?: VariableUid | undefined;
    labelVariableUid?: VariableUid | undefined;
}>]>;
type VariableV11 = z.infer<typeof VariableV11Schema>;

declare const DataTableColumnChoiceV4Schema: z.ZodObject<{
    uid: z.ZodType<DataTableColumnUid, z.ZodTypeDef, DataTableColumnUid>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    icon: z.ZodOptional<z.ZodString>;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
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
        label: Record<string, string>;
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
type DataTableColumnChoiceV4 = z.infer<typeof DataTableColumnChoiceV4Schema>;
declare const DataTableColumnV4Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
    type: z.ZodLiteral<"choice">;
    isMultiple: z.ZodOptional<z.ZodBoolean>;
    hasNumericValue: z.ZodOptional<z.ZodBoolean>;
    hasIcon: z.ZodOptional<z.ZodBoolean>;
} & {
    options: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
        icon: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodNumber>;
    } & {
        label: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
        value?: number | undefined;
        icon?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "choice";
    uid: string & {
        readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
    };
    options?: {
        uid: string & {
            readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
        };
        label: Record<string, string>;
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
        label: Record<string, string>;
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
type DataTableColumnV4 = z.infer<typeof DataTableColumnV4Schema>;
declare const DataTableV4Schema: z.ZodObject<{
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
        type: z.ZodLiteral<"choice">;
        isMultiple: z.ZodOptional<z.ZodBoolean>;
        hasNumericValue: z.ZodOptional<z.ZodBoolean>;
        hasIcon: z.ZodOptional<z.ZodBoolean>;
    } & {
        options: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>;
            icon: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodNumber>;
        } & {
            label: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }, {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
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
            label: Record<string, string>;
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
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
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
    } | {
        type: "choice";
        uid: string & {
            readonly __bypp_flavor?: "DataTableColumnUid" | undefined;
        };
        options?: {
            uid: string & {
                readonly __bypp_flavor?: "VariableChoiceUid" | undefined;
            };
            label: Record<string, string>;
            value?: number | undefined;
            icon?: string | undefined;
        }[] | undefined;
        label?: Record<string, string> | undefined;
        icon?: string | undefined;
        isMandatory?: boolean | undefined;
        isMultiple?: boolean | undefined;
        hasNumericValue?: boolean | undefined;
        hasIcon?: boolean | undefined;
    })[] | undefined;
    rows?: {
        uid: string & {
            readonly __bypp_flavor?: "DataTableRowUid" | undefined;
        };
        data?: Record<DataTableColumnUid, string | number | boolean | string[] | Record<string, string> | null> | undefined;
    }[] | undefined;
}>;
type DataTableV4 = z.infer<typeof DataTableV4Schema>;

export { type BooleanVariableV11 as B, type ChoiceOptionV27 as C, type DataTableV4 as D, type EntityLookupVariableV11 as E, type FormulaVariableV11 as F, type ImageVariableV11 as I, type NumberVariableV11 as N, type RollVariableV11 as R, type TextVariableV11 as T, VariableLabelV27Schema as V, BooleanVariableV11Schema as a, type DataTableColumnV4 as b, type DataTableLookupVariableV11 as c, type DataTableRefVariableV11 as d, ChoiceOptionV27Schema as e, type ChoiceVariableV11 as f, ChoiceVariableV11Schema as g, type DataTableColumnChoiceV4 as h, DataTableColumnChoiceV4Schema as i, DataTableColumnV4Schema as j, type DataTableDirectLookupVariableV11 as k, DataTableDirectLookupVariableV11Schema as l, DataTableLookupVariableV11Schema as m, DataTableRefVariableV11Schema as n, DataTableV4Schema as o, EntityLookupVariableV11Schema as p, type EntityRefVariableV11 as q, EntityRefVariableV11Schema as r, FormulaVariableV11Schema as s, ImageVariableV11Schema as t, NumberVariableV11Schema as u, RollVariableV11Schema as v, TextVariableV11Schema as w, type VariableV11 as x, VariableV11Schema as y };
