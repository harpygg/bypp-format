export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v16.schema-DdGJA-iS.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CtuSSqLf.js';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, x as Widget, W as WidgetActionRoll, y as WidgetSchema, z as WithCreditSchema } from './widget.v9.schema-CnuXHPQ4.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-zVmylKKJ.js';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-BHjjmi0G.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-Da-6Fsyc.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-Bo4p6HRU.js';
export { b as DatasetSchema } from './dataset.v2.schema-DYMLbnQX.js';
export { a as DialectSchema } from './dialect.v3.schema-DbEvhdjV.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-T_8ffqmd.js';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-B8fTremW.js';
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
