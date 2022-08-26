import { Transaction_Status } from "../types";
export declare class TransactionLooper {
    transactionHash: string;
    description: string;
    status: Transaction_Status;
    counter: number;
    onTransactionSuccess: Function | undefined;
    constructor(txHash: string, description: string, status: Transaction_Status, onTransactionSuccess?: Function);
}
