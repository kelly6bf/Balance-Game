import tw from "twin.macro";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { orderAtom } from "../atoms/order";
import {
  useGetGameQuestionQuery,
  usePenalty,
  useSaveAnswerMutation,
} from "../hooks";
import GamePenalty from "./GamePenalty";
import { AnimatePresence, motion } from "framer-motion";
import {
  firstAnswerMotions,
  secondAnswerMotions,
} from "../motions/answer.motion";
import CurrentOrder from "./CurrentOrder";
import useGetPenaltyQuery from "../hooks/queries/useGetPenaltyQuery";

type QuestionProps = {
  category: string;
};

const TogetherBalanceGame = ({ category }: QuestionProps) => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const answers = useRef<Array<{ questionId: number; answer: string }>>([]);
  const userId = useRef<string | null>(null);
  const [order, setOrder] = useAtom(orderAtom);
  const { showPenalty } = usePenalty();
  const [show, setShow] = useState(false);
  const { data } = useGetGameQuestionQuery(category as string);
  const { data: penaltyData } = useGetPenaltyQuery(userId.current as string);
  const { mutate: saveAnswer } = useSaveAnswerMutation();

  useLayoutEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [order]);

  useEffect(() => {
    return () => {
      setOrder("MYSELF");
    };
  }, [setOrder]);

  const handle나자신답변제출 = (answer: string) => {
    answers.current.push({ questionId: data[index].questionId, answer });
    if (data.length - 1 === index) {
      saveAnswer(answers.current, {
        onSuccess(data) {
          setOrder("OTHERS");
          setIndex(0);
          userId.current = data.userId;
        },
      });
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const handle다른사람답변제출 = async (answer: string) => {
    const penalty = penaltyData.find(
      (element) => element.question.questionId === data[index].questionId
    );
    if (!penalty) return;
    await showPenalty(
      penalty.penalty.description,
      penalty.penalty.imageUrl,
      penalty.answer === answer ? "MYSELF" : "OTHERS"
    );
    if (data.length - 1 === index) {
      router.push("/");
      return;
    }
    setIndex((prev) => prev + 1);
  };

  if (data.length === 0) return null;

  return (
    <>
      <Container>
        <AnimatePresence>
          <Box
            tw="bg-[#495464] text-[#E8E8E8]"
            onClick={
              order === "MYSELF"
                ? () => handle나자신답변제출(data[index].firstAnswer)
                : () => handle다른사람답변제출(data[index].firstAnswer)
            }
            variants={firstAnswerMotions}
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
            onClick={
              order === "MYSELF"
                ? () => handle나자신답변제출(data[index].secondAnswer)
                : () => handle다른사람답변제출(data[index].secondAnswer)
            }
            variants={secondAnswerMotions}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {data[index].secondAnswer}
          </Box>
        </AnimatePresence>
      </Container>
      <GamePenalty />
      <AnimatePresence>
        {show && <CurrentOrder order={order} />}
      </AnimatePresence>
    </>
  );
};

const Container = tw.div`flex flex-col gap-12 w-full`;
const Box = tw(
  motion.div
)`h-44 w-full px-9 flex items-center text-2xl rounded-[42px] cursor-pointer justify-center`;

export default TogetherBalanceGame;
