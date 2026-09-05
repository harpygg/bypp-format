import type { BeyondPaperV17 } from "../schemas/bypp.v17.schema";
import type { BeyondPaperV18 } from "../schemas/bypp.v18.schema";
import type { Migrator } from "./types";

/**
 * v17 → v18 (upgrade): a pure version bump. **Non-lossy.**
 *
 * A v17 document never named a requirement, so it requires nothing: `requires`
 * is set to the empty list, which is exactly how every v17 reader treated the
 * document — as self-contained.
 *
 * Nothing is inferred. A dangling reference in a v17 document may well point
 * at something another bundle provides, but guessing which one would put a
 * dependency in the document that its author never declared.
 */
export const v17ToV18: Migrator<BeyondPaperV17, BeyondPaperV18> = (v17) => ({
  ...v17,
  version: 18,
  requires: [],
});
