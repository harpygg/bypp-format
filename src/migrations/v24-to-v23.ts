import type { SidesV6 } from "../mixins/with-style.v6.schema";
import type { BeyondPaperV23 } from "../schemas/bypp.v23.schema";
import type { BeyondPaperV24 } from "../schemas/bypp.v24.schema";
import type { Migrator } from "./types";

type WidgetV24 = BeyondPaperV24["widgets"][number];
type WidgetV23 = BeyondPaperV23["widgets"][number];
type StyleV24 = NonNullable<WidgetV24["style"]>;
type StyleV23 = NonNullable<WidgetV23["style"]>;

/** The four edges of a box, in the order the CSS shorthand reads them. */
type Edges = [number, number, number, number];

/**
 * A spacing written in the shorthand, read edge by edge: one value for every
 * side, two for vertical then horizontal, four clockwise from the top.
 *
 * `undefined` for anything else — a length the schema does not admit can only
 * come from a tampered document, and a migrator that guessed at it would write
 * a spacing the author never asked for.
 *
 * Deliberately local to this step rather than shared with `v23-to-v24.ts` or
 * with a later version pair: a shipped migration is frozen, and a helper two
 * steps reach into is a helper that can be changed under the older one.
 */
function resolveSides(sides: SidesV6 | undefined): Edges | undefined {
  if (sides === undefined) {
    return undefined;
  }

  if (typeof sides === "number") {
    return [sides, sides, sides, sides];
  }

  const [first, second, third, fourth] = sides;

  if (sides.length === 2 && first !== undefined && second !== undefined) {
    return [first, second, first, second];
  }

  if (
    sides.length === 4 &&
    first !== undefined &&
    second !== undefined &&
    third !== undefined &&
    fourth !== undefined
  ) {
    return [first, second, third, fourth];
  }

  return undefined;
}

/**
 * A single width, when the four edges agree — `undefined` otherwise.
 *
 * v23 has one `borderWidth` for the whole box, and no per-side field to fall
 * back on. Four agreeing edges ARE that single width, so those survive whole.
 * When they disagree — a 4px bar down the left and three bare edges — the
 * border is DROPPED rather than folded into one of the values, because
 * folding would draw the line on all four edges and turn a bar into a box.
 * A border in the wrong place misreads the block more badly than a border
 * that is simply absent, and absent is what that widget looked like in every
 * document written before v24.
 */
function collapseBorderWidth(
  borderWidth: SidesV6 | undefined,
): number | undefined {
  if (borderWidth === undefined || typeof borderWidth === "number") {
    return borderWidth;
  }

  const edges = resolveSides(borderWidth);

  if (!edges) {
    return undefined;
  }

  const [top, right, bottom, left] = edges;

  return top === right && right === bottom && bottom === left ? top : undefined;
}

/**
 * v24 → v23 (downgrade): mirror of `v23-to-v24`. **Faithful for spacing,
 * lossy for a border that differs per side.**
 *
 * `margin` and `padding` are expanded back into the four per-side fields v23
 * already had, so nothing about the spacing is lost — not even a bar down one
 * edge, which v23 can say in four fields even though it cannot say it in one.
 * The expansion overwrites whatever per-side fields the document also carried,
 * which is the rule v6 states: the shorthand wins when it is there.
 *
 * The border is the one real loss, and only when its edges disagree — see
 * `collapseBorderWidth` above.
 */
function expandSides(widget: WidgetV24): WidgetV23 {
  const styleV24 = widget.style;

  // Carried through rather than returned as-is: a v24 style is not a v23 one
  // (`borderWidth` alone is wider), so the absent case has to hand back the
  // `null`/`undefined` it found — and keep the difference between them, which
  // is the difference between a key in the JSON and no key at all.
  if (!styleV24) {
    return { ...widget, style: styleV24 };
  }

  const { margin, padding, borderWidth, ...rest }: StyleV24 = styleV24;

  const marginEdges = resolveSides(margin);
  const paddingEdges = resolveSides(padding);
  const width = collapseBorderWidth(borderWidth);

  const style: StyleV23 = {
    ...rest,
    ...(marginEdges && {
      marginTop: marginEdges[0],
      marginRight: marginEdges[1],
      marginBottom: marginEdges[2],
      marginLeft: marginEdges[3],
    }),
    ...(paddingEdges && {
      paddingTop: paddingEdges[0],
      paddingRight: paddingEdges[1],
      paddingBottom: paddingEdges[2],
      paddingLeft: paddingEdges[3],
    }),
    ...(width !== undefined && { borderWidth: width }),
  };

  return { ...widget, style };
}

export const v24ToV23: Migrator<BeyondPaperV24, BeyondPaperV23> = (v24) => ({
  ...v24,
  version: 23,
  widgets: v24.widgets.map(expandSides),
});
