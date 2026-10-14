/**
 * Widget schema as **introduced in bypp format v31** — v13 with a leaner
 * `entityGrid`.
 *
 * The grid now draws each linked entity or held spawn as a square,
 * `imageWidth` em a side, wrapping with `gapX` / `gapY`. The settings of the
 * tiles it replaced (`listOptionStyle`, `formatSlug`, `objectFit`,
 * `imageHeight`) are gone: no reader drew them any more.
 *
 * Every other variant is re-used unchanged from v13.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithStyleV6Schema } from "../mixins/with-style.v6.schema";
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
import { WithWidgetActionsV8Schema } from "./widget.v8.schema";
import { WidgetActionRollV9Schema } from "./widget.v9.schema";

export const WidgetEntityGridV14Schema = WidgetBaseV1Schema.extend({
  type: z.literal("entityGrid"),
  gapX: z.number().optional(),
  gapY: z.number().optional(),
  imageWidth: z.number().optional(),
})
  .merge(WithStyleV6Schema)
  .merge(WithWidgetActionsV8Schema)
  .merge(WithCreditV1Schema);

export type WidgetEntityGridV14 = z.infer<typeof WidgetEntityGridV14Schema>;

export const WidgetV14Schema = z.discriminatedUnion("type", [
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
  WidgetPipsV6Schema.merge(WithStyleV6Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
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

export type WidgetV14 = z.infer<typeof WidgetV14Schema>;
