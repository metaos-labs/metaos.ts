import { BaseAPI } from "./BaseAPI";
import { QueryParamsResponse, QueryAnnualProvisionsResponse, QueryInflationResponse } from "../proto/cosmos/mint/v1beta1/query";
export declare class MintAPI extends BaseAPI {
    inflation(): Promise<QueryInflationResponse>;
    annualProvisions(): Promise<QueryAnnualProvisionsResponse>;
    params(): Promise<QueryParamsResponse>;
}
