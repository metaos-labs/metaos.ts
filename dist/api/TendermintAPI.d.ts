import { BaseAPI } from "./BaseAPI";
import { DefaultNodeInfo } from "../proto/tendermint/p2p/types";
import { PaginationOptions } from "./APIRequester";
import { GetBlockByHeightResponse, GetLatestBlockResponse, GetLatestValidatorSetResponse, GetValidatorSetByHeightResponse } from "../proto/cosmos/base/tendermint/v1beta1/query";
export declare class TendermintAPI extends BaseAPI {
    blockInfo(height?: number): Promise<GetLatestBlockResponse | GetBlockByHeightResponse>;
    nodeInfo(): Promise<DefaultNodeInfo>;
    syncing(): Promise<boolean>;
    validatorSet(height?: number, params?: PaginationOptions): Promise<GetValidatorSetByHeightResponse | GetLatestValidatorSetResponse>;
}
