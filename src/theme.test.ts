import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { ThemeV25Schema } from "./models/theme.v25.schema";
import { BeyondPaperV24Schema } from "./schemas/bypp.v24.schema";
import { BeyondPaperV25Schema } from "./schemas/bypp.v25.schema";

/**
 * How a document says what its own prose should look like, and what becomes of
 * that in a reader that only knows styled widgets.
 */

const document = (theme: unknown, version = 25) => ({
  version,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  tags: [
    { uid: "tag-seer", name: "Seer", categoryUid: "cat-1", useAsFolder: false },
    { uid: "tag-bard", name: "Bard", categoryUid: "cat-1", useAsFolder: false },
  ],
  tagCategories: [{ uid: "cat-1", name: "Callings" }],
  ...(theme === undefined ? {} : { theme }),
});

const themeOf = (doc: unknown) => (doc as { theme?: unknown }).theme;

// A quote is a bar down the left; a heading is a size and a family. Both are
// said in the same vocabulary a widget style already uses.
const painted = {
  slug: "standard",
  elements: {
    base: { fontFamilyId: "eb-garamond", lineHeight: 1.6 },
    h1: { fontScale: 2.4, fontWeight: "bold", color: "#221100" },
    blockquote: { borderWidth: [0, 0, 0, 4], padding: [0, 0, 0, 1] },
    "mention-place": { color: "#336699", textDecoration: "none" },
    "block-warning": { backgroundColor: "#fff3cd", padding: 0.5 },
  },
  tagStyles: [
    { tagUid: "tag-seer", style: { color: "#6b21a8" } },
    { tagUid: "tag-bard", style: { color: "#b45309" } },
  ],
};

describe("a theme on the document", () => {
  it("names a style per element of the content", () => {
    const result = BeyondPaperV25Schema.safeParse(document(painted));
    if (!result.success) console.error(result.error.format());
    expect(result.success).toBe(true);
  });

  it("is optional — a document with nothing to say about its prose omits it", () => {
    const parsed = BeyondPaperV25Schema.parse(document(undefined));
    expect(parsed.theme).toBeUndefined();
  });

  it("fills in the empty theme's two halves so a reader always sees them", () => {
    const parsed = ThemeV25Schema.parse({});
    expect(parsed.elements).toEqual({});
    expect(parsed.tagStyles).toEqual([]);
  });

  it("takes any element name, including one this version never listed", () => {
    // Same reasoning as an icon slug: a producer whose vocabulary is richer
    // than the reader's must still be able to say what it means.
    expect(
      ThemeV25Schema.safeParse({
        elements: { "block-ritual": { color: "#000000" } },
      }).success,
    ).toBe(true);
  });

  it("refuses an element mapped to nothing", () => {
    // A key that says nothing is a key that should not be there — the absent
    // key already says it.
    for (const style of [null, undefined, "big", 3]) {
      expect(
        ThemeV25Schema.safeParse({ elements: { h1: style } }).success,
      ).toBe(false);
    }
  });

  it("refuses a style property the style vocabulary does not have", () => {
    expect(
      ThemeV25Schema.safeParse({ elements: { h1: { fontScale: "big" } } })
        .success,
    ).toBe(false);
  });

  it("keeps the tag styles in the order they were given", () => {
    const parsed = ThemeV25Schema.parse(painted);
    expect(parsed.tagStyles.map((t) => t.tagUid)).toEqual([
      "tag-seer",
      "tag-bard",
    ]);
  });

  it("refuses a tag style with no tag to paint", () => {
    expect(
      ThemeV25Schema.safeParse({ tagStyles: [{ style: { color: "#000000" } }] })
        .success,
    ).toBe(false);
  });
});

describe("a theme across the v24 boundary", () => {
  it("leaves a v24 document silent about its prose rather than empty", () => {
    // Absent is not the same as an empty theme: one never spoke, the other
    // decided its content wears no style of its own.
    const up = migrate(document(undefined, 24), 25);
    expect(themeOf(up)).toBeUndefined();
    expect(BeyondPaperV25Schema.safeParse(up).success).toBe(true);
  });

  it("drops the theme whole on the way down to v24", () => {
    const down = migrate(document(painted), 24);
    expect(themeOf(down)).toBeUndefined();
    expect(BeyondPaperV24Schema.safeParse(down).success).toBe(true);
  });

  it("keeps the tags a dropped theme painted", () => {
    // Nothing referenced them BY the theme except the theme: they are content
    // in their own right and stay.
    const down = migrate(document(painted), 24) as { tags: { uid: string }[] };
    expect(down.tags.map((t) => t.uid)).toEqual(["tag-seer", "tag-bard"]);
  });

  it("loses the theme for good on a v25 → v24 → v25 round trip", () => {
    const back = migrate(migrate(document(painted), 24), 25);
    expect(themeOf(back)).toBeUndefined();
  });

  it("walks a themed document all the way down to v1 and still validates", () => {
    expect(() => migrate(document(painted), 1)).not.toThrow();
  });
});
