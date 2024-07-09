import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isDev = env.VITE_APP_ENV == "development";

  return {
    plugins: [
      qiankun("microReactApp", {
        useDevMode: isDev,
      }),
      !isDev && react(),
    ],
    server: {
      port: 8081,
    },
  };
});
