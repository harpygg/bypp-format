export { B as BeyondPaper, a as BeyondPaperSchema, E as EntityLookupVariable, c as EntityRefVariable, V as Variable, e as VariableSchema, W as Widget, f as WidgetEntityGrid, h as WidgetSchema } from './widget.v10.schema-DN3GmlNy.cjs';
export { l as Attribution, F as CcLicense, r as DataTableColumn, ae as DataTableSchema, ai as DatasetSchema, ap as EntityImageFormat, ar as EntityImageObjectFit, au as GridData, aw as ObjectFit, u as Page, az as PageSchema, aC as ParentAttribution, aI as RandomTableSchema, aQ as SceneSchema, aT as Style, aU as StyleSchema } from './data-table.v3.schema-1hgyBodW.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { a as Asset, d as AssetSchema, j as Credit, p as CreditSchema, E as Entity, D as EntitySchema, S as SceneBackground, M as SceneBackgroundSchema, l as SceneMap, O as SceneMapSchema, m as Sheet, Q as SheetSchema, W as WidgetActionRoll, Z as WithCreditSchema } from './widget.v9.schema-DFQ49SVk.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { C as Chunk, b as ChunkSchema } from './chunk.v11.schema-CkbALeEJ.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BvDUaWZc.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-w_JW5XXo.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v19**, imported as `bypp-format/v19`.
 *
 * It re-exports every v19 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v19
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v19` keeps compiling against v19 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v18` → `bypp-format/v19`) deliberately.
 *
 * The v19 headline is the link between entities: the `entityRef` and
 * `entityLookup` variables and the `entityGrid` widget. The reference icon
 * registry is NOT re-exported here: it belongs to no version, validates
 * nothing, and adding a slug to it never moves the format. Reach it
 * deliberately at `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v20.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 19;

export { BYPP_FORMAT_VERSION };
