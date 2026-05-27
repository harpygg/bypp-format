import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { DatasetUidSchema, SheetUidSchema, TagUidSchema } from "../uid";
import { EntityTypeV1Schema } from "./entity.v1.schema";

export const DatasetTargetV2Schema = z.union([
  EntityTypeV1Schema,
  TagUidSchema,
]);

/**
 * Dataset — v2 changes: `targets` defaults to `[]` (empty = "applies to
 * nothing", was already accepted semantically; just lets the producer
 * omit the field).
 */
export const DatasetV2Schema = z
  .object({ uid: DatasetUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    weight: z.number().optional(),
    targets: z.array(DatasetTargetV2Schema).default([]),
    targetTagsGroup: z.enum(["every", "some"]).optional(),
    sheetUid: SheetUidSchema.optional(),
  });

export type DatasetV2 = z.infer<typeof DatasetV2Schema>;
