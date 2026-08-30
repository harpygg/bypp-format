/**
 * Bypp format **v17** — frozen manifest.
 *
 * v17 lets a tag and a tag category name an icon. Tags are drawn as much as
 * they are read — a sword next to "Weapon", a crown next to "Noble" — and the
 * format carried the word while dropping the picture, so a bundle that went
 * out and came back arrived as a wall of text with every icon re-picked by
 * hand. See `../models/tag.v3.schema` and `../models/tag-category.v2.schema`.
 *
 * Alongside v17 the package also publishes a reference registry of icon SLUGS
 * (`../icons`, and `icons.json` for non-JavaScript consumers) — one vocabulary
 * among several, covering the tabletop-specific shapes a general-purpose icon
 * library doesn't carry. It is NOT part of this manifest, is not reachable
 * from this version's entry point, and validates nothing: icon fields stay
 * loose strings, in v17 exactly as in v1, and every consumer is free to match
 * a slug against whatever icon library it draws with. The registry exists so
 * that two producers naming the same shield write the same word.
 *
 * Headline changes vs v16:
 *
 *   • `tags[]` → `TagV3` (optional `icon`)
 *   • `tagCategories[]` → `TagCategoryV2` (optional `icon`)
 *
 * Every other content array is re-imported unchanged from its v16 version —
 * v17 touches tags and tag categories only.
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
import { EntityV4Schema } from "../models/entity.v4.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV4Schema } from "../models/scene-background.v4.schema";
import { SceneMapV4Schema } from "../models/scene-map.v4.schema";
import { SheetV7Schema } from "../models/sheet.v7.schema";
import { TagV3Schema } from "../models/tag.v3.schema";
import { TagCategoryV2Schema } from "../models/tag-category.v2.schema";
import { VariableV8Schema } from "../models/variable.v8.schema";
import { WidgetV9Schema } from "../models/widget.v9.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v17 — re-exported under the v17 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV17Schema,
  AttributionV3Schema as AttributionV17Schema,
  type CcLicenseV3 as CcLicenseV17,
  type AttributionV3 as AttributionV17,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV17Schema,
  type ParentAttributionV4 as ParentAttributionV17,
} from "./bypp.v4.schema";

export const BeyondPaperV17Schema = z.object({
  // Format metadata
  version: z.literal(17),
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

  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z.array(DialectV3Schema).default([]),
  entities: z.array(EntityV4Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV11Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV8Schema).default([]),
  widgets: z.array(WidgetV9Schema).default([]),
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

export type BeyondPaperV17 = z.infer<typeof BeyondPaperV17Schema>;
