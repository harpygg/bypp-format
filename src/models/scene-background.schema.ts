import { z } from "zod";
import { WithImagesUrlsSchema } from "../mixins/with-images-urls.schema";
import { WithNameSchema } from "../mixins/with-name.schema";
import { WithVideoUrlsSchema } from "../mixins/with-video-urls.schema";
import { SceneBackgroundUidSchema } from "../uid";

export const SceneBackgroundBaseSchema = z
  .object({ uid: SceneBackgroundUidSchema })
  .merge(WithNameSchema);

export type SceneBackgroundBase = z.infer<typeof SceneBackgroundBaseSchema>;

export const CustomImageSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithImagesUrlsSchema,
).extend({
  type: z.literal("customImage"),
});

export type CustomImageSceneBackground = z.infer<typeof CustomImageSceneBackgroundSchema>;

export const CustomVideoSceneBackgroundSchema = SceneBackgroundBaseSchema.merge(
  WithVideoUrlsSchema,
).extend({
  type: z.literal("customVideo"),
});

export type CustomVideoSceneBackground = z.infer<typeof CustomVideoSceneBackgroundSchema>;

export const SceneBackgroundSchema = z.discriminatedUnion("type", [
  CustomImageSceneBackgroundSchema,
  CustomVideoSceneBackgroundSchema,
]);

export type SceneBackground = z.infer<typeof SceneBackgroundSchema>;
