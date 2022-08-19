import { ILiquidityPosition, IPool, IPoolPrice, IV3Reward } from "./ICommon";

export interface DenomUnit {
  denom: string;
  exponent?: number;
}

export interface IToken {
  chainId?: string;
  description?: string;
  denom_units?: Array<DenomUnit>;
  base: string;
  display_exponent: number;
  display?: string;
  name: string;
  symbol: string;
  total_supply?: string;
  logo_uri: string;
}

export interface ILiquidityTokenRender extends ILiquidityPosition {
  lpTokenName: string;
  price: string;
  priceLower: string;
  priceUpper: string;
  token0: IToken;
  token1: IToken;
  amount0: string;
  amount1: string;
  pool?: IPool;
  poolPrice: IPoolPrice;
  inRange: boolean;

  hasUnclaimedTokens: boolean;
  closed: boolean;
  priceFromSqrt?: string;

  rewards?: Array<IV3Reward>;
}
