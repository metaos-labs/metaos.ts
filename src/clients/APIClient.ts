import {
  APIRequester,
  AuthAPI,
  AuthzAPI,
  BankAPI,
  DeflationAPI,
  GovAPI,
  MintAPI,
  PoolIncentiveAPI,
  SlashingAPI,
  StakingAPI,
  SwapAPI,
  TendermintAPI,
  TokenAPI,
  TxAPI,
  WasmAPI
} from "../api";
import {Chain_Id} from "../constants";

export class APIClient {
  public apiRequester: APIRequester;
  public nodeUrl: string;

  // API access
  public authAPI: AuthAPI;
  public authzAPI: AuthzAPI;
  public bankAPI: BankAPI;
  public deflationAPI: DeflationAPI;
  public govAPI: GovAPI;
  public mintAPI: MintAPI;
  public poolIncentiveAPI: PoolIncentiveAPI;
  public slashingAPI: SlashingAPI;
  public stakingAPI: StakingAPI;
  public swapAPI: SwapAPI;
  public tendermintAPI: TendermintAPI;
  public tokenAPI: TokenAPI;
  public txAPI: TxAPI;
  public wasmAPI: WasmAPI;

  constructor(URL: string, chainId: Chain_Id = Chain_Id.Mainnet) {
    this.nodeUrl = URL;
    this.apiRequester = new APIRequester(URL);

    // instantiate APIs
    this.authAPI = new AuthAPI(this.apiRequester);
    this.authzAPI = new AuthzAPI(this.apiRequester);
    this.bankAPI = new BankAPI(this.apiRequester);
    this.deflationAPI = new DeflationAPI(this.apiRequester);
    this.govAPI = new GovAPI(this.apiRequester);
    this.mintAPI = new MintAPI(this.apiRequester);
    this.poolIncentiveAPI = new PoolIncentiveAPI(this.apiRequester);
    this.slashingAPI = new SlashingAPI(this.apiRequester);
    this.stakingAPI = new StakingAPI(this.apiRequester);
    this.swapAPI = new SwapAPI(this.apiRequester);
    this.tendermintAPI = new TendermintAPI(this.apiRequester);
    this.tokenAPI = new TokenAPI(this.apiRequester);
    this.txAPI = new TxAPI(this.apiRequester);
    this.wasmAPI = new WasmAPI(this.apiRequester);
  }
}
