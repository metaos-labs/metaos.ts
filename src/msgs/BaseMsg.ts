import { EncodeObject, TxBodyEncodeObject } from "@cosmjs/proto-signing";

export abstract class BaseMsg {
  constructor() {}
  public abstract generateMessage(): EncodeObject;
}
