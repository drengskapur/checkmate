import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface ChecklistTemplate {
  id: string;
  name: string;
  items: ChecklistItem[];
}

export interface ActiveChecklist {
  id: string;
  templateId: string;
  name: string;
  items: ChecklistItem[];
}

function createChecklistStore() {
  const { subscribe, set, update } = writable<{
    templates: ChecklistTemplate[];
    activeChecklists: ActiveChecklist[];
  }>({
    templates: [],
    activeChecklists: [],
  });

  return {
    subscribe,
    addTemplate: (name: string, items: string[]) =>
      update(store => {
        const newTemplate: ChecklistTemplate = {
          id: uuidv4(),
          name,
          items: items.map(text => ({ id: uuidv4(), text, checked: false })),
        };
        return {
          ...store,
          templates: [...store.templates, newTemplate],
        };
      }),
    removeTemplate: (id: string) =>
      update(store => ({
        ...store,
        templates: store.templates.filter(t => t.id !== id),
      })),
    startChecklist: (templateId: string) =>
      update(store => {
        const template = store.templates.find(t => t.id === templateId);
        if (!template) return store;
        const newActiveChecklist: ActiveChecklist = {
          id: uuidv4(),
          templateId,
          name: template.name,
          items: template.items.map(item => ({ ...item, checked: false })),
        };
        return {
          ...store,
          activeChecklists: [...store.activeChecklists, newActiveChecklist],
        };
      }),
    updateActiveChecklist: (id: string, items: ChecklistItem[]) =>
      update(store => ({
        ...store,
        activeChecklists: store.activeChecklists.map(cl =>
          cl.id === id ? { ...cl, items } : cl
        ),
      })),
    removeActiveChecklist: (id: string) =>
      update(store => ({
        ...store,
        activeChecklists: store.activeChecklists.filter(cl => cl.id !== id),
      })),
    clearAll: () => set({ templates: [], activeChecklists: [] }),
  };
}

export const checklistStore = createChecklistStore();
