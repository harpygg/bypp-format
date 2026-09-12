export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-qpxPwgjy.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v10.schema-jGK2PUur.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-6tQFMRu6.js';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-hCA03B-p.js';
export { c as DialectSchema } from './dialect.v2.schema-BRQMYDWS.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-DVpJctlp.js';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-CTb-OZjf.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-ZLdmXQpg.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-C2_K0m0s.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v10**, imported as `bypp-format/v10`.
 *
 * It re-exports every v10 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v10
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v10` keeps compiling against v10 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v10` → `bypp-format/v11`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v11.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 10;

export { BYPP_FORMAT_VERSION };
