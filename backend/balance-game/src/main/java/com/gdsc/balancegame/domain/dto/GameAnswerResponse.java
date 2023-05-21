package com.gdsc.balancegame.domain.dto;

public record GameAnswerResponse(
        Questions question,
        String answer,
        Penalty penalty
) {
}
