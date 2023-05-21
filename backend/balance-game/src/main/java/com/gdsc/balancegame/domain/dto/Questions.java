package com.gdsc.balancegame.domain.dto;

import com.gdsc.balancegame.domain.entity.Question;

public record Questions(
        Long questionId,
        String firstAnswer,
        String secondAnswer
) {
    public static Questions of(Question question) {
        return new Questions(
                question.getId(),
                question.getFirstAnswer(),
                question.getSecondAnswer()
        );
    }
}