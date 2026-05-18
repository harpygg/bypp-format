import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import {
  SceneBackgroundUidSchema,
  SceneMapUidSchema,
  SceneUidSchema,
} from "../uid";

/**
 * How a scene is meant to be played at the table.
 *
 *  - `2d_vtt` — top-down virtual tabletop (Roll20 / Foundry style).
 *  - `3d_vtt` — 3D scene with full camera control.
 *  - `totm` — "theater of the mind", no map — the scene is purely
 *    narrative.
 *
 * Optional — when absent, readers fall back to their default mode.
 */
export const SceneGameModeV1Schema = z.enum(["2d_vtt", "3d_vtt", "totm"]);

export type SceneGameModeV1 = z.infer<typeof SceneGameModeV1Schema>;

/**
 * A scene — a playable space attached to a place entity. Each scene
 * carries the visual stage (map + background), the lighting, weather,
 * and gameplay mode.
 *
 * Fields:
 *  - `name` — display label of the scene (e.g. "Tavern - Common Room").
 *  - `mapUid` — optional reference to a scene-map (the playable floor /
 *    grid). `null` means no map (a TOTM scene, or an outdoor backdrop-
 *    only scene).
 *  - `backgroundUid` — optional reference to a scene-background (a
 *    fullscreen image / video shown behind the map or as the sole
 *    visual in mapless scenes).
 *  - `lightPositionX/Y/Z` — 3D light position when `useCustomLightPosition`
 *    is true. Otherwise the reader places the light automatically.
 *  - `lightIntensity` — multiplier on the main directional light's
 *    brightness.
 *  - `lightColor` — main light color, as a CSS color string.
 *  - `useCustomLightPosition` — when `true`, the reader uses the
 *    `lightPositionX/Y/Z` triple; when `false` or absent, the reader
 *    computes positioning from the scene context.
 *  - `indoorLight` — when `true`, the reader uses indoor lighting
 *    defaults (warmer, dimmer); when `false` or absent, daylight defaults.
 *  - `weather` — optional atmospheric overlay. `"fog"` adds volumetric
 *    fog, `"dark"` dims the scene. `"none"` is identical to absent /
 *    `null`.
 *  - `gameMode` — see `SceneGameModeV1Schema` above.
 */
export const SceneV1Schema = z
  .object({ uid: SceneUidSchema })
  .merge(WithNameV1Schema)
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
    gameMode: SceneGameModeV1Schema.optional(),
  });

export type SceneV1 = z.infer<typeof SceneV1Schema>;
