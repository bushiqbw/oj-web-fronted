/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JudgeInfo } from './JudgeInfo';
import type { QuestionVO } from './QuestionVO';
import type { UserVO } from './UserVO';
export type QuestionSubmitVO = {
    id?: number;
    language?: string;
    code?: string;
    judgeInfo?: JudgeInfo;
    status?: number;
    questionId?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    userVO?: UserVO;
    questionVO?: QuestionVO;
};

