<script lang="ts">
  import { checklistStore } from '$lib/stores/checklistStore';
  import { provideFluentDesignSystem, fluentButton, fluentCard } from '@fluentui/web-components';

  provideFluentDesignSystem().register(fluentButton(), fluentCard());

  function deleteTemplate(id: string) {
    checklistStore.removeTemplate(id);
  }

  function startChecklist(templateId: string) {
    checklistStore.startChecklist(templateId);
  }

  function handleKeydown(event: KeyboardEvent, action: () => void) {
    if (event.key === 'Enter' || event.key === ' ') {
      action();
    }
  }
</script>

<fluent-card class="p-4">
  <h2 class="text-2xl mb-4">Manage Checklist Templates</h2>
  {#if $checklistStore.templates.length === 0}
    <p>No checklist templates uploaded yet.</p>
  {:else}
    {#each $checklistStore.templates as template}
      <div class="flex justify-between items-center mb-2">
        <span>{template.name}</span>
        <div>
          <fluent-button
            role="button"
            tabindex="0"
            appearance="accent"
            on:click={() => startChecklist(template.id)}
            on:keydown={(e) => handleKeydown(e, () => startChecklist(template.id))}
          >
            Start
          </fluent-button>
          <fluent-button
            role="button"
            tabindex="0"
            on:click={() => deleteTemplate(template.id)}
            on:keydown={(e) => handleKeydown(e, () => deleteTemplate(template.id))}
          >
            Delete
          </fluent-button>
        </div>
      </div>
    {/each}
  {/if}
</fluent-card>

<fluent-card class="p-4 mt-4">
  <h2 class="text-2xl mb-4">Active Checklists</h2>
  {#if $checklistStore.activeChecklists.length === 0}
    <p>No active checklists.</p>
  {:else}
    {#each $checklistStore.activeChecklists as checklist}
    <fluent-button
    role="button"
    tabindex="0"
    on:click={() => checklistStore.removeActiveChecklist(checklist.id)}
    on:keydown={(e) => handleKeydown(e, () => checklistStore.removeActiveChecklist(checklist.id))}
  >
    Remove
  </fluent-button>
    {/each}
  {/if}
</fluent-card>
