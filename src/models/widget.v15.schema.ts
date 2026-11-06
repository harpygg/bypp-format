/**
 * Widget schema as **introduced in bypp format v32** — v14 with pips that can
 * follow a curve.
 *
 * A `pips` widget may lay its pips out as a wrapping row (`layout: "wrap"`,
 * the only layout before v32, spaced by `gapX` / `gapY`) or along one line
 * (`layout: "path"`) that starts on the first pip:
 *
 *   • `curve` — how much the line bends: 1 / its radius in em, signed,
 *     positive bending clockwise; 0 is straight.
 *   • `startAngle` — the direction it leaves the first pip in, in degrees,
 *     clockwise from +x (screen coordinates).
 *   • `closed` — the pips go exactly once round a circle, whatever their
 *     count; it overrides `curve`.
 *
 * Along a line, pips are `gapX` apart. All four are optional: absent, a
 * reader lays out a row, as before v32.
 *
 * Every other variant is re-used unchanged from v14.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithStyleV6Schema } from "../mixins/with-style.v6.schema";
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
import { WithWidgetActionsV8Schema } from "./widget.v8.schema";
import { WidgetActionRollV9Schema } from "./widget.v9.schema";
import { WidgetEntityGridV14Schema } from "./widget.v14.schema";

export const PipsLayoutV15Schema = z.enum(["wrap", "path"]);

export type PipsLayoutV15 = z.infer<typeof PipsLayoutV15Schema>;

export const WidgetPipsV15Schema = WidgetPipsV6Schema.extend({
  layout: PipsLayoutV15Schema.optional(),
  curve: z.number().optional(),
  startAngle: z.number().optional(),
  closed: z.boolean().optional(),
})
  .merge(WithStyleV6Schema)
  .merge(WithWidgetActionsV8Schema)
  .merge(WithCreditV1Schema);

export type WidgetPipsV15 = z.infer<typeof WidgetPipsV15Schema>;

export const WidgetV15Schema = z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetPipsV15Schema,
  WidgetBarV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetActionRollV9Schema.merge(WithStyleV6Schema),
  WidgetEntityGridV14Schema,
]);

export type WidgetV15 = z.infer<typeof WidgetV15Schema>;
