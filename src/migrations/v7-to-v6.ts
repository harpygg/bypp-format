import type { BeyondPaperV6 } from "../schemas/bypp.v6.schema";
import type { BeyondPaperV7 } from "../schemas/bypp.v7.schema";
import type { Migrator } from "./types";

/**
 * v7 → v6 (downgrade): mirror of `v6-to-v7`. **Lossy.**
 *
 * v6 random-table rows support a single nested-table reference, so a
 * `randomTableRefs` map collapses to its first entry — any additional
 * references (and the placeholder tokens) are dropped. v6 tables have no
 * `diceFormula`, so the override is dropped too. The v6 schema validation that
 * runs after this migrator (see `migrate.ts`) catches any missed cleanup.
 */
export const v7ToV6: Migrator<BeyondPaperV7, BeyondPaperV6> = (v7) => ({
  ...v7,
  version: 6,
  randomTables: v7.randomTables.map(
    ({ diceFormula: _diceFormula, ...table }) => ({
      ...table,
      rows: table.rows.map(({ randomTableRefs, ...row }) => {
        const firstUid = randomTableRefs
          ? Object.values(randomTableRefs)[0]
          : undefined;

        return {
          ...row,
          ...(firstUid ? { randomTableUid: firstUid } : {}),
        };
      }),
    }),
  ),
});
