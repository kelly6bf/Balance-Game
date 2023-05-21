import tw from "twin.macro";
import { modeAtom } from "@/atoms/mode";
import AloneBalanceGame from "@/domains/components/AloneBalanceGame";
import TogetherBalanceGame from "@/domains/components/TogetherBalanceGame";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";

const categoryDict = {
  DEV: "개발",
  LOVE: "연애",
  FRIENDSHIP: "우정",
  FUN: "예능",
};

const QuestionPage = () => {
  const router = useRouter();
  const mode = useAtomValue(modeAtom);
  const { category } = router.query as {
    category: "DEV" | "LOVE" | "FRIENDSHIP" | "FUN";
  };

  if (!category) return null;

  return (
    <>
      <CategoryText>{categoryDict[category]}</CategoryText>
      <ContentsContainer>
        {mode === "ALONE" ? (
          <AloneBalanceGame category={category} />
        ) : (
          <TogetherBalanceGame category={category} />
        )}
      </ContentsContainer>
    </>
  );
};

const CategoryText = tw.h2`absolute leading-none text-[32px] font-semibold`;
const ContentsContainer = tw.div`flex items-center h-full`;

export default QuestionPage;
