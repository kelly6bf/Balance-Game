package com.gdsc.balancegame.global.response;

import lombok.Getter;

/**
 * 단건 결과 응답
 */
@Getter
public class SingleResult<T> extends CommonResult {

    private T data;

    public SingleResult(
            Integer status,
            String message,
            T data
    ) {
        super(status, message);
        this.data = data;
    }
}