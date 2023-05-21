import { BASE_URL, PATH } from "@/configs/rest";

export default {
  getGameQuestion: async (category: string) => {
    const response = await fetch(
      `${BASE_URL}${PATH.GAMEQUESTION}?category=${category}`
    );
    const data: {
      data: Array<{
        questionId: number;
        firstAnswer: string;
        secondAnswer: string;
      }>;
    } = await response.json();
    return data.data;
  },
} as const;
