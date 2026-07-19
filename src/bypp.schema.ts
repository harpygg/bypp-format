/**
 * Top-level convenience re-export of the **current** bypp manifest.
 *
 * `BeyondPaperSchema` always points to the latest shipped version's schema.
 * Consumers that want to validate against a specific historical version
 * should import the versioned schema directly (e.g. `BeyondPaperV2Schema`
 * from `bypp-format`).
 */

export {
  BeyondPaperV12Schema as BeyondPaperSchema,
  type BeyondPaperV12 as BeyondPaper,
} from "./schemas/bypp.v12.schema";
