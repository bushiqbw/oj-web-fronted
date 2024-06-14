/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseInteger } from "../models/BaseResponseInteger";
import type { BaseResponseListQuestionCommentVO } from "../models/BaseResponseListQuestionCommentVO";
import type { CommentAddRequest } from "../models/CommentAddRequest";
import type { QuestionComment } from "../models/QuestionComment";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class QuestionCommentsControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static addQuestionCommentWrap(
    requestBody: CommentAddRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question_comment/wrap/addComment",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateQuestionComment(
    requestBody: QuestionComment
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question_comment/updateLikeCount",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static deleteQuestion(
    requestBody: QuestionComment
  ): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question_comment/deleteComment",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static addQuestionComment(requestBody: {
    currentComment?: QuestionComment;
    parent?: QuestionComment;
  }): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/question_comment/addComment",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponseListQuestionCommentVO OK
   * @throws ApiError
   */
  public static getCommentList(
    id: number
  ): CancelablePromise<BaseResponseListQuestionCommentVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/question_comment/getCommentList",
      query: {
        id: id,
      },
    });
  }
}
