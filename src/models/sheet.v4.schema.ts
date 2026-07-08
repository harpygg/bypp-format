/**
 * Sheet schema as **introduced in bypp v4** — v3 plus the cascading style
 * record.
 *
 * `styles` is the sheet-level style cascade: keyed by target — `"global"`
 * (applies to every widget) or a widget `type` string (applies to all
 * widgets of that type) — each holding a `StyleV2`. A widget's own
 * `style` (on the widget) overrides both. The key is a loose string
 * (reader hint), so new targets don't need a schema bump.
 *
 * Everything else is unchanged from v3.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { StyleV2Schema } from "../mixins/with-style.v2.schema";
import { SheetV3Schema } from "./sheet.v3.schema";

export const SheetV4Schema = SheetV3Schema.extend({
  styles: z.record(z.string(), StyleV2Schema).optional(),
});

export type SheetV4 = z.infer<typeof SheetV4Schema>;
