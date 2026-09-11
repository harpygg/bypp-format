/**
 * Widget schema as **introduced in bypp v19** — the v9 union plus
 * `entityGrid`, the widget that draws the entities an `entityRef` attribute
 * points at (see `variable.v9.schema`).
 *
 * An inventory or a spell list is a set of pictures more than a set of
 * words: each linked entity is laid out as a tile, wrapping like pips do
 * (`gapX` / `gapY`, in em), showing its image, its name, or both
 * (`listOptionStyle`, the same reader hint the list widgets carry). The image
 * is the entity's `formatSlug` rendition, sized `imageWidth` × `imageHeight`
 * (em, so it scales with the widget's text) and fitted with `objectFit`.
 *
 * Every earlier variant is re-used unchanged from v9; only the union is
 * re-declared over the wider set.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { WithStyleV3Schema } from "../mixins/with-style.v3.schema";
import { EntityImageFormatV5Schema } from "./entity-image-format.v5.schema";
import { WidgetBaseV1Schema } from "./widget.v1.schema";
import { EntityImageObjectFitV5Schema } from "./widget.v5.schema";
import { WithWidgetActionsV8Schema } from "./widget.v8.schema";
import { WidgetV9Schema } from "./widget.v9.schema";

export const WidgetEntityGridV10Schema = WidgetBaseV1Schema.extend({
  type: z.literal("entityGrid"),
  gapX: z.number().optional(),
  gapY: z.number().optional(),
  listOptionStyle: z.string().optional(),
  formatSlug: EntityImageFormatV5Schema.optional(),
  objectFit: EntityImageObjectFitV5Schema.optional(),
  imageWidth: z.number().optional(),
  imageHeight: z.number().optional(),
})
  .merge(WithStyleV3Schema)
  .merge(WithWidgetActionsV8Schema)
  .merge(WithCreditV1Schema);

export type WidgetEntityGridV10 = z.infer<typeof WidgetEntityGridV10Schema>;

/**
 * Discriminated union of all widget kinds as of bypp v19 — the v9 union plus
 * `entityGrid`.
 */
export const WidgetV10Schema = z.discriminatedUnion("type", [
  ...WidgetV9Schema.options,
  WidgetEntityGridV10Schema,
]);

export type WidgetV10 = z.infer<typeof WidgetV10Schema>;
