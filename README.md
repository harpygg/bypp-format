# bypp-format

Open schema for tabletop RPG content bundles — the `.bypp` file format.

A bypp file is a JSON document validated by zod. It carries an entire world's
worth of content (entities, pages, chunks, scenes, tags, sheets, data-tables,
random tables…) so any reader app can render it offline without round-trips
to a backend.

This package ships the schemas, the format version, and the migration runtime.

## Install

Not published on npm. Add directly from GitHub:

```jsonc
// package.json
{
  "dependencies": {
    "bypp-format": "github:harpygg/bypp-format",
    "zod": "^3.22.0"
  }
}
```

The built artifacts (`dist/`) are committed to the repo, so `pnpm install`
picks them up without a build step. After pushing changes to `main`, consumers
can pull the new version with:

```bash
pnpm update bypp-format
```

## Validate a bundle

```ts
import { BeyondPaperSchema } from "bypp-format";

const bundle = BeyondPaperSchema.parse(JSON.parse(fileContent));
// `bundle` is fully typed against the current format version.
```

`BeyondPaperSchema` always points to the **current** shipped version. If you
need a specific historical version, import its versioned schema directly
(see _Versioning_ below).

## Migrate a bundle

```ts
import { BeyondPaperSchema, migrate } from "bypp-format";

// Reads `raw.version`, walks the migration chain forward, validates each
// intermediate step against its target version's schema, and returns the
// migrated payload typed as `unknown` (zod-parse at the end to recover types).
const bundle = BeyondPaperSchema.parse(migrate(JSON.parse(fileContent)));
```

`migrate(raw, targetVersion?)` is **bidirectional**:

- **Upgrade** (default): `targetVersion` defaults to `BYPP_FORMAT_VERSION`.
  The chain walks forward via `MIGRATIONS[N]` (non-lossy by construction).
- **Downgrade** (explicit `targetVersion < source`): the chain walks
  backward via `DOWN_MIGRATIONS[N]`. **Lossy** — features that didn't
  exist in the older version are stripped. Producers use this to emit
  older formats for compatibility with readers stuck on earlier
  `bypp-format` versions.

```ts
import {
  BeyondPaperV1Schema,
  BeyondPaperV2Schema,
  migrate,
} from "bypp-format";

// Producer wants to share a bundle with a v1-only reader → downgrade.
const v2Bundle = BeyondPaperV2Schema.parse(currentBundle);
const v1Bundle = BeyondPaperV1Schema.parse(migrate(v2Bundle, 1));
// v1Bundle has no `sheets[]`, no `dataTables[]`, no `dataTableRef` variables.
// JSON.stringify(v1Bundle) is a valid v1 file readable by older readers.
```

It throws if:

- the input isn't an object or lacks a numeric `version` field,
- the input claims a version but doesn't conform to that version's schema,
- a step is missing (no `MIGRATIONS[N]` going up, or no `DOWN_MIGRATIONS[N]`
  going down),
- a migrator produces an invalid intermediate shape,
- a migrator forgets to set `version` correctly on its output.

## Versioning model

The format evolves over time. Old bundles stay valid forever — the runtime
knows how to read them, migrate them forward, and validate them at every
step.

### Per-version manifests

Each shipped bypp version has a **frozen** top-level manifest:

```
src/schemas/
  bypp.v1.schema.ts   # BeyondPaperV1Schema, BeyondPaperV1
  bypp.v2.schema.ts   # BeyondPaperV2Schema, BeyondPaperV2
  bypp.v3.schema.ts   # (future)
```

Each manifest is a `z.object({ … })` that lists which sub-schemas a bundle
of that version is composed of:

```ts
// schemas/bypp.v1.schema.ts
export const BeyondPaperV1Schema = z.object({
  version: z.literal(1),
  format: z.literal("bypp"),
  // … bundle metadata
  variables: z.array(VariableV1Schema),   // ← v1 variable (no dataTableRef)
  entities: z.array(EntityV1Schema),       // ← shape unchanged since v1
  // …
});
```

```ts
// schemas/bypp.v2.schema.ts
export const BeyondPaperV2Schema = z.object({
  version: z.literal(2),
  format: z.literal("bypp"),
  // … bundle metadata
  variables: z.array(VariableV2Schema),    // ← v2 variable (adds dataTableRef/Lookup)
  entities: z.array(EntityV1Schema),       // ← still v1 shape
  sheets: z.array(SheetV2Schema),          // ← introduced in v2
  dataTables: z.array(DataTableV2Schema),  // ← introduced in v2
  // …
});
```

