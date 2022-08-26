import { DeliverTxResponse } from "@cosmjs/stargate";
export declare type BroadcastResult = DeliverTxResponse;
export interface ITransaction {
    transactionHash: string;
    description: string;
    status: Transaction_Status;
}
export declare enum Transaction_Status {
    Wallet = "wallet",
    Pending = "pending",
    Complete = "complete",
    Success = "success",
    Error = "error",
    Reject = "reject"
}
export declare function longToNumber(long: Long): number;
