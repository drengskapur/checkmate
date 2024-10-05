<script lang="ts">
  import { checklistStore } from '$lib/stores/checklistStore';
  import { createEventDispatcher } from 'svelte';

  // Import Fluent UI components
  import { provideFluentDesignSystem, fluentButton, fluentCard } from '@fluentui/web-components';
  provideFluentDesignSystem().register(
    fluentButton(),
    fluentCard()
  );

  const dispatch = createEventDispatcher();

  function deleteTemplate(id: string) {
    checklistStore.removeTemplate(id);
    dispatch('delete');
  }

  function startChecklist(templateId: string) {
    checklistStore.startChecklist(templateId);
    dispatch('start');
  }
</script>

<fluent-card>
  <h2>Manage Checklist Templates</h2>
  {#if $checklistStore.templates.length === 0}
    <p>No checklist templates uploaded yet.</p>
  {:else}
    {#each $checklistStore.templates as template}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span>{template.name}</span>
        <div>
          <fluent-button appearance="accent" @click={() => startChecklist(template.id)}>Start</fluent-button>
          <fluent-button @click={() => deleteTemplate(template.id)}>Delete</fluent-button>
        </div>
      </div>
    {/each}
  {/if}
</fluent-card>

<fluent-card style="margin-top: 1rem;">
  <h2>Active Checklists</h2>
  {#if $checklistStore.activeChecklists.length === 0}
    <p>No active checklists.</p>
  {:else}
    {#each $checklistStore.activeChecklists as checklist}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span>{checklist.name}</span>
        <fluent-button @click={() => checklistStore.removeActiveChecklist(checklist.id)}>Remove</fluent-button>
      </div>
    {/each}
  {/if}
</fluent-card>
