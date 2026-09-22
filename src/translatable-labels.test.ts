import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { BeyondPaperV26Schema } from "./schemas/bypp.v26.schema";
import { BeyondPaperV27Schema } from "./schemas/bypp.v27.schema";

/**
 * A variable's label and a choice option's label, in every language the
 * document speaks — on a sheet's variables and on a data-table `choice` column.
 */

const document = (
  version: number,
  label: (en: string, fr: string) => unknown,
) => ({
  version,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  variables: [
    {
      uid: "var-class",
      type: "choice",
      name: "Class",
      datasetsUids: [],
      options: [{ uid: "opt-wizard", label: label("Wizard", "Magicien") }],
    },
    {
      uid: "var-str",
      type: "number",
      name: "str",
      label: label("Strength", "Force"),
      datasetsUids: [],
    },
    { uid: "var-dex", type: "number", name: "dex", datasetsUids: [] },
  ],
  dataTables: [
    {
      uid: "dt-profs",
      name: { en: "Proficiencies" },
      columns: [
        { uid: "col-name", type: "text" },
        {
          uid: "col-category",
          type: "choice",
          options: [
            { uid: "opt-tools", label: label("Tools", "Outils"), value: 2 },
          ],
        },
      ],
      rows: [{ uid: "row-1", data: { "col-category": "opt-tools" } }],
    },
  ],
});

const localized = document(27, (en, fr) => ({ en, fr }));

type Labels = {
  variables: { label?: unknown; options?: { label: unknown }[] }[];
  dataTables: { columns: { options?: { label: unknown }[] }[] }[];
};

const labels = (doc: unknown) => {
  const { variables, dataTables } = doc as Labels;
  return {
    variable: variables[0].options?.[0].label,
    column: dataTables[0].columns[1].options?.[0].label,
    attribute: variables[1].label,
  };
};

describe("locale-keyed labels", () => {
  it("is what v27 reads, on a variable and on a column", () => {
    expect(BeyondPaperV27Schema.safeParse(localized).success).toBe(true);
  });

  it("is refused as a plain string by v27", () => {
    const flat = document(27, (en) => en);
    expect(BeyondPaperV27Schema.safeParse(flat).success).toBe(false);
  });

  it("keeps English on the way down to v26", () => {
    const down = migrate(structuredClone(localized), 26);
    expect(BeyondPaperV26Schema.safeParse(down).success).toBe(true);
    expect(labels(down)).toEqual({
      variable: "Wizard",
      column: "Tools",
      attribute: "Strength",
    });
  });

  it("falls back to the first language when English is absent", () => {
    const frenchOnly = document(27, (_en, fr) => ({ fr }));
    expect(labels(migrate(frenchOnly, 26))).toEqual({
      variable: "Magicien",
      column: "Outils",
      attribute: "Force",
    });
  });

  it("files a v26 string under English on the way up", () => {
    const up = migrate(
      document(26, (en) => en),
      27,
    );
    expect(BeyondPaperV27Schema.safeParse(up).success).toBe(true);
    expect(labels(up)).toEqual({
      variable: { en: "Wizard" },
      column: { en: "Tools" },
      attribute: { en: "Strength" },
    });
  });

  it("leaves a variable without a label without one, both ways", () => {
    const down = migrate(structuredClone(localized), 26) as Labels;
    const up = migrate(
      document(26, (en) => en),
      27,
    ) as Labels;
    expect(JSON.parse(JSON.stringify(down)).variables[2]).not.toHaveProperty(
      "label",
    );
    expect(JSON.parse(JSON.stringify(up)).variables[2]).not.toHaveProperty(
      "label",
    );
  });

  it("drops a variable label with no text rather than keep an empty one", () => {
    const blank = document(27, (en, fr) => ({ en, fr }));
    blank.variables[1] = { ...blank.variables[1], label: { en: "", fr: "" } };
    const down = JSON.parse(JSON.stringify(migrate(blank, 26)));
    expect(down.variables[1]).not.toHaveProperty("label");
    expect(BeyondPaperV26Schema.safeParse(down).success).toBe(true);
  });

  it("leaves everything else of an option alone", () => {
    const down = migrate(structuredClone(localized), 26) as {
      dataTables: { columns: { options?: object[] }[] }[];
    };
    expect(down.dataTables[0].columns[1].options?.[0]).toEqual({
      uid: "opt-tools",
      label: "Tools",
      value: 2,
    });
  });
});
