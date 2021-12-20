import { writable } from "svelte/store";

/** @type {import("svelte/store").Writable<{page: Page; scroll: boolean}>} */
export const selectedPage = writable({ page:"home", scroll: false })
