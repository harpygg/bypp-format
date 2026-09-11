import { z } from 'zod';

/**
 * Mixin: an optional `icon`, by name.
 *
 * The value is a bare icon NAME — a slug, e.g. `"shield"` — never a URL or a
 * file, the same convention the format already uses for a choice option's
 * `icon` and a roll's `awesome` visual.
 *
 * The format ships no artwork and endorses no icon library. Which vocabulary
 * a slug is drawn from is the producer's business: FontAwesome-style names
 * are the common case and what the fields predating this mixin assume, while
 * `../icons` publishes a tabletop-specific registry for the shapes a
 * general-purpose library doesn't carry. A consumer matches the slugs it
 * receives against whatever icon set it draws with, from either vocabulary
 * or its own, and one it can't match it simply doesn't draw.
 *
 * That is why the field is a loose `string` rather than an enum: an open
 * format has no standing to freeze one vendor's icon set, and a producer
 * with a richer catalog than the reader's should not be unable to say what
 * it means.
 *
 * On a variable the name does double duty: it is also the key a reader
 * groups by when a dataset has more fields than fit on one screen — every
 * variable naming `"shield"` lands in the same section, headed by that icon.
 * That is a reader convention, not a format rule: a producer that just wants
 * an icon next to a field name sets it and ignores the grouping, and a
 * reader with no notion of sections renders the icon and stops there.
 * Variables that name no icon are simply ungrouped.
 */
declare const WithIconV1Schema: z.ZodObject<{
    icon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    icon?: string | undefined;
}, {
    icon?: string | undefined;
}>;
type WithIconV1 = z.infer<typeof WithIconV1Schema>;

export { type WithIconV1 as W, WithIconV1Schema as a };
