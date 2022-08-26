import { BaseAPI } from "./BaseAPI";
import { TxResponse } from "../proto/cosmos/base/abci/v1beta1/abci";
import { BroadcastTxRequest, BroadcastTxResponse, GetBlockWithTxsResponse, GetTxsEventRequest, GetTxsEventResponse, SimulateRequest, SimulateResponse } from "../proto/cosmos/tx/v1beta1/service";
import { PaginationOptions } from "./APIRequester";
export declare class TxAPI extends BaseAPI {
    simulate(params: SimulateRequest): Promise<SimulateResponse>;
    broadcast(tx: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    txBlock(height: number, params?: PaginationOptions): Promise<GetBlockWithTxsResponse>;
    txInfo(txHash: string): Promise<TxResponse>;
    search(options: Partial<GetTxsEventRequest>): Promise<GetTxsEventResponse>;
}
