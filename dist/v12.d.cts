export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema } from './data-table.v3.schema-SKJA8p4m.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema, c as Widget, W as WidgetActionRoll, d as WidgetSchema } from './widget.v8.schema-Bp-dHHFZ.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CFZnC8Vu.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-BVPG4OBJ.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-Duf3iqWf.cjs';
export { c as DialectSchema } from './dialect.v2.schema-DuiP7vEn.cjs';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-C85ccA_9.cjs';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-f0h-ebJm.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-_iCUsBza.cjs';
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
