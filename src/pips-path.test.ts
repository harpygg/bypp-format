import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { WidgetV14Schema } from "./models/widget.v14.schema";
import { WidgetV15Schema } from "./models/widget.v15.schema";
import { BeyondPaperV31Schema } from "./schemas/bypp.v31.schema";
import { BeyondPaperV32Schema } from "./schemas/bypp.v32.schema";

/**
 * Pips along a curve (v32): Bobby's death saves, five pips round a circle,
 * and what a reader that only knows rows makes of them.
 */

const base = (version: number) => ({
  version,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-11-06T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
});

const row = {
  uid: "death-saves",
  type: "pips",
  name: "Death saves",
  area: { width: 20, height: 10 },
  position: { left: 10, top: 10 },
  icon: "circle",
  gapX: 0.2,
};

const circle = {
  ...row,
  layout: "path",
  curve: 0.4,
  startAngle: -90,
  closed: true,
};

describe("curved pips (v32)", () => {
  it("keeps a pips widget's layout, curve, direction and closing", () => {
    const widget = WidgetV15Schema.parse(circle);
    expect(widget).toMatchObject({
      layout: "path",
      curve: 0.4,
      startAngle: -90,
      closed: true,
    });
  });

  it("refuses a layout it does not know", () => {
    expect(WidgetV15Schema.safeParse({ ...circle, layout: "spiral" }).success)
      .toBe(false);
  });

  it("strips them in v31, which only knows rows", () => {
    const widget = WidgetV14Schema.parse(circle);
    expect(widget).not.toHaveProperty("layout");
    expect(widget).not.toHaveProperty("curve");
  });

  it("brings a v31 row up unchanged", () => {
    const out = migrate({ ...base(31), widgets: [row] }, 32);
    expect(BeyondPaperV32Schema.parse(out).widgets).toEqual([row]);
  });

  it("drops the curve going down to v31, keeping the row's gap", () => {
    const out = migrate({ ...base(32), widgets: [circle] }, 31);
    const [widget] = BeyondPaperV31Schema.parse(out).widgets;
    expect(widget).toEqual(row);
  });
});
