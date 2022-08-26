import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryGrantsResponse } from "../proto/cosmos/authz/v1beta1/query";
export declare class AuthzAPI extends BaseAPI {
    grants(granter: string, grantee: string, msgTypeUrl?: string, params?: PaginationOptions): Promise<QueryGrantsResponse>;
}
