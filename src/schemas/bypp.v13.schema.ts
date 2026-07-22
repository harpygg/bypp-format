/**
 * Bypp format **v13** — frozen manifest.
 *
 * v13 is about crediting individual files. Every media-bearing model gains an
 * optional `credit` block — `{ name, url?, license? }`, see
 * `../mixins/with-credit.v1.schema` — so an illustrator, composer or
 * cartographer can be named on the file they made, and a bundle carrying a
 * mix of licences can be honest file by file instead of collapsing to its
 * most restrictive item.
 *
 * Headline changes vs v12:
 *
 *   • `assets[]`            → `AssetV3` (credit on every variant)
 *   • `entities[]`          → `EntityV4` (credit on the base, so every variant)
 *   • `sceneMaps[]`         → `SceneMapV4` (credit on image AND video)
 *   • `sceneBackgrounds[]`  → `SceneBackgroundV4` (credit on image AND video)
 *   • `sheets[]`            → `SheetV7` (credit on the sheet background)
 *   • `widgets[]`           → `WidgetV9` (credit on every variant)
 *
 * The bundle-level `license` / `attribution` block is untouched: it still
 * states the licence of the bundle as a work. A file-level `credit.license`
 * overrides it for that one file; absent, the file inherits the bundle's.
 *
 * Every other sub-schema is re-imported unchanged from its v12 version.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v5.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV3Schema } from "../models/asset.v3.schema";
import { ChunkV11Schema } from "../models/chunk.v11.schema";
import { DataTableV3Schema } from "../models/data-table.v3.schema";
import { DatasetV2Schema } from "../models/dataset.v2.schema";
import { DialectV2Schema } from "../models/dialect.v2.schema";
import { EntityV4Schema } from "../models/entity.v4.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV4Schema } from "../models/scene-background.v4.schema";
import { SceneMapV4Schema } from "../models/scene-map.v4.schema";
import { SheetV7Schema } from "../models/sheet.v7.schema";
import { TagV2Schema } from "../models/tag.v2.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV7Schema } from "../models/variable.v7.schema";
import { WidgetV9Schema } from "../models/widget.v9.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v13 — re-exported under the v13 name
// so the per-version schema files stay self-contained. The new per-file
// `credit.license` reuses this very enum; the format has exactly one licence
// vocabulary.
export {
  CcLicenseV3Schema as CcLicenseV13Schema,
  AttributionV3Schema as AttributionV13Schema,
  type CcLicenseV3 as CcLicenseV13,
  type AttributionV3 as AttributionV13,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV13Schema,
  type ParentAttributionV4 as ParentAttributionV13,
} from "./bypp.v4.schema";

export const BeyondPaperV13Schema = z.object({
  // Format metadata
  version: z.literal(13),
  format: z.literal("bypp"),

  // Bundle metadata
  name: z.string(),
  exportedAt: z.string(),
  bundleVersion: z.string(),

  // Licensing & attribution
  license: CcLicenseV3Schema,
  licenseVersion: z.literal("4.0"),
  attribution: AttributionV3Schema,
  parentAttribution: ParentAttributionV4Schema.optional(),
  creatorLinks: z.array(z.string().url()).optional(),

  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z.array(DialectV2Schema).default([]),
  entities: z.array(EntityV4Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV11Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV7Schema).default([]),
  widgets: z.array(WidgetV9Schema).default([]),
  sheets: z.array(SheetV7Schema).default([]),
  dataTables: z.array(DataTableV3Schema).default([]),
  randomTables: z.array(RandomTableV7Schema).default([]),
  tags: z.array(TagV2Schema).default([]),
  tagCategories: z.array(TagCategoryV1Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV4Schema).default([]),
  assets: z.array(AssetV3Schema).default([]),
});

export type BeyondPaperV13 = z.infer<typeof BeyondPaperV13Schema>;
