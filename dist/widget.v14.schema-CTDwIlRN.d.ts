import { V as VariableUid, a as DatasetUid, b as VariableChoiceUid, h as DataTableUid, i as DataTableColumnUid, j as DataTableRowUid, T as TagUid, a0 as EntitySpawnUid, E as EntityUid, _ as EntityModeUid, S as SheetUid, P as PageUid, A as AssetUid, a2 as EntitySubtypeUid, aI as EntityActionUid, c as SceneUid, W as WidgetUid } from './scene.v2.schema-Cy0s-K0Y.js';
import { z } from 'zod';

declare const NumberVariableV13Schema: z.ZodObject<{
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
} & {
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
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
    maxVariable?: VariableUid | null | undefined;
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
    maxVariable?: VariableUid | null | undefined;
    step?: number | undefined;
}>;
type NumberVariableV13 = z.infer<typeof NumberVariableV13Schema>;
/**
 * Discriminated union of all variable variants as of bypp v31. Narrow with
 * `variable.type`.
 */
declare const VariableV13Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
} & {
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
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
    maxVariable?: VariableUid | null | undefined;
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
    maxVariable?: VariableUid | null | undefined;
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
}>, z.ZodObject<{
    uid: z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>;
    name: z.ZodString;
    datasetsUids: z.ZodArray<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, "many">;
    isMandatory: z.ZodOptional<z.ZodBoolean>;
    isHiddenFromSheet: z.ZodOptional<z.ZodBoolean>;
    icon: z.ZodOptional<z.ZodString>;
    sourceVariableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    targetsTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    targetsTags: z.ZodOptional<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    label: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
} & {
    type: z.ZodLiteral<"entitySpawnRef">;
}, "strip", z.ZodTypeAny, {
    type: "entitySpawnRef";
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
    type: "entitySpawnRef";
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
}>]>;
type VariableV13 = z.infer<typeof VariableV13Schema>;

declare const SpawnOwnerV2Schema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"entity">;
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    kind: "entity";
}, {
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    kind: "entity";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"spawn">;
    uid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    kind: "spawn";
}, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    kind: "spawn";
}>]>;
type SpawnOwnerV2 = z.infer<typeof SpawnOwnerV2Schema>;
declare const EntitySpawnV2Schema: z.ZodObject<{
    uid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    owner: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"entity">;
        uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "entity";
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "entity";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"spawn">;
        uid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "spawn";
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "spawn";
    }>]>>;
    label: z.ZodOptional<z.ZodString>;
    activeModes: z.ZodOptional<z.ZodArray<z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label?: string | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    owner?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "entity";
    } | {
        uid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "spawn";
    } | undefined;
    activeModes?: EntityModeUid[] | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label?: string | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    owner?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "entity";
    } | {
        uid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "spawn";
    } | undefined;
    activeModes?: EntityModeUid[] | undefined;
}>;
type EntitySpawnV2 = z.infer<typeof EntitySpawnV2Schema>;

declare const EntityModeV31Schema: z.ZodObject<{
    uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    label: z.ZodRecord<z.ZodString, z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    arrival: z.ZodEnum<["off", "on"]>;
    locked: z.ZodOptional<z.ZodLiteral<true>>;
    gameDisplay: z.ZodOptional<z.ZodObject<{
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        color: string;
    }, {
        color: string;
    }>>;
    updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "EntityModeUid" | undefined;
    };
    label: Record<string, string>;
    updates: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[];
    arrival: "off" | "on";
    icon?: string | undefined;
    locked?: true | undefined;
    gameDisplay?: {
        color: string;
    } | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "EntityModeUid" | undefined;
    };
    label: Record<string, string>;
    arrival: "off" | "on";
    icon?: string | undefined;
    updates?: {
        formula: string;
        variableUid: string & {
            readonly __bypp_flavor?: "VariableUid" | undefined;
        };
    }[] | undefined;
    locked?: true | undefined;
    gameDisplay?: {
        color: string;
    } | undefined;
}>;
type EntityModeV31 = z.infer<typeof EntityModeV31Schema>;
/**
 * One checked mode of one spawn, in the order a bearer stacks them on every
 * attribute they change: Rana's bracer's Bulwark before its Worn,
 * `[{ spawnUid: "bracer", modeUid: "bulwark" }, { spawnUid: "bracer",
 * modeUid: "worn" }]`. Ids, never names, so renaming keeps the place.
 */
