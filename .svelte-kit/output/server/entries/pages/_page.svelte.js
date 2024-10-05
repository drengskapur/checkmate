import { c as create_ssr_component, a as subscribe, b as each, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { t as theme, c as checklistStore } from "../../chunks/checklistStore.js";
import { provideFluentDesignSystem, fluentButton, fluentCard, fluentCheckbox, fluentSelect, fluentOption } from "@fluentui/web-components";
import { w as writable } from "../../chunks/index.js";
import "marked";
import "dompurify";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  provideFluentDesignSystem().register(fluentButton());
  $$unsubscribe_theme();
  return `<header class="flex justify-between items-center p-4 bg-card"><div class="flex items-center" data-svelte-h="svelte-hnrvie"><img src="/images/logo-icon.svg" alt="CheckMate Logo" class="h-8 mr-2"> <h1 class="text-xl font-bold">CheckMate</h1></div> <fluent-button appearance="stealth" role="button" aria-label="Toggle theme" tabindex="0">${$theme === "light" ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`}</fluent-button></header>`;
});
const currentSection = writable("upload");
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSection, $$unsubscribe_currentSection;
  $$unsubscribe_currentSection = subscribe(currentSection, (value) => $currentSection = value);
  provideFluentDesignSystem().register(fluentButton());
  const sections = [
    { id: "upload", label: "Upload" },
    { id: "manage", label: "Manage" },
    { id: "view", label: "View" }
  ];
  $$unsubscribe_currentSection();
  return `<nav class="flex justify-around bg-card my-4">${each(sections, (section) => {
    return `<fluent-button${add_attribute(
      "appearance",
      $currentSection === section.id ? "accent" : "lightweight",
      0
    )} role="tab" tabindex="0"${add_attribute("aria-selected", $currentSection === section.id, 0)}>${escape(section.label)} </fluent-button>`;
  })}</nav>`;
});
function renderTodoText(text) {
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
  return text;
}
const css = {
  code: ".dragover.svelte-sh89vg{border-width:2px;border-style:dashed;border-color:var(--primary-color)}",
  map: '{"version":3,"file":"UploadSection.svelte","sources":["UploadSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { checklistStore } from \\"$lib/stores/checklistStore\\";\\nimport { parseMarkdown } from \\"$lib/utils/markdown\\";\\nimport { provideFluentDesignSystem, fluentButton, fluentCard } from \\"@fluentui/web-components\\";\\nprovideFluentDesignSystem().register(fluentButton(), fluentCard());\\nlet files = null;\\nlet dragOver = false;\\nlet uploadSuccess = false;\\nasync function handleFileUpload(uploadedFiles) {\\n  for (let file of Array.from(uploadedFiles)) {\\n    if (file.type !== \\"text/markdown\\" && !file.name.endsWith(\\".md\\")) {\\n      console.warn(`${file.name} is not a Markdown file.`);\\n      continue;\\n    }\\n    const text = await file.text();\\n    const items = parseMarkdown(text);\\n    checklistStore.addTemplate(file.name, items);\\n  }\\n  files = null;\\n  uploadSuccess = true;\\n  setTimeout(() => uploadSuccess = false, 3e3);\\n}\\nfunction handleDrop(event) {\\n  event.preventDefault();\\n  dragOver = false;\\n  if (event.dataTransfer?.files) {\\n    handleFileUpload(event.dataTransfer.files);\\n  }\\n}\\n<\/script>\\n\\n<fluent-card\\n  class=\\"p-8 text-center\\"\\n  class:dragover={dragOver}\\n  on:dragenter={() => dragOver = true}\\n  on:dragleave={() => dragOver = false}\\n  on:dragover|preventDefault\\n  on:drop|preventDefault={handleDrop}\\n  role=\\"region\\"\\n  aria-label=\\"Upload area\\"\\n>\\n  <h2 class=\\"text-2xl mb-4\\">Upload Checklist Templates</h2>\\n  <p class=\\"mb-4\\">Drag & drop Markdown files here or</p>\\n  <input\\n    type=\\"file\\"\\n    id=\\"file-input\\"\\n    accept=\\".md,text/markdown\\"\\n    multiple\\n    bind:files\\n    on:change={() => files && handleFileUpload(files)}\\n    class=\\"hidden\\"\\n  />\\n  <label for=\\"file-input\\">\\n    <fluent-button role=\\"button\\" appearance=\\"accent\\">Choose Files</fluent-button>\\n  </label>\\n  {#if uploadSuccess}\\n    <p class=\\"text-green-500 mt-4\\">Upload successful!</p>\\n  {/if}\\n</fluent-card>\\n\\n<style>\\n  .dragover {\\n    border-width: 2px;\\n    border-style: dashed;\\n    border-color: var(--primary-color);\\n  }\\n</style>\\n"],"names":[],"mappings":"AA4DE,uBAAU,CACR,YAAY,CAAE,GAAG,CACjB,YAAY,CAAE,MAAM,CACpB,YAAY,CAAE,IAAI,eAAe,CACnC"}'
};
const UploadSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  provideFluentDesignSystem().register(fluentButton(), fluentCard());
  $$result.css.add(css);
  return `<fluent-card class="${["p-8 text-center svelte-sh89vg", ""].join(" ").trim()}" role="region" aria-label="Upload area"><h2 class="text-2xl mb-4" data-svelte-h="svelte-1uqyzv1">Upload Checklist Templates</h2> <p class="mb-4" data-svelte-h="svelte-1ehjm3h">Drag &amp; drop Markdown files here or</p> <input type="file" id="file-input" accept=".md,text/markdown" multiple class="hidden"> <label for="file-input" data-svelte-h="svelte-1872bw6"><fluent-button role="button" appearance="accent">Choose Files</fluent-button></label> ${``} </fluent-card>`;
});
const ManageSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $checklistStore, $$unsubscribe_checklistStore;
  $$unsubscribe_checklistStore = subscribe(checklistStore, (value) => $checklistStore = value);
  provideFluentDesignSystem().register(fluentButton(), fluentCard());
  $$unsubscribe_checklistStore();
  return `<fluent-card class="p-4"><h2 class="text-2xl mb-4" data-svelte-h="svelte-5jjgpf">Manage Checklist Templates</h2> ${$checklistStore.templates.length === 0 ? `<p data-svelte-h="svelte-142ins">No checklist templates uploaded yet.</p>` : `${each($checklistStore.templates, (template) => {
    return `<div class="flex justify-between items-center mb-2"><span>${escape(template.name)}</span> <div><fluent-button appearance="accent" role="button" tabindex="0" data-svelte-h="svelte-lwvpcr">Start</fluent-button> <fluent-button role="button" tabindex="0" data-svelte-h="svelte-123sf1f">Delete
          </fluent-button></div> </div>`;
  })}`}</fluent-card> <fluent-card class="p-4 mt-4"><h2 class="text-2xl mb-4" data-svelte-h="svelte-1fs4ijy">Active Checklists</h2> ${$checklistStore.activeChecklists.length === 0 ? `<p data-svelte-h="svelte-g0y8wi">No active checklists.</p>` : `${each($checklistStore.activeChecklists, (checklist) => {
    return `<div class="flex justify-between items-center mb-2"><span>${escape(checklist.name)}</span> <fluent-button role="button" tabindex="0" data-svelte-h="svelte-w2l8mw">Remove</fluent-button> </div>`;
  })}`}</fluent-card>`;
});
const ViewSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentChecklist;
  let $checklistStore, $$unsubscribe_checklistStore;
  $$unsubscribe_checklistStore = subscribe(checklistStore, (value) => $checklistStore = value);
  provideFluentDesignSystem().register(fluentButton(), fluentCard(), fluentCheckbox(), fluentSelect(), fluentOption());
  let selectedChecklist = null;
  currentChecklist = $checklistStore.activeChecklists.find((cl) => cl.id === selectedChecklist);
  $$unsubscribe_checklistStore();
  return `<fluent-card class="p-4"><h2 class="text-2xl mb-4" data-svelte-h="svelte-4zsz8s">View Active Checklist</h2> ${$checklistStore.activeChecklists.length === 0 ? `<p data-svelte-h="svelte-mxuiyl">No active checklists available to view.</p>` : `<fluent-select class="w-full mb-4"><fluent-option value="" data-svelte-h="svelte-14qn58b">Select a checklist</fluent-option> ${each($checklistStore.activeChecklists, (checklist) => {
    return `<fluent-option${add_attribute("value", checklist.id, 0)}>${escape(checklist.name)}</fluent-option>`;
  })}</fluent-select> ${currentChecklist ? `<div class="flex justify-center mb-4"><fluent-button${add_attribute("appearance", "accent", 0)} tabindex="0">List</fluent-button> <fluent-button${add_attribute("appearance", "lightweight", 0)} role="button" tabindex="0">Carousel</fluent-button></div> ${`${each(currentChecklist.items, (item) => {
    return `<div class="mb-2"><fluent-checkbox ${item.checked ? "checked" : ""}><!-- HTML_TAG_START -->${renderTodoText(item.text)}<!-- HTML_TAG_END --></fluent-checkbox> </div>`;
  })}`}` : ``}`}</fluent-card>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentSection, $$unsubscribe_currentSection;
  $$unsubscribe_currentSection = subscribe(currentSection, (value) => $currentSection = value);
  $$unsubscribe_currentSection();
  return `<div class="container mx-auto px-4 py-8">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} ${$currentSection === "upload" ? `${validate_component(UploadSection, "UploadSection").$$render($$result, {}, {}, {})}` : `${$currentSection === "manage" ? `${validate_component(ManageSection, "ManageSection").$$render($$result, {}, {}, {})}` : `${$currentSection === "view" ? `${validate_component(ViewSection, "ViewSection").$$render($$result, {}, {}, {})}` : ``}`}`}</div>`;
});
export {
  Page as default
};
