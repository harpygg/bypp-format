/**
 * The reference icon **registry** — slugs, and nothing else.
 *
 * This file is NOT part of the format. It validates nothing, it is not
 * reachable from the package root or from any frozen `vN` entry, and it does
 * not move `BYPP_FORMAT_VERSION`. It is reached deliberately, at
 * `bypp-format/icons`, or read as plain data from `bypp-format/icons.json`
 * by a consumer that isn't running JavaScript at all.
 *
 * ── Why a registry exists at all ────────────────────────────────────────
 *
 * Every icon-bearing field in the format holds a bare icon NAME and is typed
 * as a loose `string`: a variable's `icon`, a tag's, a choice option's, a
 * data-table icon column's `defaultIcon`, a roll's `awesome` visual, each slot
 * of a `compo` visual. That looseness is deliberate and stays — an open format
 * has no standing to freeze one vendor's icon set, and a producer whose
 * catalog is richer than the reader's must still be able to say what it means.
 *
 * But a name nobody published is an opaque identifier, and putting one of
 * those in a portable format defeats the point of naming an icon instead of
 * shipping an image. A reader receiving `"spell_thunder_bold"` cannot tell a
 * vocabulary word from a typo, and has nothing to draw ahead of time. With a
 * published list it can ship its OWN art for these slugs and know it covers
 * what producers actually send.
 *
 * ── What this registry is not ───────────────────────────────────────────
 *
 * It takes no option away from anyone. A producer emitting `"my_own_glyph"`
 * is exactly as conformant as one emitting `"sword"`; every reader that knows
 * the slug draws it, and one that doesn't, doesn't. The registry only ever
 * ADDS the possibility of being understood.
 *
 * It is not exclusive and not curated. Think of it as the union of what
 * producers actually emit, not a selection: a slug an implementer needs and
 * cannot find here is a slug this list is missing.
 *
 * FontAwesome-style names are the common case across the format's older icon
 * fields and stay valid everywhere; what a general-purpose icon library does
 * not carry is the tabletop-specific half — a shield that reflects rather than
 * blocks, a summoned falcon, twelve roman numerals, a dozen distinguishable
 * spell glyphs. That is the gap these 320 slugs fill.
 *
 * **No artwork ships with the format, and no icon library is endorsed.** bypp
 * distributes slugs; it does not distribute, license, or sublicense any icon
 * set. Each consumer is free to match these slugs against whatever icon
 * library it already draws with, or against art it self-hosts, and a slug it
 * chooses not to map is simply one it doesn't draw. A slug here is a word in a
 * shared vocabulary, not a claim on anyone's drawing.
 *
 * ── Rules ───────────────────────────────────────────────────────────────
 *
 * Every slug matches {@link ICON_SLUG_PATTERN}: lowercase alphanumerics in
 * `_`- or `-`-separated words. The pattern constrains the REGISTRY, never the
 * fields — an icon field accepts any string, and a producer spelling its own
 * vocabulary another way is expressing itself, not making a mistake. What the
 * pattern rules out is this list shipping a slug nobody can type twice the
 * same way.
 *
 * The registry is **additive and unversioned**. Adding a slug changes no
 * schema and breaks no document. Slugs are never removed or renamed: a slug
 * that stops being drawn is a reader's choice, but a slug that disappears from
 * the vocabulary would silently reinterpret every document already using it.
 *
 * ── Where the list actually lives ───────────────────────────────────────
 *
 * In `icons.json`, and nowhere else. This module reads it; it does not restate
 * it. A registry that existed twice would eventually disagree with itself
 * depending on which door a consumer came through.
 *
 * That file is the published artifact — `bypp-format/icons.json` — so a
 * consumer in any language reads the same bytes this module does. What this
 * module adds is ergonomics for JavaScript, nothing more.
 *
 * Note there is deliberately NO literal union type of the 320 slugs. Such a
 * type would say the registry is closed, and it isn't: `"my_own_glyph"` is a
 * conformant icon name, and a type rejecting it would misrepresent the format
 * to the one audience most likely to trust it.
 */
import registry from "./icons.json";

/** Every slug in the registry, in the registry's own order. */
export const BYPP_ICON_NAMES: readonly string[] = registry.slugs;

/**
 * The shape every registry slug takes: lowercase alphanumerics in `_`- or
 * `-`-separated words. Exported so a producer building its own vocabulary can
 * hold itself to the same discipline — icon FIELDS are not validated against
 * it, and never will be.
 */
export const ICON_SLUG_PATTERN = new RegExp(registry.slugPattern);

const SLUGS: ReadonlySet<string> = new Set(registry.slugs);

/**
 * Whether a slug is in the registry.
 *
 * Use it to decide what a reader can draw, never to decide what a document
 * may contain: an icon field accepts any string, and rejecting a document
 * over an unrecognised icon would throw away everything else it carries.
 */
export const isByppIconName = (name: string): boolean => SLUGS.has(name);
