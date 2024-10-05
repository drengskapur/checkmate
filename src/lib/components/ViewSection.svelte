<script lang="ts">
  import { checklistStore, type ActiveChecklist, type ChecklistItem } from '$lib/stores/checklistStore';

  // Import Fluent UI components
  import { provideFluentDesignSystem, fluentButton, fluentCard, fluentCheckbox, fluentSelect, fluentOption } from '@fluentui/web-components';
  provideFluentDesignSystem().register(
    fluentButton(),
    fluentCard(),
    fluentCheckbox(),
    fluentSelect(),
    fluentOption()
  );

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
    const updatedItems = checklist.items.map(i => i.id === item.id ? item : i);
    checklistStore.updateActiveChecklist(checklist.id, updatedItems);
  }
</script>

<fluent-card>
  <h2>View Active Checklist</h2>
  {#if $checklistStore.activeChecklists.length === 0}
    <p>No active checklists available to view.</p>
  {:else}
    <fluent-select style="width: 100%; margin-bottom: 1rem;" @change={(e) => selectedChecklist = e.target.value}>
      <fluent-option value={null}>Select a checklist</fluent-option>
      {#each $checklistStore.activeChecklists as checklist}
        <fluent-option value={checklist.id}>{checklist.name}</fluent-option>
      {/each}
    </fluent-select>
    {#if currentChecklist}
      <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
        <fluent-button appearance={viewMode === 'list' ? 'accent' : 'lightweight'} @click={() => viewMode = 'list'}>List</fluent-button>
        <fluent-button appearance={viewMode === 'carousel' ? 'accent' : 'lightweight'} @click={() => viewMode = 'carousel'}>Carousel</fluent-button>
      </div>
      {#if viewMode === 'list'}
        {#each currentChecklist.items as item}
          <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
            <fluent-checkbox
              checked={item.checked}
              @change={() => updateItem(currentChecklist, { ...item, checked: !item.checked })}
            >{item.text}</fluent-checkbox>
          </div>
        {/each}
      {:else}
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <fluent-button @click={prevItem}>&lt;</fluent-button>
          {#if currentChecklist.items.length > 0}
            <fluent-checkbox
              checked={currentChecklist.items[currentItemIndex].checked}
              @change={() => updateItem(currentChecklist, { ...currentChecklist.items[currentItemIndex], checked: !currentChecklist.items[currentItemIndex].checked })}
            >{currentChecklist.items[currentItemIndex].text}</fluent-checkbox>
          {:else}
            <p>No items to display.</p>
          {/if}
          <fluent-button @click={nextItem}>&gt;</fluent-button>
        </div>
      {/if}
    {/if}
  {/if}
</fluent-card>
