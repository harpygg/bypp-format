# Changelog

All notable changes to the bypp format and the `bypp-format` package are
documented here. The format follows strict per-version versioning: each
shipped `BYPP_FORMAT_VERSION` is frozen and described in
`src/schemas/bypp.vN.schema.ts`. Forward and backward migrations between
adjacent versions live in `src/migrations/`.

When you add a new version, append a new section at the top of this file
following the structure below.

## Format v3 — 2026-05

### Added
- Top-level **licensing & attribution metadata**
  ([`BeyondPaperV3Schema`](src/schemas/bypp.v3.schema.ts)). Every bundle
  now carries its legal terms inline, so a `.bypp` downloaded for offline
  use keeps full legal context.

  - **`license`** — one of 8 values:
    - `CC0` — public domain dedication
    - `CC-BY` — attribution required
    - `CC-BY-SA` — attribution + share-alike (viral)
    - `CC-BY-NC` — attribution + non-commercial
    - `CC-BY-NC-SA` — attribution + non-commercial + share-alike
    - `CC-BY-ND` — attribution + no derivatives
    - `CC-BY-NC-ND` — attribution + non-commercial + no derivatives
    - `ARR` — all rights reserved (the only legal value for
      non-distributable bundles; default when migrating from v2)

  - **`licenseVersion`** — locked to `"4.0"`. Only Creative Commons 4.0 is
    supported; older CC versions are out of scope.

  - **`attribution`** — required block: `{ authorName, authorUrl?, sourceUrl? }`.
    Carried even by `CC0` (originally-created-by credit) and `ARR`
    (ownership statement).

  - **`parentAttribution`** — optional. Set when a bundle is transmuted
    (derived) from another. Snapshot of the parent's `artifactName`,
    `authorName`, `license`, optional `sourceUrl` — so the credit chain
    survives offline use.

  - **`creatorLinks`** — optional list of additional URLs where the
    creator can be found (other profiles, Ko-fi, Gumroad, Patreon,
    Itch.io, a Discord, a personal blog…). `attribution.authorUrl`
    already carries the canonical home page; `creatorLinks` is
    everything else.

- Schema exports for the new types: `CcLicenseSchema`, `AttributionSchema`,
  `ParentAttributionSchema` (and their `V3`-suffixed canonical names).
- Migrations: `MIGRATIONS[2] = v2ToV3` (forward — defaults `license: "ARR"`
  and `attribution: { authorName: "Unknown" }` since v2 bundles carry no
  legal metadata) and `DOWN_MIGRATIONS[3] = v3ToV2` (backward, lossy —
  strips all licensing fields).

### Changed
- `BYPP_FORMAT_VERSION` bumped to `3`. `BeyondPaperSchema` now points at
  `BeyondPaperV3Schema`; `type BeyondPaper` is `BeyondPaperV3`.

### Removed
- Nothing. v3 is purely additive over v2 at the format level. The lossy
  v3 → v2 downgrade strips v3-only fields but doesn't touch anything that
  was already in v2.

### Notes for consumers
- Producers MUST set a real `license` value. The forward migration's
  `"ARR"` default exists only to make legacy v2 bundles parseable; emitting
  fresh v3 bundles with `"Unknown"` author or unintentional `"ARR"` is a
  bug on the producer's side.
- Compatibility between parent and derivative licenses (e.g. CC-BY-SA
  forces SA on all descendants; ND/ARR forbid derivatives entirely) is
  the **consumer's** responsibility. The format records the licenses; it
  doesn't enforce the rules.

## Format v2 — 2026-03

### Added
- Top-level `sheets[]` array
  ([`SheetV2Schema`](src/models/sheet.v2.schema.ts)). A sheet is the visual
  canvas that lays out widgets driven by a dataset's variables. Sheets
  reference widgets by uid via `widgetUids` and optionally pin a target
  dataset via `compatibleDatasetUid`.
- Top-level `dataTables[]` array
  ([`DataTableV2Schema`](src/models/data-table.v2.schema.ts)). A data-table
  carries typed columns + rows for tabular reference content. Column types:
  `number`, `text`, `boolean`, `choice`, `icon`, `translatableText`,
  `dataTableRef`, `dataTableLookup`.
