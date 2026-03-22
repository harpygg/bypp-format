import { z } from "zod";
import { WithAudioUrlsSchema } from "../mixins/with-audio-urls.schema";
import { WithImagesUrlsSchema } from "../mixins/with-images-urls.schema";
import { WithNameSchema } from "../mixins/with-name.schema";
import {
  ImageDimensionsSchema,
  WithVideoUrlsSchema,
} from "../mixins/with-video-urls.schema";
import { AssetUidSchema, EntityUidSchema } from "../uid";

export const AssetBaseSchema = z
  .object({ uid: AssetUidSchema })
  .merge(WithNameSchema);

export type AssetBase = z.infer<typeof AssetBaseSchema>;

export const ImageAssetSchema = AssetBaseSchema.merge(WithImagesUrlsSchema).extend({
  type: z.literal("image"),
  dimensions: ImageDimensionsSchema,
});

export type ImageAsset = z.infer<typeof ImageAssetSchema>;

export const VideoAssetSchema = AssetBaseSchema.merge(WithVideoUrlsSchema).extend({
  type: z.literal("video"),
  dimensions: ImageDimensionsSchema,
});

export type VideoAsset = z.infer<typeof VideoAssetSchema>;

export const AudioAssetSchema = AssetBaseSchema.merge(WithAudioUrlsSchema).extend({
  type: z.literal("audio"),
});

export type AudioAsset = z.infer<typeof AudioAssetSchema>;

export const AudioExternalAssetSchema = AssetBaseSchema.extend({
  type: z.literal("audio-external"),
  youtubeVideoId: z.string(),
  thumbnailUrl: z.string(),
  durationSeconds: z.number(),
});

export type AudioExternalAsset = z.infer<typeof AudioExternalAssetSchema>;

export const EntityAssetSchema = AssetBaseSchema.extend({
  type: z.literal("entity"),
  entityUid: EntityUidSchema,
});

export type EntityAsset = z.infer<typeof EntityAssetSchema>;

export const AssetSchema = z.discriminatedUnion("type", [
  ImageAssetSchema,
  VideoAssetSchema,
  AudioAssetSchema,
  AudioExternalAssetSchema,
  EntityAssetSchema,
]);

export type Asset = z.infer<typeof AssetSchema>;
