import type { ChoiceOptionV1 } from "../models/variable.v1.schema";
import type { ChoiceOptionV27 } from "../models/variable.v11.schema";
import type { BeyondPaperV26 } from "../schemas/bypp.v26.schema";
import type { BeyondPaperV27 } from "../schemas/bypp.v27.schema";
import type { Migrator } from "./types";

/**
 * v26 → v27 (upgrade): every variable's `label` and every choice option's
 * `label` string becomes a one-locale `TranslatableText`, `{ en: label }`.
 * **Non-lossy.**
 *
 * A v26 label says nothing about its language. `en` is the locale a v26
 * producer was expected to keep when it had to flatten several, so it is the
 * one the string is filed under; a reader asked for another locale falls back
 * to it like it does for any other `TranslatableText`.
 */
const translatable = ({
  label,
  ...option
}: ChoiceOptionV1): ChoiceOptionV27 => ({
  ...option,
  label: { en: label },
});

export const v26ToV27: Migrator<BeyondPaperV26, BeyondPaperV27> = (v26) => ({
  ...v26,
  version: 27,
  variables: v26.variables.map((variable) => {
    const label =
      variable.label === undefined ? undefined : { en: variable.label };
    return variable.type === "choice"
      ? { ...variable, label, options: variable.options?.map(translatable) }
      : { ...variable, label };
  }),
  dataTables: v26.dataTables.map((table) => ({
    ...table,
    columns: table.columns.map((column) =>
      column.type === "choice"
        ? { ...column, options: column.options?.map(translatable) }
        : column,
    ),
  })),
});
