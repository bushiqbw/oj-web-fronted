/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageQuestion } from "../models/BaseResponsePageQuestion";
import type { BaseResponsePageQuestionVO } from "../models/BaseResponsePageQuestionVO";
import type { BaseResponseQuestion } from "../models/BaseResponseQuestion";
import type { BaseResponseQuestionVO } from "../models/BaseResponseQuestionVO";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { QuestionAddRequest } from "../models/QuestionAddRequest";
import type { QuestionEditRequest } from "../models/QuestionEditRequest";
import type { QuestionQueryRequest } from "../models/QuestionQueryRequest";
import type { QuestionUpdateRequest } from "../models/QuestionUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class QuestionControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateQuestion(
    requestBody: QuestionUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/update",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageQuestionVO OK
   * @throws ApiError
   */
  public static listMyQuestionVoByPage(
    requestBody: QuestionQueryRequest
  ): CancelablePromise<BaseResponsePageQuestionVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/my/list/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageQuestion OK
   * @throws ApiError
   */
  public static listQuestionByPage(
    requestBody: QuestionQueryRequest
  ): CancelablePromise<BaseResponsePageQuestion> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageQuestionVO OK
   * @throws ApiError
   */
  public static listQuestionVoByPage(
    requestBody: QuestionQueryRequest
  ): CancelablePromise<BaseResponsePageQuestionVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/list/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static editQuestion(
    requestBody: QuestionEditRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/edit",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteQuestion(
    requestBody: DeleteRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/delete",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addQuestion(
    requestBody: QuestionAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question/add",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponseQuestion OK
   * @throws ApiError
   */
  public static getQuestionById(
    id: number
  ): CancelablePromise<BaseResponseQuestion> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/question/get",
      query: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns BaseResponseQuestionVO OK
   * @throws ApiError
   */
  public static getQuestionVoById(
    id: number
  ): CancelablePromise<BaseResponseQuestionVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/question/get/vo",
      query: {
        id: id,
      },
    });
  }
}
