import { APIRequester, AuthAPI, AuthzAPI, BankAPI, DeflationAPI, GovAPI, MintAPI, PoolIncentiveAPI, SlashingAPI, StakingAPI, SwapAPI, TendermintAPI, TokenAPI, TxAPI, WasmAPI } from "../api";
import { Chain_Id } from "../constants";
export declare class APIClient {
    apiRequester: APIRequester;
    nodeUrl: string;
    authAPI: AuthAPI;
    authzAPI: AuthzAPI;
    bankAPI: BankAPI;
    deflationAPI: DeflationAPI;
    govAPI: GovAPI;
    mintAPI: MintAPI;
    poolIncentiveAPI: PoolIncentiveAPI;
    slashingAPI: SlashingAPI;
    stakingAPI: StakingAPI;
    swapAPI: SwapAPI;
    tendermintAPI: TendermintAPI;
    tokenAPI: TokenAPI;
    txAPI: TxAPI;
    wasmAPI: WasmAPI;
    constructor(URL: string, chainId?: Chain_Id);
}
