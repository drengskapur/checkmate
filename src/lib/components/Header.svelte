<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/themeStore";

  // Import Fluent UI Web Components
  import { provideFluentDesignSystem, fluentButton } from "@fluentui/web-components";

  provideFluentDesignSystem().register(fluentButton());

  function toggleTheme() {
    theme.update((t) => (t === "light" ? "dark" : "light"));
  }

  onMount(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", $theme);
    }
    const unsubscribe = theme.subscribe((value) => {
      document.documentElement.setAttribute("data-theme", value);
    });
    return () => {
      unsubscribe();
    };
  });
</script>

<fluent-toolbar style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
  <div style="display: flex; align-items: center;">
    <img src="/images/logo-icon.svg" alt="CheckMate Logo" style="height: 32px; margin-right: 8px;" />
    <h1 style="margin: 0;">CheckMate</h1>
  </div>
  <fluent-button appearance="stealth" @click={toggleTheme} aria-label="Toggle theme">
    {#if $theme === "light"}
      <!-- Sun icon -->
      <svg slot="start" xmlns="http://www.w3.org/2000/svg" style="height: 24px;" viewBox="0 0 24 24">
        <path
          d="M12 4V2M12 22v-2M4.93 4.93l-1.41-1.41M19.07 19.07l-1.41-1.41M2 12H4M22 12h-2M4.93 19.07l-1.41 1.41M19.07 4.93l-1.41 1.41M12 8a4 4 0 100 8 4 4 0 000-8z"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    {:else}
      <!-- Moon icon -->
      <svg slot="start" xmlns="http://www.w3.org/2000/svg" style="height: 24px;" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7.5 7.5 0 0021 12.79z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" />
      </svg>
    {/if}
  </fluent-button>
</fluent-toolbar>
