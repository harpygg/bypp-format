/**
 * Widget schema as **introduced in bypp v6** — same variants as v5, but the
 * shared style is upgraded from `WithStyleV1` to `WithStyleV2` (adds the
 * `border*` group and a `background` image). Every variant re-uses its
 * earlier definition and just overrides the `style` field via `.merge`.
 *
 * Stacking order (z-index) is NOT a widget field — it is carried by the
 * ORDER of `sheet.widgetUids` (see `sheet.v*`), later entries painting on
 * top. Nothing to add here for it.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithStyleV2Schema } from "../mixins/with-style.v2.schema";
import {
  WidgetBarV1Schema,
  WidgetBigNumberV1Schema,
  WidgetBulletListV1Schema,
  WidgetEmptyV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
} from "./widget.v1.schema";
import { WidgetEntityImageV5Schema } from "./widget.v5.schema";

// Each variant = its latest prior shape with the v2 style merged in
// (`.merge` overrides the conflicting `style` key, keeps everything else).
export const WidgetEmptyV6Schema = WidgetEmptyV1Schema.merge(WithStyleV2Schema);
export const WidgetBigNumberV6Schema =
  WidgetBigNumberV1Schema.merge(WithStyleV2Schema);
export const WidgetPlainTextV6Schema =
  WidgetPlainTextV1Schema.merge(WithStyleV2Schema);
export const WidgetToggleV6Schema =
  WidgetToggleV1Schema.merge(WithStyleV2Schema);
export const WidgetBulletListV6Schema =
  WidgetBulletListV1Schema.merge(WithStyleV2Schema);
export const WidgetInlineListV6Schema =
  WidgetInlineListV1Schema.merge(WithStyleV2Schema);
export const WidgetPipsV6Schema = WidgetPipsV1Schema.merge(WithStyleV2Schema);
export const WidgetBarV6Schema = WidgetBarV1Schema.merge(WithStyleV2Schema);
export const WidgetEntityImageV6Schema =
  WidgetEntityImageV5Schema.merge(WithStyleV2Schema);
export type WidgetEntityImageV6 = z.infer<typeof WidgetEntityImageV6Schema>;

/**
 * Discriminated union of all widget kinds as of bypp v6. Narrow with
 * `widget.type`.
 */
export const WidgetV6Schema = z.discriminatedUnion("type", [
  WidgetEmptyV6Schema,
  WidgetBigNumberV6Schema,
  WidgetPlainTextV6Schema,
  WidgetToggleV6Schema,
  WidgetBulletListV6Schema,
  WidgetInlineListV6Schema,
  WidgetPipsV6Schema,
  WidgetBarV6Schema,
  WidgetEntityImageV6Schema,
]);

export type WidgetV6 = z.infer<typeof WidgetV6Schema>;
