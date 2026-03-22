import { z } from "zod";
import { WithImagesUrlsSchema } from "../mixins/with-images-urls.schema";
import { WithNameSchema } from "../mixins/with-name.schema";
import { WithVideoUrlsSchema } from "../mixins/with-video-urls.schema";
import { SceneMapUidSchema } from "../uid";

export const GridDataSchema = z.object({
  type: z.enum(["square", "hexv", "hexh"]),
  size: z.number(),
  sizeInUnit: z.number(),
  measureUnit: z.string(),
  lineWidth: z.number(),
  color: z.string().nullable().optional(),
  offset: z.object({ x: z.number(), z: z.number() }),
});

export type GridData = z.infer<typeof GridDataSchema>;

export const SceneMapBaseSchema = z
  .object({ uid: SceneMapUidSchema })
  .merge(WithNameSchema)
  .extend({
    grid: GridDataSchema,
  });

export type SceneMapBase = z.infer<typeof SceneMapBaseSchema>;

export const CustomImageSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema,
).extend({
  type: z.literal("customImage"),
});

export type CustomImageSceneMap = z.infer<typeof CustomImageSceneMapSchema>;

export const CustomVideoSceneMapSchema = SceneMapBaseSchema.merge(
  WithVideoUrlsSchema,
).extend({
  type: z.literal("customVideo"),
});

export type CustomVideoSceneMap = z.infer<typeof CustomVideoSceneMapSchema>;

export const Dd2VttSceneMapSchema = SceneMapBaseSchema.merge(
  WithImagesUrlsSchema,
).extend({
  type: z.literal("dd2vtt"),
});

export type Dd2VttSceneMap = z.infer<typeof Dd2VttSceneMapSchema>;

export const SceneMapSchema = z.discriminatedUnion("type", [
  CustomImageSceneMapSchema,
  CustomVideoSceneMapSchema,
  Dd2VttSceneMapSchema,
]);

export type SceneMap = z.infer<typeof SceneMapSchema>;
