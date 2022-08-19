import { DeliverTxResponse } from "@cosmjs/stargate";
import { Transaction_Status } from "./ICommon";

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type BroadcastResult = DeliverTxResponse;

export interface ITransaction {
  transactionHash: string;
  description: string;
  status: Transaction_Status;
}

export function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
