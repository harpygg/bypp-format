/**
 * Sheet schema as **introduced in bypp format v13** — v6 with an optional
 * per-file `credit` (see `with-credit.v1.schema`).
 *
 * A sheet's background is its own stored image (that is what the v6 fork was
 * about), and a character-sheet frame is very often commissioned art with its
 * own licence, distinct from the bundle's. Everything else is unchanged from
 * v6.
 *
 * This file MUST NOT be modified once shipped.
 */

import { z } from "zod";
import { WithCreditV1Schema } from "../mixins/with-credit.v1.schema";
import { SheetV6Schema } from "./sheet.v6.schema";

export const SheetV7Schema = SheetV6Schema.merge(WithCreditV1Schema);

export type SheetV7 = z.infer<typeof SheetV7Schema>;
