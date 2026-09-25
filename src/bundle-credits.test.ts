import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { BeyondPaperV28Schema } from "./schemas/bypp.v28.schema";
import { BeyondPaperV29Schema } from "./schemas/bypp.v29.schema";

/**
 * Everyone who worked on a bundle besides its author, and what becomes of them
 * in a reader that only knows the author.
 */

const document = (credits: unknown, version = 29) => ({
  version,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  ...(credits === undefined ? {} : { credits }),
});

const illustrator = {
  name: "Corinne Caro",
  role: "cover illustration",
  url: "https://www.corinnecaro.com/",
  license: "CC-BY-NC",
};
const proofreader = { name: "Chloé", role: "proofreading" };

describe("bundle credits (v29)", () => {
  it("keeps the credits in the order they are listed", () => {
    const parsed = BeyondPaperV29Schema.parse(
      document([illustrator, proofreader]),
    );
    expect(parsed.credits).toEqual([illustrator, proofreader]);
  });

  it("reads a document without credits as crediting nobody", () => {
    expect(BeyondPaperV29Schema.parse(document(undefined)).credits).toEqual([]);
  });

  it("takes a credit with nothing but a name", () => {
    expect(
      BeyondPaperV29Schema.safeParse(document([{ name: "Chloé" }])).success,
    ).toBe(true);
  });

  it("refuses a credit without a name, or with an empty role", () => {
    expect(
      BeyondPaperV29Schema.safeParse(document([{ role: "maps" }])).success,
    ).toBe(false);
    expect(
      BeyondPaperV29Schema.safeParse(document([{ name: "Bob", role: "" }]))
        .success,
    ).toBe(false);
  });

  it("drops the credits on the way down to v28, and keeps the author", () => {
    const down = migrate(document([illustrator]), 28);
    expect(down).not.toHaveProperty("credits");
    expect(BeyondPaperV28Schema.parse(down).attribution).toEqual({
      authorName: "Alice",
    });
  });

  it("gives a v28 document an empty credit list on the way up", () => {
    const up = migrate(document(undefined, 28), 29);
    expect(BeyondPaperV29Schema.parse(up).credits).toEqual([]);
  });
});
