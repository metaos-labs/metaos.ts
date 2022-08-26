import { BaseAPI } from "./BaseAPI";
import { QueryAllMetadataResponse, QueryAllOwnershipConfirmationResponse, QueryGetMetadataResponse, QueryGetOwnershipConfirmationResponse } from "../proto/token/query";
import { PaginationOptions } from "./APIRequester";
export declare class TokenAPI extends BaseAPI {
    allMetadata(params?: PaginationOptions): Promise<QueryAllMetadataResponse>;
    getMetadata(denom: string): Promise<QueryGetMetadataResponse>;
    allOwnershipConfirmation(params?: PaginationOptions): Promise<QueryAllOwnershipConfirmationResponse>;
    getOwnershipConfirmation(denom: string): Promise<QueryGetOwnershipConfirmationResponse>;
}
