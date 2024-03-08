import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

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
    rollupOptions: {
      external: ["axios", "@vueuse/core", "@arco-design/web-vue"],
      output: {
        globals: {
          axios: "axios",
          "react-dom": "reactDOM",
          "@arco-design/web-vue": "arcoDesignWebVue",
          "@vueuse/core": "vueuseCore",
        },
      },
    },
  },
  plugins: [dts()],
});
