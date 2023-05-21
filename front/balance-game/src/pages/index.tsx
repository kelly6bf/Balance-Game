import { modeAtom } from "@/atoms/mode";
import Button from "@/components/button/Button";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import tw from "twin.macro";

export default function Home() {
  const router = useRouter();
  const setMode = useSetAtom(modeAtom);

  const handle혼자하기 = () => {
    setMode("ALONE");
    router.push("/category");
  };

  const handle함께하기 = () => {
    setMode("WITHFRIENDS");
    router.push("/category");
  };

  return (
    <Container>
      <ContentsContainer>
        <TitleContainer>
          <Title>모드 선택</Title>
        </TitleContainer>
        <Button onClick={handle혼자하기}>혼자하기</Button>
        <Button onClick={handle함께하기}>함께하기</Button>
      </ContentsContainer>
    </Container>
  );
}

const Container = tw.div`flex flex-col justify-center h-full`;
const ContentsContainer = tw.div`flex flex-col gap-6 w-full relative`;
const TitleContainer = tw.div`absolute top-[-60px] w-full`;
const Title = tw.h2`text-[32px] text-center leading-none font-semibold text-[#495464]`;
