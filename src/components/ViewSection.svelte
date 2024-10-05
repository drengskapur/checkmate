<script lang="ts">
  import { checklistStore } from "../stores/checklistStore";
  import type { ActiveChecklist, ChecklistItem } from "../stores/checklistStore";
  import { renderTodoText } from "../utils/markdown";
  import {
    provideFluentDesignSystem,
    fluentButton,
    fluentCard,
    fluentCheckbox,
    fluentSelect,
    fluentOption,
    fluentProgressRing,
  } from "@fluentui/web-components";

  provideFluentDesignSystem().register(
    fluentButton(),
    fluentCard(),
    fluentCheckbox(),
    fluentSelect(),
    fluentOption(),
    fluentProgressRing(),
  );

  let selectedChecklist: string | null = null;
  let viewMode: "list" | "carousel" = "list";
  let currentItemIndex = 0;

  $: currentChecklist = $checklistStore.activeChecklists.find(
    (cl: ActiveChecklist) => cl.id === selectedChecklist,
  );

  $: progress = currentChecklist
    ? Math.round(
        (currentChecklist.items.filter(
          (item: ChecklistItem) => item.checked,
        ).length /
          currentChecklist.items.length) *
          100,
      )
    : 0;

  function nextItem(): void {
    if (currentChecklist) {
      currentItemIndex =
        (currentItemIndex + 1) % currentChecklist.items.length;
    }
  }

  function prevItem(): void {
    if (currentChecklist) {
      currentItemIndex =
        (currentItemIndex - 1 + currentChecklist.items.length) %
        currentChecklist.items.length;
    }
  }

  function updateItem(
    checklist: ActiveChecklist,
    item: ChecklistItem,
  ): void {
    const updatedItems = checklist.items.map((i: ChecklistItem) =>
      i.id === item.id ? { ...i, checked: !i.checked } : i,
    );
    checklistStore.updateActiveChecklist(checklist.id, updatedItems);
  }

  function handleSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    selectedChecklist = target.value || null;
  }

  function handleKeydown(
    event: KeyboardEvent,
    action: () => void,
  ): void {
    if (event.code === "Enter" || event.code === "Space") {
      event.preventDefault();
      action();
    }
  }
</script>

