import { z } from "zod";
import { StyleV6Schema } from "../mixins/with-style.v6.schema";
import { TagUidSchema } from "../uid";

/**
 * The style a theme lays on one element.
 *
 * The v6 style, minus the two ways of saying nothing. Everywhere else in the
 * format a style hangs off an item that exists for other reasons — a widget is
 * still a widget unstyled — so `StyleV6Schema` is `nullable().optional()` and
 * both mean "use the defaults". A theme entry exists for no other reason: a
 * key mapped to `null` is a key that says nothing, and an absent key already
 * says it, better. So the object itself is required wherever a theme names an
 * element.
 *
 * This file MUST NOT be modified once shipped.
 */
export const ThemeStyleV25Schema = StyleV6Schema.unwrap().unwrap();

export type ThemeStyleV25 = z.infer<typeof ThemeStyleV25Schema>;

/**
 * One tag's own style, and where it stands among the others.
 *
 * A list rather than a map, because the ORDER is the answer. A thing wears
 * several tags and carries them in whatever order it was given them, which is
 * no order at all; this list is the author's own, and a reader lays the styles
 * in it from first to last, later ones winning. Turn it into a map and that
 * answer is gone.
 *
 * `tagUid` names an entry of the document's own `tags[]`. A theme that paints
 * a tag the document does not carry is describing something the reader cannot
 * see: such an entry is dropped, exactly like any other dangling reference.
 */
export const ThemeTagStyleV25Schema = z.object({
  tagUid: TagUidSchema,
  style: ThemeStyleV25Schema,
});

export type ThemeTagStyleV25 = z.infer<typeof ThemeTagStyleV25Schema>;

/**
 * How a document wants its own prose to look — introduced in bypp format v25.
 *
 * Everything else a style touches in this format is a box on a sheet: a
 * widget, placed, padded and bordered. Prose had nothing. A bundle whose
 * headings, quotes and asides are half of what it is arrived somewhere else as
 * unstyled text, and the look had to be rebuilt by hand — which is not
 * something an author can ship.
 *
 * ── `elements` ──────────────────────────────────────────────────────────
 *
 * A style per element of the content, keyed by a NAME. The names a reader is
 * expected to recognise:
 *
 *   base                the content container itself — what everything under
 *                       it inherits, through the plain CSS cascade rather
 *                       than any rule of this format's own
 *   h1 … h6             a heading of that level, whatever produced it
 *   p                   a paragraph
 *   ul / ol             a list, and what it marks its items with
 *   blockquote          a quote block
 *   code                inline code and code blocks
 *   table               a table, its caption and its cells
 *   link                a link
 *   mention             an entity named inside prose
 *   mention-<type>      the same, for one entity type — `<type>` is a member
 *                       of `EntityTypeV1Schema` (`mention-place`,
 *                       `mention-creature`, …). It overrides the generic
 *                       `mention` property by property: a place and a
 *                       creature are not read the same way, so they are not
 *                       necessarily painted the same way either.
 *   block-<name>        a block wearing a named look — a warning, a note, an
 *                       aside. `<name>` is the word the block is written with
 *                       (the fence of a markdown chunk, the picker of an
 *                       editor), and this format does not enumerate those:
 *                       a producer's set of callouts is its own, and an open
 *                       format has no standing to freeze one vendor's.
 *
 * The key stays a plain `z.string()` for that last reason, and the same one
 * that keeps an icon name loose (see `../icons`): a producer whose vocabulary
 * is richer than the reader's must still be able to say what it means, and a
 * reader that does not know a name simply does not paint it. Nothing is
 * rejected; what the list above buys is being UNDERSTOOD.
 *
 * ── `slug` ──────────────────────────────────────────────────────────────
 *
 * The name of the theme these styles were written against — a hint, never the
 * authority. `elements` alone says what the document looks like; `slug` lets a
 * reader that happens to ship the same theme start from it and apply the
 * entries as the overrides they are. A reader that has never heard of it
 * ignores it and loses nothing.
 *
 * This file MUST NOT be modified once shipped.
 */
export const ThemeV25Schema = z.object({
  slug: z.string().optional(),
  elements: z.record(z.string(), ThemeStyleV25Schema).default({}),
  tagStyles: z.array(ThemeTagStyleV25Schema).default([]),
});

export type ThemeV25 = z.infer<typeof ThemeV25Schema>;
