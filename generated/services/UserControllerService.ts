/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponseBoolean } from "../models/BaseResponseBoolean";
import type { BaseResponseLoginUserVO } from "../models/BaseResponseLoginUserVO";
import type { BaseResponseLong } from "../models/BaseResponseLong";
import type { BaseResponsePageUser } from "../models/BaseResponsePageUser";
import type { BaseResponsePageUserVO } from "../models/BaseResponsePageUserVO";
import type { BaseResponseUser } from "../models/BaseResponseUser";
import type { BaseResponseUserVO } from "../models/BaseResponseUserVO";
import type { DeleteRequest } from "../models/DeleteRequest";
import type { UserAddRequest } from "../models/UserAddRequest";
import type { UserLoginRequest } from "../models/UserLoginRequest";
import type { UserQueryRequest } from "../models/UserQueryRequest";
import type { UserRegisterRequest } from "../models/UserRegisterRequest";
import type { UserUpdateMyRequest } from "../models/UserUpdateMyRequest";
import type { UserUpdateRequest } from "../models/UserUpdateRequest";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class UserControllerService {
  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateUser(
    requestBody: UserUpdateRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/update",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static updateMyUser(
    requestBody: UserUpdateMyRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/update/my",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static userRegister(
    requestBody: UserRegisterRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/register",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static userLogout(): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/logout",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLoginUserVO OK
   * @throws ApiError
   */
  public static userLogin(
    requestBody: UserLoginRequest
  ): CancelablePromise<BaseResponseLoginUserVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/login",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUser OK
   * @throws ApiError
   */
  public static listUserByPage(
    requestBody: UserQueryRequest
  ): CancelablePromise<BaseResponsePageUser> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/list/page",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponsePageUserVO OK
   * @throws ApiError
   */
  public static listUserVoByPage(
    requestBody: UserQueryRequest
  ): CancelablePromise<BaseResponsePageUserVO> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/list/page/vo",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseBoolean OK
   * @throws ApiError
   */
  public static deleteUser(
    requestBody: DeleteRequest
  ): CancelablePromise<BaseResponseBoolean> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/delete",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param requestBody
   * @returns BaseResponseLong OK
   * @throws ApiError
   */
  public static addUser(
    requestBody: UserAddRequest
  ): CancelablePromise<BaseResponseLong> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/user/add",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * @param code
   * @returns BaseResponseLoginUserVO OK
   * @throws ApiError
   */
  public static userLoginByWxOpen(
    code: string
  ): CancelablePromise<BaseResponseLoginUserVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/login/wx_open",
      query: {
        code: code,
      },
    });
  }

  /**
   * @param id
   * @returns BaseResponseUser OK
   * @throws ApiError
   */
  public static getUserById(id: number): CancelablePromise<BaseResponseUser> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/get",
      query: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns BaseResponseUserVO OK
   * @throws ApiError
   */
  public static getUserVoById(
    id: number
  ): CancelablePromise<BaseResponseUserVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/get/vo",
      query: {
        id: id,
      },
    });
  }

  /**
   * @returns BaseResponseLoginUserVO OK
   * @throws ApiError
   */
  public static getLoginUser(): CancelablePromise<BaseResponseLoginUserVO> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/user/get/login",
    });
  }
}
