<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/themeStore';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme.set(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  });

  theme.subscribe(value => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', value);
      localStorage.setItem('theme', value);
    }
  });
</script>

<slot />
