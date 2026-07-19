import type { BeyondPaperV11 } from "../schemas/bypp.v11.schema";
import type { BeyondPaperV12 } from "../schemas/bypp.v12.schema";
import type { Migrator } from "./types";

/**
 * v11 → v12 (upgrade): pure version bump. **Non-lossy.**
 *
 * Everything v12 adds is optional and additive — `actionsVariablesUids` is an
 * optional field on every widget variant, and `actionRoll` is a new variant.
 * A v11 document has neither, so it is already a valid v12 document.
 */
export const v11ToV12: Migrator<BeyondPaperV11, BeyondPaperV12> = (v11) => ({
  ...v11,
  version: 12,
});
