import { BaseAPI } from "./BaseAPI";
import {DenomUnit, Metadata} from "../proto/cosmos/bank/v1beta1/bank";
import {MetadataExt} from "../proto/token/token";

export interface IMetadata extends Metadata{
  denom_units: DenomUnit[];
}

export interface IMetadataExt extends MetadataExt{
  max_supply: string;
}

interface QueryMetadataResponse {
  metadata?: IMetadata;
  metadata_ext?: IMetadataExt;
  supply: string;
}

export class TokenAPI extends BaseAPI {

  public async apiTokenMetadatasByDenom(
    denom: string
  ): Promise<QueryMetadataResponse> {
    return this.request.get<QueryMetadataResponse>(
      `/metaos-labs/metaos/token/metadatas/by_denom`,
      {
        denom
      }
    );
  }

  public async apiTokenMetadatas(): Promise<Array<Metadata>> {
    return this.request.get<Array<Metadata>>(
      `/metaos-labs/metaos/token/metadatas`
    );
  }

}
