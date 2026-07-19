import type { BeyondPaperV11 } from "../schemas/bypp.v11.schema";
import type { BeyondPaperV12 } from "../schemas/bypp.v12.schema";
import type { Migrator } from "./types";

/**
 * v12 → v11 (downgrade): mirror of `v11-to-v12`. **Lossy.**
 *
 * v11 has no `actionRoll` widget variant, so those widgets are dropped and
 * their uids pruned from every `sheet.widgetUids`, leaving no dangling
 * references behind (mirrors how `v9-to-v8` handles the `wheel` variant).
 * v11 widgets also have no `actionsVariablesUids`, so the field is stripped
 * from every surviving widget.
 *
 * Both losses are silent by nature: a v11 reader has no way to express "roll
 * this variable from this widget", so there is nothing to fold the actions
 * into. The bound `roll` variables themselves stay in `variables[]` — they
 * are ordinary variables that a v11 reader still understands, just no longer
 * reachable from the sheet.
 *
 * The v11 schema validation that runs after this migrator (see `migrate.ts`)
 * catches any missed cleanup.
 */
export const v12ToV11: Migrator<BeyondPaperV12, BeyondPaperV11> = (v12) => {
  const { widgets, sheets, ...rest } = v12;

  const droppedWidgetUids = new Set(
    widgets.filter((w) => w.type === "actionRoll").map((w) => w.uid),
  );

  const v11Widgets = widgets
    .filter((w) => w.type !== "actionRoll")
    .map((widget) => {
      const { actionsVariablesUids: _actionsVariablesUids, ...widgetRest } =
        widget;
      return widgetRest;
    });

  const v11Sheets = sheets.map((sheet) => ({
    ...sheet,
    widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgetUids.has(uid)),
  }));

  return {
    ...rest,
    version: 11,
    widgets: v11Widgets,
    sheets: v11Sheets,
  } as BeyondPaperV11;
};
