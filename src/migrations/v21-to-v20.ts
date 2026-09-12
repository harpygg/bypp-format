import type { ChunkV12 } from "../models/chunk.v12.schema";
import type { BeyondPaperV20 } from "../schemas/bypp.v20.schema";
import type { BeyondPaperV21 } from "../schemas/bypp.v21.schema";
import type { Migrator } from "./types";

type ChunkV11 = BeyondPaperV20["chunks"][number];

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * v21 → v20 (downgrade): mirror of `v20-to-v21`. **Lossy.**
 *
 * v20 has no markdown block, so each one becomes a text block holding its
 * source, preformatted and escaped. The words survive and stay readable; the
 * markup does not — a heading typed with a hash reads as a hash, and an
 * author who edits the block edits HTML from then on.
 *
 * Dropping the block instead would take a page's content away, which is worse
 * than showing it unrendered.
 */
const toText = (chunk: ChunkV12): ChunkV11 =>
  chunk.type === "markdown"
    ? {
        ...chunk,
        type: "text",
        content: `<pre>${escapeHtml(chunk.content)}</pre>`,
      }
    : chunk;

export const v21ToV20: Migrator<BeyondPaperV21, BeyondPaperV20> = (v21) => ({
  ...v21,
  version: 20,
  chunks: v21.chunks.map(toText),
});
