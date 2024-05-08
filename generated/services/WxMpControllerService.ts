/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class WxMpControllerService {
  /**
   * @param timestamp
   * @param nonce
   * @param signature
   * @param echostr
   * @returns string OK
   * @throws ApiError
   */
  public static check(
    timestamp: string,
    nonce: string,
    signature: string,
    echostr: string
  ): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/",
      query: {
        timestamp: timestamp,
        nonce: nonce,
        signature: signature,
        echostr: echostr,
      },
    });
  }

  /**
   * @returns any OK
   * @throws ApiError
   */
  public static receiveMessage(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/",
    });
  }

  /**
   * @returns string OK
   * @throws ApiError
   */
  public static setMenu(): CancelablePromise<string> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/setMenu",
    });
  }
}
