import type { ChoiceOptionV1 } from "../models/variable.v1.schema";
import type { ChoiceOptionV27 } from "../models/variable.v11.schema";
import type { BeyondPaperV26 } from "../schemas/bypp.v26.schema";
import type { BeyondPaperV27 } from "../schemas/bypp.v27.schema";
import type { Migrator } from "./types";

/**
 * v27 → v26 (downgrade): mirror of `v26-to-v27`. **Lossy — a variable's label
 * and a choice option's label keep one language.**
 *
 * v26 has one string per label. The `en` entry is kept, else the first
 * non-empty one; the other locales are dropped, on every variable, on the
 * sheets' choice options and on the data-tables' choice columns alike. An
 * option label with no text at all becomes `""` (v26 requires one); a variable
 * label with none is dropped, and a reader falls back to `name`.
 */
const oneLanguage = (label: Record<string, string>) =>
  label.en || Object.values(label).find((value) => value.length > 0);

const flat = ({ label, ...option }: ChoiceOptionV27): ChoiceOptionV1 => ({
  ...option,
  label: oneLanguage(label) ?? "",
});

export const v27ToV26: Migrator<BeyondPaperV27, BeyondPaperV26> = (v27) => ({
  ...v27,
  version: 26,
  variables: v27.variables.map((variable) => {
    const label = variable.label && oneLanguage(variable.label);
    return variable.type === "choice"
      ? { ...variable, label, options: variable.options?.map(flat) }
      : { ...variable, label };
  }),
  dataTables: v27.dataTables.map((table) => ({
    ...table,
    columns: table.columns.map((column) =>
      column.type === "choice"
        ? { ...column, options: column.options?.map(flat) }
        : column,
    ),
  })),
});
