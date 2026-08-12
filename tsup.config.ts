import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/v9.ts", "src/v10.ts", "src/v11.ts", "src/v12.ts", "src/v13.ts", "src/v14.ts", "src/v15.ts", "src/v16.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  external: ["zod"],
});
