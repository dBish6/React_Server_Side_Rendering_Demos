import { mergeConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sharedConfig from "../../vite.config";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    root: "./",
    plugins: [react()],
    build: {
      outDir: "build/client",
      // lib: {
      //   entry: "src/entry-client",
      //   formats: ["cjs", "es"],
      // },
    },
  })
);