declare const StackOrderEntryV31Schema: z.ZodObject<{
    spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
}, "strip", z.ZodTypeAny, {
    spawnUid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    modeUid: string & {
        readonly __bypp_flavor?: "EntityModeUid" | undefined;
    };
}, {
    spawnUid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    modeUid: string & {
        readonly __bypp_flavor?: "EntityModeUid" | undefined;
    };
}>;
type StackOrderEntryV31 = z.infer<typeof StackOrderEntryV31Schema>;

declare const ShortcutActionFromV31Schema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"subject">;
}, "strip", z.ZodTypeAny, {
    kind: "subject";
}, {
    kind: "subject";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"linked">;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
}, "strip", z.ZodTypeAny, {
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    kind: "linked";
}, {
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    kind: "linked";
}>, z.ZodObject<{
    kind: z.ZodLiteral<"held">;
    spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
}, "strip", z.ZodTypeAny, {
    spawnUid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    kind: "held";
}, {
    spawnUid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    kind: "held";
}>]>;
type ShortcutActionFromV31 = z.infer<typeof ShortcutActionFromV31Schema>;
declare const EntityShortcutV31Schema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"action">;
    actionKey: z.ZodString;
    from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"subject">;
    }, "strip", z.ZodTypeAny, {
        kind: "subject";
    }, {
        kind: "subject";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"linked">;
        entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    }, "strip", z.ZodTypeAny, {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "linked";
    }, {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "linked";
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"held">;
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "held";
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "held";
    }>]>;
}, "strip", z.ZodTypeAny, {
    kind: "action";
    actionKey: string;
    from: {
        kind: "subject";
    } | {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "linked";
    } | {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "held";
    };
}, {
    kind: "action";
    actionKey: string;
    from: {
        kind: "subject";
    } | {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        kind: "linked";
    } | {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "held";
    };
}>, z.ZodObject<{
    kind: z.ZodLiteral<"item">;
    spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
}, "strip", z.ZodTypeAny, {
    spawnUid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    kind: "item";
}, {
    spawnUid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    kind: "item";
}>]>;
type EntityShortcutV31 = z.infer<typeof EntityShortcutV31Schema>;
declare const EntityShortcutRowV31Schema: z.ZodObject<{
    slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"action">;
        actionKey: z.ZodString;
        from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"subject">;
        }, "strip", z.ZodTypeAny, {
            kind: "subject";
        }, {
            kind: "subject";
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"linked">;
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            kind: "linked";
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            kind: "linked";
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"held">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "held";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "held";
        }>]>;
    }, "strip", z.ZodTypeAny, {
        kind: "action";
        actionKey: string;
        from: {
            kind: "subject";
        } | {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            kind: "linked";
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "held";
        };
    }, {
        kind: "action";
        actionKey: string;
        from: {
            kind: "subject";
        } | {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            kind: "linked";
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "held";
        };
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"item">;
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "item";
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "item";
    }>]>>, "many">;
}, "strip", z.ZodTypeAny, {
    slots: ({
        kind: "action";
        actionKey: string;
        from: {
            kind: "subject";
        } | {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            kind: "linked";
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "held";
        };
    } | {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "item";
    } | null)[];
}, {
    slots: ({
        kind: "action";
        actionKey: string;
        from: {
            kind: "subject";
        } | {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            kind: "linked";
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "held";
        };
    } | {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        kind: "item";
    } | null)[];
}>;
type EntityShortcutRowV31 = z.infer<typeof EntityShortcutRowV31Schema>;

