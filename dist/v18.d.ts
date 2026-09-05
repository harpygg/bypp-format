export { B as BeyondPaper, a as BeyondPaperSchema, b as ByppFileUrlSchema, R as Requirement, d as RequirementSchema, c as RequirementSource, e as RequirementSourceSchema } from './requirement.v1.schema-BH4r4U2e.js';
export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-1hgyBodW.js';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as Widget, U as WidgetActionRoll, Y as WidgetSchema, Z as WithCreditSchema } from './widget.v9.schema-DkF3xyk6.js';
export { V as Variable, o as VariableSchema, W as WithIcon, p as WithIconSchema } from './variable.v8.schema-pN0rJxzZ.js';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CLL9q2zn.js';
export { a as DialectSchema } from './dialect.v3.schema-DmLJpG3-.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-CVIkTZ-O.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
import 'zod';

/**
 * Frozen entry point for bypp format **v18**, imported as `bypp-format/v18`.
 *
 * It re-exports every v17 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v17
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v18` keeps compiling against v18 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v18` → `bypp-format/v18`) deliberately.
 *
 * The v18 headline is the manifest's `requires[]` (`RequirementSchema`): what
 * a document reads but does not carry. The reference icon registry is NOT
 * re-exported here: it belongs to no version, validates nothing, and adding a
 * slug to it never moves the format. Reach it deliberately at
 * `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v19.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 18;

export { BYPP_FORMAT_VERSION };
