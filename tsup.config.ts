import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/v9.ts", "src/v10.ts", "src/v11.ts", "src/v12.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: ["zod"],
});
