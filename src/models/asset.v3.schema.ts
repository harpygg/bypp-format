/**
 * Asset schema as **introduced in bypp format v13** — v2 with an optional
 * per-file `credit` (see `with-credit.v1.schema`) on every variant.
 *
 * Assets are the format's most literal media containers, so they are the
 * clearest case for the mixin: an image, a video and an audio file in the
 * same bundle routinely come from three different people under three
 * different licences. `audio-external` gets it too — the track is still
 * somebody's work even when it is streamed from a provider rather than
 * re-hosted — and so does `entity`, so a reader never has to special-case
 * "which asset kinds can be credited".
 *
 * Every variant is re-declared by merging the credit mixin into its v2
 * shape; nothing else changes, and the union is re-declared over the new
 * variants.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import {
  AssetBaseV2Schema,
  AudioAssetV2Schema,
  AudioExternalAssetV2Schema,
  EntityAssetV2Schema,
  ImageAssetV2Schema,
  VideoAssetV2Schema,
} from "./asset.v2.schema";

export const AssetBaseV3Schema = AssetBaseV2Schema.merge(WithCreditV1Schema);

export type AssetBaseV3 = z.infer<typeof AssetBaseV3Schema>;

export const ImageAssetV3Schema = ImageAssetV2Schema.merge(WithCreditV1Schema);

export type ImageAssetV3 = z.infer<typeof ImageAssetV3Schema>;

export const VideoAssetV3Schema = VideoAssetV2Schema.merge(WithCreditV1Schema);

export type VideoAssetV3 = z.infer<typeof VideoAssetV3Schema>;

export const AudioAssetV3Schema = AudioAssetV2Schema.merge(WithCreditV1Schema);

export type AudioAssetV3 = z.infer<typeof AudioAssetV3Schema>;

export const AudioExternalAssetV3Schema = AudioExternalAssetV2Schema.merge(
  WithCreditV1Schema,
);

export type AudioExternalAssetV3 = z.infer<typeof AudioExternalAssetV3Schema>;

export const EntityAssetV3Schema =
  EntityAssetV2Schema.merge(WithCreditV1Schema);

export type EntityAssetV3 = z.infer<typeof EntityAssetV3Schema>;

export const AssetV3Schema = z.discriminatedUnion("type", [
  ImageAssetV3Schema,
  VideoAssetV3Schema,
  AudioAssetV3Schema,
  AudioExternalAssetV3Schema,
  EntityAssetV3Schema,
]);

export type AssetV3 = z.infer<typeof AssetV3Schema>;

// External-audio provider discovery list unchanged since v2 — re-exported
// under the v3 name so consumers can keep importing from a single place.
export { KNOWN_EXTERNAL_AUDIO_PROVIDERS } from "./asset.v2.schema";
export type { KnownExternalAudioProvider } from "./asset.v2.schema";
