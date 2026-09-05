import type { BeyondPaperV17 } from "../schemas/bypp.v17.schema";
import type { BeyondPaperV18 } from "../schemas/bypp.v18.schema";
import type { Migrator } from "./types";

/**
 * v18 → v17 (downgrade): mirror of `v17-to-v18`. **Lossy.**
 *
 * v17 has nowhere to put `requires`, so the list is dropped. The document
 * still reads the same items — the references inside its content are
 * untouched — it just no longer says so up front. A v17 reader installing it
 * where the required bundle is absent sees dangling references, which is what
 * every v17 reader saw before requirements existed.
 */
export const v18ToV17: Migrator<BeyondPaperV18, BeyondPaperV17> = ({
  requires: _requires,
  ...v18
}) => ({
  ...v18,
  version: 17,
});
