import { atom } from "jotai";

export const modeAtom = atom<"ALONE" | "WITHFRIENDS">("ALONE");
