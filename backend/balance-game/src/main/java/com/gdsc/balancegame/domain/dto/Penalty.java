package com.gdsc.balancegame.domain.dto;

public record Penalty(
        String description,
        String imageUrl
) {
    public static Penalty of(com.gdsc.balancegame.domain.entity.Penalty penalty) {
        return new Penalty(
                penalty.getDescription(),
                "https://spadeworker-storage.s3.ap-northeast-2.amazonaws.com/balance-game/" + penalty.getImage_url());
    }
}