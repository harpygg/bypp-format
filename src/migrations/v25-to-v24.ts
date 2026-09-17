import type { BeyondPaperV24 } from "../schemas/bypp.v24.schema";
import type { BeyondPaperV25 } from "../schemas/bypp.v25.schema";
import type { Migrator } from "./types";

/**
 * v25 → v24 (downgrade): mirror of `v24-to-v25`. **Lossy — the theme is
 * dropped whole.**
 *
 * v24 has nowhere to put it. There is no older field to fold it into either:
 * every style v24 can hold hangs off a widget, and the elements a theme paints
 * — a heading, a quote, an entity named mid-sentence — are not widgets and
 * have no uid to hang anything on. So `theme` goes, and with it the slug, the
 * per-element styles and the per-tag ones.
 *
 * What survives is everything else: the tags themselves stay in `tags[]`
 * (nothing referenced them BY the theme except the theme), the markdown and
 * HTML of the content is untouched, and every widget style is untouched. The
 * document comes out looking exactly as it did in every version before v25 —
 * painted by whatever surrounds it — which is the only thing v24 could ever
 * say about prose.
 *
 * A round trip v25 → v24 → v25 therefore returns a document with no theme at
 * all. This is the one edge worth knowing about before downgrading a themed
 * bundle.
 */
export const v25ToV24: Migrator<BeyondPaperV25, BeyondPaperV24> = ({
  theme: _theme,
  ...v25
}) => ({
  ...v25,
  version: 24,
});
