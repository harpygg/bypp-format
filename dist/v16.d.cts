export { B as BeyondPaper, a as BeyondPaperSchema, V as Variable, q as VariableSchema, W as WithIcon, r as WithIconSchema } from './variable.v8.schema-TPpGMYiU.cjs';
export { l as Attribution, H as CcLicense, r as DataTableColumn, ag as DataTableSchema, ak as DatasetSchema, ar as EntityImageFormat, at as EntityImageObjectFit, aw as GridData, ay as ObjectFit, u as Page, aB as PageSchema, aE as ParentAttribution, aK as RandomTableSchema, aS as SceneSchema, aV as Style, aW as StyleSchema, aZ as TagCategorySchema, a$ as TagSchema } from './data-table.v3.schema-C2QhxvaB.cjs';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as Widget, U as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-mTMkN-lR.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CX_LO9ri.cjs';
export { a as DialectSchema } from './dialect.v3.schema-DG1ZvsCW.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v16**, imported as `bypp-format/v16`.
 *
 * It re-exports every v16 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v16
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v16` keeps compiling against v16 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v16` → `bypp-format/v17`) deliberately.
 *
 * The v16 headline is on `VariableSchema`: every variant now carries an
 * optional `icon`, which readers also group by.
 *
 * This file MUST NOT be modified once shipped — add `v17.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 16;

export { BYPP_FORMAT_VERSION };
