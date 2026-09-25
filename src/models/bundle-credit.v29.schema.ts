/**
 * One credit of the bundle as a whole, as **introduced in bypp format v29**.
 *
 * A bundle is rarely one person's work: an illustrator, a cartographer, a
 * proofreader. `attribution` names the bundle's single author; these name
 * everyone else, in the order the producer lists them:
 *
 *   { name: "Alice Yin", role: "illustrations", url: "https://aliceyin.art",
 *     license: "CC-BY" }
 *   { name: "Chloé", role: "proofreading" }
 *
 * The shape is the per-file credit (`with-credit.v1`) plus `role`, so there is
 * one credit shape in the format. `role` is free text: what someone did is
 * the producer's to say, not a closed list. `license` is declarative only:
 * what this person's work is released under, which may differ from the
 * bundle's own licence. It overrides nothing.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { CreditV1Schema } from "../mixins/with-credit.v1.schema";

export const BundleCreditV29Schema = CreditV1Schema.extend({
  role: z.string().min(1).optional(),
});

export type BundleCreditV29 = z.infer<typeof BundleCreditV29Schema>;
