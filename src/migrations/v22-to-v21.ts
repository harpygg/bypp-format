import type { BeyondPaperV21 } from "../schemas/bypp.v21.schema";
import type { BeyondPaperV22 } from "../schemas/bypp.v22.schema";
import type { Migrator } from "./types";

type WidgetV22 = BeyondPaperV22["widgets"][number];
type WidgetV21 = BeyondPaperV21["widgets"][number];

/**
 * v22 → v21 (downgrade): mirror of `v21-to-v22`. **Lossy.**
 *
 * v21 styles know nothing of weight or slant, so both are dropped. A v21
 * reader would ignore the keys anyway; removing them keeps the document
 * conforming instead of carrying fields its own version cannot describe.
 *
 * The emphasis is not folded into the text: a widget renders a value, and
 * wrapping it in markup would change what the value is.
 */
const dropEmphasis = (widget: WidgetV22): WidgetV21 => {
  if (!widget.style) {
    return widget;
  }

  const { fontWeight, fontStyle, ...style } = widget.style;

  return { ...widget, style };
};

export const v22ToV21: Migrator<BeyondPaperV22, BeyondPaperV21> = (v22) => ({
  ...v22,
  version: 21,
  widgets: v22.widgets.map(dropEmphasis),
});
