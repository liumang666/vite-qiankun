import { defineConfig } from 'vite'
import { resolve } from 'path'
import { arcoTheme } from '../../../common/themes'
import external from '../../../common/external'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      // the proper extensions will be added
      fileName: 'index',
    },
    rollupOptions: {
      external: external.external,
      output: {
        globals: external.globals,
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: arcoTheme,
        javascriptEnabled: true,
      },
    },
  },
  plugins: [vue(), dts()],
})
