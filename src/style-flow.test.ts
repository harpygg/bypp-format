import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { StyleV5Schema } from "./mixins/with-style.v5.schema";
import { WidgetV12Schema } from "./models/widget.v12.schema";
import { BeyondPaperV23Schema } from "./schemas/bypp.v23.schema";

/**
 * What a style says once it sits in a flow of text, and what becomes of it in
 * a reader that predates it.
 */

const document = (widgets: unknown[]) => ({
  version: 23,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  widgets,
});

const inFlow = {
  uid: "widget-1",
  name: "widget-1",
  type: "plainText",
  style: {
    marginTop: 0.5,
    marginBottom: 1,
    backgroundColor: "#336699",
    textDecoration: "none",
    fontScale: 1.5,
  },
};

describe("a style in a flow of text", () => {
  it("keeps the air around it, in em", () => {
    const parsed = StyleV5Schema.safeParse({
      marginTop: 0.5,
      marginRight: 0,
      marginBottom: 1,
      marginLeft: 0,
    });

    expect(parsed.success).toBe(true);
  });

  it("carries a colour behind it, next to the image v2 already had", () => {
    const parsed = StyleV5Schema.safeParse({
      backgroundColor: "#336699",
      background: { assetUid: "asset-1" },
    });

    expect(parsed.success).toBe(true);
  });

  it("says whether the image behind it tiles", () => {
    expect(
      StyleV5Schema.safeParse({
        background: { assetUid: "asset-1" },
        backgroundRepeat: true,
      }).success,
    ).toBe(true);
  });

  it("says how it is underlined, `none` included", () => {
    expect(StyleV5Schema.safeParse({ textDecoration: "none" }).success).toBe(
      true,
    );
    expect(
      StyleV5Schema.safeParse({ textDecoration: "underline dotted" }).success,
    ).toBe(true);
  });

  it("keeps everything v4 already said", () => {
    const parsed = StyleV5Schema.safeParse({
      fontWeight: "bold",
      fontStyle: "italic",
      rotation: 90,
      fontScale: 2,
    });

    expect(parsed.success).toBe(true);
  });

  it("rides on a widget, and in a v23 document", () => {
    expect(WidgetV12Schema.safeParse(inFlow).success).toBe(true);
    expect(BeyondPaperV23Schema.safeParse(document([inFlow])).success).toBe(
      true,
    );
  });

  it("is dropped for a v22 reader, the rest of the style intact", () => {
    const downgraded = migrate(document([inFlow]), 22);
    const [widget] = (downgraded as { widgets: { style: object }[] }).widgets;

    expect(widget.style).toEqual({ fontScale: 1.5 });
  });

  it("comes back as a plain version bump from v22", () => {
    const upgraded = migrate({ ...document([]), version: 22 }, 23);

    expect((upgraded as { version: number }).version).toBe(23);
  });
});