**Once shipped, a manifest is immutable.** It documents what a bundle of that
version literally looks like, byte for byte.

### Naming convention

**Every file under `models/` and `mixins/` carries an explicit version
suffix.** There is no un-versioned current file — the current shape is
whichever versioned file the current manifest references.

```
models/entity.v1.schema.ts    # frozen entity shape introduced in v1, still current
models/widget.v1.schema.ts    # frozen widget shape introduced in v1, still current
models/variable.v1.schema.ts  # frozen variable shape from v1 (used by bypp.v1)
models/variable.v2.schema.ts  # variable shape introduced in v2 (used by bypp.v2)
models/sheet.v2.schema.ts     # sheet (introduced in v2, still current)
models/data-table.v2.schema.ts
…
```

The version suffix is **the bypp version in which this shape was first
introduced or last forked**. There is exactly one coordinate system across
the whole repo: every version number is a bypp version, never a per-model
counter.

The two rules that follow from that:

- **A brand-new model added in bypp vN** gets the suffix `vN`, even though
  it's "version 1" of that model in some abstract sense. Example: `sheet`
  was introduced in bypp v2 → `sheet.v2.schema.ts`. If you add `quest` for
  the first time in bypp v8 → `quest.v8.schema.ts`.
- **A model that changes in bypp vN** gets a new file `models/x.vN.schema.ts`
  alongside the older one. The old file is never modified. Example: if
  `quest` (introduced at v8) later changes in bypp v17, you create
  `quest.v17.schema.ts` and leave `quest.v8.schema.ts` untouched. A further
  change in bypp v22 creates `quest.v22.schema.ts`. The full history is
  visible from `ls models/quest.*.schema.ts`.

A schema may stay at the same version across many bypp manifests if nothing
about it changes — e.g. `EntityV1Schema` is referenced by both
`BeyondPaperV1Schema` and `BeyondPaperV2Schema` because entities haven't
been touched.

To find which version of `X` a bypp vN bundle uses, open
`schemas/bypp.vN.schema.ts` — its imports are the source of truth (e.g.
`bypp.v15.schema.ts` importing `QuestV8Schema` tells you v15 still uses the
v8 quest shape).

Exported names match: `entity.v1.schema.ts` exports `EntityV1Schema`,
`type EntityV1`, `EntityBaseV1Schema`, etc. The package root re-exports the
**latest** of each as the convenience alias `EntitySchema` / `type Entity`
so consumers that don't care about a specific version keep working.

### Forking sub-schemas on change

When you need to change a sub-schema for the next bypp version (e.g.
widget v3 in upcoming bypp v3):

1. **Create** `models/widget.v3.schema.ts` with the new shape. Inside, all
   exported names carry the `V3` suffix (`WidgetV3Schema`, `type WidgetV3`,
   `WidgetBaseV3Schema`, …). The existing `widget.v1.schema.ts` is **never
   modified** — `BeyondPaperV1Schema` and `BeyondPaperV2Schema` still
   reference it.
2. **Create** `schemas/bypp.v3.schema.ts` that imports `WidgetV3Schema`
   alongside the other unchanged sub-schemas (still imported from their v1
   files).
3. **Write** `migrations/v2-to-v3.ts` typed
   `Migrator<BeyondPaperV2, BeyondPaperV3>`. The compiler enforces that
   every widget gets transformed from `WidgetV1` to `WidgetV3`.
4. **Update** the "current aliases" section of `src/index.ts` to re-export
   `WidgetV3Schema as WidgetSchema` / `type WidgetV3 as Widget`. Consumers
   using the un-suffixed names automatically pick up v3.
5. **Register** the new migration + schema in `migrations/index.ts` and
   bump `BYPP_FORMAT_VERSION`.

The current repo demonstrates the pattern at v1 → v2:

- `variable.v1.schema.ts` + `variable.v2.schema.ts` coexist because the
  variable union genuinely changed (added two variants).
