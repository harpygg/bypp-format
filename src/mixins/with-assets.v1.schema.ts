import { z } from "zod";
import { AssetUidSchema } from "../uid";

/**
 * Mixin: an optional list of asset UIDs attached to an item, in display
 * order.
 *
 * The actual asset definitions (images, videos, audio…) live in the
 * bundle's top-level `assets[]` array — this mixin only carries
 * references.
 */
export const WithAssetsV1Schema = z.object({
  assetUids: z.array(AssetUidSchema).optional(),
});
