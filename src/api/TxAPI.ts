import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import {
  BroadcastTxRequest,
  BroadcastTxResponse,
  GetBlockWithTxsResponse,
  GetTxsEventRequest,
  GetTxsEventResponse, SimulateRequest, SimulateResponse,
} from "../proto/cosmos/tx/v1beta1/service";
import {PaginationOptions} from "./APIRequester";

export class TxAPI extends BaseAPI {

  public async simulate(params: SimulateRequest): Promise<SimulateResponse> {
    return this.request.post<SimulateResponse>(
    `/cosmos/tx/v1beta1/simulate`,
      params
    );
  }

  public async broadcast(tx: BroadcastTxRequest): Promise<BroadcastTxResponse> {
    return this.request.post<BroadcastTxResponse>(
      `/cosmos/tx/v1beta1/txs`,
      tx
    );
  }

  public async txBlock(
    height: number,
    params?: PaginationOptions
  ): Promise<GetBlockWithTxsResponse> {
    return this.request.get<GetBlockWithTxsResponse>(
      `/cosmos/tx/v1beta1/txs/block/${height}`,
      { ...params }
    );
  }

  public async txInfo(txHash: string): Promise<TxResponse> {
    return this.request.get<TxResponse>(`/cosmos/tx/v1beta1/txs/${txHash}`);
  }

  public async search(
    options: Partial<GetTxsEventRequest>
  ): Promise<GetTxsEventResponse> {
    return this.request.get<GetTxsEventResponse>(
      `cosmos/tx/v1beta1/txs`,
      { ...options }
    );
  }

}
