export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a3 as GridData, a5 as ObjectFit, q as Page, a8 as PageSchema, ab as ParentAttribution, ah as RandomTableSchema, ap as SceneSchema } from './scene.v2.schema-ByRVoG86.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v17.schema-CclChsE8.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-B7ShU7at.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-R2LL5j85.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-Dm0btK8s.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-B5zeWhAl.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-b_BeVmDU.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-4J94kJe-.cjs';
export { a as DialectSchema } from './dialect.v3.schema-Bdt5QWiw.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-OOAH72Uh.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-DoOFmq56.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v17**, imported as `bypp-format/v17`.
 *
 * It re-exports every v17 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v17
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v17` keeps compiling against v17 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v17` → `bypp-format/v18`) deliberately.
 *
 * The v17 headline is on `TagSchema` and `TagCategorySchema`: both can name an
 * icon. The reference icon registry is NOT re-exported here: it belongs to no
 * version, validates nothing, and adding a slug to it never moves the format.
 * Reach it deliberately at `bypp-format/icons`.
 *
 * This file MUST NOT be modified once shipped — add `v18.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 17;

export { BYPP_FORMAT_VERSION };