- Two new variants in the variable discriminated union
  ([`VariableV2Schema`](src/models/variable.v2.schema.ts)):

  - **`dataTableRef`** — a variable whose value points to one (or many, if
    `isMultiple`) row(s) of a target data-table. Fields:
    `dataTableUid` (which table), `labelColumnUid` (column to display in
    pickers / cells), `valueColumnUid` (column read when the variable is
    used as a value in formulas/lookups), `iconColumnUid` (optional icon
    column for visual prefix), `isMultiple` (single vs multi pick), and
    `defaultRowUids` (pre-selected rows used when the sheet has no value
    yet — only the first is used in single mode). All config fields are
    optional so a partially-configured ref can exist during dialog flow.

  - **`dataTableLookup`** — a derived variable that reads a cell from a
    target data-table given row uid(s) supplied by an upstream
    `dataTableRef` variable. Carries no stored value of its own. Fields:
    `sourceVariableUid` (sibling `dataTableRef` whose value feeds the
    lookup), `dataTableUid` + `columnUid` (where to read on the primary
    hop), `chainedLabelColumnUids` (per-hop column overrides when the
    chain follows multiple `dataTableRef` jumps), `multiAggregator`
    (`concat` | `sum` | `avg` | `min` | `max`, used when more than one
    row uid is supplied), and `multiSeparator` (string joining for
    `concat` — defaults to `", "`).

  Both variants live in v2's variable union only. A v1 reader can't
  represent them; the v2 → v1 downgrade migration filters them out
  entirely. A data-table also carries columns of these same two types
  (`dataTableRef` / `dataTableLookup`) inside its `columns[]` array — that's
  a separate schema (see `DataTableColumnV2Schema`) with similar fields,
  scoped to a column instead of a variable.
- `TranslatableTextV2Schema` mixin
  ([`mixins/translatable-text.v2.schema.ts`](src/mixins/translatable-text.v2.schema.ts))
  for locale-keyed string maps (`{ en: "Wizard", fr: "Magicien" }`). Used
  by data-table column labels and translatable-text cell values.
- `WithLocalizedNameV2Schema` mixin
  ([`mixins/with-localized-name.v2.schema.ts`](src/mixins/with-localized-name.v2.schema.ts)) —
  same role as `WithNameV1Schema` but the `name` field is a
  `TranslatableText` instead of a plain string. Currently used only by
  data-tables; other models stay on `WithNameV1Schema` (mono-lingual).
- New branded UIDs: `DataTableUid`, `DataTableRowUid`, `DataTableColumnUid`.
- Migrations: `MIGRATIONS[1] = v1ToV2` (forward, non-lossy) and
  `DOWN_MIGRATIONS[2] = v2ToV1` (backward, lossy — drops sheets, dataTables,
  and variables of the two new types).

### Changed
- `BYPP_FORMAT_VERSION` bumped to `2`. `BeyondPaperSchema` now points at
  `BeyondPaperV2Schema`; `type BeyondPaper` is `BeyondPaperV2`.
- Repo restructure: every sub-schema file under `models/` and `mixins/`
  carries a version suffix matching the bypp version in which it was
  introduced or last forked (e.g. `entity.v1.schema.ts`,
  `variable.v2.schema.ts`).
- `migrate(raw, targetVersion)` is now **bidirectional**. Same call walks
  up via `MIGRATIONS` or down via `DOWN_MIGRATIONS` depending on direction.
  Old code that relied on the migrate-only-forward error (`cannot downgrade`)
  needs updating — that path no longer exists.

### Removed
- Nothing — v2 is purely additive over v1 at the format level. The lossy
  v2 → v1 downgrade strips v2-only fields but doesn't touch anything that
  was already in v1.

## Format v1 — initial

The first shipped format. Defined what a bypp bundle contains: entities,
pages, chunks, datasets, variables (6 types: number/text/boolean/choice/
formula/roll), widgets, random tables, tags, tag categories, scenes,
scene maps, scene backgrounds, assets, dialects. See
[`src/schemas/bypp.v1.schema.ts`](src/schemas/bypp.v1.schema.ts) for the
exact frozen manifest.
