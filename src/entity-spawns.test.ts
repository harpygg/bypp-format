import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { BeyondPaperV27Schema } from "./schemas/bypp.v27.schema";
import { BeyondPaperV28Schema } from "./schemas/bypp.v28.schema";

/**
 * Three light crossbows in Frodo's pack, one entity and three spawns of it;
 * one of them equipped, and a lookup reading the equipped one's damage.
 */

const base = {
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
};

const v28 = {
  ...base,
  version: 28,
  variables: [
    { uid: "var-damage", type: "text", name: "damage", datasetsUids: [] },
    {
      uid: "var-pack",
      type: "entitySpawnRef",
      name: "pack",
      datasetsUids: [],
      targetsTypes: ["item"],
    },
    {
      uid: "var-equipped",
      type: "entitySpawnRef",
      name: "equipped",
      datasetsUids: [],
      sourceVariableUid: "var-pack",
      max: 1,
    },
    {
      uid: "var-equipped-damage",
      type: "entityLookup",
      name: "equippedDamage",
      datasetsUids: [],
      sourceVariableUid: "var-equipped",
      keyVariableUid: "var-damage",
    },
    {
      uid: "var-friends",
      type: "entityRef",
      name: "friends",
      datasetsUids: [],
    },
  ],
  widgets: [
    { uid: "w-pack", type: "bulletList", name: "Pack", variableUid: "var-pack" },
    {
      uid: "w-damage",
      type: "plainText",
      name: "Damage",
      variableUid: "var-damage",
    },
  ],
  entities: [
    {
      uid: "crossbow",
      type: "item",
      name: "Light crossbow",
      data: { "var-damage": "1d8" },
    },
    {
      uid: "frodo",
      type: "character",
      name: "Frodo",
      data: {
        "var-pack": ["s-1", "s-2", "s-3"],
        "var-equipped": ["s-2"],
        "var-friends": ["sam"],
      },
    },
    { uid: "sam", type: "character", name: "Sam" },
  ],
  entitySpawns: [
    { uid: "s-1", entityUid: "crossbow", ownerUid: "frodo" },
    {
      uid: "s-2",
      entityUid: "crossbow",
      ownerUid: "frodo",
      label: "Sting's cousin",
      data: { "var-damage": "1d8+1" },
    },
    { uid: "s-3", entityUid: "crossbow", ownerUid: "frodo" },
  ],
};

describe("entity spawns (v28)", () => {
  it("a spawn needs only its uid and its model", () => {
    const parsed = BeyondPaperV28Schema.parse({
      ...base,
      version: 28,
      entitySpawns: [{ uid: "s-1", entityUid: "crossbow" }],
    });
    expect(parsed.entitySpawns).toEqual([{ uid: "s-1", entityUid: "crossbow" }]);
  });

  it("a v28 document without spawns reads an empty list", () => {
    expect(
      BeyondPaperV28Schema.parse({ ...base, version: 28 }).entitySpawns,
    ).toEqual([]);
  });

  it("parses spawns, their holders' spawn refs and a lookup through one", () => {
    expect(BeyondPaperV28Schema.safeParse(v28).success).toBe(true);
  });

  it("v27 → v28 carries everything and holds no spawn", () => {
    const v27 = BeyondPaperV27Schema.parse({ ...base, version: 27 });
    const up = migrate(v27, 28) as { version: number; entitySpawns: unknown[] };
    expect(up.version).toBe(28);
    expect(up.entitySpawns).toEqual([]);
  });

  describe("v28 → v27", () => {
    const down = BeyondPaperV27Schema.parse(migrate(structuredClone(v28), 27));

    it("drops the spawns", () => {
      expect("entitySpawns" in down).toBe(false);
    });

    it("drops the spawn refs and the lookups reading through them", () => {
      expect(down.variables.map((v) => v.uid)).toEqual([
        "var-damage",
        "var-friends",
      ]);
    });

    it("drops the values held under a dropped variable, keeps the others", () => {
      expect(down.entities.find((e) => e.uid === "frodo")?.data).toEqual({
        "var-friends": ["sam"],
      });
      expect(down.entities.find((e) => e.uid === "crossbow")?.data).toEqual({
        "var-damage": "1d8",
      });
    });

    it("unbinds a widget bound to a dropped variable", () => {
      expect(down.widgets.map((w) => [w.uid, w.variableUid])).toEqual([
        ["w-pack", undefined],
        ["w-damage", "var-damage"],
      ]);
    });
  });
});