/**
 * Reserved variable uids, as **introduced in bypp format v31**.
 *
 * Six values every reader may know without the document declaring a variable
 * for them. Their uid is the same in every document, so a widget, a formula or
 * a `data` key may name one directly; none of them ever appears in
 * `variables[]`.
 *
 *  - `system-name`, `system-description`, `system-image` read the entity's own
 *    `name`, `description` and picture: a widget showing Rana's name binds to
 *    `system-name`. Never written in `data`.
 *  - `system-inventory` — what a character, a creature, a place or a container
 *    holds: a list of spawn uids in `data`, in order. Rana's
 *    `{ "system-inventory": ["backpack", "longsword"] }`; her backpack's own
 *    contents sit under the same key on the backpack spawn.
 *  - `system-quantity` — how many one spawn of a countable item counts
 *    (`item.kind: "countable"`, `entity.v8`): Rana's gold pieces,
 *    `{ "system-quantity": 37 }`. Absent reads 1.
 *  - `system-weight` — what one copy of an item weighs, set on the item:
 *    a longsword `{ "system-weight": 3 }`. A lot weighs it times its quantity.
 *    A formula reads it like any number.
 *
 * Producers before v31 carried none of these in `data`; the three `system-`
 * uids a widget could bind to already travelled, unexplained.
 *
 * This file MUST NOT be modified once shipped.
 */

declare const SystemVariableUidV31Schema: z.ZodEnum<["system-name", "system-description", "system-image", "system-inventory", "system-quantity", "system-weight"]>;
type SystemVariableUidV31 = z.infer<typeof SystemVariableUidV31Schema>;

declare const ItemKindV31Schema: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"container">;
    slots: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    kind: "container";
    slots: number;
}, {
    kind: "container";
    slots: number;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"countable">;
}, "strip", z.ZodTypeAny, {
    kind: "countable";
}, {
    kind: "countable";
}>]>;
type ItemKindV31 = z.infer<typeof ItemKindV31Schema>;
declare const EntityBaseV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
type EntityBaseV8 = z.infer<typeof EntityBaseV8Schema>;
declare const CharacterEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"character">;
}, "strip", z.ZodTypeAny, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
type CharacterEntityV8 = z.infer<typeof CharacterEntityV8Schema>;
declare const CreatureEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"creature">;
}, "strip", z.ZodTypeAny, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
type CreatureEntityV8 = z.infer<typeof CreatureEntityV8Schema>;
declare const GroupEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        characters: z.ZodArray<z.ZodObject<{
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }>, "many">>;
    charactersUids: z.ZodDefault<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    ranks?: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[] | undefined;
    charactersUids?: EntityUid[] | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
