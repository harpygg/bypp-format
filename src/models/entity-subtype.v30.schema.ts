/**
 * An entity sub-type, as **introduced in bypp format v30**.
 *
 * A shelf the producer adds on one of the nine entity types: Weapons, Armor
 * and Adventuring gear on `item`; Cities and Regions on `place`. An entity
 * stays of its type and may sit on one of that type's sub-types
 * (`subtypeUid`, `entity.v7`); a weapon is an item.
 *
 *   { uid: "s1", name: { en: "Weapons", fr: "Armes" }, baseType: "item",
 *     icon: "sword", help: { en: "Swords, axes, bows…" } }
 *
 * `icon` and `help` are optional: a reader without them shows the base
 * type's. How a reader orders, hides or nests sub-types is its own business;
 * the format only says what exists.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TranslatableTextV2Schema } from "../mixins/translatable-text.v2.schema";
import { EntitySubtypeUidSchema } from "../uid";
import { EntityTypeV1Schema } from "./entity.v1.schema";

export const EntitySubtypeV30Schema = z.object({
  uid: EntitySubtypeUidSchema,
  name: TranslatableTextV2Schema,
  baseType: EntityTypeV1Schema,
  // A bare icon name, as `with-icon.v1` describes.
  icon: z.string().optional(),
  help: TranslatableTextV2Schema.optional(),
});

export type EntitySubtypeV30 = z.infer<typeof EntitySubtypeV30Schema>;
