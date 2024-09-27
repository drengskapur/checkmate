<script lang="ts">
  import { theme } from '$lib/stores/themeStore';
  import { fade, fly } from 'svelte/transition';

  function toggleTheme() {
    theme.update(t => t === 'light' ? 'dark' : 'light');
  }
</script>

<header class="flex justify-between items-center mb-4">
  <div class="flex items-center">
    <img src="/images/logo-icon.svg" alt="CheckMate Logo" class="h-8 w-8 mr-2" />
    <span class="text-2xl font-bold text-primary">CheckMate</span>
  </div>
  <button on:click={toggleTheme} class="btn btn-circle btn-ghost" aria-label="Toggle theme">
    {#if $theme === 'light'}
      <div in:fly={{ y: 10, duration: 200 }} out:fade>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    {:else}
      <div in:fly={{ y: -10, duration: 200 }} out:fade>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
    {/if}
  </button>
</header>
