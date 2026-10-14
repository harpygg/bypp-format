export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v13.schema-fO2W018H.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CtuSSqLf.js';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, x as Widget, W as WidgetActionRoll, y as WidgetSchema, z as WithCreditSchema } from './widget.v9.schema-CnuXHPQ4.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-zVmylKKJ.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-Da-6Fsyc.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-Bo4p6HRU.js';
export { b as DatasetSchema } from './dataset.v2.schema-DYMLbnQX.js';
export { c as DialectSchema } from './dialect.v2.schema-9c189eFb.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-T_8ffqmd.js';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-B8fTremW.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-D_4vEhR9.js';
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
