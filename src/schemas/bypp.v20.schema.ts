/**
 * Bypp format **v20** — frozen manifest.
 *
 * v20 lets an entity act on its own. Until now everything an entity could do
 * came from a sheet, and a sheet's roll belongs to every entity of its
 * dataset: a named sword with its own attack had nowhere to put it, and
 * exporting one dropped the attack in silence. `EntityV5` carries `actions`,
 * a list that travels with the entity. See `../models/entity-action.v1.schema`.
 *
 * Headline changes vs v19:
 *
 *   • `entities[]` → `EntityV5` (adds `actions`)
 *
 * Every other content array is re-imported unchanged from its v19 version.
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
import { EntityV5Schema } from "../models/entity.v5.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { RequirementV1Schema } from "../models/requirement.v1.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV4Schema } from "../models/scene-background.v4.schema";
import { SceneMapV4Schema } from "../models/scene-map.v4.schema";
import { SheetV7Schema } from "../models/sheet.v7.schema";
import { TagV3Schema } from "../models/tag.v3.schema";
import { TagCategoryV2Schema } from "../models/tag-category.v2.schema";
import { VariableV9Schema } from "../models/variable.v9.schema";
import { WidgetV10Schema } from "../models/widget.v10.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v20 — re-exported under the v19 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV20Schema,
  AttributionV3Schema as AttributionV20Schema,
  type CcLicenseV3 as CcLicenseV20,
  type AttributionV3 as AttributionV20,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV20Schema,
  type ParentAttributionV4 as ParentAttributionV20,
} from "./bypp.v4.schema";

export const BeyondPaperV20Schema = z.object({
  // Format metadata
  version: z.literal(20),
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
  entities: z.array(EntityV5Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV11Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV9Schema).default([]),
  widgets: z.array(WidgetV10Schema).default([]),
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

export type BeyondPaperV20 = z.infer<typeof BeyondPaperV20Schema>;
