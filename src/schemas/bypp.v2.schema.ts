/**
 * Bypp format **v2** — frozen manifest.
 *
 * Composes the sub-schemas as they are in v2:
 *  - `variables` uses the **v2** variable union (adds `dataTableRef` and
 *    `dataTableLookup` variants on top of v1).
 *  - `sheets` and `dataTables` arrays — both introduced in v2.
 *  - All other sub-schemas reuse their v1 schemas because their shape is
 *    unchanged since v1.
 *
 * This file MUST NOT be modified once shipped. When a sub-schema evolves
 * for v3+:
 *
 *   1. Fork the affected sub-schema into a new versioned file
 *      (e.g. `models/widget.v3.schema.ts`) — leaving the v1 file untouched
 *      since this manifest still references it.
 *   2. Create `schemas/bypp.v3.schema.ts` that imports the forked schemas
 *      alongside the unchanged ones.
 *   3. Write `migrations/v2-to-v3.ts` typed
 *      `Migrator<BeyondPaperV2, BeyondPaperV3>`.
 */

import { z } from "zod";
import { AssetV1Schema } from "../models/asset.v1.schema";
import { ChunkV1Schema } from "../models/chunk.v1.schema";
import { DataTableV2Schema } from "../models/data-table.v2.schema";
import { DatasetV1Schema } from "../models/dataset.v1.schema";
import { DialectV1Schema } from "../models/dialect.v1.schema";
import { EntityV1Schema } from "../models/entity.v1.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV1Schema } from "../models/random-table.v1.schema";
import { SceneV1Schema } from "../models/scene.v1.schema";
import { SceneBackgroundV1Schema } from "../models/scene-background.v1.schema";
import { SceneMapV1Schema } from "../models/scene-map.v1.schema";
import { SheetV2Schema } from "../models/sheet.v2.schema";
import { TagV1Schema } from "../models/tag.v1.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV2Schema } from "../models/variable.v2.schema";
import { WidgetV1Schema } from "../models/widget.v1.schema";

export const BeyondPaperV2Schema = z.object({
  // Format metadata
  version: z.literal(2),
  format: z.literal("bypp"),

  // Bundle metadata
  name: z.string(),
  exportedAt: z.string(),
  bundleVersion: z.string(),

  // Content
  dialects: z.array(DialectV1Schema),
  entities: z.array(EntityV1Schema),
  pages: z.array(PageV1Schema),
  chunks: z.array(ChunkV1Schema),
  datasets: z.array(DatasetV1Schema),
  variables: z.array(VariableV2Schema),
  widgets: z.array(WidgetV1Schema),
  sheets: z.array(SheetV2Schema),
  dataTables: z.array(DataTableV2Schema),
  randomTables: z.array(RandomTableV1Schema),
  tags: z.array(TagV1Schema),
  tagCategories: z.array(TagCategoryV1Schema),
  scenes: z.array(SceneV1Schema),
  sceneMaps: z.array(SceneMapV1Schema),
  sceneBackgrounds: z.array(SceneBackgroundV1Schema),
  assets: z.array(AssetV1Schema),
});

export type BeyondPaperV2 = z.infer<typeof BeyondPaperV2Schema>;
