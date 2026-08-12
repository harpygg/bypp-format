import type { BeyondPaperV15 } from "../schemas/bypp.v15.schema";
import type { BeyondPaperV16 } from "../schemas/bypp.v16.schema";
import type { Migrator } from "./types";

/**
 * v15 → v16 (upgrade): a pure version bump. **Non-lossy.**
 *
 * `variables[].icon` is optional and purely additive, so a v15 variable is
 * already a valid v16 one — it simply names no icon, and a reader groups it
 * with the other unheaded fields.
 *
 * Nothing is synthesized here. Guessing an icon per variable `type` would
 * make every v15 bundle claim a grouping its author never chose, and the
 * distinction between "grouped under a shield" and "not grouped" is exactly
 * what v16 exists to carry.
 */
export const v15ToV16: Migrator<BeyondPaperV15, BeyondPaperV16> = (v15) => ({
  ...v15,
  version: 16,
});