- `sheet.v2.schema.ts` and `data-table.v2.schema.ts` exist as fresh v2-only
  files (those types didn't exist in v1).
- All other models (entity, page, chunk, widget, …) stay at `*.v1.schema.ts`
  and are referenced by both manifests because their shape hasn't been
  touched.

#### Worked example: lifecycle of a model

Say you add a new `quest` model in bypp v8, then evolve it twice.

| Event | Action | File(s) on disk |
| --- | --- | --- |
| bypp v8 introduces `quest` | Create `quest.v8.schema.ts` exporting `QuestV8Schema` | `quest.v8.schema.ts` |
| bypp v9 — v16 (no quest changes) | Nothing to do | `quest.v8.schema.ts` |
| bypp v17 changes quest | Create `quest.v17.schema.ts` exporting `QuestV17Schema`; leave v8 untouched | `quest.v8.schema.ts`, `quest.v17.schema.ts` |
| bypp v18 — v21 (no quest changes) | Nothing to do | same |
| bypp v22 changes quest again | Create `quest.v22.schema.ts`; leave previous files untouched | `quest.v8.schema.ts`, `quest.v17.schema.ts`, `quest.v22.schema.ts` |

After all that:

- `bypp.v8.schema.ts` … `bypp.v16.schema.ts` import `QuestV8Schema`.
- `bypp.v17.schema.ts` … `bypp.v21.schema.ts` import `QuestV17Schema`.
- `bypp.v22.schema.ts`+ import `QuestV22Schema`.
- The "current alias" in `src/index.ts` re-exports `QuestV22Schema as QuestSchema`.

A v8 bundle in the wild migrates through the chain (v8→v9, v9→v10, …, v21→v22)
and each step's migrator handles only what changed at that step.

### Migrations

```
src/migrations/
  types.ts          # Migrator<TIn, TOut>
  v1-to-v2.ts       # forward: Migrator<BeyondPaperV1, BeyondPaperV2>
  v2-to-v1.ts       # backward: Migrator<BeyondPaperV2, BeyondPaperV1>
  v2-to-v3.ts       # (future)
  v3-to-v2.ts       # (future)
  index.ts          # MIGRATIONS, DOWN_MIGRATIONS, SCHEMA_BY_VERSION, migrate()
```

Two registries, symmetric:

- `MIGRATIONS[N]` migrates **v(N) → v(N+1)** (forward, non-lossy).
- `DOWN_MIGRATIONS[N]` migrates **v(N) → v(N-1)** (backward, lossy).

Each migration is a single-step function with a typed input and output:

```ts
// Forward — adds capability, non-lossy.
import type { BeyondPaperV1 } from "../schemas/bypp.v1.schema";
import type { BeyondPaperV2 } from "../schemas/bypp.v2.schema";
import type { Migrator } from "./types";

export const v1ToV2: Migrator<BeyondPaperV1, BeyondPaperV2> = (v1) => ({
  ...v1,
  version: 2,
  sheets: [],
  dataTables: [],
});

// Backward — strips what didn't exist in the older version. Lossy.
export const v2ToV1: Migrator<BeyondPaperV2, BeyondPaperV1> = (v2) => {
  const { sheets, dataTables, variables, ...rest } = v2;
  return {
    ...rest,
    version: 1,
    variables: variables.filter(
      (v): v is VariableV1 =>
        v.type !== "dataTableRef" && v.type !== "dataTableLookup",
    ),
  };
};
```

Because `TIn` and `TOut` are real `z.infer` types, the compiler enforces:

- that every required field of the destination version is set,
- that field renames / reshapes are written out explicitly,
- that the `version` discriminator is set correctly (the runtime then
  double-checks via `assertVersionBumped`).

`migrate()` chains them: `migrate(rawV1, 5)` walks v1 → v2 → v3 → v4 → v5
as long as every intermediate forward `Migrator` is registered. Likewise
`migrate(rawV5, 1)` walks v5 → v4 → v3 → v2 → v1 through the down
registry. Chains compose by construction — adding a new version only
requires one new forward and one new backward step.

### Changelog

Every shipped version is documented in [CHANGELOG.md](./CHANGELOG.md) —
what was added, what changed, what gets stripped on downgrade. New
versions append a new section at the top.

### Adding a new version (recap)

Suppose you're going from current `v2` to `v3` because the `widget` schema
needs a new variant:

1. **Create** `models/widget.v3.schema.ts` with the new shape. Exports
   carry the `V3` suffix: `WidgetV3Schema`, `type WidgetV3`,
   `WidgetBaseV3Schema`, etc. **Do not touch** `widget.v1.schema.ts`.
2. **Create** `schemas/bypp.v3.schema.ts`:
   ```ts
   export const BeyondPaperV3Schema = z.object({
     version: z.literal(3),
     format: z.literal("bypp"),
     // … bundle metadata
     widgets: z.array(WidgetV3Schema),   // ← new
     entities: z.array(EntityV1Schema),  // ← unchanged
     sheets: z.array(SheetV2Schema),     // ← unchanged
     // …
   });
   ```
3. **Create** `migrations/v2-to-v3.ts` (forward):
   ```ts
   export const v2ToV3: Migrator<BeyondPaperV2, BeyondPaperV3> = (v2) => ({
     ...v2,
     version: 3,
     widgets: v2.widgets.map(/* transform each WidgetV1 into a WidgetV3 */),
   });
   ```
4. **Create** `migrations/v3-to-v2.ts` (backward). It strips whatever v3
   added that doesn't exist in v2:
   ```ts
   export const v3ToV2: Migrator<BeyondPaperV3, BeyondPaperV2> = (v3) => ({
     ...v3,
     version: 2,
     widgets: v3.widgets.map(/* reverse the transform, or drop new variants */),
   });
   ```
   Backward migrations are lossy by design — the producer (or its UI)
   should warn the user about what's being dropped.
5. **Register** in `migrations/index.ts`:
   ```ts
   export const MIGRATIONS = { 1: v1ToV2, 2: v2ToV3 };
   export const DOWN_MIGRATIONS = { 2: v2ToV1, 3: v3ToV2 };
   export const SCHEMA_BY_VERSION = {
     1: BeyondPaperV1Schema,
     2: BeyondPaperV2Schema,
     3: BeyondPaperV3Schema,
   };
   ```
6. **Bump** `BYPP_FORMAT_VERSION` in `version.ts` from `2` to `3`.
7. **Update** `src/index.ts`:
   - Add `BeyondPaperV3Schema` / `BeyondPaperV3` to the per-version exports.
   - Add the `WidgetV3*` exports under "Versioned sub-schemas".
   - Replace the `WidgetV1Schema as WidgetSchema` aliases with
     `WidgetV3Schema as WidgetSchema` under "Current aliases".
   - Update the `ByppWidget*` aliases at the bottom.
8. **Write tests** for both migration directions.
9. **Append a section to `CHANGELOG.md`** describing what's added, what
   changed, and what gets dropped on downgrade.

Old bundles in the wild keep validating against `BeyondPaperV1Schema` or
`BeyondPaperV2Schema` and walk forward automatically via `migrate()`.

## Conventions

- **Never modify a `*.v{N}.schema.ts` file after shipping.** They're frozen
  by contract.
- **Never modify a `bypp.v{N}.schema.ts` manifest after shipping.** Same
  rule.
- **Every file under `models/` and `mixins/` carries a version suffix.**
  There is no "current" un-suffixed file. The "current" shape is whichever
  versioned file the **current aliases** section of `src/index.ts`
  re-exports as `XSchema`.
- Each migration step bumps `version` exactly by 1. `migrate()` chains them
  to span any number of versions.
- The `format: "bypp"` literal is constant across versions and acts as a
  belt-and-suspenders sanity check.

## Layout

```
src/
  bypp.schema.ts              # re-exports current version as `BeyondPaperSchema`
  version.ts                  # BYPP_FORMAT_VERSION
  uid.ts                      # branded UID types + zod schemas
  index.ts                    # package barrel (versioned + current aliases)
  schemas/
    bypp.v1.schema.ts         # frozen v1 manifest
    bypp.v2.schema.ts         # frozen v2 manifest
  models/
    entity.v1.schema.ts       # frozen v1, still current
    widget.v1.schema.ts       # frozen v1, still current
    variable.v1.schema.ts     # frozen v1 variable (6 types)
    variable.v2.schema.ts     # v2 variable (adds dataTableRef + dataTableLookup)
    sheet.v2.schema.ts        # frozen v2, still current
    data-table.v2.schema.ts   # frozen v2, still current
    …
  mixins/
    with-name.v1.schema.ts
    with-position.v1.schema.ts
    translatable-text.v2.schema.ts
    …
  migrations/
    types.ts
    v1-to-v2.ts
    index.ts
```
