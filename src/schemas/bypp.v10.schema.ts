/**
 * Bypp format **v10** — frozen manifest.
 *
 * v10 carries the original image's pixel `dimensions` on every image-bearing
 * model, so a reader can reserve the right aspect-ratio before the image
 * loads (assets already had this; sheets need it to lay out their widgets).
 *
 * Headline changes vs v9:
 *
 *   • `sheets[]`           → `SheetV6`               (adds image `dimensions`)
 *   • `entities[]`         → `EntityV3`              (adds image `dimensions`)
 *   • `sceneMaps[]`        → `SceneMapV3`            (customImage `dimensions`)
 *   • `sceneBackgrounds[]` → `SceneBackgroundV3`     (customImage `dimensions`)
 *
 * Every other sub-schema is re-imported unchanged from its v9 version.
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
import { EntityV3Schema } from "../models/entity.v3.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV3Schema } from "../models/scene-background.v3.schema";
import { SceneMapV3Schema } from "../models/scene-map.v3.schema";
import { SheetV6Schema } from "../models/sheet.v6.schema";
import { TagV2Schema } from "../models/tag.v2.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV7Schema } from "../models/variable.v7.schema";
import { WidgetV7Schema } from "../models/widget.v7.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v10 — re-exported under the v10 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV10Schema,
  AttributionV3Schema as AttributionV10Schema,
  type CcLicenseV3 as CcLicenseV10,
  type AttributionV3 as AttributionV10,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV10Schema,
  type ParentAttributionV4 as ParentAttributionV10,
} from "./bypp.v4.schema";

export const BeyondPaperV10Schema = z.object({
  // Format metadata
  version: z.literal(10),
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
  entities: z.array(EntityV3Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV2Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV7Schema).default([]),
  widgets: z.array(WidgetV7Schema).default([]),
  sheets: z.array(SheetV6Schema).default([]),
  dataTables: z.array(DataTableV3Schema).default([]),
  randomTables: z.array(RandomTableV7Schema).default([]),
  tags: z.array(TagV2Schema).default([]),
  tagCategories: z.array(TagCategoryV1Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV3Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV3Schema).default([]),
  assets: z.array(AssetV2Schema).default([]),
});

export type BeyondPaperV10 = z.infer<typeof BeyondPaperV10Schema>;
