import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import {
  BroadcastMode,
  BroadcastTxRequest,
  BroadcastTxResponse,
  GetBlockWithTxsResponse,
  GetTxsEventResponse,
} from "../proto/cosmos/tx/v1beta1/service";
import {PaginationOptions} from "./APIRequester";

export interface TxSearchOptions extends PaginationOptions {
  events: { key: string; value: string }[];
}

export interface IResEstimateGas {
  gas_info: {
    gas_wanted: string;
    gas_used: string;
  };
  result: {
    data: string;
    log: string;
    events: { type: string; attributes: { key: string; value: string }[] }[];
  };
}

export class TxAPI extends BaseAPI {
  public async estimateGas(
    txBytes: string,
  ): Promise<IResEstimateGas> {
    return this.request.post<IResEstimateGas>(`/cosmos/tx/v1beta1/simulate`, {
      tx_bytes: txBytes
    });
  }

  private async _broadcast<T>(
    tx: BroadcastTxRequest,
    mode: keyof typeof BroadcastMode
  ): Promise<T> {
    return this.request.post<any>(`/cosmos/tx/v1beta1/txs`);
  }

  public async broadcast(tx: BroadcastTxRequest): Promise<BroadcastTxResponse> {
    return this._broadcast<BroadcastTxResponse>(tx, "BROADCAST_MODE_BLOCK");
  }

  public async txBlock(
    height: number,
    params?: PaginationOptions
  ): Promise<GetBlockWithTxsResponse> {
    return this.request.get<GetBlockWithTxsResponse>(`/cosmos/tx/v1beta1/txs/block/${height}`);
  }

  public async txInfo(txHash: string): Promise<TxResponse> {
    return this.request.get<TxResponse>(`/cosmos/tx/v1beta1/txs/${txHash}`);
  }

  public async search(
    options: Partial<TxSearchOptions>
  ): Promise<GetTxsEventResponse> {
    return this.request.get<GetTxsEventResponse>(`cosmos/tx/v1beta1/txs`);
  }
}
