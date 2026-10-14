import type { BeyondPaperV30 } from "../schemas/bypp.v30.schema";
import type { BeyondPaperV31 } from "../schemas/bypp.v31.schema";
import type { Migrator } from "./types";

type SpawnOwnerV31 = NonNullable<BeyondPaperV31["entitySpawns"][number]["owner"]>;

/**
 * v31 → v30 (downgrade): mirror of `v30-to-v31`. **Lossy.**
 *
 * v30 knows no modes, item kinds, synonyms, number `maxVariable`, sheet
 * `height`, dataset `icon` or `adminOnly`: all are dropped. A sheet with a
 * `height` becomes a sheet drawn at its image's ratio, its widgets read in
 * percent of its height: they slide. An action gets its `type: "roll"` back.
 *
 * A v30 spawn is borne by an entity only. A spawn borne by a spawn takes the
 * entity that bears its bearer: the saddlebags on Caramel, a spawn Rana
 * bears, are Rana's. With no entity up the chain, the spawn is nobody's.
 *
 * The reserved `system-` keys in `data` stay: a v30 reader that does not know
 * them finds no variable for them and reads nothing.
 */
export const v31ToV30: Migrator<BeyondPaperV31, BeyondPaperV30> = (v31) => {
  const ownerOf = new Map(
    v31.entitySpawns.map((spawn) => [spawn.uid, spawn.owner]),
  );

  function entityBearing(owner: SpawnOwnerV31 | undefined) {
    const seen = new Set<string>();
    let current = owner;
    while (current?.kind === "spawn" && !seen.has(current.uid)) {
      seen.add(current.uid);
      current = ownerOf.get(current.uid);
    }
    return current?.kind === "entity" ? current.uid : undefined;
  }

  return {
    ...v31,
    version: 30,
    entities: v31.entities.map(
      ({
        modes: _modes,
        stackOrder: _stackOrder,
        item: _item,
        synonyms: _synonyms,
        ...entity
      }) => ({
        ...entity,
        actions: entity.actions.map((action) => ({ ...action, type: "roll" })),
      }),
    ),
    entitySpawns: v31.entitySpawns.map(
      ({ owner, activeModes: _activeModes, stackOrder: _stackOrder, ...spawn }) => {
        const ownerUid = entityBearing(owner);
        return ownerUid ? { ...spawn, ownerUid } : spawn;
      },
    ),
    variables: v31.variables.map((variable) => {
      if (variable.type !== "number") {
        return variable;
      }
      const { maxVariable: _maxVariable, ...number } = variable;
      return number;
    }),
    sheets: v31.sheets.map(({ height: _height, ...sheet }) => sheet),
    datasets: v31.datasets.map(
      ({ icon: _icon, adminOnly: _adminOnly, ...dataset }) => dataset,
    ),
  };
};
