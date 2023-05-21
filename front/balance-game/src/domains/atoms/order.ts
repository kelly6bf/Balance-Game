import { atom } from "jotai";

export const orderAtom = atom<"MYSELF" | "OTHERS">("MYSELF");
