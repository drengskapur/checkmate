import { writable } from "svelte/store";

type Section = "upload" | "manage" | "view";

export const currentSection = writable<Section>("upload");
