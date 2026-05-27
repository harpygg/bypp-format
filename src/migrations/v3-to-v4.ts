import type { BeyondPaperV3 } from "../schemas/bypp.v3.schema";
import type { BeyondPaperV4 } from "../schemas/bypp.v4.schema";
import type { Migrator } from "./types";

/**
 * v3 → v4 (upgrade): non-lossy cleanup.
 *
 * The semantic content is identical between v3 and v4 — the changes are
 * about how the data is *expressed* in the schema. The migrator therefore
 * focuses on the few real shape changes:
 *
 *   • `parentAttribution.artifactName` → `bundleName`. Field rename.
 *   • Scene `weather` and `gameMode` get dropped (they were removed from
 *     v4 because they were producer-specific). v3 bundles that carried
 *     them lose that data — non-recoverable on the way to v4.
 *   • Scene maps of type `dd2vtt` collapse into `customImage` with the
 *     new `sourceFormat: "dd2vtt"` annotation.
 *
 * Every other v3 field is valid as-is in v4 (the optional / default
 * tightening is read-side only — a v3 record with explicit `null` /
 * `false` / `[]` still validates against v4).
 *
 * Mapped via explicit field-by-field destructure rather than a spread:
 * the categories' element shapes differ enough (v2 entities,
 * scene-maps, etc.) that letting v3 records flow through verbatim
 * would be sloppy. Output is `any`-cast at the boundary because the
 * mapped item shapes from v1/v2 aren't statically convertible to
 * v2 — runtime safety is guaranteed by the v4 schema validation step
 * applied immediately after this migrator (see `migrate.ts`).
 */
export const v3ToV4: Migrator<BeyondPaperV3, BeyondPaperV4> = (v3) => {
  const {
    parentAttribution,
    sceneMaps,
    scenes,
    ...rest
  } = v3;

  const v4ParentAttribution = parentAttribution
    ? {
        bundleName: parentAttribution.artifactName,
        authorName: parentAttribution.authorName,
        license: parentAttribution.license,
        ...(parentAttribution.sourceUrl !== undefined
          ? { sourceUrl: parentAttribution.sourceUrl }
          : {}),
      }
    : undefined;

  const v4SceneMaps = sceneMaps.map((sm) => {
    if (sm.type === "dd2vtt") {
      // DD2VTT collapses into customImage + sourceFormat annotation.
      // The image-URLs / name / grid shape is identical between the v1
      // and v2 mixins (we only added `.url()` validation in v2, which is
      // satisfied by anything that was already a valid URL in v3).
      const { type: _type, ...withoutType } = sm;
      void _type;
      return { ...withoutType, type: "customImage" as const, sourceFormat: "dd2vtt" };
    }
    return sm;
  });

  const v4Scenes = scenes.map((s) => {
    // Strip removed fields explicitly so they don't leak through `...s`.
    const { weather: _w, gameMode: _g, ...sceneRest } = s;
    void _w;
    void _g;
    return sceneRest;
  });

  return {
    ...rest,
    version: 4,
    ...(v4ParentAttribution ? { parentAttribution: v4ParentAttribution } : {}),
    sceneMaps: v4SceneMaps,
    scenes: v4Scenes,
  } as BeyondPaperV4;
};
