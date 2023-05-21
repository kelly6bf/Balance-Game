import { normalApi } from "@/domains/api";
import { useQuery } from "@tanstack/react-query";

const useGetNormalQuestionQuery = (category: string) => {
  return useQuery(
    ["normal", category],
    () => normalApi.getNormalQuestion(category),
    {
      initialData: [],
      enabled: !!category,
    }
  );
};

export default useGetNormalQuestionQuery;
