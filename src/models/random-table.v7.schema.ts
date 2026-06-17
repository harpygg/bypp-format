import { z } from "zod";
import { RandomTableRowUidSchema, RandomTableUidSchema } from "../uid";

/**
 * Random table row — v7 replaces the single optional `randomTableUid`
 * nested-table reference with an explicit placeholder map. Each key is a
 * **placeholder token that appears literally in `content`** (e.g. `"$1"` or
 * `"$weapon"`); its value is the table rolled in its place. When a row comes
 * up, a reader rolls every referenced table and substitutes each result for
 * its placeholder token in `content`.
 *
 * The mapping is explicit on purpose: a reader replaces by token, not by
 * position, so it never has to assume any particular `$N` numbering
 * convention. See {@link "./random-table.v1.schema"} for the conceptual model
 * of nested rolls.
 */
export const RandomTableRowV7Schema = z.object({
  uid: RandomTableRowUidSchema,
  range: z.number().default(1),
  content: z.string(),
  randomTableRefs: z.record(RandomTableUidSchema).optional(),
});

export type RandomTableRowV7 = z.infer<typeof RandomTableRowV7Schema>;

/**
 * Random table — v7 adds an optional `diceFormula` override. When set it
 * constrains the roll (an `XdY` notation in the producer); when unset, readers
 * derive the formula from the rows (`1d<sum of (range + 1)>`). Kept as a loose
 * string (not a regex) for forward-compatibility, like other reader-hint
 * fields.
 */
export const RandomTableV7Schema = z.object({
  uid: RandomTableUidSchema,
  title: z.string(),
  rows: z.array(RandomTableRowV7Schema).default([]),
  diceFormula: z.string().optional(),
});

export type RandomTableV7 = z.infer<typeof RandomTableV7Schema>;
