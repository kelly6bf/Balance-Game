package com.gdsc.balancegame.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500, nullable = false)
    private String firstAnswer;

    @Column(length = 500, nullable = false)
    private String secondAnswer;

    @Enumerated(EnumType.STRING)
    @Column(length = 50, nullable = false)
    private QuestionCategory category;
}