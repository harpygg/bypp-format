import type { BeyondPaperV31 } from "../schemas/bypp.v31.schema";
import type { BeyondPaperV32 } from "../schemas/bypp.v32.schema";
import type { Migrator } from "./types";

/**
 * v31 → v32 (upgrade). **Non-lossy.**
 *
 * A v31 `pips` widget has no `layout`: it stays a row, which is what a v32
 * reader draws when `layout` is absent. Nothing else moves.
 */
export const v31ToV32: Migrator<BeyondPaperV31, BeyondPaperV32> = (v31) => ({
  ...v31,
  version: 32,
});
