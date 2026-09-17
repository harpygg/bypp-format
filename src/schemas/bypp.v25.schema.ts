/**
 * Bypp format **v25** — frozen manifest.
 *
 * v25 lets a document say how its own prose should look. Until v24 a style
 * described a box on a sheet, and the words themselves — the headings, the
 * quotes, the asides, the entity named mid-sentence — had nowhere to be
 * described at all. A bundle whose look is half of what it is arrived
 * somewhere else as unstyled text.
 *
 * Headline changes vs v24:
 *
 *   • `theme` — a NEW ROOT KEY, optional. A style per element of the content,
 *     a style per tag (ordered: later ones win), and the name of the theme
 *     they were written against. See `../models/theme.v25.schema`.
 *
 * A root key rather than a content array, because a theme is not an item: a
 * document has one look, not a list of them, and nothing else in the document
 * points at it. It sits beside `requires` and `image`, which are the same kind
 * of thing — what the document IS, rather than what it CARRIES.
 *
 * Every content array is re-imported unchanged from its v24 version.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v5.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV3Schema } from "../models/asset.v3.schema";
import { BundleImageV14Schema } from "../models/bundle-image.v14.schema";
import { ChunkV12Schema } from "../models/chunk.v12.schema";
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
import { ThemeV25Schema } from "../models/theme.v25.schema";
import { VariableV9Schema } from "../models/variable.v9.schema";
import { WidgetV13Schema } from "../models/widget.v13.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v25 — re-exported under the v25 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV25Schema,
  AttributionV3Schema as AttributionV25Schema,
  type CcLicenseV3 as CcLicenseV25,
  type AttributionV3 as AttributionV25,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV25Schema,
  type ParentAttributionV4 as ParentAttributionV25,
} from "./bypp.v4.schema";

export const BeyondPaperV25Schema = z.object({
  // Format metadata
  version: z.literal(25),
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

  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25: a document that says nothing here is
  // painted by whatever surrounds it, which is what they all were.
  theme: ThemeV25Schema.optional(),

  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z.array(DialectV3Schema).default([]),
  entities: z.array(EntityV5Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV12Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV9Schema).default([]),
  widgets: z.array(WidgetV13Schema).default([]),
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

export type BeyondPaperV25 = z.infer<typeof BeyondPaperV25Schema>;
