import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

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

function createChecklistStore() {
  const { subscribe, set, update } = writable<{
    templates: ChecklistTemplate[];
    activeChecklists: ActiveChecklist[];
  }>({
    templates: [],
    activeChecklists: []
  });

  return {
    subscribe,
    addTemplate: (name: string, items: ChecklistItem[]) => update(state => {
      const newTemplate: ChecklistTemplate = {
        id: uuidv4(),
        name,
        items
      };
      return { ...state, templates: [...state.templates, newTemplate] };
    }),
    removeTemplate: (id: string) => update(state => {
      const templates = state.templates.filter(t => t.id !== id);
      return { ...state, templates };
    }),
    startChecklist: (templateId: string) => update(state => {
      const template = state.templates.find(t => t.id === templateId);
      if (template) {
        const newChecklist: ActiveChecklist = {
          id: uuidv4(),
          name: template.name,
          items: template.items.map(item => ({ ...item, id: uuidv4() }))
        };
        return { ...state, activeChecklists: [newChecklist, ...state.activeChecklists] };
      }
      return state;
    }),
    updateActiveChecklist: (id: string, items: ChecklistItem[]) => update(state => {
      const activeChecklists = state.activeChecklists.map(cl => cl.id === id ? { ...cl, items } : cl);
      return { ...state, activeChecklists };
    }),
    removeActiveChecklist: (id: string) => update(state => {
      const activeChecklists = state.activeChecklists.filter(cl => cl.id !== id);
      return { ...state, activeChecklists };
    }),
    loadChecklists: (checklists: ChecklistTemplate[]) => update(state => {
      return { ...state, templates: checklists };
    })
  };
}

export const checklistStore = createChecklistStore();
