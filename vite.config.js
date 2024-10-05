import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: 'src/main.ts',
        background: 'src/background.ts'
      },
      output: {
        entryFileNames: '[name].js'
      }
    }
  },
  publicDir: 'public'
})
