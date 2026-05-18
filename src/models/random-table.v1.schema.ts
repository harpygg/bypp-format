import { z } from "zod";
import { RandomTableRowUidSchema, RandomTableUidSchema } from "../uid";

/**
 * A single row of a random table. Rows have a numeric **weight** (`range`)
 * that determines their relative probability of being rolled.
 *
 * Conceptual model: a reader rolls `1d(totalWeight)`; cumulative ranges
 * determine which row is hit. So a row with `range: 3` is three times as
 * likely to come up as a row with `range: 1`.
 *
 * `randomTableUid` is an optional **nested table reference** — when set,
 * "rolling" this row triggers a roll on the referenced table instead of
 * returning `content` directly. Lets random tables compose ("roll a
 * monster" → references a "monster type" table → returns "ancient red
 * dragon"). When unset, `content` is the final result.
 */
export const RandomTableRowV1Schema = z.object({
  uid: RandomTableRowUidSchema,
  range: z.number(),
  content: z.string(),
  randomTableUid: RandomTableUidSchema.optional(),
});

export type RandomTableRowV1 = z.infer<typeof RandomTableRowV1Schema>;

/**
 * A random table — a list of weighted rows that a reader can roll on.
 * Used in chunks of type `random` (embedded in pages) and referenced by
 * the runtime "Roll" controls of a sheet.
 *
 * `title` is the player-facing label of the table (e.g. "Wild Magic
 * Surge", "Tavern Drinks"). Rows live in `rows[]` in display order.
 */
export const RandomTableV1Schema = z.object({
  uid: RandomTableUidSchema,
  title: z.string(),
  rows: z.array(RandomTableRowV1Schema),
});

export type RandomTableV1 = z.infer<typeof RandomTableV1Schema>;
