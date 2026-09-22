# Changelog

All notable changes to the bypp format and the `bypp-format` package are
documented here. The format follows strict per-version versioning: each
shipped `BYPP_FORMAT_VERSION` is frozen and described in
`src/schemas/bypp.vN.schema.ts`. Forward and backward migrations between
adjacent versions live in `src/migrations/`.

When you add a new version, append a new section at the top of this file
following the structure below.

## Format v27 — 2026-09

### Changed

- **A variable's words are locale-keyed.** Two labels that were one string
  each become a `TranslatableText` (`{ en: "Strength", fr: "Force" }`):

  - `variables[].label`, on every variant
    (`src/models/variable.v11.schema.ts`). `name` stays a plain string: it is
    the internal identifier formulas and structural views use, not a display
    text.
  - `options[].label` of a choice option (`ChoiceOptionV27`), on a `choice`
    variable and on a data-table `choice` column alike
    (`src/models/data-table.v4.schema.ts`): one option shape for both.

  Everything around them already was locale-keyed — a data-table's name, a
  column's label, a translatable cell, an entity action's label. A producer
  whose attributes and options were authored in several languages had to
  keep one on export and drop the others; a reader importing the file got
  one language back, filed under `en` whatever it was.

  No content array other than `variables` and `dataTables` changes shape.

### Migrations

- `v26 → v27` files every label string under `en`: `"Wizard"` becomes
  `{ en: "Wizard" }`. A v26 label says nothing about its language, and `en`
  is the one a v26 producer was expected to keep. Nothing else moves.
- `v27 → v26` is **lossy**: every label keeps one language, `en` when
  present, else the first non-empty one; the others are dropped. A choice
  option whose label has no text at all gets `""` (v26 requires one); a
  variable label with none is dropped, and a reader falls back to `name`.

## Format v26 — 2026-09

### Added

- **An action can do more than roll.** A sheet's `roll` variable
  (`RollVariableV10`, `src/models/variable.v10.schema.ts`) and an entity's
  own action (`EntityActionV2`, `src/models/entity-action.v2.schema.ts`)
  both gain the same optional sections, run in this order:

  - `rolls[]` — one `{ key, label, diceFormula }` per throw (`ActionRollV26`):
    an attack and its damage in one action. `diceFormula` stays on the
    action as the first throw's formula, written again, so a reader of one
    notation and a v25 reader keep something to read; a reader takes
    `rolls` when present. `key` never changes once written: the reserved
    attributes below derive from it.
  - `updates[]` — one `{ variableUid, formula }` per attribute set
    (`VariableUpdateV26`). `formula` is HTML like every other formula in
    this format. Whose attribute `variableUid` names — the holder's own or
    that of the entity using it — is NOT stored: a reader tells the two
    apart the way it already does for a formula's spans, from the datasets
    the holder belongs to. Every formula of one action reads the values as
    they were before the action ran, so the order of the lines never
    matters.
  - `log` — a message, HTML with the same spans, posted once the action has
    run.

  The last two may name two reserved attributes per throw,
  `system-action-result-<key>` (the total, a number) and
  `system-action-roll-<key>` (the notation, text). A reader resolves them
  from the throws it just made; they are never stored on an entity and never
  listed in `variables[]`.

  An action has no kind: it is what its sections say. A `roll` with no
  `diceFormula` and an `updates` list is a purchase button; with all three
  it rolls, spends and announces. `type: "roll"` stays on the entity action
  for v1 readers and no longer says anything.

  Until v26 an action could only throw dice. A "Purchase" button on an item,
  taking its price out of the buyer's purse, had nowhere to live, and an
  author who wrote one had it dropped on export.

  A reader that pulls an entity or a sheet must pull the attributes every
  section reads AND the ones the updates set, the way it already pulls a
  roll's deps — but never the two reserved ones.

  No content array other than `variables` and `entities` changes shape.

### Migrations

- `v25 → v26` is a pure version bump: every v25 action rolls, and a roll is
  written the same way in v26. Nothing is inferred.
- `v26 → v25` is **lossy**: every `updates` and `log` is dropped, on the
  sheets' rolls and on the entities' own actions alike, and of the `rolls`
  only the first survives, as `diceFormula`. The actions stay with their
  dice; one that only updated or logged comes out doing nothing.
  Nothing is turned into a roll — a roll has nothing to set, and a purchase
  landing as a dice throw would be worse than its absence.

## Format v25 — 2026-09

### Added

