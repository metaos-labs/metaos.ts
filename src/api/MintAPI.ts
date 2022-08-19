import {BaseAPI} from "./BaseAPI";
import {
  QueryParamsResponse,
  QueryAnnualProvisionsResponse,
  QueryInflationResponse
} from "../proto/cosmos/mint/v1beta1/query";

export class MintAPI extends BaseAPI {
  public async inflation(): Promise<QueryInflationResponse> {
    return this.request.get<QueryInflationResponse>(
      `/cosmos/mint/v1beta1/inflation`,
    );
  }

  public async annualProvisions(): Promise<QueryAnnualProvisionsResponse> {
    return this.request.get<QueryAnnualProvisionsResponse>(
      `cosmos/mint/v1beta1/annual_provisions`,
    );
  }

  public async params(): Promise<QueryParamsResponse> {
    return this.request.get<QueryParamsResponse>(
      `/cosmos/mint/v1beta1/params`,
    );
  }

}
