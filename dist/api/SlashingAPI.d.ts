import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryParamsResponse, QuerySigningInfoResponse, QuerySigningInfosResponse } from "../proto/cosmos/slashing/v1beta1/query";
export declare class SlashingAPI extends BaseAPI {
    signingInfos(params?: PaginationOptions): Promise<QuerySigningInfosResponse>;
    signingInfo(valConsAddress: string): Promise<QuerySigningInfoResponse>;
    params(): Promise<QueryParamsResponse>;
}
