import { z } from "zod";
import {
  AssetUidSchema,
  ChunkUidSchema,
  EntityUidSchema,
  RandomTableUidSchema,
} from "../uid";

export const ChunkBlockStyleSchema = z.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule",
]);

export const ChunkHeadingModeSchema = z.enum(["inside", "outside"]);

export const ChunkHeadingLevelSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);

export type ChunkBlockStyle = z.infer<typeof ChunkBlockStyleSchema>;
export type ChunkHeadingMode = z.infer<typeof ChunkHeadingModeSchema>;
export type ChunkHeadingLevel = z.infer<typeof ChunkHeadingLevelSchema>;

export const ChunkBaseSchema = z.object({
  uid: ChunkUidSchema,
  name: z.string().nullable().optional(),
  blockStyle: ChunkBlockStyleSchema.nullable().optional(),
  headingLevel: ChunkHeadingLevelSchema.nullable().optional(),
  headingMode: ChunkHeadingModeSchema.nullable().optional(),
});

export type ChunkBase = z.infer<typeof ChunkBaseSchema>;

export const ChunkTextSchema = ChunkBaseSchema.extend({
  type: z.literal("text"),
  content: z.string(),
  mentionedEntitiesUids: z.array(EntityUidSchema).optional(),
});

export type ChunkText = z.infer<typeof ChunkTextSchema>;

export const ChunkTextProxySchema = ChunkBaseSchema.extend({
  type: z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema,
});

export type ChunkTextProxy = z.infer<typeof ChunkTextProxySchema>;

export const ChunkGallerySchema = ChunkBaseSchema.extend({
  type: z.literal("gallery"),
  assetUids: z.array(AssetUidSchema),
});

export type ChunkGallery = z.infer<typeof ChunkGallerySchema>;

export const ChunkRandomSchema = ChunkBaseSchema.extend({
  type: z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z.boolean().optional(),
});

export type ChunkRandom = z.infer<typeof ChunkRandomSchema>;

export const ChunkSchema = z.discriminatedUnion("type", [
  ChunkTextSchema,
  ChunkTextProxySchema,
  ChunkGallerySchema,
  ChunkRandomSchema,
]);

export type Chunk = z.infer<typeof ChunkSchema>;
