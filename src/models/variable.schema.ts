import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import {
  DatasetUidSchema,
  DataTableColumnUidSchema,
  DataTableRowUidSchema,
  DataTableUidSchema,
  VariableChoiceUidSchema,
  VariableUidSchema,
} from "../uid";

export const ChoiceOptionSchema = z.object({
  uid: VariableChoiceUidSchema,
  label: z.string(),
  icon: z.string().optional(),
  value: z.number().optional(),
});

export type ChoiceOption = z.infer<typeof ChoiceOptionSchema>;

export const VariableBaseSchema = z
  .object({ uid: VariableUidSchema })
  .merge(WithNameSchema)
  .extend({
    datasetsUids: z.array(DatasetUidSchema),
    isMandatory: z.boolean().optional(),
    isHiddenFromSheet: z.boolean().optional(),
    label: z.string().optional(),
  });

export type VariableBase = z.infer<typeof VariableBaseSchema>;

export const NumberVariableSchema = VariableBaseSchema.extend({
  type: z.literal("number"),
  defaultValue: z.number().optional(),
});

export type NumberVariable = z.infer<typeof NumberVariableSchema>;

export const TextVariableSchema = VariableBaseSchema.extend({
  type: z.literal("text"),
  maxChars: z.number().optional(),
  defaultValue: z.string().optional(),
});

export type TextVariable = z.infer<typeof TextVariableSchema>;

export const BooleanVariableSchema = VariableBaseSchema.extend({
  type: z.literal("boolean"),
  defaultValue: z.boolean().optional(),
});

export type BooleanVariable = z.infer<typeof BooleanVariableSchema>;

export const ChoiceVariableSchema = VariableBaseSchema.extend({
  type: z.literal("choice"),
  options: z.array(ChoiceOptionSchema).optional(),
  isMultiple: z.boolean().optional(),
  hasNumericValue: z.boolean().optional(),
  hasIcon: z.boolean().optional(),
  defaultOptionUids: z.array(VariableChoiceUidSchema).optional(),
});

export type ChoiceVariable = z.infer<typeof ChoiceVariableSchema>;

export const FormulaVariableSchema = VariableBaseSchema.extend({
  type: z.literal("formula"),
  formula: z.string().optional(),
  depsVariablesUid: z.array(VariableUidSchema).optional(),
});

export type FormulaVariable = z.infer<typeof FormulaVariableSchema>;

export const IconCompoSlotConfigSchema = z.object({
  icon: z.string().nullable(),
  size: z.number().optional(),
  rotate: z.number().optional(),
  revert: z.boolean().optional(),
});

export type IconCompoSlotConfig = z.infer<typeof IconCompoSlotConfigSchema>;

export const IconCompoSchema = z.record(z.string(), IconCompoSlotConfigSchema);

export type IconCompo = z.infer<typeof IconCompoSchema>;

export const ActionVisualSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("awesome"), icon: z.string() }),
  z.object({ type: z.literal("compo"), icons: IconCompoSchema }),
]);

export type ActionVisual = z.infer<typeof ActionVisualSchema>;

export const RollVariableSchema = VariableBaseSchema.extend({
  type: z.literal("roll"),
  diceFormula: z.string().optional(),
  depsVariablesUid: z.array(VariableUidSchema).optional(),
  visual: ActionVisualSchema.optional(),
  hue: z.number().nullable().optional(),
});

export type RollVariable = z.infer<typeof RollVariableSchema>;

/**
 * Variable whose value points to row(s) of a target data-table.
 * Display uses `labelColumnUid`; formulas read `valueColumnUid`.
 */
export const DataTableRefVariableSchema = VariableBaseSchema.extend({
  type: z.literal("dataTableRef"),
  dataTableUid: DataTableUidSchema.optional(),
  labelColumnUid: DataTableColumnUidSchema.optional(),
  valueColumnUid: DataTableColumnUidSchema.optional(),
  iconColumnUid: DataTableColumnUidSchema.optional(),
  isMultiple: z.boolean().optional(),
  defaultRowUids: z.array(DataTableRowUidSchema).optional(),
});

export type DataTableRefVariable = z.infer<typeof DataTableRefVariableSchema>;

/**
 * Derived variable: reads a cell from a data-table given row uid(s)
 * supplied by an upstream `dataTableRef` variable. No stored value of its
 * own. Multi-row aggregation via `multiAggregator`.
 */
export const DataTableLookupVariableSchema = VariableBaseSchema.extend({
  type: z.literal("dataTableLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  dataTableUid: DataTableUidSchema.optional(),
  columnUid: DataTableColumnUidSchema.optional(),
  chainedLabelColumnUids: z.array(DataTableColumnUidSchema).optional(),
  multiAggregator: z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z.string().optional(),
});

export type DataTableLookupVariable = z.infer<
  typeof DataTableLookupVariableSchema
>;

export const VariableSchema = z.discriminatedUnion("type", [
  NumberVariableSchema,
  TextVariableSchema,
  BooleanVariableSchema,
  ChoiceVariableSchema,
  FormulaVariableSchema,
  RollVariableSchema,
  DataTableRefVariableSchema,
  DataTableLookupVariableSchema,
]);

export type Variable = z.infer<typeof VariableSchema>;
