/**
 * Bypp format **v6** — frozen manifest.
 *
 * v6 adds one variant:
 *
 *   • Variable (v6): a new `dataTableDirectLookup` variable that reads a
 *     column from explicitly chosen row(s) of a data-table — the
 *     source-less sibling of `dataTableLookup`. See
 *     {@link "../models/variable.v6.schema"}.
 *
 * Headline change vs v5:
 *
 *   • `variables[]` now accepts `dataTableDirectLookup` variables in
 *     addition to the nine v5 variants.
 *
 * The new variable schema re-imports every unchanged variant from its
 * earlier versions; only the new variant and the union are defined fresh.
 * Everything else is identical to v5.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v5.schema"}
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
import { VariableV6Schema } from "../models/variable.v6.schema";
import { WidgetV5Schema } from "../models/widget.v5.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v6 — re-exported under the v6 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV6Schema,
  AttributionV3Schema as AttributionV6Schema,
  type CcLicenseV3 as CcLicenseV6,
  type AttributionV3 as AttributionV6,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV6Schema,
  type ParentAttributionV4 as ParentAttributionV6,
} from "./bypp.v4.schema";

export const BeyondPaperV6Schema = z.object({
  // Format metadata
  version: z.literal(6),
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
  variables: z.array(VariableV6Schema).default([]),
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

export type BeyondPaperV6 = z.infer<typeof BeyondPaperV6Schema>;
