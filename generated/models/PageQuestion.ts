/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { Question } from './Question';
export type PageQuestion = {
    records?: Array<Question>;
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

