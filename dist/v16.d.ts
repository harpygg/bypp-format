export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a4 as GridData, a6 as ObjectFit, r as Page, a9 as PageSchema, ac as ParentAttribution, ai as RandomTableSchema, aq as SceneSchema } from './scene.v2.schema-WTy2SpxZ.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v16.schema-DsbFIo6l.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-B9OjKGpB.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema--jHWKnKF.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-BO99p_yE.js';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-CQWeav7O.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-DVs8cB7G.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-TXQ9UkTu.js';
export { a as DialectSchema } from './dialect.v3.schema-waB9hXYk.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-BY1n-dbR.js';
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
