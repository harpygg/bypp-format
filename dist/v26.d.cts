export { l as Attribution, w as CcLicense, U as EntityImageFormat, Y as EntityImageObjectFit, a5 as GridData, a7 as ObjectFit, q as Page, aa as PageSchema, ad as ParentAttribution, aj as RandomTableSchema, ar as SceneSchema } from './scene.v2.schema-Cy0s-K0Y.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v26.schema-ByFzKBf4.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema } from './with-style.v6.schema-DKNbTC0_.cjs';
export { A as Asset, c as AssetSchema, C as Credit, i as CreditSchema, S as SceneBackground, t as SceneBackgroundSchema, h as SceneMap, u as SceneMapSchema, W as WidgetActionRoll, z as WithCreditSchema } from './widget.v9.schema-DggFDpKn.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-DbJe6gxv.cjs';
export { E as EntityLookupVariable, b as EntityRefVariable } from './variable.v9.schema-D9fBeGx_.cjs';
export { A as ActionRoll, a as ActionRollSchema, b as ActionSections, c as ActionSectionsSchema, R as RollVariable, d as RollVariableSchema, f as Variable, g as VariableSchema, V as VariableUpdate, e as VariableUpdateSchema } from './variable.v10.schema-C20leqlw.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-D0ghQdwC.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-BuRwGydm.cjs';
export { b as DatasetSchema } from './dataset.v2.schema-__06JmUc.cjs';
export { a as DialectSchema } from './dialect.v3.schema-BzJaqnT7.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-D6eTnEft.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { e as Entity, f as EntitySchema } from './entity.v6.schema-CBRPuVb9.cjs';
export { E as EntityAction, a as EntityActionSchema } from './entity-action.v2.schema-CAVnRrWj.cjs';
export { S as Sheet, a as SheetSchema } from './sheet.v7.schema-zcjT7A_y.cjs';
export { W as WidgetEntityGrid } from './widget.v10.schema-DTcSCgnS.cjs';
export { W as Widget, a as WidgetSchema } from './widget.v13.schema-j89l8a4I.cjs';
import 'zod';

/**
 * Frozen entry point for bypp format **v26**, imported as `bypp-format/v26`.
 *
 * It re-exports every v26 schema/type under a stable, version-less name
 * (`WidgetSchema`, `StyleSchema`, `BeyondPaperSchema`, …) bound to the v26
 * versioned schema. Unlike the package root (`bypp-format`), whose aliases
 * always track the LATEST shipped version, this entry never moves: a consumer
 * that pins to `bypp-format/v26` keeps compiling against v26 no matter how far
 * the format advances. To adopt a new version, a consumer switches its import
 * path (`bypp-format/v25` → `bypp-format/v26`) deliberately.
 *
 * The v26 headline is an action that does more than roll: a sheet's `roll`
 * and an entity's own action gain two optional sections, the attributes they
 * set and the message they post, both able to read the roll's result.
 *
 * This file MUST NOT be modified once shipped — add `v27.ts` for the next one.
 */

/** The format version this entry point targets. */
declare const BYPP_FORMAT_VERSION = 26;

export { BYPP_FORMAT_VERSION };
