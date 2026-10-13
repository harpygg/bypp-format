export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v13.schema-D9ET2reO.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-B7ShU7at.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-R2LL5j85.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-BGNEcxBC.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-B5zeWhAl.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-b_BeVmDU.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-4J94kJe-.cjs';
export { c as DialectSchema } from './dialect.v2.schema-B9sI8Zly.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-DoOFmq56.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-BYEFhoKu.cjs';
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