- **A document can say how its own prose should look.** A new ROOT key,
  `theme` (`src/models/theme.v25.schema.ts`), optional.

  Everything a style could touch until now was a box on a sheet: a widget,
  placed, padded, bordered. The words themselves had nothing. A bundle whose
  headings, quotes and asides are half of what it is arrived somewhere else as
  unstyled text, and the look had to be rebuilt by hand — which is not
  something an author can ship.

  It carries three things:

  - `elements` — a `StyleV6` per element of the content, keyed by a NAME. The
    names a reader is expected to recognise: `base` (the content container,
    which everything under it inherits from through the plain CSS cascade
    rather than any rule of this format's own), `h1` … `h6`, `p`, `ul`, `ol`,
    `blockquote`, `code`, `table`, `link`, `mention`, `mention-<type>` for one
    entity type (`<type>` is a member of `EntityTypeV1Schema`), and
    `block-<name>` for a block wearing a named look.
  - `tagStyles` — a style per tag, as a LIST rather than a map, because the
    order is the answer: a thing wears several tags in no particular order,
    and this list is the author's own. A reader lays them first to last, later
    ones winning. `tagUid` names an entry of the document's own `tags[]`; an
    entry pointing at a tag the document does not carry is dropped like any
    other dangling reference.
  - `slug` — the name of the theme these styles were written against. A hint,
    never the authority: `elements` alone says what the document looks like,
    and a reader that has never heard of the slug ignores it and loses nothing.

  **A root key rather than a content array**, because a theme is not an item.
  A document has one look, not a list of them, and nothing else in the document
  points at it — so it sits beside `requires` and `image`, which are the same
  kind of thing: what the document IS, rather than what it CARRIES.

  **The element key is a loose `z.string()`**, for the same reason an icon name
  is loose (see `src/icons.ts`): `block-<name>` is the word a block is written
  with — the fence of a markdown chunk, the entry of an editor's picker — and a
  producer's set of callouts is its own. An open format has no standing to
  freeze one vendor's. Nothing is rejected; what the list above buys is being
  understood.

  A theme's style is the v6 style with the two ways of saying nothing removed.
  Everywhere else a style hangs off an item that exists for other reasons, so
  `StyleV6Schema` is `nullable().optional()`; a theme entry exists for no other
  reason, and a key mapped to `null` is a key that says nothing when the absent
  key already says it better.

  No content array is added, removed or otherwise changed: every one of them is
  re-imported into `bypp.v25.schema.ts` exactly as v24 had it.

### Migrations

- `v24 → v25` — a pure version bump. **Non-lossy.** `theme` is left ABSENT
  rather than set to an empty theme, and the difference is not cosmetic: an
  empty theme is a document that has decided its content wears no style of its
  own, while no theme at all is a document that never spoke about it — which is
  what every pre-v25 document is. A reader installing one is free to keep
  painting it the way it already did. Nothing is inferred from the widget
  styles the document already carries: one of them might look like a heading,
  but guessing a theme out of them would put a decision in the document its
  author never made.
- `v25 → v24` — **lossy: the theme is dropped whole.** v24 has nowhere to put
  it, and there is no older field to fold it into either — every style v24 can
  hold hangs off a widget, and the elements a theme paints (a heading, a quote,
  an entity named mid-sentence) are not widgets and have no uid to hang
  anything on. So the slug goes, the per-element styles go, and the per-tag
  ones go with them.

  What survives is everything else. The tags themselves stay in `tags[]` —
  nothing referenced them BY the theme except the theme, and they are content
  in their own right. The HTML and markdown of the content is untouched, and so
  is every widget style. The document comes out looking exactly as it did in
  every version before v25: painted by whatever surrounds it, which is the only
  thing v24 could ever say about prose. A round trip v25 → v24 → v25 therefore
  returns a document with no theme at all — the one edge to know about before
  downgrading a themed bundle.

## Format v24 — 2026-09

### Added

- **A spacing that can differ per side, written the way CSS writes it.**
  `StyleV6` (`src/mixins/with-style.v6.schema.ts`) adds `margin` and `padding`
  in the CSS shorthand — one value for all four sides, two for vertical then
  horizontal, four clockwise from the top — and **widens** `borderWidth` from
  a single number to that same notation. `WidgetV13`
  (`src/models/widget.v13.schema.ts`) carries it on every variant.

  Until now a style spelled its margins and paddings out in four fields each,
  and its border in one `borderWidth` that draws all four edges or none. But
  what tells one block of content from another is very often WHICH edge the
  line is on: a bar down the left side reads as a quote or an aside, a thin box
  reads as a table or a panel. A producer with eight block styles to
  distinguish had exactly one of them available.

  An array rather than a tuple union, deliberately: a producer that stores its
  styles in a document database gets the tuple widened to a plain array on the
  way back out, so the format checks the length instead of insisting on a shape
  no such reader can hold.

  Nothing is removed. The per-side fields v1 and v5 introduced (`paddingTop…`,
  `marginTop…`) stay exactly as they were, because older bundles carry them.
  The precedence is stated once, in the schema: **the shorthand wins when it is
  present; the four per-side fields are read only when it is absent.** A
  document produced by the migrator below never carries both for the same box.

  `borderWidth` is widened, not redefined: every value a v5 style could hold is
  still valid and still means the same thing (a plain number is the same width
  on all four sides), so every document written before v6 parses unchanged.

  No widget variant is added, removed or otherwise changed: v13 is the v11
  union with the v6 style merged over it.

### Migrations

- `v23 → v24` — the four per-side values of a spacing are folded into the one
  field v24 writes them in, narrowed (four equal values become a single number,
  a matching pair becomes two), and the four are dropped: leaving both in would
  let a later edit change one and not the other, and the format would have two
  answers for the same question. **Non-lossy.** A group only SOME of whose
  sides are set is left exactly as it is — an unsaid side is not a zero, and
  folding `{ marginTop: 4 }` into `[4, 0, 0, 0]` would have this layer flatten
  whatever the cascade above it said about the other three. A legacy
  `borderWidth` needs no work at all: a plain number is already valid v24.
- `v24 → v23` — **faithful for spacing, lossy for a border that differs per
  side.** `margin` and `padding` are expanded back into the four per-side
  fields v23 already had, so no spacing is lost — not even a bar down one edge,
  which v23 can say in four fields even though it cannot say it in one. The
  expansion overwrites any per-side fields the document also carried, which is
  the precedence rule above.

  The border is the real loss, and this is the lossy edge to know about: v23
  has one `borderWidth` for the whole box and **no per-side field to fall back
  on**. When the four edges agree they ARE that single width, so the agreed
  value is written to `borderWidth` and the border survives whole. When they
  disagree — `[0, 0, 0, 4]`, a 4px bar down the left and three bare edges — or
  when the array cannot be read at all, the border width is **dropped**: the
  widget comes out with no border, keeping whatever `borderColor` /
  `borderStyle` / `borderRadius` it had. Folding one edge into `borderWidth`
  instead would draw that line on all four edges and turn a bar into a box. A
  border in the wrong place misreads the block more badly than a border that is
  simply absent, and absent is exactly what that widget looked like in every
  document written before v24. A round trip v24 → v23 → v24 therefore returns
  a per-side border as a widget with no border at all, while its padding,
  margin and every other style field come back untouched.

## Format v23 — 2026-09

### Added

- **A style in a flow of text.** `StyleV5`
  (`src/mixins/with-style.v5.schema.ts`) adds `marginTop` / `marginRight` /
  `marginBottom` / `marginLeft`, `backgroundColor`, `textDecoration` and
  `backgroundRepeat` on top of the v4 whitelist, and `WidgetV12` (`src/models/widget.v12.schema.ts`)
  carries it on every variant.

  Until v22 a style described a box on a sheet: padded, bordered, placed. The
  same vocabulary now has to describe an element inside prose — a heading, a
  paragraph, an entity mentioned mid-sentence — and a page-wide surface behind
  them. Four things were missing there. The air an element keeps around itself is `margin*`, in em like the
  padding beside it, because spacing in a text scales with the text. A plain
  colour behind it is `backgroundColor`, next to the `background` image v2
  already carried, since a highlighted passage is not an illustration.

  `textDecoration` matters for a reason worth stating: a theme underlines the
  mentions it renders, and nothing in the format could say "not this one".
  `none` is a value, not an absence — it is how a decoration a theme draws is
  turned off.

  `backgroundRepeat` goes with the `background` image v2 already carried. On a
  widget the image fills a box and `objectFit` settles it; on a page-wide
  surface the same image is more often a pattern, which has to tile at its own
  size rather than stretch. The two readings cannot be told apart from the
  asset, so the document says which one it means.

  No widget variant is added, removed or otherwise changed: v12 is the v11
  union with the v5 style merged over it.

### Migrations

- `v22 → v23` — a pure version bump. Non-lossy: a v22 document says nothing
  about margins, background colour, decoration or tiling, and an item that
  says nothing keeps what its surroundings give it.
- `v23 → v22` — lossy. The seven fields are dropped from every widget style;
  the rest of the style is untouched.

## Format v22 — 2026-09

### Added

- **Emphasis on a style.** `StyleV4` (`src/mixins/with-style.v4.schema.ts`)
  adds `fontWeight` and `fontStyle` on top of the v3 whitelist, and
  `WidgetV11` (`src/models/widget.v11.schema.ts`) carries it on every variant.

  A style could already say which family, which scale and which colour; it
  could not say bold or italic. So an author who wanted a bold label had to
  bake it into the text itself, where it survives no restyling, no theme, and
  no export to a reader that lays the document out differently.

  Both are free CSS strings rather than an enum, like `borderStyle` before
  them: the format describes what to render, not a menu of what an editor may
  offer. Both accept `inherit`, which is what an unemphasised item says — not
  `normal`. The difference matters under a theme: `normal` overrules the
  surroundings, `inherit` defers to them, and a level that was never
  emphasised must defer.

  No widget variant is added, removed or otherwise changed: v11 is the v10
  union with the v4 style merged over it.

### Migrations

- `v21 → v22` — a pure version bump. Non-lossy: a v21 document says nothing
  about weight or slant, and an item that says nothing keeps inheriting both.
- `v22 → v21` — lossy. `fontWeight` and `fontStyle` are dropped from every
  widget style; the rest of the style is untouched. The emphasis is not folded
  into the text instead: a widget renders a value, and wrapping that value in
  markup would change what it is.

## Format v21 — 2026-09

### Added

- **A markdown block.** `ChunkV12` (`src/models/chunk.v12.schema.ts`) gains a
  `markdown` variant holding its `content` as markdown source, next to the
  text block that holds HTML.

  The text block is what a rich-text editor produces. Markdown is the other
  way people write, and the one they keep their notes in: a table typed in
  three lines, a heading typed with a hash, a file pasted whole out of
  Obsidian or a repository. Converting it to HTML on the way in would lose
  the source, so the author could no longer edit what they wrote — the format
  carries the markdown itself and leaves the rendering to the reader.

  It is a second block rather than a flag on the text one: the two carry
  different languages, and a block that could be either would have every
  consumer guess which. A reader with no markdown renderer still has the
  words, because unrendered markdown reads.

### Migrations

- `v20 → v21` — a pure version bump. Non-lossy: nothing is converted, and a
  text block's HTML is never guessed back into markdown.
- `v21 → v20` — lossy. Each markdown block becomes a text block holding its
  source preformatted and escaped (`<pre>…</pre>`): the words survive and
  stay readable, the markup does not. Dropping the block instead would take a
  page's content away, which is worse than showing it unrendered.

## Format v20 — 2026-09

### Added

- **An entity can act on its own.** `EntityV5`
  (`src/models/entity.v5.schema.ts`) gains `actions[]`, default `[]`, on the
  base — so every entity kind carries it: a place has a trap, an ability has
  its own roll, a character has a signature move.

  Each entry (`src/models/entity-action.v1.schema.ts`) is
  `{ uid, label, visual?, hue?, type: "roll", diceFormula? }`. `label` is a
  `TranslatableText`. `visual` and `hue` are the pair a roll variable already
  uses, unchanged: an action wears the same square as a sheet's roll, and
  there is no reason for two vocabularies. `diceFormula` is HTML, like every
  other formula in this format — the attributes it reads are
  `<span data-variable="…">` tags, so a reader resolves them the same way and
  an author sees their names.

  Until v20 everything an entity could do came from a sheet, and a sheet's
  roll belongs to every entity of its dataset: a named sword with its own
  attack had nowhere to put it. An author who wrote one had it dropped on
  export, without a word, because no field could hold it.

  A reader that pulls an entity must pull the attributes its actions read,
  the way it already pulls a formula variable's deps: an action shipped
  without them lands unrollable.

  No content array other than `entities` changes shape.

### Migrations

- `v19 → v20` is a pure version bump: every entity gets an empty `actions`.
  Nothing is inferred — a roll a v19 author wrote as a sheet attribute stays
  a sheet attribute, because it belongs to every entity of that sheet and
  turning it into one entity's action would take it from the others.
- `v20 → v19` is **lossy**: every action an entity carries itself is dropped.
  They are not turned into sheet attributes on the way out, for the same
  reason: a sword's own attack would land on every sword in the document.
  The entities themselves stay, and so does everything their sheets give
  them.

## Format v19 — 2026-09

### Added

- **An entity can point at other entities.** Two new variable types
  (`src/models/variable.v9.schema.ts`), mirroring the pair a data table
  already had (`dataTableRef` / `dataTableLookup`):

  - `entityRef` stores, on the holder entity, the uids of the entities it
    points at: `entities[].data[variableUid]` is a uid array, the same
    carrier a multiple `choice` uses. The optional filter — `targetsTypes`,
    `targetsTags`, `targetTagsGroup` (`"every"` / `"some"`) — narrows the
    candidates a reader offers, with the same reading as a dataset's targets,
    except that no criteria at all opens the pool to every entity.
    `sourceVariableUid` names another `entityRef` whose **current value** is
    the pool instead: one can only equip what one owns. `max` caps how many;
    `maxVariable` names an attribute read for the cap instead, so a spell
    list can grow with a level.
  - `entityLookup` derives a value from the entities a sibling `entityRef`
    (`sourceVariableUid`) points at. `keyVariableUid` is the attribute read
    on each linked entity for calculation, `labelVariableUid` the one read
    for display; either unset falls back to the other, then to the entity's
    name. Several linked entities aggregate the way a data-table lookup
    aggregates rows: `multiAggregator` is `concat` (joined with
    `multiSeparator`), `sum`, `avg`, `min` or `max`. A linked entity that
    never filled the key attribute is an empty cell — skipped by a sum,
    `""` in a concat — not an error.

  A character owns items, knows spells, lives somewhere, belongs to a group.
  Until v19 the format had no field for that: a sheet could name a value, a
  choice, a data-table row, but never another entity of the same document,
  so an inventory had to be typed out as free text and every link the author
  had drawn between its lines and the items themselves was lost on the way
  out.

  `targetsTypes` entries are entity type names kept as loose strings, so a
  document written by a producer with more types than this reader knows
  still carries them.

- **A new widget, `entityGrid`** (`src/models/widget.v10.schema.ts`), draws
  the entities an `entityRef` points at as tiles that wrap like pips do
  (`gapX` / `gapY`, in em). Each tile shows the entity's image, its name, or
  both (`listOptionStyle`, the same reader hint the list widgets carry). The
  image is the entity's `formatSlug` rendition, sized `imageWidth` ×
  `imageHeight` in em so it scales with the widget's text, and fitted with
  `objectFit`. It takes the style, actions and credit mixins every other
  widget has.

  The list widgets need nothing new: a bullet or inline list bound to an
  `entityRef` lists the linked entities' names.

  Every earlier variable and widget variant is re-used unchanged; only the
  two unions are re-declared over the wider sets. No content array other
  than `variables` and `widgets` changes shape.

### Migrations

- `v18 → v19` is a pure version bump: nothing in a v18 document can express
  a link, so there is nothing to synthesize.
- `v19 → v18` is **lossy**: every `entityRef` and `entityLookup` variable is
  dropped, and so is every `entityGrid` widget. What referenced them goes
  with them — the values the entities stored under a dropped variable (a v18
  reader would find no attribute to read them under), a sheet's mention of a
  dropped widget, and the binding of a widget that displayed a dropped
  variable, which is unbound rather than left pointing at nothing. The
  entities themselves stay.

## Format v18 — 2026-09

### Added

- **A document can say what it needs but does not carry.** The manifest gains
  a top-level `requires[]`, default `[]`. Each entry names one item the
  content reads but does not ship — `{ category, uid, name?, from? }`:
  `category` is the content array the item would sit in (`"datasets"`,
  `"variables"`, `"dataTables"`, …) and `uid` its identifier there; `name` is
  a courtesy for the person who has to fix a missing one; `from` is a hint at
  where it can be found — `{ byppUrl, bundleName?, bundleVersion? }`: the
  address of the `.bypp` **file** that provides it, fetchable as-is, so a
  reader can satisfy the requirement with nothing but this format, plus the
  producer's own words for what it was reading. The URL's path must end in
  `.bypp` (`ByppFileUrlSchema`; a query string or fragment after the name is
  fine) — what keeps a storefront page from being mistaken for the file. No platform identifier of any
  kind, and no web page either: a file URL is the one pointer every reader can
  act on, and whoever serves the file is free to recognise the address as
  their own.

  This is what lets a bundle be written *on* another. A set of characters
  authored against a rules system reads that system's sheets, variables and
  data tables; before v18 the only way to ship them was to copy the whole
  system into every bundle that used it, and every reader that lacked the
  copy saw dangling references — a value with no variable, a lookup with no
  table — and nothing that said why. Now the document declares them, a
  reader checks presence up front, and one that knows the `from` bundle can
  offer to fetch it.

  **The contract is the uid, never the version.** Uids are stable across a
  bundle's versions, so a requirement pinned at v2 is met by v3 as long as
  the item is still there — and it is precisely what v3 removed that a
  presence check reports, by name. `from` is a hint, not a lock: the same
  uid provided by a newer version of that bundle, or by any other source,
  satisfies the requirement.

  Every field is a loose string. A requirement written by
  one platform must stay readable by another that has never heard of the
  first, and a category the reader does not know is simply one it cannot
  satisfy itself.

  Every content array is re-imported unchanged from v17: v18 adds one
  manifest field and touches no item.

### Migrations

- `v17 → v18` is a pure version bump. A v17 document never named a
  requirement, so `requires` is set to `[]` — which is exactly how every v17
  reader treated it, as self-contained. Nothing is inferred: a dangling
  reference in a v17 document may well point at something another bundle
  provides, but guessing which one would put a dependency in the document
  that its author never declared.
- `v18 → v17` is **lossy**: the list is dropped. The document still reads the
  same items — the references inside its content are untouched — it just no
  longer says so up front, and a v17 reader installing it where the required
  bundle is absent sees dangling references, as every v17 reader did before
  requirements existed.

## Format v17 — 2026-08

### Added

- **A tag and a tag category can name an icon.** `tags[].icon` and
  `tagCategories[].icon` are optional and hold a bare icon NAME — a slug, e.g.
  `"sword"` — never a URL or a file, the same convention every other icon
  field in the format has used since v1. The format ships no artwork and
  endorses no icon library: each consumer maps the slug onto whatever icon
  set it draws with.

  A tag is drawn as much as it is read. In the tools that produce bundles, a
  sword sits next to "Weapon" and a crown next to "Noble"; the format carried
  the word and dropped the picture, so a bundle that went out and came back
  arrived as a wall of undifferentiated text and its author re-picked every
  icon by hand. Categories lose more than tags do: a category is a heading,
  and a heading is half typography.

  Unlike `variables[].icon`, this one carries no grouping meaning — tags are
  already grouped, by `categoryUid`. It is a decoration on the label, and a
  reader that draws no icons ignores it.

- **A reference icon registry** — 320 slugs covering weapons, armour, spells,
  creatures, characters, places and the rest of the tabletop vocabulary.

  It ships **off the format's surface**, deliberately: not re-exported from the
  package root, not reachable from `bypp-format/v17`, and it does not move
  `BYPP_FORMAT_VERSION`.

  The slugs live in **`bypp-format/icons.json`** and nowhere else — read those
  bytes directly from any language. `bypp-format/icons` is a thin JavaScript
  convenience over the same file (`BYPP_ICON_NAMES`, `isByppIconName`,
  `ICON_SLUG_PATTERN`); it reads the JSON rather than restating it, so the two
  cannot disagree.

  There is deliberately **no literal union type** of the 320 slugs. Such a type
  would say the registry is closed, and it isn't: `"my_own_glyph"` is a
  conformant icon name, and a type rejecting it would misrepresent the format
  to the audience most likely to trust it.

  **It takes no option away from anyone.** A producer emitting
  `"my_own_glyph"` is exactly as conformant as one emitting `"sword"`; every
  icon field stays a loose `string`, in v17 exactly as in v1, and nothing
  validates against this list. The registry only ever ADDS the possibility of
  being understood.

  What it fixes is that a name nobody published is an opaque identifier, and
  putting one of those in a portable format defeats the point of naming an
  icon instead of shipping an image. A reader receiving `"spell_thunder_bold"`
  cannot tell a vocabulary word from a typo, and has nothing to draw ahead of
  time; with a published list it ships its OWN art for these slugs and knows
  it covers what producers actually send.

  It is not exclusive and not curated — think of it as the union of what
  producers actually emit. FontAwesome-style names are the common case across
  the format's older icon fields and stay valid everywhere; what a
  general-purpose icon library does not carry is the tabletop-specific half —
  a shield that reflects rather than blocks, a summoned falcon, twelve roman
  numerals, a dozen distinguishable spell glyphs. That is the gap these slugs
  fill, and a slug an implementer needs and cannot find here is one the
  registry is missing.

  **No artwork ships with the format, and no icon library is endorsed.** bypp
  distributes slugs; it does not distribute, license, or sublicense any icon
  set. Each consumer is free to match these slugs against whatever icon
  library it already draws with, or against art it self-hosts.

  Every slug matches `ICON_SLUG_PATTERN` (`^[a-z0-9]+(?:[_-][a-z0-9]+)*$`) —
  lowercase alphanumerics in `_`- or `-`-separated words — and a test enforces
  it. The pattern constrains the REGISTRY, never the fields: a producer
  spelling its own vocabulary another way is expressing itself, not making a
  mistake. What it rules out is this list shipping a slug nobody can type
  twice the same way.

  The registry is additive and unversioned: adding a slug changes no schema
  and breaks no document. Slugs are never removed or renamed — one that
  vanished would silently reinterpret every document already using it.

### Migrations

- `v16 → v17` is a pure version bump. `icon` is optional on both arrays, so a
  v16 tag is already a valid v17 one. Nothing is synthesized: a tag's name is
  not an icon name, and guessing that "Weapon" means `"sword"` would put a
  picture in the document that its author never chose, in whatever language
  the author happened to write.
- `v17 → v16` is **lossy**: the field is dropped from tags and categories and
  the labels stand on their own again. The tags themselves stay — an icon-less
  tag is perfectly expressible in v16, and dropping one would strip it from
  every `entities[].tagsUid` naming it and orphan the tags of a dropped
  category, deleting the author's classification to avoid losing a picture.

## Format v16 — 2026-08

### Added

- **A variable can name an icon.** `variables[].icon` is optional, sits on
  every variant, and holds a bare icon NAME — FontAwesome-style, e.g.
  `"shield"` — never a URL or a file. That is the convention the format has
  used since v1 for a choice option's `icon` and for a roll's `awesome`
  visual; v16 gives the variable itself the same thing.

  The motivation is that the format could describe a dataset's fields but not
  the shape of the sheet they came from. A d20 character sheet has six
  abilities, a dozen skills, saves, senses, gear slots — thirty-odd fields that
  no reader can put on one screen. The `.bypp` carried all of them and nothing
  about how they were grouped, so every reader rendered one flat list and every
  producer lost its grouping the moment it exported.

  The name does double duty: it draws next to the field AND it is the key a
  reader groups by. Every variable naming `"shield"` lands in the same section,
  headed by that icon. This is deliberately not a `category` string — an icon
  gives a section a heading nobody has to translate, where a label would be
  authored in one language and shown to readers who may not speak it.

  Grouping is a **reader convention, not a format rule**. A producer that just
  wants an icon next to a field name sets it and ignores the grouping; a reader
  with no notion of sections draws the icon and stops there. Variables that
  name no icon are simply ungrouped.

  The field is a loose `string` for the same reason `dialects[].fontFamily` is:
  an open format has no standing to freeze one vendor's icon catalog, and a
  producer whose catalog is richer than the reader's should still be able to
  say what it means. A name the reader doesn't recognise is one it doesn't
  draw.

- **`WithIconV1Schema`** — a mixin, merged into all ten variants the way
  `WithCreditV1Schema` was merged into every asset variant at v13. The base,
  the union and all ten variants fork to `variable.v8.schema` together;
  the shapes NESTED inside a variant — a choice's `options[]`, a roll's
  `visual` — are untouched and stay rooted in v1.

### Migrations

- `v15 → v16` is a pure version bump. `icon` is optional, so a v15 variable is
  already a valid v16 one. No icon is synthesized from the variable's `type`:
  that would make every v15 bundle claim a grouping its author never chose, and
  the difference between "grouped under a shield" and "not grouped" is the
  distinction v16 exists to carry.
- `v16 → v15` is **lossy**: the field is dropped and the sheet's grouping goes
  with it, leaving the flat list v15 always showed. The variables themselves
  stay — an icon-less variable is perfectly expressible in v15, and dropping
  one to save a decoration would dangle every `widgets[].variableUid` pointing
  at it and orphan the entity data keyed by its uid.

## Format v15 — 2026-08

### Changed

- **A dialect names a typeface, it no longer ships one.** `dialects[].font`
  was `{ fontFamily, fontUrl }`; it is now a single optional
  `dialects[].fontFamily`, a bare string.

  `fontUrl` was never authored by anyone. Producers synthesized it at export
  time from the family name, and readers ignored it and matched on the name —
  so it carried all of the cost and none of the benefit. The costs were real:

  - **Neutrality.** The URL pointed at the producer's own asset server, which
    meant every third-party reader of an open format fetched its typefaces
    from a single vendor.
  - **Bandwidth.** That vendor paid for the traffic of everyone else's
    readers.
  - **Redistribution.** Fantasy scripts are commonly derived from copyrighted
    alphabets. A `.bypp` sold by one publisher was serving another party's
    font file from a third party's servers — a claim the format has no
    standing to make on anyone's behalf.

  What remains is a name, not a file. Naming a typeface redistributes nothing,
  it survives the round-trip unchanged, and a reader maps it onto whatever it
  has licensed — or renders the dialect in its own font.

  `fontFamily` is **optional** and loosely typed: a dialect is "a language
  these entities speak", the typeface is decoration, and a producer with no
  opinion on it should not have to invent one.

### Migrations

- `v14 → v15` unwraps the `font` object into `fontFamily`. Non-lossy in every
  way that matters — the discarded URL was derived, not authored.
- `v15 → v14` rebuilds the URL from the family name using the pattern every
  v14 producer emitted. A dialect naming **no** family cannot be expressed in
  v14 at all and is **dropped**; inventing a typeface for it would put an
  editorial choice in the file that its author never made. Dropping dangles
  nothing: `spokenByEntitiesUids` points from the dialect to entities, and no
  other category references a dialect uid.

### Removed

- The current `DialectFontSchema` / `DialectFont` aliases from the package
  root, and `ByppDialectFont`. The versioned `DialectFontV1` / `DialectFontV2`
  stay exported for readers pinned to those versions.

## Format v14 — 2026-08

### Added

- **A bundle-level `image`** — the bundle's own cover, optional, at the top of
  the manifest. Same shape as any other image-bearing model: the pre-rendered
  URL set (`originalUrl` / `thumbnailUrl` / `squareUrl` / `closeupUrl`), the
  original's pixel `dimensions`, and a `credit`. Every field is optional in
  turn, so a producer that only renders a thumbnail emits just `thumbnailUrl`.

  This is the picture OF the bundle — the one on a shelf, in a library grid, on
  a download page — not a picture the bundle contains. Every model inside a
  bundle could already carry one; the bundle itself could not, so a reader
  listing the `.bypp` files it holds had a name and nothing else to show.

  The `credit` is there for the same reason `sheets[]` got one in v13: cover
  art is usually commissioned, the artist is rarely the bundle's author, and
  their licence may differ from the bundle's. `credit.license` overrides the
  bundle's `license` for that one file; absent, the cover inherits it.

- **`BundleImageV14Schema`** — a model rather than an inline object, so a
  reader can validate a cover on its own, and so v15 can fork it without
  touching the manifest's other fields.

### Migration

- `v13 → v14` is a pure version bump — `image` is optional, so a v13 document
  is already a valid v14 one. No cover is synthesized from the bundle's first
  entity or sheet: that would invent an editorial choice the producer never
  made and stamp it into a file that then looks authored.
- `v14 → v13` is **lossy**: the cover is dropped, credit included. There is
  nothing to fold it into — turning it into an asset or entity would add
  content the bundle never declared, and a reader would then list a phantom
  item. A downgraded bundle is simply coverless, which is all v13 could say.

## Format v13 — 2026-07

### Added

- **A per-file `credit` on every media-bearing model** — `{ name, url?,
  license? }` on `assets[]`, `entities[]`, `sceneMaps[]`, `sceneBackgrounds[]`,
  `sheets[]` and `widgets[]`. It names whoever made that one file: an
  illustrator, a composer, a cartographer. `name` is required when the block is
  present; `url` points at their page; `license` is the licence of THAT FILE
  when it differs from the bundle's.

  The motivation is honesty about mixed licences. A bundle has exactly one
  `license`, so one mixing a commissioned illustration (not reusable) with CC0
  sound effects had to collapse to its most restrictive item and declare the
  whole thing `ARR`, misdescribing the files that were in fact free. An absent
  `credit` still means "inherits the bundle's licence", so nothing changes for
  producers who don't use it. `credit.license` reuses the existing `CcLicense`
  enum — the format has one licence vocabulary, not two — and the bundle-level
  `license` / `attribution` block is untouched.

- **`WithCreditV1Schema` / `CreditV1Schema`** — a mixin of its own rather than
  a field on `with-images-urls`. Credit is not an image concern: audio and
  video carry their own URL mixins, so folding it in would have meant three
  copies free to drift. And it has the opposite lifecycle to the storage fields
  it would have sat next to — those are rewritten whenever a file is
  re-encoded, while the credit must survive that untouched.

- **Credit on every variant**, including `customVideo` scene maps and
  backgrounds, `audio-external` and `entity` assets, and all eleven widgets —
  so "which kinds can be credited?" is never a question a reader has to ask.

### Migration

- `v12 → v13` is a pure version bump — everything added is optional, so a v12
  document is already a valid v13 one. Nothing is synthesized from the
  bundle-level `attribution`: the bundle's author is not automatically the
  author of every file it contains.
- `v13 → v12` is **lossy**. `credit` is stripped everywhere, and the bundle's
  `license` is left exactly as it was — `credit.license` cannot be merged
  upward, since the only safe collapse is the most restrictive one, which would
  relicense CC0 files as `ARR`. A downgraded bundle is simply silent about who
  made each file, which is all v12 could express.

## Format v12 — 2026-07

### Added

- **`actionsVariablesUids` on every widget variant** — uids of `roll`
  variables a reader offers when the widget is activated, on top of whatever
  the widget's own `variableUid` already does. It sits on the base rather than
  on one variant because any widget can carry actions: a character's
  "Strength" number widget may well offer a "Strength check" roll alongside
  its normal editing affordance. Order is the author's and readers should
  preserve it. A uid naming a variable absent from the bundle (or one that
  isn't a `roll` variable) should be ignored rather than treated as an error.

- **The `actionRoll` widget variant** — a widget whose only job is to roll the
  `roll` variable it's bound to. Distinct from a plain widget carrying
  actions: here the roll IS the widget, so a reader renders it as a die or
  button rather than as a value with a menu hanging off it. It has no config
  of its own; formula, label, icon and colour all come from the bound
  variable.

### Migration

- `v11 → v12` is a pure version bump: everything v12 adds is optional and
  additive, so a v11 document is already a valid v12 document.
- `v12 → v11` is **lossy**. `actionRoll` widgets are dropped and their uids
  pruned from every `sheet.widgetUids`, so no dangling reference is left
  behind; `actionsVariablesUids` is stripped from every surviving widget.
  Neither loss can be folded into anything — v11 has no way to express "roll
  this variable from this widget". The bound `roll` variables themselves stay
  in `variables[]`; they are ordinary variables a v11 reader still
  understands, just no longer reachable from the sheet.

## Format v11 — 2026-07

### Added

- **`wrappedInEntityUid` on the text chunk** — names the entity a text block's
  variable references resolve against. Without it, a block resolves against
  whichever entity owns the page it sits on; with it, against the named entity.
  Readers are expected to surface which entity a wrapped block belongs to
  (Harpy frames it with that entity's avatar).

### Removed

- **The `textProxy` chunk variant.** It expressed the same idea as a SECOND
  chunk pointing at the one holding the text. The indirection carried no
  information its target didn't already have, and let the two documents drift
  apart — in particular their access lists, which producers apply to the
  pointer while readers and storage enforce the target's. A v11 document can
  never contain one: `v10 → v11` folds every proxy into its target. Readers
  pinned to v10 or earlier still need to handle the variant.

### Migrations

- `v10 → v11`: folds each `textProxy` into the text chunk it points at — the
  proxy's `entityUid` becomes the target's `wrappedInEntityUid`, the proxy
  leaves `chunks[]`, and every `pages[].chunksOrder` entry naming it now names
  the target. A page that listed both a proxy and its target keeps a single
  entry. A proxy whose target is absent from the bundle is dropped along with
  its page references — the common case, since a producer walking only its
  pages' chunk lists never included the pointed-at chunk. The v10 shape held
  no text of its own, so nothing is recoverable, and an empty block a reader
  can neither fill nor understand is worse than none. **Lossy in one
  degenerate case**: several proxies
  pointing at the same chunk with different `entityUid`s collapse to the first
  context encountered, since v11 makes that shape unrepresentable.
- `v11 → v10` (lossy): strips `wrappedInEntityUid` from every text chunk. The
  block keeps its text and its position; it loses the entity its variables
  were meant to resolve against, and a v10 reader falls back to the page owner.
  Wrapped blocks are NOT re-expanded into proxy pairs — that would mint chunk
  uids the producer never issued.

## Format v10 — 2026-07

Carries the original image's pixel `dimensions` (width/height) on every
image-bearing model, so a reader can reserve the correct aspect-ratio before
the image loads. This matters most for sheets: a sheet's background is its own
image and its widgets are positioned inside that box — without the dimensions
the reader can't size the canvas until the image arrives. Image **assets**
already carried `dimensions`; v10 extends it to sheets, entities, scene maps
and scene backgrounds. The field is optional: producers that no longer have
the dimensions omit it, and readers fall back to measuring the loaded image.

### Added
- `WithImagesUrlsV3Schema` — `WithImagesUrlsV2` plus an optional `dimensions`
  (`ImageDimensionsV1Schema`, width/height of the original)
  (`src/mixins/with-images-urls.v3.schema.ts`).
- `SheetV6Schema` — `SheetV5` merged with the v3 image mixin
  (`src/models/sheet.v6.schema.ts`).
- `EntityV3Schema` — `EntityV2` with its base upgraded to the v3 image mixin
  (base + all nine variants + union re-declared)
  (`src/models/entity.v3.schema.ts`).
- `SceneMapV3Schema` / `SceneBackgroundV3Schema` — the `customImage` variant
  merges the v3 image mixin; the `customVideo` variant is unchanged (it keeps
  its own `videoDimensions`) (`src/models/scene-map.v3.schema.ts`,
  `src/models/scene-background.v3.schema.ts`).
- `BeyondPaperV10Schema` — v10 manifest; v9 with `sheets[]` → `SheetV6`,
  `entities[]` → `EntityV3`, `sceneMaps[]` → `SceneMapV3` and
  `sceneBackgrounds[]` → `SceneBackgroundV3` (`src/schemas/bypp.v10.schema.ts`).
- `v9ToV10` (pure version bump, non-lossy) + `v10ToV9` (strips `dimensions`
  from every sheet, entity, scene map and scene background, lossy) migrations.
- Frozen per-version entry point `bypp-format/v10` (`src/v10.ts`) + the
  `./v10` package export.

### Changed
- Current `SheetSchema` / `Sheet` / `ByppSheet`, `EntitySchema` / `Entity` /
  `ByppEntity`, `SceneMapSchema` / `SceneMap` / `ByppSceneMap` and
  `SceneBackgroundSchema` / `SceneBackground` / `ByppSceneBackground` aliases
  now point at the v10 versions.
- `BYPP_FORMAT_VERSION` bumped to `10`; `BeyondPaperSchema` points to v10.

## Format v9 — 2026-07

Adds one widget variant: `wheel` — a rotary value picker. The reader lays the
possible values out as evenly-spaced square zones around a circle; a
"reading point" (one of eight edge positions) marks the active zone, and the
user rotates the wheel to change the value. v9 also gives **every** widget an
optional per-widget `rotation` (degrees) — a static visual tilt of the whole
widget.

### Added
- `WidgetWheelV7Schema` — the `wheel` variant (base + v3 style +
  `readingPosition` / `labelOrientation` loose reader-hints + `radius`), and
  `WidgetV7Schema`, the widget union extending v6 with it
  (`src/models/widget.v7.schema.ts`). The ring of values is derived by the
  reader from the **bound variable** (its `number` min..max, its `choice`
  options, or its `dataTableRef` rows) — the widget carries no value source.
- `NumberVariableV2Schema` (`number` variant + `min` / `max` / `step` value-
  domain constraints) and `VariableV7Schema`, the variable union upgrading v6's
  `number` to v2 (`src/models/variable.v7.schema.ts`). Manifest v9
  `variables[]` → `VariableV7`.
- `StyleV3Schema` / `WithStyleV3Schema` — `StyleV2` plus an optional
  `rotation` (degrees): a visual tilt that cascades like any other style
  property (`src/mixins/with-style.v3.schema.ts`). Every v7 widget variant's
  `style` is upgraded to `StyleV3`.
- `SheetV5Schema` — `SheetV4` with the `styles` cascade upgraded to `StyleV3`
  (so `rotation` cascades at the `"global"` / widget-type levels too)
  (`src/models/sheet.v5.schema.ts`).
- `BeyondPaperV9Schema` — v9 manifest; v8 with `widgets[]` → `WidgetV7`
  (StyleV3) and `sheets[]` → `SheetV5` (`src/schemas/bypp.v9.schema.ts`).
- `v8ToV9` (pure version bump, non-lossy) + `v9ToV8` (drops `wheel` widgets,
  prunes their uids from `sheet.widgetUids`, strips `rotation` from every
  widget `style` and sheet `styles` entry, and strips `min`/`max`/`step` from
  every `number` variable, lossy) migrations.

### Changed
- Current `WidgetSchema` / `Widget` aliases and `ByppWidget` now point at v7.
- `BYPP_FORMAT_VERSION` bumped to `9`; `BeyondPaperSchema` points to v9.

## Format v8 — 2026-07

Enriches sheet/widget styling. Widget `style` is upgraded v1 → v2
(`widget.v6.schema.ts`): the `border*` group and a `background` image (asset
ref + object-fit) are now preserved instead of dropped. Sheets gain a
`styles` cascade (`sheet.v4.schema.ts`) with a `"global"` target and
per-widget-type targets.

### Added
- `WidgetV6Schema` (v2 style merged into every variant) and `SheetV4Schema`
  (adds `styles`).
- `v7ToV8` (pure version bump, non-lossy) + `v8ToV7` (strips widget
  `border*` / `background` and sheet `styles`, lossy) migrations.

### Changed
- Current `WidgetSchema` / `SheetSchema` aliases point at v6 / v4.
- `BYPP_FORMAT_VERSION` bumped to `8`; `BeyondPaperSchema` points to v8.

## Format v7 — 2026-06

Reshapes random tables. A row's nested-table reference becomes a `randomTableRefs`
map keyed by the **placeholder token** used in `content` (e.g. `"$1"` or
`"$weapon"`) — a row can roll several nested tables and a reader substitutes each
result by token, with no positional `$N` convention baked into the format. A
table can also carry an optional `diceFormula` override (`XdY`); when unset,
readers derive it from the rows (`1d<sum of (range + 1)>`).

### Added
- `RandomTableV7Schema`, `RandomTableRowV7Schema` — row `randomTableUid`
  (single, optional) replaced by `randomTableRefs` (`Record<placeholder,
  RandomTableUid>`, optional); table gains an optional `diceFormula` (loose
  string, reader-hint) (`src/models/random-table.v7.schema.ts`).
- `BeyondPaperV7Schema` — v7 manifest; identical to v6 except
  `randomTables[]` uses the v7 random-table schema
  (`src/schemas/bypp.v7.schema.ts`).
- `v6ToV7` (maps `randomTableUid` → a single `"$1"` `randomTableRefs` entry,
  non-lossy) + `v7ToV6` (collapses `randomTableRefs` to its first entry and
  drops `diceFormula`, lossy) migrations.

### Changed
- Current `RandomTableSchema` / `RandomTableRowSchema` / `RandomTable` /
  `RandomTableRow` aliases and `ByppRandomTable` / `ByppRandomTableRow` now
  point at v7.
- `BYPP_FORMAT_VERSION` bumped to `7`; `BeyondPaperSchema` points to v7.

## Format v6 — 2026-06

Adds one variable variant: `dataTableDirectLookup`. It reads a column from
explicitly chosen row(s) of a data-table — the source-less sibling of
`dataTableLookup` (which gets its rows from an upstream `dataTableRef`).
The chosen `rowUids` live on the variable config; multiple rows are combined
via `multiAggregator` (`concat` / `sum` / `avg` / `min` / `max`).

### Added
- `VariableV6Schema`, `DataTableDirectLookupVariableV6Schema` — v6 variable
  union extended with the `dataTableDirectLookup` variant
  (`src/models/variable.v6.schema.ts`).
- `BeyondPaperV6Schema` — v6 manifest; identical to v5 except
  `variables[]` accepts the new variant
  (`src/schemas/bypp.v6.schema.ts`).
- `v5ToV6` (pure version bump, non-lossy) + `v6ToV5` (drops
  `dataTableDirectLookup` variables, lossy) migrations.

### Changed
- Current `VariableSchema` / `Variable` aliases and `ByppVariable` now point
  at v6. `ImageVariable` stays rooted in v5 (unchanged).
- `BYPP_FORMAT_VERSION` bumped to `6`; `BeyondPaperSchema` points to v6.

## Format v4 — 2026-05

First "tightening pass" version. No new content categories — instead, the
schema becomes more compact and producers can emit smaller bundles by
omitting empty / default values. Also strips a few producer-specific
fields that were locking the format against alternative readers.

### Added
- `WithArchiveV2Schema`, `WithPagesV2Schema`, `WithScenesV2Schema`,
  `WithImagesUrlsV2Schema`, `WithVideoUrlsV2Schema`,
  `WithAudioUrlsV2Schema` — v2 mixins with the new defaults and URL
  validation.
- `EntityV2Schema`, `ChunkV2Schema`, `TagV2Schema`, `DatasetV2Schema`,
  `DialectV2Schema`, `RandomTableV2Schema`, `SceneV2Schema`,
  `SceneMapV2Schema`, `SceneBackgroundV2Schema`, `AssetV2Schema` — v2
  models reflecting the tightening.
- `SheetV3Schema`, `DataTableV3Schema` — v3 of these two models (they
  were already at v2 for unrelated reasons).
- `KNOWN_AUDIO_EXTS`, `KNOWN_VTT_SOURCE_FORMATS`,
  `KNOWN_EXTERNAL_AUDIO_PROVIDERS` — exported `as const` tuples that
  document the conventional values for the now-open string fields.
- `ParentAttributionV4Schema` — renames `artifactName` to `bundleName`.

### Changed
- **All 16 top-level content arrays default to `[]`.** Producers may
  omit any unused category; readers always see a concrete array
  post-parse. Reduces the size of a minimal export by several hundred
  bytes.
- **Entity** `displayName` / `description` are `.optional()` instead of
  `.nullable()` — omit the field rather than emitting `null`. Same on
  `Chunk`'s `name`, `blockStyle`, `headingLevel`, `headingMode`, and
  `Sheet`'s `name`.
- **Entity** `tagsUid` and group entity `ranks` / `charactersUids`
  default to `[]`.
- **`isArchived`** (via `WithArchiveV2`) defaults to `false`.
- **`pagesOrder`** (via `WithPagesV2`), **`scenesUids`** (via
  `WithScenesV2`), **`assetUids`** on gallery chunks default to `[]`.
- **`Sheet.widgetUids`**, **`DataTable.columns` / `rows`**,
  **`RandomTable.rows`**, **`Dialect.spokenByEntitiesUids`**,
  **`Dataset.targets`** default to `[]`.
- **`RandomTableRow.range`** defaults to `1` (uniform weight).
- **`Tag.categoryUid`** is `.optional()` (was `.nullable()`).
  **`Tag.useAsFolder`** defaults to `false`.
- **`Dialect.fontUrl`**, all image / video / audio URL fields, and
  attribution URLs are now `.url()`-validated.
- **`audio-external` asset** generalized: `youtubeVideoId` →
  `{ provider, externalId }`. Carriers other than YouTube (Soundcloud,
  Vimeo, Bandcamp, …) can land without a schema bump.
- **`WithAudioUrlsV2.audioExt`** widened from `"mp3" | "ogg"` to any
  string. The conventional set lives in `KNOWN_AUDIO_EXTS`.
- **`SceneMap`** lost the `dd2vtt` discriminator variant. DD2VTT
  imports collapse into `customImage` (or `customVideo`) with the new
  orthogonal `sourceFormat?: string` annotation. Other VTT exchange
  formats (Universal VTT, Foundry VTT, …) can be tagged the same way.
- **`parentAttribution.artifactName`** → **`bundleName`**. The format
  consistently says "bundle" now; the residual "artifact" naming was a
  leak of one producer's internal vocabulary.

### Removed
- **`scene.weather`** (`"none" | "fog" | "dark"`) — too restrictive for
  a portable format; was tied to one producer's atmospheric system.
- **`scene.gameMode`** (`"2d_vtt" | "3d_vtt" | "totm"`) — same reason;
  was tied to one producer's renderer. Readers with different scene
  models couldn't honor the field.

### Migrations
- `v3-to-v4`: rename `artifactName` → `bundleName`, collapse `dd2vtt`
  scene maps into `customImage` + `sourceFormat: "dd2vtt"`, strip
  removed scene fields. Non-lossy except for `weather` / `gameMode`
  values, which are dropped.
- `v4-to-v3`: symmetric reverse. Lossy: non-`"dd2vtt"` `sourceFormat`
  values get dropped (no v3 slot for them).

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
