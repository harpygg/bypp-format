import { E as EntityUid, T as TagUid, a as DatasetUid, S as SheetUid, P as PageUid, V as VariableUid, b as VariableChoiceUid, A as AssetUid, c as SceneUid } from './data-table.v3.schema-SKJA8p4m.cjs';
import { z } from 'zod';

/**
 * The taxonomy of entity kinds. Each value is a discriminator that
 * selects which entity variant a record is (and thus which extra fields
 * it carries). Stable across bypp versions — adding a new entity type is
 * a major change (would require a v3+ fork).
 *
 * - `character` — a playable / non-playable character.
 * - `creature` — a monster or similar non-character actor.
 * - `place` — a location (carries scenes).
 * - `group` — a collective (carries ranks + member list).
 * - `item` — a piece of equipment / inventory.
 * - `ability` — a single skill / power / spell.
 * - `event` — something that happens at a point in time.
 * - `story` — a story arc / legend / narrative fragment.
 * - `note` — a free-form GM / author note.
 */
declare const EntityTypeV1Schema: z.ZodEnum<["character", "creature", "place", "group", "item", "ability", "event", "story", "note"]>;
type EntityTypeV1 = z.infer<typeof EntityTypeV1Schema>;
/**
 * A single character listed inside a group rank. `entityUid` references
 * the actual character (must resolve to a `character`-type entity in the
 * bundle). `label` is the rank-local label (e.g. "First Mate", "Acolyte")
 * — separate from the character's own name.
 */
declare const GroupRankCharacterV1Schema: z.ZodObject<{
    entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    label: z.ZodString;
}, "strip", z.ZodTypeAny, {
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label: string;
}, {
    entityUid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    label: string;
}>;
type GroupRankCharacterV1 = z.infer<typeof GroupRankCharacterV1Schema>;
/**
 * A rank tier inside a group entity — captures hierarchical membership.
 * "Captain" rank may contain one character; "Crew" rank may contain
 * many. The order of `ranks[]` on a group entity is significant.
 */
declare const GroupRankV1Schema: z.ZodObject<{
    label: z.ZodString;
    characters: z.ZodArray<z.ZodObject<{
        entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        label: string;
    }, {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    label: string;
    characters: {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        label: string;
    }[];
}, {
    label: string;
    characters: {
        entityUid: string & {
            readonly __bypp_flavor?: "EntityUid" | undefined;
        };
        label: string;
    }[];
}>;
type GroupRankV1 = z.infer<typeof GroupRankV1Schema>;
/**
 * Fields common to every entity, before the type-specific extensions.
 *
 *  - `displayName` — what readers show instead of `name` in player-facing
 *    contexts. `null` means "use `name`". Lets the GM track a creature
 *    as "the assassin" while players see "hooded figure".
 *  - `description` — short summary string (one paragraph, not rich
 *    text — for that, use a page chunk).
 *  - `tagsUid` — every tag this entity has. Drives dataset targeting,
 *    filtering, grouping.
 *  - `sheetOverrides` — per-dataset sheet customization. When a viewer
 *    renders this entity under dataset D, it uses `sheetOverrides[D]`
 *    (if set) instead of the dataset's default `sheetUid`. Lets one
 *    character use a compact sheet while another uses a full one for the
 *    same dataset.
 *  - Mixins: `name`, image URLs, archive flag, owned pages, variable
 *    data, asset gallery.
 */
declare const EntityBaseV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type EntityBaseV1 = z.infer<typeof EntityBaseV1Schema>;
/** A playable / non-playable character. No type-specific fields beyond the base. */
declare const CharacterEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"character">;
}, "strip", z.ZodTypeAny, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type CharacterEntityV1 = z.infer<typeof CharacterEntityV1Schema>;
/** A monster or similar non-character actor. No type-specific fields beyond the base. */
declare const CreatureEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"creature">;
}, "strip", z.ZodTypeAny, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type CreatureEntityV1 = z.infer<typeof CreatureEntityV1Schema>;
/**
 * A collective entity (party, faction, family, crew…) made of members
 * organized by rank.
 *
 *  - `ranks[]` — tiers of membership, in display order (top of hierarchy
 *    first).
 *  - `charactersUids[]` — flat list of all member uids across all ranks.
 *    Mirrors what `ranks[].characters[].entityUid` collectively contains;
 *    kept separate as a denormalized index so readers can filter "is
 *    entity X in this group?" without walking the rank tree.
 */
