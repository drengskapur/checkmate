import { writable } from "svelte/store";

type ThemeType = "light" | "dark";

function createThemeStore() {
  const { subscribe, set, update } = writable<ThemeType>("light");

  return {
    subscribe,
    toggleTheme: () =>
      update((currentTheme: ThemeType) =>
        currentTheme === "light" ? "dark" : "light",
      ),
    setTheme: (theme: ThemeType) => set(theme),
  };
}

export const theme = createThemeStore();
