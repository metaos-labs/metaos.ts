import {BaseAPI} from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {QueryAllRepurchaseResponse, QueryGetRepurchaseResponse, QueryParamsResponse} from "../proto/deflation/query";

export class DeflationAPI extends BaseAPI {
  public async allRepurchase(
    params?: PaginationOptions
  ): Promise<QueryAllRepurchaseResponse> {
    return this.request.get<QueryAllRepurchaseResponse>(
      `/metaos-labs/metaos/deflation/repurchases`,
      { ...params }
    );
  }

  public async getRepurchase(
    denom: string,
  ): Promise<QueryGetRepurchaseResponse> {
    return this.request.get<QueryGetRepurchaseResponse>(
      `/metaos-labs/metaos/deflation/repurchases/${denom}`,
    );
  }

  public async params(): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/metaos-labs/metaos/deflation/params`,
    );
  }

}
