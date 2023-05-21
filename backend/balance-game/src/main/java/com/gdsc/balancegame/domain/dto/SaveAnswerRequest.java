package com.gdsc.balancegame.domain.dto;

import java.util.List;

public record SaveAnswerRequest(
        List<AnswerDto> answers
) {}