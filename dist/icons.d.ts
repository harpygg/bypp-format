/** Every slug in the registry, in the registry's own order. */
declare const BYPP_ICON_NAMES: readonly string[];
/**
 * The shape every registry slug takes: lowercase alphanumerics in `_`- or
 * `-`-separated words. Exported so a producer building its own vocabulary can
 * hold itself to the same discipline — icon FIELDS are not validated against
 * it, and never will be.
 */
declare const ICON_SLUG_PATTERN: RegExp;
/**
 * Whether a slug is in the registry.
 *
 * Use it to decide what a reader can draw, never to decide what a document
 * may contain: an icon field accepts any string, and rejecting a document
 * over an unrecognised icon would throw away everything else it carries.
 */
declare const isByppIconName: (name: string) => boolean;

export { BYPP_ICON_NAMES, ICON_SLUG_PATTERN, isByppIconName };
