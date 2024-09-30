import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    // Options for the static adapter
    // See https://github.com/sveltejs/kit/tree/master/packages/adapter-static#options
    files: {
      assets: 'static',
      lib: 'src/lib',
      routes: 'src/routes',
      template: 'src/app.html'
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/checkmate' : ''
    },
    // Prerendering options
    // See https://kit.svelte.dev/docs/page-options#prerender
    prerender: {
      default: true
    }
  }
};

export default config;