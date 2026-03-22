import { z } from "zod";
import { VariableChoiceUidSchema, VariableUidSchema } from "../uid";

export const VariableDataValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.array(VariableChoiceUidSchema),
  z.null(),
]);

export const VariablesDataRecordSchema = z.record(
  VariableUidSchema,
  VariableDataValueSchema,
);

export const WithDataSchema = z.object({
  data: VariablesDataRecordSchema.optional(),
});
