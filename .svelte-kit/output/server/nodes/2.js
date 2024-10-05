

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BnEWnK9t.js","_app/immutable/chunks/scheduler.CLOVJmCQ.js","_app/immutable/chunks/index.BewsEQmK.js","_app/immutable/chunks/checklistStore.tkQ-hNKO.js","_app/immutable/chunks/index.D1cIUrcn.js"];
export const stylesheets = ["_app/immutable/assets/2.BfCJaGU5.css"];
export const fonts = [];
