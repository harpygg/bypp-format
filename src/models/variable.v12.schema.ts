/**
 * Variable schema as **introduced in bypp v28** — the v27 set plus
 * `entitySpawnRef`.
 *
 * `entityRef` links an entity to other entities, each one unique: Frodo's
 * companions, a spell's school. `entitySpawnRef` holds spawns (see
 * `entity-spawn.v1.schema`): an inventory where three light crossbows are
 * three spawns of one "Light crossbow", each with its own values. An entity's
 * (or a spawn's) value for it is the list of the spawn uids it holds.
 *
 * It takes the same settings as `entityRef`: which models it accepts
 * (`targetsTypes`, `targetsTags`, `targetTagsGroup`) and how many it holds
 * (`max`, `maxVariable`). With `sourceVariableUid` it picks among the spawns
 * another `entitySpawnRef` of the same holder already holds ("equipped" out of
 * "inventory") instead of holding spawns of its own.
 *
 * An `entityLookup` may read through an `entitySpawnRef` as well as through an
 * `entityRef`: its `sourceVariableUid` names either.
 *
 * Every other variant is re-used unchanged from v27.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { EntityRefVariableV9Schema } from "./variable.v9.schema";
import {
  BooleanVariableV11Schema,
  ChoiceVariableV11Schema,
  DataTableDirectLookupVariableV11Schema,
  DataTableLookupVariableV11Schema,
  DataTableRefVariableV11Schema,
  EntityLookupVariableV11Schema,
  EntityRefVariableV11Schema,
  FormulaVariableV11Schema,
  ImageVariableV11Schema,
  NumberVariableV11Schema,
  RollVariableV11Schema,
  TextVariableV11Schema,
  VariableLabelV27Schema,
} from "./variable.v11.schema";

export const EntitySpawnRefVariableV12Schema = EntityRefVariableV9Schema.merge(
  VariableLabelV27Schema,
).extend({
  type: z.literal("entitySpawnRef"),
});

export type EntitySpawnRefVariableV12 = z.infer<
  typeof EntitySpawnRefVariableV12Schema
>;

/**
 * Discriminated union of all variable variants as of bypp v28. Narrow with
 * `variable.type`.
 */
export const VariableV12Schema = z.discriminatedUnion("type", [
  NumberVariableV11Schema,
  TextVariableV11Schema,
  BooleanVariableV11Schema,
  ChoiceVariableV11Schema,
  FormulaVariableV11Schema,
  RollVariableV11Schema,
  DataTableRefVariableV11Schema,
  DataTableLookupVariableV11Schema,
  ImageVariableV11Schema,
  DataTableDirectLookupVariableV11Schema,
  EntityRefVariableV11Schema,
  EntityLookupVariableV11Schema,
  EntitySpawnRefVariableV12Schema,
]);

export type VariableV12 = z.infer<typeof VariableV12Schema>;
