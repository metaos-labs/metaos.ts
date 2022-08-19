import { BaseAPI } from "./BaseAPI";
import { IToken } from "../types";
import {PaginationOptions} from "./APIRequester";
import {Balance} from "../proto/cosmos/bank/v1beta1/genesis";
import {
  QueryAllBalancesResponse,
  QueryBalanceResponse,
  QueryDenomMetadataResponse, QuerySupplyOfResponse,
  QueryTotalSupplyResponse,
} from "../proto/cosmos/bank/v1beta1/query";
import {QueryAllMetadataResponse} from "../proto/token/query";

export class BankAPI extends BaseAPI {
  public async balances(
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

  public async balancesByDenom(
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

  public async denomsMetadata(
    params?: PaginationOptions
  ): Promise<QueryAllMetadataResponse> {
    return this.request.get<QueryAllMetadataResponse>(
      `/cosmos/bank/v1beta1/denoms_metadata`,
      { ...params }
    );
  }

  public async denomsMetadataByDenom(
    denom: string
  ): Promise<QueryDenomMetadataResponse> {
    return this.request.get<QueryDenomMetadataResponse>(
      `/cosmos/bank/v1beta1/denoms_metadata/${denom}`
    );
  }

  public async supply(params?: PaginationOptions): Promise<QueryTotalSupplyResponse> {
    return this.request.get<QueryTotalSupplyResponse>(
      `/cosmos/bank/v1beta1/supply`,
      { ...params }
    );
  }

  public async supplyByDenom(
    denom: string
  ): Promise<QuerySupplyOfResponse> {
    return this.request.get<QuerySupplyOfResponse>(
      `/cosmos/bank/v1beta1/supply/${denom}`
    );
  }
}
