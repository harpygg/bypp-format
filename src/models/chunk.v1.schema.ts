import { z } from "zod";
import {
  AssetUidSchema,
  ChunkUidSchema,
  EntityUidSchema,
  RandomTableUidSchema,
} from "../uid";

/**
 * Stylistic preset applied to a chunk, à la "callout" boxes in technical
 * writing. The reader picks a visual treatment per style (border, icon,
 * background…). Producers should treat any unknown future value
 * gracefully (fall back to plain).
 */
export const ChunkBlockStyleV1Schema = z.enum([
  "gm-tips",
  "more-info",
  "warning",
  "quote",
  "note",
  "tip",
  "info",
  "rule",
]);

/**
 * How a chunk's heading is rendered relative to the chunk's body. `inside`
 * places the heading inside the chunk's container (think a card with a
 * title bar). `outside` floats it above as a regular section heading.
 */
export const ChunkHeadingModeV1Schema = z.enum(["inside", "outside"]);

/**
 * Heading depth (1..4, like `<h1>`..`<h4>`). Affects size / weight in
 * the reader's typography.
 */
export const ChunkHeadingLevelV1Schema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
]);

export type ChunkBlockStyleV1 = z.infer<typeof ChunkBlockStyleV1Schema>;
export type ChunkHeadingModeV1 = z.infer<typeof ChunkHeadingModeV1Schema>;
export type ChunkHeadingLevelV1 = z.infer<typeof ChunkHeadingLevelV1Schema>;

/**
 * Common fields shared by every chunk type. The `name` is the optional
 * heading text rendered above / inside the chunk depending on
 * `headingMode`. When `null` or absent, the chunk has no heading.
 */
export const ChunkBaseV1Schema = z.object({
  uid: ChunkUidSchema,
  name: z.string().nullable().optional(),
  blockStyle: ChunkBlockStyleV1Schema.nullable().optional(),
  headingLevel: ChunkHeadingLevelV1Schema.nullable().optional(),
  headingMode: ChunkHeadingModeV1Schema.nullable().optional(),
});

export type ChunkBaseV1 = z.infer<typeof ChunkBaseV1Schema>;

/**
 * A text chunk — rich text content. `content` is a sanitized HTML string
 * (producer's responsibility to sanitize before export; readers should
 * still re-sanitize defensively).
 *
 * `mentionedEntitiesUids` lists entities that are referenced from inside
 * the text via mention markup. Lets the reader resolve those mentions
 * (link to the entity, show a preview on hover…) without parsing the
 * HTML. The list is informational; the canonical source is the markup
 * inside `content`.
 */
export const ChunkTextV1Schema = ChunkBaseV1Schema.extend({
  type: z.literal("text"),
  content: z.string(),
  mentionedEntitiesUids: z.array(EntityUidSchema).optional(),
});

export type ChunkTextV1 = z.infer<typeof ChunkTextV1Schema>;

/**
 * A text-proxy chunk — a "shortcut" that renders another chunk's text
 * inline. Lets one page reuse a chunk that lives on another entity
 * (typical use: shared rules text shown in multiple character pages).
 *
 * `chunkUid` is the target chunk (must resolve to a `type: "text"`
 * chunk). `entityUid` is the entity that owns the target (used by
 * readers to scope the lookup and to apply per-entity rendering
 * overrides — e.g. mention links).
 */
export const ChunkTextProxyV1Schema = ChunkBaseV1Schema.extend({
  type: z.literal("textProxy"),
  chunkUid: ChunkUidSchema,
  entityUid: EntityUidSchema,
});

export type ChunkTextProxyV1 = z.infer<typeof ChunkTextProxyV1Schema>;

/**
 * A gallery chunk — an ordered grid of image / video / audio assets.
 *
 * `assetUids` references entries in the bundle's top-level `assets[]`
 * array. The display order mirrors the array order. Each asset's
 * specific shape (image, video, audio, …) is discoverable via its own
 * `type` once dereferenced.
 */
export const ChunkGalleryV1Schema = ChunkBaseV1Schema.extend({
  type: z.literal("gallery"),
  assetUids: z.array(AssetUidSchema),
});

export type ChunkGalleryV1 = z.infer<typeof ChunkGalleryV1Schema>;

/**
 * A random-table chunk — embeds a rollable random table inline on a
 * page.
 *
 * `randomTableUid` resolves to an entry in the top-level
 * `randomTables[]`. `folded` is a UI hint — when `true`, the reader
 * collapses the table by default (showing only its title), letting the
 * user expand it on demand. Useful for long tables.
 */
export const ChunkRandomV1Schema = ChunkBaseV1Schema.extend({
  type: z.literal("random"),
  randomTableUid: RandomTableUidSchema,
  folded: z.boolean().optional(),
});

export type ChunkRandomV1 = z.infer<typeof ChunkRandomV1Schema>;

/**
 * Discriminated union of all chunk variants. Narrow with `chunk.type`.
 */
export const ChunkV1Schema = z.discriminatedUnion("type", [
  ChunkTextV1Schema,
  ChunkTextProxyV1Schema,
  ChunkGalleryV1Schema,
  ChunkRandomV1Schema,
]);

export type ChunkV1 = z.infer<typeof ChunkV1Schema>;
