import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import {
  BroadcastMode,
  BroadcastTxRequest,
  BroadcastTxResponse,
} from "../proto/cosmos/tx/v1beta1/service";

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

  public async txInfo(txHash: string): Promise<TxResponse> {
    return this.request.get<TxResponse>(`/cosmos/tx/v1beta1/txs/${txHash}`);
  }
}
