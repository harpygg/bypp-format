/**
 * Bypp format **v14** — frozen manifest.
 *
 * v14 gives the bundle a face: an optional top-level `image` — the bundle's
 * own cover, see `../models/bundle-image.v14.schema`. Until now every model
 * inside a bundle could carry a picture but the bundle itself could not, so a
 * reader listing the `.bypp` files it holds had a name and nothing else to
 * put on the shelf.
 *
 * Headline changes vs v13:
 *
 *   • `image?`  → `BundleImageV14` (pre-rendered URLs + dimensions + credit)
 *
 * Every content array is re-imported unchanged from its v13 version — v14
 * touches the manifest only.
 *
 * The `image.credit` block is the same one v13 put on every media-bearing
 * model, for the same reason: cover art is usually commissioned, and the
 * artist is rarely the bundle's author. It overrides the bundle-level
 * `license` for that one file; absent, the cover inherits it.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v5.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV3Schema } from "../models/asset.v3.schema";
import { BundleImageV14Schema } from "../models/bundle-image.v14.schema";
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

// Licensing / attribution unchanged in v14 — re-exported under the v14 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV14Schema,
  AttributionV3Schema as AttributionV14Schema,
  type CcLicenseV3 as CcLicenseV14,
  type AttributionV3 as AttributionV14,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV14Schema,
  type ParentAttributionV4 as ParentAttributionV14,
} from "./bypp.v4.schema";

export const BeyondPaperV14Schema = z.object({
  // Format metadata
  version: z.literal(14),
  format: z.literal("bypp"),

  // Bundle metadata
  name: z.string(),
  exportedAt: z.string(),
  bundleVersion: z.string(),
  // The bundle's cover. Optional: a bundle with no cover simply omits it,
  // and so does every document produced before v14.
  image: BundleImageV14Schema.optional(),

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

export type BeyondPaperV14 = z.infer<typeof BeyondPaperV14Schema>;
