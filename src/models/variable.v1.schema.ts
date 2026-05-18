/**
 * Variable schema as **frozen for bypp v1**.
 *
 * A variable is a typed field defined inside a dataset. When the dataset
 * applies to an entity, the variable shows up on that entity's sheet and
 * gets a per-entity value stored in `entity.data[variable.uid]`.
 *
 * v1 ships 6 variable kinds: `number`, `text`, `boolean`, `choice`,
 * `formula`, `roll`. v2 added `dataTableRef` and `dataTableLookup` (in
 * `variable.v2.schema.ts`).
 *
 * Variables are discriminated by `type`. Per-type config fields are
 * inlined on the variant itself (not nested under a `config: {}` object).
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import {
  DatasetUidSchema,
  VariableChoiceUidSchema,
  VariableUidSchema,
} from "../uid";

/**
 * A single option of a `choice` variable. Each choice has a uid (referenced
 * from the per-entity data record), a display `label`, an optional `icon`
 * (FontAwesome-style icon name; the reader maps it to its own catalog),
 * and an optional numeric `value` used when the choice is referenced by
 * formulas (lets a formula see "Wizard" as `3` rather than the literal
 * label string).
 */
export const ChoiceOptionV1Schema = z.object({
  uid: VariableChoiceUidSchema,
  label: z.string(),
  icon: z.string().optional(),
  value: z.number().optional(),
});

export type ChoiceOptionV1 = z.infer<typeof ChoiceOptionV1Schema>;

/**
 * Fields shared by every variable variant.
 *
 *  - `uid` — the variable's identifier. Used as a key in entity data
 *    records to attach per-entity values.
 *  - `name` — the variable's **internal** name. Stable identifier used in
 *    formulas, exports, and the dataset's structural view.
 *  - `datasetsUids` — the datasets this variable belongs to. Multiple
 *    entries allowed when the same variable is shared across datasets.
 *  - `isMandatory` — when `true`, the reader should refuse to "save" an
 *    entity that doesn't have a value for this variable. UX-only hint —
 *    bypp doesn't enforce it at the format level.
 *  - `isHiddenFromSheet` — when `true`, the variable still exists and
 *    holds data but isn't surfaced on the visual sheet. Useful for
 *    derived / internal-only variables.
 *  - `label` — display label used in the sheet UI (separate from `name`
 *    which is the internal identifier). When absent, readers fall back
 *    to `name`.
 */
export const VariableBaseV1Schema = z
  .object({ uid: VariableUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    datasetsUids: z.array(DatasetUidSchema),
    isMandatory: z.boolean().optional(),
    isHiddenFromSheet: z.boolean().optional(),
    label: z.string().optional(),
  });

export type VariableBaseV1 = z.infer<typeof VariableBaseV1Schema>;

/** A numeric variable (HP, AC, Initiative…). `defaultValue` is the seed used when an entity has no stored value. */
export const NumberVariableV1Schema = VariableBaseV1Schema.extend({
  type: z.literal("number"),
  defaultValue: z.number().optional(),
});

export type NumberVariableV1 = z.infer<typeof NumberVariableV1Schema>;

/**
 * A free-form text variable. `maxChars` caps the input length when set
 * (UX hint, not enforced by the format). `defaultValue` is the seed
 * string used when no value is stored.
 */
export const TextVariableV1Schema = VariableBaseV1Schema.extend({
  type: z.literal("text"),
  maxChars: z.number().optional(),
  defaultValue: z.string().optional(),
});

export type TextVariableV1 = z.infer<typeof TextVariableV1Schema>;

/** A boolean toggle. `defaultValue` is the seed state when no value is stored. */
export const BooleanVariableV1Schema = VariableBaseV1Schema.extend({
  type: z.literal("boolean"),
  defaultValue: z.boolean().optional(),
});

export type BooleanVariableV1 = z.infer<typeof BooleanVariableV1Schema>;

/**
 * A picker variable (class, race, alignment…).
 *
 *  - `options[]` — the available choices.
 *  - `isMultiple` — when `true`, the variable holds an array of selected
 *    option uids; when `false` (default), a single uid.
 *  - `hasNumericValue` — when `true`, each option exposes a numeric
 *    `value` field used by formulas referencing this variable. When
 *    `false`, formulas see the label string instead.
 *  - `hasIcon` — when `true`, each option carries an icon name (used in
 *    list / dropdown widgets to prefix the label).
 *  - `defaultOptionUids[]` — option uid(s) used when the entity has no
 *    value stored. In single mode only the first is used.
 */
