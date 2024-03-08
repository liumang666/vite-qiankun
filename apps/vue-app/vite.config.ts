import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
