import type { BeyondPaperV18 } from "../schemas/bypp.v18.schema";
import type { BeyondPaperV19 } from "../schemas/bypp.v19.schema";
import type { Migrator } from "./types";

/**
 * v19 → v18 (downgrade): mirror of `v18-to-v19`. **Lossy.**
 *
 * v18 has no field for a link between entities, so every `entityRef` and
 * `entityLookup` variable is dropped, and so is every `entityGrid` widget.
 * What referenced them goes with them: the values the entities stored for a
 * dropped variable (a v18 reader would find no attribute to read them under),
 * a sheet's mention of a dropped widget, and a widget bound to a dropped
 * variable, which is unbound rather than left pointing at nothing.
 */
export const v19ToV18: Migrator<BeyondPaperV19, BeyondPaperV18> = (v19) => {
  const droppedVariables = new Set(
    v19.variables
      .filter((v) => v.type === "entityRef" || v.type === "entityLookup")
      .map((v) => v.uid),
  );
  const droppedWidgets = new Set(
    v19.widgets.filter((w) => w.type === "entityGrid").map((w) => w.uid),
  );

  return {
    ...v19,
    version: 18,
    variables: v19.variables.filter((v) => !droppedVariables.has(v.uid)),
    widgets: v19.widgets.flatMap((w) => {
      if (w.type === "entityGrid") {
        return [];
      }
      if (w.variableUid && droppedVariables.has(w.variableUid)) {
        const { variableUid: _variableUid, ...unbound } = w;
        return [unbound];
      }
      return [w];
    }),
    sheets: v19.sheets.map((sheet) => ({
      ...sheet,
      widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgets.has(uid)),
    })),
    entities: v19.entities.map((entity) => {
      if (!entity.data) {
        return entity;
      }
      const data = Object.fromEntries(
        Object.entries(entity.data).filter(
          ([uid]) => !droppedVariables.has(uid),
        ),
      );
      return Object.keys(data).length > 0
        ? { ...entity, data }
        : (({ data: _data, ...rest }) => rest)(entity);
    }),
  };
};
