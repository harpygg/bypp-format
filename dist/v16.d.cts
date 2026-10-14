export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v16.schema-Do575Uqs.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CNq3kEX2.cjs';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, x as Widget, W as WidgetActionRoll, y as WidgetSchema, z as WithCreditSchema } from './widget.v9.schema-DggFDpKn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { a as TagCategorySchema, c as TagSchema } from './tag.v2.schema-BmED2vPU.cjs';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-BA-vfMtL.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-D0ghQdwC.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-CLfQUuUB.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-__06JmUc.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BzJaqnT7.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-Dndwlbfz.cjs';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-zcjT7A_y.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v16**, imported as `bypp-format/v16`.
 *
 * It re-exports every v16 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v16
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v16` keeps compiling against v16 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v16` → `bypp-format/v17`) deliberately.
 *
 * The v16 headline is on `VariableSchema`: every variant now carries an
 * optional `icon`, which readers also group by.
 *
 * This file MUST NOT be modified once shipped — add `v17.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 16;

export { BYPP_FORMAT_VERSION };
