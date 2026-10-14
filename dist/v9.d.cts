export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, o as Entity, p as EntitySchema, v as SceneBackground, w as SceneBackgroundSchema, z as SceneMapSchema, D as Sheet, F as SheetSchema } from './sheet.v5.schema-BksqCVVw.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CNq3kEX2.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-BmED2vPU.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-D0ghQdwC.cjs';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-DIi5XCBD.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-__06JmUc.cjs';
export { c as DialectSchema } from './dialect.v2.schema-BhE7ZNGM.cjs';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-DNGgIBe8.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-DmMsVYuO.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-D7E6BwVU.cjs';
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
