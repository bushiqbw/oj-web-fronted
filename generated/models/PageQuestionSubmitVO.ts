/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { QuestionSubmitVO } from './QuestionSubmitVO';
export type PageQuestionSubmitVO = {
    records?: Array<QuestionSubmitVO>;
    total?: number;
    size?: number;
    current?: number;
    /**
     * @deprecated
     */
    orders?: Array<OrderItem>;
    /**
     * @deprecated
     */
    optimizeCountSql?: boolean;
    /**
     * @deprecated
     */
    searchCount?: boolean;
    optimizeJoinOfCountSql?: boolean;
    /**
     * @deprecated
     */
    countId?: string;
    /**
     * @deprecated
     */
    maxLimit?: number;
    pages?: number;
};

