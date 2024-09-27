<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/themeStore';
  import { fade } from 'svelte/transition';

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

<div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
  <slot />
</div>
