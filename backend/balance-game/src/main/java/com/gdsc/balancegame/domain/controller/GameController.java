package com.gdsc.balancegame.domain.controller;

import com.gdsc.balancegame.domain.dto.GameAnswerResponse;
import com.gdsc.balancegame.domain.dto.Questions;
import com.gdsc.balancegame.domain.dto.SaveAnswerRequest;
import com.gdsc.balancegame.domain.dto.UserIdResponse;
import com.gdsc.balancegame.domain.entity.QuestionCategory;
import com.gdsc.balancegame.domain.service.GameService;
import com.gdsc.balancegame.global.response.ListResult;
import com.gdsc.balancegame.global.response.ResponseService;
import com.gdsc.balancegame.global.response.SingleResult;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RequiredArgsConstructor
@RequestMapping("/api")
@RestController
public class GameController {

    private final GameService gameService;
    private final ResponseService responseService;

    /**
     * 특정 카테고리의 질문 모두 조회
     */
    @GetMapping("/normal/questions")
    public ListResult<Questions> getAllQuestions(
            @RequestParam() QuestionCategory category
    ) {

        return responseService.getListResult(
                OK.value(),
                "성공적으로 질문 리스트를 조회하였습니다.",
                gameService.getAllQuestions(category)
        );
    }

    /**
     * 특정 카테고리의 질문 무작위 5개 조회
     */
    @GetMapping("/game/questions")
    public ListResult<Questions> getRandomQuestions(
            @RequestParam() QuestionCategory category
    ) {
        System.out.println(category.name());
        return responseService.getListResult(
                OK.value(),
                "성공적으로 질문 리스트를 조회하였습니다.",
                gameService.getRandomQuestions(category)
        );
    }

    /**
     * 희생자의 사전 답변 저장
     */
    @PostMapping("/game/answers")
    public SingleResult<UserIdResponse> saveAnswers(
            @RequestBody SaveAnswerRequest request
    ) {

        return responseService.getSingleResult(
                OK.value(),
                "성공적으로 사전 질문이 저장되었습니다.",
                gameService.saveAnswers(request)
        );
    }

    /**
     * 희생자가 선택한 문제 & 답변, 벌칙 조회
     */
    @GetMapping("/game/answers")
    public ListResult<GameAnswerResponse> getAnswers(
            @RequestParam String userId
    ) {
        return responseService.getListResult(
                OK.value(),
                "성공적으로 결과가 조회되었습니다.",
                gameService.getAnswers(userId)
        );
    }
}