declare const GroupEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        characters: z.ZodArray<z.ZodObject<{
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }>, "many">;
    charactersUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type GroupEntityV1 = z.infer<typeof GroupEntityV1Schema>;
/**
 * A location entity. Carries its `scenesUids` (the playable scenes attached
 * to this place — combat encounters, exploration scenes, etc.).
 */
declare const PlaceEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    scenesUids: z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">;
} & {
    type: z.ZodLiteral<"place">;
}, "strip", z.ZodTypeAny, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
type PlaceEntityV1 = z.infer<typeof PlaceEntityV1Schema>;
/** Inventory / equipment item. No type-specific fields beyond the base. */
declare const ItemEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"item">;
}, "strip", z.ZodTypeAny, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
/** Free-form GM or author note. No type-specific fields beyond the base. */
declare const NoteEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"note">;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
/** A power, skill, spell, or similar ability. No type-specific fields beyond the base. */
declare const AbilityEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"ability">;
}, "strip", z.ZodTypeAny, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
/** A narrative fragment (legend, lore, backstory). No type-specific fields beyond the base. */
declare const StoryEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"story">;
}, "strip", z.ZodTypeAny, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
/** An event in the timeline. No type-specific fields beyond the base. */
declare const EventEntityV1Schema: z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"event">;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>;
/**
 * Discriminated union of every entity kind. Narrow with `entity.type` —
 * the result carries the matching type-specific fields automatically.
 */
declare const EntityV1Schema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"character">;
}, "strip", z.ZodTypeAny, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "character";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"creature">;
}, "strip", z.ZodTypeAny, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "creature";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"group">;
    ranks: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        characters: z.ZodArray<z.ZodObject<{
            entityUid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
            label: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }, {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }, {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }>, "many">;
    charactersUids: z.ZodArray<z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "group";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    ranks: {
        label: string;
        characters: {
            entityUid: string & {
                readonly __bypp_flavor?: "EntityUid" | undefined;
            };
            label: string;
        }[];
    }[];
    charactersUids: EntityUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    scenesUids: z.ZodArray<z.ZodType<SceneUid, z.ZodTypeDef, SceneUid>, "many">;
} & {
    type: z.ZodLiteral<"place">;
}, "strip", z.ZodTypeAny, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "place";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    scenesUids: SceneUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"item">;
}, "strip", z.ZodTypeAny, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "item";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"note">;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "note";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"ability">;
}, "strip", z.ZodTypeAny, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "ability";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"story">;
}, "strip", z.ZodTypeAny, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "story";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>, z.ZodObject<{
    uid: z.ZodType<EntityUid, z.ZodTypeDef, EntityUid>;
    displayName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    tagsUid: z.ZodArray<z.ZodType<TagUid, z.ZodTypeDef, TagUid>, "many">;
    sheetOverrides: z.ZodOptional<z.ZodRecord<z.ZodType<DatasetUid, z.ZodTypeDef, DatasetUid>, z.ZodType<SheetUid, z.ZodTypeDef, SheetUid>>>;
} & {
    name: z.ZodString;
} & {
    originalUrl: z.ZodOptional<z.ZodString>;
    thumbnailUrl: z.ZodOptional<z.ZodString>;
    squareUrl: z.ZodOptional<z.ZodString>;
    closeupUrl: z.ZodOptional<z.ZodString>;
} & {
    isArchived: z.ZodBoolean;
} & {
    pagesOrder: z.ZodArray<z.ZodType<PageUid, z.ZodTypeDef, PageUid>, "many">;
} & {
    data: z.ZodOptional<z.ZodRecord<z.ZodType<VariableUid, z.ZodTypeDef, VariableUid>, z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodType<VariableChoiceUid, z.ZodTypeDef, VariableChoiceUid>, "many">, z.ZodNull]>>>;
} & {
    assetUids: z.ZodOptional<z.ZodArray<z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>, "many">>;
} & {
    type: z.ZodLiteral<"event">;
}, "strip", z.ZodTypeAny, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}, {
    type: "event";
    name: string;
    uid: string & {
        readonly __bypp_flavor?: "EntityUid" | undefined;
    };
    isArchived: boolean;
    pagesOrder: PageUid[];
    displayName: string | null;
    description: string | null;
    tagsUid: TagUid[];
    originalUrl?: string | undefined;
    thumbnailUrl?: string | undefined;
    squareUrl?: string | undefined;
    closeupUrl?: string | undefined;
    assetUids?: AssetUid[] | undefined;
    data?: Record<VariableUid, string | number | boolean | VariableChoiceUid[] | null> | undefined;
    sheetOverrides?: Record<DatasetUid, SheetUid> | undefined;
}>]>;
type EntityV1 = z.infer<typeof EntityV1Schema>;

