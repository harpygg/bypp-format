import type { BeyondPaperV3 } from "../schemas/bypp.v3.schema";
import type { BeyondPaperV4 } from "../schemas/bypp.v4.schema";
import type { Migrator } from "./types";

/**
 * v4 → v3 (downgrade): mirror of `v3-to-v4`.
 *
 *   • `parentAttribution.bundleName` → `artifactName`. Field rename
 *     back.
 *   • Scene maps with `sourceFormat: "dd2vtt"` collapse back into the
 *     `dd2vtt` variant. Other `sourceFormat` values (e.g. `uvtt`,
 *     `fvtt`) didn't exist in v3 — they're dropped silently and the
 *     map stays a `customImage` (lossy for those values, but v3 had
 *     no slot to keep them).
 *   • Defaults / nullability tightening (was `.default([])` in v4,
 *     required in v3) means we have to re-emit empty arrays / `false`
 *     for required fields the producer skipped.
 *
 * The v3 schema validation that runs after this migrator (see
 * `migrate.ts`) catches any missed re-emission.
 */
export const v4ToV3: Migrator<BeyondPaperV4, BeyondPaperV3> = (v4) => {
  const { parentAttribution, sceneMaps, scenes, ...rest } = v4;

  const v3ParentAttribution = parentAttribution
    ? {
        artifactName: parentAttribution.bundleName,
        authorName: parentAttribution.authorName,
        license: parentAttribution.license,
        ...(parentAttribution.sourceUrl !== undefined
          ? { sourceUrl: parentAttribution.sourceUrl }
          : {}),
      }
    : undefined;

  const v3SceneMaps = sceneMaps.map((sm) => {
    if (sm.type === "customImage" && sm.sourceFormat === "dd2vtt") {
      const { sourceFormat: _sf, type: _t, ...withoutAnnotations } = sm;
      void _sf;
      void _t;
      return { ...withoutAnnotations, type: "dd2vtt" as const };
    }
    // Strip the v4-only `sourceFormat` annotation for any other map —
    // v3 has no slot for it.
    const { sourceFormat: _sf, ...withoutAnnotation } = sm as typeof sm & {
      sourceFormat?: string;
    };
    void _sf;
    return withoutAnnotation;
  });

  return {
    ...rest,
    version: 3,
    ...(v3ParentAttribution ? { parentAttribution: v3ParentAttribution } : {}),
    sceneMaps: v3SceneMaps,
    scenes,
  } as BeyondPaperV3;
};
