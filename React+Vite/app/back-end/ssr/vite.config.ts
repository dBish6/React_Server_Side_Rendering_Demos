import { mergeConfig, defineConfig } from "vite";
// import sharedConfig from "@base/vite.config";
import sharedConfig from "../../../vite.config";
// import sharedConfig from "../../front-end/vite.config";
import { VitePluginNode } from "vite-plugin-node";
import path from "path";

export default mergeConfig(
  sharedConfig,
  defineConfig({
    root: "../../front-end",
    // root: "./",
    // publicDir: "../../front-end/public",
    plugins: [
      ...VitePluginNode({
        // Nodejs native Request adapter
        // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
        // you can also pass a function if you are using other frameworks, see Custom Adapter section
        adapter: "express",

        // tell the plugin where is your project entry
        appPath: path.resolve(__dirname, "../../front-end/src/App.tsx"),

        // Optional, default: 'viteNodeApp'
        // the name of named export of you app from the appPath file
        exportName: "viteNodeApp",

        // Optional, default: 'esbuild'
        // The TypeScript compiler you want to use
        // by default this plugin is using vite default ts compiler which is esbuild
        // 'swc' compiler is supported to use as well for frameworks
        // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
        // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
        tsCompiler: "esbuild",

        // Optional, default: {
        // jsc: {
        //   target: 'es2019',
        //   parser: {
        //     syntax: 'typescript',
        //     decorators: true
        //   },
        //  transform: {
        //     legacyDecorator: true,
        //     decoratorMetadata: true
        //   }
        // }
        // }
        // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
        swcOptions: {},
      }),
    ],
    build: {
      outDir: "../back-end/ssr/build",
      // outDir: "build",
      // lib: {
      //   entry: "../back-end/ssr/src/server",
      //   // entry: "/src/server.ts",
      //   formats: ["cjs", "es"],
      // },
      rollupOptions: {
        input: "src/server.ts",
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
    },
  })
);
