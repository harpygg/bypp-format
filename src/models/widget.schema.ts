import { z } from "zod";
import { WithAreaSchema } from "../mixins/with-area.schema";
import { WithNameSchema } from "../mixins/with-name.schema";
import { WithPositionSchema } from "../mixins/with-position.schema";
import { WithStyleSchema } from "../mixins/with-style.schema";
import { VariableUidSchema, WidgetUidSchema } from "../uid";

export const WidgetBaseSchema = z
  .object({ uid: WidgetUidSchema })
  .merge(WithNameSchema)
  .merge(WithAreaSchema)
  .merge(WithPositionSchema)
  .merge(WithStyleSchema)
  .extend({
    variableUid: VariableUidSchema.optional(),
  });

export type WidgetBase = z.infer<typeof WidgetBaseSchema>;

export const WidgetEmptySchema = WidgetBaseSchema.extend({
  type: z.literal("empty"),
});

export type WidgetEmpty = z.infer<typeof WidgetEmptySchema>;

export const WidgetBigNumberSchema = WidgetBaseSchema.extend({
  type: z.literal("bigNumber"),
  min: z.number().optional(),
  max: z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
  unit: z.string().optional(),
});

export type WidgetBigNumber = z.infer<typeof WidgetBigNumberSchema>;

export const WidgetPlainTextSchema = WidgetBaseSchema.extend({
  type: z.literal("plainText"),
});

export type WidgetPlainText = z.infer<typeof WidgetPlainTextSchema>;

export const WidgetToggleSchema = WidgetBaseSchema.extend({
  type: z.literal("toggle"),
  toggleIconType: z.string().optional(),
});

export type WidgetToggle = z.infer<typeof WidgetToggleSchema>;

export const WidgetBulletListSchema = WidgetBaseSchema.extend({
  type: z.literal("bulletList"),
  listVisibility: z.string().optional(),
  listStyleBulletBreakline: z.boolean().optional(),
  listStyleBulletType: z.string().optional(),
  listStyleBulletGap: z.number().optional(),
  listStyleBulletIconGap: z.number().optional(),
  listOptionStyle: z.string().optional(),
});

export type WidgetBulletList = z.infer<typeof WidgetBulletListSchema>;

export const WidgetInlineListSchema = WidgetBaseSchema.extend({
  type: z.literal("inlineList"),
  listStyleTextSeparator: z.string().optional(),
  listVisibility: z.string().optional(),
  listOptionStyle: z.string().optional(),
});

export type WidgetInlineList = z.infer<typeof WidgetInlineListSchema>;

export const WidgetPipsSchema = WidgetBaseSchema.extend({
  type: z.literal("pips"),
  gapX: z.number().optional(),
  gapY: z.number().optional(),
  max: z.number().optional(),
  maxVariable: VariableUidSchema.nullable().optional(),
});

export type WidgetPips = z.infer<typeof WidgetPipsSchema>;

export const WidgetSchema = z.discriminatedUnion("type", [
  WidgetEmptySchema,
  WidgetBigNumberSchema,
  WidgetPlainTextSchema,
  WidgetToggleSchema,
  WidgetBulletListSchema,
  WidgetInlineListSchema,
  WidgetPipsSchema,
]);

export type Widget = z.infer<typeof WidgetSchema>;
