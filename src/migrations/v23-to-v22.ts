import type { BeyondPaperV22 } from "../schemas/bypp.v22.schema";
import type { BeyondPaperV23 } from "../schemas/bypp.v23.schema";
import type { Migrator } from "./types";

type WidgetV23 = BeyondPaperV23["widgets"][number];
type WidgetV22 = BeyondPaperV22["widgets"][number];

/**
 * v23 → v22 (downgrade): mirror of `v22-to-v23`. **Lossy.**
 *
 * v22 styles know nothing of margins, of a background colour, of a text
 * decoration or of a tiled background, so all of those are dropped. A v22
 * reader would ignore the keys anyway; removing them keeps the document
 * conforming instead of carrying fields its own version cannot describe.
 */
const dropFlowStyle = (widget: WidgetV23): WidgetV22 => {
  if (!widget.style) {
    return widget;
  }

  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    backgroundColor,
    textDecoration,
    backgroundRepeat,
    ...style
  } = widget.style;

  return { ...widget, style };
};

export const v23ToV22: Migrator<BeyondPaperV23, BeyondPaperV22> = (v23) => ({
  ...v23,
  version: 22,
  widgets: v23.widgets.map(dropFlowStyle),
});
