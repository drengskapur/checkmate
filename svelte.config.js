import adapter from "@sveltejs/adapter-auto";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltePreprocess(),
};
