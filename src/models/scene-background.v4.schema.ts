/**
 * Scene background schema as **introduced in bypp format v13** — v3 with an
 * optional per-file `credit` (see `with-credit.v1.schema`) on BOTH variants.
 *
 * A backdrop is bought or commissioned art like any other, and the animated
 * `customVideo` variant is no less somebody's work than the still one — so,
 * unlike the v10 fork (which only touched `customImage`, video already
 * carrying its own dimensions), credit lands on both. A reader rendering a
 * credit overlay should never need to branch on the variant.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import {
  CustomImageSceneBackgroundV3Schema,
  CustomVideoSceneBackgroundV3Schema,
} from "./scene-background.v3.schema";

export const CustomImageSceneBackgroundV4Schema =
  CustomImageSceneBackgroundV3Schema.merge(WithCreditV1Schema);

export type CustomImageSceneBackgroundV4 = z.infer<
  typeof CustomImageSceneBackgroundV4Schema
>;

export const CustomVideoSceneBackgroundV4Schema =
  CustomVideoSceneBackgroundV3Schema.merge(WithCreditV1Schema);

export type CustomVideoSceneBackgroundV4 = z.infer<
  typeof CustomVideoSceneBackgroundV4Schema
>;

export const SceneBackgroundV4Schema = z.discriminatedUnion("type", [
  CustomImageSceneBackgroundV4Schema,
  CustomVideoSceneBackgroundV4Schema,
]);

export type SceneBackgroundV4 = z.infer<typeof SceneBackgroundV4Schema>;
