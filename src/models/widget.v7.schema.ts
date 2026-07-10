/**
 * Widget schema as **introduced in bypp v7** — same variants as v6 plus a new
 * `wheel` widget: a rotary value picker. The reader distributes the possible
 * values as evenly-spaced square zones around a circle; a "reading point"
 * (one of eight edge positions) marks which zone is the active value, and the
 * user rotates the wheel to change it.
 *
 * Every earlier variant is re-imported unchanged from `widget.v6.schema.ts`
 * (they already carry the v2 style); only the new `wheel` variant is defined
 * here, and it merges the v2 style like its siblings.
 *
 * As with the other variants, the wheel's presentational hints
 * (`readingPosition`, `labelOrientation`) are loose `z.string()` reader-hints
 * rather than enums, so a producer emitting a value a given reader doesn't
 * know maps to the reader's default instead of failing validation.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
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
import { WidgetBaseV1Schema } from "./widget.v1.schema";

/**
 * A rotary value picker. The ring of values is derived entirely by the reader
 * from the bound variable (its own `min..max`, its `choice` options, or the
 * rows of its `dataTableRef` table) — the widget carries no value definition.
 *
 *  - `readingPosition` — reader-hint for which of the eight edge positions
 *    (`"top"`, `"topRight"`, `"right"`, …, `"topLeft"`) marks the active
 *    value. Absent → reader default (`"top"`).
 *  - `labelOrientation` — reader-hint, `"upright"` (labels stay horizontal)
 *    or `"radial"` (labels rotate with the wheel). Absent → reader default.
 *  - `radius` — how far the value zones sit from the wheel's center, as a
 *    fraction `0..1` of the maximum radius (`1` = touching the edge). Absent
 *    → reader default.
 */
export const WidgetWheelV7Schema = WidgetBaseV1Schema.merge(
  WithStyleV3Schema,
).extend({
  type: z.literal("wheel"),
  readingPosition: z.string().optional(),
  labelOrientation: z.string().optional(),
  radius: z.number().optional(),
});

export type WidgetWheelV7 = z.infer<typeof WidgetWheelV7Schema>;

/**
 * Discriminated union of all widget kinds as of bypp v7. Every variant's
 * `style` is upgraded to `StyleV3` (which adds a cascading `rotation`), by
 * merging `WithStyleV3` over its v6 shape — so rotation lives in the style,
 * not on the widget.
 */
export const WidgetV7Schema = z.discriminatedUnion("type", [
  WidgetEmptyV6Schema.merge(WithStyleV3Schema),
  WidgetBigNumberV6Schema.merge(WithStyleV3Schema),
  WidgetPlainTextV6Schema.merge(WithStyleV3Schema),
  WidgetToggleV6Schema.merge(WithStyleV3Schema),
  WidgetBulletListV6Schema.merge(WithStyleV3Schema),
  WidgetInlineListV6Schema.merge(WithStyleV3Schema),
  WidgetPipsV6Schema.merge(WithStyleV3Schema),
  WidgetBarV6Schema.merge(WithStyleV3Schema),
  WidgetEntityImageV6Schema.merge(WithStyleV3Schema),
  WidgetWheelV7Schema,
]);

export type WidgetV7 = z.infer<typeof WidgetV7Schema>;
