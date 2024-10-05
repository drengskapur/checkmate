// vite.config.js
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: {
        popup: "src/main.ts",       // Entry point for the popup
        background: "src/background.ts", // Entry point for the background script
      },
      output: {
        entryFileNames: "[name].js", // Output files will be named based on the entry point names
      },
    },
  },
});

