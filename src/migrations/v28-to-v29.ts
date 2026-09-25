import type { BeyondPaperV28 } from "../schemas/bypp.v28.schema";
import type { BeyondPaperV29 } from "../schemas/bypp.v29.schema";
import type { Migrator } from "./types";

/**
 * v28 → v29 (upgrade): pure version bump. **Non-lossy.**
 *
 * v29 adds `credits[]`; a v28 document has none, and the schema defaults it
 * to `[]`.
 */
export const v28ToV29: Migrator<BeyondPaperV28, BeyondPaperV29> = (v28) => ({
  ...v28,
  version: 29,
  credits: [],
});
