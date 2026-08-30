import type { BeyondPaperV16 } from "../schemas/bypp.v16.schema";
import type { BeyondPaperV17 } from "../schemas/bypp.v17.schema";
import type { Migrator } from "./types";

/**
 * v17 → v16 (downgrade): mirror of `v16-to-v17`. **Lossy.**
 *
 * v16 has nowhere to put a tag's or a category's `icon`, so the field is
 * dropped and the labels go back to standing on their own.
 *
 * The tags themselves stay. An icon-less tag is perfectly expressible in v16,
 * and dropping one to save a decoration would strip it from every
 * `entities[].tagsUid` naming it and orphan the tags of a dropped category —
 * deleting the author's classification to avoid losing a picture.
 */
export const v17ToV16: Migrator<BeyondPaperV17, BeyondPaperV16> = (v17) => ({
  ...v17,
  version: 16,
  tags: v17.tags.map(({ icon: _icon, ...rest }) => rest),
  tagCategories: v17.tagCategories.map(({ icon: _icon, ...rest }) => rest),
});
