import type { BeyondPaperV6 } from "../schemas/bypp.v6.schema";
import type { BeyondPaperV7 } from "../schemas/bypp.v7.schema";
import type { Migrator } from "./types";

/**
 * v6 → v7 (upgrade): non-lossy.
 *
 * v7 reshapes random-table rows: the single optional `randomTableUid`
 * nested-table reference becomes a `randomTableRefs` map keyed by the
 * placeholder token used in `content`. A v6 row carrying a `randomTableUid`
 * maps to a single `"$1"` entry; a row without one carries no map. No v6 table
 * has a `diceFormula`, so none is added.
 */
export const v6ToV7: Migrator<BeyondPaperV6, BeyondPaperV7> = (v6) => ({
  ...v6,
  version: 7,
  randomTables: v6.randomTables.map((table) => ({
    ...table,
    rows: table.rows.map(({ randomTableUid, ...row }) => ({
      ...row,
      ...(randomTableUid ? { randomTableRefs: { $1: randomTableUid } } : {}),
    })),
  })),
});
