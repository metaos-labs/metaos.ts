import { DeliverTxResponse } from "@cosmjs/stargate";

export type BroadcastResult = DeliverTxResponse;

export interface ITransaction {
  transactionHash: string;
  description: string;
  status: Transaction_Status;
}

export enum Transaction_Status {
  Wallet = "wallet",
  Pending = "pending",
  Complete = "complete",
  Success = "success",
  Error = "error",
  Reject = "reject",
}

export function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}
