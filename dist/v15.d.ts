export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v15.schema-CxR5S6HA.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-DwpHZTpV.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-w1NFX9_2.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-DIl6FYPn.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BK7slpZw.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-C102F6rt.js';
export { b as DatasetSchema } from './dataset.v2.schema-BC7SWK08.js';
export { a as DialectSchema } from './dialect.v3.schema-BEHe8mao.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-Cp4luwuq.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-B_VpBApO.js';
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
