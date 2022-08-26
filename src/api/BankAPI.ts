import { BaseAPI } from "./BaseAPI";
import { IToken } from "../types";
import {PaginationOptions} from "./APIRequester";
import {Balance} from "../proto/cosmos/bank/v1beta1/genesis";
import {
  QueryAllBalancesResponse,
  QueryBalanceResponse,
  QueryDenomMetadataResponse, QueryDenomsMetadataResponse,
  QuerySupplyOfResponse,
  QueryTotalSupplyResponse,
} from "../proto/cosmos/bank/v1beta1/query";
import {QueryAllMetadataResponse} from "../proto/token/query";

export class BankAPI extends BaseAPI {
  public async allBalances(
    accountAddress: string,
    params?: PaginationOptions
  ): Promise<QueryAllBalancesResponse> {
    return this.request.get<QueryAllBalancesResponse>(
      `/cosmos/bank/v1beta1/balances/${accountAddress}`,
      {
        ...params
      }
    );
  }

  public async balance(
    denom: string,
    accountAddress: string,
  ): Promise<QueryBalanceResponse> {
    return this.request.get<QueryBalanceResponse>(
      `/cosmos/bank/v1beta1/balances/${accountAddress}/by_denom`,
      {
        denom: denom,
      }
    );
  }

  public async totalSupply(params?: PaginationOptions): Promise<QueryTotalSupplyResponse> {
    return this.request.get<QueryTotalSupplyResponse>(
      `/cosmos/bank/v1beta1/supply`,
      { ...params }
    );
  }

  public async supplyOf(
    denom: string
  ): Promise<QuerySupplyOfResponse> {
    return this.request.get<QuerySupplyOfResponse>(
      `/cosmos/bank/v1beta1/supply/${denom}`
    );
  }
}
