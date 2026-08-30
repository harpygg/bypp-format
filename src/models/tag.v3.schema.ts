import { z } from "zod";
import { WithIconV1Schema } from "../mixins/with-icon.v1.schema";
import { TagV2Schema } from "./tag.v2.schema";

/**
 * Tag — v3 adds an optional `icon`.
 *
 * A tag is a label an author draws on entities, and in the tools that produce
 * them a tag is drawn as much as it is read: a sword next to "Weapon", a
 * crown next to "Noble". The format carried the word and dropped the picture,
 * so a bundle round-tripping through `.bypp` came back as a wall of text and
 * the author re-picked every icon by hand.
 *
 * Same convention as everywhere else in the format: a bare icon NAME, never
 * a URL or a file, loose `string` rather than an enum. It is a slug each
 * consumer maps onto whatever icon library it draws with — the format ships
 * no artwork and endorses none. See `../mixins/with-icon.v1.schema` for the
 * reasoning, and `../icons` for a reference registry of tabletop slugs a
 * reader is likely to recognise.
 *
 * Unlike a variable's `icon`, this one carries no grouping meaning — tags are
 * already grouped, by `categoryUid`. It is a decoration on the label.
 */
export const TagV3Schema = TagV2Schema.merge(WithIconV1Schema);

export type TagV3 = z.infer<typeof TagV3Schema>;
