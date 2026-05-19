import type { BeyondPaperV2 } from "../schemas/bypp.v2.schema";
import type { BeyondPaperV3 } from "../schemas/bypp.v3.schema";
import type { Migrator } from "./types";

/**
 * v2 → v3: adds licensing & attribution metadata.
 *
 * v2 bundles carry no license/author info. The safe default is to treat the
 * content as fully restricted (`"ARR"` — all rights reserved) and the author
 * as unknown. Importers SHOULD prompt the user to set real values before
 * redistributing.
 */
export const v2ToV3: Migrator<BeyondPaperV2, BeyondPaperV3> = (v2) => ({
  ...v2,
  version: 3,
  license: "ARR",
  licenseVersion: "4.0",
  attribution: { authorName: "Unknown" },
});
