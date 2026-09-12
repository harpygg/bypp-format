import { describe, expect, it } from "vitest";
import { migrate } from "./migrations";
import { ChunkMarkdownV12Schema, ChunkV12Schema } from "./models/chunk.v12.schema";
import { BeyondPaperV21Schema } from "./schemas/bypp.v21.schema";

/**
 * The markdown block, and what becomes of it in a reader that predates it.
 */

const document = (chunks: unknown[]) => ({
  version: 21,
  format: "bypp",
  name: "Test Bundle",
  exportedAt: "2026-03-22T12:00:00.000Z",
  bundleVersion: "1.0.0",
  license: "CC-BY",
  licenseVersion: "4.0",
  attribution: { authorName: "Alice" },
  chunks,
});

const markdown = {
  uid: "chunk-1",
  type: "markdown",
  content: "# Title\n\n| a | b |\n| - | - |",
};

const text = { uid: "chunk-2", type: "text", content: "<p>Written in HTML</p>" };

describe("the markdown chunk", () => {
  it("holds its source, not a rendering of it", () => {
    const parsed = ChunkMarkdownV12Schema.safeParse(markdown);
    expect(parsed.success).toBe(true);
    expect(parsed.success && parsed.data.content).toBe(markdown.content);
  });

  it("is a chunk like the others", () => {
    expect(ChunkV12Schema.safeParse(markdown).success).toBe(true);
    expect(ChunkV12Schema.safeParse(text).success).toBe(true);
  });

  it("rides in a v21 document", () => {
    expect(BeyondPaperV21Schema.safeParse(document([markdown])).success).toBe(
      true,
    );
  });

  it("reads as preformatted text in a v20 reader, words intact", () => {
    const downgraded = migrate(document([markdown, text]), 20);

    expect(downgraded.chunks).toEqual([
      {
        uid: "chunk-1",
        type: "text",
        content: "<pre># Title\n\n| a | b |\n| - | - |</pre>",
      },
      text,
    ]);
  });

  it("carries no markup of its own into that text", () => {
    const downgraded = migrate(
      document([{ ...markdown, content: "5 < 6 & <b>b</b>" }]),
      20,
    );

    expect(downgraded.chunks[0]).toMatchObject({
      content: "<pre>5 &lt; 6 &amp; &lt;b&gt;b&lt;/b&gt;</pre>",
    });
  });

  it("a document that predates it upgrades untouched", () => {
    const v20 = migrate(document([text]), 20);
    expect(migrate(v20, 21).chunks).toEqual([text]);
  });
});
