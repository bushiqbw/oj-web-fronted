/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseInteger } from "../models/BaseResponseInteger";
import type { PostThumbAddRequest } from "../models/PostThumbAddRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class PostThumbControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseInteger OK
   * @throws ApiError
   */
  public static doThumb(
    requestBody: PostThumbAddRequest
  ): CancelablePromise<BaseResponseInteger> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/post_thumb/",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
