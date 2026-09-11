export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-1hgyBodW.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v13.schema-B8IA3Qru.cjs';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, X as Widget, W as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-DFQ49SVk.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-BEi77DhL.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CkbALeEJ.cjs';
export { c as DialectSchema } from './dialect.v2.schema-8cEb19Zw.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-BCDx7NkX.cjs';
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
