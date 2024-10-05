<script lang="ts">
  import { currentSection } from '../stores/navigationStore';
  import { provideFluentDesignSystem, fluentButton } from '@fluentui/web-components';

  provideFluentDesignSystem().register(fluentButton());

  const sections = [
    { id: 'upload', label: 'Upload' },
    { id: 'manage', label: 'Manage' },
    { id: 'view', label: 'View' },
  ] as const;

  type SectionId = typeof sections[number]['id'];

  function setSection(section: SectionId) {
    currentSection.set(section);
  }

  function handleKeydown(event: KeyboardEvent, section: SectionId) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSection(section);
    }
  }
</script>

<div class="flex justify-around bg-card my-4" role="tablist">
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
</div>
