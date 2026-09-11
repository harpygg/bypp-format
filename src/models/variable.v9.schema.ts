/**
 * Variable schema as **introduced in bypp v19** — the v8 set plus two
 * variants that let one entity point at others.
 *
 * A character owns items, knows spells, lives somewhere, belongs to a group.
 * Until v19 the format had no field for that: a sheet could name a value, a
 * choice, a data-table row, but never another entity of the same document,
 * so an inventory or a spell list had to be typed out as free text and lost
 * every link the author had drawn between its lines and the items themselves.
 *
 *  - `entityRef` stores, on the holder entity, the uids of the entities it
 *    points at (`entities[].data[variableUid]` is a uid array). The optional
 *    filter — `targetsTypes`, `targetsTags`, `targetTagsGroup` — narrows the
 *    candidates a reader offers, with the same `every` / `some` reading as a
 *    dataset's targets. `sourceVariableUid` names another `entityRef` whose
 *    current value is the candidate pool instead: one can only equip what one
 *    owns. `max` (or `maxVariable`, an attribute read for it) caps how many.
 *  - `entityLookup` derives a value from the entities a sibling `entityRef`
 *    (`sourceVariableUid`) points at: `keyVariableUid` is read on each for
 *    calculation, `labelVariableUid` for display; either unset falls back to
 *    the entity's name. Several entities aggregate the same way a data-table
 *    lookup aggregates rows.
 *
 * `targetsTypes` entries are entity type names, kept as loose strings so a
 * reader with more types than this document knows can still carry them.
 *
 * Every earlier variant is re-used unchanged from v8; only the union is
 * re-declared over the wider set.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TagUidSchema, VariableUidSchema } from "../uid";
import {
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
  DataTableLookupVariableV8Schema,
  DataTableRefVariableV8Schema,
  FormulaVariableV8Schema,
  ImageVariableV8Schema,
  NumberVariableV8Schema,
  RollVariableV8Schema,
  TextVariableV8Schema,
  VariableBaseV8Schema,
} from "./variable.v8.schema";

export const EntityRefVariableV9Schema = VariableBaseV8Schema.extend({
  type: z.literal("entityRef"),
  sourceVariableUid: VariableUidSchema.optional(),
  targetsTypes: z.array(z.string()).optional(),
  targetsTags: z.array(TagUidSchema).optional(),
  targetTagsGroup: z.enum(["every", "some"]).optional(),
  max: z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
});

export type EntityRefVariableV9 = z.infer<typeof EntityRefVariableV9Schema>;

export const EntityLookupVariableV9Schema = VariableBaseV8Schema.extend({
  type: z.literal("entityLookup"),
  sourceVariableUid: VariableUidSchema.optional(),
  keyVariableUid: VariableUidSchema.optional(),
  labelVariableUid: VariableUidSchema.optional(),
  multiAggregator: z.enum(["concat", "sum", "avg", "min", "max"]).optional(),
  multiSeparator: z.string().optional(),
});

export type EntityLookupVariableV9 = z.infer<
  typeof EntityLookupVariableV9Schema
>;

/**
 * Discriminated union of all variable variants as of bypp v19 — the v8 set
 * plus `entityRef` and `entityLookup`. Narrow with `variable.type`.
 */
export const VariableV9Schema = z.discriminatedUnion("type", [
  NumberVariableV8Schema,
  TextVariableV8Schema,
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  FormulaVariableV8Schema,
  RollVariableV8Schema,
  DataTableRefVariableV8Schema,
  DataTableLookupVariableV8Schema,
  ImageVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
  EntityRefVariableV9Schema,
  EntityLookupVariableV9Schema,
]);

export type VariableV9 = z.infer<typeof VariableV9Schema>;
