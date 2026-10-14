/**
 * Dataset schema as **introduced in bypp format v31** — v3 plus `icon` and
 * `adminOnly`.
 *
 *  - `icon` — a bare icon name (`with-icon.v1`), shown with the dataset's
 *    sheet: a shield on Armor.
 *  - `adminOnly` — hidden from players, even those who may read or edit the
 *    entity: the "Monster secrets" sheet on every creature, for the game
 *    master only. Absent, everyone who reads the entity reads it.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithIconV1Schema } from "../mixins/with-icon.v1.schema";
import { DatasetV3Schema } from "./dataset.v3.schema";

export const DatasetV4Schema = DatasetV3Schema.merge(WithIconV1Schema).extend({
  adminOnly: z.boolean().optional(),
});

export type DatasetV4 = z.infer<typeof DatasetV4Schema>;
