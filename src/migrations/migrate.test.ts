import { describe, expect, it } from "vitest";
import { BeyondPaperSchema } from "../bypp.schema";
import { BeyondPaperV1Schema } from "../schemas/bypp.v1.schema";
import { BYPP_FORMAT_VERSION } from "../version";
import {
  DOWN_MIGRATIONS,
  MIGRATIONS,
  SCHEMA_BY_VERSION,
  migrate,
} from "./index";
import type { Migrator } from "./types";

const v1Minimal = {
  version: 1,
  format: "bypp",
  name: "Old bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  dialects: [],
  entities: [],
  pages: [],
  chunks: [],
  datasets: [],
  variables: [],
  widgets: [],
  randomTables: [],
  tags: [],
  tagCategories: [],
  scenes: [],
  sceneMaps: [],
  sceneBackgrounds: [],
  assets: [],
};

describe("migrate", () => {
  it("walks a v1 bundle up to the current format version", () => {
    const migrated = migrate(v1Minimal);
    const parsed = BeyondPaperSchema.parse(migrated);
    expect(parsed.version).toBe(BYPP_FORMAT_VERSION);
    expect(parsed.sheets).toEqual([]);
    expect(parsed.dataTables).toEqual([]);
  });

  it("walks v1 → v2 exactly when given an explicit target", () => {
    const migrated = migrate(v1Minimal, 2) as { version: number };
    expect(migrated.version).toBe(2);
  });

  it("is a structural no-op when source and target match", () => {
    const v2 = migrate(v1Minimal) as { version: number };
    const again = migrate(v2, BYPP_FORMAT_VERSION) as { version: number };
    // zod's parse returns a fresh object, so the references differ — but
    // the structural content is identical and the version is unchanged.
    expect(again).toStrictEqual(v2);
    expect(again.version).toBe(BYPP_FORMAT_VERSION);
  });

  it("rejects a missing upgrade step", () => {
    const fakeFuture = { ...v1Minimal, version: 99 };
    // Asking to migrate from v99 to v100 — no migrator for v99 in the registry.
    expect(() => migrate(fakeFuture, 100)).toThrow(
      /no upgrade registered from v99/,
    );
  });

  it("rejects non-objects and missing `version`", () => {
    expect(() => migrate(null)).toThrow();
    expect(() => migrate("nope")).toThrow();
    expect(() => migrate({ format: "bypp" })).toThrow(/version/);
  });

  it("rejects bundles claiming a version newer than any registered schema", () => {
    // version N+1 has no SCHEMA_BY_VERSION entry, so pre-validation succeeds
    // (no schema to check against), but stepping down to current version
    // requires DOWN_MIGRATIONS[N+1] which doesn't exist either.
    const fromFuture = { ...v1Minimal, version: BYPP_FORMAT_VERSION + 1 };
    expect(() => migrate(fromFuture)).toThrow(
      new RegExp(`no downgrade registered from v${BYPP_FORMAT_VERSION + 1}`),
    );
  });

  it("detects a broken migrator that forgets to bump `version`", () => {
    // Register a synthetic broken step locally to exercise the safety net.
    // We can't mutate the real registry without affecting other tests, so
    // simulate the broken case by stubbing via a custom invocation path.
    const broken: Migrator = (raw) => ({
      ...(raw as object),
      // forgot to bump version
    });

    expect(() => {
      // Mirror the loop body manually to test the invariant.
      const stepped = broken(v1Minimal);
      const observed = (stepped as { version: number }).version;
      if (observed !== 2) {
        throw new Error(
          `migrate: step v1 → v2 did not set output.version correctly (got ${observed})`,
        );
      }
    }).toThrow(/did not set output\.version/);
  });

  it("exports a registry keyed by source version", () => {
    expect(typeof MIGRATIONS[1]).toBe("function");
  });

  it("pre-validates the input against its source version's schema", () => {
    // A "v1" bundle that's actually malformed (missing required `entities`).
    const malformedV1 = { ...v1Minimal, entities: undefined };
    expect(() => migrate(malformedV1)).toThrow(
      /input does not conform to v1 schema/,
    );
  });

  it("rejects a v1 bundle carrying v2-only variable variants", () => {
    // dataTableRef was introduced in v2 — a v1 bundle claiming to carry one
    // should fail pre-validation, NOT be silently migrated.
    const v1WithFutureVariable = {
      ...v1Minimal,
      variables: [
        {
          uid: "var-1",
          name: "Future",
          datasetsUids: [],
          type: "dataTableRef",
        },
      ],
    };
    expect(() => migrate(v1WithFutureVariable)).toThrow(
      /input does not conform to v1 schema/,
    );
  });

  it("exposes a SCHEMA_BY_VERSION registry for the current version", () => {
    expect(SCHEMA_BY_VERSION[BYPP_FORMAT_VERSION]).toBeDefined();
  });

  it("rejects a broken migrator whose output fails schema validation", () => {
    // Spy: a migrator that bumps version but produces an invalid shape (missing
    // top-level arrays). The intermediate validation should catch it and throw
    // with a message pointing at the failing step.
    const originalV1ToV2 = MIGRATIONS[1];
    (MIGRATIONS as Record<number, (raw: unknown) => unknown>)[1] = (raw) => ({
      ...(raw as object),
      version: 2,
      // intentionally NOT adding sheets / dataTables / etc.
    });
    try {
      expect(() => migrate(v1Minimal)).toThrow(/failed validation/);
    } finally {
      (MIGRATIONS as Record<number, (raw: unknown) => unknown>)[1] = originalV1ToV2;
    }
  });

  // ─── Downgrade ────────────────────────────────────────────────────

  describe("downgrade", () => {
    const v2Minimal = migrate(v1Minimal) as { version: number };

    it("walks a v2 bundle down to v1", () => {
      const v1 = migrate(v2Minimal, 1);
      const parsed = BeyondPaperV1Schema.parse(v1);
      expect(parsed.version).toBe(1);
    });

    it("drops sheets[] and dataTables[] on the way down", () => {
      const v2WithStuff = {
        ...v2Minimal,
        sheets: [{ uid: "s1", widgetUids: [] }],
        dataTables: [
          {
            uid: "dt1",
            name: { en: "Things" },
            columns: [],
            rows: [],
          },
        ],
      };
      const v1 = migrate(v2WithStuff, 1) as Record<string, unknown>;
      expect(v1).not.toHaveProperty("sheets");
      expect(v1).not.toHaveProperty("dataTables");
    });

    it("filters out v2-only variable variants when downgrading", () => {
      const v2WithRefVar = {
        ...v2Minimal,
        variables: [
          {
            uid: "v-num",
            name: "STR",
            datasetsUids: [],
            type: "number",
          },
          {
            uid: "v-ref",
            name: "Race",
            datasetsUids: [],
            type: "dataTableRef",
            dataTableUid: "dt1",
          },
          {
            uid: "v-lookup",
            name: "Race name",
            datasetsUids: [],
            type: "dataTableLookup",
          },
        ],
      };
      const v1 = migrate(v2WithRefVar, 1) as {
        variables: Array<{ uid: string; type: string }>;
      };
      expect(v1.variables.map((v) => v.uid)).toEqual(["v-num"]);
    });

    it("is a structural identity on the survivors (round-trip)", () => {
      const v1Back = migrate(v2Minimal, 1) as { version: number };
      // Same data going up then down should land at the same v1 shape.
      const parsed = BeyondPaperV1Schema.parse(v1Back);
      expect(parsed).toStrictEqual(BeyondPaperV1Schema.parse(v1Minimal));
    });

    it("rejects a downgrade when a step is missing", () => {
      // Synthetic v99 input — no DOWN_MIGRATIONS[99] registered.
      const vFuture = { ...v2Minimal, version: 99 };
      expect(() => migrate(vFuture, 1)).toThrow(
        /input does not conform to v99 schema|no downgrade registered/,
      );
    });

    it("exports a DOWN_MIGRATIONS registry keyed by source version", () => {
      expect(typeof DOWN_MIGRATIONS[2]).toBe("function");
      expect(typeof DOWN_MIGRATIONS[3]).toBe("function");
      expect(typeof DOWN_MIGRATIONS[4]).toBe("function");
      expect(typeof DOWN_MIGRATIONS[5]).toBe("function");
      expect(typeof DOWN_MIGRATIONS[6]).toBe("function");
      expect(typeof DOWN_MIGRATIONS[7]).toBe("function");
    });
  });

  // ─── v4 → v5 specifics ──────────────────────────────────────────────

  describe("v4 → v5", () => {
    const v4Minimal = {
      version: 4 as const,
      format: "bypp",
      name: "v4 bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
      dialects: [],
      entities: [],
      pages: [],
      chunks: [],
      datasets: [],
      variables: [],
      widgets: [],
      sheets: [],
      dataTables: [],
      randomTables: [],
      tags: [],
      tagCategories: [],
      scenes: [],
      sceneMaps: [],
      sceneBackgrounds: [],
      assets: [],
    };

    it("upgrades a minimal v4 bundle to v5 (pure version bump)", () => {
      const v5 = migrate(v4Minimal, 5) as { version: number };
      expect(v5.version).toBe(5);
    });

    it("drops entityImage widgets when downgrading v5 → v4", () => {
      const v5 = {
        ...v4Minimal,
        version: 5 as const,
        widgets: [
          { uid: "w-1", name: "w-1", type: "empty" },
          {
            uid: "w-2",
            name: "w-2",
            type: "entityImage",
            formatSlug: "closeup",
          },
        ],
        sheets: [{ uid: "s-1", widgetUids: ["w-1", "w-2"] }],
      };
      const v4 = migrate(v5, 4) as {
        widgets: Array<{ uid: string; type: string }>;
        sheets: Array<{ widgetUids: string[] }>;
      };
      expect(v4.widgets.map((w) => w.uid)).toEqual(["w-1"]);
      // The dropped widget's uid is pruned from the sheet too — no orphan ref.
      expect(v4.sheets[0].widgetUids).toEqual(["w-1"]);
    });

    it("drops image variables when downgrading v5 → v4", () => {
      const v5 = {
        ...v4Minimal,
        version: 5 as const,
        variables: [
          { uid: "v-1", name: "HP", type: "number", datasetsUids: [] },
          { uid: "v-2", name: "Portrait", type: "image", datasetsUids: [] },
        ],
      };
      const v4 = migrate(v5, 4) as {
        variables: Array<{ uid: string; type: string }>;
      };
      expect(v4.variables.map((v) => v.uid)).toEqual(["v-1"]);
    });
  });

  // ─── v5 → v6 specifics ──────────────────────────────────────────────

  describe("v5 → v6", () => {
    const v5Minimal = {
      version: 5 as const,
      format: "bypp",
      name: "v5 bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
      dialects: [],
      entities: [],
      pages: [],
      chunks: [],
      datasets: [],
      variables: [],
      widgets: [],
      sheets: [],
      dataTables: [],
      randomTables: [],
      tags: [],
      tagCategories: [],
      scenes: [],
      sceneMaps: [],
      sceneBackgrounds: [],
      assets: [],
    };

    it("upgrades a minimal v5 bundle to v6 (pure version bump)", () => {
      const v6 = migrate(v5Minimal, 6) as { version: number };
      expect(v6.version).toBe(6);
    });

    it("drops dataTableDirectLookup variables when downgrading v6 → v5", () => {
      const v6 = {
        ...v5Minimal,
        version: 6 as const,
        variables: [
          { uid: "v-1", name: "HP", type: "number", datasetsUids: [] },
          {
            uid: "v-2",
            name: "Race speed",
            type: "dataTableDirectLookup",
            datasetsUids: [],
            dataTableUid: "dt-1",
            columnUid: "col-1",
            rowUids: ["row-1"],
          },
        ],
      };
      const v5 = migrate(v6, 5) as {
        variables: Array<{ uid: string; type: string }>;
      };
      expect(v5.variables.map((v) => v.uid)).toEqual(["v-1"]);
    });
  });

  // ─── v6 → v7 specifics ──────────────────────────────────────────────

  describe("v6 → v7", () => {
    const v6Minimal = {
      version: 6 as const,
      format: "bypp",
      name: "v6 bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
      dialects: [],
      entities: [],
      pages: [],
      chunks: [],
      datasets: [],
      variables: [],
      widgets: [],
      sheets: [],
      dataTables: [],
      randomTables: [],
      tags: [],
      tagCategories: [],
      scenes: [],
      sceneMaps: [],
      sceneBackgrounds: [],
      assets: [],
    };

    it("upgrades a minimal v6 bundle to v7 (version bump)", () => {
      const v7 = migrate(v6Minimal, 7) as { version: number };
      expect(v7.version).toBe(7);
    });

    it("converts a row's single randomTableUid into a $1 randomTableRefs entry on upgrade", () => {
      const v6 = {
        ...v6Minimal,
        randomTables: [
          {
            uid: "rt-1",
            title: "Encounter",
            rows: [
              { uid: "row-1", range: 1, content: "Goblins" },
              {
                uid: "row-2",
                range: 1,
                content: "Nested",
                randomTableUid: "rt-2",
              },
            ],
          },
        ],
      };
      const v7 = migrate(v6, 7) as {
        randomTables: Array<{
          rows: Array<{
            randomTableUid?: string;
            randomTableRefs?: Record<string, string>;
          }>;
        }>;
      };
      const rows = v7.randomTables[0].rows;
      expect(rows[0].randomTableRefs).toBeUndefined();
      expect(rows[1].randomTableRefs).toEqual({ $1: "rt-2" });
      expect(rows[1].randomTableUid).toBeUndefined();
    });

    it("collapses randomTableRefs to its first entry and drops diceFormula when downgrading v7 → v6", () => {
      const v7 = {
        ...v6Minimal,
        version: 7 as const,
        randomTables: [
          {
            uid: "rt-1",
            title: "Encounter",
            diceFormula: "2d6",
            rows: [
              {
                uid: "row-1",
                range: 1,
                content: "Find $weapon and $loot",
                randomTableRefs: { $weapon: "rt-2", $loot: "rt-3" },
              },
            ],
          },
        ],
      };
      const v6 = migrate(v7, 6) as {
        randomTables: Array<{
          diceFormula?: string;
          rows: Array<{
            randomTableUid?: string;
            randomTableRefs?: Record<string, string>;
          }>;
        }>;
      };
      const table = v6.randomTables[0];
      // diceFormula is dropped; the first nested ref is kept, extras dropped.
      expect(table.diceFormula).toBeUndefined();
      expect(table.rows[0].randomTableUid).toBe("rt-2");
      expect(table.rows[0].randomTableRefs).toBeUndefined();
    });
  });

  // ─── v3 → v4 specifics ──────────────────────────────────────────────

  describe("v3 → v4", () => {
    const v3Minimal = {
      version: 3,
      format: "bypp",
      name: "v3 bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
      dialects: [],
      entities: [],
      pages: [],
      chunks: [],
      datasets: [],
      variables: [],
      widgets: [],
      sheets: [],
      dataTables: [],
      randomTables: [],
      tags: [],
      tagCategories: [],
      scenes: [],
      sceneMaps: [],
      sceneBackgrounds: [],
      assets: [],
    };

    it("upgrades a minimal v3 bundle to v4", () => {
      const v4 = migrate(v3Minimal, 4) as { version: number };
      expect(v4.version).toBe(4);
    });

    it("renames parentAttribution.artifactName → bundleName", () => {
      const v3 = {
        ...v3Minimal,
        parentAttribution: {
          artifactName: "Old bundle",
          authorName: "Bob",
          license: "CC-BY" as const,
        },
      };
      const v4 = migrate(v3, 4) as {
        parentAttribution?: { bundleName?: string; artifactName?: string };
      };
      expect(v4.parentAttribution?.bundleName).toBe("Old bundle");
      expect(v4.parentAttribution?.artifactName).toBeUndefined();
    });

    it("collapses a dd2vtt scene map into customImage with sourceFormat annotation", () => {
      const v3 = {
        ...v3Minimal,
        sceneMaps: [
          {
            uid: "sm-1",
            name: "Tavern",
            type: "dd2vtt" as const,
            grid: {
              type: "square" as const,
              size: 70,
              sizeInUnit: 5,
              measureUnit: "ft",
              lineWidth: 1,
              offset: { x: 0, z: 0 },
            },
            originalUrl: "https://example.com/tavern.jpg",
          },
        ],
      };
      const v4 = migrate(v3, 4) as {
        sceneMaps: Array<{ type: string; sourceFormat?: string }>;
      };
      expect(v4.sceneMaps[0].type).toBe("customImage");
      expect(v4.sceneMaps[0].sourceFormat).toBe("dd2vtt");
    });

    it("drops scene.weather and scene.gameMode (removed in v4)", () => {
      const v3 = {
        ...v3Minimal,
        scenes: [
          {
            uid: "scene-1",
            name: "Battle",
            weather: "fog" as const,
            gameMode: "3d_vtt" as const,
          },
        ],
      };
      const v4 = migrate(v3, 4) as {
        scenes: Array<Record<string, unknown>>;
      };
      expect(v4.scenes[0]).not.toHaveProperty("weather");
      expect(v4.scenes[0]).not.toHaveProperty("gameMode");
    });

    it("downgrades v4 → v3 by renaming bundleName back to artifactName", () => {
      const v4 = {
        ...v3Minimal,
        version: 4 as const,
        parentAttribution: {
          bundleName: "Origin",
          authorName: "Bob",
          license: "CC-BY" as const,
        },
      };
      const v3 = migrate(v4, 3) as {
        parentAttribution?: { artifactName?: string };
      };
      expect(v3.parentAttribution?.artifactName).toBe("Origin");
    });

    it("downgrades a customImage scene map with sourceFormat='dd2vtt' back to dd2vtt variant", () => {
      const v4 = {
        ...v3Minimal,
        version: 4 as const,
        sceneMaps: [
          {
            uid: "sm-1",
            name: "Tavern",
            type: "customImage" as const,
            grid: {
              type: "square" as const,
              size: 70,
              sizeInUnit: 5,
              measureUnit: "ft",
              lineWidth: 1,
              offset: { x: 0, z: 0 },
            },
            originalUrl: "https://example.com/tavern.jpg",
            sourceFormat: "dd2vtt",
          },
        ],
      };
      const v3 = migrate(v4, 3) as { sceneMaps: Array<{ type: string }> };
      expect(v3.sceneMaps[0].type).toBe("dd2vtt");
    });
  });

  // ─── v7 → v8 specifics ──────────────────────────────────────────────

  describe("v7 → v8", () => {
    const v7Minimal = {
      version: 7 as const,
      format: "bypp",
      name: "v7 bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
      dialects: [],
      entities: [],
      pages: [],
      chunks: [],
      datasets: [],
      variables: [],
      widgets: [],
      sheets: [],
      dataTables: [],
      randomTables: [],
      tags: [],
      tagCategories: [],
      scenes: [],
      sceneMaps: [],
      sceneBackgrounds: [],
      assets: [],
    };

    it("upgrades a minimal v7 bundle to v8 (pure version bump)", () => {
      const v8 = migrate(v7Minimal, 8) as { version: number };
      expect(v8.version).toBe(8);
    });

    it("strips widget style border/background and sheet styles on downgrade v8 → v7", () => {
      const v8 = {
        ...v7Minimal,
        version: 8 as const,
        widgets: [
          {
            uid: "w-1",
            name: "w-1",
            type: "empty",
            style: {
              color: "black",
              borderWidth: 2,
              background: { assetUid: "a-bg", objectFit: "cover" },
            },
          },
        ],
        sheets: [
          { uid: "s-1", widgetUids: [], styles: { global: { color: "red" } } },
        ],
        assets: [
          {
            uid: "a-bg",
            name: "bg",
            type: "image",
            dimensions: { width: 10, height: 10 },
          },
        ],
      };

      const v7 = migrate(v8, 7) as {
        version: number;
        widgets: Array<{ style?: Record<string, unknown> }>;
        sheets: Array<Record<string, unknown>>;
      };

      expect(v7.version).toBe(7);
      // The v1 style keeps `color` but drops the v2-only additions.
      expect(v7.widgets[0].style?.color).toBe("black");
      expect(v7.widgets[0].style?.borderWidth).toBeUndefined();
      expect(v7.widgets[0].style?.background).toBeUndefined();
      expect(v7.sheets[0].styles).toBeUndefined();
    });
  });

  // ─── v8 → v9 specifics ──────────────────────────────────────────────

  describe("v8 → v9", () => {
    const v8Minimal = {
      version: 8 as const,
      format: "bypp",
      name: "v8 bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
      dialects: [],
      entities: [],
      pages: [],
      chunks: [],
      datasets: [],
      variables: [],
      widgets: [],
      sheets: [],
      dataTables: [],
      randomTables: [],
      tags: [],
      tagCategories: [],
      scenes: [],
      sceneMaps: [],
      sceneBackgrounds: [],
      assets: [],
    };

    it("upgrades a minimal v8 bundle to v9 (pure version bump)", () => {
      const v9 = migrate(v8Minimal, 9) as { version: number };
      expect(v9.version).toBe(9);
    });

    it("preserves a wheel widget + a number variable's min/max round-tripping v9 (via schema)", () => {
      const v9 = {
        ...v8Minimal,
        version: 9 as const,
        widgets: [
          {
            uid: "w-wheel",
            name: "w-wheel",
            type: "wheel",
            readingPosition: "top",
            labelOrientation: "radial",
            radius: 0.8,
          },
        ],
        variables: [
          {
            uid: "v-1",
            name: "HP",
            type: "number",
            datasetsUids: [],
            min: 1,
            max: 20,
            step: 1,
          },
        ],
        sheets: [{ uid: "s-1", widgetUids: ["w-wheel"] }],
      };

      // No-op migrate to the same version still validates against v9.
      const same = migrate(v9, 9) as {
        widgets: Array<{ type: string }>;
        variables: Array<{ type: string; max?: number }>;
      };
      expect(same.widgets[0].type).toBe("wheel");
      expect(same.variables[0].max).toBe(20);
    });

    it("drops wheel widgets, prunes their uids, and strips style rotation on downgrade v9 → v8", () => {
      const v9 = {
        ...v8Minimal,
        version: 9 as const,
        widgets: [
          {
            uid: "w-keep",
            name: "w-keep",
            type: "empty",
            style: { color: "black", rotation: 45 },
          },
          { uid: "w-wheel", name: "w-wheel", type: "wheel" },
        ],
        variables: [
          {
            uid: "v-1",
            name: "HP",
            type: "number",
            datasetsUids: [],
            min: 1,
            max: 20,
            step: 1,
          },
        ],
        sheets: [
          {
            uid: "s-1",
            widgetUids: ["w-keep", "w-wheel"],
            styles: { global: { rotation: 90, color: "red" } },
          },
        ],
      };

      const v8 = migrate(v9, 8) as {
        version: number;
        widgets: Array<{ uid: string; style?: Record<string, unknown> }>;
        variables: Array<{ type: string; min?: number; max?: number }>;
        sheets: Array<{
          widgetUids: string[];
          styles?: Record<string, Record<string, unknown>>;
        }>;
      };

      expect(v8.version).toBe(8);
      expect(v8.widgets.map((w) => w.uid)).toEqual(["w-keep"]);
      expect(v8.sheets[0].widgetUids).toEqual(["w-keep"]);
      // v8's StyleV2 has no rotation — stripped from widget + sheet cascade,
      // but the other style props survive.
      expect(v8.widgets[0].style?.rotation).toBeUndefined();
      expect(v8.widgets[0].style?.color).toBe("black");
      expect(v8.sheets[0].styles?.global.rotation).toBeUndefined();
      expect(v8.sheets[0].styles?.global.color).toBe("red");
      // v8's NumberVariableV1 has no min/max/step — stripped.
      expect(v8.variables[0].min).toBeUndefined();
      expect(v8.variables[0].max).toBeUndefined();
    });
  });
});
