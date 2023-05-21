import { useSetAtom } from "jotai";

import { penaltyAtom } from "../atoms/penalty";

const usePenalty = () => {
  const setPenalty = useSetAtom(penaltyAtom);

  const showPenalty = async (
    name: string,
    imageUrl: string,
    target: "MYSELF" | "OTHERS"
  ) =>
    new Promise((resolve) => {
      setPenalty({
        props: {
          name,
          imageUrl,
          target,
        },
        responseHandler: resolve,
      });
    });

  return { showPenalty };
};

export default usePenalty;
