import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryAllLiquidityPoolRewardResponse, QueryAllLiquidityRewardConfigResponse, QueryAllLiquidityRewardDenomResponse, QueryAllRandSwapAccountRewardResponse, QueryAllRandSwapPoolRewardResponse, QueryAllRandSwapRewardConfigResponse, QueryAllRandSwapRewardDenomResponse, QueryAllRandSwapRewardRevealResponse, QueryGetLiquidityPoolRewardResponse, QueryGetLiquidityRewardConfigResponse, QueryGetLiquidityRewardDenomResponse, QueryGetRandSwapAccountRewardResponse, QueryGetRandSwapPoolRewardResponse, QueryGetRandSwapRewardConfigResponse, QueryGetRandSwapRewardDenomResponse, QueryParamsResponse } from "../proto/pool-incentives/query";
export declare class PoolIncentiveAPI extends BaseAPI {
    allLiquidityPoolReward(params?: PaginationOptions): Promise<QueryAllLiquidityPoolRewardResponse>;
    getLiquidityPoolReward(address: string): Promise<QueryGetLiquidityPoolRewardResponse>;
    allLiquidityRewardConfig(params?: PaginationOptions): Promise<QueryAllLiquidityRewardConfigResponse>;
    getLiquidityRewardConfig(id: string): Promise<QueryGetLiquidityRewardConfigResponse>;
    allLiquidityRewardDenomR(params?: PaginationOptions): Promise<QueryAllLiquidityRewardDenomResponse>;
    getLiquidityRewardDenom(denom: string): Promise<QueryGetLiquidityRewardDenomResponse>;
    params(): Promise<QueryParamsResponse>;
    allRandSwapAccountReward(params?: PaginationOptions): Promise<QueryAllRandSwapAccountRewardResponse>;
    getRandSwapAccountReward(account: string, denom: string): Promise<QueryGetRandSwapAccountRewardResponse>;
    allRandSwapPoolReward(params?: PaginationOptions): Promise<QueryAllRandSwapPoolRewardResponse>;
    getRandSwapPoolReward(address: string): Promise<QueryGetRandSwapPoolRewardResponse>;
    allRandSwapRewardConfig(params?: PaginationOptions): Promise<QueryAllRandSwapRewardConfigResponse>;
    getRandSwapRewardConfig(id: string): Promise<QueryGetRandSwapRewardConfigResponse>;
    allRandSwapRewardDenom(params?: PaginationOptions): Promise<QueryAllRandSwapRewardDenomResponse>;
    getRandSwapRewardDenom(denom: string): Promise<QueryGetRandSwapRewardDenomResponse>;
    allRandSwapRewardReveal(params?: PaginationOptions): Promise<QueryAllRandSwapRewardRevealResponse>;
    getRandSwapRewardReveal(configId: number, round: number): Promise<QueryGetRandSwapRewardDenomResponse>;
}
