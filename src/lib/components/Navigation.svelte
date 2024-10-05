<script lang="ts">
  import { currentSection } from '$lib/stores/navigationStore';

  // Import Fluent UI components
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

<div style="display: flex; justify-content: space-around; margin-bottom: 1rem;">
  {#each sections as section}
    <fluent-button
      appearance={$currentSection === section.id ? 'accent' : 'lightweight'}
      @click={() => setSection(section.id)}
    >
      {section.label}
    </fluent-button>
  {/each}
</div>
