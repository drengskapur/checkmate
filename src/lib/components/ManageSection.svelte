<script lang="ts">
  import { checklistStore } from '$lib/stores/checklistStore';
  import { createEventDispatcher } from 'svelte';

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

<div class="card bg-base-200">
  <div class="card-body">
    <h2 class="card-title">Manage Checklist Templates</h2>
    {#if $checklistStore.templates.length === 0}
      <p>No checklist templates uploaded yet.</p>
    {:else}
      <ul class="menu bg-base-100 w-full rounded-box">
        {#each $checklistStore.templates as template}
          <li>
            <div class="flex justify-between items-center w-full">
              <span>{template.name}</span>
              <div>
                <button
                  class="btn btn-primary btn-xs mr-2"
                  on:click={() => startChecklist(template.id)}
                  aria-label={`Start ${template.name}`}
                >
                  Start
                </button>
                <button
                  class="btn btn-ghost btn-xs"
                  on:click={() => deleteTemplate(template.id)}
                  aria-label={`Delete ${template.name}`}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<div class="card bg-base-200 mt-4">
  <div class="card-body">
    <h2 class="card-title">Active Checklists</h2>
    {#if $checklistStore.activeChecklists.length === 0}
      <p>No active checklists.</p>
    {:else}
      <ul class="menu bg-base-100 w-full rounded-box">
        {#each $checklistStore.activeChecklists as checklist}
          <li>
            <div class="flex justify-between items-center w-full">
              <span>{checklist.name}</span>
              <button
                class="btn btn-ghost btn-xs"
                on:click={() => checklistStore.removeActiveChecklist(checklist.id)}
                aria-label={`Remove ${checklist.name}`}
              >
                Remove
              </button>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
