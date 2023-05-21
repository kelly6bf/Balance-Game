package com.gdsc.balancegame.domain.repository;

import com.gdsc.balancegame.domain.entity.Question;
import com.gdsc.balancegame.domain.entity.QuestionCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findAllByCategory(QuestionCategory category);
}