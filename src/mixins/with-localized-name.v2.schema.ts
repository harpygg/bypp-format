import { z } from "zod";
import { TranslatableTextV2Schema } from "./translatable-text.v2.schema";

/**
 * Mixin: carries a single mandatory **locale-keyed** name.
 *
 * Like `WithNameV1Schema`, but the name is a `TranslatableText` record
 * (e.g. `{ en: "Spells", fr: "Sorts" }`) instead of a plain string.
 */
export const WithLocalizedNameV2Schema = z.object({
  name: TranslatableTextV2Schema,
});
