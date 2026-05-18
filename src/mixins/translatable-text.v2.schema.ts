import { z } from "zod";

/**
 * A record of locale-keyed strings. Used for content shipped across languages
 * (data-table column labels, translatable-text cell values, etc.).
 *
 * Introduced in bypp v2 alongside data-tables.
 *
 * Example: `{ en: "Wizard", fr: "Magicien", de: "Magier" }`
 */
export const TranslatableTextV2Schema = z.record(z.string(), z.string());

export type TranslatableTextV2 = z.infer<typeof TranslatableTextV2Schema>;
