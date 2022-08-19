import { BaseAPI } from "./BaseAPI";

export interface IResAccountInfo {
  account: {
    "@type": string;
    base_account: {
      address: string;
      pub_key: {
        "@type": string;
        key: string;
      };
      account_number: string;
      sequence: string;
    };
    code_hash: string;
  };
}

export class AuthAPI extends BaseAPI {
  public async accounts(
    accountAddress: string,
  ): Promise<IResAccountInfo> {
    return this.request.get<IResAccountInfo>(
      `/cosmos/auth/v1beta1/accounts/${accountAddress}`
    );
  }
}