type GroupEntityV8 = z.infer<typeof GroupEntityV8Schema>;
declare const PlaceEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    scenesUids: z.ZodDefault<z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">>;
} & {
    type: z.ZodLiteral<"place">;
}, "strip", z.ZodTypeAny, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    scenesUids?: SceneUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
type PlaceEntityV8 = z.infer<typeof PlaceEntityV8Schema>;
declare const ItemEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"item">;
}, "strip", z.ZodTypeAny, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
declare const NoteEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"note">;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
declare const AbilityEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"ability">;
}, "strip", z.ZodTypeAny, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
declare const StoryEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"story">;
}, "strip", z.ZodTypeAny, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
declare const EventEntityV8Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"event">;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>;
declare const EntityV8Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"character">;
}, "strip", z.ZodTypeAny, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"creature">;
}, "strip", z.ZodTypeAny, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        characters: z.ZodArray<z.ZodObject<{
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }>, "many">>;
    charactersUids: z.ZodDefault<z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    ranks?: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[] | undefined;
    charactersUids?: EntityUid[] | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    scenesUids: z.ZodDefault<z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">>;
} & {
    type: z.ZodLiteral<"place">;
}, "strip", z.ZodTypeAny, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    scenesUids?: SceneUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"item">;
}, "strip", z.ZodTypeAny, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"note">;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"ability">;
}, "strip", z.ZodTypeAny, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"story">;
}, "strip", z.ZodTypeAny, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagsUid: z.ZodDefault<z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">>;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
    name: z.ZodString;
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
    isArchived: z.ZodDefault<z.ZodBoolean>;
    pagesOrder: z.ZodDefault<z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">>;
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
    subtypeUid: z.ZodOptional<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>>;
} & {
    actions: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
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
        diceFormula: z.ZodOptional<z.ZodString>;
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
        type: z.ZodOptional<z.ZodLiteral<"roll">>;
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }>, "many">>;
    modes: z.ZodDefault<z.ZodArray<z.ZodObject<{
        uid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
        label: z.ZodRecord<z.ZodString, z.ZodString>;
        icon: z.ZodOptional<z.ZodString>;
        arrival: z.ZodEnum<["off", "on"]>;
        locked: z.ZodOptional<z.ZodLiteral<true>>;
        gameDisplay: z.ZodOptional<z.ZodObject<{
            color: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            color: string;
        }, {
            color: string;
        }>>;
        updates: z.ZodDefault<z.ZodArray<z.ZodObject<{
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
    }, "strip", z.ZodTypeAny, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }, {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }>, "many">>;
    stackOrder: z.ZodOptional<z.ZodArray<z.ZodObject<{
        spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        modeUid: z.ZodType<EntityModeUid, z.ZodTypeDef, EntityModeUid>;
    }, "strip", z.ZodTypeAny, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }, {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }>, "many">>;
    item: z.ZodOptional<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"container">;
        slots: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        kind: "container";
        slots: number;
    }, {
        kind: "container";
        slots: number;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"countable">;
    }, "strip", z.ZodTypeAny, {
        kind: "countable";
    }, {
        kind: "countable";
    }>]>>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    shortcutRows: z.ZodOptional<z.ZodArray<z.ZodObject<{
        slots: z.ZodArray<z.ZodNullable<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"action">;
            actionKey: z.ZodString;
            from: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
                kind: z.ZodLiteral<"subject">;
            }, "strip", z.ZodTypeAny, {
                kind: "subject";
            }, {
                kind: "subject";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"linked">;
                entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            }, "strip", z.ZodTypeAny, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }, {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            }>, z.ZodObject<{
                kind: z.ZodLiteral<"held">;
                spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
            }, "strip", z.ZodTypeAny, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }, {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            }>]>;
        }, "strip", z.ZodTypeAny, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }, {
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"item">;
            spawnUid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
        }, "strip", z.ZodTypeAny, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }, {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        }>]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }, {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }>, "many">>;
} & {
    type: z.ZodLiteral<"event">;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    tagsUid: TagUid[];
    actions: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[];
    modes: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        updates: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[];
        arrival: "off" | "on";
        icon?: string | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    isArchived?: boolean | undefined;
    pagesOrder?: PageUid[] | undefined;
    item?: {
        kind: "container";
        slots: number;
    } | {
        kind: "countable";
    } | undefined;
    displayName?: string | undefined;
    description?: string | undefined;
    tagsUid?: TagUid[] | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actions?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityActionUid" | undefined;
        };
        label: Record<string, string>;
        type?: "roll" | undefined;
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
    }[] | undefined;
    subtypeUid?: EntitySubtypeUid | undefined;
    modes?: {
        uid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
        label: Record<string, string>;
        arrival: "off" | "on";
        icon?: string | undefined;
        updates?: {
            formula: string;
            variableUid: string & {
                readonly __bypp_flavor?: "VariableUid" | undefined;
            };
        }[] | undefined;
        locked?: true | undefined;
        gameDisplay?: {
            color: string;
        } | undefined;
    }[] | undefined;
    stackOrder?: {
        spawnUid: string & {
            readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
        };
        modeUid: string & {
            readonly __bypp_flavor?: "EntityModeUid" | undefined;
        };
    }[] | undefined;
    synonyms?: string[] | undefined;
    shortcutRows?: {
        slots: ({
            kind: "action";
            actionKey: string;
            from: {
                kind: "subject";
            } | {
                entityUid: string & {
                    readonly __bypp_flavor?: "EntityUid" | undefined;
                };
                kind: "linked";
            } | {
                spawnUid: string & {
                    readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
                };
                kind: "held";
            };
        } | {
            spawnUid: string & {
                readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
            };
            kind: "item";
        } | null)[];
    }[] | undefined;
}>]>;
type EntityV8 = z.infer<typeof EntityV8Schema>;

