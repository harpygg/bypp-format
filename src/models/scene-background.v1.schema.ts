import { z } from "zod";
import { WithImagesUrlsV1Schema } from "../mixins/with-images-urls.v1.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithVideoUrlsV1Schema } from "../mixins/with-video-urls.v1.schema";
import { SceneBackgroundUidSchema } from "../uid";

/**
 * Common fields for every scene-background variant.
 *
 * `opacity` (0..1) controls how much the background shows through items
 * rendered on top of it. When absent the background is fully opaque.
 */
export const SceneBackgroundBaseV1Schema = z
  .object({ uid: SceneBackgroundUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    opacity: z.number().optional(),
  });

export type SceneBackgroundBaseV1 = z.infer<typeof SceneBackgroundBaseV1Schema>;

/**
 * A static image used as a scene's background. Sits behind the map (and
 * any other scene content). Carries the standard image-URLs mixin.
 */
export const CustomImageSceneBackgroundV1Schema =
  SceneBackgroundBaseV1Schema.merge(WithImagesUrlsV1Schema).extend({
    type: z.literal("customImage"),
  });

export type CustomImageSceneBackgroundV1 = z.infer<
  typeof CustomImageSceneBackgroundV1Schema
>;

/**
 * A looping video used as a scene's background — animated skies, weather
 * cycles, ambient creatures, …
 */
export const CustomVideoSceneBackgroundV1Schema =
  SceneBackgroundBaseV1Schema.merge(WithVideoUrlsV1Schema).extend({
    type: z.literal("customVideo"),
  });

export type CustomVideoSceneBackgroundV1 = z.infer<
  typeof CustomVideoSceneBackgroundV1Schema
>;

/**
 * Discriminated union of all scene-background variants. Narrow with
 * `background.type`.
 */
export const SceneBackgroundV1Schema = z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV1Schema,
  CustomVideoSceneBackgroundV1Schema,
]);

export type SceneBackgroundV1 = z.infer<typeof SceneBackgroundV1Schema>;
