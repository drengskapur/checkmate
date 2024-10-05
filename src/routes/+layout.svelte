<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/themeStore';
  import { checklistStore } from '$lib/stores/checklistStore';
  import '../app.css';

  onMount(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    theme.setTheme(savedTheme as 'light' | 'dark');

    // Load checklists from storage
    const storedChecklists = localStorage.getItem('checklists');
    if (storedChecklists) {
      checklistStore.loadChecklists(JSON.parse(storedChecklists));
    }
  });

  $: {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', $theme);
      localStorage.setItem('theme', $theme);
    }
  }

  // Save checklists to storage whenever they change
  $: {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('checklists', JSON.stringify($checklistStore.templates));
    }
  }
</script>

<slot />
