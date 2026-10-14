/**
 * Reserved variable uids, as **introduced in bypp format v31**.
 *
 * Six values every reader may know without the document declaring a variable
 * for them. Their uid is the same in every document, so a widget, a formula or
 * a `data` key may name one directly; none of them ever appears in
 * `variables[]`.
 *
 *  - `system-name`, `system-description`, `system-image` read the entity's own
 *    `name`, `description` and picture: a widget showing Rana's name binds to
 *    `system-name`. Never written in `data`.
 *  - `system-inventory` — what a character, a creature, a place or a container
 *    holds: a list of spawn uids in `data`, in order. Rana's
 *    `{ "system-inventory": ["backpack", "longsword"] }`; her backpack's own
 *    contents sit under the same key on the backpack spawn.
 *  - `system-quantity` — how many one spawn of a countable item counts
 *    (`item.kind: "countable"`, `entity.v8`): Rana's gold pieces,
 *    `{ "system-quantity": 37 }`. Absent reads 1.
 *  - `system-weight` — what one copy of an item weighs, set on the item:
 *    a longsword `{ "system-weight": 3 }`. A lot weighs it times its quantity.
 *    A formula reads it like any number.
 *
 * Producers before v31 carried none of these in `data`; the three `system-`
 * uids a widget could bind to already travelled, unexplained.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";

export const SystemVariableUidV31Schema = z.enum([
  "system-name",
  "system-description",
  "system-image",
  "system-inventory",
  "system-quantity",
  "system-weight",
]);

export type SystemVariableUidV31 = z.infer<typeof SystemVariableUidV31Schema>;
