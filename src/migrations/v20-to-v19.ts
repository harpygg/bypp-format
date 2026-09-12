import type { BeyondPaperV19 } from "../schemas/bypp.v19.schema";
import type { BeyondPaperV20 } from "../schemas/bypp.v20.schema";
import type { Migrator } from "./types";

/**
 * v20 → v19 (downgrade): mirror of `v19-to-v20`. **Lossy.**
 *
 * v19 has no field for an action an entity carries itself, so every one of
 * them is dropped. They are not turned into sheet attributes on the way out:
 * an attribute belongs to every entity of its dataset, so a sword's own attack
 * would land on every sword in the bundle.
 */
export const v20ToV19: Migrator<BeyondPaperV20, BeyondPaperV19> = (v20) => ({
  ...v20,
  version: 19,
  entities: v20.entities.map(({ actions: _actions, ...entity }) => entity),
});
