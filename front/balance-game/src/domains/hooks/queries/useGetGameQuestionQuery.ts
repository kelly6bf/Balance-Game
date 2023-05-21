import { gameApi } from "@/domains/api";
import { useQuery } from "@tanstack/react-query";

const useGetGameQuestionQuery = (category: string) => {
  return useQuery(["game", category], () => gameApi.getGameQuestion(category), {
    initialData: [],
    enabled: !!category,
  });
};

export default useGetGameQuestionQuery;
