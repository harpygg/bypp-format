/**
 * Scene map schema as **introduced in bypp format v13** — v3 with an optional
 * per-file `credit` (see `with-credit.v1.schema`) on BOTH variants.
 *
 * Battle maps are the most commonly-bought art in a bundle, so this is the
 * mixin's headline case: a cartographer's map dropped into an otherwise CC-BY
 * bundle can now say so on the file itself.
 *
 * Unlike the v10 fork — where only `customImage` changed, because
 * `customVideo` already carried its own `videoDimensions` — credit applies to
 * both. An animated map is somebody's work exactly as much as a still one, and
 * a reader that renders a credit overlay must not have to ask which variant
 * it is looking at.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import {
  CustomImageSceneMapV3Schema,
  CustomVideoSceneMapV3Schema,
} from "./scene-map.v3.schema";

export const CustomImageSceneMapV4Schema = CustomImageSceneMapV3Schema.merge(
  WithCreditV1Schema,
);

export type CustomImageSceneMapV4 = z.infer<typeof CustomImageSceneMapV4Schema>;

export const CustomVideoSceneMapV4Schema = CustomVideoSceneMapV3Schema.merge(
  WithCreditV1Schema,
);

export type CustomVideoSceneMapV4 = z.infer<typeof CustomVideoSceneMapV4Schema>;

export const SceneMapV4Schema = z.discriminatedUnion("type", [
  CustomImageSceneMapV4Schema,
  CustomVideoSceneMapV4Schema,
]);

export type SceneMapV4 = z.infer<typeof SceneMapV4Schema>;
