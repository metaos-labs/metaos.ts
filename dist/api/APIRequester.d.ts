import { OrderBy } from "../proto/cosmos/tx/v1beta1/service";
export declare type APIParams = Record<string, any>;
export interface PaginationOptions {
    "pagination.limit"?: string;
    "pagination.offset"?: string;
    "pagination.key"?: string;
    "pagination.count_total"?: "true" | "false";
    "pagination.reverse"?: "true" | "false";
    "order_by"?: keyof typeof OrderBy;
}
export interface Pagination {
    next_key: string | null;
    total: number;
}
export declare class APIRequester {
    private axios;
    constructor(baseURL: string);
    get<T>(endpoint: string, params?: URLSearchParams | APIParams): Promise<T>;
    post<T>(endpoint: string, data?: APIParams): Promise<T>;
}
