import { z } from "zod";
import { EntityUidSchema } from "../uid";
import {
  ChunkBaseV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
} from "./chunk.v2.schema";

/**
 * Chunk — v11 changes: a text chunk may carry `wrappedInEntityUid`, the
 * entity whose data a reader should resolve the block against.
 *
 * A text block can embed variable references (see the `variables` category).
 * By default those resolve against whichever entity owns the page the block
 * sits on. `wrappedInEntityUid` overrides that: the block resolves against the
 * named entity instead, and a reader is expected to surface which entity the
 * block belongs to (Harpy frames it with the entity's avatar).
 *
 * This REPLACES the `textProxy` variant, which modelled the same idea as a
 * SECOND chunk pointing at the one holding the text. That indirection carried
 * no information the pointer target didn't already have, and let the two
 * documents drift apart. The variant is gone from v11: `v10-to-v11` folds
 * every proxy into its target, so a v11 document can never contain one.
 * Readers pinned to v10 or earlier still need to handle it.
 *
 * Every other variant is re-imported unchanged from v2.
 */

export const ChunkTextV11Schema = ChunkBaseV2Schema.extend({
  type: z.literal("text"),
  content: z.string(),
  mentionedEntitiesUids: z.array(EntityUidSchema).optional(),
  wrappedInEntityUid: EntityUidSchema.optional(),
});

export type ChunkTextV11 = z.infer<typeof ChunkTextV11Schema>;

export const ChunkV11Schema = z.discriminatedUnion("type", [
  ChunkTextV11Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
]);

export type ChunkV11 = z.infer<typeof ChunkV11Schema>;

// Re-exported so the v11 surface is self-contained, matching how other
// versioned model files expose the variants they inherit unchanged.
export {
  ChunkBaseV2Schema as ChunkBaseV11Schema,
  ChunkGalleryV2Schema as ChunkGalleryV11Schema,
  ChunkRandomV2Schema as ChunkRandomV11Schema,
  type ChunkBaseV2 as ChunkBaseV11,
  type ChunkGalleryV2 as ChunkGalleryV11,
  type ChunkRandomV2 as ChunkRandomV11,
} from "./chunk.v2.schema";
