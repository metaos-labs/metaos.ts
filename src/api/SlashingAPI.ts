import {BaseAPI} from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {
  QueryParamsResponse,
  QuerySigningInfoResponse,
  QuerySigningInfosResponse
} from "../proto/cosmos/slashing/v1beta1/query";

export class SlashingAPI extends BaseAPI {
  public async signingInfos(
    params?: PaginationOptions
  ): Promise<QuerySigningInfosResponse> {
    return this.request.get<QuerySigningInfosResponse>(
      `/cosmos/slashing/v1beta1/signing_infos`,
      { ...params }
    );
  }

  public async signingInfo(
    valConsAddress: string,
  ): Promise<QuerySigningInfoResponse> {
    return this.request.get<QuerySigningInfoResponse>(
      `/cosmos/slashing/v1beta1/signing_infos/${valConsAddress}`,
    );
  }

  public async params(): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/cosmos/slashing/v1beta1/params`,
    );
  }

}
