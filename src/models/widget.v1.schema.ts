import { z } from "zod";
import { WithAreaV1Schema } from "../mixins/with-area.v1.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithPositionV1Schema } from "../mixins/with-position.v1.schema";
import { WithStyleV1Schema } from "../mixins/with-style.v1.schema";
import { VariableUidSchema, WidgetUidSchema } from "../uid";

/**
 * Fields common to every widget variant.
 *
 *  - `uid` — the widget's identifier; referenced from `sheet.widgetUids`.
 *  - `name` — internal name (debugging / authoring), not necessarily
 *    surfaced to readers.
 *  - `area` — pixel size on the sheet canvas (see `WithAreaV1Schema`).
 *  - `position` — pixel position on the sheet canvas (see
 *    `WithPositionV1Schema`).
 *  - `style` — optional inline styling (see `WithStyleV1Schema`).
 *  - `variableUid` — the variable this widget reads / writes. Optional
 *    because the `empty` variant has no data binding, and other variants
 *    can exist in a half-configured state during authoring.
 */
export const WidgetBaseV1Schema = z
  .object({ uid: WidgetUidSchema })
  .merge(WithNameV1Schema)
  .merge(WithAreaV1Schema)
  .merge(WithPositionV1Schema)
  .merge(WithStyleV1Schema)
  .extend({
    variableUid: VariableUidSchema.optional(),
  });

export type WidgetBaseV1 = z.infer<typeof WidgetBaseV1Schema>;

/**
 * A blank placeholder. Renders nothing — used by authors to reserve
 * space on a sheet during layout.
 */
export const WidgetEmptyV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("empty"),
});

export type WidgetEmptyV1 = z.infer<typeof WidgetEmptyV1Schema>;

/**
 * A prominently-displayed numeric value with optional clamps and unit.
 *
 *  - `min` / `max` — clamp bounds (UX-only — bypp doesn't enforce).
 *  - `maxVariable` — when set, the `max` clamp is dynamic, sourced from
 *    another variable's current value (e.g. "current HP" widget with max
 *    bound to the "max HP" variable). `null` explicitly means "no
 *    dynamic max"; absent means same.
 *  - `unit` — short suffix string rendered after the number ("hp",
 *    "ft", "/round").
 */
export const WidgetBigNumberV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("bigNumber"),
  min: z.number().optional(),
  max: z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z.string().optional(),
});

export type WidgetBigNumberV1 = z.infer<typeof WidgetBigNumberV1Schema>;

/**
 * A plain-text widget — renders a text variable's value with no extra
 * controls. Used for free-form fields (notes, descriptions).
 */
export const WidgetPlainTextV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("plainText"),
});

export type WidgetPlainTextV1 = z.infer<typeof WidgetPlainTextV1Schema>;

/**
 * A boolean toggle / checkbox. `toggleIconType` is an optional icon-pack
 * hint (e.g. `"checkmark"`, `"shield"`); the reader maps it to its own
 * visual. When absent, the reader picks a default.
 */
export const WidgetToggleV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("toggle"),
  toggleIconType: z.string().optional(),
});

export type WidgetToggleV1 = z.infer<typeof WidgetToggleV1Schema>;

/**
 * Renders a choice variable as a vertical list with bullets.
 *
 *  - `listVisibility` — reader-defined enum hint (e.g. `"always"`,
 *    `"selected-only"`). The reader maps unknown values to its default.
 *  - `listStyleBulletBreakline` — when `true`, each bullet item starts
 *    on its own line; when `false`, items run inline.
 *  - `listStyleBulletType` — reader-defined hint for the bullet glyph
 *    (`"dot"`, `"chevron"`, `"square"`, …).
 *  - `listStyleBulletGap` / `listStyleBulletIconGap` — pixel spacing
 *    around the bullets.
 *  - `listOptionStyle` — reader-defined style preset applied to each
 *    item (`"compact"`, `"padded"`, …).
 */
export const WidgetBulletListV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("bulletList"),
  listVisibility: z.string().optional(),
  listStyleBulletBreakline: z.boolean().optional(),
  listStyleBulletType: z.string().optional(),
  listStyleBulletGap: z.number().optional(),
  listStyleBulletIconGap: z.number().optional(),
  listOptionStyle: z.string().optional(),
});

export type WidgetBulletListV1 = z.infer<typeof WidgetBulletListV1Schema>;

/**
 * Renders a choice variable as a horizontal inline list.
 *
 *  - `listStyleTextSeparator` — string inserted between items ("·",
 *    ", ", " | ", …).
 *  - `listVisibility` / `listOptionStyle` — see bulletList above.
 */
export const WidgetInlineListV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("inlineList"),
  listStyleTextSeparator: z.string().optional(),
  listVisibility: z.string().optional(),
  listOptionStyle: z.string().optional(),
});

export type WidgetInlineListV1 = z.infer<typeof WidgetInlineListV1Schema>;

/**
 * A row of pip icons (think hit-marks, ammo counters, stress trackers).
 *
 *  - `icon` — the icon name used for each pip.
 *  - `gapX` / `gapY` — pixel spacing between pips on each axis.
 *  - `max` — total pip count. `maxVariable` makes that count dynamic,
 *    sourced from another variable (same semantics as
 *    `WidgetBigNumber.maxVariable`).
 */
export const WidgetPipsV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("pips"),
  icon: z.string().optional(),
  gapX: z.number().optional(),
  gapY: z.number().optional(),
  max: z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
});

export type WidgetPipsV1 = z.infer<typeof WidgetPipsV1Schema>;

/**
 * The growth direction of a `bar` widget.
 *
 *  - `ltr` — fills left-to-right (standard horizontal bar).
 *  - `rtl` — fills right-to-left.
 *  - `ttb` — fills top-to-bottom (vertical bar growing down).
 *  - `btt` — fills bottom-to-top (vertical bar growing up).
 */
export const BarOrientationV1Schema = z.enum(["ltr", "rtl", "ttb", "btt"]);

export type BarOrientationV1 = z.infer<typeof BarOrientationV1Schema>;

/**
 * A progress / gauge bar tied to a numeric variable.
 *
 *  - `min` / `max` / `maxVariable` — bounds (same semantics as
 *    `WidgetBigNumber`).
 *  - `unit` — short suffix rendered alongside the displayed value.
 *  - `orientation` — see `BarOrientationV1Schema`.
 *  - `barColor` / `bgColor` — CSS colors for the fill and the track.
 *  - `showValue` — when `true`, overlays the current numeric value on
 *    top of the bar.
 */
export const WidgetBarV1Schema = WidgetBaseV1Schema.extend({
  type: z.literal("bar"),
  min: z.number().optional(),
  max: z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z.string().optional(),
  orientation: BarOrientationV1Schema.optional(),
  barColor: z.string().optional(),
  bgColor: z.string().optional(),
  showValue: z.boolean().optional(),
});

export type WidgetBarV1 = z.infer<typeof WidgetBarV1Schema>;

/**
 * Discriminated union of all widget kinds. Narrow with `widget.type`.
 */
export const WidgetV1Schema = z.discriminatedUnion("type", [
  WidgetEmptyV1Schema,
  WidgetBigNumberV1Schema,
  WidgetPlainTextV1Schema,
  WidgetToggleV1Schema,
  WidgetBulletListV1Schema,
  WidgetInlineListV1Schema,
  WidgetPipsV1Schema,
  WidgetBarV1Schema,
]);

export type WidgetV1 = z.infer<typeof WidgetV1Schema>;
