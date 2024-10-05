import { c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { c as checklistStore, t as theme } from "../../chunks/checklistStore.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $checklistStore, $$unsubscribe_checklistStore;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_checklistStore = subscribe(checklistStore, (value) => $checklistStore = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  {
    {
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", $theme);
        localStorage.setItem("theme", $theme);
      }
    }
  }
  {
    {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("checklists", JSON.stringify($checklistStore.templates));
      }
    }
  }
  $$unsubscribe_checklistStore();
  $$unsubscribe_theme();
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