/**
 * The style a theme lays on one element.
 *
 * The v6 style, minus the two ways of saying nothing. Everywhere else in the
 * format a style hangs off an item that exists for other reasons — a widget is
 * still a widget unstyled — so `StyleV6Schema` is `nullable().optional()` and
 * both mean "use the defaults". A theme entry exists for no other reason: a
 * key mapped to `null` is a key that says nothing, and an absent key already
 * says it, better. So the object itself is required wherever a theme names an
 * element.
 *
 * This file MUST NOT be modified once shipped.
 */
declare const ThemeStyleV25Schema: z.ZodObject<{
    justifyContent: z.ZodOptional<z.ZodString>;
    alignItems: z.ZodOptional<z.ZodString>;
    flexDirection: z.ZodOptional<z.ZodString>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    fontFamilyId: z.ZodOptional<z.ZodString>;
    fontScale: z.ZodOptional<z.ZodNumber>;
    color: z.ZodOptional<z.ZodString>;
    paddingTop: z.ZodOptional<z.ZodNumber>;
    paddingRight: z.ZodOptional<z.ZodNumber>;
    paddingBottom: z.ZodOptional<z.ZodNumber>;
    paddingLeft: z.ZodOptional<z.ZodNumber>;
    borderStyle: z.ZodOptional<z.ZodString>;
    borderColor: z.ZodOptional<z.ZodString>;
    borderRadius: z.ZodOptional<z.ZodString>;
    background: z.ZodOptional<z.ZodObject<{
        assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
        objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
    }, "strip", z.ZodTypeAny, {
        assetUid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    }, {
        assetUid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    }>>;
    rotation: z.ZodOptional<z.ZodNumber>;
    fontWeight: z.ZodOptional<z.ZodString>;
    fontStyle: z.ZodOptional<z.ZodString>;
    marginTop: z.ZodOptional<z.ZodNumber>;
    marginRight: z.ZodOptional<z.ZodNumber>;
    marginBottom: z.ZodOptional<z.ZodNumber>;
    marginLeft: z.ZodOptional<z.ZodNumber>;
    backgroundColor: z.ZodOptional<z.ZodString>;
    textDecoration: z.ZodOptional<z.ZodString>;
    backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
} & {
    margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
}, "strip", z.ZodTypeAny, {
    color?: string | undefined;
    justifyContent?: string | undefined;
    alignItems?: string | undefined;
    flexDirection?: string | undefined;
    lineHeight?: number | undefined;
    fontFamilyId?: string | undefined;
    fontScale?: number | undefined;
    paddingTop?: number | undefined;
    paddingRight?: number | undefined;
    paddingBottom?: number | undefined;
    paddingLeft?: number | undefined;
    borderWidth?: number | number[] | undefined;
    borderStyle?: string | undefined;
    borderColor?: string | undefined;
    borderRadius?: string | undefined;
    background?: {
        assetUid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    } | undefined;
    rotation?: number | undefined;
    fontWeight?: string | undefined;
    fontStyle?: string | undefined;
    marginTop?: number | undefined;
    marginRight?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    backgroundColor?: string | undefined;
    textDecoration?: string | undefined;
    backgroundRepeat?: boolean | undefined;
    margin?: number | number[] | undefined;
    padding?: number | number[] | undefined;
}, {
    color?: string | undefined;
    justifyContent?: string | undefined;
    alignItems?: string | undefined;
    flexDirection?: string | undefined;
    lineHeight?: number | undefined;
    fontFamilyId?: string | undefined;
    fontScale?: number | undefined;
    paddingTop?: number | undefined;
    paddingRight?: number | undefined;
    paddingBottom?: number | undefined;
    paddingLeft?: number | undefined;
    borderWidth?: number | number[] | undefined;
    borderStyle?: string | undefined;
    borderColor?: string | undefined;
    borderRadius?: string | undefined;
    background?: {
        assetUid: string & {
            readonly __bypp_flavor?: "AssetUid" | undefined;
        };
        objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
    } | undefined;
    rotation?: number | undefined;
    fontWeight?: string | undefined;
    fontStyle?: string | undefined;
    marginTop?: number | undefined;
    marginRight?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    backgroundColor?: string | undefined;
    textDecoration?: string | undefined;
    backgroundRepeat?: boolean | undefined;
    margin?: number | number[] | undefined;
    padding?: number | number[] | undefined;
}>;
type ThemeStyleV25 = z.infer<typeof ThemeStyleV25Schema>;
/**
 * One tag's own style, and where it stands among the others.
 *
 * A list rather than a map, because the ORDER is the answer. A thing wears
 * several tags and carries them in whatever order it was given them, which is
 * no order at all; this list is the author's own, and a reader lays the styles
 * in it from first to last, later ones winning. Turn it into a map and that
 * answer is gone.
 *
 * `tagUid` names an entry of the document's own `tags[]`. A theme that paints
 * a tag the document does not carry is describing something the reader cannot
 * see: such an entry is dropped, exactly like any other dangling reference.
 */
