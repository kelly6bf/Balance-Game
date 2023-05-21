package com.gdsc.balancegame.domain.entity;

import java.util.Arrays;

public enum QuestionCategory {
    DEV, LOVE, FRIENDSHIP, FUN;

    public static QuestionCategory of(String category) {
        return Arrays.stream(values())
                .filter(value -> value.name().equals(category))
                .findAny()
                .orElse(null);
    }
}