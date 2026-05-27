import { z } from "zod";
import { WithImagesUrlsV2Schema } from "../mixins/with-images-urls.v2.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithVideoUrlsV2Schema } from "../mixins/with-video-urls.v2.schema";
import { SceneBackgroundUidSchema } from "../uid";

/**
 * Scene background — v2 changes: switched to `WithImagesUrlsV2Schema` /
 * `WithVideoUrlsV2Schema` for URL validation. Shape unchanged otherwise.
 */
export const SceneBackgroundBaseV2Schema = z
  .object({ uid: SceneBackgroundUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    opacity: z.number().optional(),
  });

export type SceneBackgroundBaseV2 = z.infer<typeof SceneBackgroundBaseV2Schema>;

export const CustomImageSceneBackgroundV2Schema =
  SceneBackgroundBaseV2Schema.merge(WithImagesUrlsV2Schema).extend({
    type: z.literal("customImage"),
  });

export type CustomImageSceneBackgroundV2 = z.infer<
  typeof CustomImageSceneBackgroundV2Schema
>;

export const CustomVideoSceneBackgroundV2Schema =
  SceneBackgroundBaseV2Schema.merge(WithVideoUrlsV2Schema).extend({
    type: z.literal("customVideo"),
  });

export type CustomVideoSceneBackgroundV2 = z.infer<
  typeof CustomVideoSceneBackgroundV2Schema
>;

export const SceneBackgroundV2Schema = z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV2Schema,
  CustomVideoSceneBackgroundV2Schema,
]);

export type SceneBackgroundV2 = z.infer<typeof SceneBackgroundV2Schema>;
