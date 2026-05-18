import { z } from "zod";
import { DialectUidSchema, EntityUidSchema } from "../uid";

/**
 * A custom font used to render a dialect's text. The reader fetches
 * `fontUrl` and registers it under `fontFamily` before rendering text
 * marked as written in this dialect.
 *
 * The producer is responsible for hosting the font file at a publicly
 * accessible URL. Bypp itself doesn't embed font binaries.
 */
export const DialectFontV1Schema = z.object({
  fontFamily: z.string(),
  fontUrl: z.string(),
});

export type DialectFontV1 = z.infer<typeof DialectFontV1Schema>;

/**
 * A dialect — a fictional in-world language. Used to render passages that
 * only some entities understand. Text in a dialect is rendered with the
 * dialect's custom font; entities that don't speak it see it as
 * unintelligible glyphs (the reader handles the rendering trick — bypp
 * just carries the data).
 *
 * Fields:
 *  - `name` — display label of the dialect (e.g. "Elvish", "Goblin").
 *  - `font` — the typographic identity of the dialect; see above.
 *  - `order` — optional sort hint when readers list dialects.
 *  - `spokenByEntitiesUids` — entities that understand this dialect.
 *    When a player views a dialect-tagged passage as one of these
 *    entities, the reader displays it in plain text instead of the
 *    obfuscated font.
 */
export const DialectV1Schema = z.object({
  uid: DialectUidSchema,
  name: z.string(),
  font: DialectFontV1Schema,
  order: z.number().optional(),
  spokenByEntitiesUids: z.array(EntityUidSchema),
});

export type DialectV1 = z.infer<typeof DialectV1Schema>;
