import type { BeyondPaperV10 } from "../schemas/bypp.v10.schema";
import type { BeyondPaperV11 } from "../schemas/bypp.v11.schema";
import type { Migrator } from "./types";

/**
 * v11 → v10 (downgrade): mirror of `v10-to-v11`. **Lossy.**
 *
 * v10 has no `wrappedInEntityUid`, so it is stripped from every text chunk.
 * The block keeps its text and its place on the page; it just loses the entity
 * its variable references were meant to resolve against, and a v10 reader
 * falls back to the page owner.
 *
 * The alternative — re-expanding each wrapped chunk into a v10 `textProxy`
 * pair — would have to mint a chunk uid the producer never issued and rewrite
 * the owning page's chunk list, which a downgrade has no business doing.
 */
export const v11ToV10: Migrator<BeyondPaperV11, BeyondPaperV10> = (v11) => ({
  ...v11,
  version: 10,
  chunks: v11.chunks.map(stripWrappedInEntityUid),
} as BeyondPaperV10);

// Only the text variant can carry the key; the others pass through untouched.
const stripWrappedInEntityUid = <T extends object>(chunk: T): T => {
  if (!("wrappedInEntityUid" in chunk)) {
    return chunk;
  }
  const { wrappedInEntityUid: _wrappedInEntityUid, ...rest } = chunk;
  return rest as T;
};
