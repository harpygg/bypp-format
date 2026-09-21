/**
 * Variable schema as **introduced in bypp v26** — the v9 set with a `roll`
 * that can do more than roll.
 *
 * Until v26 a sheet's action could only throw dice. An item's "Purchase" that
 * takes its price out of the buyer's purse and says so in the chat had
 * nowhere to live on a sheet, and an author who wrote one had it dropped on
 * export.
 *
 * The `roll` variant keeps its name and everything it had, and gains three
 * optional sections (`ActionSectionsV26Schema`), run in this order:
 *
 *  - `rolls[]` — one entry per throw: `{ key, label, diceFormula }`. Several
 *    throws in one action, an attack and its damage. `diceFormula` on the
 *    variant itself stays as the first throw's, for readers of one notation.
 *  - `updates[]` — one entry per attribute set: `{ variableUid, formula }`.
 *    `formula` is HTML like every other formula in this format. Whose
 *    attribute `variableUid` names — the holder's own or that of the entity
 *    using it — is NOT stored: a reader tells the two apart the way it
 *    already does for a formula's spans, from the datasets the holder
 *    belongs to. Every formula of one action reads the values as they were
 *    before the action ran, so the order of the lines never matters.
 *  - `log` — a message, HTML with the same spans, posted once the action
 *    has run.
 *
 * The last two may name two reserved attributes per throw,
 * `system-action-result-<key>` (the total, a number) and
 * `system-action-roll-<key>` (the notation, text). A reader resolves them
 * from the throws it just made; they are never stored and never listed
 * among a document's variables.
 *
 * The same sections are what an entity's own action carries (see
 * `entity-action.v2.schema`): one vocabulary. `depsVariablesUid`, when
 * present, lists the attributes every section reads and every update sets.
 *
 * Every other variant is re-used unchanged from v8/v9; only `roll` moves and
 * the union is re-declared.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { VariableUidSchema } from "../uid";
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
} from "./variable.v8.schema";
import {
  EntityLookupVariableV9Schema,
  EntityRefVariableV9Schema,
} from "./variable.v9.schema";

export const VariableUpdateV26Schema = z.object({
  variableUid: VariableUidSchema,
  formula: z.string(),
});

export type VariableUpdateV26 = z.infer<typeof VariableUpdateV26Schema>;

/**
 * One throw of dice in an action. `key` never changes once written: the
 * reserved attributes of the throw derive from it (`system-action-result-`
 * and `system-action-roll-` followed by the key). `label` is what the
 * author calls the throw.
 */
export const ActionRollV26Schema = z.object({
  key: z.string(),
  label: z.string(),
  diceFormula: z.string(),
});

export type ActionRollV26 = z.infer<typeof ActionRollV26Schema>;

/**
 * What an action does, every part optional. `rolls` is the list of throws;
 * the `diceFormula` a roll carried before v26 stays beside it, written again
 * as the FIRST roll's formula, so a reader that shows one notation and a v25
 * reader keep something to read. A reader takes `rolls` when present.
 */
export const ActionSectionsV26Schema = z.object({
  rolls: z.array(ActionRollV26Schema).optional(),
  updates: z.array(VariableUpdateV26Schema).optional(),
  log: z.string().optional(),
});

export type ActionSectionsV26 = z.infer<typeof ActionSectionsV26Schema>;

export const RollVariableV10Schema = RollVariableV8Schema.merge(
  ActionSectionsV26Schema,
);

export type RollVariableV10 = z.infer<typeof RollVariableV10Schema>;

/**
 * Discriminated union of all variable variants as of bypp v26 — the v9 set
 * with `roll` re-typed. Narrow with `variable.type`.
 */
export const VariableV10Schema = z.discriminatedUnion("type", [
  NumberVariableV8Schema,
  TextVariableV8Schema,
  BooleanVariableV8Schema,
  ChoiceVariableV8Schema,
  FormulaVariableV8Schema,
  RollVariableV10Schema,
  DataTableRefVariableV8Schema,
  DataTableLookupVariableV8Schema,
  ImageVariableV8Schema,
  DataTableDirectLookupVariableV8Schema,
  EntityRefVariableV9Schema,
  EntityLookupVariableV9Schema,
]);

export type VariableV10 = z.infer<typeof VariableV10Schema>;
