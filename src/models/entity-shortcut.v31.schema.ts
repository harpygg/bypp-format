/**
 * An entity's shortcut rows, as **introduced in bypp format v31**.
 *
 * Bobby's rows of ten squares in play, as his player put them away: Magic
 * Missile on square 3 of the first, his Potion on square 4. A square holds a
 * reference, never a copy: read again each time, it shows empty once its
 * action or its item is gone.
 *
 *  - `action` — `actionKey` is an entity action's `uid`, or a roll
 *    attribute's variable uid; `from` says whose: the entity's own
 *    (`subject`), an entity a link of its points at (`linked`: his class,
 *    the Wizard), or a spawn one of its fields holds (`held`: the Fireball in
 *    his Spells).
 *  - `item` — one of the spawns it holds: that Potion itself, not Potions.
 *
 * A row is an object (`{ slots }`), not an array of arrays: some stores hold
 * no array in an array. `null` is an empty square.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { EntitySpawnUidSchema, EntityUidSchema } from "../uid";

export const ShortcutActionFromV31Schema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("subject") }),
  z.object({ kind: z.literal("linked"), entityUid: EntityUidSchema }),
  z.object({ kind: z.literal("held"), spawnUid: EntitySpawnUidSchema }),
]);

export type ShortcutActionFromV31 = z.infer<typeof ShortcutActionFromV31Schema>;

export const EntityShortcutV31Schema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("action"),
    actionKey: z.string(),
    from: ShortcutActionFromV31Schema,
  }),
  z.object({ kind: z.literal("item"), spawnUid: EntitySpawnUidSchema }),
]);

export type EntityShortcutV31 = z.infer<typeof EntityShortcutV31Schema>;

export const EntityShortcutRowV31Schema = z.object({
  slots: z.array(EntityShortcutV31Schema.nullable()),
});

export type EntityShortcutRowV31 = z.infer<typeof EntityShortcutRowV31Schema>;
