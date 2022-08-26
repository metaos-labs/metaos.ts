import { ILiquidityPosition, IPool, IPoolPrice, IV3Reward } from './pool';

export interface DenomUnit {
  denom: string;
  exponent?: number;
}

export interface Token {
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
  token0: Token;
  token1: Token;
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
