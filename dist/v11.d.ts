export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-qpxPwgjy.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v11.schema-d5hCJntJ.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-6tQFMRu6.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-54QJVVbE.js';
export { c as DialectSchema } from './dialect.v2.schema-BRQMYDWS.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-DVpJctlp.js';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-CTb-OZjf.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-ZLdmXQpg.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-C2_K0m0s.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v11**, imported as `bypp-format/v11`.
 *
 * It re-exports every v11 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v11
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v11` keeps compiling against v11 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v11` → `bypp-format/v12`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v12.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 11;

export { BYPP_FORMAT_VERSION };
