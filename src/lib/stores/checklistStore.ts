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

function createChecklistStore() {
  const { subscribe, set, update } = writable<{ activeChecklists: ActiveChecklist[] }>({
    activeChecklists: []
  });

  return {
    subscribe,
    startChecklist: (name: string, items: ChecklistItem[] = []) => update(state => {
      const newChecklist: ActiveChecklist = {
        id: uuidv4(),
        name,
        items
      };
      return { ...state, activeChecklists: [newChecklist, ...state.activeChecklists] };
    }),
    updateActiveChecklist: (id: string, items: ChecklistItem[]) => update(state => {
      const activeChecklists = state.activeChecklists.map(cl => cl.id === id ? { ...cl, items } : cl);
      return { ...state, activeChecklists };
    }),
    removeActiveChecklist: (id: string) => update(state => {
      const activeChecklists = state.activeChecklists.filter(cl => cl.id !== id);
      return { ...state, activeChecklists };
    })
  };
}

export const checklistStore = createChecklistStore();
