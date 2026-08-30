import { describe, expect, it } from "vitest";
import { BYPP_ICON_NAMES, ICON_SLUG_PATTERN, isByppIconName } from "./icons";

describe("the icon registry", () => {
  it("holds no duplicate slug", () => {
    expect(new Set(BYPP_ICON_NAMES).size).toBe(BYPP_ICON_NAMES.length);
  });

  it("recognises every slug it ships", () => {
    expect(BYPP_ICON_NAMES.every(isByppIconName)).toBe(true);
  });

  // A published vocabulary is only useful if a slug can be typed twice the
  // same way. This is the guard that stops a stray space, a capital or a
  // double separator from reaching the registry again.
  it("ships only well-formed slugs", () => {
    expect(
      BYPP_ICON_NAMES.filter((name) => !ICON_SLUG_PATTERN.test(name)),
    ).toEqual([]);
  });

  // The registry is explicitly non-exclusive: a slug it doesn't know is a slug
  // it doesn't draw, never a slug a producer may not send.
  it("does not recognise a slug it doesn't ship", () => {
    expect(isByppIconName("my_own_glyph")).toBe(false);
  });
});
