export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-1hgyBodW.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v15.schema-Bnk-O3ek.js';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as Widget, U as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-DkF3xyk6.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-COYJK_Rj.js';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CLL9q2zn.js';
export { a as DialectSchema } from './dialect.v3.schema-DmLJpG3-.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-DiiToB0q.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v15**, imported as `bypp-format/v15`.
 *
 * It re-exports every v15 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v15
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v15` keeps compiling against v15 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v15` → `bypp-format/v16`) deliberately.
 *
 * Note there is no `DialectFontSchema` here: v15 replaced the dialect's
 * `{ fontFamily, fontUrl }` object with a bare `fontFamily` name.
 *
 * This file MUST NOT be modified once shipped — add `v16.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 15;

export { BYPP_FORMAT_VERSION };
