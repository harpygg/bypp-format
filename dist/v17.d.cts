export { B as BeyondPaper, a as BeyondPaperSchema, T as Tag, b as TagCategory, c as TagCategorySchema, d as TagSchema } from './tag-category.v2.schema-CJ8SL3Bp.cjs';
export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-1hgyBodW.cjs';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as Widget, U as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-Ddg0TAdx.cjs';
export { V as Variable, o as VariableSchema, W as WithIcon, p as WithIconSchema } from './variable.v8.schema-Dx8newV_.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CkbALeEJ.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BvDUaWZc.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v17**, imported as `bypp-format/v17`.
 *
 * It re-exports every v17 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v17
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v17` keeps compiling against v17 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v17` → `bypp-format/v18`) deliberately.
 *
 * The v17 headline is on `TagSchema` and `TagCategorySchema`: both can name an
 * icon. The reference icon registry is NOT re-exported here: it belongs to no
 * version, validates nothing, and adding a slug to it never moves the format.
 * Reach it deliberately at `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v18.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 17;

export { BYPP_FORMAT_VERSION };
