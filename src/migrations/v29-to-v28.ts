import type { BeyondPaperV28 } from "../schemas/bypp.v28.schema";
import type { BeyondPaperV29 } from "../schemas/bypp.v29.schema";
import type { Migrator } from "./types";

/**
 * v29 → v28 (downgrade): mirror of `v28-to-v29`. **Lossy.**
 *
 * v28 has nowhere to put the bundle's credits, so `credits` is dropped.
 * `attribution` (the author) is untouched.
 */
export const v29ToV28: Migrator<BeyondPaperV29, BeyondPaperV28> = (v29) => {
  const { credits: _credits, ...rest } = v29;
  return { ...rest, version: 28 };
};
