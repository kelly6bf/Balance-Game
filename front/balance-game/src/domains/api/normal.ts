import { BASE_URL, PATH } from "@/configs/rest";

export default {
  getNormalQuestion: async (category: string) => {
    const response = await fetch(
      `${BASE_URL}${PATH.NORMALQUESTION}?category=${category}`
    );
    const data: { data: Array<{ firstAnswer: string; secondAnswer: string }> } =
      await response.json();
    return data.data;
  },
} as const;
