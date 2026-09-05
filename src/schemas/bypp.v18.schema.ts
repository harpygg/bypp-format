/**
 * Bypp format **v18** — frozen manifest.
 *
 * v18 lets a document say what it needs but does not carry. A bundle of
 * characters written against a rules system reads that system's sheets,
 * variables and data tables without shipping them — the system is its own
 * bundle, kept whole and up to date on its own. Before v18 such a document was
 * silently broken wherever the system was absent: every reference to a
 * variable or a table simply dangled. `requires[]` names those items up front,
 * by category and uid, so a reader can check presence — and, with the `from`
 * hint, offer to fetch the bundle that provides them. See
 * `../models/requirement.v1.schema`.
 *
 * Headline changes vs v17:
 *
 *   • new top-level `requires[]` → `RequirementV1`, default `[]`
 *
 * Every content array is re-imported unchanged from its v17 version — v18
 * adds one manifest field and touches no item.
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
import { DialectV3Schema } from "../models/dialect.v3.schema";
import { EntityV4Schema } from "../models/entity.v4.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { RequirementV1Schema } from "../models/requirement.v1.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV4Schema } from "../models/scene-background.v4.schema";
import { SceneMapV4Schema } from "../models/scene-map.v4.schema";
import { SheetV7Schema } from "../models/sheet.v7.schema";
import { TagV3Schema } from "../models/tag.v3.schema";
import { TagCategoryV2Schema } from "../models/tag-category.v2.schema";
import { VariableV8Schema } from "../models/variable.v8.schema";
import { WidgetV9Schema } from "../models/widget.v9.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v18 — re-exported under the v18 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV18Schema,
  AttributionV3Schema as AttributionV18Schema,
  type CcLicenseV3 as CcLicenseV18,
  type AttributionV3 as AttributionV18,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV18Schema,
  type ParentAttributionV4 as ParentAttributionV18,
} from "./bypp.v4.schema";

export const BeyondPaperV18Schema = z.object({
  // Format metadata
  version: z.literal(18),
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

  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z.array(RequirementV1Schema).default([]),

  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z.array(DialectV3Schema).default([]),
  entities: z.array(EntityV4Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV11Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV8Schema).default([]),
  widgets: z.array(WidgetV9Schema).default([]),
  sheets: z.array(SheetV7Schema).default([]),
  dataTables: z.array(DataTableV3Schema).default([]),
  randomTables: z.array(RandomTableV7Schema).default([]),
  tags: z.array(TagV3Schema).default([]),
  tagCategories: z.array(TagCategoryV2Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV4Schema).default([]),
  assets: z.array(AssetV3Schema).default([]),
});

export type BeyondPaperV18 = z.infer<typeof BeyondPaperV18Schema>;
