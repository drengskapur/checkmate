import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { crx } from 'vite-plugin-chrome-extension';

import manifest from './manifest.json';

export default defineConfig({
  plugins: [svelte(), crx({ manifest })],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.ts',
        background: 'src/background.ts',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
