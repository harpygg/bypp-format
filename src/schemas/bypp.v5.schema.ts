/**
 * Bypp format **v5** — frozen manifest.
 *
 * v5 adds two entity-image-oriented variants:
 *
 *   • Widget (v5): a new `entityImage` widget that renders the bound
 *     entity's image, with optional `formatSlug` / `objectFit` rendering
 *     hints. See {@link "../models/widget.v5.schema"}.
 *   • Variable (v5): a new `image` variable that proxies one of the
 *     entity's images (the `entityImage` widget reads it). See
 *     {@link "../models/variable.v5.schema"}.
 *
 * Headline changes vs v4:
 *
 *   • `widgets[]` now accepts `entityImage` widgets in addition to the
 *     eight v1 variants.
 *   • `variables[]` now accepts `image` variables in addition to the
 *     eight v2 variants.
 *
 * Both new schemas re-import every unchanged variant from their earlier
 * versions; only the new variant and the union are defined fresh.
 * Everything else is identical to v4.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v4.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV2Schema } from "../models/asset.v2.schema";
import { ChunkV2Schema } from "../models/chunk.v2.schema";
import { DataTableV3Schema } from "../models/data-table.v3.schema";
import { DatasetV2Schema } from "../models/dataset.v2.schema";
import { DialectV2Schema } from "../models/dialect.v2.schema";
import { EntityV2Schema } from "../models/entity.v2.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV2Schema } from "../models/random-table.v2.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV2Schema } from "../models/scene-background.v2.schema";
import { SceneMapV2Schema } from "../models/scene-map.v2.schema";
import { SheetV3Schema } from "../models/sheet.v3.schema";
import { TagV2Schema } from "../models/tag.v2.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV5Schema } from "../models/variable.v5.schema";
import { WidgetV5Schema } from "../models/widget.v5.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v5 — re-exported under the v5 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV5Schema,
  AttributionV3Schema as AttributionV5Schema,
  type CcLicenseV3 as CcLicenseV5,
  type AttributionV3 as AttributionV5,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV5Schema,
  type ParentAttributionV4 as ParentAttributionV5,
} from "./bypp.v4.schema";

export const BeyondPaperV5Schema = z.object({
  // Format metadata
  version: z.literal(5),
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
  entities: z.array(EntityV2Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV2Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV5Schema).default([]),
  widgets: z.array(WidgetV5Schema).default([]),
  sheets: z.array(SheetV3Schema).default([]),
  dataTables: z.array(DataTableV3Schema).default([]),
  randomTables: z.array(RandomTableV2Schema).default([]),
  tags: z.array(TagV2Schema).default([]),
  tagCategories: z.array(TagCategoryV1Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV2Schema).default([]),
  assets: z.array(AssetV2Schema).default([]),
});

export type BeyondPaperV5 = z.infer<typeof BeyondPaperV5Schema>;
