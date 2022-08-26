import { BaseAPI } from "./BaseAPI";
import { PaginationOptions } from "./APIRequester";
import { QueryCodeResponse, QueryCodesResponse, QueryContractInfoResponse, QueryContractsByCodeResponse } from "../proto/cosmwasm/wasm/v1/query";
export declare class WasmAPI extends BaseAPI {
    codes(params?: PaginationOptions): Promise<QueryCodesResponse>;
    code(codeID: number): Promise<QueryCodeResponse>;
    contractsByCode(codeID: number, params?: PaginationOptions): Promise<QueryContractsByCodeResponse>;
    contractInfo(contractAddress: string): Promise<QueryContractInfoResponse>;
}
