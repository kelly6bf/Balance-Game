import { answerApi } from "@/domains/api";
import { useLoading } from "@/hooks";
import { useMutation } from "@tanstack/react-query";

const useSaveAnswerMutation = () => {
  const { hideLoading, showLoading } = useLoading();
  return useMutation(
    (answers: Array<{ questionId: number; answer: string }>) =>
      answerApi.saveAnswer(answers),
    {
      onMutate() {
        showLoading();
      },
      onSuccess() {
        hideLoading();
      },
      onError() {
        hideLoading();
      },
    }
  );
};

export default useSaveAnswerMutation;
