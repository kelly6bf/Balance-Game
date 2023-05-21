package com.gdsc.balancegame.global.converter;

import com.gdsc.balancegame.domain.entity.QuestionCategory;
import org.springframework.core.convert.converter.Converter;

public class QuestionCategoryConverter
        implements Converter<String, QuestionCategory> {

    @Override
    public QuestionCategory convert(String questionCategory) {
        return QuestionCategory.of(questionCategory);
    }
}