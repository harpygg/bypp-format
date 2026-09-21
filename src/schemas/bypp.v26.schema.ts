/**
 * Bypp format **v26** — frozen manifest.
 *
 * v26 lets an action DO something beyond rolling: an item's "Purchase" that
 * takes its price out of the buyer's purse and says so in the chat. Until
 * v25 such an action had nowhere to live.
 *
 * Headline changes vs v25:
 *
 *   • `variables[]` — the `roll` variant gains two optional sections
 *     (`../models/variable.v10.schema`): `updates[]`, one
 *     `{ variableUid, formula }` per attribute set, and `log`, a message.
 *   • `entities[].actions[]` — the element type moves to
 *     `entity-action.v2.schema`, v1 with the same two sections. See
 *     `../models/entity.v6.schema`.
 *
 * Every other content array is re-imported unchanged from its v25 version.
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
import { EntityV6Schema } from "../models/entity.v6.schema";
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
import { VariableV10Schema } from "../models/variable.v10.schema";
import { WidgetV13Schema } from "../models/widget.v13.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v26 — re-exported under the v25 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV26Schema,
  AttributionV3Schema as AttributionV26Schema,
  type CcLicenseV3 as CcLicenseV26,
  type AttributionV3 as AttributionV26,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV26Schema,
  type ParentAttributionV4 as ParentAttributionV26,
} from "./bypp.v4.schema";

export const BeyondPaperV26Schema = z.object({
  // Format metadata
  version: z.literal(26),
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
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),

  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z.array(DialectV3Schema).default([]),
  entities: z.array(EntityV6Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV12Schema).default([]),
  datasets: z.array(DatasetV2Schema).default([]),
  variables: z.array(VariableV10Schema).default([]),
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

export type BeyondPaperV26 = z.infer<typeof BeyondPaperV26Schema>;
