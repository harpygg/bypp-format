/**
 * An entity's mode, as **introduced in bypp format v31**.
 *
 * A group of effects true while it is checked on a spawn of the entity. The
 * Bracer of Kord has two: "Worn" (`$<AC = $<AC + 2`) and "Bulwark". Poisoned,
 * an entity of its own, has one, locked on. The entity defines its modes; each
 * spawn says which are checked (`activeModes`, `entity-spawn.v2`).
 *
 *  - `label` — translatable; `icon` — a bare icon name (`with-icon.v1`).
 *  - `arrival` — whether it is checked when a spawn arrives somewhere: `off`
 *    for a potion of stoneskin, checked when drunk; `on` for stoneskin cast
 *    on you.
 *  - `locked` — once checked, it stays checked: Poisoned; an Ability Score
 *    Improvement's "+2 DEX", final once chosen.
 *  - `gameDisplay` — shown on whoever bears it, in play: Poisoned, a green
 *    drop on Bobby's token. Absent, it shows on the sheets only.
 *  - `updates` — what it changes while checked, each an attribute and a
 *    formula, as an action's `updates` (`variable.v10`). `$<` reads the
 *    bearer.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { TranslatableTextV2Schema } from "../mixins/translatable-text.v2.schema";
import { EntityModeUidSchema, EntitySpawnUidSchema } from "../uid";
import { VariableUpdateV26Schema } from "./variable.v10.schema";

export const EntityModeV31Schema = z.object({
  uid: EntityModeUidSchema,
  label: TranslatableTextV2Schema,
  icon: z.string().optional(),
  arrival: z.enum(["off", "on"]),
  locked: z.literal(true).optional(),
  gameDisplay: z.object({ color: z.string() }).optional(),
  updates: z.array(VariableUpdateV26Schema).default([]),
});

export type EntityModeV31 = z.infer<typeof EntityModeV31Schema>;

/**
 * One checked mode of one spawn, in the order a bearer stacks them on every
 * attribute they change: Rana's bracer's Bulwark before its Worn,
 * `[{ spawnUid: "bracer", modeUid: "bulwark" }, { spawnUid: "bracer",
 * modeUid: "worn" }]`. Ids, never names, so renaming keeps the place.
 */
export const StackOrderEntryV31Schema = z.object({
  spawnUid: EntitySpawnUidSchema,
  modeUid: EntityModeUidSchema,
});

export type StackOrderEntryV31 = z.infer<typeof StackOrderEntryV31Schema>;
