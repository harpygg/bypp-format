export { B as BeyondPaper, a as BeyondPaperSchema, b as BundleImage, c as BundleImageSchema } from './bundle-image.v14.schema-B3HQ4dfn.js';
export { l as Attribution, K as CcLicense, r as DataTableColumn, aj as DataTableSchema, an as DatasetSchema, at as DialectSchema, aw as EntityImageFormat, ay as EntityImageObjectFit, aB as GridData, aF as ObjectFit, w as Page, aI as PageSchema, aL as ParentAttribution, aR as RandomTableSchema, aZ as SceneSchema, b0 as Style, b1 as StyleSchema, b4 as TagCategorySchema, b6 as TagSchema, J as Variable, b9 as VariableSchema } from './variable.v7.schema-D14Z7-jV.js';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as Widget, U as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-DlwKXsUr.js';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-Du0ctAPh.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v14**, imported as `bypp-format/v14`.
 *
 * It re-exports every v14 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v14
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v14` keeps compiling against v14 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v14` → `bypp-format/v15`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v15.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 14;

export { BYPP_FORMAT_VERSION };
