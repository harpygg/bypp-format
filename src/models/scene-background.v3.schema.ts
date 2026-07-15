/**
 * Scene background schema as **introduced in bypp format v10** — v2 with the
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
import { SceneBackgroundBaseV2Schema } from "./scene-background.v2.schema";

export const CustomImageSceneBackgroundV3Schema =
  SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV3Schema).extend({
    type: z.literal("customImage"),
  });

export type CustomImageSceneBackgroundV3 = z.infer<
  typeof CustomImageSceneBackgroundV3Schema
>;

export const CustomVideoSceneBackgroundV3Schema =
  SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
    type: z.literal("customVideo"),
  });

export type CustomVideoSceneBackgroundV3 = z.infer<
  typeof CustomVideoSceneBackgroundV3Schema
>;

export const SceneBackgroundV3Schema = z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema,
]);

export type SceneBackgroundV3 = z.infer<typeof SceneBackgroundV3Schema>;
