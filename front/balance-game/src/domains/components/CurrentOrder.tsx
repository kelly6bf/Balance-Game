import { motion } from "framer-motion";
import tw from "twin.macro";

type CurrentOrderProps = {
  order: "MYSELF" | "OTHERS";
};

const CurrentOrder = ({ order }: CurrentOrderProps) => {
  return (
    <Container
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
    >
      <Text>
        {order === "MYSELF" ? "답변을 해주세요" : "다른 사람들이 답변해주세요"}
      </Text>
    </Container>
  );
};

const Container = tw(
  motion.div
)`absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-white`;
const Text = tw.h2`text-[32px] font-semibold text-[#495464]`;

export default CurrentOrder;
