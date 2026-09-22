export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.js';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v18.schema-Co16_U9o.js';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.js';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-C4jMhfpm.js';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-DNRZ_ImO.js';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.js';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-D7uoX1-f.js';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-BxP2xfEa.js';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-GF_MjZOv.js';
export { a as DialectSchema } from './dialect.v3.schema-Ay0DlHYP.js';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-p4dKRn3u.js';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.js';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-BgsXfKsj.js';
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
