/**
 * Bypp format **v7** — frozen manifest.
 *
 * v7 reshapes random tables:
 *
 *   • Random table row (v7): the single optional `randomTableUid` nested-table
 *     reference becomes a `randomTableRefs` map keyed by the placeholder token
 *     used in `content` — a row can roll several nested tables and place each
 *     result by token.
 *   • Random table (v7): gains an optional `diceFormula` override.
 *
 *     See {@link "../models/random-table.v7.schema"}.
 *
 * Headline change vs v6:
 *
 *   • `randomTables[]` rows carry a `randomTableRefs` placeholder map instead
 *     of a single `randomTableUid`, and tables may carry a `diceFormula`.
 *
 * Every other sub-schema is re-imported unchanged from its earlier version.
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
import { SheetV3Schema } from "../models/sheet.v3.schema";
import { TagV2Schema } from "../models/tag.v2.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV6Schema } from "../models/variable.v6.schema";
import { WidgetV5Schema } from "../models/widget.v5.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v7 — re-exported under the v7 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV7Schema,
  AttributionV3Schema as AttributionV7Schema,
  type CcLicenseV3 as CcLicenseV7,
  type AttributionV3 as AttributionV7,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV7Schema,
  type ParentAttributionV4 as ParentAttributionV7,
} from "./bypp.v4.schema";

export const BeyondPaperV7Schema = z.object({
  // Format metadata
  version: z.literal(7),
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
  randomTables: z.array(RandomTableV7Schema).default([]),
  tags: z.array(TagV2Schema).default([]),
  tagCategories: z.array(TagCategoryV1Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV2Schema).default([]),
  assets: z.array(AssetV2Schema).default([]),
});

export type BeyondPaperV7 = z.infer<typeof BeyondPaperV7Schema>;
