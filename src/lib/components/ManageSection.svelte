<script lang="ts">
  import { checklistStore } from "../stores/checklistStore";
  import { provideFluentDesignSystem, fluentButton, fluentCard } from "@fluentui/web-components";

  provideFluentDesignSystem().register(fluentButton(), fluentCard());

  function deleteTemplate(id: string) {
    checklistStore.removeTemplate(id);
  }

  function startChecklist(templateId: string) {
    checklistStore.startChecklist(templateId);
  }

  function handleKeydown(e: KeyboardEvent, action: () => void) {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      action();
    }
  }
</script>

<fluent-card class="p-4">
  <h2 class="text-2xl mb-4">Manage Checklist Templates</h2>
  {#if $checklistStore.templates.length === 0}
    <p>No checklist templates uploaded yet.</p>
  {:else}
    <ul>
      {#each $checklistStore.templates as template}
        <li class="flex justify-between items-center mb-2">
          <span>{template.name}</span>
          <div>
            <fluent-button
              appearance="accent"
              on:click={() => startChecklist(template.id)}
              on:keydown={(e) => handleKeydown(e, () => startChecklist(template.id))}
            >
              Start
            </fluent-button>
            <fluent-button
              on:click={() => deleteTemplate(template.id)}
              on:keydown={(e) => handleKeydown(e, () => deleteTemplate(template.id))}
            >
              Delete
            </fluent-button>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</fluent-card>

<fluent-card class="p-4 mt-4">
  <h2 class="text-2xl mb-4">Active Checklists</h2>
  {#if $checklistStore.activeChecklists.length === 0}
    <p>No active checklists.</p>
  {:else}
    <ul>
      {#each $checklistStore.activeChecklists as checklist}
        <li class="flex justify-between items-center mb-2">
          <span>{checklist.name}</span>
          <fluent-button
            on:click={() => checklistStore.removeActiveChecklist(checklist.id)}
            on:keydown={(e) => handleKeydown(e, () => checklistStore.removeActiveChecklist(checklist.id))}
          >
            Remove
          </fluent-button>
        </li>
      {/each}
    </ul>
  {/if}
</fluent-card>
