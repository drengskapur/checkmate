<script lang="ts">
  import { currentSection } from '$lib/stores/navigationStore';
  import { slide } from 'svelte/transition';

  const sections = [
    { id: 'upload', label: 'Upload', icon: 'upload' },
    { id: 'manage', label: 'Manage', icon: 'list' },
    { id: 'view', label: 'View', icon: 'eye' }
  ];

  function setSection(section: 'upload' | 'manage' | 'view') {
    currentSection.set(section);
  }
</script>

<nav class="flex justify-around mb-4">
  {#each sections as section}
    <button
      class="btn btn-primary"
      class:btn-active={$currentSection === section.id}
      on:click={() => setSection(section.id)}
    >
      <i class="fas fa-{section.icon} mr-2"></i>
      {#if $currentSection === section.id}
        <span transition:slide|local>
          {section.label}
        </span>
      {:else}
        <span class="sr-only">{section.label}</span>
      {/if}
    </button>
  {/each}
</nav>
