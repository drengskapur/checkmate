<script lang="ts">
  import { currentSection } from '$lib/stores/navigationStore';
  import { provideFluentDesignSystem, fluentButton } from '@fluentui/web-components';

  provideFluentDesignSystem().register(fluentButton());

  const sections = [
    { id: 'upload' as const, label: 'Upload' },
    { id: 'manage' as const, label: 'Manage' },
    { id: 'view' as const, label: 'View' },
  ];

  function setSection(section: 'upload' | 'manage' | 'view') {
    currentSection.set(section);
  }

  function handleKeydown(event: KeyboardEvent, section: 'upload' | 'manage' | 'view') {
    if (event.key === 'Enter' || event.key === ' ') {
      setSection(section);
    }
  }
</script>

<nav class="flex justify-around bg-card my-4">
  {#each sections as section}
    <fluent-button
      role="tab"
      tabindex="0"
      appearance={$currentSection === section.id ? 'accent' : 'lightweight'}
      on:click={() => setSection(section.id)}
      on:keydown={(e) => handleKeydown(e, section.id)}
      aria-selected={$currentSection === section.id}
    >
      {section.label}
    </fluent-button>
  {/each}
</nav>
