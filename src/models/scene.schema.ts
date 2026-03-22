import { z } from "zod";
import { WithNameSchema } from "../mixins/with-name.schema";
import { SceneBackgroundUidSchema, SceneMapUidSchema, SceneUidSchema } from "../uid";

export const SceneGameModeSchema = z.enum(["2d_vtt", "3d_vtt", "totm"]);

export type SceneGameMode = z.infer<typeof SceneGameModeSchema>;

export const SceneSchema = z
  .object({ uid: SceneUidSchema })
  .merge(WithNameSchema)
  .extend({
    mapUid: SceneMapUidSchema.nullable().optional(),
    backgroundUid: SceneBackgroundUidSchema.nullable().optional(),
    lightPositionX: z.number().optional(),
    lightPositionY: z.number().optional(),
    lightPositionZ: z.number().optional(),
    lightIntensity: z.number().optional(),
    lightColor: z.string().optional(),
    useCustomLightPosition: z.boolean().optional(),
    indoorLight: z.boolean().optional(),
    weather: z.enum(["none", "fog", "dark"]).nullable().optional(),
    gameMode: SceneGameModeSchema.optional(),
  });

export type Scene = z.infer<typeof SceneSchema>;
