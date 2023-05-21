import tw from "twin.macro";
import { AnimatePresence, motion } from "framer-motion";

import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { closePenaltyAtom, penaltyAtom } from "../atoms/penalty";
import Button from "@/components/button/Button";
import Image from "next/image";

const GamePenalty = () => {
  const { props } = useAtomValue(penaltyAtom);
  const close = useSetAtom(closePenaltyAtom);

  const handle확인 = () => {
    close(true);
  };

  return (
    <AnimatePresence>
      {props && (
        <motion.div
          tw="absolute w-full h-full top-0 left-0 p-7 bg-white z-[9999] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          <ContentsContainer>
            <Target>
              {props.target === "MYSELF" ? "답변 주인이" : "방금 푼 사람이"}
            </Target>
            <Title>{props.name}</Title>
            <div tw="relative w-[calc(100% - 56px)] h-full mb-[40px]">
              <Image
                src={props.imageUrl}
                alt={props.name}
                layout="fill"
                sizes="(max-width: 768px) 100vw"
              ></Image>
            </div>
          </ContentsContainer>
          <Button onClick={handle확인}>닫기</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Target = tw.h1`text-5xl leading-none text-center`;
const Title = tw.h2`text-4xl leading-none text-center`;
const ContentsContainer = tw.div`flex-1 flex items-center flex-col gap-6 mt-24`;

export default GamePenalty;
