import type { BeyondPaperV4 } from "../schemas/bypp.v4.schema";
import type { BeyondPaperV5 } from "../schemas/bypp.v5.schema";
import type { Migrator } from "./types";

/**
 * v5 → v4 (downgrade): mirror of `v4-to-v5`. **Lossy.**
 *
 * v4 has neither the `entityImage` widget variant nor the `image`
 * variable variant, so both are dropped:
 *
 *   • `entityImage` widgets are removed, and their uids pruned from
 *     every `sheet.widgetUids` so the downgraded bundle carries no
 *     dangling references (the v4 schema doesn't enforce referential
 *     integrity, but leaving orphans behind would be sloppy and could
 *     trip readers that do their own checks).
 *   • `image` variables are removed.
 *
 * The v4 schema validation that runs after this migrator (see
 * `migrate.ts`) catches any missed cleanup.
 */
export const v5ToV4: Migrator<BeyondPaperV5, BeyondPaperV4> = (v5) => {
  const { widgets, sheets, variables, ...rest } = v5;

  const droppedWidgetUids = new Set(
    widgets.filter((w) => w.type === "entityImage").map((w) => w.uid),
  );

  const v4Widgets = widgets.filter((w) => w.type !== "entityImage");

  const v4Sheets = sheets.map((sheet) => ({
    ...sheet,
    widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgetUids.has(uid)),
  }));

  const v4Variables = variables.filter((v) => v.type !== "image");

  return {
    ...rest,
    version: 4,
    widgets: v4Widgets,
    sheets: v4Sheets,
    variables: v4Variables,
  } as BeyondPaperV4;
};
