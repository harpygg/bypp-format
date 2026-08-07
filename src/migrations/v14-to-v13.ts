import type { BeyondPaperV13 } from "../schemas/bypp.v13.schema";
import type { BeyondPaperV14 } from "../schemas/bypp.v14.schema";
import type { Migrator } from "./types";

/**
 * v14 → v13 (downgrade): mirror of `v13-to-v14`. **Lossy.**
 *
 * v13 has no bundle-level `image`, so the cover is dropped. There is nothing
 * to fold it into: it is the picture OF the bundle, and turning it into an
 * asset or an entity would add content the bundle never declared — a reader
 * would then list a phantom item, and every uid-keyed reference in the
 * document would have to be rewritten around it.
 *
 * A downgraded bundle is therefore simply coverless, which is all v13 could
 * express. Its `credit` goes with it: a credit for a file that is no longer
 * in the document credits nobody.
 *
 * The v13 schema validation that runs after this migrator (see `migrate.ts`)
 * would strip an unknown key anyway; doing it explicitly keeps the downgrade
 * self-documenting.
 */
export const v14ToV13: Migrator<BeyondPaperV14, BeyondPaperV13> = (v14) => {
  const { image: _image, ...rest } = v14;
  return {
    ...rest,
    version: 13,
  };
};
