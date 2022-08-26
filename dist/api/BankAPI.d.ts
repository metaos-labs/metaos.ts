import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryAllBalancesResponse, QueryBalanceResponse, QuerySupplyOfResponse, QueryTotalSupplyResponse } from "../proto/cosmos/bank/v1beta1/query";
export declare class BankAPI extends BaseAPI {
    allBalances(accountAddress: string, params?: PaginationOptions): Promise<QueryAllBalancesResponse>;
    balance(denom: string, accountAddress: string): Promise<QueryBalanceResponse>;
    totalSupply(params?: PaginationOptions): Promise<QueryTotalSupplyResponse>;
    supplyOf(denom: string): Promise<QuerySupplyOfResponse>;
}
