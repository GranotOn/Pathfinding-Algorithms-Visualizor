import { writable } from "svelte/store";

export const start = writable(null);
export const end = writable(null);
export const state = writable(1);
export const mouse = writable(false);
export const board = writable([]);
