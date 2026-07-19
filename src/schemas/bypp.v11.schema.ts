/**
 * Bypp format **v11** — frozen manifest.
 *
 * v11 lets a text chunk name the entity its variable references resolve
 * against, via `wrappedInEntityUid`. This supersedes the `textProxy` chunk
 * variant, which expressed the same thing as a second chunk pointing at the
 * one holding the text — an indirection that carried no extra information and
 * let the two documents drift apart. `textProxy` remains in the union so
 * pre-v11 bundles keep parsing; producers should stop emitting it.
 *
 * Headline changes vs v10:
 *
 *   • `chunks[]` → `ChunkV11` (text variant gains `wrappedInEntityUid`)
 *
 * Every other sub-schema is re-imported unchanged from its v10 version.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v5.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV2Schema } from "../models/asset.v2.schema";
import { ChunkV11Schema } from "../models/chunk.v11.schema";
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

// Licensing / attribution unchanged in v11 — re-exported under the v11 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV11Schema,
  AttributionV3Schema as AttributionV11Schema,
  type CcLicenseV3 as CcLicenseV11,
  type AttributionV3 as AttributionV11,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV11Schema,
  type ParentAttributionV4 as ParentAttributionV11,
} from "./bypp.v4.schema";

export const BeyondPaperV11Schema = z.object({
  // Format metadata
  version: z.literal(11),
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
  chunks: z.array(ChunkV11Schema).default([]),
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

export type BeyondPaperV11 = z.infer<typeof BeyondPaperV11Schema>;
