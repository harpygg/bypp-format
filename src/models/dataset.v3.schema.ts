/**
 * Dataset schema as **introduced in bypp format v30** — v2 plus
 * `targetsSubtypes`, the entity sub-types it applies to
 * (`entity-subtype.v30`): the Weapon sheet on Weapons.
 *
 * Sub-types sit apart from `targets`, where any string that is not an entity
 * type reads as a tag uid. A dataset applies to an entity whose type is in
 * `targets` OR whose sub-type is in `targetsSubtypes`, and, if `targets` names
 * tags, carries them as `targetTagsGroup` says. A dataset on `item` therefore
 * takes the longsword on Weapons too: a weapon is an item.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { EntitySubtypeUidSchema } from "../uid";
import { DatasetV2Schema } from "./dataset.v2.schema";

export const DatasetV3Schema = DatasetV2Schema.extend({
  targetsSubtypes: z.array(EntitySubtypeUidSchema).default([]),
});

export type DatasetV3 = z.infer<typeof DatasetV3Schema>;
