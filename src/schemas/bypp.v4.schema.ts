/**
 * Bypp format **v4** — frozen manifest.
 *
 * v4 is the first "tightening pass" version: it adds no new content
 * categories, but cleans the format so producers can emit smaller, less
 * noisy bundles and the schema better reflects the open-format intent.
 *
 * Headline changes vs v3:
 *
 *   • All 16 top-level content arrays default to `[]`. Producers may
 *     omit any category they don't carry; readers always see the field
 *     post-parse. Cuts file size on smaller bundles by ~half a kilobyte
 *     and removes "empty array soup" from a v3 minimal export.
 *
 *   • `parentAttribution.artifactName` renamed to `bundleName` to match
 *     the format's actual vocabulary ("bundle" everywhere else, only
 *     this field was still saying "artifact" — a residual leak of one
 *     producer's internal naming).
 *
 *   • `WithArchiveV2` defaults `isArchived` to `false`. Most items
 *     aren't archived — no reason to make every record carry the field.
 *
 *   • `WithPagesV2` / `WithScenesV2` default their array to `[]`.
 *
 *   • `WithImagesUrlsV2` / `WithVideoUrlsV2` / `WithAudioUrlsV2`
 *     `.url()`-validate every URL. `WithAudioUrlsV2` also widens
 *     `audioExt` from a 2-value enum to any string (see
 *     `KNOWN_AUDIO_EXTS` for the conventional set).
 *
 *   • Entity (v2): `displayName` / `description` switch from
 *     `.nullable()` to `.optional()`. `tagsUid` and group
 *     `charactersUids` / `ranks` default to `[]`.
 *
 *   • Chunk (v2): the optional fields previously typed
 *     `.nullable().optional()` are now plain `.optional()` — producers
 *     should omit, not write `null`. Gallery `assetUids` defaults to `[]`.
 *
 *   • Tag (v2): `categoryUid` becomes `.optional()` (omit when ungrouped).
 *     `useAsFolder` defaults to `false`.
 *
 *   • Dataset (v2) / Dialect (v2) / RandomTable (v2): array fields and
 *     `range` get sane defaults. Dialect `fontUrl` is now url-validated.
 *
 *   • Scene (v2): drops `weather` and `gameMode`. Both were producer-
 *     specific (Harpy's renderer); the typed slots locked the format
 *     against any reader with a different scene model. Lighting fields
 *     stay — they're generic 3D scene parameters.
 *
 *   • SceneMap (v2): drops the `dd2vtt` discriminator variant. DD2VTT
 *     files still land as `customImage` / `customVideo` with the new
 *     orthogonal `sourceFormat?: string` annotation. See
 *     `KNOWN_VTT_SOURCE_FORMATS` for the conventional set.
 *
 *   • Asset (v2) `audio-external` generalized: `youtubeVideoId` →
 *     `{ provider, externalId }`. See
 *     `KNOWN_EXTERNAL_AUDIO_PROVIDERS`.
 *
 *   • Sheet (v3): `widgetUids` defaults to `[]`. URLs go through the
 *     v2 mixin. `name` cleaned to `.optional()`.
 *
 *   • DataTable (v3): `columns` and `rows` default to `[]`.
 *
 * What did NOT change in v4 (intentionally):
 *
 *   • Widget schema, position/area mixins, style mixin — kept as-is.
 *     They're pixel-based which is producer-specific, but no clean
 *     alternative model is ready yet. To be revisited in a future
 *     version once we have a portable layout primitive.
 *
 *   • Entity type taxonomy (`character`, `creature`, `place`, …) —
 *     locked enum kept on purpose. Opening it would let any producer
 *     invent its own entity kinds, and readers couldn't dispatch.
 *
 *   • Chunk `blockStyle` enum — same reason: readers attach visual
 *     treatments per known style. An open string would let a producer
 *     ship `blockStyle: "lorem-ipsum"` that no reader knows how to
 *     render.
 *
 * This file MUST NOT be modified once shipped. See {@link "./bypp.v3.schema"}
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
import { RandomTableV2Schema } from "../models/random-table.v2.schema";
import { SceneV2Schema } from "../models/scene.v2.schema";
import { SceneBackgroundV2Schema } from "../models/scene-background.v2.schema";
import { SceneMapV2Schema } from "../models/scene-map.v2.schema";
import { SheetV3Schema } from "../models/sheet.v3.schema";
import { TagV2Schema } from "../models/tag.v2.schema";
import { TagCategoryV1Schema } from "../models/tag-category.v1.schema";
import { VariableV2Schema } from "../models/variable.v2.schema";
import { WidgetV1Schema } from "../models/widget.v1.schema";
import { CcLicenseV3Schema, AttributionV3Schema } from "./bypp.v3.schema";

// Licensing types unchanged in v4 — re-exported under the v3 name so the
// per-version schema files stay self-contained.
export {
  CcLicenseV3Schema as CcLicenseV4Schema,
  AttributionV3Schema as AttributionV4Schema,
  type CcLicenseV3 as CcLicenseV4,
  type AttributionV3 as AttributionV4,
} from "./bypp.v3.schema";

/**
 * Parent-bundle attribution — v4 renames `artifactName` to `bundleName`
 * for vocabulary consistency with the rest of the format.
 */
export const ParentAttributionV4Schema = z.object({
  bundleName: z.string().min(1),
  authorName: z.string().min(1),
  license: CcLicenseV3Schema,
  sourceUrl: z.string().url().optional(),
});
export type ParentAttributionV4 = z.infer<typeof ParentAttributionV4Schema>;

export const BeyondPaperV4Schema = z.object({
  // Format metadata
  version: z.literal(4),
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
  variables: z.array(VariableV2Schema).default([]),
  widgets: z.array(WidgetV1Schema).default([]),
  sheets: z.array(SheetV3Schema).default([]),
  dataTables: z.array(DataTableV3Schema).default([]),
  randomTables: z.array(RandomTableV2Schema).default([]),
  tags: z.array(TagV2Schema).default([]),
  tagCategories: z.array(TagCategoryV1Schema).default([]),
  scenes: z.array(SceneV2Schema).default([]),
  sceneMaps: z.array(SceneMapV2Schema).default([]),
  sceneBackgrounds: z.array(SceneBackgroundV2Schema).default([]),
  assets: z.array(AssetV2Schema).default([]),
});

export type BeyondPaperV4 = z.infer<typeof BeyondPaperV4Schema>;
