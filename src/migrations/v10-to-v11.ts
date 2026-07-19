import type { BeyondPaperV10 } from "../schemas/bypp.v10.schema";
import type { BeyondPaperV11 } from "../schemas/bypp.v11.schema";
import type { Migrator } from "./types";

/**
 * v10 → v11 (upgrade): folds `textProxy` chunks into the text chunks they
 * point at.
 *
 * v10 expressed "render this block in that entity's context" as a SECOND
 * chunk pointing at the one holding the text. v11 drops the variant and puts
 * `wrappedInEntityUid` on the text chunk itself, so the proxies have to be
 * resolved away here — a v11 document cannot contain one.
 *
 * For each proxy:
 *   • its `entityUid` lands on the target text chunk as `wrappedInEntityUid`
 *   • the proxy is dropped from `chunks[]`
 *   • every `pages[].chunksOrder` entry naming it now names the target
 *
 * A page that ends up naming the same chunk twice (it listed both the proxy
 * and its target) keeps the first occurrence — `chunksOrder` is a render
 * order, and rendering one chunk twice was never the intent.
 *
 * A proxy whose target is missing from the bundle (or is not a text chunk) is
 * dropped, along with the page references naming it. Note this is the COMMON
 * case, not an edge one: a producer that walked only its pages' chunk lists
 * never had a reason to include the pointed-at chunk, so most v10 bundles
 * carry proxies whose target was left behind. Nothing can be salvaged — the
 * v10 `textProxy` shape holds no `content` of its own, so the text is simply
 * not in the file — and an empty block a reader can neither fill nor
 * understand is worse than no block at all.
 *
 * **Lossy in one degenerate case**: if several proxies point at the SAME text
 * chunk with DIFFERENT `entityUid`s, the chunk can only carry one context, so
 * the first one encountered wins. v10 allowed that shape; nothing is known to
 * produce it, and v11 makes it unrepresentable by design.
 */
export const v10ToV11: Migrator<BeyondPaperV10, BeyondPaperV11> = (v10) => {
  const textChunkUids = new Set(
    v10.chunks.filter((c) => c.type === "text").map((c) => c.uid),
  );

  // proxy uid → the text chunk it resolves to. Proxies pointing at a missing
  // (or non-text) chunk are deliberately absent: they resolve to nothing, so
  // the page references naming them are dropped below.
  const proxyToTarget = new Map<string, string>();
  // target uid → the entity context to stamp on it. First proxy wins.
  const targetToEntity = new Map<string, string>();

  for (const chunk of v10.chunks) {
    if (chunk.type !== "textProxy") {
      continue;
    }
    if (!textChunkUids.has(chunk.chunkUid)) {
      continue;
    }

    proxyToTarget.set(chunk.uid, chunk.chunkUid);

    if (!targetToEntity.has(chunk.chunkUid)) {
      targetToEntity.set(chunk.chunkUid, chunk.entityUid);
    }
  }

  const chunks = v10.chunks
    // No proxy survives into v11: a resolved one is superseded by the target
    // that absorbs its context, an unresolved one holds no text to contribute.
    .filter((chunk) => chunk.type !== "textProxy")
    .map((chunk) => {
      // A chunk is only stamped if some proxy pointed AT it.
      // `targetToEntity` is keyed exclusively by uids that passed the
      // `textChunkUids` guard above, so a gallery or random chunk can never
      // match here.
      const wrappedInEntityUid = targetToEntity.get(chunk.uid);
      if (!wrappedInEntityUid) {
        return chunk;
      }

      return { ...chunk, wrappedInEntityUid };
    });

  const survivingUids = new Set(chunks.map((c) => c.uid));

  const pages = v10.pages.map((page) => {
    if (page.type !== "standard") {
      return page;
    }

    const seen = new Set<string>();
    const chunksOrder: string[] = [];

    for (const uid of page.chunksOrder) {
      const resolved = proxyToTarget.get(uid) ?? uid;

      // Drops references to chunks the bundle never carried, and the
      // duplicate a fold creates when a page listed both proxy and target.
      if (!survivingUids.has(resolved) || seen.has(resolved)) {
        continue;
      }

      seen.add(resolved);
      chunksOrder.push(resolved);
    }

    return { ...page, chunksOrder };
  });

  return {
    ...v10,
    version: 11,
    chunks,
    pages,
  } as BeyondPaperV11;
};
