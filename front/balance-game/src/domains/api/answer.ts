import { BASE_URL, PATH } from "@/configs/rest";

export default {
  saveAnswer: async (
    answers: Array<{ questionId: number; answer: string }>
  ) => {
    const response = await fetch(`${BASE_URL}${PATH.GAMEANSWER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answers,
      }),
    });
    const data: { data: { userId: string } } = await response.json();
    return data.data;
  },
  getPenalty: async (userId: string) => {
    const response = await fetch(
      `${BASE_URL}${PATH.GAMEANSWER}?userId=${userId}`
    );
    const data: {
      data: Array<{
        answer: string;
        penalty: { description: string; imageUrl: string };
        question: {
          questionId: number;
          firstAnswer: string;
          secondAnswer: string;
        };
      }>;
    } = await response.json();
    return data.data;
  },

  deleteAnswers: async () => {
    const response = await fetch(`${BASE_URL}${PATH.GAMEANSWER}`, {
      method: "DELETE",
    });
  },
} as const;
