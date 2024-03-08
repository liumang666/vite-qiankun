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
      external: [
        "@vueuse/core",
        "@vueuse/shared",
        "nanoid",
        "@arco-design/web-vue",
        "axios",
        "socket.io-client",
      ],
      output: {
        globals: {
          axios: "axios",
          "@arco-design/web-vue": "arcoDesignWebVue",
          "@vueuse/core": "vueuseCore",
          "@vueuse/shared": "vueuseShared",
          nanoid: "nanoid",
          "socket.io-client": "socketIoClient",
        },
      },
    },
  },
  plugins: [dts()],
});
