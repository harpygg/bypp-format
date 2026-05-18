/**
 * A single migration step from version `TIn` to version `TOut`.
 *
 * Each step is responsible for setting `version` on its output. The chain is
 * driven by `migrate()` in `./index`, which validates the output of every
 * step against the target version's schema (`SCHEMA_BY_VERSION`).
 *
 * For early bypp versions that predate this library (e.g. v1, which was
 * never formally typed), `TIn` defaults to `unknown` — the migrator has to
 * defensively read the raw shape and trust the output validation that
 * follows.
 */
export type Migrator<TIn = unknown, TOut = unknown> = (raw: TIn) => TOut;
