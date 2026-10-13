export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v14.schema-BXQWqFIv.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-DwpHZTpV.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-w1NFX9_2.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-DIl6FYPn.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BK7slpZw.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-C102F6rt.js';
export { b as DatasetSchema } from './dataset.v2.schema-BC7SWK08.js';
export { c as DialectSchema } from './dialect.v2.schema-CMUnFu1c.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-Cp4luwuq.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-B_VpBApO.js';
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
