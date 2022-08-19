import { BaseAPI } from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {QueryGrantsResponse} from "../proto/cosmos/authz/v1beta1/query";

export class AuthzAPI extends BaseAPI {
  public async grants(
    granter: string,
    grantee: string,
    msgTypeUrl?: string,
    params?: PaginationOptions
  ): Promise<QueryGrantsResponse> {
    return this.request.get<QueryGrantsResponse>(
      `/cosmos/authz/v1beta1/grants`,
      {
        granter,
        grantee,
        msg_type_url: msgTypeUrl,
        ...params
      }
    );
  }
}
