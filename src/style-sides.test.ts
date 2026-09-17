import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { StyleV6Schema } from "./mixins/with-style.v6.schema";
import { WidgetV13Schema } from "./models/widget.v13.schema";
import { BeyondPaperV24Schema } from "./schemas/bypp.v24.schema";

/**
 * A spacing written the way CSS writes it, and what becomes of it in a reader
 * that only knows the four separate fields.
 */

const document = (widgets: unknown[], version = 24) => ({
  version,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  widgets,
});

const widget = (style: object) => ({
  uid: "widget-1",
  name: "widget-1",
  type: "plainText",
  style,
});

const styleOf = (doc: unknown) => {
  const [only] = (doc as { widgets: { style: object }[] }).widgets;
  return only.style;
};

// Six of Harpy's eight block styles look like this: a bar down one edge.
const barDownTheLeft = {
  borderWidth: [0, 0, 0, 4],
  borderColor: "#336699",
  padding: [0, 0, 0, 1],
  fontScale: 1.5,
};

const thinBox = {
  borderWidth: 1,
  borderColor: "#336699",
  padding: [0.5, 1],
};

describe("a spacing in the CSS shorthand", () => {
  it("takes one value for every side, two, or four clockwise", () => {
    for (const margin of [4, [1, 2], [1, 2, 3, 4]]) {
      expect(StyleV6Schema.safeParse({ margin }).success).toBe(true);
    }
  });

  it("refuses a length the notation cannot read", () => {
    for (const margin of [[], [1], [1, 2, 3], [1, 2, 3, 4, 5]]) {
      expect(StyleV6Schema.safeParse({ margin }).success).toBe(false);
    }
  });

  it("widens the border width without giving up the plain number", () => {
    expect(StyleV6Schema.safeParse({ borderWidth: 1 }).success).toBe(true);
    expect(StyleV6Schema.safeParse(barDownTheLeft).success).toBe(true);
  });

  it("keeps the per-side fields older documents carry", () => {
    expect(
      StyleV6Schema.safeParse({ marginTop: 0.5, paddingLeft: 1 }).success,
    ).toBe(true);
  });

  it("keeps everything v5 already said", () => {
    const parsed = StyleV6Schema.safeParse({
      backgroundColor: "#336699",
      textDecoration: "none",
      backgroundRepeat: true,
      fontWeight: "bold",
      rotation: 90,
    });

    expect(parsed.success).toBe(true);
  });

  it("rides on a widget, and in a v24 document", () => {
    expect(WidgetV13Schema.safeParse(widget(barDownTheLeft)).success).toBe(true);
    expect(
      BeyondPaperV24Schema.safeParse(document([widget(barDownTheLeft)])).success,
    ).toBe(true);
  });
});

describe("the climb from a v23 document", () => {
  it("folds four per-side values into the shorthand, narrowed", () => {
    const upgraded = migrate(
      document(
        [
          widget({
            marginTop: 1,
            marginRight: 1,
            marginBottom: 1,
            marginLeft: 1,
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 4,
          }),
        ],
        23,
      ),
      24,
    );

    expect(styleOf(upgraded)).toEqual({ margin: 1, padding: [0, 0, 0, 4] });
  });

  it("narrows a matching pair to two values", () => {
    const upgraded = migrate(
      document(
        [
          widget({
            marginTop: 0.5,
            marginRight: 1,
            marginBottom: 0.5,
            marginLeft: 1,
          }),
        ],
        23,
      ),
      24,
    );

    expect(styleOf(upgraded)).toEqual({ margin: [0.5, 1] });
  });

  it("leaves a half-said group alone: an unsaid side is not a zero", () => {
    const upgraded = migrate(
      document([widget({ marginTop: 1, fontScale: 2 })], 23),
      24,
    );

    expect(styleOf(upgraded)).toEqual({ marginTop: 1, fontScale: 2 });
  });

  it("leaves a legacy border width as it stands: it is already valid", () => {
    const upgraded = migrate(
      document([widget({ borderWidth: 2 })], 23),
      24,
    );

    expect(styleOf(upgraded)).toEqual({ borderWidth: 2 });
  });
});

describe("the descent to a v23 reader", () => {
  it("expands the shorthand back into the four fields v23 has", () => {
    const downgraded = migrate(document([widget(barDownTheLeft)]), 23);

    expect(styleOf(downgraded)).toEqual({
      borderColor: "#336699",
      fontScale: 1.5,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 1,
    });
  });

  it("collapses a border whose edges agree into the single width", () => {
    const downgraded = migrate(
      document([widget({ borderWidth: [2, 2, 2, 2] })]),
      23,
    );

    expect(styleOf(downgraded)).toEqual({ borderWidth: 2 });
  });

  it("drops a bar rather than drawing it on all four edges", () => {
    const downgraded = migrate(
      document([widget({ borderWidth: [0, 0, 0, 4], borderColor: "#336699" })]),
      23,
    );

    expect(styleOf(downgraded)).toEqual({ borderColor: "#336699" });
  });

  it("lets the shorthand win over the per-side fields beside it", () => {
    const downgraded = migrate(
      document([widget({ margin: 1, marginLeft: 9 })]),
      23,
    );

    expect(styleOf(downgraded)).toEqual({
      marginTop: 1,
      marginRight: 1,
      marginBottom: 1,
      marginLeft: 1,
    });
  });
});

describe("the round trip", () => {
  it("brings a bar of padding back whole: v23 says it in four fields", () => {
    const back = migrate(migrate(document([widget(barDownTheLeft)]), 23), 24);

    // Everything survives but the border's edge — v23 has four padding fields
    // to expand into, and only one width for the whole box.
    expect(styleOf(back)).toEqual({
      borderColor: "#336699",
      fontScale: 1.5,
      padding: [0, 0, 0, 1],
    });
  });

  it("brings a box back whole, because four agreeing edges are one width", () => {
    const back = migrate(migrate(document([widget(thinBox)]), 23), 24);

    expect(styleOf(back)).toEqual(thinBox);
  });
});
