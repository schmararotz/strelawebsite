import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        impressum: fileURLToPath(new URL('./impressum.html', import.meta.url)),
        datenschutz: fileURLToPath(new URL('./datenschutz.html', import.meta.url)),
      },
    },
  },
})
