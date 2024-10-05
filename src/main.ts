import App from '../routes/+page.svelte';
/// <reference types="svelte" />

const app = new App({
  target: document.getElementById('svelte') || document.body
});

export default app;
