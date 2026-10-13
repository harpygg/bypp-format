import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { BeyondPaperV29Schema } from "./schemas/bypp.v29.schema";
import { BeyondPaperV30Schema } from "./schemas/bypp.v30.schema";

/**
 * Shelves on the entity types, and what becomes of them in a reader that only
 * knows the nine types: each one folds into its base.
 */

const weapons = {
  uid: "weapons",
  name: { en: "Weapons", fr: "Armes" },
  baseType: "item",
  icon: "sword",
};

const base = (version: number) => ({
  version,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
});

const longsword = {
  uid: "longsword",
  type: "item",
  name: "Longsword",
  subtypeUid: "weapons",
};

const weaponSheet = {
  uid: "weapon-sheet",
  name: "Weapon",
  targets: [],
  targetsSubtypes: ["weapons"],
};

const inHand = {
  uid: "in-hand",
  type: "entityRef",
  name: "In hand",
  datasetsUids: [],
  targetsTypes: ["weapons", "character"],
};

const v30 = {
  ...base(30),
  entitySubtypes: [weapons],
  entities: [longsword],
  datasets: [weaponSheet],
  variables: [inHand],
};

describe("entity sub-types (v30)", () => {
  it("keeps a sub-type, the entity on it and the sheet on it", () => {
    const parsed = BeyondPaperV30Schema.parse(v30);
    expect(parsed.entitySubtypes).toEqual([weapons]);
    expect(parsed.entities[0]?.subtypeUid).toBe("weapons");
    expect(parsed.datasets[0]?.targetsSubtypes).toEqual(["weapons"]);
  });

  it("reads a document without sub-types as having none", () => {
    const parsed = BeyondPaperV30Schema.parse(base(30));
    expect(parsed.entitySubtypes).toEqual([]);
  });

  it("v29 → v30 adds no sub-type and no sheet on one", () => {
    const up = BeyondPaperV30Schema.parse(
      migrate(
        {
          ...base(29),
          datasets: [{ uid: "s", name: "Sheet", targets: ["item"] }],
        },
        30,
      ),
    );
    expect(up.entitySubtypes).toEqual([]);
    expect(up.datasets[0]?.targetsSubtypes).toEqual([]);
  });

  describe("v30 → v29 folds each sub-type into its base", () => {
    const down = BeyondPaperV29Schema.parse(migrate(v30, 29));

    it("the longsword stays an item, off Weapons", () => {
      expect(down.entities[0]).not.toHaveProperty("subtypeUid");
      expect(down.entities[0]?.type).toBe("item");
    });

    it("the Weapon sheet becomes a sheet on every item", () => {
      expect(down.datasets[0]?.targets).toEqual(["item"]);
      expect(down.datasets[0]).not.toHaveProperty("targetsSubtypes");
    });

    it("an entityRef on Weapons offers every item", () => {
      const variable = down.variables[0];
      expect(variable?.type === "entityRef" && variable.targetsTypes).toEqual([
        "item",
        "character",
      ]);
    });
  });
});
