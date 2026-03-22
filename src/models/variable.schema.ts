import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import {
  DatasetUidSchema,
  VariableChoiceUidSchema,
  VariableUidSchema,
} from "../uid";

export const ChoiceOptionSchema = z.object({
  uid: VariableChoiceUidSchema,
  label: z.string(),
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
  defaultValue: z.string().optional(),
});

export type ChoiceVariable = z.infer<typeof ChoiceVariableSchema>;

export const FormulaVariableSchema = VariableBaseSchema.extend({
  type: z.literal("formula"),
  formula: z.string().optional(),
  depsVariablesUid: z.array(VariableUidSchema).optional(),
});

export type FormulaVariable = z.infer<typeof FormulaVariableSchema>;

export const RollVariableSchema = VariableBaseSchema.extend({
  type: z.literal("roll"),
  diceFormula: z.string().optional(),
  depsVariablesUid: z.array(VariableUidSchema).optional(),
});

export type RollVariable = z.infer<typeof RollVariableSchema>;

export const VariableSchema = z.discriminatedUnion("type", [
  NumberVariableSchema,
  TextVariableSchema,
  BooleanVariableSchema,
  ChoiceVariableSchema,
  FormulaVariableSchema,
  RollVariableSchema,
]);

export type Variable = z.infer<typeof VariableSchema>;
