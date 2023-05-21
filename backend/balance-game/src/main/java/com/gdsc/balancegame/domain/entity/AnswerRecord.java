package com.gdsc.balancegame.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class AnswerRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 500, nullable = false)
    private String userId;

    @Column(length = 500, nullable = false)
    private String answer;

    @OneToOne(fetch = FetchType.LAZY)
    private Question question;

    private AnswerRecord(
            String userId,
            String answer,
            Question question
    ) {
        this.userId = userId;
        this.answer = answer;
        this.question = question;
    }

    public static AnswerRecord of(
            String userId,
            String answer,
            Question question
    ) {
        return new AnswerRecord(userId, answer, question);
    }
}