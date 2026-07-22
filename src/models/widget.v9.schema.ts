/**
 * Widget schema as **introduced in bypp v13** — the v8 union with an optional
 * per-file `credit` (see `with-credit.v1.schema`) on EVERY variant.
 *
 * Every widget can carry a background image through `WithStyleV3` (the
 * `background` block), and the `entityImage` variant is a picture outright —
 * so credit sits on all variants rather than on a chosen few. That also means
 * a reader never has to ask "is this a widget kind that can be credited?"
 * before rendering a credit affordance.
 *
 * Every variant is re-declared exactly as v8 declared it (v6 shape + v3 style
 * + v8 actions) with the credit mixin merged on top; nothing else changes.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithStyleV3Schema } from "../mixins/with-style.v3.schema";
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
import {
  WidgetActionRollV8Schema,
  WithWidgetActionsV8Schema,
} from "./widget.v8.schema";

export const WidgetActionRollV9Schema =
  WidgetActionRollV8Schema.merge(WithCreditV1Schema);

export type WidgetActionRollV9 = z.infer<typeof WidgetActionRollV9Schema>;

/**
 * Discriminated union of all widget kinds as of bypp v13 — the v8 union with
 * `credit` merged into every member.
 */
export const WidgetV9Schema = z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetPipsV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBarV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV3Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithWidgetActionsV8Schema).merge(
    WithCreditV1Schema,
  ),
  WidgetActionRollV9Schema,
]);

export type WidgetV9 = z.infer<typeof WidgetV9Schema>;
