import type { BeyondPaperV16 } from "../schemas/bypp.v16.schema";
import type { BeyondPaperV17 } from "../schemas/bypp.v17.schema";
import type { Migrator } from "./types";

/**
 * v16 → v17 (upgrade): a pure version bump. **Non-lossy.**
 *
 * `icon` is optional on both `tags[]` and `tagCategories[]`, so a v16 tag is
 * already a valid v17 one — it simply names no icon and reads as its label
 * alone, which is what every reader did before v17.
 *
 * Nothing is synthesized. A tag's name is not an icon name: guessing that
 * "Weapon" means `"sword"` would put a picture in the document that its
 * author never chose, in whatever language the author happened to write.
 */
export const v16ToV17: Migrator<BeyondPaperV16, BeyondPaperV17> = (v16) => ({
  ...v16,
  version: 17,
});
