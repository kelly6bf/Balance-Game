package com.gdsc.balancegame.global.response;

import lombok.Getter;

import java.util.List;

@Getter
public class ListResult<T> extends CommonResult {

    private List<T> data;

    public ListResult(
            Integer status,
            String message,
            List<T> data
    ) {
        super(status, message);
        this.data = data;
    }
}