declare const EntityActionV3Schema: z.ZodObject<{
    uid: z.ZodType<EntityActionUid, z.ZodTypeDef, EntityActionUid>;
    label: z.ZodRecord<z.ZodString, z.ZodString>;
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
    diceFormula: z.ZodOptional<z.ZodString>;
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
    type: z.ZodOptional<z.ZodLiteral<"roll">>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "EntityActionUid" | undefined;
    };
    label: Record<string, string>;
    type?: "roll" | undefined;
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
    uid: string & {
        readonly __bypp_flavor?: "EntityActionUid" | undefined;
    };
    label: Record<string, string>;
    type?: "roll" | undefined;
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
type EntityActionV3 = z.infer<typeof EntityActionV3Schema>;

declare const DatasetV4Schema: z.ZodObject<{
    uid: z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>;
} & {
    name: z.ZodString;
} & {
    weight: z.ZodOptional<z.ZodNumber>;
    targets: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>, z.ZodType<TagUid, z.ZodTypeDef, TagUid>]>, "many">>;
    targetTagsGroup: z.ZodOptional<z.ZodEnum<["every", "some"]>>;
    sheetUid: z.ZodOptional<z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>;
} & {
    targetsSubtypes: z.ZodDefault<z.ZodArray<z.ZodType<EntitySubtypeUid, z.ZodTypeDef, EntitySubtypeUid>, "many">>;
} & {
    icon: z.ZodOptional<z.ZodString>;
} & {
    adminOnly: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "DatasetUid" | undefined;
    };
    targets: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[];
    targetsSubtypes: EntitySubtypeUid[];
    icon?: string | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sheetUid?: SheetUid | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "DatasetUid" | undefined;
    };
    icon?: string | undefined;
    weight?: number | undefined;
    adminOnly?: boolean | undefined;
    targets?: (TagUid | "note" | "character" | "creature" | "place" | "group" | "item" | "ability" | "event" | "story")[] | undefined;
    targetTagsGroup?: "every" | "some" | undefined;
    sheetUid?: SheetUid | undefined;
    targetsSubtypes?: EntitySubtypeUid[] | undefined;
}>;
type DatasetV4 = z.infer<typeof DatasetV4Schema>;

declare const SheetV8Schema: z.ZodObject<{
    uid: z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>;
    name: z.ZodOptional<z.ZodString>;
    widgetUids: z.ZodDefault<z.ZodArray<z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>, "many">>;
    compatibleDatasetUid: z.ZodOptional<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>>;
    styles: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderWidth: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
    } & {
        rotation: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    }>>>>>;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
    dimensions: z.ZodOptional<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    height: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    uid: string & {
        readonly __bypp_flavor?: "SheetUid" | undefined;
    };
    widgetUids: WidgetUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    name?: string | undefined;
    height?: number | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    compatibleDatasetUid?: DatasetUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    styles?: Record<string, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    } | null | undefined> | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "SheetUid" | undefined;
    };
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    name?: string | undefined;
    height?: number | undefined;
    dimensions?: {
        width: number;
        height: number;
    } | undefined;
    widgetUids?: WidgetUid[] | undefined;
    compatibleDatasetUid?: DatasetUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    styles?: Record<string, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
    } | null | undefined> | undefined;
}>;
type SheetV8 = z.infer<typeof SheetV8Schema>;

