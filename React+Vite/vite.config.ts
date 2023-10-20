import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  server: {
    middlewareMode: true,
  },
  ssr: {},
  plugins: [tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        // manualChunks: undefined,
        // assetFileNames: "assets/[name]-[hash].[ext]",
        // chunkFileNames: "chunks/[name]-[hash].js",
        entryFileNames: "[name].js",
      },
    },
  },
  // optimizeDeps: {
  //   include: [path.resolve(__dirname, "/app/front-end/src/entry-client.tsx")],
  // },
});
