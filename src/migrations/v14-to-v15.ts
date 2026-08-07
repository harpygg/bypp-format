import type { BeyondPaperV14 } from "../schemas/bypp.v14.schema";
import type { BeyondPaperV15 } from "../schemas/bypp.v15.schema";
import type { Migrator } from "./types";

/**
 * v14 → v15 (upgrade): unwraps each dialect's `font` object into a bare
 * `fontFamily`. **Non-lossy in every way that matters.**
 *
 * The dropped `fontUrl` was never authored: producers synthesized it from the
 * family name at export time, and readers ignored it and matched on the name.
 * Nothing a document meant is lost by discarding it — see
 * `../models/dialect.v3.schema`.
 */
export const v14ToV15: Migrator<BeyondPaperV14, BeyondPaperV15> = (v14) => ({
  ...v14,
  version: 15,
  dialects: v14.dialects.map(({ font, ...rest }) => ({
    ...rest,
    fontFamily: font.fontFamily,
  })),
});