declare const WidgetEntityGridV14Schema: z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"entityGrid">;
    gapX: z.ZodOptional<z.ZodNumber>;
    gapY: z.ZodOptional<z.ZodNumber>;
    imageWidth: z.ZodOptional<z.ZodNumber>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "entityGrid";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
    imageWidth?: number | undefined;
}, {
    type: "entityGrid";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
    imageWidth?: number | undefined;
}>;
type WidgetEntityGridV14 = z.infer<typeof WidgetEntityGridV14Schema>;
declare const WidgetV14Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"empty">;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "empty";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "empty";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"bigNumber">;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    unit: z.ZodOptional<z.ZodString>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "bigNumber";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    min?: number | undefined;
    max?: number | undefined;
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "bigNumber";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    min?: number | undefined;
    max?: number | undefined;
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"plainText">;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "plainText";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "plainText";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"toggle">;
    toggleIconType: z.ZodOptional<z.ZodString>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "toggle";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    toggleIconType?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "toggle";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    toggleIconType?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"bulletList">;
    listVisibility: z.ZodOptional<z.ZodString>;
    listStyleBulletBreakline: z.ZodOptional<z.ZodBoolean>;
    listStyleBulletType: z.ZodOptional<z.ZodString>;
    listStyleBulletGap: z.ZodOptional<z.ZodNumber>;
    listStyleBulletIconGap: z.ZodOptional<z.ZodNumber>;
    listOptionStyle: z.ZodOptional<z.ZodString>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "bulletList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listStyleBulletBreakline?: boolean | undefined;
    listStyleBulletType?: string | undefined;
    listStyleBulletGap?: number | undefined;
    listStyleBulletIconGap?: number | undefined;
    listOptionStyle?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "bulletList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listStyleBulletBreakline?: boolean | undefined;
    listStyleBulletType?: string | undefined;
    listStyleBulletGap?: number | undefined;
    listStyleBulletIconGap?: number | undefined;
    listOptionStyle?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"inlineList">;
    listStyleTextSeparator: z.ZodOptional<z.ZodString>;
    listVisibility: z.ZodOptional<z.ZodString>;
    listOptionStyle: z.ZodOptional<z.ZodString>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "inlineList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listOptionStyle?: string | undefined;
    listStyleTextSeparator?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "inlineList";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    listVisibility?: string | undefined;
    listOptionStyle?: string | undefined;
    listStyleTextSeparator?: string | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"pips">;
    icon: z.ZodOptional<z.ZodString>;
    gapX: z.ZodOptional<z.ZodNumber>;
    gapY: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "pips";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    max?: number | undefined;
    icon?: string | undefined;
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "pips";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    max?: number | undefined;
    icon?: string | undefined;
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"bar">;
    min: z.ZodOptional<z.ZodNumber>;
    max: z.ZodOptional<z.ZodNumber>;
    maxVariable: z.ZodOptional<z.ZodNullable<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>>;
    unit: z.ZodOptional<z.ZodString>;
    orientation: z.ZodOptional<z.ZodEnum<["ltr", "rtl", "ttb", "btt"]>>;
    barColor: z.ZodOptional<z.ZodString>;
    bgColor: z.ZodOptional<z.ZodString>;
    showValue: z.ZodOptional<z.ZodBoolean>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "bar";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    min?: number | undefined;
    max?: number | undefined;
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
    orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
    barColor?: string | undefined;
    bgColor?: string | undefined;
    showValue?: boolean | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "bar";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    min?: number | undefined;
    max?: number | undefined;
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    maxVariable?: VariableUid | null | undefined;
    unit?: string | undefined;
    orientation?: "ltr" | "rtl" | "ttb" | "btt" | undefined;
    barColor?: string | undefined;
    bgColor?: string | undefined;
    showValue?: boolean | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"entityImage">;
    formatSlug: z.ZodOptional<z.ZodEnum<["original", "thumbnail", "square", "closeup"]>>;
    objectFit: z.ZodOptional<z.ZodEnum<["contain", "cover", "fill", "none", "scale-down"]>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "entityImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "entityImage";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    formatSlug?: "square" | "original" | "thumbnail" | "closeup" | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"wheel">;
    readingPosition: z.ZodOptional<z.ZodString>;
    labelOrientation: z.ZodOptional<z.ZodString>;
    radius: z.ZodOptional<z.ZodNumber>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "wheel";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    readingPosition?: string | undefined;
    labelOrientation?: string | undefined;
    radius?: number | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "wheel";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    readingPosition?: string | undefined;
    labelOrientation?: string | undefined;
    radius?: number | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
    type: z.ZodLiteral<"actionRoll">;
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    type: "actionRoll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}, {
    type: "actionRoll";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<WidgetUid, z.ZodTypeDef, WidgetUid>;
    name: z.ZodString;
    area: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
    }, {
        width: number;
        height: number;
    }>>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        left: z.ZodNumber;
        top: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        left: number;
        top: number;
    }, {
        left: number;
        top: number;
    }>>>;
    variableUid: z.ZodOptional<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>>;
    type: z.ZodLiteral<"entityGrid">;
    gapX: z.ZodOptional<z.ZodNumber>;
    gapY: z.ZodOptional<z.ZodNumber>;
    imageWidth: z.ZodOptional<z.ZodNumber>;
} & {
    style: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
} & {
    actionsVariablesUids: z.ZodOptional<z.ZodArray<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, "many">>;
} & {
    credit: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodEnum<["CC0", "CC-BY", "CC-BY-SA", "CC-BY-NC", "CC-BY-NC-SA", "CC-BY-ND", "CC-BY-NC-ND", "ARR"]>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }, {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "entityGrid";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
    imageWidth?: number | undefined;
}, {
    type: "entityGrid";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "WidgetUid" | undefined;
    };
    area?: {
        width: number;
        height: number;
    } | null | undefined;
    position?: {
        left: number;
        top: number;
    } | null | undefined;
    style?: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    } | null | undefined;
    variableUid?: VariableUid | undefined;
    gapX?: number | undefined;
    gapY?: number | undefined;
    credit?: {
        name: string;
        url?: string | undefined;
        license?: "CC0" | "CC-BY" | "CC-BY-SA" | "CC-BY-NC" | "CC-BY-NC-SA" | "CC-BY-ND" | "CC-BY-NC-ND" | "ARR" | undefined;
    } | undefined;
    actionsVariablesUids?: VariableUid[] | undefined;
    imageWidth?: number | undefined;
}>]>;
type WidgetV14 = z.infer<typeof WidgetV14Schema>;

