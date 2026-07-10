import type { BeyondPaperV8 } from "../schemas/bypp.v8.schema";
import type { BeyondPaperV9 } from "../schemas/bypp.v9.schema";
import type { Migrator } from "./types";

/**
 * v9 → v8 (downgrade): mirror of `v8-to-v9`. **Lossy.**
 *
 * v8 has no `wheel` widget variant, so those widgets are dropped, and their
 * uids pruned from every `sheet.widgetUids` so the downgraded bundle carries
 * no dangling references (the v8 schema doesn't enforce referential
 * integrity, but leaving orphans behind would be sloppy and could trip
 * readers that do their own checks). v8's style is `StyleV2` (no `rotation`),
 * so `rotation` is stripped from every widget `style` and from every entry in
 * a sheet's `styles` cascade. v8's `number` variable is `NumberVariableV1`
 * (no `min`/`max`/`step`), so those are stripped from every number variable.
 *
 * The v8 schema validation that runs after this migrator (see `migrate.ts`)
 * catches any missed cleanup.
 */
export const v9ToV8: Migrator<BeyondPaperV9, BeyondPaperV8> = (v9) => {
  const { widgets, sheets, variables, ...rest } = v9;

  const droppedWidgetUids = new Set(
    widgets.filter((w) => w.type === "wheel").map((w) => w.uid),
  );

  const v8Widgets = widgets
    .filter((w) => w.type !== "wheel")
    .map((widget) => ({ ...widget, style: stripRotation(widget.style) }));

  const v8Sheets = sheets.map((sheet) => ({
    ...sheet,
    widgetUids: sheet.widgetUids.filter((uid) => !droppedWidgetUids.has(uid)),
    styles: sheet.styles
      ? Object.fromEntries(
          Object.entries(sheet.styles).map(([target, style]) => [
            target,
            stripRotation(style),
          ]),
        )
      : sheet.styles,
  }));

  const v8Variables = variables.map((variable) => {
    if (variable.type !== "number") {
      return variable;
    }
    const { min: _min, max: _max, step: _step, ...rest } = variable;
    return rest;
  });

  return {
    ...rest,
    version: 8,
    widgets: v8Widgets,
    sheets: v8Sheets,
    variables: v8Variables,
  } as BeyondPaperV8;
};

// `style` is nullable/absent; only a real object can carry `rotation`.
const stripRotation = <T extends { rotation?: unknown }>(
  style: T | null | undefined,
): T | null | undefined => {
  if (!style) {
    return style;
  }
  const { rotation: _rotation, ...rest } = style;
  return rest as T;
};
