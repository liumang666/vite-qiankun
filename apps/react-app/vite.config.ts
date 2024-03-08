import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: "vite",
    }),
    react(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#0088FF",
          "border-color-base": "#d9d9d9",
          "error-color": "#F53F3F",
          "success-color": "#00B42A",
          "warning-color": "#faad14",
        },
        javascriptEnabled: true,
      },
    },
  },
});
