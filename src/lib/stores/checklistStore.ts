import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface ActiveChecklist {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export interface ChecklistTemplate {
  id: string;
  name: string;
  items: ChecklistItem[];
}

interface ChecklistState {
  templates: ChecklistTemplate[];
  activeChecklists: ActiveChecklist[];
}

function createChecklistStore() {
  const { subscribe, update } = writable<ChecklistState>({
    templates: [],
    activeChecklists: [],
  });

  return {
    subscribe,
    addTemplate: (name: string, items: ChecklistItem[]) =>
      update((state) => ({
        ...state,
        templates: [...state.templates, { id: uuidv4(), name, items }],
      })),

    removeTemplate: (id: string) =>
      update((state) => ({
        ...state,
        templates: state.templates.filter((t) => t.id !== id),
      })),

    startChecklist: (templateId: string) =>
      update((state) => {
        const template = state.templates.find((t) => t.id === templateId);
        if (!template) return state;

        const newChecklist: ActiveChecklist = {
          id: uuidv4(),
          name: template.name,
          items: template.items.map((item) => ({ ...item, id: uuidv4() })),
        };

        return {
          ...state,
          activeChecklists: [newChecklist, ...state.activeChecklists],
        };
      }),

    updateActiveChecklist: (id: string, items: ChecklistItem[]) =>
      update((state) => ({
        ...state,
        activeChecklists: state.activeChecklists.map((cl) =>
          cl.id === id ? { ...cl, items } : cl,
        ),
      })),

    removeActiveChecklist: (id: string) =>
      update((state) => ({
        ...state,
        activeChecklists: state.activeChecklists.filter((cl) => cl.id !== id),
      })),

    loadChecklists: (checklists: ChecklistTemplate[]) =>
      update((state) => ({ ...state, templates: checklists })),
  };
}

export const checklistStore = createChecklistStore();
