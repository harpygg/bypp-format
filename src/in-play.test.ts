import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { BeyondPaperV30Schema } from "./schemas/bypp.v30.schema";
import { BeyondPaperV31Schema } from "./schemas/bypp.v31.schema";

/**
 * What an entity is in play (v31): the Bracer of Kord's modes, Rana's
 * backpack and gold, Caramel's saddlebags, and what a v30 reader keeps of it.
 */

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

const worn = {
  uid: "worn",
  label: { en: "Worn", fr: "Porté" },
  arrival: "off",
  updates: [{ variableUid: "ac", formula: "<p>$&lt;AC + 2</p>" }],
};

const bracer = {
  uid: "bracer",
  type: "item",
  name: "Bracer of Kord",
  synonyms: ["Kord's bracer"],
  modes: [worn],
  actions: [{ uid: "a1", label: { en: "Strike" }, log: "<p>Bam</p>" }],
};

const backpack = {
  uid: "backpack",
  type: "item",
  name: "Backpack",
  item: { kind: "container", slots: 20 },
  data: { "system-weight": 5 },
};

const gold = { uid: "gold", type: "item", name: "Gold piece", item: { kind: "countable" } };

const rana = {
  uid: "rana",
  type: "character",
  name: "Rana",
  stackOrder: [{ spawnUid: "rana-bracer", modeUid: "worn" }],
  data: { "system-inventory": ["rana-bracer", "rana-gold", "caramel"] },
  shortcutRows: [
    {
      slots: [
        { kind: "action", actionKey: "a1", from: { kind: "held", spawnUid: "rana-bracer" } },
        { kind: "item", spawnUid: "rana-gold" },
        null,
      ],
    },
  ],
};

const donkey = { uid: "donkey", type: "creature", name: "Donkey" };

const spawns = [
  {
    uid: "rana-bracer",
    entityUid: "bracer",
    owner: { kind: "entity", uid: "rana" },
    activeModes: ["worn"],
  },
  {
    uid: "rana-gold",
    entityUid: "gold",
    owner: { kind: "entity", uid: "rana" },
    data: { "system-quantity": 37 },
  },
  { uid: "caramel", entityUid: "donkey", owner: { kind: "entity", uid: "rana" } },
  { uid: "saddlebags", entityUid: "backpack", owner: { kind: "spawn", uid: "caramel" } },
  { uid: "stray", entityUid: "backpack", owner: { kind: "spawn", uid: "nowhere" } },
  { uid: "loop-a", entityUid: "backpack", owner: { kind: "spawn", uid: "loop-b" } },
  { uid: "loop-b", entityUid: "backpack", owner: { kind: "spawn", uid: "loop-a" } },
];

const v31 = {
  ...base(31),
  entities: [bracer, backpack, gold, rana, donkey],
  entitySpawns: spawns,
  variables: [
    { uid: "hp", type: "number", name: "HP", datasetsUids: [], maxVariable: "hp-max" },
  ],
  datasets: [{ uid: "secrets", name: "Secrets", icon: "eye", adminOnly: true }],
  sheets: [{ uid: "bard", name: "Bard", widgetUids: [], height: 300 }],
};

describe("in play (v31)", () => {
  const parsed = BeyondPaperV31Schema.parse(v31);

  it("keeps the bracer's modes, synonyms and an action without a type", () => {
    expect(parsed.entities[0]?.modes).toEqual([worn]);
    expect(parsed.entities[0]?.synonyms).toEqual(["Kord's bracer"]);
    expect(parsed.entities[0]?.actions[0]).not.toHaveProperty("type");
  });

  it("keeps what an item is", () => {
    expect(parsed.entities[1]?.item).toEqual({ kind: "container", slots: 20 });
    expect(parsed.entities[2]?.item).toEqual({ kind: "countable" });
  });

  it("keeps a spawn borne by a spawn, the modes checked and the stack", () => {
    expect(parsed.entitySpawns[3]?.owner).toEqual({ kind: "spawn", uid: "caramel" });
    expect(parsed.entitySpawns[0]?.activeModes).toEqual(["worn"]);
    expect(parsed.entities[3]?.stackOrder).toEqual([
      { spawnUid: "rana-bracer", modeUid: "worn" },
    ]);
  });

  it("keeps the reserved values in data", () => {
    expect(parsed.entitySpawns[1]?.data).toEqual({ "system-quantity": 37 });
    expect(parsed.entities[1]?.data).toEqual({ "system-weight": 5 });
  });

  it("keeps a number's max, a sheet's height, a dataset's icon and adminOnly", () => {
    const hp = parsed.variables[0];
    expect(hp?.type === "number" && hp.maxVariable).toBe("hp-max");
    expect(parsed.sheets[0]?.height).toBe(300);
    expect(parsed.datasets[0]?.icon).toBe("eye");
    expect(parsed.datasets[0]?.adminOnly).toBe(true);
  });

  it("refuses a container without slots", () => {
    const result = BeyondPaperV31Schema.safeParse({
      ...base(31),
      entities: [{ ...backpack, item: { kind: "container" } }],
    });
    expect(result.success).toBe(false);
  });

  it("keeps Rana's shortcuts: her bracer's Strike, her gold, an empty square", () => {
    expect(parsed.entities[3]?.shortcutRows).toEqual(rana.shortcutRows);
  });

  it("refuses a square that is neither an action nor an item", () => {
    const result = BeyondPaperV31Schema.safeParse({
      ...base(31),
      entities: [{ ...rana, shortcutRows: [{ slots: [{ kind: "roll", formula: "1d20" }] }] }],
    });
    expect(result.success).toBe(false);
  });

  it("reads an entity without modes as having none", () => {
    const empty = BeyondPaperV31Schema.parse({ ...base(31), entities: [donkey] });
    expect(empty.entities[0]?.modes).toEqual([]);
  });
});

