/**
 * Widget schema as **introduced in bypp v12** — the v7 variants plus a new
 * `actionRoll` widget, and a new `actionsVariablesUids` field on EVERY
 * variant.
 *
 * Two changes, both about the same idea: letting a sheet trigger dice rolls.
 *
 *  1. `actionsVariablesUids` — extra `roll` variables a reader offers when
 *     the widget is activated, on top of whatever the widget's own
 *     `variableUid` does. It sits on every variant (hence the
 *     `WithWidgetActionsV8Schema` mixin) because any widget can carry
 *     actions: a character's "Strength" number widget may well offer a
 *     "Strength check" roll next to its normal editing affordance.
 *
 *  2. `actionRoll` — a widget whose ONLY job is to roll its bound `roll`
 *     variable. Distinct from a plain widget carrying actions: here the roll
 *     IS the widget, so a reader renders it as a die/button rather than as a
 *     value with a menu hanging off it.
 *
 * Every earlier variant is re-imported unchanged from `widget.v6.schema.ts`
 * (they already carry the v3 style, merged here as in v7); only the new
 * variant and the new mixin are defined in this file.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithStyleV3Schema } from "../mixins/with-style.v3.schema";
import { VariableUidSchema } from "../uid";
import { WidgetBaseV1Schema } from "./widget.v1.schema";
import {
  WidgetBarV6Schema,
  WidgetBigNumberV6Schema,
  WidgetBulletListV6Schema,
  WidgetEmptyV6Schema,
  WidgetEntityImageV6Schema,
  WidgetInlineListV6Schema,
  WidgetPipsV6Schema,
  WidgetPlainTextV6Schema,
  WidgetToggleV6Schema,
} from "./widget.v6.schema";
import { WidgetWheelV7Schema } from "./widget.v7.schema";

/**
 * Extra roll actions attached to a widget.
 *
 *  - `actionsVariablesUids` — uids of `roll` variables the reader surfaces
 *    when the widget is activated. Order is the author's; readers should
 *    preserve it. Absent or empty means the widget behaves exactly as it did
 *    before v12.
 *
 * A uid naming a variable that is absent from the bundle (or is not a `roll`
 * variable) should be ignored by the reader rather than treated as an error —
 * bypp does not enforce referential integrity.
 */
export const WithWidgetActionsV8Schema = z.object({
  actionsVariablesUids: z.array(VariableUidSchema).optional(),
});

export type WithWidgetActionsV8 = z.infer<typeof WithWidgetActionsV8Schema>;

/**
 * A widget that rolls its bound `roll` variable. It renders as an actionable
 * die rather than as a value: the variable's dice formula is resolved against
 * the host entity and rolled when the reader activates the widget.
 *
 * It carries no config of its own — the formula, label, icon and colour all
 * come from the bound variable.
 */
export const WidgetActionRollV8Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema,
)
  .merge(WithWidgetActionsV8Schema)
  .extend({
    type: z.literal("actionRoll"),
  });

export type WidgetActionRollV8 = z.infer<typeof WidgetActionRollV8Schema>;

/**
 * Discriminated union of all widget kinds as of bypp v12. Every v7 variant is
 * re-declared with the v3 style (as in v7) plus the new actions mixin, and
 * the `actionRoll` variant is appended.
 */
export const WidgetV8Schema = z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema,
  ),
  WidgetPlainTextV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema,
  ),
  WidgetToggleV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema,
  ),
  WidgetBulletListV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema,
  ),
  WidgetInlineListV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema,
  ),
  WidgetPipsV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema),
  WidgetBarV6Schema.merge(WithStyleV3Schema).merge(WithWidgetActionsV8Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV3Schema).merge(
    WithWidgetActionsV8Schema,
  ),
  WidgetWheelV7Schema.merge(WithWidgetActionsV8Schema),
  WidgetActionRollV8Schema,
]);

export type WidgetV8 = z.infer<typeof WidgetV8Schema>;
