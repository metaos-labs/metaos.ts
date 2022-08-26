import { BaseMsg } from "./BaseMsg";
import { EncodeObject } from "@cosmjs/proto-signing";
import {
  protobufPackage,
  MsgStoreCode as MsgStoreCode_pb,
} from "../proto/cosmwasm/wasm/v1/tx";

export class MsgStoreCode extends BaseMsg {
  public protoMsg: MsgStoreCode_pb;
  constructor(msg: MsgStoreCode_pb) {
    super();
    this.protoMsg = msg;
  }
  generateMessage(): EncodeObject {
    return {
      typeUrl: MsgStoreCode.typeUrl,
      value: MsgStoreCode_pb.fromPartial(this.protoMsg),
    };
  }
}

export namespace MsgStoreCode {
  export const typeUrl: string = `/${protobufPackage}.MsgStoreCode`;
  export const Proto = MsgStoreCode_pb;
  export interface Proto extends MsgStoreCode_pb {}
}


