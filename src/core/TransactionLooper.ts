import { Transaction_Status } from "../types";

export class TransactionLooper {
  transactionHash: string;
  description: string;
  status: Transaction_Status;
  counter: number;
  onTransactionSuccess: Function | undefined;

  constructor(
    txHash: string,
    description: string,
    status: Transaction_Status,
    onTransactionSuccess?: Function
  ) {
    this.transactionHash = txHash;
    this.description = description;
    this.status = status;
    this.counter = 0;
    this.onTransactionSuccess = onTransactionSuccess;
  }
}
