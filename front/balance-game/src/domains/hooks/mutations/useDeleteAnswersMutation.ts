import { answerApi } from "@/domains/api";
import { useMutation } from "@tanstack/react-query";

const useDeleteAnswersMutation = () => {
  return useMutation(() => answerApi.deleteAnswers(), {});
};

export default useDeleteAnswersMutation;
