import { z } from "zod";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import {
  SceneBackgroundUidSchema,
  SceneMapUidSchema,
  SceneUidSchema,
} from "../uid";

/**
 * Scene — v2 changes:
 *  - `weather` removed. Was a Harpy-specific 3-value enum that didn't
 *    extend cleanly to other readers. Removing the typed slot leaves the
 *    door open for a future, well-designed atmospheric extension.
 *  - `gameMode` removed. Same reason — the 3 modes (`2d_vtt`, `3d_vtt`,
 *    `totm`) reflected Harpy's renderer, not a portable concept.
 *
 * All lighting fields stay (light position / intensity / color / indoor)
 * — those are generic 3D scene parameters useful to any reader that
 * renders the scene.
 */
export const SceneV2Schema = z
  .object({ uid: SceneUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    mapUid: SceneMapUidSchema.optional(),
    backgroundUid: SceneBackgroundUidSchema.optional(),
    lightPositionX: z.number().optional(),
    lightPositionY: z.number().optional(),
    lightPositionZ: z.number().optional(),
    lightIntensity: z.number().optional(),
    lightColor: z.string().optional(),
    useCustomLightPosition: z.boolean().optional(),
    indoorLight: z.boolean().optional(),
  });

export type SceneV2 = z.infer<typeof SceneV2Schema>;
