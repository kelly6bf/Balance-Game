package com.gdsc.balancegame.domain.service;

import com.gdsc.balancegame.domain.dto.GameAnswerResponse;
import com.gdsc.balancegame.domain.dto.Questions;
import com.gdsc.balancegame.domain.dto.SaveAnswerRequest;
import com.gdsc.balancegame.domain.dto.UserIdResponse;
import com.gdsc.balancegame.domain.entity.AnswerRecord;
import com.gdsc.balancegame.domain.entity.Question;
import com.gdsc.balancegame.domain.entity.QuestionCategory;
import com.gdsc.balancegame.domain.repository.AnswerRecordRepository;
import com.gdsc.balancegame.domain.repository.QuestionRepository;
import com.gdsc.balancegame.domain.entity.Penalty;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import static java.util.stream.Stream.generate;

@RequiredArgsConstructor
@Service
public class GameService {

    private final QuestionRepository questionRepository;
    private final AnswerRecordRepository answerRecordRepository;
    private final Random random = new SecureRandom();

    /**
     * 특정 카테고리의 모든 질문 조회
     */
    public List<Questions> getAllQuestions(QuestionCategory category) {
        return questionRepository.findAllByCategory(category)
                .stream()
                .map(Questions::of)
                .toList();
    }

    /**
     * 특정 카테고리의 무작위 5개 질문 조회
     */
    public List<Questions> getRandomQuestions(QuestionCategory category) {
        List<Question> questions = questionRepository.findAllByCategory(category);

        return getRandomNumber()
                .stream()
                .map(n -> Questions.of(questions.get(n -1)))
                .toList();
    }

    /**
     * 희생자의 사전 질문 답변 저장
     */
    @Transactional
    public UserIdResponse saveAnswers(SaveAnswerRequest request) {

        String userId = generateUserId();

        request.answers()
                .stream()
                .map(answer -> AnswerRecord.of(
                        userId,
                        answer.answer(),
                        questionRepository.findById(answer.questionId())
                                .orElseThrow(EntityNotFoundException::new)
                ))
                .toList()
                .forEach(answerRecordRepository::save);

        return new UserIdResponse(userId);
    }

    /**
     * 게임을 위한 종합 정보 조회
     */
    public List<GameAnswerResponse> getAnswers(String userId) {
        List<Penalty> penalties = getPenalties();
        List<AnswerRecord> answerRecords = answerRecordRepository.findByUserId(userId);
        List<GameAnswerResponse> result = new ArrayList<>();

        System.out.println(answerRecords.size());

        for (int i = 0; i < 5; i++) {
            result.add(
                    new GameAnswerResponse(
                    Questions.of(answerRecords.get(i).getQuestion()),
                    answerRecords.get(i).getAnswer(),
                    com.gdsc.balancegame.domain.dto.Penalty.of(penalties.get(i))
            ));
        }

        return result;
    }

    // UserId 생성
    public String generateUserId() {
        return UUID.randomUUID().toString();
    }

    // 무작위 5개 벌칙 조회
    private List<Penalty> getPenalties() {
        return Penalty.valueOfId(getRandomNumber());
    }

    // 1 ~ 10 중복없이 랜덤한 5개 정수 추출
    private List<Integer> getRandomNumber() {
        return generate(() -> random.nextInt(10) + 1)
                .distinct()
                .limit(5)
                .toList();
    }
}