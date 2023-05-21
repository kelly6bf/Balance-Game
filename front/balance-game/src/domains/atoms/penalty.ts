import { atom } from "jotai";

type PenaltyStateType = {
  props: null | { name: string; imageUrl: string; target: "MYSELF" | "OTHERS" };
  responseHandler: (value: boolean | PromiseLike<boolean>) => void;
};

export const penaltyAtom = atom<PenaltyStateType>({
  props: null,
  responseHandler: () => null,
});

export const closePenaltyAtom = atom(null, (get, set, state: boolean) => {
  const { responseHandler } = get(penaltyAtom);
  responseHandler(state);
  set(penaltyAtom, {
    props: null,
    responseHandler: () => {},
  });
});
