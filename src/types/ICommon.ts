import { IToken } from "./IToken";
import { Fee_Amount } from "../constants";

export interface ITickData {
  tick_idx: number;
  liquidity_gross: string;
  liquidity_net: string;
  price0: string;
  price1: string;
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export enum Bound {
  LOWER = "LOWER",
  UPPER = "UPPER",
}

export interface IFeeItem {
  label: string;
  value: Fee_Amount;
  description: string;
}

export enum Tip_Level {
  Info = "info",
  Warning = "warning",
  Error = "error",
}

export enum Swap_Direction {
  In = "exactIn",
  Out = "exactOut",
}

export enum Transaction_Status {
  Wallet = "wallet",
  Pending = "pending",
  Complete = "complete",
  Success = "success",
  Error = "error",
  Reject = "reject",
}

export interface ILiquidityPosition {
  token_id: string;
  address: string;
  liquidity: string;
  fee_growth_inside0_last: string;
  fee_growth_inside1_last: string;
  tokens_owed0: string;
  tokens_owed1: string;
  tick_lower: number;
  tick_upper: number;
  reward_growth_inside_lasts: Array<string>;
  reward_oweds: Array<string>;
}

export interface IPool {
  address: string;
  denom0: string;
  denom1: string;
  decimal0: number;
  decimal1: number;
  fee: number;
  tick_spacing: number;
  max_liquidity_per_tick: string;
}

export interface IV3RewardConfig {
  denom: string;
  mintable: boolean;
  operator: string;
  reward_growth_global: string;
  reward_per_second: string;
  vault: string;
  token?: IToken;
  reward_per_day?: string;
}

export interface IV3Reward extends IV3RewardConfig {
  amount: string;
  token?: IToken;
}

export interface IPoolPrice {
  address: string;
  tick: number;
  sqrt_price: string;
  liquidity: string;
  fee_growth_global0: string;
  fee_growth_global1: string;
  fee_protocol_owed0: string;
  fee_protocol_owed1: string;
  observation_index: number;
  observation_cardinality: number;
  observation_cardinality_next: number;
  reward_configs: Array<IV3RewardConfig>;
  reward_update_time_last: string;
}

export interface IPoolMetaData extends IPool, IPoolPrice {}
