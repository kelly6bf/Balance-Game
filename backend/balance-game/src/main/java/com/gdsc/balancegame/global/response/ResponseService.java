package com.gdsc.balancegame.global.response;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    /**
     * 성공 결과만 출력
     */
    public CommonResult getSuccessResult(
            Integer status,
            String message
    ) {
        return new CommonResult(
                status,
                message
        );
    }

    /**
     * 단건 결과 출력
     */
    public <T> SingleResult<T> getSingleResult(
            Integer status,
            String message,
            T data
    ) {
        return new SingleResult<>(
                status,
                message,
                data
        );
    }

    /**
     * 다중건 성공 결과를 처리하는 메소드
     */
    public <T> ListResult<T> getListResult(
            Integer status,
            String message,
            List<T> data
    ) {
        return new ListResult<>(
                status,
                message, data
        );
    }
}