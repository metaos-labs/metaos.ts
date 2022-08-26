import {BaseAPI} from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {
  QueryAllLiquidityPoolRewardResponse,
  QueryAllLiquidityRewardConfigResponse,
  QueryAllLiquidityRewardDenomResponse,
  QueryAllRandSwapAccountRewardResponse,
  QueryAllRandSwapPoolRewardResponse,
  QueryAllRandSwapRewardConfigResponse,
  QueryAllRandSwapRewardDenomResponse, QueryAllRandSwapRewardRevealResponse,
  QueryGetLiquidityPoolRewardResponse,
  QueryGetLiquidityRewardConfigResponse,
  QueryGetLiquidityRewardDenomResponse,
  QueryGetRandSwapAccountRewardResponse,
  QueryGetRandSwapPoolRewardResponse,
  QueryGetRandSwapRewardConfigResponse,
  QueryGetRandSwapRewardDenomResponse, QueryGetRandSwapRewardRevealResponse,
  QueryParamsResponse
} from "../proto/pool-incentives/query";

export class PoolIncentive extends BaseAPI {
  public async allLiquidityPoolReward(
    params?: PaginationOptions
  ): Promise<QueryAllLiquidityPoolRewardResponse> {
    return this.request.get<QueryAllLiquidityPoolRewardResponse>(
      `/metaos-labs/metaos/pool-incentives/liquidity_pool_rewards`,
      { ...params }
    );
  }

  public async getLiquidityPoolReward(
    address: string,
  ): Promise<QueryGetLiquidityPoolRewardResponse> {
    return this.request.get<QueryGetLiquidityPoolRewardResponse>(
      `/metaos-labs/metaos/pool-incentives/liquidity_pool_rewards/${address}`,
    );
  }

  public async allLiquidityRewardConfig(
    params?: PaginationOptions
  ): Promise<QueryAllLiquidityRewardConfigResponse> {
    return this.request.get<QueryAllLiquidityRewardConfigResponse>(
      `/metaos-labs/metaos/pool-incentives/liquidity_reward_configs`,
      { ...params }
    );
  }

  public async getLiquidityRewardConfig(
    id: string
  ): Promise<QueryGetLiquidityRewardConfigResponse> {
    return this.request.get<QueryGetLiquidityRewardConfigResponse>(
      `/metaos-labs/metaos/pool-incentives/liquidity_reward_configs/${id}`,
    );
  }

  public async allLiquidityRewardDenomR(
    params?: PaginationOptions
  ): Promise<QueryAllLiquidityRewardDenomResponse> {
    return this.request.get<QueryAllLiquidityRewardDenomResponse>(
      `/metaos-labs/metaos/pool-incentives/liquidity_reward_denoms`,
      { ...params }
    );
  }

  public async getLiquidityRewardDenom(
    denom: string
  ): Promise<QueryGetLiquidityRewardDenomResponse> {
    return this.request.get<QueryGetLiquidityRewardDenomResponse>(
      `/metaos-labs/metaos/pool-incentives/liquidity_reward_denoms/by_denom`,
      {
        denom
      }
    );
  }

  public async params(): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/metaos-labs/metaos/pool-incentives/params`,
    );
  }

  public async allRandSwapAccountReward(
    params?: PaginationOptions
  ): Promise<QueryAllRandSwapAccountRewardResponse> {
    return this.request.get<QueryAllRandSwapAccountRewardResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_account_rewards`,
      { ...params }
    );
  }

  public async getRandSwapAccountReward(
    account: string,
    denom: string
  ): Promise<QueryGetRandSwapAccountRewardResponse> {
    return this.request.get<QueryGetRandSwapAccountRewardResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_account_rewards/${account}/by_denom`,
      {
        denom
      }
    );
  }

  public async allRandSwapPoolReward(
    params?: PaginationOptions
  ): Promise<QueryAllRandSwapPoolRewardResponse> {
    return this.request.get<QueryAllRandSwapPoolRewardResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_pool_rewards`,
      { ...params }
    );
  }

  public async getRandSwapPoolReward(
    address: string,
  ): Promise<QueryGetRandSwapPoolRewardResponse> {
    return this.request.get<QueryGetRandSwapPoolRewardResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_pool_rewards/${address}`,
    );
  }

  public async allRandSwapRewardConfig(
    params?: PaginationOptions
  ): Promise<QueryAllRandSwapRewardConfigResponse> {
    return this.request.get<QueryAllRandSwapRewardConfigResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_reward_configs`,
      { ...params }
    );
  }

  public async getRandSwapRewardConfig(
    id: string
  ): Promise<QueryGetRandSwapRewardConfigResponse> {
    return this.request.get<QueryGetRandSwapRewardConfigResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_reward_configs/${id}`,
    );
  }

  public async allRandSwapRewardDenom(
    params?: PaginationOptions
  ): Promise<QueryAllRandSwapRewardDenomResponse> {
    return this.request.get<QueryAllRandSwapRewardDenomResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_reward_denoms`,
      { ...params }
    );
  }

  public async getRandSwapRewardDenom(
    denom: string
  ): Promise<QueryGetRandSwapRewardDenomResponse> {
    return this.request.get<QueryGetRandSwapRewardDenomResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_reward_denoms/by_denom`,
      {
        denom
      }
    );
  }

  public async allRandSwapRewardReveal(
    params?: PaginationOptions
  ): Promise<QueryAllRandSwapRewardRevealResponse> {
    return this.request.get<QueryAllRandSwapRewardRevealResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_reward_reveals`,
      { ...params }
    );
  }

  public async getRandSwapRewardReveal(
    configId: number,
    round: number
  ): Promise<QueryGetRandSwapRewardDenomResponse> {
    return this.request.get<QueryGetRandSwapRewardDenomResponse>(
      `/metaos-labs/metaos/pool-incentives/rand_swap_reward_reveals/${configId}/${round}`
    );
  }

}
