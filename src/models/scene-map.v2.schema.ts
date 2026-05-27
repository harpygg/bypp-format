import { z } from "zod";
import { WithImagesUrlsV2Schema } from "../mixins/with-images-urls.v2.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithVideoUrlsV2Schema } from "../mixins/with-video-urls.v2.schema";
import { SceneMapUidSchema } from "../uid";
import { GridDataV1Schema } from "./scene-map.v1.schema";

/**
 * Well-known VTT exchange formats producers may have sourced a
 * customImage / customVideo scene map from. Use this as a discovery aid;
 * the wire field is just `z.string()` so the format stays open.
 *
 *  - `dd2vtt` — DungeonDraft VTT export
 *  - `uvtt`   — Universal VTT (open spec)
 *  - `fvtt`   — Foundry VTT scene export
 */
export const KNOWN_VTT_SOURCE_FORMATS = ["dd2vtt", "uvtt", "fvtt"] as const;
export type KnownVttSourceFormat = (typeof KNOWN_VTT_SOURCE_FORMATS)[number];

/**
 * Scene map — v2 changes:
 *  - `Dd2VttSceneMapV1Schema` discriminator variant removed. The DD2VTT
 *    files are still importable, but they collapse into `customImage`
 *    (or `customVideo`) with the new orthogonal `sourceFormat` annotation
 *    set to `"dd2vtt"`. This keeps the discriminator clean (just two
 *    visual kinds: image vs. video) and lets new source formats join
 *    without bumping the union every time.
 */
export const SceneMapBaseV2Schema = z
  .object({ uid: SceneMapUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    grid: GridDataV1Schema,
    sourceFormat: z.string().optional(),
  });

export type SceneMapBaseV2 = z.infer<typeof SceneMapBaseV2Schema>;

export const CustomImageSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithImagesUrlsV2Schema,
).extend({
  type: z.literal("customImage"),
});

export type CustomImageSceneMapV2 = z.infer<
  typeof CustomImageSceneMapV2Schema
>;

export const CustomVideoSceneMapV2Schema = SceneMapBaseV2Schema.merge(
  WithVideoUrlsV2Schema,
).extend({
  type: z.literal("customVideo"),
});

export type CustomVideoSceneMapV2 = z.infer<
  typeof CustomVideoSceneMapV2Schema
>;

export const SceneMapV2Schema = z.discriminatedUnion("type", [
  CustomImageSceneMapV2Schema,
  CustomVideoSceneMapV2Schema,
]);

export type SceneMapV2 = z.infer<typeof SceneMapV2Schema>;
