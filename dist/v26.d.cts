export { l as Attribution, x as CcLicense, M as DatasetSchema, Z as EntityImageFormat, $ as EntityImageObjectFit, a2 as GridData, a4 as ObjectFit, r as Page, a7 as PageSchema, aa as ParentAttribution, ag as RandomTableSchema, ao as SceneSchema } from './scene.v2.schema-H-0sHBmq.cjs';
export { B as BeyondPaper, a as BeyondPaperSchema } from './bypp.v26.schema-Ls6VO1_X.cjs';
export { B as ByppFileUrlSchema, R as Requirement, b as RequirementSchema, a as RequirementSource, c as RequirementSourceSchema } from './requirement.v1.schema-BH2yCi0G.cjs';
export { S as Sides, a as SidesSchema, b as Style, c as StyleSchema, W as Widget, d as WidgetSchema } from './widget.v13.schema-CYLu3bfS.cjs';
export { A as Asset, c as AssetSchema, C as Credit, j as CreditSchema, S as SceneBackground, u as SceneBackgroundSchema, h as SceneMap, v as SceneMapSchema, i as Sheet, w as SheetSchema, W as WidgetActionRoll, D as WithCreditSchema } from './widget.v9.schema-uXrEUHv8.cjs';
export { W as WithIcon, a as WithIconSchema } from './with-icon.v1.schema-XGIKtTTi.cjs';
export { f as EntityType, T as Theme, p as ThemeSchema, q as ThemeStyle, r as ThemeStyleSchema, s as ThemeTagStyle, t as ThemeTagStyleSchema } from './theme.v25.schema-C8ORQ1ZY.cjs';
export { E as EntityLookupVariable, b as EntityRefVariable } from './variable.v9.schema-DttWjkiF.cjs';
export { a as ActionRoll, b as ActionRollSchema, c as ActionSections, d as ActionSectionsSchema, E as Entity, e as EntityAction, j as EntityActionSchema, l as EntitySchema, R as RollVariable, p as RollVariableSchema, r as Variable, s as VariableSchema, V as VariableUpdate, q as VariableUpdateSchema } from './entity-action.v2.schema-DOcl8z1F.cjs';
export { s as DataTableColumn, A as DataTableSchema } from './data-table.v3.schema-Do1gXLmf.cjs';
export { C as Chunk, a as ChunkMarkdown, b as ChunkMarkdownSchema, c as ChunkSchema } from './chunk.v12.schema-CHxna20z.cjs';
export { a as DialectSchema } from './dialect.v3.schema-B_j_sxv9.cjs';
export { T as Tag, a as TagCategory, b as TagCategorySchema, c as TagSchema } from './tag-category.v2.schema-Dhaiz4k9.cjs';
export { B as BundleImage, a as BundleImageSchema } from './bundle-image.v14.schema-BtlIaYQx.cjs';
export { W as WidgetEntityGrid } from './widget.v10.schema-BRwFDtwh.cjs';
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
