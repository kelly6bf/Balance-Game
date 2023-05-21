package com.gdsc.balancegame.global.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * API 결과만
 */
@Getter
@AllArgsConstructor
public class CommonResult {
    private Integer status;
    private String message;
}