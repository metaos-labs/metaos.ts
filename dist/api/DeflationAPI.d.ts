import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryAllRepurchaseResponse, QueryGetRepurchaseResponse, QueryParamsResponse } from "../proto/deflation/query";
export declare class DeflationAPI extends BaseAPI {
    allRepurchase(params?: PaginationOptions): Promise<QueryAllRepurchaseResponse>;
    getRepurchase(denom: string): Promise<QueryGetRepurchaseResponse>;
    params(): Promise<QueryParamsResponse>;
}
