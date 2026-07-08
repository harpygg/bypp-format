import type { BeyondPaperV7 } from "../schemas/bypp.v7.schema";
import type { BeyondPaperV8 } from "../schemas/bypp.v8.schema";
import type { Migrator } from "./types";

/**
 * v8 → v7 (downgrade): mirror of `v7-to-v8`. **Lossy.**
 *
 * v7 widget style is the v1 subset (no `border*`, no `background`) and v7
 * sheets have no `styles` cascade. We strip those additions explicitly so
 * the v7 schema validation that runs after this migrator passes on real
 * data, not on zod's incidental key-stripping.
 */
export const v8ToV7: Migrator<BeyondPaperV8, BeyondPaperV7> = (v8) => ({
  ...v8,
  version: 7,
  widgets: v8.widgets.map((widget) => {
    if (!widget.style) {
      return widget;
    }
    const {
      borderWidth: _bw,
      borderStyle: _bs,
      borderColor: _bc,
      borderRadius: _br,
      background: _bg,
      ...style
    } = widget.style;
    return { ...widget, style };
  }),
  sheets: v8.sheets.map(({ styles: _styles, ...sheet }) => sheet),
});
