import { z } from "zod";
import { WithAudioUrlsV2Schema } from "../mixins/with-audio-urls.v2.schema";
import { WithImagesUrlsV2Schema } from "../mixins/with-images-urls.v2.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { ImageDimensionsV1Schema } from "../mixins/with-video-urls.v1.schema";
import { WithVideoUrlsV2Schema } from "../mixins/with-video-urls.v2.schema";
import { AssetUidSchema, EntityUidSchema } from "../uid";

/**
 * Well-known external audio providers. Use this as a discovery aid;
 * `provider` on the wire is `z.string()` so new providers can land
 * without a schema bump.
 */
export const KNOWN_EXTERNAL_AUDIO_PROVIDERS = [
  "youtube",
  "soundcloud",
  "vimeo",
  "bandcamp",
  "spotify",
] as const;
export type KnownExternalAudioProvider =
  (typeof KNOWN_EXTERNAL_AUDIO_PROVIDERS)[number];

export const AssetBaseV2Schema = z
  .object({ uid: AssetUidSchema })
  .merge(WithNameV1Schema);

export type AssetBaseV2 = z.infer<typeof AssetBaseV2Schema>;

export const ImageAssetV2Schema = AssetBaseV2Schema.merge(
  WithImagesUrlsV2Schema,
).extend({
  type: z.literal("image"),
  dimensions: ImageDimensionsV1Schema,
});

export type ImageAssetV2 = z.infer<typeof ImageAssetV2Schema>;

export const VideoAssetV2Schema = AssetBaseV2Schema.merge(
  WithVideoUrlsV2Schema,
).extend({
  type: z.literal("video"),
  dimensions: ImageDimensionsV1Schema,
});

export type VideoAssetV2 = z.infer<typeof VideoAssetV2Schema>;

export const AudioAssetV2Schema = AssetBaseV2Schema.merge(
  WithAudioUrlsV2Schema,
).extend({
  type: z.literal("audio"),
});

export type AudioAssetV2 = z.infer<typeof AudioAssetV2Schema>;

/**
 * External-hosted audio reference — generalized in v2.
 *
 * v1 carried `youtubeVideoId` directly, hard-coding the asset to
 * YouTube. v2 splits it into `provider` (open string, see
 * `KNOWN_EXTERNAL_AUDIO_PROVIDERS`) and `externalId` (whatever the
 * provider uses to identify a track / video / episode). Readers
 * dispatch on `provider` to build the embed URL / call the right API.
 */
export const AudioExternalAssetV2Schema = AssetBaseV2Schema.extend({
  type: z.literal("audio-external"),
  provider: z.string(),
  externalId: z.string(),
  thumbnailUrl: z.string().url().optional(),
  durationSeconds: z.number().optional(),
});

export type AudioExternalAssetV2 = z.infer<typeof AudioExternalAssetV2Schema>;

export const EntityAssetV2Schema = AssetBaseV2Schema.extend({
  type: z.literal("entity"),
  entityUid: EntityUidSchema,
});

export type EntityAssetV2 = z.infer<typeof EntityAssetV2Schema>;

export const AssetV2Schema = z.discriminatedUnion("type", [
  ImageAssetV2Schema,
  VideoAssetV2Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema,
  EntityAssetV2Schema,
]);

export type AssetV2 = z.infer<typeof AssetV2Schema>;
