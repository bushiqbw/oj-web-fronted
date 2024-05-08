/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseInteger } from "../models/BaseResponseInteger";
import type { BaseResponsePagePostVO } from "../models/BaseResponsePagePostVO";
import type { PostFavourAddRequest } from "../models/PostFavourAddRequest";
import type { PostFavourQueryRequest } from "../models/PostFavourQueryRequest";
import type { PostQueryRequest } from "../models/PostQueryRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PostFavourControllerService {
  /**
   * @param requestBody
   * @returns BaseResponsePagePostVO OK
   * @throws ApiError
   */
  public static listMyFavourPostByPage(
    requestBody: PostQueryRequest
  ): CancelablePromise<BaseResponsePagePostVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post_favour/my/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePagePostVO OK
   * @throws ApiError
   */
  public static listFavourPostByPage(
    requestBody: PostFavourQueryRequest
  ): CancelablePromise<BaseResponsePagePostVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post_favour/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static doPostFavour(
    requestBody: PostFavourAddRequest
  ): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post_favour/",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
