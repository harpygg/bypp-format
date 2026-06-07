import type { BeyondPaperV5 } from "../schemas/bypp.v5.schema";
import type { BeyondPaperV6 } from "../schemas/bypp.v6.schema";
import type { Migrator } from "./types";

/**
 * v6 → v5 (downgrade): mirror of `v5-to-v6`. **Lossy.**
 *
 * v5 has no `dataTableDirectLookup` variable variant, so those variables
 * are dropped. Mirrors how `v5-to-v4` drops `image` variables: the variable
 * itself is removed; widget references to it are left as-is (the v5 schema
 * doesn't enforce referential integrity, same as v4 for dropped variables).
 *
 * The v5 schema validation that runs after this migrator (see `migrate.ts`)
 * catches any missed cleanup.
 */
export const v6ToV5: Migrator<BeyondPaperV6, BeyondPaperV5> = (v6) => {
  const { variables, ...rest } = v6;

  const v5Variables = variables.filter(
    (v) => v.type !== "dataTableDirectLookup",
  );

  return {
    ...rest,
    version: 5,
    variables: v5Variables,
  } as BeyondPaperV5;
};
