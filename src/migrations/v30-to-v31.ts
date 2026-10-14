import type { BeyondPaperV30 } from "../schemas/bypp.v30.schema";
import type { BeyondPaperV31 } from "../schemas/bypp.v31.schema";
import type { Migrator } from "./types";

/**
 * v30 → v31 (upgrade). **Non-lossy** for what a reader draws.
 *
 * A spawn's `ownerUid` becomes `owner: { kind: "entity", uid }`: in v30 only
 * an entity bore one. A v30 entity has no modes. An `entityGrid` loses the
 * tile settings v31 dropped (`listOptionStyle`, `formatSlug`, `objectFit`,
 * `imageHeight`), which no reader drew any more. Nothing else moves: every
 * other v31 field is new and optional.
 */
export const v30ToV31: Migrator<BeyondPaperV30, BeyondPaperV31> = (v30) => ({
  ...v30,
  version: 31,
  entities: v30.entities.map((entity) => ({ ...entity, modes: [] })),
  entitySpawns: v30.entitySpawns.map(({ ownerUid, ...spawn }) =>
    ownerUid ? { ...spawn, owner: { kind: "entity", uid: ownerUid } } : spawn,
  ),
  widgets: v30.widgets.map((widget) => {
    if (widget.type !== "entityGrid") {
      return widget;
    }
    const {
      listOptionStyle: _listOptionStyle,
      formatSlug: _formatSlug,
      objectFit: _objectFit,
      imageHeight: _imageHeight,
      ...grid
    } = widget;
    return grid;
  }),
});
