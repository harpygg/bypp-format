import type { BeyondPaperV27 } from "../schemas/bypp.v27.schema";
import type { BeyondPaperV28 } from "../schemas/bypp.v28.schema";
import type { Migrator } from "./types";

/**
 * v28 → v27 (downgrade): mirror of `v27-to-v28`. **Lossy.**
 *
 * v27 has no spawns, so `entitySpawns` is dropped, and with it every
 * `entitySpawnRef` variable (its values are spawn uids a v27 reader could not
 * resolve) and every `entityLookup` reading through one. What referenced them
 * goes with them: the values entities stored for a dropped variable, and a
 * widget bound to one, which is unbound rather than left pointing at nothing.
 */
export const v28ToV27: Migrator<BeyondPaperV28, BeyondPaperV27> = (v28) => {
  const spawnRefs = new Set(
    v28.variables
      .filter((v) => v.type === "entitySpawnRef")
      .map((v) => v.uid),
  );
  const droppedVariables = new Set([
    ...spawnRefs,
    ...v28.variables
      .filter(
        (v) =>
          v.type === "entityLookup" &&
          v.sourceVariableUid !== undefined &&
          spawnRefs.has(v.sourceVariableUid),
      )
      .map((v) => v.uid),
  ]);

  const { entitySpawns: _entitySpawns, ...rest } = v28;
  return {
    ...rest,
    version: 27,
    variables: v28.variables.flatMap((v) =>
      v.type === "entitySpawnRef" || droppedVariables.has(v.uid) ? [] : [v],
    ),
    widgets: v28.widgets.map((w) => {
      if (w.variableUid && droppedVariables.has(w.variableUid)) {
        const { variableUid: _variableUid, ...unbound } = w;
        return unbound;
      }
      return w;
    }),
    entities: v28.entities.map((entity) => {
      if (!entity.data) {
        return entity;
      }
      const data = Object.fromEntries(
        Object.entries(entity.data).filter(
          ([uid]) => !droppedVariables.has(uid),
        ),
      );
      return Object.keys(data).length > 0
        ? { ...entity, data }
        : (({ data: _data, ...rest }) => rest)(entity);
    }),
  };
};
