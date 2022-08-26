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
export declare class AuthAPI extends BaseAPI {
    accounts(accountAddress: string): Promise<IResAccountInfo>;
}
