import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import { EntityTypeSchema } from "./entity.schema";
import { DatasetUidSchema, SheetUidSchema, TagUidSchema } from "../uid";

export const DatasetTargetSchema = z.union([EntityTypeSchema, TagUidSchema]);

export const DatasetSchema = z
  .object({ uid: DatasetUidSchema })
  .merge(WithNameSchema)
  .extend({
    weight: z.number().optional(),
    targets: z.array(DatasetTargetSchema),
    targetTagsGroup: z.enum(["every", "some"]).optional(),
    sheetUid: SheetUidSchema.optional(),
  });

export type Dataset = z.infer<typeof DatasetSchema>;
