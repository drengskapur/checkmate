<script lang="ts">
  import { theme } from '@stores/themeStore';
  import { provideFluentDesignSystem, fluentButton } from '@fluentui/web-components';

  provideFluentDesignSystem().register(fluentButton());

  function toggleTheme() {
    theme.toggleTheme();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleTheme();
    }
  }
</script>

<header class="flex justify-between items-center p-4 bg-card">
  <div class="flex items-center">
    <img src="@assets/images/logo-icon.svg" alt="CheckMate Logo" class="h-8 mr-2" />
    <h1 class="text-xl font-bold">CheckMate</h1>
  </div>
  <fluent-button
    role="button"
    appearance="stealth"
    tabindex="0"
    on:click={toggleTheme}
    on:keydown={handleKeydown}
    aria-label="Toggle theme"
  >
    {#if $theme === 'light'}
      <!-- Light mode icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0
          16v1m9-9h-1M4 12H3m15.364
          6.364l-.707-.707M6.343
          6.343l-.707-.707m12.728
          0l-.707.707M6.343
          17.657l-.707.707M16
          12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    {:else}
      <!-- Dark mode icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354
          15.354A9 9 0 018.646
          3.646 9.003 9.003 0 0012
          21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    {/if}
  </fluent-button>
</header>
