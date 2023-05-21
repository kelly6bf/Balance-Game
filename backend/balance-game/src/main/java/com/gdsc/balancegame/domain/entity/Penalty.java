package com.gdsc.balancegame.domain.entity;

import lombok.Getter;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public enum Penalty {
    A(1, "원숭이 흉내 10초", "1.png"),
    B(2, "애교 10초", "2.png"),
    C(3, "상대방이 원하는 호칭으로 불러주기", "3.png"),
    D(4, "인디언 밥", "4.png"),
    E(5, "삼행시", "5.png"),
    F(6, "다른 테이블 번호 따오기", "6.png"),
    G(7, "노래 부르기", "7.png"),
    H(8, "춤추기", "8.png"),
    I(9, "성대모사", "9.png"),
    J(10, "자유 이용권 ", "10.png");

    private final int id;
    private final String description;
    private final String image_url;

    Penalty(
            int id,
            String description,
            String image_url
    ) {
        this.id = id;
        this.description = description;
        this.image_url = image_url;
    }

    public static List<Penalty> valueOfId(List<Integer> ids) {
        return Arrays.stream(values())
                .filter(value -> ids.contains(value.id))
                .collect(Collectors.toList());
    }
}