import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      // the proper extensions will be added
      fileName: "index",
    },
  },
  plugins: [vue(), dts()],
});
