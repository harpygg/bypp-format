import { z } from "zod";
import { WithAudioUrlsV1Schema } from "../mixins/with-audio-urls.v1.schema";
import { WithImagesUrlsV1Schema } from "../mixins/with-images-urls.v1.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import {
  ImageDimensionsV1Schema,
  WithVideoUrlsV1Schema,
} from "../mixins/with-video-urls.v1.schema";
import { AssetUidSchema, EntityUidSchema } from "../uid";

/**
 * Common fields shared by every asset variant: a uid + a display name
 * (the label shown in galleries, library listings, etc.).
 */
export const AssetBaseV1Schema = z
  .object({ uid: AssetUidSchema })
  .merge(WithNameV1Schema);

export type AssetBaseV1 = z.infer<typeof AssetBaseV1Schema>;

/**
 * An image asset — pre-rendered image accessible at a URL. Carries
 * `dimensions` (pixel size) and the image-URLs mixin (multiple crops if
 * available).
 */
export const ImageAssetV1Schema = AssetBaseV1Schema.merge(
  WithImagesUrlsV1Schema,
).extend({
  type: z.literal("image"),
  dimensions: ImageDimensionsV1Schema,
});

export type ImageAssetV1 = z.infer<typeof ImageAssetV1Schema>;

/**
 * A video asset — pre-encoded video accessible at a URL. Carries pixel
 * `dimensions` (intrinsic size of the video).
 */
export const VideoAssetV1Schema = AssetBaseV1Schema.merge(
  WithVideoUrlsV1Schema,
).extend({
  type: z.literal("video"),
  dimensions: ImageDimensionsV1Schema,
});

export type VideoAssetV1 = z.infer<typeof VideoAssetV1Schema>;

/**
 * A hosted audio asset — the producer serves the file at `audioUrl`. Use
 * this for ambient music, sound effects, voiceover, …
 */
export const AudioAssetV1Schema = AssetBaseV1Schema.merge(
  WithAudioUrlsV1Schema,
).extend({
  type: z.literal("audio"),
});

export type AudioAssetV1 = z.infer<typeof AudioAssetV1Schema>;

/**
 * An external (YouTube) audio reference. Lets producers link to a video's
 * audio track without re-hosting it.
 *
 *  - `youtubeVideoId` — the 11-char video id (e.g. `"dQw4w9WgXcQ"`).
 *  - `thumbnailUrl` — pre-cached thumbnail so readers can show a preview
 *    without hitting YouTube's API.
 *  - `durationSeconds` — total runtime, mirrored from YouTube at producer
 *    time. Saves the reader an API roundtrip.
 */
export const AudioExternalAssetV1Schema = AssetBaseV1Schema.extend({
  type: z.literal("audio-external"),
  youtubeVideoId: z.string(),
  thumbnailUrl: z.string(),
  durationSeconds: z.number(),
});

export type AudioExternalAssetV1 = z.infer<typeof AudioExternalAssetV1Schema>;

/**
 * An entity-as-asset reference — promotes an entity into the gallery
 * system so it can be displayed alongside images / videos in a gallery
 * chunk. `entityUid` resolves to the actual entity (its own image, name,
 * etc. are used for rendering).
 */
export const EntityAssetV1Schema = AssetBaseV1Schema.extend({
  type: z.literal("entity"),
  entityUid: EntityUidSchema,
});

export type EntityAssetV1 = z.infer<typeof EntityAssetV1Schema>;

/**
 * Discriminated union of all asset kinds. Narrow with `asset.type`.
 */
export const AssetV1Schema = z.discriminatedUnion("type", [
  ImageAssetV1Schema,
  VideoAssetV1Schema,
  AudioAssetV1Schema,
  AudioExternalAssetV1Schema,
  EntityAssetV1Schema,
]);

export type AssetV1 = z.infer<typeof AssetV1Schema>;
