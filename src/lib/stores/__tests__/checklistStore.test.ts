import { get } from 'svelte/store';
import { checklistStore } from '../checklistStore';

describe('checklistStore', () => {
  beforeEach(() => {
    checklistStore.clearAll();
  });

  it('should add a template', () => {
    checklistStore.addTemplate('Test Template', ['Item 1', 'Item 2']);
    const store = get(checklistStore);
    expect(store.templates.length).toBe(1);
    expect(store.templates[0].name).toBe('Test Template');
    expect(store.templates[0].items.length).toBe(2);
  });

  it('should remove a template', () => {
    checklistStore.addTemplate('Test Template', ['Item 1', 'Item 2']);
    let store = get(checklistStore);
    const templateId = store.templates[0].id;

    checklistStore.removeTemplate(templateId);
    store = get(checklistStore);
    expect(store.templates.length).toBe(0);
  });

  it('should start a checklist', () => {
    checklistStore.addTemplate('Test Template', ['Item 1', 'Item 2']);
    let store = get(checklistStore);
    const templateId = store.templates[0].id;

    checklistStore.startChecklist(templateId);
    store = get(checklistStore);
    expect(store.activeChecklists.length).toBe(1);
    expect(store.activeChecklists[0].name).toBe('Test Template');
    expect(store.activeChecklists[0].items.length).toBe(2);
  });
});
