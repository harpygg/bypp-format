export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v18.schema-D0ktXCNN.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Style, a as StyleSchema } from './with-style.v3.schema-CNq3kEX2.cjs';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, x as Widget, W as WidgetActionRoll, y as WidgetSchema, z as WithCreditSchema } from './widget.v9.schema-DggFDpKn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { n as Variable, o as VariableSchema } from './variable.v8.schema-BA-vfMtL.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-D0ghQdwC.cjs';
export { b as Chunk, c as ChunkSchema } from './chunk.v11.schema-CLfQUuUB.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-__06JmUc.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BzJaqnT7.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-D6eTnEft.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v4.schema-Dndwlbfz.cjs';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-zcjT7A_y.cjs';
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
