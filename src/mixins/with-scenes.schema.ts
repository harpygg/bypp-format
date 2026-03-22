import { z } from "zod";
import { SceneUidSchema } from "../uid";

export const WithScenesSchema = z.object({
  scenesUids: z.array(SceneUidSchema),
});
