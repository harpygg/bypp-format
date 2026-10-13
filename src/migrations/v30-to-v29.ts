import type { BeyondPaperV29 } from "../schemas/bypp.v29.schema";
import type { BeyondPaperV30 } from "../schemas/bypp.v30.schema";
import type { Migrator } from "./types";

/**
 * v30 → v29 (downgrade): mirror of `v29-to-v30`. **Lossy.**
 *
 * v29 has no sub-types, so `entitySubtypes` is dropped and each sub-type
 * folds into its base type, the closest v29 can say: the longsword loses
 * Weapons and stays an item; the Weapon sheet, on Weapons, becomes a sheet on
 * every item; an `entityRef` on Weapons offers every item.
 */
export const v30ToV29: Migrator<BeyondPaperV30, BeyondPaperV29> = (v30) => {
  const { entitySubtypes, ...rest } = v30;
  const baseOf = new Map(
    entitySubtypes.map((subtype) => [subtype.uid, subtype.baseType]),
  );

  return {
    ...rest,
    version: 29,
    entities: v30.entities.map(({ subtypeUid: _subtypeUid, ...entity }) => entity),
    datasets: v30.datasets.map(({ targetsSubtypes, ...dataset }) => {
      const bases = targetsSubtypes.flatMap((uid) => baseOf.get(uid) ?? []);
      return {
        ...dataset,
        targets: [...new Set([...dataset.targets, ...bases])],
      };
    }),
    variables: v30.variables.map((variable) =>
      (variable.type === "entityRef" || variable.type === "entitySpawnRef") &&
      variable.targetsTypes
        ? {
            ...variable,
            targetsTypes: [
              ...new Set(
                variable.targetsTypes.map((ref) => baseOf.get(ref) ?? ref),
              ),
            ],
          }
        : variable,
    ),
  };
};
