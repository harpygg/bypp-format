/**
 * Widget schema as **introduced in bypp v22** — the v10 union with the v4
 * style, which adds `fontWeight` and `fontStyle`.
 *
 * No variant is added, removed or otherwise changed: every member is the one
 * v10 declared, with `WithStyleV4Schema` merged last so its `style` key wins
 * over the v3 one. A widget can now be emphasised without an editor having to
 * bake the weight into the text itself.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithStyleV4Schema } from "../mixins/with-style.v4.schema";
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
import { WidgetEntityGridV10Schema } from "./widget.v10.schema";

export const WidgetV11Schema = z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetToggleV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBulletListV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetInlineListV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetPipsV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetBarV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetWheelV7Schema.merge(WithStyleV4Schema)
    .merge(WithWidgetActionsV8Schema)
    .merge(WithCreditV1Schema),
  WidgetActionRollV9Schema.merge(WithStyleV4Schema),
  WidgetEntityGridV10Schema.merge(WithStyleV4Schema),
]);

export type WidgetV11 = z.infer<typeof WidgetV11Schema>;
