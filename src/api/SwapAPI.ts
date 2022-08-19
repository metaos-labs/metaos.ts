import { BaseAPI } from "./BaseAPI";
import { ILiquidityPosition, IPool, IPoolPrice } from "../types";
import qs from 'qs';

export interface IResPoolInfo {
  pool: IPool;
  pool_slot0: IPoolPrice;
}

export interface IResPoolMetadataNew {
  [pool: string]: IPool;
}

export interface IFarmV3 {
  address: string;
}

export interface IResFarmList {
  core_pools: Array<IFarmV3>;
  pagination: {
    next_key: null | string;
    total: string;
  };
}

export interface IResLiquidityPositionList {
  liquidity_positions: Array<ILiquidityPosition>;
}

export class SwapAPI extends BaseAPI {
  /**
   * find pool list by address array
   * @param addresses
   */
  public async apiPoolListByAddresses(
    addresses: Array<string>
  ): Promise<{ pool_slot0_aggregations: Array<IResPoolInfo> }> {
    const params = qs.stringify({ addresses }, { indices: false });
    return this.request.get<{ pool_slot0_aggregations: Array<IResPoolInfo> }>(
      `/metaos-labs/metaos/swap/pool_slot0_aggregations?${params}`,
    );
  }

  public async apiPoolMetadataByAddress(
    address: string
  ): Promise<IResPoolMetadataNew> {
    return this.request.get<IResPoolMetadataNew>(
      `/metaos-labs/metaos/swap/pools/${address}`
    );
  }

  public async apiPoolMetadataPriceByAddress(
    address: string
  ): Promise<{ pool_slot0: IPoolPrice }> {
    return this.request.get<{ pool_slot0: IPoolPrice }>(
      `/metaos-labs/metaos/swap/pools/${address}/slot0`
    );
  }

  public async apiLiquidityPositionById(
    tokenId: string
  ): Promise<{ liquidity_position: ILiquidityPosition }> {
    return this.request.get<{ liquidity_position: ILiquidityPosition }>(
      `/metaos-labs/metaos/swap/liquidity_positions/${tokenId}`
    );
  }

  public async apiLiquidityRewardsByIds(
    tokenIds: Array<string>
  ): Promise<{ liquidity_positions: Array<ILiquidityPosition> }> {
    const params = qs.stringify({ tokenIds }, { indices: false });
    return this.request.get<{ liquidity_positions: Array<ILiquidityPosition> }>(
      `/metaos-labs/metaos/swap/liquidity_position_by_ids?${params}`
    );
  }

  public async apiTickImagePath(tokenId: string): Promise<{ uri: string }> {
    return this.request.get<{ uri: string }>(
      `/metaos-labs/metaos/swap/liquidity_positions/${tokenId}/token_uri`
    );
  }

  public async apiActiveFarmList(): Promise<IResFarmList> {
    return this.request.get<IResFarmList>(
      `/metaos-labs/metaos/swap/core_pools`
    );
  }

  public async apiLiquidityPositionList(
    accountAddress: string,
    skip_zero_liquidity: boolean
  ): Promise<IResLiquidityPositionList> {
    return this.request.get<IResLiquidityPositionList>(
      `/metaos-labs/metaos/swap/liquidity_positions_owner/${accountAddress}`,
      {
        skip_zero_liquidity
      }
    );
  }
}
