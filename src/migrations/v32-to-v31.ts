import type { BeyondPaperV31 } from "../schemas/bypp.v31.schema";
import type { BeyondPaperV32 } from "../schemas/bypp.v32.schema";
import type { Migrator } from "./types";

/**
 * v32 → v31 (downgrade): mirror of `v31-to-v32`. **Lossy.**
 *
 * v31 knows no curved pips: a `pips` widget loses `layout`, `curve`,
 * `startAngle` and `closed`, and is drawn as a wrapping row again, its pips
 * `gapX` apart as they were along the line.
 */
export const v32ToV31: Migrator<BeyondPaperV32, BeyondPaperV31> = (v32) => ({
  ...v32,
  version: 31,
  widgets: v32.widgets.map((widget) => {
    if (widget.type !== "pips") {
      return widget;
    }
    const {
      layout: _layout,
      curve: _curve,
      startAngle: _startAngle,
      closed: _closed,
      ...pips
    } = widget;
    return pips;
  }),
});
