/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageQuestionSubmitVO } from "../models/BaseResponsePageQuestionSubmitVO";
import type { QuestionSubmitAddRequest } from "../models/QuestionSubmitAddRequest";
import type { QuestionSubmitQueryRequest } from "../models/QuestionSubmitQueryRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class QuestionSubmitControllerService {
  /**
   * @param requestBody
   * @returns BaseResponsePageQuestionSubmitVO OK
   * @throws ApiError
   */
  public static listQuestionSubmitByPage(
    requestBody: QuestionSubmitQueryRequest
  ): CancelablePromise<BaseResponsePageQuestionSubmitVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question_submit/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static doQuestionSubmit(
    requestBody: QuestionSubmitAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question_submit/",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
