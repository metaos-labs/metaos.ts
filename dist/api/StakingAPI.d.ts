import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsResponse, QueryValidatorResponse, QueryValidatorsResponse, QueryParamsResponse, QueryPoolResponse, QueryDelegationResponse, QueryUnbondingDelegationResponse } from "../proto/cosmos/staking/v1beta1/query";
export declare class StakingAPI extends BaseAPI {
    delegations(delegator: string, params?: PaginationOptions): Promise<QueryDelegatorDelegationsResponse>;
    redelegations(delegator?: string, params?: PaginationOptions): Promise<QueryRedelegationsResponse>;
    unbondingDelegations(delegator?: string, params?: PaginationOptions): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    delegatorDelegations(delegator: string, validator: string, params?: PaginationOptions): Promise<QueryDelegatorDelegationsResponse>;
    delegationsByDelegator(delegator: string, params?: PaginationOptions): Promise<QueryValidatorsResponse>;
    delegationsByDelegatorValidator(delegator: string, validator: string, params?: PaginationOptions): Promise<QueryValidatorsResponse>;
    validators(params?: PaginationOptions): Promise<QueryValidatorsResponse>;
    validatorsByValidator(validator: string): Promise<QueryValidatorResponse>;
    validatorsDelegationsByValidator(validator: string): Promise<QueryDelegatorDelegationsResponse>;
    validatorsDelegationsByValidatorDelegator(validator: string, delegator: string): Promise<QueryDelegationResponse>;
    validatorsUnbondingDelegationsByValidatorDelegator(validator: string, delegator: string): Promise<QueryUnbondingDelegationResponse>;
    validatorsUnbondingDelegations(validator: string): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    pool(): Promise<QueryPoolResponse>;
    params(): Promise<QueryParamsResponse>;
}
