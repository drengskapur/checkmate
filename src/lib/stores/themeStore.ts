import { writable } from "svelte/store";

function createThemeStore() {
  const { subscribe, set, update } = writable("light");

  return {
    subscribe,
    toggleTheme: () =>
      update((currentTheme) => (currentTheme === "light" ? "dark" : "light")),
    setTheme: (theme: "light" | "dark") => set(theme),
  };
}

export const theme = createThemeStore();
