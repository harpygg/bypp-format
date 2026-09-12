import { readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, test } from "vitest";
import * as v10 from "./v10";
import * as v11 from "./v11";
import * as v12 from "./v12";
import * as v13 from "./v13";
import * as v14 from "./v14";
import * as v15 from "./v15";
import * as v16 from "./v16";
import * as v17 from "./v17";
import * as v18 from "./v18";
import * as v19 from "./v19";
import * as v20 from "./v20";
import * as v21 from "./v21";
import * as v9 from "./v9";

/**
 * A frozen entry announces the version it is: a consumer pinned to
 * `bypp-format/vN` stamps that number on the documents it writes, and the
 * schema of the same entry accepts nothing else. An entry copied from its
 * predecessor and left unedited writes documents its own schema rejects.
 *
 * Adding `vN.ts` without adding it here fails the last test below.
 */
const ENTRIES: Record<number, { BYPP_FORMAT_VERSION: number }> = {
  9: v9,
  10: v10,
  11: v11,
  12: v12,
  13: v13,
  14: v14,
  15: v15,
  16: v16,
  17: v17,
  18: v18,
  19: v19,
  20: v20,
  21: v21,
};

const SRC = dirname(fileURLToPath(import.meta.url));

const shippedEntries = () =>
  readdirSync(SRC)
    .map((file) => /^v(\d+)\.ts$/.exec(file))
    .filter((match) => match !== null)
    .map((match) => Number(match[1]))
    .sort((a, b) => a - b);

describe("frozen entries", () => {
  test.each(Object.entries(ENTRIES))(
    "v%s announces its own version",
    (version, entry) => {
      expect(entry.BYPP_FORMAT_VERSION).toBe(Number(version));
    },
  );

  it("covers every entry the package ships", () => {
    expect(Object.keys(ENTRIES).map(Number).sort((a, b) => a - b)).toEqual(
      shippedEntries(),
    );
  });
});
