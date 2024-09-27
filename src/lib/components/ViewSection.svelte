<script lang="ts">
  import { checklistStore, type ActiveChecklist, type ChecklistItem } from '$lib/stores/checklistStore';
  import { fade, fly } from 'svelte/transition';

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

<div class="card bg-base-200">
  <div class="card-body">
    <h2 class="card-title">View Active Checklist</h2>
    {#if $checklistStore.activeChecklists.length === 0}
      <p>No active checklists available to view.</p>
    {:else}
      <select class="select select-bordered w-full mb-4" bind:value={selectedChecklist}>
        <option value={null}>Select a checklist</option>
        {#each $checklistStore.activeChecklists as checklist}
          <option value={checklist.id}>{checklist.name}</option>
        {/each}
      </select>
      {#if currentChecklist}
        <div class="btn-group mb-4">
          <button class="btn" class:btn-active={viewMode === 'list'} on:click={() => viewMode = 'list'}>List</button>
          <button class="btn" class:btn-active={viewMode === 'carousel'} on:click={() => viewMode = 'carousel'}>Carousel</button>
        </div>
        {#if viewMode === 'list'}
          <ul class="menu bg-base-100 w-full rounded-box">
            {#each currentChecklist.items as item}
              <li>
                <label class="label cursor-pointer">
                  <input
                    type="checkbox"
                    class="checkbox"
                    checked={item.checked}
                    on:change={() => updateItem(currentChecklist, { ...item, checked: !item.checked })}
                  />
                  <span class="label-text">{item.text}</span>
                </label>
              </li>
            {/each}
          </ul>
        {:else}
          <div class="flex justify-between items-center">
            <button class="btn" on:click={prevItem}>&lt;</button>
            <div class="flex-1 text-center">
              {#key currentItemIndex}
                <div in:fly={{ x: 50, duration: 300 }} out:fly={{ x: -50, duration: 300 }}>
                  <label class="label cursor-pointer">
                    <input
                      type="checkbox"
                      class="checkbox mr-2"
                      checked={currentChecklist.items[currentItemIndex].checked}
                      on:change={() => updateItem(currentChecklist, { ...currentChecklist.items[currentItemIndex], checked: !currentChecklist.items[currentItemIndex].checked })}
                    />
                    <span class="label-text">{currentChecklist.items[currentItemIndex].text}</span>
                  </label>
                </div>
              {/key}
            </div>
            <button class="btn" on:click={nextItem}>&gt;</button>
          </div>
        {/if}
      {/if}
    {/if}
  </div>
</div>
