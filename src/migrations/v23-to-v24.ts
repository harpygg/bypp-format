import type { SidesV6 } from "../mixins/with-style.v6.schema";
import type { BeyondPaperV23 } from "../schemas/bypp.v23.schema";
import type { BeyondPaperV24 } from "../schemas/bypp.v24.schema";
import type { Migrator } from "./types";

type WidgetV23 = BeyondPaperV23["widgets"][number];
type WidgetV24 = BeyondPaperV24["widgets"][number];
type StyleV23 = NonNullable<WidgetV23["style"]>;
type StyleV24 = NonNullable<WidgetV24["style"]>;

/**
 * The narrowest shorthand that says what these four edges say, so a box that
 * is even on all sides comes out as the single number it is rather than four
 * copies of it.
 *
 * `undefined` when any edge is unsaid — see `foldSides` below for why that
 * matters.
 *
 * Deliberately local to this step rather than shared with `v24-to-v23.ts` or
 * with a later version pair: a shipped migration is frozen, and a helper two
 * steps reach into is a helper that can be changed under the older one. What
 * this migrator does to a document written years ago must not depend on what
 * some future version needed the same word to mean.
 */
function narrowSides(
  edges: readonly (number | undefined)[],
): SidesV6 | undefined {
  const [top, right, bottom, left] = edges;

  if (
    top === undefined ||
    right === undefined ||
    bottom === undefined ||
    left === undefined
  ) {
    return undefined;
  }

  if (top === right && right === bottom && bottom === left) {
    return top;
  }

  if (top === bottom && right === left) {
    return [top, right];
  }

  return [top, right, bottom, left];
}

/** The margin group, folded — or the style untouched when it is half-said. */
function foldMargin(style: StyleV23): StyleV24 {
  const sides = narrowSides([
    style.marginTop,
    style.marginRight,
    style.marginBottom,
    style.marginLeft,
  ]);

  if (sides === undefined) {
    return style;
  }

  const { marginTop, marginRight, marginBottom, marginLeft, ...rest } = style;

  return { ...rest, margin: sides };
}

/** The same for padding, on the style the margin fold handed back. */
function foldPadding(style: StyleV24): StyleV24 {
  const sides = narrowSides([
    style.paddingTop,
    style.paddingRight,
    style.paddingBottom,
    style.paddingLeft,
  ]);

  if (sides === undefined) {
    return style;
  }

  const { paddingTop, paddingRight, paddingBottom, paddingLeft, ...rest } =
    style;

  return { ...rest, padding: sides };
}

/**
 * v23 → v24 (upgrade): the four per-side values of a spacing become the one
 * field v24 writes them in. **Non-lossy.**
 *
 * `{ marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 4 }` and
 * `{ margin: [0, 0, 0, 4] }` describe the same box, so the document is
 * rewritten in the vocabulary a v24 reader reaches for first, and the four
 * are dropped — leaving both in would let a later edit change one and not the
 * other, and the format would have two answers for the same question.
 *
 * A group only SOME of whose sides are set is left exactly as it is. An unsaid
 * side is not a zero: the style cascade (global → widget type → widget) lets a
 * layer speak about one edge and stay silent about the rest, and folding
 * `{ marginTop: 4 }` into `[4, 0, 0, 0]` would have this layer flatten
 * whatever the layers above it said about the other three.
 *
 * `borderWidth` needs no work at all: a plain number is already valid v24 and
 * still means the same width on all four sides.
 */
function foldSides(widget: WidgetV23): WidgetV24 {
  if (!widget.style) {
    return widget;
  }

  return { ...widget, style: foldPadding(foldMargin(widget.style)) };
}

export const v23ToV24: Migrator<BeyondPaperV23, BeyondPaperV24> = (v23) => ({
  ...v23,
  version: 24,
  widgets: v23.widgets.map(foldSides),
});
