/**
 * Bypp format **v31** — frozen manifest.
 *
 * v31 carries what an entity is in play: its modes, what an item is, who
 * bears a spawn, and the values every reader may know without a variable.
 *
 * Headline changes vs v30:
 *
 *   • `entities[]` — re-typed to `../models/entity.v8.schema` (`modes`,
 *     `stackOrder`, `item`, `synonyms`; actions without `type`).
 *   • `entitySpawns[]` — re-typed to `../models/entity-spawn.v2.schema`
 *     (`owner` replaces `ownerUid`, `activeModes`, `stackOrder`).
 *   • `variables[]` — re-typed to `../models/variable.v13.schema` (a number's
 *     `maxVariable`).
 *   • `sheets[]` — re-typed to `../models/sheet.v8.schema` (`height`).
 *   • `datasets[]` — re-typed to `../models/dataset.v4.schema` (`icon`,
 *     `adminOnly`).
 *   • `widgets[]` — re-typed to `../models/widget.v14.schema` (a leaner
 *     `entityGrid`).
 *   • Reserved variable uids (`../models/system-variable.v31.schema`):
 *     `system-inventory`, `system-quantity` and `system-weight` may key
 *     `data`.
 *
 * Every other content array is re-imported unchanged from its v30 version.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v5.schema"}
 * for the rules around forking a sub-schema for future versions.
 */

import { z } from "zod";
import { AssetV3Schema } from "../models/asset.v3.schema";
import { BundleCreditV29Schema } from "../models/bundle-credit.v29.schema";
import { BundleImageV14Schema } from "../models/bundle-image.v14.schema";
import { ChunkV12Schema } from "../models/chunk.v12.schema";
import { DataTableV4Schema } from "../models/data-table.v4.schema";
import { DatasetV4Schema } from "../models/dataset.v4.schema";
import { DialectV3Schema } from "../models/dialect.v3.schema";
import { EntityV8Schema } from "../models/entity.v8.schema";
import { EntitySubtypeV30Schema } from "../models/entity-subtype.v30.schema";
import { EntitySpawnV2Schema } from "../models/entity-spawn.v2.schema";
import { PageV1Schema } from "../models/page.v1.schema";
import { RandomTableV7Schema } from "../models/random-table.v7.schema";
import { RequirementV1Schema } from "../models/requirement.v1.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV4Schema } from "../models/scene-background.v4.schema";
import { SceneMapV4Schema } from "../models/scene-map.v4.schema";
import { SheetV8Schema } from "../models/sheet.v8.schema";
import { TagV3Schema } from "../models/tag.v3.schema";
import { TagCategoryV2Schema } from "../models/tag-category.v2.schema";
import { ThemeV25Schema } from "../models/theme.v25.schema";
import { VariableV13Schema } from "../models/variable.v13.schema";
import { WidgetV14Schema } from "../models/widget.v14.schema";
import { AttributionV3Schema, CcLicenseV3Schema } from "./bypp.v3.schema";
import { ParentAttributionV4Schema } from "./bypp.v4.schema";

// Licensing / attribution unchanged in v31 — re-exported under the v31 name
// so the per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV31Schema,
  AttributionV3Schema as AttributionV31Schema,
  type CcLicenseV3 as CcLicenseV31,
  type AttributionV3 as AttributionV31,
} from "./bypp.v3.schema";
export {
  ParentAttributionV4Schema as ParentAttributionV31Schema,
  type ParentAttributionV4 as ParentAttributionV31,
} from "./bypp.v4.schema";

export const BeyondPaperV31Schema = z.object({
  // Format metadata
  version: z.literal(31),
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
  // Everyone else who worked on the bundle, in display order. Absent from
  // every document produced before v29.
  credits: z.array(BundleCreditV29Schema).default([]),

  // What the document reads but does not carry — items another bundle, linked
  // alongside, is expected to provide. Empty for a self-contained document.
  requires: z.array(RequirementV1Schema).default([]),

  // How the document wants its own prose to look. Optional, and absent from
  // every document produced before v25.
  theme: ThemeV25Schema.optional(),

  // Content — every category defaults to `[]`. Producers may omit any
  // unused category to cut file size; readers always see a concrete array.
  dialects: z.array(DialectV3Schema).default([]),
  // Shelves on the entity types (see `entity-subtype.v30.schema`). Absent
  // from every document produced before v30.
  entitySubtypes: z.array(EntitySubtypeV30Schema).default([]),
  entities: z.array(EntityV8Schema).default([]),
  // Copies of entities, each over its model (see `entity-spawn.v2.schema`).
  // Absent from every document produced before v28.
  entitySpawns: z.array(EntitySpawnV2Schema).default([]),
  pages: z.array(PageV1Schema).default([]),
  chunks: z.array(ChunkV12Schema).default([]),
  datasets: z.array(DatasetV4Schema).default([]),
  variables: z.array(VariableV13Schema).default([]),
  widgets: z.array(WidgetV14Schema).default([]),
  sheets: z.array(SheetV8Schema).default([]),
  dataTables: z.array(DataTableV4Schema).default([]),
  randomTables: z.array(RandomTableV7Schema).default([]),
  tags: z.array(TagV3Schema).default([]),
  tagCategories: z.array(TagCategoryV2Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV4Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV4Schema).default([]),
  assets: z.array(AssetV3Schema).default([]),
});

export type BeyondPaperV31 = z.infer<typeof BeyondPaperV31Schema>;
