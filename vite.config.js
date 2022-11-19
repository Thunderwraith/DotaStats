import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pugPlugin from "vite-plugin-pug"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pugPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/components/layouts', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/stores', import.meta.url))
    }
  }
})
