import { BaseAPI } from "./BaseAPI";
import { QueryAllCorePoolResponse, QueryAllLiquidityPositionOwnerResponse, QueryAllPoolFeeResponse, QueryAllPoolObservationResponse, QueryAllPoolPositionResponse, QueryAllPoolResponse, QueryAllPoolSlot0Response, QueryAllPoolTickResponse, QueryGetCorePoolResponse, QueryGetLiquidityPositionResponse, QueryGetLiquidityPositionTokenUriResponse, QueryGetPoolFeeResponse, QueryGetPoolObservationResponse, QueryGetPoolPositionResponse, QueryGetPoolResponse, QueryGetPoolSlot0Response, QueryLiquidityPositionByIdsResponse, QueryParamsResponse, QueryPoolSlot0AggregationResponse, QueryQuoteSwapExactInRequest, QueryQuoteSwapExactInResponse, QueryQuoteSwapExactOutRequest, QueryQuoteSwapExactOutResponse } from "../proto/swap/query";
import { PaginationOptions } from "./APIRequester";
export declare class SwapAPI extends BaseAPI {
    allCorePool(params?: PaginationOptions): Promise<QueryAllCorePoolResponse>;
    getCorePool(address: string): Promise<QueryGetCorePoolResponse>;
    liquidityPositionByIds(tokenIds: Array<string>): Promise<QueryLiquidityPositionByIdsResponse>;
    liquidityPositionById(tokenId: string): Promise<QueryGetLiquidityPositionResponse>;
    getLiquidityPositionTokenUri(tokenId: string): Promise<QueryGetLiquidityPositionTokenUriResponse>;
    allLiquidityPositionOwner(accountAddress: string, skip_zero_liquidity: boolean): Promise<QueryAllLiquidityPositionOwnerResponse>;
    params(): Promise<QueryParamsResponse>;
    allPoolFee(params?: PaginationOptions): Promise<QueryAllPoolFeeResponse>;
    getPoolFee(fee: number): Promise<QueryGetPoolFeeResponse>;
    allPoolObservation(params?: PaginationOptions): Promise<QueryAllPoolObservationResponse>;
    allPoolPosition(address: string, owner: string, params?: PaginationOptions): Promise<QueryAllPoolPositionResponse>;
    /**
     * find pool list by address array
     * @param addresses
     */
    poolSlot0Aggregation(addresses: Array<string>): Promise<QueryPoolSlot0AggregationResponse>;
    allPoolSlot0(params?: PaginationOptions): Promise<QueryAllPoolSlot0Response>;
    allPoolTick(address: string, params?: PaginationOptions): Promise<QueryAllPoolTickResponse>;
    allPool(params?: PaginationOptions): Promise<QueryAllPoolResponse>;
    getPool(address: string): Promise<QueryGetPoolResponse>;
    getPoolObservation(address: string, index: number): Promise<QueryGetPoolObservationResponse>;
    getPoolPosition(address: string, owner: string, tickLower: number, tickUpper: number): Promise<QueryGetPoolPositionResponse>;
    getPoolSlot0(address: string): Promise<QueryGetPoolSlot0Response>;
    quoteSwapExactIn(params: QueryQuoteSwapExactInRequest): Promise<QueryQuoteSwapExactInResponse>;
    quoteSwapExactOut(params: QueryQuoteSwapExactOutRequest): Promise<QueryQuoteSwapExactOutResponse>;
}
