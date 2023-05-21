import { PATH } from "@/configs/rest";
import { rest } from "msw";

export const handlers = [
  rest.get(PATH.GAMEQUESTION, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: "성공적으로 질문 리스트를 조회하였습니다.",
        data: [
          {
            firstAnswer: "출근길에 떨어트린 커피가 내 노트북에 쏟아지기",
            secondAnswer: "출근길에 떨어트린 도넛이 회사 대표 머리에 올라가기",
          },
          {
            firstAnswer: "코딩 알려주는 모기",
            secondAnswer: "코딩 알려주는 바퀴벌레",
          },
        ],
      })
    );
  }),

  rest.get(PATH.NORMALQUESTION, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        message: "성공적으로 질문 리스트를 조회하였습니다.",
        data: [
          {
            firstAnswer: "데이트 코스 1분 1초 단위로 계획하는 애인",
            secondAnswer: "아무 생각 없이 나오는 애인",
          },
          {
            firstAnswer: "내가 싫어하지만 날 좋아하는 사람에게 고백받기",
            secondAnswer: "내가 좋아하지만 날 좋아하지 않는 사람과 연애",
          },
        ],
      })
    );
  }),

  rest.get(PATH.GAMEANSWER, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
