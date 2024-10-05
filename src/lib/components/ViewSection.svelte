<script lang="ts">
  import { checklistStore } from "../stores/checklistStore";
  import { renderTodoText } from "../utils/markdown";
  import {
    provideFluentDesignSystem,
    fluentButton,
    fluentCard,
    fluentCheckbox,
    fluentSelect,
    fluentOption,
    fluentProgressRing
  } from "@fluentui/web-components";

  provideFluentDesignSystem().register(
    fluentButton(),
    fluentCard(),
    fluentCheckbox(),
    fluentSelect(),
    fluentOption(),
    fluentProgressRing()
  );

  let selectedChecklist: string | null = null;
  let viewMode: "list" | "carousel" = "list";
  let currentItemIndex = 0;

  $: currentChecklist = $checklistStore.activeChecklists.find((cl) => cl.id === selectedChecklist);

  $: progress = currentChecklist
    ? Math.round((currentChecklist.items.filter((item) => item.checked).length / currentChecklist.items.length) * 100)
    : 0;

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

  function updateItem(checklist, item) {
    const updatedItems = checklist.items.map((i) => (i.id === item.id ? { ...i, checked: !i.checked } : i));
    checklistStore.updateActiveChecklist(checklist.id, updatedItems);
  }

  function handleSelectChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedChecklist = target.value;
  }

  function handleKeydown(event: KeyboardEvent, action: () => void) {
    if (event.code === "Enter" || event.code === "Space") {
      event.preventDefault();
      action();
    }
  }
</script>

<fluent-card class="p-4">
  <h2 class="text-2xl mb-4">View Active Checklist</h2>
  {#if $checklistStore.activeChecklists.length === 0}
    <p>No active checklists available to view.</p>
  {:else}
    <fluent-select class="w-full mb-4" on:change={handleSelectChange}>
      <fluent-option value="">Select a checklist</fluent-option>
      {#each $checklistStore.activeChecklists as checklist}
        <fluent-option value={checklist.id}>{checklist.name}</fluent-option>
      {/each}
    </fluent-select>
    {#if currentChecklist}
      <div class="flex justify-between items-center mb-4">
        <div class="flex justify-center">
          <fluent-button
            role="button"
            tabindex="0"
            appearance={viewMode === 'list' ? 'accent' : 'lightweight'}
            on:click={() => (viewMode = 'list')}
            on:keydown={(e) => handleKeydown(e, () => (viewMode = 'list'))}
          >
            List
          </fluent-button>
          <fluent-button
            role="button"
            tabindex="0"
            appearance={viewMode === 'carousel' ? 'accent' : 'lightweight'}
            on:click={() => (viewMode = 'carousel')}
            on:keydown={(e) => handleKeydown(e, () => (viewMode = 'carousel'))}
          >
            Carousel
          </fluent-button>
        </div>
        <fluent-progress-ring
          value={progress}
          aria-label={`Checklist progress: ${progress}%`}
        ></fluent-progress-ring>
      </div>
      {#if viewMode === "list"}
        {#each currentChecklist.items as item}
          <div class="mb-2">
            <fluent-checkbox checked={item.checked} on:change={() => updateItem(currentChecklist, item)}>
              {@html renderTodoText(item.text)}
            </fluent-checkbox>
          </div>
        {/each}
      {:else}
        <div class="flex justify-between items-center">
          <fluent-button
            role="button"
            tabindex="0"
            on:click={prevItem}
            on:keydown={(e) => handleKeydown(e, prevItem)}
            aria-label="Previous item"
          >
            &lt;
          </fluent-button>
          {#if currentChecklist.items.length > 0}
            <fluent-checkbox
              checked={currentChecklist.items[currentItemIndex].checked}
              on:change={() => updateItem(currentChecklist, currentChecklist.items[currentItemIndex])}
            >
              {@html renderTodoText(currentChecklist.items[currentItemIndex].text)}
            </fluent-checkbox>
          {:else}
            <p>No items to display.</p>
          {/if}
          <fluent-button
            role="button"
            tabindex="0"
            on:click={nextItem}
            on:keydown={(e) => handleKeydown(e, nextItem)}
            aria-label="Next item"
          >
            &gt;
          </fluent-button>
        </div>
      {/if}
    {/if}
  {/if}
</fluent-card>
