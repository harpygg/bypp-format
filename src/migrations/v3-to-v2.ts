import type { BeyondPaperV2 } from "../schemas/bypp.v2.schema";
import type { BeyondPaperV3 } from "../schemas/bypp.v3.schema";
import type { Migrator } from "./types";

/**
 * v3 → v2 (downgrade): strips licensing & attribution metadata.
 *
 * **Lossy by design.** Going back to v2 erases:
 *  - `license`, `licenseVersion`
 *  - `attribution` (author credit)
 *  - `parentAttribution` (lineage)
 *  - `creatorLinks`
 *
 * The downgraded bundle no longer carries any legal metadata — consumers
 * SHOULD avoid this path unless interoperating with a v2-only reader.
 */
export const v3ToV2: Migrator<BeyondPaperV3, BeyondPaperV2> = (v3) => {
  const {
    license,
    licenseVersion,
    attribution,
    parentAttribution,
    creatorLinks,
    ...rest
  } = v3;
  void license;
  void licenseVersion;
  void attribution;
  void parentAttribution;
  void creatorLinks;

  return { ...rest, version: 2 };
};
