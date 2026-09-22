export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.js';
export { B as BeyondPaper, a as BeyondPaperSchema, o as Entity, p as EntitySchema, v as SceneBackground, w as SceneBackgroundSchema, z as SceneMapSchema, D as Sheet, F as SheetSchema } from './sheet.v5.schema-DZfs4Vux.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-C4jMhfpm.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-fvPeRhEo.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BxP2xfEa.js';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-bzchItaQ.js';
export { c as DialectSchema } from './dialect.v2.schema-BeyiUS9e.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-B69LPraL.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-xq4uckqS.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-As_uNS1n.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v9**, imported as `bypp-format/v9`.
 *
 * It re-exports every v9 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v9
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v9` keeps compiling against v9 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v9` → `bypp-format/v10`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v10.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 9;

export { BYPP_FORMAT_VERSION };
