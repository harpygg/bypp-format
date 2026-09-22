export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v14.schema-yHtcRGxd.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-zCQxOCP1.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, z as Widget, W as WidgetActionRoll, B as WidgetSchema, D as WithCreditSchema } from './widget.v9.schema-uXrEUHv8.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-7Vk1WcTy.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-Do1gXLmf.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-MglZuv2U.cjs';
export { c as DialectSchema } from './dialect.v2.schema-Hcgnw54D.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-iDvvRzBQ.cjs';
export { V as Variable, b as VariableSchema } from './variable.v7.schema-6PBiO83C.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v14**, imported as `bypp-format/v14`.
 *
 * It re-exports every v14 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v14
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v14` keeps compiling against v14 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v14` → `bypp-format/v15`) deliberately.
 *
 * This file MUST NOT be modified once shipped — add `v15.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 14;

export { BYPP_FORMAT_VERSION };
