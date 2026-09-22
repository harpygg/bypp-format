export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.js';
export { B as BeyondPaper, a as BeyondPaperSchema, c as Widget, W as WidgetActionRoll, d as WidgetSchema } from './widget.v8.schema-CI8uWO4q.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-C4jMhfpm.js';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-fvPeRhEo.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BxP2xfEa.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-GF_MjZOv.js';
export { c as DialectSchema } from './dialect.v2.schema-BeyiUS9e.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-B69LPraL.js';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-BIL51yAS.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-xq4uckqS.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v12**, imported as `bypp-format/v12`.
 *
 * It re-exports every v12 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v12
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v12` keeps compiling against v12 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v12` → `bypp-format/v13`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v13.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 12;

export { BYPP_FORMAT_VERSION };
