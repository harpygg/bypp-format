/**
 * Bypp format **v1** — frozen manifest.
 *
 * Composes the sub-schemas as they were when v1 shipped. This file MUST NOT
 * be modified once shipped: it's the authoritative shape against which v1
 * bundles are validated before migration.
 *
 * Notice that the variable union is `VariableV1Schema` (no `dataTableRef` /
 * `dataTableLookup`) and there are no `sheets` / `dataTables` arrays — those
 * were introduced in v2.
 */

import { z } from "zod";
import { AssetV1Schema } from "../models/asset.v1.schema";
import { ChunkV1Schema } from "../models/chunk.v1.schema";
import { DatasetV1Schema } from "../models/dataset.v1.schema";
import { DialectV1Schema } from "../models/dialect.v1.schema";
import { EntityV1Schema } from "../models/entity.v1.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV1Schema } from "../models/random-table.v1.schema";
import { SceneV1Schema } from "../models/scene.v1.schema";
import { SceneBackgroundV1Schema } from "../models/scene-background.v1.schema";
import { SceneMapV1Schema } from "../models/scene-map.v1.schema";
import { TagV1Schema } from "../models/tag.v1.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV1Schema } from "../models/variable.v1.schema";
import { WidgetV1Schema } from "../models/widget.v1.schema";

export const BeyondPaperV1Schema = z.object({
  // Format metadata
  version: z.literal(1),
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
  variables: z.array(VariableV1Schema),
  widgets: z.array(WidgetV1Schema),
  randomTables: z.array(RandomTableV1Schema),
  tags: z.array(TagV1Schema),
  tagCategories: z.array(TagCategoryV1Schema),
  scenes: z.array(SceneV1Schema),
  sceneMaps: z.array(SceneMapV1Schema),
  sceneBackgrounds: z.array(SceneBackgroundV1Schema),
  assets: z.array(AssetV1Schema),
});

export type BeyondPaperV1 = z.infer<typeof BeyondPaperV1Schema>;