describe("v30 → v31", () => {
  const up = BeyondPaperV31Schema.parse(
    migrate(
      {
        ...base(30),
        entitySpawns: [
          { uid: "arrows", entityUid: "arrow", ownerUid: "rana" },
          { uid: "goblin", entityUid: "goblin" },
        ],
        widgets: [
          {
            uid: "grid",
            type: "entityGrid",
            name: "Inventory",
            gapX: 1,
            imageWidth: 4,
            imageHeight: 3,
            formatSlug: "square",
            objectFit: "cover",
            listOptionStyle: "image",
          },
        ],
      },
      31,
    ),
  );

  it("an entity's spawn is borne by that entity", () => {
    expect(up.entitySpawns[0]?.owner).toEqual({ kind: "entity", uid: "rana" });
    expect(up.entitySpawns[0]).not.toHaveProperty("ownerUid");
  });

  it("a spawn nobody bore stays nobody's", () => {
    expect(up.entitySpawns[1]).not.toHaveProperty("owner");
  });

  it("an entityGrid keeps only its squares", () => {
    expect(up.widgets[0]).toEqual({
      uid: "grid",
      type: "entityGrid",
      name: "Inventory",
      gapX: 1,
      imageWidth: 4,
    });
  });
});

describe("v31 → v30", () => {
  const down = BeyondPaperV30Schema.parse(migrate(v31, 30));
  const ownerUidOf = (uid: string) =>
    down.entitySpawns.find((spawn) => spawn.uid === uid)?.ownerUid;

  it("the bracer loses its modes and synonyms, its action gets a type", () => {
    expect(down.entities[0]).not.toHaveProperty("modes");
    expect(down.entities[0]).not.toHaveProperty("synonyms");
    expect(down.entities[0]?.actions[0]?.type).toBe("roll");
  });

  it("the backpack is a plain item again, Rana's stack order is gone", () => {
    expect(down.entities[1]).not.toHaveProperty("item");
    expect(down.entities[3]).not.toHaveProperty("stackOrder");
  });

  it("Rana's shortcut rows are gone", () => {
    expect(down.entities[3]).not.toHaveProperty("shortcutRows");
  });

  it("Rana's bracer stays hers, without its checked modes", () => {
    expect(ownerUidOf("rana-bracer")).toBe("rana");
    expect(down.entitySpawns[0]).not.toHaveProperty("activeModes");
  });

  it("Caramel's saddlebags become Rana's", () => {
    expect(ownerUidOf("saddlebags")).toBe("rana");
  });

  it("a spawn with no entity up its chain is nobody's", () => {
    expect(ownerUidOf("stray")).toBeUndefined();
    expect(ownerUidOf("loop-a")).toBeUndefined();
    expect(ownerUidOf("loop-b")).toBeUndefined();
  });

  it("the reserved values stay in data", () => {
    expect(down.entitySpawns[1]?.data).toEqual({ "system-quantity": 37 });
  });

  it("drops a number's max, a sheet's height, a dataset's icon and adminOnly", () => {
    expect(down.variables[0]).not.toHaveProperty("maxVariable");
    expect(down.sheets[0]).not.toHaveProperty("height");
    expect(down.datasets[0]).not.toHaveProperty("icon");
    expect(down.datasets[0]).not.toHaveProperty("adminOnly");
  });
});
