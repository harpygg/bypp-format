import { z } from "zod";
import { AssetUidSchema } from "../uid";

export const WithAssetsSchema = z.object({
  assetUids: z.array(AssetUidSchema).optional(),
});
