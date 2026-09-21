import type { BeyondPaperV25 } from "../schemas/bypp.v25.schema";
import type { BeyondPaperV26 } from "../schemas/bypp.v26.schema";
import type { Migrator } from "./types";

/**
 * v26 → v25 (downgrade): mirror of `v25-to-v26`. **Lossy — every action
 * loses what it did after its dice, and every throw but its first.**
 *
 * v25 has nowhere to put an action's `updates` or `log`: its action rolls
 * and nothing else. The sections are dropped, on the sheets' rolls and on
 * the entities' own actions alike; the actions themselves stay, with their
 * dice. An action that only updated or logged comes out as one that does
 * nothing — not turned into a roll, because a roll has nothing to set and a
 * purchase landing as a dice throw would be worse than its absence.
 */
/** v25 knows one throw: the first one is kept, the others go. */
const firstFormula = (rolls: { diceFormula: string }[] | undefined) =>
  rolls && rolls.length > 0 ? { diceFormula: rolls[0].diceFormula } : {};

export const v26ToV25: Migrator<BeyondPaperV26, BeyondPaperV25> = (v26) => ({
  ...v26,
  version: 25,
  variables: v26.variables.map((variable) => {
    if (variable.type !== "roll") {
      return variable;
    }

    const { rolls, updates: _updates, log: _log, ...roll } = variable;
    return { ...roll, ...firstFormula(rolls) };
  }),
  entities: v26.entities.map((entity) => ({
    ...entity,
    actions: entity.actions.map(
      ({ rolls, updates: _updates, log: _log, ...action }) => ({
        ...action,
        ...firstFormula(rolls),
      }),
    ),
  })),
});
