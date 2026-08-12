export { l as Attribution, H as CcLicense, r as DataTableColumn, ag as DataTableSchema, ak as DatasetSchema, ar as EntityImageFormat, at as EntityImageObjectFit, aw as GridData, ay as ObjectFit, u as Page, aB as PageSchema, aE as ParentAttribution, aK as RandomTableSchema, aS as SceneSchema, aV as Style, aW as StyleSchema, aZ as TagCategorySchema, a$ as TagSchema } from './data-table.v3.schema-C2QhxvaB.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v10.schema-D2jgO3KK.js';
export { j as Chunk, k as ChunkSchema } from './chunk.v2.schema-DbJ5xc6h.js';
export { c as DialectSchema } from './dialect.v2.schema-CsL8HVV7.js';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-DGzdUexD.js';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema--79vYcFV.js';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-6Ko7Sa0z.js';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-CqnUO40o.js';
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
