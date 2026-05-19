/**
 * Bypp format **v3** — frozen manifest.
 *
 * Adds top-level **licensing and attribution** metadata:
 *  - `license` — one of 8 Creative Commons 4.0 variants, or `"ARR"` (all
 *    rights reserved). Every bundle carries its license; readers MUST honor
 *    it. `"ARR"` is the only legal value for non-distributable bundles.
 *  - `licenseVersion` — locked to `"4.0"` for now (Creative Commons 4.0 is
 *    the only CC version this format supports).
 *  - `attribution` — required author block. Even `"CC0"` and `"ARR"` carry
 *    it (for "originally created by" credit / for legal ownership). Includes
 *    optional URLs (author home page, source bundle URL).
 *  - `parentAttribution` — optional. Set when this bundle was *transmuted*
 *    (derived) from another. Snapshot of the parent's attribution so the
 *    credit chain survives offline use.
 *  - `creatorLinks` — optional list of additional URLs where the creator
 *    can be found (other profiles, Ko-fi, Gumroad, Patreon, Itch.io, a
 *    Discord, a personal blog…). `attribution.authorUrl` already carries
 *    the canonical home page; this array is everything else.
 *
 * All other sub-schemas are unchanged from v2.
 *
 * This file MUST NOT be modified once shipped. See {@link "../bypp.v2.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV1Schema } from "../models/asset.v1.schema";
import { ChunkV1Schema } from "../models/chunk.v1.schema";
import { DataTableV2Schema } from "../models/data-table.v2.schema";
import { DatasetV1Schema } from "../models/dataset.v1.schema";
import { DialectV1Schema } from "../models/dialect.v1.schema";
import { EntityV1Schema } from "../models/entity.v1.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV1Schema } from "../models/random-table.v1.schema";
import { SceneV1Schema } from "../models/scene.v1.schema";
import { SceneBackgroundV1Schema } from "../models/scene-background.v1.schema";
import { SceneMapV1Schema } from "../models/scene-map.v1.schema";
import { SheetV2Schema } from "../models/sheet.v2.schema";
import { TagV1Schema } from "../models/tag.v1.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV2Schema } from "../models/variable.v2.schema";
import { WidgetV1Schema } from "../models/widget.v1.schema";

export const CcLicenseV3Schema = z.enum([
  "CC0",
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC-BY-ND",
  "CC-BY-NC-ND",
  "ARR",
]);
export type CcLicenseV3 = z.infer<typeof CcLicenseV3Schema>;

export const AttributionV3Schema = z.object({
  authorName: z.string().min(1),
  authorUrl: z.string().url().optional(),
  sourceUrl: z.string().url().optional(),
});
export type AttributionV3 = z.infer<typeof AttributionV3Schema>;

export const ParentAttributionV3Schema = z.object({
  artifactName: z.string().min(1),
  authorName: z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z.string().url().optional(),
});
export type ParentAttributionV3 = z.infer<typeof ParentAttributionV3Schema>;

export const BeyondPaperV3Schema = z.object({
  // Format metadata
  version: z.literal(3),
  format: z.literal("bypp"),

  // Bundle metadata
  name: z.string(),
  exportedAt: z.string(),
  bundleVersion: z.string(),

  // Licensing & attribution (new in v3)
  license: CcLicenseV3Schema,
  licenseVersion: z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV3Schema.optional(),
  creatorLinks: z.array(z.string().url()).optional(),

  // Content
  dialects: z.array(DialectV1Schema),
  entities: z.array(EntityV1Schema),
  pages: z.array(PageV1Schema),
  chunks: z.array(ChunkV1Schema),
  datasets: z.array(DatasetV1Schema),
  variables: z.array(VariableV2Schema),
  widgets: z.array(WidgetV1Schema),
  sheets: z.array(SheetV2Schema),
  dataTables: z.array(DataTableV2Schema),
  randomTables: z.array(RandomTableV1Schema),
  tags: z.array(TagV1Schema),
  tagCategories: z.array(TagCategoryV1Schema),
  scenes: z.array(SceneV1Schema),
  sceneMaps: z.array(SceneMapV1Schema),
  sceneBackgrounds: z.array(SceneBackgroundV1Schema),
  assets: z.array(AssetV1Schema),
});

export type BeyondPaperV3 = z.infer<typeof BeyondPaperV3Schema>;
