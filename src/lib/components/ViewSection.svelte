<script lang="ts">
  import { checklistStore, type ActiveChecklist, type ChecklistItem } from '$lib/stores/checklistStore';
  import { renderTodoText } from '$lib/utils/markdown';
  import { provideFluentDesignSystem, fluentButton, fluentCard, fluentCheckbox, fluentSelect, fluentOption } from '@fluentui/web-components';

  provideFluentDesignSystem().register(fluentButton(), fluentCard(), fluentCheckbox(), fluentSelect(), fluentOption());

  let selectedChecklist: string | null = null;
  let viewMode: 'list' | 'carousel' = 'list';
  let currentItemIndex = 0;

  $: currentChecklist = $checklistStore.activeChecklists.find(cl => cl.id === selectedChecklist);

  function nextItem() {
    if (currentChecklist) {
      currentItemIndex = (currentItemIndex + 1) % currentChecklist.items.length;
    }
  }

  function prevItem() {
    if (currentChecklist) {
      currentItemIndex = (currentItemIndex - 1 + currentChecklist.items.length) % currentChecklist.items.length;
    }
  }

  function updateItem(checklist: ActiveChecklist, item: ChecklistItem) {
    const updatedItems = checklist.items.map(i => i.id === item.id ? {...item, checked: !item.checked} : i);
    checklistStore.updateActiveChecklist(checklist.id, updatedItems);
  }
</script>

<fluent-card class="p-4">
  <h2 class="text-2xl mb-4">View Active Checklist</h2>
  {#if $checklistStore.activeChecklists.length === 0}
    <p>No active checklists available to view.</p>
  {:else}
    <fluent-select class="w-full mb-4" on:change={(e) => selectedChecklist = e.target.value}>
      <fluent-option value={null}>Select a checklist</fluent-option>
      {#each $checklistStore.activeChecklists as checklist}
        <fluent-option value={checklist.id}>{checklist.name}</fluent-option>
      {/each}
    </fluent-select>
    {#if currentChecklist}
      <div class="flex justify-center mb-4">
        <fluent-button appearance={viewMode === 'list' ? 'accent' : 'lightweight'} on:click={() => viewMode = 'list'}>List</fluent-button>
        <fluent-button appearance={viewMode === 'carousel' ? 'accent' : 'lightweight'} on:click={() => viewMode = 'carousel'}>Carousel</fluent-button>
      </div>
      {#if viewMode === 'list'}
        {#each currentChecklist.items as item}
          <div class="mb-2">
            <fluent-checkbox
              checked={item.checked}
              on:change={() => updateItem(currentChecklist, item)}
            >{@html renderTodoText(item.text)}</fluent-checkbox>
          </div>
        {/each}
      {:else}
        <div class="flex justify-between items-center">
          <fluent-button on:click={prevItem}>&lt;</fluent-button>
          {#if currentChecklist.items.length > 0}
            <fluent-checkbox
              checked={currentChecklist.items[currentItemIndex].checked}
              on:change={() => updateItem(currentChecklist, currentChecklist.items[currentItemIndex])}
            >{@html renderTodoText(currentChecklist.items[currentItemIndex].text)}</fluent-checkbox>
          {:else}
            <p>No items to display.</p>
          {/if}
          <fluent-button on:click={nextItem}>&gt;</fluent-button>
        </div>
      {/if}
    {/if}
  {/if}
</fluent-card>
