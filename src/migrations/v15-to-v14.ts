import type { BeyondPaperV14 } from "../schemas/bypp.v14.schema";
import type { BeyondPaperV15 } from "../schemas/bypp.v15.schema";
import type { Migrator } from "./types";

/**
 * The URL pattern every v14 producer emitted. It was never stored: producers
 * built it from the family name at export time, and Harpy was the only one
 * shipping `.bypp` files while v14 was current — so reproducing it here is
 * faithful to the corpus of real v14 documents rather than an invention.
 *
 * A v15 document from another producer may well name a typeface that does not
 * exist at this address. That degrades gracefully: a reader that cannot fetch
 * the file falls back to its own font, which is exactly what already happened
 * under v14 whenever a producer wrote an arbitrary family name.
 */
const LEGACY_FONT_BASE_URL = "https://harpy.gg/assets/fonts";

/**
 * v15 → v14 (downgrade): mirror of `v14-to-v15`. **Lossy.**
 *
 * v14 requires every dialect to carry `font: { fontFamily, fontUrl }`, with
 * the URL url-validated. A v15 dialect that names no family therefore cannot
 * be expressed at all and is **dropped** — inventing a typeface for it would
 * put an editorial choice in the file that its author never made.
 *
 * Dropping a dialect dangles nothing: `spokenByEntitiesUids` points FROM the
 * dialect TO entities, and no other category references a dialect uid. The
 * entities stay, they simply lose the association.
 */
export const v15ToV14: Migrator<BeyondPaperV15, BeyondPaperV14> = (v15) => ({
  ...v15,
  version: 14,
  dialects: v15.dialects.flatMap(({ fontFamily, ...rest }) =>
    fontFamily === undefined
      ? []
      : [
          {
            ...rest,
            font: {
              fontFamily,
              fontUrl: `${LEGACY_FONT_BASE_URL}/${fontFamily}.woff2`,
            },
          },
        ],
  ),
});
