import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/button/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import tw from "twin.macro";
import { useGetNormalQuestionQuery } from "../hooks";
import {
  firstAnswerMotions,
  secondAnswerMotions,
} from "../motions/answer.motion";

type AloneBalanceGameProps = {
  category: string;
};

const AloneBalanceGame = ({ category }: AloneBalanceGameProps) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const { data } = useGetNormalQuestionQuery(category as string);

  const handleNext = () => {
    if (index === data.length - 1) {
      router.push("/");
      return;
    }

    setIndex((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  if (data.length === 0) return null;

  return (
    <>
      <Container>
        <AnimatePresence>
          <Box
            variants={firstAnswerMotions}
            tw="bg-[#495464] text-[#E8E8E8]"
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {data[index].firstAnswer}
          </Box>
        </AnimatePresence>
        <AnimatePresence>
          <Box
            tw="bg-[#E8E8E8] text-[#495464]"
            key={index}
            variants={secondAnswerMotions}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {data[index].secondAnswer}
          </Box>
        </AnimatePresence>
      </Container>
      <ButtonContainer>
        <Button
          tw="w-32 disabled:bg-[#BBBFCA]"
          disabled={index === 0}
          onClick={handlePrevious}
        >
          이전
        </Button>
        <Button tw="w-32" onClick={handleNext}>
          {index === data.length - 1 ? "완료" : "다음"}
        </Button>
      </ButtonContainer>
    </>
  );
};

const Container = tw.div`flex flex-col gap-12 w-full`;
const Box = tw(
  motion.div
)`h-44 w-full px-9 flex items-center text-2xl rounded-[42px] justify-center`;
const ButtonContainer = tw.div`absolute flex justify-between bottom-0 left-0 w-full px-7 pb-7`;

export default AloneBalanceGame;
