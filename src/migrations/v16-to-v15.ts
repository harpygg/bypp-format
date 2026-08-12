import type { BeyondPaperV15 } from "../schemas/bypp.v15.schema";
import type { BeyondPaperV16 } from "../schemas/bypp.v16.schema";
import type { Migrator } from "./types";

/**
 * v16 → v15 (downgrade): mirror of `v15-to-v16`. **Lossy.**
 *
 * v15 has nowhere to put a variable's `icon`, so the field is dropped and
 * the sheet's grouping goes with it: a v15 reader shows one flat list of
 * fields, which is what it did before v16 existed.
 *
 * The variables themselves stay — unlike a dialect that names no typeface,
 * an icon-less variable is perfectly expressible in v15. Dropping the
 * variable instead of the field would dangle every `widgets[].variableUid`
 * pointing at it and delete the entity data keyed by its uid, to save a
 * decoration.
 */
export const v16ToV15: Migrator<BeyondPaperV16, BeyondPaperV15> = (v16) => ({
  ...v16,
  version: 15,
  variables: v16.variables.map(({ icon: _icon, ...rest }) => rest),
});
