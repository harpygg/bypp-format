import { describe, it, expect } from "vitest";
import { BeyondPaperSchema, type BeyondPaper } from "./bypp.schema";

describe("BeyondPaperSchema", () => {
  const validMinimal: BeyondPaper = {
    version: 7,
    format: "bypp",
    name: "Test Bundle",
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

  it("parses a valid minimal bundle", () => {
    const result = BeyondPaperSchema.safeParse(validMinimal);
    expect(result.success).toBe(true);
  });

  it("parses a bundle that omits every content array", () => {
    const result = BeyondPaperSchema.safeParse({
      version: 7,
      format: "bypp",
      name: "Empty Bundle",
      exportedAt: "2026-03-22T12:00:00.000Z",
      bundleVersion: "1.0.0",
      license: "CC-BY",
      licenseVersion: "4.0",
      attribution: { authorName: "Alice" },
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.entities).toEqual([]);
      expect(result.data.assets).toEqual([]);
      expect(result.data.sceneMaps).toEqual([]);
    }
  });

  it("rejects invalid version", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      version: 99,
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid format", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      format: "pdf",
    });
    expect(result.success).toBe(false);
  });

  it("parses a bundle with entities of various types", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      entities: [
        {
          uid: "entity-1",
          type: "character",
          name: "Gandalf",
          displayName: "Gandalf the Grey",
          description: "A wizard",
          tagsUid: ["tag-1"],
          pagesOrder: ["page-1"],
          sheetOverrides: { "ds-1": "sheet-1" },
        },
        {
          uid: "entity-3",
          type: "place",
          name: "Rivendell",
          displayName: "Imladris",
          description: "The Last Homely House",
          pagesOrder: ["page-2"],
          scenesUids: ["scene-1"],
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("parses a group entity with populated ranks + charactersUids", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      entities: [
        {
          uid: "entity-2",
          type: "group",
          name: "The Fellowship",
          ranks: [
            {
              label: "Leader",
              characters: [{ entityUid: "entity-1", label: "Gandalf" }],
            },
            {
              label: "Members",
              characters: [
                { entityUid: "entity-3", label: "Frodo" },
                { entityUid: "entity-4", label: "Sam" },
              ],
            },
          ],
          charactersUids: ["entity-1", "entity-3", "entity-4"],
        },
      ],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      const group = result.data.entities[0];
      expect(group.type).toBe("group");
      if (group.type === "group") {
        expect(group.ranks).toHaveLength(2);
        expect(group.charactersUids).toEqual([
          "entity-1",
          "entity-3",
          "entity-4",
        ]);
      }
    }
  });

  it("parses an entity that omits every optional / defaulted field", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      entities: [
        // displayName, description, tagsUid, pagesOrder, isArchived,
        // sheetOverrides, scenesUids, ranks, charactersUids all omitted.
        { uid: "entity-1", type: "character", name: "Bare" },
        { uid: "entity-2", type: "group", name: "Empty group" },
        { uid: "entity-3", type: "place", name: "Empty place" },
      ],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      const character = result.data.entities[0];
      expect(character.isArchived).toBe(false);
      expect(character.tagsUid).toEqual([]);
      expect(character.pagesOrder).toEqual([]);

      const group = result.data.entities[1];
      if (group.type === "group") {
        expect(group.ranks).toEqual([]);
        expect(group.charactersUids).toEqual([]);
      }

      const place = result.data.entities[2];
      if (place.type === "place") {
        expect(place.scenesUids).toEqual([]);
      }
    }
  });

  it("parses chunks of all types", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      chunks: [
        {
          uid: "c-1",
          type: "text",
          content: "<p>Hello world</p>",
          mentionedEntitiesUids: ["entity-1"],
        },
        {
          uid: "c-2",
          type: "textProxy",
          chunkUid: "c-1",
          entityUid: "entity-1",
        },
        {
          uid: "c-3",
          type: "gallery",
          assetUids: ["asset-1", "asset-2"],
        },
        {
          uid: "c-4",
          type: "random",
          randomTableUid: "rt-1",
          folded: true,
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("parses random tables with placeholder-mapped nested refs and a dice formula override (v7)", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      randomTables: [
        {
          uid: "rt-1",
          title: "Encounter",
          diceFormula: "2d6",
          rows: [
            { uid: "row-1", range: 2, content: "Goblins" },
            {
              uid: "row-2",
              range: 1,
              content: "You find $weapon next to $loot",
              randomTableRefs: { $weapon: "rt-2", $loot: "rt-3" },
            },
          ],
        },
        // diceFormula omitted -> reader derives it.
        { uid: "rt-2", title: "Weapons", rows: [] },
        { uid: "rt-3", title: "Loot", rows: [] },
      ],
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.randomTables[0].diceFormula).toBe("2d6");
      expect(result.data.randomTables[0].rows[1].randomTableRefs).toEqual({
        $weapon: "rt-2",
        $loot: "rt-3",
      });
      expect(result.data.randomTables[1].diceFormula).toBeUndefined();
    }
  });

  it("parses variables of all types", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      variables: [
        { uid: "v-1", name: "HP", type: "number", datasetsUids: ["ds-1"] },
        {
          uid: "v-2",
          name: "Bio",
          type: "text",
          datasetsUids: ["ds-1"],
          maxChars: 500,
        },
        {
          uid: "v-3",
          name: "Alive",
          type: "boolean",
          datasetsUids: ["ds-1"],
          defaultValue: true,
        },
        {
          uid: "v-4",
          name: "Class",
          type: "choice",
          datasetsUids: ["ds-1"],
          options: [{ uid: "opt-1", label: "Wizard" }],
          isMultiple: false,
        },
        {
          uid: "v-5",
          name: "Total",
          type: "formula",
          datasetsUids: ["ds-1"],
          formula: "HP + 10",
        },
        {
          uid: "v-6",
          name: "Attack",
          type: "roll",
          datasetsUids: ["ds-1"],
          diceFormula: "1d20+5",
        },
        {
          uid: "v-7",
          name: "Portrait",
          type: "image",
          datasetsUids: ["ds-1"],
        },
        {
          uid: "v-8",
          name: "Race speed",
          type: "dataTableDirectLookup",
          datasetsUids: ["ds-1"],
          dataTableUid: "dt-1",
          columnUid: "col-1",
          rowUids: ["row-1", "row-2"],
          multiAggregator: "sum",
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("parses assets of all types", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      assets: [
        {
          uid: "a-1",
          name: "Map",
          type: "image",
          dimensions: { width: 1920, height: 1080 },
          originalUrl: "https://example.com/map.jpg",
        },
        {
          uid: "a-2",
          name: "Intro",
          type: "video",
          dimensions: { width: 1280, height: 720 },
          videoUrl: "https://example.com/intro.mp4",
        },
        {
          uid: "a-3",
          name: "Theme",
          type: "audio",
          audioUrl: "https://example.com/theme.mp3",
          audioDurationSeconds: 180,
          audioExt: "mp3",
        },
        {
          uid: "a-4",
          name: "YouTube Track",
          type: "audio-external",
          provider: "youtube",
          externalId: "abc123",
          thumbnailUrl: "https://example.com/thumb.jpg",
          durationSeconds: 240,
        },
        {
          uid: "a-5",
          name: "Character Art",
          type: "entity",
          entityUid: "entity-1",
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("parses scene maps with grid data and the sourceFormat annotation", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      sceneMaps: [
        {
          uid: "sm-1",
          name: "Dungeon Level 1",
          type: "customImage",
          grid: {
            type: "square",
            size: 70,
            sizeInUnit: 5,
            measureUnit: "ft",
            lineWidth: 1,
            color: "#333333",
            offset: { x: 0, z: 0 },
          },
          originalUrl: "https://example.com/dungeon.jpg",
          sourceFormat: "dd2vtt",
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("parses widgets of all types, including entityImage (v5)", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      widgets: [
        { uid: "w-1", name: "w-1", type: "empty" },
        {
          uid: "w-2",
          name: "w-2",
          type: "bigNumber",
          variableUid: "v-1",
          unit: "hp",
        },
        { uid: "w-3", name: "w-3", type: "plainText", variableUid: "v-2" },
        { uid: "w-4", name: "w-4", type: "toggle", variableUid: "v-3" },
        { uid: "w-5", name: "w-5", type: "bulletList", variableUid: "v-4" },
        { uid: "w-6", name: "w-6", type: "inlineList", variableUid: "v-4" },
        { uid: "w-7", name: "w-7", type: "pips", variableUid: "v-1", max: 3 },
        {
          uid: "w-8",
          name: "w-8",
          type: "bar",
          variableUid: "v-1",
          orientation: "ltr",
        },
        {
          uid: "w-9",
          name: "w-9",
          type: "entityImage",
          formatSlug: "closeup",
          objectFit: "cover",
        },
        // thumbnail rendition + a different object-fit.
        {
          uid: "w-9b",
          name: "w-9b",
          type: "entityImage",
          formatSlug: "thumbnail",
          objectFit: "contain",
        },
        // entityImage with no rendering hints — reader picks defaults.
        { uid: "w-10", name: "w-10", type: "entityImage" },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("rejects a widget with an unknown type", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      widgets: [{ uid: "w-1", name: "w-1", type: "hologram" }],
    });
    expect(result.success).toBe(false);
  });

  it("rejects an entityImage widget with an out-of-set formatSlug", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      widgets: [
        { uid: "w-1", name: "w-1", type: "entityImage", formatSlug: "thumb" },
      ],
    });
    expect(result.success).toBe(false);
  });

  it("rejects an entityImage widget with an invalid objectFit", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      widgets: [
        { uid: "w-1", name: "w-1", type: "entityImage", objectFit: "stretch" },
      ],
    });
    expect(result.success).toBe(false);
  });

  it("rejects an entity with a non-url image URL", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      entities: [
        {
          uid: "e-1",
          type: "character",
          name: "BadUrl",
          originalUrl: "not a url",
        },
      ],
    });
    expect(result.success).toBe(false);
  });

  it("rejects an audio-external asset that uses the legacy youtubeVideoId field", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      assets: [
        {
          uid: "a-1",
          name: "Old shape",
          type: "audio-external",
          youtubeVideoId: "abc",
        },
      ],
    });
    expect(result.success).toBe(false);
  });
});
