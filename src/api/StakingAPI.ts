import {BaseAPI} from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryRedelegationsResponse, QueryValidatorResponse, QueryValidatorsResponse,
  QueryParamsResponse, QueryPoolResponse, QueryDelegationResponse, QueryUnbondingDelegationResponse
} from "../proto/cosmos/staking/v1beta1/query";

export class StakingAPI extends BaseAPI {
  public async delegations(
    delegator: string,
    params?: PaginationOptions
  ): Promise<QueryDelegatorDelegationsResponse> {
    return this.request.get<QueryDelegatorDelegationsResponse>(
      `/cosmos/staking/v1beta1/delegations/${delegator}`,
      { ...params }
    );
  }

  public async redelegations(
    delegator?: string,
    params?: PaginationOptions
  ): Promise<QueryRedelegationsResponse> {
    return this.request.get<QueryRedelegationsResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegator}/redelegations`,
      { ...params }
    );
  }

  public async unbondingDelegations(
    delegator?: string,
    params?: PaginationOptions
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return this.request.get<QueryDelegatorUnbondingDelegationsResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegator}/unbonding_redelegations`,
      { ...params }
    );
  }

  public async delegationsByValidator(
    delegator: string,
    validator: string,
    params?: PaginationOptions
  ): Promise<QueryDelegatorDelegationsResponse> {
    return this.request.get<QueryDelegatorDelegationsResponse>(
      `/cosmos/staking/v1beta1/delegations/${validator}`,
      { ...params }
    );
  }

  public async delegationsByDelegator(
    delegator: string,
    params?: PaginationOptions
  ): Promise<QueryValidatorsResponse> {
    return this.request.get<QueryValidatorsResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegator}/validators`,
      { ...params }
    );
  }

  public async delegationsByDelegatorValidator(
    delegator: string,
    validator: string,
    params?: PaginationOptions
  ): Promise<QueryValidatorsResponse> {
    return this.request.get<QueryValidatorsResponse>(
      `/cosmos/staking/v1beta1/delegators/${delegator}/validators/${validator}`,
      { ...params }
    );
  }

  public async validators(
    params?: PaginationOptions
  ): Promise<QueryValidatorsResponse> {
    return this.request.get<QueryValidatorsResponse>(
      `/cosmos/staking/v1beta1/validators`,
      { ...params }
    );
  }

  public async validatorsByValidator(
    validator: string
  ): Promise<QueryValidatorResponse> {
    return this.request.get<QueryValidatorResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}`,
    );
  }

  public async validatorsDelegationsByValidator(
    validator: string
  ): Promise<QueryDelegatorDelegationsResponse> {
    return this.request.get<QueryDelegatorDelegationsResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}/delegations`,
    );
  }

  public async validatorsDelegationsByValidatorDelegator(
    validator: string,
    delegator: string,
  ): Promise<QueryDelegationResponse> {
    return this.request.get<QueryDelegationResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}/delegations/${delegator}`,
    );
  }

  public async validatorsUnbondingDelegationsByValidatorDelegator(
    validator: string,
    delegator: string,
  ): Promise<QueryUnbondingDelegationResponse> {
    return this.request.get<QueryUnbondingDelegationResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}/delegations/${delegator}/unbonding_delegation`,
    );
  }

  public async validatorsUnbondingDelegations(
    validator: string,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return this.request.get<QueryDelegatorUnbondingDelegationsResponse>(
      `/cosmos/staking/v1beta1/validators/${validator}/unbonding_delegations`,
    );
  }

  public async pool(): Promise<QueryPoolResponse> {
    return this.request.get<QueryPoolResponse>(
      `/cosmos/staking/v1beta1/pool`,
    );
  }

  public async params(): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/cosmos/staking/v1beta1/params`,
    );
  }

}
