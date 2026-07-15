/**
 * Scene map schema as **introduced in bypp format v10** — v2 with the
 * `customImage` variant's image URLs upgraded from `WithImagesUrlsV2` to
 * `WithImagesUrlsV3` (adds the original image's `dimensions`). The
 * `customVideo` variant already carries its own `videoDimensions`, so it is
 * unchanged. Base shape and the discriminated union are otherwise identical
 * to v2.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithImagesUrlsV3Schema } from "../mixins/with-images-urls.v3.schema";
import { WithVideoUrlsV2Schema } from "../mixins/with-video-urls.v2.schema";
import { SceneMapBaseV2Schema } from "./scene-map.v2.schema";

export const CustomImageSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV3Schema,
).extend({
  type: z.literal("customImage"),
});

export type CustomImageSceneMapV3 = z.infer<typeof CustomImageSceneMapV3Schema>;

export const CustomVideoSceneMapV3Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema,
).extend({
  type: z.literal("customVideo"),
});

export type CustomVideoSceneMapV3 = z.infer<typeof CustomVideoSceneMapV3Schema>;

export const SceneMapV3Schema = z.discriminatedUnion("type", [
  CustomImageSceneMapV3Schema,
  CustomVideoSceneMapV3Schema,
]);

export type SceneMapV3 = z.infer<typeof SceneMapV3Schema>;
