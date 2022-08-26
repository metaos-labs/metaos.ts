import { BaseAPI } from "./BaseAPI";
import {DenomUnit, Metadata} from "../proto/cosmos/bank/v1beta1/bank";
import {MetadataExt} from "../proto/token/token";
import {
  QueryAllMetadataResponse,
  QueryAllOwnershipConfirmationResponse,
  QueryGetMetadataResponse, QueryGetOwnershipConfirmationResponse
} from "../proto/token/query";
import {PaginationOptions} from "./APIRequester";

export class TokenAPI extends BaseAPI {

  public async allMetadata(
    params?: PaginationOptions
  ): Promise<QueryAllMetadataResponse> {
    return this.request.get<QueryAllMetadataResponse>(
      `/metaos-labs/metaos/token/metadatas`,
      { ...params }
    );
  }

  public async getMetadata(
    denom: string
  ): Promise<QueryGetMetadataResponse> {
    return this.request.get<QueryGetMetadataResponse>(
      `/metaos-labs/metaos/token/metadatas/by_denom`,
      {
        denom
      }
    );
  }

  public async allOwnershipConfirmation(
    params?: PaginationOptions
  ): Promise<QueryAllOwnershipConfirmationResponse> {
    return this.request.get<QueryAllOwnershipConfirmationResponse>(
      `/metaos-labs/metaos/token/ownership_confirmations`,
      { ...params }
    );
  }

  public async getOwnershipConfirmation(
    denom: string
  ): Promise<QueryGetOwnershipConfirmationResponse> {
    return this.request.get<QueryGetOwnershipConfirmationResponse>(
      `/metaos-labs/metaos/token/ownership_confirmations/by_denom`,
      {
        denom
      }
    );
  }

}
