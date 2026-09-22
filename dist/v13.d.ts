export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v13.schema-DylG1epB.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-C4jMhfpm.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-DNRZ_ImO.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-fvPeRhEo.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BxP2xfEa.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-GF_MjZOv.js';
export { c as DialectSchema } from './dialect.v2.schema-BeyiUS9e.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-BgsXfKsj.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-xq4uckqS.js';
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
