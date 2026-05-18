import { z } from "zod";
import { SceneUidSchema } from "../uid";

/**
 * Mixin: a list of scene UIDs attached to an item, in display order.
 *
 * The scene definitions live in the bundle's top-level `scenes[]` array
 * — this mixin only carries references.
 */
export const WithScenesV1Schema = z.object({
  scenesUids: z.array(SceneUidSchema),
});