declare const ThemeTagStyleV25Schema: z.ZodObject<{
    tagUid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
    style: z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    style: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    };
    tagUid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
}, {
    style: {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    };
    tagUid: string & {
        readonly __bypp_flavor?: "TagUid" | undefined;
    };
}>;
type ThemeTagStyleV25 = z.infer<typeof ThemeTagStyleV25Schema>;
/**
 * How a document wants its own prose to look — introduced in bypp format v25.
 *
 * Everything else a style touches in this format is a box on a sheet: a
 * widget, placed, padded and bordered. Prose had nothing. A bundle whose
 * headings, quotes and asides are half of what it is arrived somewhere else as
 * unstyled text, and the look had to be rebuilt by hand — which is not
 * something an author can ship.
 *
 * ── `elements` ──────────────────────────────────────────────────────────
 *
 * A style per element of the content, keyed by a NAME. The names a reader is
 * expected to recognise:
 *
 *   base                the content container itself — what everything under
 *                       it inherits, through the plain CSS cascade rather
 *                       than any rule of this format's own
 *   h1 … h6             a heading of that level, whatever produced it
 *   p                   a paragraph
 *   ul / ol             a list, and what it marks its items with
 *   blockquote          a quote block
 *   code                inline code and code blocks
 *   table               a table, its caption and its cells
 *   link                a link
 *   mention             an entity named inside prose
 *   mention-<type>      the same, for one entity type — `<type>` is a member
 *                       of `EntityTypeV1Schema` (`mention-place`,
 *                       `mention-creature`, …). It overrides the generic
 *                       `mention` property by property: a place and a
 *                       creature are not read the same way, so they are not
 *                       necessarily painted the same way either.
 *   block-<name>        a block wearing a named look — a warning, a note, an
 *                       aside. `<name>` is the word the block is written with
 *                       (the fence of a markdown chunk, the picker of an
 *                       editor), and this format does not enumerate those:
 *                       a producer's set of callouts is its own, and an open
 *                       format has no standing to freeze one vendor's.
 *
 * The key stays a plain `z.string()` for that last reason, and the same one
 * that keeps an icon name loose (see `../icons`): a producer whose vocabulary
 * is richer than the reader's must still be able to say what it means, and a
 * reader that does not know a name simply does not paint it. Nothing is
 * rejected; what the list above buys is being UNDERSTOOD.
 *
 * ── `slug` ──────────────────────────────────────────────────────────────
 *
 * The name of the theme these styles were written against — a hint, never the
 * authority. `elements` alone says what the document looks like; `slug` lets a
 * reader that happens to ship the same theme start from it and apply the
 * entries as the overrides they are. A reader that has never heard of it
 * ignores it and loses nothing.
 *
 * This file MUST NOT be modified once shipped.
 */
