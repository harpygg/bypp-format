import { z } from "zod";

/**
 * CSS-like styling for a widget (or any item that supports inline style).
 *
 * Each field maps to its CSS counterpart, but the bypp format is
 * intentionally a **subset** — readers don't have to support arbitrary
 * CSS, just this curated whitelist. New style properties are added
 * version by version, never removed.
 *
 * Conventions:
 *  - `fontScale` is a multiplier on the parent's font size (1 = same, 2
 *    = double, 0.5 = half). Avoids hard-coding pixel values that don't
 *    survive responsive layouts.
 *  - `fontFamilyId` references a font registered in the producer's
 *    catalog. Out of scope for the bypp format itself — the reader is
 *    expected to know its own font catalog.
 *  - `paddingTop` / `paddingRight` / `paddingBottom` / `paddingLeft` are
 *    in pixels.
 */
export const StyleV1Schema = z
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
  })
  .nullable()
  .optional();

/**
 * Mixin: optional styling for items that support it. `null` and missing
 * field both mean "use defaults".
 */
export const WithStyleV1Schema = z.object({
  style: StyleV1Schema,
});
