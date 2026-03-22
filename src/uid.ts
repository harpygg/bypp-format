import { z } from "zod";

/**
 * Flavored UID types for the .bypp format.
 *
 * Uses "flavoring" (optional phantom property) instead of strict branding.
 * This makes the types:
 * 1. Incompatible with each other (can't put an EntityUid where a PageUid is expected)
 * 2. Compatible with ANY consumer's own branded strings (Typesaurus, Zod, etc.)
 *    because the flavor property is optional — any `string` or `string & { ... }`
 *    satisfies the contract without needing to carry the flavor key.
 *
 * @see https://spin.atomicobject.com/typescript-flexible-nominal-typing/
 */

type Flavor<T extends string> = string & { readonly __bypp_flavor?: T };

// ─── Flavored UID types ─────────────────────────────────────────────

export type EntityUid = Flavor<"EntityUid">;
export type PageUid = Flavor<"PageUid">;
export type ChunkUid = Flavor<"ChunkUid">;
export type DatasetUid = Flavor<"DatasetUid">;
export type VariableUid = Flavor<"VariableUid">;
export type WidgetUid = Flavor<"WidgetUid">;
export type RandomTableUid = Flavor<"RandomTableUid">;
export type RandomTableRowUid = Flavor<"RandomTableRowUid">;
export type TagUid = Flavor<"TagUid">;
export type TagCategoryUid = Flavor<"TagCategoryUid">;
export type SceneUid = Flavor<"SceneUid">;
export type SceneMapUid = Flavor<"SceneMapUid">;
export type SceneBackgroundUid = Flavor<"SceneBackgroundUid">;
export type AssetUid = Flavor<"AssetUid">;
export type DialectUid = Flavor<"DialectUid">;
export type SheetUid = Flavor<"SheetUid">;
export type EntityTokenUid = Flavor<"EntityTokenUid">;
export type VariableChoiceUid = Flavor<"VariableChoiceUid">;

// ─── Zod schemas for branded UIDs ───────────────────────────────────
// At runtime these are just z.string(). The `as` cast gives us the
// branded type in z.infer<> without relying on z.brand() (which uses
// its own branding mechanism incompatible with other systems).

export const EntityUidSchema = z.string() as unknown as z.ZodType<EntityUid>;
export const PageUidSchema = z.string() as unknown as z.ZodType<PageUid>;
export const ChunkUidSchema = z.string() as unknown as z.ZodType<ChunkUid>;
export const DatasetUidSchema = z.string() as unknown as z.ZodType<DatasetUid>;
export const VariableUidSchema = z.string() as unknown as z.ZodType<VariableUid>;
export const WidgetUidSchema = z.string() as unknown as z.ZodType<WidgetUid>;
export const RandomTableUidSchema = z.string() as unknown as z.ZodType<RandomTableUid>;
export const RandomTableRowUidSchema = z.string() as unknown as z.ZodType<RandomTableRowUid>;
export const TagUidSchema = z.string() as unknown as z.ZodType<TagUid>;
export const TagCategoryUidSchema = z.string() as unknown as z.ZodType<TagCategoryUid>;
export const SceneUidSchema = z.string() as unknown as z.ZodType<SceneUid>;
export const SceneMapUidSchema = z.string() as unknown as z.ZodType<SceneMapUid>;
export const SceneBackgroundUidSchema = z.string() as unknown as z.ZodType<SceneBackgroundUid>;
export const AssetUidSchema = z.string() as unknown as z.ZodType<AssetUid>;
export const DialectUidSchema = z.string() as unknown as z.ZodType<DialectUid>;
export const SheetUidSchema = z.string() as unknown as z.ZodType<SheetUid>;
export const EntityTokenUidSchema = z.string() as unknown as z.ZodType<EntityTokenUid>;
export const VariableChoiceUidSchema = z.string() as unknown as z.ZodType<VariableChoiceUid>;
