import { answerApi } from "@/domains/api";
import { useQuery } from "@tanstack/react-query";

const useGetPenaltyQuery = (userId: string) => {
  return useQuery(["penalty", userId], () => answerApi.getPenalty(userId), {
    initialData: [],
    enabled: !!userId,
  });
};

export default useGetPenaltyQuery;
