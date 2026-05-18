import { z } from "zod";
import { WithImagesUrlsV1Schema } from "../mixins/with-images-urls.v1.schema";
import { WithNameV1Schema } from "../mixins/with-name.v1.schema";
import { WithVideoUrlsV1Schema } from "../mixins/with-video-urls.v1.schema";
import { SceneMapUidSchema } from "../uid";

/**
 * Tactical grid overlaid on top of a scene's map. Drives token placement
 * and movement at the table.
 *
 * Fields:
 *  - `type` — `square` (axis-aligned squares), `hexv` (vertical-pointy
 *    hexes — flat top), or `hexh` (horizontal-pointy hexes — pointy top).
 *  - `size` — cell size in pixels (the on-screen distance between two
 *    adjacent grid intersections).
 *  - `sizeInUnit` — cell size in the game's measurement unit (e.g.
 *    `5` for 5 feet per square in D&D-like systems).
 *  - `measureUnit` — the unit name (e.g. `"ft"`, `"m"`).
 *  - `lineWidth` — pixel width of the grid lines when rendered.
 *  - `color` — grid line color as a CSS string. `null` means "use the
 *    reader's default".
 *  - `offset` — pixel offset of the grid's origin from the map's
 *    top-left, lets producers align the grid to a non-zero anchor point
 *    on their map image.
 */
export const GridDataV1Schema = z.object({
  type: z.enum(["square", "hexv", "hexh"]),
  size: z.number(),
  sizeInUnit: z.number(),
  measureUnit: z.string(),
  lineWidth: z.number(),
  color: z.string().nullable().optional(),
  offset: z.object({ x: z.number(), z: z.number() }),
});

export type GridDataV1 = z.infer<typeof GridDataV1Schema>;

/**
 * Common fields for every scene-map variant. The `grid` is always
 * present — even mapless / featureless backdrops carry a grid (it might
 * just be invisible to players).
 */
export const SceneMapBaseV1Schema = z
  .object({ uid: SceneMapUidSchema })
  .merge(WithNameV1Schema)
  .extend({
    grid: GridDataV1Schema,
  });

export type SceneMapBaseV1 = z.infer<typeof SceneMapBaseV1Schema>;

/**
 * A static image used as a scene map. The image URLs come from the
 * standard image-URLs mixin (multiple crops available).
 */
export const CustomImageSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema,
).extend({
  type: z.literal("customImage"),
});

export type CustomImageSceneMapV1 = z.infer<
  typeof CustomImageSceneMapV1Schema
>;

/**
 * A looping video used as a scene map (animated environments — flowing
 * water, fire, parallax skies, …).
 */
export const CustomVideoSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithVideoUrlsV1Schema,
).extend({
  type: z.literal("customVideo"),
});

export type CustomVideoSceneMapV1 = z.infer<
  typeof CustomVideoSceneMapV1Schema
>;

/**
 * A scene map sourced from a DungeonDraft VTT file (.dd2vtt). Carries the
 * baked-in image URLs (the .dd2vtt format embeds an image plus lights /
 * walls metadata — readers may use the image only here, deferring the
 * advanced metadata to a future schema bump).
 */
export const Dd2VttSceneMapV1Schema = SceneMapBaseV1Schema.merge(
  WithImagesUrlsV1Schema,
).extend({
  type: z.literal("dd2vtt"),
});

export type Dd2VttSceneMapV1 = z.infer<typeof Dd2VttSceneMapV1Schema>;

/**
 * Discriminated union of all scene-map variants. Narrow with `map.type`.
 */
export const SceneMapV1Schema = z.discriminatedUnion("type", [
  CustomImageSceneMapV1Schema,
  CustomVideoSceneMapV1Schema,
  Dd2VttSceneMapV1Schema,
]);

export type SceneMapV1 = z.infer<typeof SceneMapV1Schema>;
