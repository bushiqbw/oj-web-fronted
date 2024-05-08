/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePagePost } from "../models/BaseResponsePagePost";
import type { BaseResponsePagePostVO } from "../models/BaseResponsePagePostVO";
import type { BaseResponsePostVO } from "../models/BaseResponsePostVO";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { PostAddRequest } from "../models/PostAddRequest";
import type { PostEditRequest } from "../models/PostEditRequest";
import type { PostQueryRequest } from "../models/PostQueryRequest";
import type { PostUpdateRequest } from "../models/PostUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PostControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updatePost(
    requestBody: PostUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/update",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePagePostVO OK
   * @throws ApiError
   */
  public static searchPostVoByPage(
    requestBody: PostQueryRequest
  ): CancelablePromise<BaseResponsePagePostVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/search/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePagePostVO OK
   * @throws ApiError
   */
  public static listMyPostVoByPage(
    requestBody: PostQueryRequest
  ): CancelablePromise<BaseResponsePagePostVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/my/list/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePagePost OK
   * @throws ApiError
   */
  public static listPostByPage(
    requestBody: PostQueryRequest
  ): CancelablePromise<BaseResponsePagePost> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePagePostVO OK
   * @throws ApiError
   */
  public static listPostVoByPage(
    requestBody: PostQueryRequest
  ): CancelablePromise<BaseResponsePagePostVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/list/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static editPost(
    requestBody: PostEditRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/edit",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deletePost(
    requestBody: DeleteRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/delete",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addPost(
    requestBody: PostAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post/add",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param id
   * @returns BaseResponsePostVO OK
   * @throws ApiError
   */
  public static getPostVoById(
    id: number
  ): CancelablePromise<BaseResponsePostVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/post/get/vo",
      query: {
        id: id,
      },
    });
  }
}
