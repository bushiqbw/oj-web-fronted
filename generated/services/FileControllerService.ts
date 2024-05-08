/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseString } from "../models/BaseResponseString";
import type { UploadFileRequest } from "../models/UploadFileRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FileControllerService {
  /**
   * @param uploadFileRequest
   * @param requestBody
   * @returns BaseResponseString OK
   * @throws ApiError
   */
  public static uploadFile(
    uploadFileRequest: UploadFileRequest,
    requestBody?: {
      file: Blob;
    }
  ): CancelablePromise<BaseResponseString> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/file/upload",
      query: {
        uploadFileRequest: uploadFileRequest,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
