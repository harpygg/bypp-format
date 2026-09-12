import type { BeyondPaperV19 } from "../schemas/bypp.v19.schema";
import type { BeyondPaperV20 } from "../schemas/bypp.v20.schema";
import type { Migrator } from "./types";

/**
 * v19 → v20 (upgrade): a pure version bump. **Non-lossy.**
 *
 * v20 only adds a list to the entity, and a v19 document carries none of it.
 * Nothing is inferred: a roll a v19 author wrote as a sheet attribute stays a
 * sheet attribute, because it belongs to every entity of that sheet and
 * turning it into one entity's action would take it from the others.
 */
export const v19ToV20: Migrator<BeyondPaperV19, BeyondPaperV20> = (v19) => ({
  ...v19,
  version: 20,
  entities: v19.entities.map((entity) => ({ ...entity, actions: [] })),
});
