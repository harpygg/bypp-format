/**
 * Widget schema as **introduced in bypp v5** — extends v1 with one new
 * variant: `entityImage`.
 *
 * An `entityImage` widget renders the image of the entity the sheet is
 * bound to (portrait, token, …). It carries two purely-visual hints:
 *
 *  - `formatSlug` — which rendition of the entity's image to show. The
 *    four values map 1:1 to the entity image URL fields carried by
 *    `WithImagesUrlsV2Schema`: `original` → `originalUrl`,
 *    `thumbnail` → `thumbnailUrl`, `square` → `squareUrl`,
 *    `closeup` → `closeupUrl`. A closed enum (not an open string) so a
 *    reader can always resolve the slug to a concrete image field.
 *  - `objectFit` — CSS `object-fit` value for how the image fills the
 *    widget box. Closed enum mirroring the CSS keyword set.
 *
 * All other variants (empty, bigNumber, plainText, toggle, bulletList,
 * inlineList, pips, bar) are unchanged from v1 and re-imported directly
 * from `widget.v1.schema.ts`. Only the new variant and the union itself
 * are defined here.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { EntityImageFormatV5Schema } from "./entity-image-format.v5.schema";
import {
  WidgetBarV1Schema,
  WidgetBaseV1Schema,
  WidgetBigNumberV1Schema,
  WidgetBulletListV1Schema,
  WidgetEmptyV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
} from "./widget.v1.schema";

/**
 * CSS `object-fit` keyword controlling how the entity image fills the
 * widget box. (A widget rendering concern, unlike `formatSlug` which is an
 * entity image rendition — see `entity-image-format.v5.schema.ts`.)
 */
export const EntityImageObjectFitV5Schema = z.enum([
  "contain",
  "cover",
  "fill",
  "none",
  "scale-down",
]);

export type EntityImageObjectFitV5 = z.infer<
  typeof EntityImageObjectFitV5Schema
>;

/**
 * Renders the bound entity's image. `formatSlug` picks the rendition,
 * `objectFit` controls how it fills the widget box. Both optional —
 * a bare `{ type: "entityImage" }` is valid (reader picks defaults).
 */
export const WidgetEntityImageV5Schema = WidgetBaseV1Schema.extend({
  type: z.literal("entityImage"),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional(),
});

export type WidgetEntityImageV5 = z.infer<typeof WidgetEntityImageV5Schema>;

/**
 * Discriminated union of all widget kinds as of bypp v5 — the v1 set
 * plus `entityImage`. Narrow with `widget.type`.
 */
export const WidgetV5Schema = z.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema,
  WidgetEntityImageV5Schema,
]);

export type WidgetV5 = z.infer<typeof WidgetV5Schema>;