declare const ThemeV25Schema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    elements: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
        justifyContent: z.ZodOptional<z.ZodString>;
        alignItems: z.ZodOptional<z.ZodString>;
        flexDirection: z.ZodOptional<z.ZodString>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontFamilyId: z.ZodOptional<z.ZodString>;
        fontScale: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodString>;
        paddingTop: z.ZodOptional<z.ZodNumber>;
        paddingRight: z.ZodOptional<z.ZodNumber>;
        paddingBottom: z.ZodOptional<z.ZodNumber>;
        paddingLeft: z.ZodOptional<z.ZodNumber>;
        borderStyle: z.ZodOptional<z.ZodString>;
        borderColor: z.ZodOptional<z.ZodString>;
        borderRadius: z.ZodOptional<z.ZodString>;
        background: z.ZodOptional<z.ZodObject<{
            assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
            objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
        }, "strip", z.ZodTypeAny, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }, {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        }>>;
        rotation: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodString>;
        fontStyle: z.ZodOptional<z.ZodString>;
        marginTop: z.ZodOptional<z.ZodNumber>;
        marginRight: z.ZodOptional<z.ZodNumber>;
        marginBottom: z.ZodOptional<z.ZodNumber>;
        marginLeft: z.ZodOptional<z.ZodNumber>;
        backgroundColor: z.ZodOptional<z.ZodString>;
        textDecoration: z.ZodOptional<z.ZodString>;
        backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
    } & {
        margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
    }, "strip", z.ZodTypeAny, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>>>;
    tagStyles: z.ZodDefault<z.ZodArray<z.ZodObject<{
        tagUid: z.ZodType<TagUid, z.ZodTypeDef, TagUid>;
        style: z.ZodObject<{
            justifyContent: z.ZodOptional<z.ZodString>;
            alignItems: z.ZodOptional<z.ZodString>;
            flexDirection: z.ZodOptional<z.ZodString>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontFamilyId: z.ZodOptional<z.ZodString>;
            fontScale: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodString>;
            paddingTop: z.ZodOptional<z.ZodNumber>;
            paddingRight: z.ZodOptional<z.ZodNumber>;
            paddingBottom: z.ZodOptional<z.ZodNumber>;
            paddingLeft: z.ZodOptional<z.ZodNumber>;
            borderStyle: z.ZodOptional<z.ZodString>;
            borderColor: z.ZodOptional<z.ZodString>;
            borderRadius: z.ZodOptional<z.ZodString>;
            background: z.ZodOptional<z.ZodObject<{
                assetUid: z.ZodType<AssetUid, z.ZodTypeDef, AssetUid>;
                objectFit: z.ZodOptional<z.ZodEnum<["cover", "contain", "fill", "none", "scale-down"]>>;
            }, "strip", z.ZodTypeAny, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            }, {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            }>>;
            rotation: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodString>;
            fontStyle: z.ZodOptional<z.ZodString>;
            marginTop: z.ZodOptional<z.ZodNumber>;
            marginRight: z.ZodOptional<z.ZodNumber>;
            marginBottom: z.ZodOptional<z.ZodNumber>;
            marginLeft: z.ZodOptional<z.ZodNumber>;
            backgroundColor: z.ZodOptional<z.ZodString>;
            textDecoration: z.ZodOptional<z.ZodString>;
            backgroundRepeat: z.ZodOptional<z.ZodBoolean>;
        } & {
            margin: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            padding: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
            borderWidth: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodEffects<z.ZodArray<z.ZodNumber, "many">, number[], number[]>]>>;
        }, "strip", z.ZodTypeAny, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }, {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        style: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        };
        tagUid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
    }, {
        style: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        };
        tagUid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    elements: Record<string, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }>;
    tagStyles: {
        style: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        };
        tagUid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
    }[];
    slug?: string | undefined;
}, {
    slug?: string | undefined;
    elements?: Record<string, {
        color?: string | undefined;
        justifyContent?: string | undefined;
        alignItems?: string | undefined;
        flexDirection?: string | undefined;
        lineHeight?: number | undefined;
        fontFamilyId?: string | undefined;
        fontScale?: number | undefined;
        paddingTop?: number | undefined;
        paddingRight?: number | undefined;
        paddingBottom?: number | undefined;
        paddingLeft?: number | undefined;
        borderWidth?: number | number[] | undefined;
        borderStyle?: string | undefined;
        borderColor?: string | undefined;
        borderRadius?: string | undefined;
        background?: {
            assetUid: string & {
                readonly __bypp_flavor?: "AssetUid" | undefined;
            };
            objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
        } | undefined;
        rotation?: number | undefined;
        fontWeight?: string | undefined;
        fontStyle?: string | undefined;
        marginTop?: number | undefined;
        marginRight?: number | undefined;
        marginBottom?: number | undefined;
        marginLeft?: number | undefined;
        backgroundColor?: string | undefined;
        textDecoration?: string | undefined;
        backgroundRepeat?: boolean | undefined;
        margin?: number | number[] | undefined;
        padding?: number | number[] | undefined;
    }> | undefined;
    tagStyles?: {
        style: {
            color?: string | undefined;
            justifyContent?: string | undefined;
            alignItems?: string | undefined;
            flexDirection?: string | undefined;
            lineHeight?: number | undefined;
            fontFamilyId?: string | undefined;
            fontScale?: number | undefined;
            paddingTop?: number | undefined;
            paddingRight?: number | undefined;
            paddingBottom?: number | undefined;
            paddingLeft?: number | undefined;
            borderWidth?: number | number[] | undefined;
            borderStyle?: string | undefined;
            borderColor?: string | undefined;
            borderRadius?: string | undefined;
            background?: {
                assetUid: string & {
                    readonly __bypp_flavor?: "AssetUid" | undefined;
                };
                objectFit?: "fill" | "none" | "cover" | "contain" | "scale-down" | undefined;
            } | undefined;
            rotation?: number | undefined;
            fontWeight?: string | undefined;
            fontStyle?: string | undefined;
            marginTop?: number | undefined;
            marginRight?: number | undefined;
            marginBottom?: number | undefined;
            marginLeft?: number | undefined;
            backgroundColor?: string | undefined;
            textDecoration?: string | undefined;
            backgroundRepeat?: boolean | undefined;
            margin?: number | number[] | undefined;
            padding?: number | number[] | undefined;
        };
        tagUid: string & {
            readonly __bypp_flavor?: "TagUid" | undefined;
        };
    }[] | undefined;
}>;
type ThemeV25 = z.infer<typeof ThemeV25Schema>;

export { AbilityEntityV1Schema as A, type CharacterEntityV1 as C, type EntityBaseV1 as E, type GroupRankV1 as G, ItemEntityV1Schema as I, NoteEntityV1Schema as N, type PlaceEntityV1 as P, StoryEntityV1Schema as S, type ThemeV25 as T, type GroupRankCharacterV1 as a, CharacterEntityV1Schema as b, type CreatureEntityV1 as c, CreatureEntityV1Schema as d, EntityBaseV1Schema as e, type EntityTypeV1 as f, EntityTypeV1Schema as g, type EntityV1 as h, EntityV1Schema as i, EventEntityV1Schema as j, type GroupEntityV1 as k, GroupEntityV1Schema as l, GroupRankCharacterV1Schema as m, GroupRankV1Schema as n, PlaceEntityV1Schema as o, ThemeV25Schema as p, type ThemeStyleV25 as q, ThemeStyleV25Schema as r, type ThemeTagStyleV25 as s, ThemeTagStyleV25Schema as t };
