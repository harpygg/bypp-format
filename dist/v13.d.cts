export { l as Attribution, I as CcLicense, r as DataTableColumn, ah as DataTableSchema, al as DatasetSchema, as as EntityImageFormat, au as EntityImageObjectFit, ax as GridData, aB as ObjectFit, u as Page, aE as PageSchema, aH as ParentAttribution, aN as RandomTableSchema, aV as SceneSchema, aY as Style, aZ as StyleSchema, b0 as TagCategorySchema, b2 as TagSchema, H as Variable, b5 as VariableSchema } from './variable.v7.schema-CNP3lacZ.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v13.schema-bmbAobQJ.cjs';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as Widget, U as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-m4ISwKYl.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-BrP3oCsr.cjs';
export { c as DialectSchema } from './dialect.v2.schema-C6JoT5O-.cjs';
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