export { AbilityEntityV8Schema as A, type ShortcutActionFromV31 as B, type CharacterEntityV8 as C, type DatasetV4 as D, type EntityV8 as E, ShortcutActionFromV31Schema as F, type GroupEntityV8 as G, type SpawnOwnerV2 as H, type ItemKindV31 as I, SpawnOwnerV2Schema as J, StackOrderEntryV31Schema as K, StoryEntityV8Schema as L, type SystemVariableUidV31 as M, NoteEntityV8Schema as N, SystemVariableUidV31Schema as O, type PlaceEntityV8 as P, VariableV13Schema as Q, WidgetEntityGridV14Schema as R, type SheetV8 as S, type WidgetV14 as T, WidgetV14Schema as U, type VariableV13 as V, type WidgetEntityGridV14 as W, type EntityActionV3 as a, type EntityModeV31 as b, type EntityShortcutRowV31 as c, type EntitySpawnV2 as d, type StackOrderEntryV31 as e, CharacterEntityV8Schema as f, type CreatureEntityV8 as g, CreatureEntityV8Schema as h, DatasetV4Schema as i, EntityActionV3Schema as j, type EntityBaseV8 as k, EntityBaseV8Schema as l, EntityModeV31Schema as m, EntityV8Schema as n, type EntityShortcutV31 as o, EntityShortcutRowV31Schema as p, EntityShortcutV31Schema as q, EntitySpawnV2Schema as r, EventEntityV8Schema as s, GroupEntityV8Schema as t, ItemEntityV8Schema as u, ItemKindV31Schema as v, type NumberVariableV13 as w, NumberVariableV13Schema as x, PlaceEntityV8Schema as y, SheetV8Schema as z };
