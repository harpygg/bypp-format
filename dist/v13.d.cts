export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-qpxPwgjy.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v13.schema-BMcybH7n.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-D_ccPOA-.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-Ci3OxCil.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-DNNsRnIo.cjs';
export { c as DialectSchema } from './dialect.v2.schema-D9CjUUYA.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-CLQB7owV.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-B-1zNn-c.cjs';
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
