import { z } from "zod";
import { SceneUidSchema } from "../uid";

/**
 * Mixin: ordered list of scene UIDs. In v2, defaults to `[]` so producers
 * can omit the field on items that own no scenes.
 */
export const WithScenesV2Schema = z.object({
  scenesUids: z.array(SceneUidSchema).default([]),
});
