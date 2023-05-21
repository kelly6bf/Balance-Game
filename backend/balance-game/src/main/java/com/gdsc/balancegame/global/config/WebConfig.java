package com.gdsc.balancegame.global.config;

import com.gdsc.balancegame.global.converter.QuestionCategoryConverter;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(new QuestionCategoryConverter());
    }
}