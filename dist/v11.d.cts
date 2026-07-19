export { B as BeyondPaper, a as BeyondPaperSchema, C as Chunk, c as ChunkSchema } from './chunk.v11.schema-DeXbXkrw.cjs';
export { k as Asset, n as AssetSchema, p as Attribution, Z as CcLicense, z as DataTableColumn, as as DataTableSchema, aw as DatasetSchema, aC as DialectSchema, aH as EntityImageFormat, aJ as EntityImageObjectFit, aM as GridData, aU as ObjectFit, J as Page, aX as PageSchema, a_ as ParentAttribution, b4 as RandomTableSchema, bc as SceneSchema, bf as Style, bg as StyleSchema, bj as TagCategorySchema, bl as TagSchema, X as Variable, bo as VariableSchema, Y as Widget, bw as WidgetSchema } from './widget.v7.schema-lcLISYFx.cjs';
export { E as Entity, p as EntitySchema, S as SceneBackground, t as SceneBackgroundSchema, u as SceneMapSchema, d as Sheet, v as SheetSchema } from './scene-background.v3.schema-B51KqoJj.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v11**, imported as `bypp-format/v11`.
 *
 * It re-exports every v11 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v11
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v11` keeps compiling against v11 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v11` → `bypp-format/v12`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v12.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 11;

export { BYPP_FORMAT_VERSION };
