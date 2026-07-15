export { B as BeyondPaper, a as BeyondPaperSchema, E as Entity, q as EntitySchema, S as SceneBackground, u as SceneBackgroundSchema, v as SceneMapSchema, e as Sheet, w as SheetSchema } from './scene-background.v3.schema-BzNgn0_c.cjs';
export { k as Asset, n as AssetSchema, p as Attribution, a3 as CcLicense, y as Chunk, a8 as ChunkSchema, K as DataTableColumn, aE as DataTableSchema, aI as DatasetSchema, aO as DialectSchema, aT as EntityImageFormat, aV as EntityImageObjectFit, aY as GridData, b4 as ObjectFit, Q as Page, b7 as PageSchema, ba as ParentAttribution, bg as RandomTableSchema, bo as SceneSchema, br as Style, bs as StyleSchema, bv as TagCategorySchema, bx as TagSchema, a1 as Variable, bA as VariableSchema, a2 as Widget, bI as WidgetSchema } from './widget.v7.schema-DHvc06fi.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v10**, imported as `bypp-format/v10`.
 *
 * It re-exports every v10 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v10
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v10` keeps compiling against v10 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v10` → `bypp-format/v11`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v11.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 10;

export { BYPP_FORMAT_VERSION };
