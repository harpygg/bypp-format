import { z } from "zod";
import {
  AssetUidSchema,
  ChunkUidSchema,
  EntityUidSchema,
  RandomTableUidSchema,
} from "../uid";
import {
  ChunkBlockStyleV1Schema,
  ChunkHeadingLevelV1Schema,
  ChunkHeadingModeV1Schema,
} from "./chunk.v1.schema";

/**
 * Chunk — v2 changes: optional fields previously typed
 * `.nullable().optional()` are now just `.optional()`. Producers should
 * omit instead of writing `null`; readers see the same `undefined` in
 * both cases.
 */
export const ChunkBaseV2Schema = z.object({
  uid: ChunkUidSchema,
  name: z.string().optional(),
  blockStyle: ChunkBlockStyleV1Schema.optional(),
  headingLevel: ChunkHeadingLevelV1Schema.optional(),
  headingMode: ChunkHeadingModeV1Schema.optional(),
});

export type ChunkBaseV2 = z.infer<typeof ChunkBaseV2Schema>;

export const ChunkTextV2Schema = ChunkBaseV2Schema.extend({
  type: z.literal("text"),
  content: z.string(),
  mentionedEntitiesUids: z.array(EntityUidSchema).optional(),
});

export type ChunkTextV2 = z.infer<typeof ChunkTextV2Schema>;

export const ChunkTextProxyV2Schema = ChunkBaseV2Schema.extend({
  type: z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema,
});

export type ChunkTextProxyV2 = z.infer<typeof ChunkTextProxyV2Schema>;

export const ChunkGalleryV2Schema = ChunkBaseV2Schema.extend({
  type: z.literal("gallery"),
  assetUids: z.array(AssetUidSchema).default([]),
});

export type ChunkGalleryV2 = z.infer<typeof ChunkGalleryV2Schema>;

export const ChunkRandomV2Schema = ChunkBaseV2Schema.extend({
  type: z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z.boolean().optional(),
});

export type ChunkRandomV2 = z.infer<typeof ChunkRandomV2Schema>;

export const ChunkV2Schema = z.discriminatedUnion("type", [
  ChunkTextV2Schema,
  ChunkTextProxyV2Schema,
  ChunkGalleryV2Schema,
  ChunkRandomV2Schema,
]);

export type ChunkV2 = z.infer<typeof ChunkV2Schema>;
