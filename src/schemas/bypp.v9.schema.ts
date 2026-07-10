/**
 * Bypp format **v9** — frozen manifest.
 *
 * v9 adds ONE widget variant: the `wheel` rotary value picker
 * (`widget.v7.schema.ts`). Every other sub-schema is re-imported unchanged
 * from its earlier version.
 *
 * Headline change vs v8:
 *
 *   • `widgets[]` → `WidgetV7` (adds the `wheel` variant).
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
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV2Schema } from "../models/scene-background.v2.schema";
import { SceneMapV2Schema } from "../models/scene-map.v2.schema";
import { SheetV5Schema } from "../models/sheet.v5.schema";
import { TagV2Schema } from "../models/tag.v2.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV7Schema } from "../models/variable.v7.schema";
import { WidgetV7Schema } from "../models/widget.v7.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v9 — re-exported under the v9 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV9Schema,
  AttributionV3Schema as AttributionV9Schema,
  type CcLicenseV3 as CcLicenseV9,
  type AttributionV3 as AttributionV9,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV9Schema,
  type ParentAttributionV4 as ParentAttributionV9,
} from "./bypp.v4.schema";

export const BeyondPaperV9Schema = z.object({
  // Format metadata
  version: z.literal(9),
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
  variables: z.array(VariableV7Schema).default([]),
  widgets: z.array(WidgetV7Schema).default([]),
  sheets: z.array(SheetV5Schema).default([]),
  dataTables: z.array(DataTableV3Schema).default([]),
  randomTables: z.array(RandomTableV7Schema).default([]),
  tags: z.array(TagV2Schema).default([]),
  tagCategories: z.array(TagCategoryV1Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV2Schema).default([]),
  assets: z.array(AssetV2Schema).default([]),
});

export type BeyondPaperV9 = z.infer<typeof BeyondPaperV9Schema>;
