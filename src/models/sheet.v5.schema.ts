/**
 * Sheet schema as **introduced in bypp v5-of-sheet** (bypp format v9) — v4
 * with the cascading `styles` record upgraded from `StyleV2` to `StyleV3`
 * (adds `rotation`). Everything else is unchanged from v4.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { StyleV3Schema } from "../mixins/with-style.v3.schema";
import { SheetV4Schema } from "./sheet.v4.schema";

export const SheetV5Schema = SheetV4Schema.extend({
  styles: z.record(z.string(), StyleV3Schema).optional(),
});

export type SheetV5 = z.infer<typeof SheetV5Schema>;
