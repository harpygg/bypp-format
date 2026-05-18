import { z } from "zod";

/**
 * A record of locale-keyed strings. Used for content shipped across languages
 * (data-table column labels, translatable-text cell values, etc.).
 *
 * Example: `{ en: "Wizard", fr: "Magicien", de: "Magier" }`
 */
export const TranslatableTextSchema = z.record(z.string(), z.string());

export type TranslatableText = z.infer<typeof TranslatableTextSchema>;
