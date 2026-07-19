/**
 * Bypp format **v12** — frozen manifest.
 *
 * v12 is about letting a sheet trigger dice rolls. A widget can now carry
 * extra `roll` variables to offer when it's activated
 * (`actionsVariablesUids`, on every variant), and there is a new `actionRoll`
 * widget whose whole purpose is to roll the variable it's bound to.
 *
 * Headline changes vs v11:
 *
 *   • `widgets[]` → `WidgetV8` (every variant gains `actionsVariablesUids`;
 *     new `actionRoll` variant)
 *
 * Every other sub-schema is re-imported unchanged from its v11 version.
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
import { WidgetV8Schema } from "../models/widget.v8.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v12 — re-exported under the v12 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV12Schema,
  AttributionV3Schema as AttributionV12Schema,
  type CcLicenseV3 as CcLicenseV12,
  type AttributionV3 as AttributionV12,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV12Schema,
  type ParentAttributionV4 as ParentAttributionV12,
} from "./bypp.v4.schema";

export const BeyondPaperV12Schema = z.object({
  // Format metadata
  version: z.literal(12),
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
  widgets: z.array(WidgetV8Schema).default([]),
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

export type BeyondPaperV12 = z.infer<typeof BeyondPaperV12Schema>;
