import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/static/*',
          dest: 'static'
        }
      ]
    })
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {}
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  optimizeDeps: {
    include: ['@fluentui/web-components']
  },
  server: {
    fs: {
      strict: false
    }
  }
})
