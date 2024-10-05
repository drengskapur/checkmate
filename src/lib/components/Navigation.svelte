<script lang="ts">
  import { currentSection } from '$lib/stores/navigationStore';
  import { provideFluentDesignSystem, fluentButton } from '@fluentui/web-components';

  provideFluentDesignSystem().register(fluentButton());

  const sections = [
    { id: 'upload', label: 'Upload' },
    { id: 'manage', label: 'Manage' },
    { id: 'view', label: 'View' },
  ];

  function setSection(section: 'upload' | 'manage' | 'view') {
    currentSection.set(section);
  }
</script>

<nav class="flex justify-around bg-card my-4">
  {#each sections as section}
    <fluent-button
      appearance={ === section.id ? 'accent' : 'lightweight'}
      on:click={() => setSection(section.id)}
    >
      {section.label}
    </fluent-button>
  {/each}
</nav>
