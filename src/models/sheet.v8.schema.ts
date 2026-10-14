/**
 * Sheet schema as **introduced in bypp format v31** — v7 plus `height`, and
 * the layout rule that comes with it.
 *
 * A sheet with a `height` is 1000 units wide and `height` units high: the
 * Bard sheet, 1000 × 300, drawn without a background image. Its widgets'
 * `left` and `width` are read in percent of the sheet's width, and so are
 * their `top` and `height`: Inspiration at `top: 2` sits 20 units from the
 * top whether the sheet is 300 or 360 high. Stretching the sheet moves
 * nothing. A background image keeps its own size, at most 1000 wide, pinned
 * top left; what overflows the height is cut.
 *
 * A sheet without `height` (every sheet before v31) is drawn as before: at its
 * image's ratio, its widgets' `top` and `height` read in percent of the
 * sheet's height. Sheets of the two kinds coexist; none is converted.
 *
 * Every other field is unchanged from v7.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { SheetV7Schema } from "./sheet.v7.schema";

export const SheetV8Schema = SheetV7Schema.extend({
  height: z.number().positive().optional(),
});

export type SheetV8 = z.infer<typeof SheetV8Schema>;
