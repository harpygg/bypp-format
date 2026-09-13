import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { StyleV4Schema } from "./mixins/with-style.v4.schema";
import { WidgetV11Schema } from "./models/widget.v11.schema";
import { BeyondPaperV22Schema } from "./schemas/bypp.v22.schema";

/**
 * Emphasis on a style, and what becomes of it in a reader that predates it.
 */

const document = (widgets: unknown[]) => ({
  version: 22,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  widgets,
});

const emphasised = {
  uid: "widget-1",
  name: "widget-1",
  type: "plainText",
  style: { fontWeight: "bold", fontStyle: "italic", fontScale: 1.5 },
};

describe("an emphasised style", () => {
  it("carries a weight and a slant", () => {
    const parsed = StyleV4Schema.safeParse({
      fontWeight: "bold",
      fontStyle: "italic",
    });
    expect(parsed.success).toBe(true);
  });

  it("takes `inherit`, so an unemphasised item defers to its surroundings", () => {
    expect(StyleV4Schema.safeParse({ fontWeight: "inherit" }).success).toBe(
      true,
    );
  });

  it("keeps everything v3 already said", () => {
    const parsed = StyleV4Schema.safeParse({
      rotation: 90,
      borderRadius: "4px",
      fontScale: 2,
    });
    expect(parsed.success).toBe(true);
  });

  it("rides on a widget, and in a v22 document", () => {
    expect(WidgetV11Schema.safeParse(emphasised).success).toBe(true);
    expect(BeyondPaperV22Schema.safeParse(document([emphasised])).success).toBe(
      true,
    );
  });

  it("is dropped for a v21 reader, the rest of the style intact", () => {
    const downgraded = migrate(document([emphasised]), 21);
    const [widget] = (downgraded as { widgets: { style: object }[] }).widgets;

    expect(widget.style).toEqual({ fontScale: 1.5 });
  });

  it("comes back as a plain version bump from v21", () => {
    const upgraded = migrate({ ...document([]), version: 21 }, 22);

    expect((upgraded as { version: number }).version).toBe(22);
  });
});
