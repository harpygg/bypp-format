export { k as Asset, n as AssetSchema, p as Attribution, Y as CcLicense, z as DataTableColumn, ar as DataTableSchema, av as DatasetSchema, aB as DialectSchema, aG as EntityImageFormat, aI as EntityImageObjectFit, aL as GridData, aT as ObjectFit, J as Page, aW as PageSchema, aZ as ParentAttribution, b3 as RandomTableSchema, bb as SceneSchema, be as Style, bf as StyleSchema, bi as TagCategorySchema, bk as TagSchema, X as Variable, bn as VariableSchema } from './variable.v7.schema-ClZin-IT.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v11.schema-C-jiR8YC.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-D9fESfVu.cjs';
export { E as Entity, p as EntitySchema, S as SceneBackground, t as SceneBackgroundSchema, u as SceneMapSchema, d as Sheet, v as SheetSchema } from './scene-background.v3.schema-gonHUjUD.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-BL5DYMEZ.cjs';
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
