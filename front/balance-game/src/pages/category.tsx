import Button from "@/components/button/Button";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

const Category = () => {
  return (
    <Container>
      <ContentsContainer>
        <TitleContainer>
          <Title>카테고리 선택</Title>
        </TitleContainer>
        <Link href="/play/DEV">
          <Button>개발</Button>
        </Link>
        <Link href="/play/LOVE">
          <Button>연애</Button>
        </Link>
        <Link href="/play/FRIENDSHIP">
          <Button>우정</Button>
        </Link>
        <Link href="/play/FUN">
          <Button>예능</Button>
        </Link>
      </ContentsContainer>
    </Container>
  );
};

const Container = tw.div`flex flex-col justify-center h-full`;
const ContentsContainer = tw.div`flex flex-col gap-6 w-full relative`;
const TitleContainer = tw.div`absolute top-[-60px] w-full`;
const Title = tw.h2`text-[32px] text-center leading-none font-semibold text-[#495464]`;

export default Category;
