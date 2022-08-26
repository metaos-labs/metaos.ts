import { BaseAPI } from "./BaseAPI";
import { ILiquidityPosition, IPool, IPoolPrice } from "../types";
import qs from 'qs';
import {
  QueryAllCorePoolResponse,
  QueryAllLiquidityPositionOwnerResponse,
  QueryAllPoolFeeResponse,
  QueryAllPoolObservationResponse,
  QueryAllPoolPositionResponse,
  QueryAllPoolResponse,
  QueryAllPoolSlot0Response,
  QueryAllPoolTickResponse,
  QueryGetCorePoolResponse,
  QueryGetLiquidityPositionResponse,
  QueryGetLiquidityPositionTokenUriResponse,
  QueryGetPoolFeeResponse,
  QueryGetPoolObservationRequest,
  QueryGetPoolObservationResponse,
  QueryGetPoolPositionResponse,
  QueryGetPoolResponse,
  QueryGetPoolSlot0Response,
  QueryLiquidityPositionByIdsResponse,
  QueryParamsResponse,
  QueryPoolSlot0AggregationResponse,
  QueryQuoteSwapExactInRequest,
  QueryQuoteSwapExactInResponse,
  QueryQuoteSwapExactOutRequest,
  QueryQuoteSwapExactOutResponse
} from "../proto/swap/query";
import {PaginationOptions} from "./APIRequester";

export class SwapAPI extends BaseAPI {

  public async allCorePool(
    params?: PaginationOptions
  ): Promise<QueryAllCorePoolResponse> {
    return this.request.get<QueryAllCorePoolResponse>(
      `/metaos-labs/metaos/swap/core_pools`,
      { ...params }
    );
  }

  public async getCorePool(address: string): Promise<QueryGetCorePoolResponse> {
    return this.request.get<QueryGetCorePoolResponse>(
      `/metaos-labs/metaos/swap/core_pools/${address}`
    );
  }

  public async liquidityPositionByIds(
    tokenIds: Array<string>
  ): Promise<QueryLiquidityPositionByIdsResponse> {
    const params = qs.stringify({ tokenIds }, { indices: false });
    return this.request.get<QueryLiquidityPositionByIdsResponse>(
      `/metaos-labs/metaos/swap/liquidity_position_by_ids?${params}`
    );
  }

  public async liquidityPositionById(
    tokenId: string
  ): Promise<QueryGetLiquidityPositionResponse> {
    return this.request.get<QueryGetLiquidityPositionResponse>(
      `/metaos-labs/metaos/swap/liquidity_positions/${tokenId}`
    );
  }

  public async getLiquidityPositionTokenUri(tokenId: string): Promise<QueryGetLiquidityPositionTokenUriResponse> {
    return this.request.get<QueryGetLiquidityPositionTokenUriResponse>(
      `/metaos-labs/metaos/swap/liquidity_positions/${tokenId}/token_uri`
    );
  }

  public async allLiquidityPositionOwner(
    accountAddress: string,
    skip_zero_liquidity: boolean
  ): Promise<QueryAllLiquidityPositionOwnerResponse> {
    return this.request.get<QueryAllLiquidityPositionOwnerResponse>(
      `/metaos-labs/metaos/swap/liquidity_positions_owner/${accountAddress}`,
      {
        skip_zero_liquidity
      }
    );
  }

  public async params(): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/metaos-labs/metaos/swap/params`,
    );
  }

  public async allPoolFee(
    params?: PaginationOptions
  ): Promise<QueryAllPoolFeeResponse> {
    return this.request.get<QueryAllPoolFeeResponse>(
      `/metaos-labs/metaos/swap/pool/fees`,
      {...params}
    );
  }

  public async getPoolFee(
    fee: number
  ): Promise<QueryGetPoolFeeResponse> {
    return this.request.get<QueryGetPoolFeeResponse>(
      `/metaos-labs/metaos/swap/pool/fees/${fee}`,
    );
  }

  public async allPoolObservation(
    params?: PaginationOptions
  ): Promise<QueryAllPoolObservationResponse> {
    return this.request.get<QueryAllPoolObservationResponse>(
      `/metaos-labs/metaos/swap/pool_observations`,
      {...params}
    );
  }

  public async allPoolPosition(
    address: string,
    owner: string,
    params?: PaginationOptions
  ): Promise<QueryAllPoolPositionResponse> {
    return this.request.get<QueryAllPoolPositionResponse>(
      `/metaos-labs/metaos/swap/pool_positions`,
      {address, owner, ...params}
    );
  }

  /**
   * find pool list by address array
   * @param addresses
   */
  public async poolSlot0Aggregation(
    addresses: Array<string>
  ): Promise<QueryPoolSlot0AggregationResponse> {
    const params = qs.stringify({ addresses }, { indices: false });
    return this.request.get<QueryPoolSlot0AggregationResponse>(
      `/metaos-labs/metaos/swap/pool_slot0_aggregations?${params}`,
    );
  }

  public async allPoolSlot0(
    params?: PaginationOptions
  ): Promise<QueryAllPoolSlot0Response> {
    return this.request.get<QueryAllPoolSlot0Response>(
      `/metaos-labs/metaos/swap/pool_slot0s`,
      {...params}
    );
  }

  public async allPoolTick(
    address: string,
    params?: PaginationOptions
  ): Promise<QueryAllPoolTickResponse> {
    return this.request.get<QueryAllPoolTickResponse>(
      `/metaos-labs/metaos/swap/pool_ticks`,
      {address, ...params}
    );
  }

  public async allPool(
    params?: PaginationOptions
  ): Promise<QueryAllPoolResponse> {
    return this.request.get<QueryAllPoolResponse>(
      `/metaos-labs/metaos/swap/pools`,
      {...params}
    );
  }

  public async getPool(
    address: string
  ): Promise<QueryGetPoolResponse> {
    return this.request.get<QueryGetPoolResponse>(
      `/metaos-labs/metaos/swap/pools/${address}`
    );
  }

  public async getPoolObservation(
    address: string,
    index: number
  ): Promise<QueryGetPoolObservationResponse> {
    return this.request.get<QueryGetPoolObservationResponse>(
      `/metaos-labs/metaos/swap/pools/${address}/observations/${index}`
    );
  }

  public async getPoolPosition(
    address: string,
    owner: string,
    tickLower: number,
    tickUpper: number
  ): Promise<QueryGetPoolPositionResponse> {
    return this.request.get<QueryGetPoolPositionResponse>(
      `/metaos-labs/metaos/swap/pools/${address}/positions/${owner}/${tickLower}/${tickUpper}`
    );
  }

  public async getPoolSlot0(
    address: string
  ): Promise<QueryGetPoolSlot0Response> {
    return this.request.get<QueryGetPoolSlot0Response>(
      `/metaos-labs/metaos/swap/pools/${address}/slot0`
    );
  }

  public async quoteSwapExactIn(params: QueryQuoteSwapExactInRequest): Promise<QueryQuoteSwapExactInResponse> {
    return this.request.get<QueryQuoteSwapExactInResponse>(
      `/metaos-labs/metaos/swap/quote_swap_exact_in`,
      { ...params }
    );
  }

  public async quoteSwapExactOut(params: QueryQuoteSwapExactOutRequest): Promise<QueryQuoteSwapExactOutResponse> {
    return this.request.get<QueryQuoteSwapExactOutResponse>(
      `/metaos-labs/metaos/swap/quote_swap_exact_out`,
      { ...params }
    );
  }

}
