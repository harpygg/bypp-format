export { l as Attribution, H as CcLicense, r as DataTableColumn, ag as DataTableSchema, ak as DatasetSchema, ar as EntityImageFormat, at as EntityImageObjectFit, aw as GridData, ay as ObjectFit, u as Page, aB as PageSchema, aE as ParentAttribution, aK as RandomTableSchema, aS as SceneSchema, aV as Style, aW as StyleSchema, aZ as TagCategorySchema, a$ as TagSchema } from './data-table.v3.schema-C2QhxvaB.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v11.schema-COLXpHey.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CX_LO9ri.cjs';
export { c as DialectSchema } from './dialect.v2.schema-CRu58Opf.cjs';
export { b as Asset, c as AssetSchema } from './asset.v2.schema-CTP5jVKN.cjs';
export { m as Entity, n as EntitySchema, S as SceneBackground, r as SceneBackgroundSchema, t as SceneMapSchema, u as Sheet, v as SheetSchema } from './scene-background.v3.schema-C88Ja0sr.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-Ds-LxOa6.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v7.schema-BfykOgm7.cjs';
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
