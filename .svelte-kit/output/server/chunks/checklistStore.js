import { w as writable } from "./index.js";
import { v4 } from "uuid";
function createThemeStore() {
  const { subscribe, set, update } = writable("light");
  return {
    subscribe,
    toggleTheme: () => update((currentTheme) => currentTheme === "light" ? "dark" : "light"),
    setTheme: (theme2) => set(theme2)
  };
}
const theme = createThemeStore();
function createChecklistStore() {
  const { subscribe, set, update } = writable({
    templates: [],
    activeChecklists: []
  });
  return {
    subscribe,
    addTemplate: (name, items) => update((state) => {
      const newTemplate = {
        id: v4(),
        name,
        items
      };
      return { ...state, templates: [...state.templates, newTemplate] };
    }),
    removeTemplate: (id) => update((state) => {
      const templates = state.templates.filter((t) => t.id !== id);
      return { ...state, templates };
    }),
    startChecklist: (templateId) => update((state) => {
      const template = state.templates.find((t) => t.id === templateId);
      if (template) {
        const newChecklist = {
          id: v4(),
          name: template.name,
          items: template.items.map((item) => ({ ...item, id: v4() }))
        };
        return { ...state, activeChecklists: [newChecklist, ...state.activeChecklists] };
      }
      return state;
    }),
    updateActiveChecklist: (id, items) => update((state) => {
      const activeChecklists = state.activeChecklists.map((cl) => cl.id === id ? { ...cl, items } : cl);
      return { ...state, activeChecklists };
    }),
    removeActiveChecklist: (id) => update((state) => {
      const activeChecklists = state.activeChecklists.filter((cl) => cl.id !== id);
      return { ...state, activeChecklists };
    }),
    loadChecklists: (checklists) => update((state) => {
      return { ...state, templates: checklists };
    })
  };
}
const checklistStore = createChecklistStore();
export {
  checklistStore as c,
  theme as t
};
