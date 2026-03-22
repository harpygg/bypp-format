import { z } from "zod";
import { BYPP_FORMAT_VERSION } from "./version";
import { AssetSchema } from "./models/asset.schema";
import { ChunkSchema } from "./models/chunk.schema";
import { DatasetSchema } from "./models/dataset.schema";
import { DialectSchema } from "./models/dialect.schema";
import { EntitySchema } from "./models/entity.schema";
import { PageSchema } from "./models/page.schema";
import { RandomTableSchema } from "./models/random-table.schema";
import { SceneSchema } from "./models/scene.schema";
import { SceneBackgroundSchema } from "./models/scene-background.schema";
import { SceneMapSchema } from "./models/scene-map.schema";
import { TagSchema } from "./models/tag.schema";
import { TagCategorySchema } from "./models/tag-category.schema";
import { VariableSchema } from "./models/variable.schema";
import { WidgetSchema } from "./models/widget.schema";

export const BeyondPaperSchema = z.object({
  // Format metadata
  version: z.literal(BYPP_FORMAT_VERSION),
  format: z.literal("bypp"),

  // Bundle metadata
  name: z.string(),
  exportedAt: z.string(),
  bundleVersion: z.string(),

  // Content
  dialects: z.array(DialectSchema),
  entities: z.array(EntitySchema),
  pages: z.array(PageSchema),
  chunks: z.array(ChunkSchema),
  datasets: z.array(DatasetSchema),
  variables: z.array(VariableSchema),
  widgets: z.array(WidgetSchema),
  randomTables: z.array(RandomTableSchema),
  tags: z.array(TagSchema),
  tagCategories: z.array(TagCategorySchema),
  scenes: z.array(SceneSchema),
  sceneMaps: z.array(SceneMapSchema),
  sceneBackgrounds: z.array(SceneBackgroundSchema),
  assets: z.array(AssetSchema),
});

export type BeyondPaper = z.infer<typeof BeyondPaperSchema>;
