import { describe, it, expect } from "vitest";
import { BeyondPaperSchema, type BeyondPaper } from "./bypp.schema";

describe("BeyondPaperSchema", () => {
  const validMinimal: BeyondPaper = {
    version: 1,
    format: "bypp",
    name: "Test Bundle",
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

  it("should parse a valid minimal bundle", () => {
    const result = BeyondPaperSchema.safeParse(validMinimal);
    expect(result.success).toBe(true);
  });

  it("should reject invalid version", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      version: 99,
    });
    expect(result.success).toBe(false);
  });

  it("should reject invalid format", () => {
    const result = BeyondPaperSchema.safeParse({
      ...validMinimal,
      format: "pdf",
    });
    expect(result.success).toBe(false);
  });

  it("should parse a bundle with entities", () => {
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
          isArchived: false,
          sheetOverrides: { "ds-1": "sheet-1" },
        },
        {
          uid: "entity-2",
          type: "group",
          name: "The Fellowship",
          displayName: null,
          description: null,
          tagsUid: [],
          pagesOrder: [],
          isArchived: false,
          ranks: [
            {
              label: "Leader",
              characters: [{ entityUid: "entity-1", label: "Gandalf" }],
            },
          ],
          charactersUids: ["entity-1"],
        },
        {
          uid: "entity-3",
          type: "place",
          name: "Rivendell",
          displayName: "Imladris",
          description: "The Last Homely House",
          tagsUid: [],
          pagesOrder: ["page-2"],
          isArchived: false,
          scenesUids: ["scene-1"],
        },
      ],
    });
    expect(result.success).toBe(true);
  });

  it("should parse chunks of all types", () => {
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

  it("should parse variables of all types", () => {
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
      ],
    });
    expect(result.success).toBe(true);
  });

  it("should parse assets of all types", () => {
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
          name: "Spotify Track",
          type: "audio-external",
          youtubeVideoId: "abc123",
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

  it("should parse scene maps with grid data", () => {
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
        },
      ],
    });
    expect(result.success).toBe(true);
  });
});
