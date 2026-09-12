import { z } from "zod";
import {
  ChunkBaseV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
} from "./chunk.v2.schema";
import { ChunkTextV11Schema } from "./chunk.v11.schema";

/**
 * Chunk — v12 adds a **markdown** block, as introduced in bypp format v21.
 *
 * The text block holds HTML, which is what a rich-text editor produces and
 * what a reader renders as is. Markdown is the other way people write: a
 * table typed in three lines, a heading typed with a hash, text a person
 * keeps in Obsidian or in a repository and pastes across whole. Converting it
 * to HTML on the way in loses the source — the author can no longer edit what
 * they wrote — so the format carries the markdown itself and leaves the
 * rendering to the reader.
 *
 * `content` is the markdown source, exactly as written. A reader that has no
 * markdown renderer still has the words: unrendered markdown reads.
 *
 * It is a SECOND block rather than a flag on the text one: the two carry
 * different languages, and a block that could be either would have every
 * consumer guess which.
 *
 * This file MUST NOT be modified once shipped.
 */
export const ChunkMarkdownV12Schema = ChunkBaseV2Schema.extend({
  type: z.literal("markdown"),
  content: z.string(),
});

export type ChunkMarkdownV12 = z.infer<typeof ChunkMarkdownV12Schema>;

export const ChunkV12Schema = z.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
  ChunkMarkdownV12Schema,
]);

export type ChunkV12 = z.infer<typeof ChunkV12Schema>;

// Re-exported so the v12 surface is self-contained, matching how other
// versioned model files expose the variants they inherit unchanged.
export {
  ChunkBaseV2Schema as ChunkBaseV12Schema,
  ChunkGalleryV2Schema as ChunkGalleryV12Schema,
  ChunkRandomV2Schema as ChunkRandomV12Schema,
  type ChunkBaseV2 as ChunkBaseV12,
  type ChunkGalleryV2 as ChunkGalleryV12,
  type ChunkRandomV2 as ChunkRandomV12,
} from "./chunk.v2.schema";
export {
  ChunkTextV11Schema as ChunkTextV12Schema,
  type ChunkTextV11 as ChunkTextV12,
} from "./chunk.v11.schema";
