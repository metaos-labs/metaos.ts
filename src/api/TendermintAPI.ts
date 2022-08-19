import {BaseAPI} from "./BaseAPI";
import {DefaultNodeInfo} from "../proto/tendermint/p2p/types";
import {PaginationOptions} from "./APIRequester";
import {
  GetBlockByHeightResponse,
  GetLatestBlockResponse,
  GetLatestValidatorSetResponse,
  GetValidatorSetByHeightResponse
} from "../proto/cosmos/base/tendermint/v1beta1/query";

export class TendermintAPI extends BaseAPI {

  public async blockInfo(
    height?: number
  ): Promise<GetLatestBlockResponse | GetBlockByHeightResponse> {
    const url =
      height !== undefined
        ? `/cosmos/base/tendermint/v1beta1/blocks/${height}`
        : `/cosmos/base/tendermint/v1beta1/blocks/latest`;
    return this.request.get<GetLatestBlockResponse | GetBlockByHeightResponse>(
      url
    );
  }

  public async nodeInfo(): Promise<DefaultNodeInfo> {
    return this.request.get<DefaultNodeInfo>(
      `/cosmos/base/tendermint/v1beta1/node_info`,
    );
  }

  public async syncing(): Promise<boolean> {
    return this.request.get<boolean>(
      `/cosmos/base/tendermint/v1beta1/syncing`,
    );
  }

  public async validatorSet(
    height?: number,
    params?: PaginationOptions
  ): Promise<GetValidatorSetByHeightResponse | GetLatestValidatorSetResponse> {
    const url =
      height !== undefined
        ? `/cosmos/base/tendermint/v1beta1/validatorsets/${height}`
        : `/cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return this.request.get<GetValidatorSetByHeightResponse | GetLatestValidatorSetResponse>(
      url,
      {...params}
    );
  }

}
