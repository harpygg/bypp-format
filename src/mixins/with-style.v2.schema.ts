import { z } from "zod";
import { AssetUidSchema } from "../uid";

/**
 * CSS-like styling for a widget (or any item that supports inline style) —
 * **v2**, a superset of v1.
 *
 * v2 adds, on top of the v1 whitelist:
 *  - the `border*` group (width / style / color / radius), and
 *  - `background` — a background image referencing a bundle asset, with a
 *    CSS `object-fit`.
 *
 * As in v1 this is intentionally a curated subset of CSS — new style
 * properties are added version by version, never removed.
 *
 * This file MUST NOT be modified once shipped.
 */

/**
 * CSS `object-fit` keyword — how an image fills its box. Shared by the
 * background image here and (from widget v6) the entity-image widget.
 */
export const ObjectFitV6Schema = z.enum([
  "cover",
  "contain",
  "fill",
  "none",
  "scale-down",
]);

export type ObjectFitV6 = z.infer<typeof ObjectFitV6Schema>;

/**
 * A background image drawn behind the item. `assetUid` references an image
 * entry in the bundle's top-level `assets[]`; `objectFit` controls how it
 * fills the box (defaults to `cover` when absent).
 */
export const WidgetBackgroundV6Schema = z.object({
  assetUid: AssetUidSchema,
  objectFit: ObjectFitV6Schema.optional(),
});

export type WidgetBackgroundV6 = z.infer<typeof WidgetBackgroundV6Schema>;

export const StyleV2Schema = z
  .object({
    justifyContent: z.string().optional(),
    alignItems: z.string().optional(),
    flexDirection: z.string().optional(),
    lineHeight: z.number().optional(),
    fontFamilyId: z.string().optional(),
    fontScale: z.number().optional(),
    color: z.string().optional(),
    paddingTop: z.number().optional(),
    paddingRight: z.number().optional(),
    paddingBottom: z.number().optional(),
    paddingLeft: z.number().optional(),
    // New in v2:
    borderWidth: z.number().optional(),
    borderStyle: z.string().optional(),
    borderColor: z.string().optional(),
    borderRadius: z.string().optional(),
    background: WidgetBackgroundV6Schema.optional(),
  })
  .nullable()
  .optional();

export type StyleV2 = z.infer<typeof StyleV2Schema>;

/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
export const WithStyleV2Schema = z.object({
  style: StyleV2Schema,
});
