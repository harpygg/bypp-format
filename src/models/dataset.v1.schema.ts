import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { DatasetUidSchema, SheetUidSchema, TagUidSchema } from "../uid";
import { EntityTypeV1Schema } from "./entity.v1.schema";

/**
 * A dataset's targeting rule. Either an entity type ("apply to all
 * characters") or a tag uid ("apply to entities tagged X"). Datasets can
 * combine multiple targets in their `targets[]` array.
 */
export const DatasetTargetV1Schema = z.union([
  EntityTypeV1Schema,
  TagUidSchema,
]);

/**
 * A dataset — a named bundle of variables that gets applied to a subset
 * of entities. Datasets define what variables an entity carries (e.g.
 * "Combat" → HP, AC, Initiative).
 *
 * Fields:
 *  - `name` — display label (e.g. "Combat", "Spells").
 *  - `weight` — optional sort hint when listing multiple datasets on the
 *    same entity. Lower weight = earlier in the list.
 *  - `targets` — which entities this dataset applies to. Each entry is
 *    either an entity type (string from `EntityType`) or a tag uid. Mixed
 *    arrays are allowed (e.g. "all characters AND anything tagged with
 *    spellcaster"). Empty means "apply to none".
 *  - `targetTagsGroup` — when `targets[]` contains tag uids, this
 *    controls combination semantics:
 *    - `"every"` — entity must have ALL listed tags (intersection).
 *    - `"some"` — entity must have AT LEAST ONE listed tag (union).
 *    Defaults to `"some"` when absent. Entity-type targets are always
 *    combined as union with the tag rule.
 *  - `sheetUid` — optional sheet that renders this dataset's variables.
 *    Resolves to an entry in `sheets[]`. When absent, readers fall back
 *    to a default layout.
 */
export const DatasetV1Schema = z
  .object({ uid: DatasetUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    weight: z.number().optional(),
    targets: z.array(DatasetTargetV1Schema),
    targetTagsGroup: z.enum(["every", "some"]).optional(),
    sheetUid: SheetUidSchema.optional(),
  });

export type DatasetV1 = z.infer<typeof DatasetV1Schema>;
