import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    target: "es2016",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        popup: "src/main.ts",
        background: "src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
        format: "es",
      },
    },
  },
  publicDir: "public",
});
