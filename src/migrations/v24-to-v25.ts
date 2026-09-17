import type { BeyondPaperV24 } from "../schemas/bypp.v24.schema";
import type { BeyondPaperV25 } from "../schemas/bypp.v25.schema";
import type { Migrator } from "./types";

/**
 * v24 → v25 (upgrade): a pure version bump. **Non-lossy.**
 *
 * A v24 document never said how its prose should look, so it says nothing
 * here: `theme` is left ABSENT rather than set to an empty theme. The
 * difference is not cosmetic. An empty theme is a document that has decided
 * its content wears no style of its own; no theme at all is a document that
 * never spoke about it — and that is what every pre-v25 document is. A reader
 * installing one is free to keep painting it the way it already did.
 *
 * Nothing is inferred. A v24 document's widgets carry styles, and one of them
 * might look like a heading, but guessing a theme out of them would put a
 * decision in the document that its author never made.
 */
export const v24ToV25: Migrator<BeyondPaperV24, BeyondPaperV25> = (v24) => ({
  ...v24,
  version: 25,
});
