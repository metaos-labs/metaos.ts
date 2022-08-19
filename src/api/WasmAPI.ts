import {BaseAPI} from "./BaseAPI";
import {PaginationOptions} from "./APIRequester";
import {
  QueryCodeResponse,
  QueryCodesResponse,
  QueryContractInfoResponse,
  QueryContractsByCodeResponse
} from "../proto/cosmwasm/wasm/v1/query";

export class WasmAPI extends BaseAPI {
  public async code(
    params?: PaginationOptions
  ): Promise<QueryCodesResponse> {
    return this.request.get<QueryCodesResponse>(
      `/cosmwasm/wasm/v1/code`,
      { ...params }
    );
  }

  public async codeInfo(
    codeID: number
  ): Promise<QueryCodeResponse> {
    return this.request.get<QueryCodeResponse>(
      `/cosmwasm/wasm/v1/code/${codeID}`,
    );
  }

  public async contractsByCode(
    codeID: number,
    params?: PaginationOptions
  ): Promise<QueryContractsByCodeResponse> {
    return this.request.get<QueryContractsByCodeResponse>(
      `/cosmwasm/wasm/v1/code/${codeID}/contracts`,
      { ...params }
    );
  }

  public async contractInfo(
    contractAddress: string,
  ): Promise<QueryContractInfoResponse> {
    return this.request.get<QueryContractInfoResponse>(
      `/cosmwasm/wasm/v1/contract/${contractAddress}`,
    );
  }

}
