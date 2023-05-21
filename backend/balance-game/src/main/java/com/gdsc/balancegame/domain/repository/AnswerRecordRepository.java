package com.gdsc.balancegame.domain.repository;

import com.gdsc.balancegame.domain.entity.AnswerRecord;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRecordRepository extends JpaRepository<AnswerRecord, Long> {

    List<AnswerRecord> findByUserId(String userId);
}