export const ChoiceVariableV1Schema = VariableBaseV1Schema.extend({
  type: z.literal("choice"),
  options: z.array(ChoiceOptionV1Schema).optional(),
  isMultiple: z.boolean().optional(),
  hasNumericValue: z.boolean().optional(),
  hasIcon: z.boolean().optional(),
  defaultOptionUids: z.array(VariableChoiceUidSchema).optional(),
});

export type ChoiceVariableV1 = z.infer<typeof ChoiceVariableV1Schema>;

/**
 * A computed variable derived from a formula expression that references
 * other variables.
 *
 *  - `formula` — the expression (string). Format is reader-defined (e.g.
 *    `{strength.modifier} + {proficiency}`). The bypp format doesn't
 *    parse or validate the expression — readers do.
 *  - `depsVariablesUid[]` — every variable uid referenced by the formula.
 *    A denormalized index that lets readers invalidate / recompute
 *    quickly without parsing the formula string.
 *
 * Formula variables carry no stored value of their own; their value is
 * recomputed on demand from the deps.
 */
export const FormulaVariableV1Schema = VariableBaseV1Schema.extend({
  type: z.literal("formula"),
  formula: z.string().optional(),
  depsVariablesUid: z.array(VariableUidSchema).optional(),
});

export type FormulaVariableV1 = z.infer<typeof FormulaVariableV1Schema>;

/**
 * Configuration for a single slot of a composite icon. Composite icons are
 * built by stacking multiple slots (e.g. a "shield with a sword on top")
 * — each slot picks an icon and how to render it (size, rotation,
 * orientation flip).
 */
export const IconCompoSlotConfigV1Schema = z.object({
  icon: z.string().nullable(),
  size: z.number().optional(),
  rotate: z.number().optional(),
  revert: z.boolean().optional(),
});

export type IconCompoSlotConfigV1 = z.infer<
  typeof IconCompoSlotConfigV1Schema
>;

/**
 * A composite icon definition: a record from slot name → slot config.
 * Slot names are reader-defined. The reader composes the slots into the
 * final visual.
 */
export const IconCompoV1Schema = z.record(
  z.string(),
  IconCompoSlotConfigV1Schema,
);

export type IconCompoV1 = z.infer<typeof IconCompoV1Schema>;

/**
 * Visual representation of an action trigger. Two forms:
 *  - `awesome` — a single FontAwesome-style icon by name.
 *  - `compo` — a composite icon (see `IconCompoV1Schema`) for stacked /
 *    decorated visuals.
 */
export const ActionVisualV1Schema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("awesome"), icon: z.string() }),
  z.object({ type: z.literal("compo"), icons: IconCompoV1Schema }),
]);

export type ActionVisualV1 = z.infer<typeof ActionVisualV1Schema>;

/**
 * A roll variable — when "used" (clicked, triggered, …), the reader
 * resolves a dice expression and surfaces the result.
 *
 *  - `diceFormula` — the dice expression to roll (e.g. `1d20 +
 *    {strength.modifier}`). Format is reader-defined. The reader parses
 *    and rolls.
 *  - `depsVariablesUid[]` — variables referenced inside `diceFormula`
 *    (denormalized index for invalidation, same as formula variables).
 *  - `visual` — the icon used to render the roll trigger button.
 *  - `hue` — optional color hue for the trigger (0..360 on the HSL
 *    wheel). `null` means "use the reader's default color".
 *
 * Rolls don't store values; each invocation produces a fresh outcome.
 */
export const RollVariableV1Schema = VariableBaseV1Schema.extend({
  type: z.literal("roll"),
  diceFormula: z.string().optional(),
  depsVariablesUid: z.array(VariableUidSchema).optional(),
  visual: ActionVisualV1Schema.optional(),
  hue: z.number().nullable().optional(),
});

export type RollVariableV1 = z.infer<typeof RollVariableV1Schema>;

/**
 * Discriminated union of all v1 variable variants. Narrow with
 * `variable.type` to access the per-type fields.
 */
export const VariableV1Schema = z.discriminatedUnion("type", [
  NumberVariableV1Schema,
  TextVariableV1Schema,
  BooleanVariableV1Schema,
  ChoiceVariableV1Schema,
  FormulaVariableV1Schema,
  RollVariableV1Schema,
]);

export type VariableV1 = z.infer<typeof VariableV1Schema>;
