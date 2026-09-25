import { V as VariableUid, a as DatasetUid, b as VariableChoiceUid, h as DataTableUid, i as DataTableColumnUid, j as DataTableRowUid, T as TagUid, a1 as EntitySpawnUid, E as EntityUid } from './scene.v2.schema-WTy2SpxZ.cjs';
import { z } from 'zod';

declare const EntitySpawnRefVariableV12Schema: z.ZodObject<{
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
}>;
type EntitySpawnRefVariableV12 = z.infer<typeof EntitySpawnRefVariableV12Schema>;
/**
 * Discriminated union of all variable variants as of bypp v28. Narrow with
 * `variable.type`.
 */
declare const VariableV12Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
type VariableV12 = z.infer<typeof VariableV12Schema>;

declare const EntitySpawnV1Schema: z.ZodObject<{
    uid: z.ZodType<EntitySpawnUid, z.ZodTypeDef, EntitySpawnUid>;
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    ownerUid: z.ZodOptional<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>>;
    label: z.ZodOptional<z.ZodString>;
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
    ownerUid?: EntityUid | undefined;
}, {
    uid: string & {
        readonly __bypp_flavor?: "EntitySpawnUid" | undefined;
    };
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label?: string | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    ownerUid?: EntityUid | undefined;
}>;
type EntitySpawnV1 = z.infer<typeof EntitySpawnV1Schema>;

export { type EntitySpawnV1 as E, type VariableV12 as V, type EntitySpawnRefVariableV12 as a, EntitySpawnRefVariableV12Schema as b, EntitySpawnV1Schema as c, VariableV12Schema as d };
