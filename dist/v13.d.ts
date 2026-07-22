export { a as Asset, d as AssetSchema, B as BeyondPaper, i as BeyondPaperSchema, k as Credit, q as CreditSchema, E as Entity, H as EntitySchema, S as SceneBackground, Q as SceneBackgroundSchema, m as SceneMap, R as SceneMapSchema, n as Sheet, T as SheetSchema, W as Widget, Y as WidgetActionRoll, _ as WidgetSchema, $ as WithCreditSchema } from './widget.v9.schema-B-pIlaVy.js';
export { l as Attribution, K as CcLicense, r as DataTableColumn, aj as DataTableSchema, an as DatasetSchema, at as DialectSchema, aw as EntityImageFormat, ay as EntityImageObjectFit, aB as GridData, aF as ObjectFit, w as Page, aI as PageSchema, aL as ParentAttribution, aR as RandomTableSchema, aZ as SceneSchema, b0 as Style, b1 as StyleSchema, b4 as TagCategorySchema, b6 as TagSchema, J as Variable, b9 as VariableSchema } from './variable.v7.schema-D14Z7-jV.js';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-Du0ctAPh.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v13**, imported as `bypp-format/v13`.
 *
 * It re-exports every v13 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v13
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v13` keeps compiling against v13 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v13` → `bypp-format/v14`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v14.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 13;

export { BYPP_FORMAT_VERSION };
